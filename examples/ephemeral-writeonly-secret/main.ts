import { Construct } from "constructs";
import {
  App,
  LocalBackend,
  TerraformOutput,
  TerraformStack,
  TerraformVariable,
  Testing,
} from "cdktn";
import { AwsProvider } from "./.gen/providers/aws/provider";
import { EphemeralAwsSecretsmanagerRandomPassword } from "./.gen/providers/aws/ephemeral-aws-secretsmanager-random-password";
import { SecretsmanagerSecret } from "./.gen/providers/aws/secretsmanager-secret";
import { SecretsmanagerSecretVersion } from "./.gen/providers/aws/secretsmanager-secret-version";

/**
 * Demonstrates the Terraform 1.10+/1.11+ ephemerality migration pattern:
 * generate a dynamic secret with an ephemeral resource and hand it to a
 * write-only resource argument so the secret value is never persisted in state.
 *
 * This intentionally mirrors Drew Mullen's "random_password -> password_wo +
 * password_wo_version" guidance with AWS-native resources:
 * - ephemeral.aws_secretsmanager_random_password produces the secret value
 * - aws_secretsmanager_secret_version.secret_string_wo accepts the ephemeral
 *   value without storing it in Terraform state
 * - secret_string_wo_version is the explicit rotation knob; bump the variable
 *   to rotate the write-only secret material on the next apply
 */
class EphemeralWriteOnlySecretStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new LocalBackend(this, { path: "terraform.tfstate" });

    new AwsProvider(this, "aws", {
      region: process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION || "us-east-1",
      profile: process.env.AWS_ACCESS_KEY_ID ? undefined : process.env.AWS_PROFILE || "tcons-hermes",
      skipCredentialsValidation: true,
      skipRequestingAccountId: true,
      skipMetadataApiCheck: "true",
    });

    const passwordVersion = new TerraformVariable(this, "password_version", {
      type: "number",
      default: 1,
      description:
        "Bump to rotate the ephemeral password written through secret_string_wo.",
    });

    const generatedPassword = new EphemeralAwsSecretsmanagerRandomPassword(
      this,
      "GeneratedPassword",
      {
        passwordLength: 32,
        excludePunctuation: true,
        requireEachIncludedType: true,
      }
    );

    const secret = new SecretsmanagerSecret(this, "Secret", {
      namePrefix: "cdktn-ephemeral-writeonly-demo-",
      description:
        "Demo secret whose value is supplied through secret_string_wo from an ephemeral resource.",
      recoveryWindowInDays: 0,
      tags: {
        Demo: "cdktn-provider-features",
        Pattern: "ephemeral-to-write-only",
      },
    });

    const secretVersion = new SecretsmanagerSecretVersion(this, "SecretVersion", {
      secretId: secret.id,
      secretStringWo: generatedPassword.randomPassword,
      secretStringWoVersion: passwordVersion.numberValue,
    });

    new TerraformOutput(this, "secret_arn", {
      value: secret.arn,
    });

    new TerraformOutput(this, "secret_version_uses_write_only_value", {
      value: secretVersion.hasSecretStringWo,
    });
  }
}

const app = Testing.stubVersion(new App({ stackTraces: false }));
new EphemeralWriteOnlySecretStack(app, "ephemeral-writeonly-secret");
app.synth();
