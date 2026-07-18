import { Construct } from "constructs";
import { App, LocalBackend, Token, TerraformOutput, TerraformStack, Testing } from "cdktn";
import { AwsccProvider } from "./.gen/providers/awscc/provider/index.ts";
import { SecretsmanagerSecret } from "./.gen/providers/awscc/secretsmanager-secret/index.ts";
import { CfncompatProvider } from "./.gen/providers/cfncompat/provider/index.ts";

/**
 * Port of aws-secretsmanager.Secret's owned-secret name recovery
 * (aws-cdk-lib/aws-secretsmanager/lib/secret.ts:1074-1095, `parseSecretNameForOwnedSecret()`)
 * onto a generated `awscc_secretsmanager_secret` resource + cfncompat's
 * join/select/split polyfills.
 *
 * CloudFormation's `Ref` on `AWS::SecretsManager::Secret` (and CloudControl's `id`
 * attribute for `awscc_secretsmanager_secret`) returns the secret's full ARN, whose
 * final colon-delimited segment is `<secretName>-<6-char-random-suffix>`. The
 * original CDK code recovers the human-readable secretName with:
 *
 *   const resourceName = Stack.of(this).splitArn(secretArn, ArnFormat.COLON_RESOURCE_NAME).resourceName;
 *   const segmentIndexes = [0, 1]; // no explicit secretName given -> 2 hyphenated segments expected
 *   return Fn.join('-', segmentIndexes.map(i => Fn.select(i, Fn.split('-', resourceName))));
 *
 * which strips the trailing random suffix by re-joining every hyphen-segment
 * except the last one. This only works because `secretArn` (and therefore
 * `resourceName`) is not known until the secret is actually created -- exactly
 * the kind of apply-time-only string manipulation `cfncompat`'s intrinsic
 * polyfills exist to carry over from CloudFormation.
 */
class L2SecretsmanagerSecretStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new LocalBackend(this, { path: "terraform.tfstate" });

    new AwsccProvider(this, "awscc", {
      region: process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION || "us-east-1",
      profile: process.env.AWS_ACCESS_KEY_ID ? undefined : process.env.AWS_PROFILE || "tcons-hermes",
    });
    const cfncompatProvider = new CfncompatProvider(this, "cfncompat", {});

    const secret = new SecretsmanagerSecret(this, "secret", {
      name: "cdktn-l2-port-demo-secret",
      generateSecretString: {},
    });

    // Stack.splitArn(secretArn, ArnFormat.COLON_RESOURCE_NAME).resourceName:
    // arn:aws:secretsmanager:<region>:<account>:secret:<name>-<suffix>
    //  0    1         2           3       4        5        6 <- resourceName
    const resourceName = cfncompatProvider.functions.select(
      6,
      cfncompatProvider.functions.split(":", secret.id),
    );

    // `select` is honestly typed as `cdktn.IResolvable` (its `objects` parameter
    // is `any`), so it must be coerced with `Token.asString(...)` wherever a
    // plain string is required downstream - here, as `split`'s `source` and as
    // elements of `join`'s `string[]` argument.
    const nameSegments = cfncompatProvider.functions.split("-", Token.asString(resourceName));
    const reconstructedSecretName = cfncompatProvider.functions.join("-", [
      Token.asString(cfncompatProvider.functions.select(0, nameSegments)),
      Token.asString(cfncompatProvider.functions.select(1, nameSegments)),
    ]);

    new TerraformOutput(this, "secret_arn", { value: secret.id });
    new TerraformOutput(this, "reconstructed_secret_name", { value: reconstructedSecretName });
  }
}

const app = Testing.stubVersion(new App({ stackTraces: false }));
new L2SecretsmanagerSecretStack(app, "l2-secretsmanager-secret");
app.synth();
