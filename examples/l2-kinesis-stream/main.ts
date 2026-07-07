import { Construct } from "constructs";
import { App, LocalBackend, TerraformOutput, TerraformProviderFunction, TerraformStack, Testing } from "cdktn";
import { AwsProvider } from "./.gen/providers/aws/provider";
import { DataAwsRegion } from "./.gen/providers/aws/data-aws-region";
import { AwsccProvider } from "./.gen/providers/awscc/provider";
import { KinesisStream } from "./.gen/providers/awscc/kinesis-stream";
import { CfncompatProvider } from "./.gen/providers/cfncompat/provider";
import { CfncompatProviderFunctions } from "./.gen/providers/cfncompat/provider-functions";

/**
 * Port of aws-kinesis.Stream's default-encryption logic
 * (aws-cdk-lib/aws-kinesis/lib/stream.ts:985-1008, `parseEncryption()`) onto a
 * generated `awscc_kinesis_stream` resource + cfncompat's condition_* polyfills.
 *
 * The original CDK code, when no explicit `encryption`/`encryptionKey` is given,
 * defaults to KMS encryption everywhere except cn-north-1/cn-northwest-1 (where
 * KMS-encrypted streams aren't supported), expressed as:
 *
 *   new CfnCondition(stack, name, {
 *     expression: Fn.conditionOr(
 *       Fn.conditionEquals(Aws.REGION, 'cn-north-1'),
 *       Fn.conditionEquals(Aws.REGION, 'cn-northwest-1'),
 *     ),
 *   });
 *   streamEncryption: Fn.conditionIf(name, Aws.NO_VALUE, { EncryptionType: 'KMS', KeyId: 'alias/aws/kinesis' })
 *
 * `Aws.REGION` is CFN's `${AWS::Region}` pseudo-parameter, resolved by the
 * CloudFormation engine at deploy time -- its Terraform-native equivalent is the
 * `aws_region` data source, kept dynamic here (not hardcoded at synth time) to
 * preserve the same "resolved by the backend, not by CDK" laziness. `Aws.NO_VALUE`
 * (CFN's "omit this property") has no Terraform analog, and in practice can't even
 * be approximated with a literal `null`: `TerraformProviderFunction.invoke(...)`
 * validates its whole `args` array with the same `variadic(anyValue)` validator
 * used for genuinely variadic argument lists (e.g. `condition_and`/`condition_or`'s
 * `conditions`), and that validator's `listOf()` unconditionally filters out
 * `null`/`undefined` *entries* -- appropriate for a variadic list, but wrong when
 * applied to a fixed-arity call like `condition_if(condition, value_if_true,
 * value_if_false)`: passing `null` for `value_if_true` silently drops it from the
 * argument list instead of preserving its positional slot, and Terraform then
 * rejects the call for having too few arguments. Confirmed via `terraform plan`
 * (`Error: Not enough function arguments`). This is a cdktn runtime bug, not a
 * cfncompat provider bug -- worth reporting upstream alongside the `conditionIf`
 * struct-coercion gap below. Using `{}` (an empty `streamEncryption` struct) for
 * the "unsupported region" branch sidesteps it; it's not a perfect match for
 * CFN's property-omission semantics, but is the closest expressible result today.
 */
class L2KinesisStreamStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new LocalBackend(this, { path: "terraform.tfstate" });

    const region = process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION || "us-east-1";
    const profile = process.env.AWS_ACCESS_KEY_ID ? undefined : process.env.AWS_PROFILE || "tcons-hermes";

    new AwsProvider(this, "aws", {
      region,
      profile,
      skipCredentialsValidation: true,
      skipRequestingAccountId: true,
      skipMetadataApiCheck: "true",
    });
    new AwsccProvider(this, "awscc", { region, profile });
    new CfncompatProvider(this, "cfncompat", {});

    const currentRegion = new DataAwsRegion(this, "current", {});

    const isUnsupportedRegion = CfncompatProviderFunctions.conditionOr([
      CfncompatProviderFunctions.conditionEquals(currentRegion.region, "cn-north-1"),
      CfncompatProviderFunctions.conditionEquals(currentRegion.region, "cn-northwest-1"),
    ]);

    const stream = new KinesisStream(this, "stream", {
      name: "cdktn-l2-port-demo-stream",
      shardCount: 1,
      // The generated `CfncompatProviderFunctions.conditionIf(...)` binding forces its
      // result through `Token.asString(...)`, which is correct for Fn::If's common
      // string-return case but breaks struct-typed targets like `streamEncryption`:
      // `Tokenization.isResolvable()` doesn't recognize a string-wrapped token, so the
      // struct setter silently treats it as an all-undefined object and drops the
      // attribute entirely (confirmed: `terraform plan` synthesizes no `stream_encryption`
      // key at all with the generated binding). `Fn::If`/`condition_if` is documented as
      // dynamically-typed (RFC 004 §4), so this is a binding-generation gap worth
      // reporting upstream, not a cfncompat provider bug. Calling
      // `TerraformProviderFunction.invoke` directly bypasses the lossy wrapper and
      // preserves the real `IResolvable`, which the struct setter handles correctly.
      streamEncryption: TerraformProviderFunction.invoke("cfncompat", "condition_if", [
        isUnsupportedRegion,
        {},
        { encryption_type: "KMS", key_id: "alias/aws/kinesis" },
      ]) as any,
    });

    new TerraformOutput(this, "region_name", { value: currentRegion.region });
    new TerraformOutput(this, "stream_name", { value: stream.name });
  }
}

const app = Testing.stubVersion(new App({ stackTraces: false }));
new L2KinesisStreamStack(app, "l2-kinesis-stream");
app.synth();
