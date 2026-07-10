// generated from provider function schema

import * as cdktn from 'cdktn';

/**
* Provider-defined functions of the aws provider.
*/
export class AwsProviderFunctions {

  /**
  * Builds an ARN from its constituent parts
  * Note: provider-defined functions are evaluated by the provider itself — do not call this inside the configuration of the same provider (Terraform reports a self-referential cycle).
  * @param partition Partition in which the resource is located
  * @param service Service namespace
  * @param region Region code
  * @param accountId AWS account identifier
  * @param resource Resource section, typically composed of a resource type and identifier
  * @param providerLocalName The local name of the provider in required_providers; defaults to the registry short name. Override when the provider is declared under a different local name — aliases do not change the namespace, local names do.
  */
  public static arnBuild(partition: string, service: string, region: string, accountId: string, resource: string, providerLocalName?: string): string {
    return cdktn.Token.asString(cdktn.TerraformProviderFunction.invoke(providerLocalName ?? "aws", "arn_build", [partition, service, region, accountId, resource]));
  }

  /**
  * Parses an ARN into its constituent parts
  * Note: provider-defined functions are evaluated by the provider itself — do not call this inside the configuration of the same provider (Terraform reports a self-referential cycle).
  * @param arn ARN (Amazon Resource Name) to parse
  * @param providerLocalName The local name of the provider in required_providers; defaults to the registry short name. Override when the provider is declared under a different local name — aliases do not change the namespace, local names do.
  */
  public static arnParse(arn: string, providerLocalName?: string): any {
    return cdktn.TerraformProviderFunction.invoke(providerLocalName ?? "aws", "arn_parse", [arn]);
  }

  /**
  * Trims the path prefix from an IAM role Amazon Resource Name (ARN). This function can be used when services require role ARNs to be passed without a path.
  * Note: provider-defined functions are evaluated by the provider itself — do not call this inside the configuration of the same provider (Terraform reports a self-referential cycle).
  * @param arn IAM role Amazon Resource Name (ARN)
  * @param providerLocalName The local name of the provider in required_providers; defaults to the registry short name. Override when the provider is declared under a different local name — aliases do not change the namespace, local names do.
  */
  public static trimIamRolePath(arn: string, providerLocalName?: string): string {
    return cdktn.Token.asString(cdktn.TerraformProviderFunction.invoke(providerLocalName ?? "aws", "trim_iam_role_path", [arn]));
  }

  /**
  * Formats a User-Agent product for use with the user_agent argument in the provider or provider_meta block.
  * Note: provider-defined functions are evaluated by the provider itself — do not call this inside the configuration of the same provider (Terraform reports a self-referential cycle).
  * @param productName Product name.
  * @param productVersion Product version.
  * @param comment Comment describing any additional product details.
  * @param providerLocalName The local name of the provider in required_providers; defaults to the registry short name. Override when the provider is declared under a different local name — aliases do not change the namespace, local names do.
  */
  public static userAgent(productName: string, productVersion: string, comment: string, providerLocalName?: string): string {
    return cdktn.Token.asString(cdktn.TerraformProviderFunction.invoke(providerLocalName ?? "aws", "user_agent", [productName, productVersion, comment]));
  }
}
