import { Construct } from "constructs";
import { App, LocalBackend, TerraformOutput, TerraformStack, Testing } from "cdktn";
import { AwsProvider } from "./.gen/providers/aws/provider";
import { AwsProviderFunctions } from "./.gen/providers/aws/provider-functions";

class AwsProviderFunctionsOnlyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new LocalBackend(this, { path: "terraform.tfstate" });

    new AwsProvider(this, "aws", {
      region: process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION || "us-east-1",
      profile: process.env.AWS_PROFILE || "tcons-hermes",
      skipCredentialsValidation: true,
      skipRequestingAccountId: true,
      skipMetadataApiCheck: "true",
    });

    const parsed = AwsProviderFunctions.arnParse(
      "arn:aws:iam::123456789012:role/service-role/demo"
    );

    new TerraformOutput(this, "built_arn", {
      value: AwsProviderFunctions.arnBuild(
        "aws",
        "logs",
        "us-east-1",
        "123456789012",
        "log-group:/aws/lambda/demo"
      ),
    });

    new TerraformOutput(this, "trimmed_role_path", {
      value: AwsProviderFunctions.trimIamRolePath(
        "arn:aws:iam::123456789012:role/service-role/demo"
      ),
    });

    new TerraformOutput(this, "parsed_arn", {
      value: parsed,
    });
  }
}

const app = Testing.stubVersion(new App({ stackTraces: false }));
new AwsProviderFunctionsOnlyStack(app, "functions-only");
app.synth();
