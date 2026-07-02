import { Construct } from "constructs";
import { App, Fn, LocalBackend, TerraformOutput, TerraformStack, Testing } from "cdktn";
import { AwsProvider } from "./.gen/providers/aws/provider";
import { AwsProviderFunctions } from "./.gen/providers/aws/provider-functions";
import { EphemeralAwsSecretsmanagerRandomPassword } from "./.gen/providers/aws/ephemeral-aws-secretsmanager-random-password";

/**
 * Exercises AWS provider-protocol features generated from Terraform 1.15.x schema:
 * - provider-defined functions (`provider::aws::arn_build`, `provider::aws::user_agent`)
 * - ephemeral resources (`ephemeral.aws_secretsmanager_random_password`)
 * - targetVersions-aware synth validation from the PR head
 *
 * This stack intentionally avoids creating AWS infrastructure. It should synthesize
 * and `terraform plan -refresh=false` with any usable AWS profile.
 */
class AwsFunctionsAndEphemeralStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new LocalBackend(this, { path: "terraform.tfstate" });

    const region = process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION || "us-east-1";
    const profile = process.env.AWS_PROFILE || "tcons-hermes";

    new AwsProvider(this, "aws", {
      region,
      profile,
      skipCredentialsValidation: true,
      skipRequestingAccountId: true,
      skipMetadataApiCheck: "true",
    });

    const builtArn = AwsProviderFunctions.arnBuild(
      "aws",
      "s3",
      "",
      "",
      "demo-bucket"
    );

    const generatedPassword = new EphemeralAwsSecretsmanagerRandomPassword(
      this,
      "GeneratedPassword",
      {
        passwordLength: 24,
        excludePunctuation: true,
        requireEachIncludedType: true,
      }
    );

    new TerraformOutput(this, "provider_function_arn_build", {
      value: builtArn,
    });

    new TerraformOutput(this, "ephemeral_password_ref_as_null", {
      value: Fn.ephemeralasnull(generatedPassword.randomPassword),
      sensitive: true,
    });
  }
}

const app = Testing.stubVersion(new App({ stackTraces: false }));
new AwsFunctionsAndEphemeralStack(app, "functions-ephemeral");
app.synth();
