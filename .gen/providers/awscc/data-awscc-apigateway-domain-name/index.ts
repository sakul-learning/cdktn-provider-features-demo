// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/apigateway_domain_name
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccApigatewayDomainNameConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/apigateway_domain_name#id DataAwsccApigatewayDomainName#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccApigatewayDomainNameEndpointConfiguration {
}

export function dataAwsccApigatewayDomainNameEndpointConfigurationToTerraform(struct?: DataAwsccApigatewayDomainNameEndpointConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApigatewayDomainNameEndpointConfigurationToHclTerraform(struct?: DataAwsccApigatewayDomainNameEndpointConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApigatewayDomainNameEndpointConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApigatewayDomainNameEndpointConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address_type - computed: true, optional: false, required: false
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }

  // types - computed: true, optional: false, required: false
  public get types() {
    return this.getListAttribute('types');
  }
}
export interface DataAwsccApigatewayDomainNameMutualTlsAuthentication {
}

export function dataAwsccApigatewayDomainNameMutualTlsAuthenticationToTerraform(struct?: DataAwsccApigatewayDomainNameMutualTlsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApigatewayDomainNameMutualTlsAuthenticationToHclTerraform(struct?: DataAwsccApigatewayDomainNameMutualTlsAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApigatewayDomainNameMutualTlsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApigatewayDomainNameMutualTlsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // truststore_uri - computed: true, optional: false, required: false
  public get truststoreUri() {
    return this.getStringAttribute('truststore_uri');
  }

  // truststore_version - computed: true, optional: false, required: false
  public get truststoreVersion() {
    return this.getStringAttribute('truststore_version');
  }
}
export interface DataAwsccApigatewayDomainNameTags {
}

export function dataAwsccApigatewayDomainNameTagsToTerraform(struct?: DataAwsccApigatewayDomainNameTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApigatewayDomainNameTagsToHclTerraform(struct?: DataAwsccApigatewayDomainNameTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApigatewayDomainNameTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccApigatewayDomainNameTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApigatewayDomainNameTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccApigatewayDomainNameTagsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsccApigatewayDomainNameTagsOutputReference {
    return new DataAwsccApigatewayDomainNameTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/apigateway_domain_name awscc_apigateway_domain_name}
*/
export class DataAwsccApigatewayDomainName extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_apigateway_domain_name";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccApigatewayDomainName resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccApigatewayDomainName to import
  * @param importFromId The id of the existing DataAwsccApigatewayDomainName that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/apigateway_domain_name#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccApigatewayDomainName to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigateway_domain_name", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/apigateway_domain_name awscc_apigateway_domain_name} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccApigatewayDomainNameConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccApigatewayDomainNameConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_apigateway_domain_name',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.91.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // distribution_domain_name - computed: true, optional: false, required: false
  public get distributionDomainName() {
    return this.getStringAttribute('distribution_domain_name');
  }

  // distribution_hosted_zone_id - computed: true, optional: false, required: false
  public get distributionHostedZoneId() {
    return this.getStringAttribute('distribution_hosted_zone_id');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // domain_name_arn - computed: true, optional: false, required: false
  public get domainNameArn() {
    return this.getStringAttribute('domain_name_arn');
  }

  // endpoint_access_mode - computed: true, optional: false, required: false
  public get endpointAccessMode() {
    return this.getStringAttribute('endpoint_access_mode');
  }

  // endpoint_configuration - computed: true, optional: false, required: false
  private _endpointConfiguration = new DataAwsccApigatewayDomainNameEndpointConfigurationOutputReference(this, "endpoint_configuration");
  public get endpointConfiguration() {
    return this._endpointConfiguration;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // mutual_tls_authentication - computed: true, optional: false, required: false
  private _mutualTlsAuthentication = new DataAwsccApigatewayDomainNameMutualTlsAuthenticationOutputReference(this, "mutual_tls_authentication");
  public get mutualTlsAuthentication() {
    return this._mutualTlsAuthentication;
  }

  // ownership_verification_certificate_arn - computed: true, optional: false, required: false
  public get ownershipVerificationCertificateArn() {
    return this.getStringAttribute('ownership_verification_certificate_arn');
  }

  // regional_certificate_arn - computed: true, optional: false, required: false
  public get regionalCertificateArn() {
    return this.getStringAttribute('regional_certificate_arn');
  }

  // regional_domain_name - computed: true, optional: false, required: false
  public get regionalDomainName() {
    return this.getStringAttribute('regional_domain_name');
  }

  // regional_hosted_zone_id - computed: true, optional: false, required: false
  public get regionalHostedZoneId() {
    return this.getStringAttribute('regional_hosted_zone_id');
  }

  // routing_mode - computed: true, optional: false, required: false
  public get routingMode() {
    return this.getStringAttribute('routing_mode');
  }

  // security_policy - computed: true, optional: false, required: false
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccApigatewayDomainNameTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
