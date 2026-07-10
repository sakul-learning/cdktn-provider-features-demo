// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/iot_domain_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccIotDomainConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/iot_domain_configuration#id DataAwsccIotDomainConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccIotDomainConfigurationAuthorizerConfig {
}

export function dataAwsccIotDomainConfigurationAuthorizerConfigToTerraform(struct?: DataAwsccIotDomainConfigurationAuthorizerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotDomainConfigurationAuthorizerConfigToHclTerraform(struct?: DataAwsccIotDomainConfigurationAuthorizerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotDomainConfigurationAuthorizerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotDomainConfigurationAuthorizerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_authorizer_override - computed: true, optional: false, required: false
  public get allowAuthorizerOverride() {
    return this.getBooleanAttribute('allow_authorizer_override');
  }

  // default_authorizer_name - computed: true, optional: false, required: false
  public get defaultAuthorizerName() {
    return this.getStringAttribute('default_authorizer_name');
  }
}
export interface DataAwsccIotDomainConfigurationClientCertificateConfig {
}

export function dataAwsccIotDomainConfigurationClientCertificateConfigToTerraform(struct?: DataAwsccIotDomainConfigurationClientCertificateConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotDomainConfigurationClientCertificateConfigToHclTerraform(struct?: DataAwsccIotDomainConfigurationClientCertificateConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotDomainConfigurationClientCertificateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotDomainConfigurationClientCertificateConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_certificate_callback_arn - computed: true, optional: false, required: false
  public get clientCertificateCallbackArn() {
    return this.getStringAttribute('client_certificate_callback_arn');
  }
}
export interface DataAwsccIotDomainConfigurationServerCertificateConfig {
}

export function dataAwsccIotDomainConfigurationServerCertificateConfigToTerraform(struct?: DataAwsccIotDomainConfigurationServerCertificateConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotDomainConfigurationServerCertificateConfigToHclTerraform(struct?: DataAwsccIotDomainConfigurationServerCertificateConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotDomainConfigurationServerCertificateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotDomainConfigurationServerCertificateConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_ocsp_check - computed: true, optional: false, required: false
  public get enableOcspCheck() {
    return this.getBooleanAttribute('enable_ocsp_check');
  }

  // ocsp_authorized_responder_arn - computed: true, optional: false, required: false
  public get ocspAuthorizedResponderArn() {
    return this.getStringAttribute('ocsp_authorized_responder_arn');
  }

  // ocsp_lambda_arn - computed: true, optional: false, required: false
  public get ocspLambdaArn() {
    return this.getStringAttribute('ocsp_lambda_arn');
  }
}
export interface DataAwsccIotDomainConfigurationServerCertificates {
}

export function dataAwsccIotDomainConfigurationServerCertificatesToTerraform(struct?: DataAwsccIotDomainConfigurationServerCertificates): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotDomainConfigurationServerCertificatesToHclTerraform(struct?: DataAwsccIotDomainConfigurationServerCertificates): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotDomainConfigurationServerCertificatesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotDomainConfigurationServerCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotDomainConfigurationServerCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // server_certificate_arn - computed: true, optional: false, required: false
  public get serverCertificateArn() {
    return this.getStringAttribute('server_certificate_arn');
  }

  // server_certificate_status - computed: true, optional: false, required: false
  public get serverCertificateStatus() {
    return this.getStringAttribute('server_certificate_status');
  }

  // server_certificate_status_detail - computed: true, optional: false, required: false
  public get serverCertificateStatusDetail() {
    return this.getStringAttribute('server_certificate_status_detail');
  }
}

export class DataAwsccIotDomainConfigurationServerCertificatesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotDomainConfigurationServerCertificatesOutputReference {
    return new DataAwsccIotDomainConfigurationServerCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotDomainConfigurationTags {
}

export function dataAwsccIotDomainConfigurationTagsToTerraform(struct?: DataAwsccIotDomainConfigurationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotDomainConfigurationTagsToHclTerraform(struct?: DataAwsccIotDomainConfigurationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotDomainConfigurationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotDomainConfigurationTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotDomainConfigurationTags | undefined) {
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

export class DataAwsccIotDomainConfigurationTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotDomainConfigurationTagsOutputReference {
    return new DataAwsccIotDomainConfigurationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotDomainConfigurationTlsConfig {
}

export function dataAwsccIotDomainConfigurationTlsConfigToTerraform(struct?: DataAwsccIotDomainConfigurationTlsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotDomainConfigurationTlsConfigToHclTerraform(struct?: DataAwsccIotDomainConfigurationTlsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotDomainConfigurationTlsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotDomainConfigurationTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotDomainConfigurationTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_policy - computed: true, optional: false, required: false
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/iot_domain_configuration awscc_iot_domain_configuration}
*/
export class DataAwsccIotDomainConfiguration extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iot_domain_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccIotDomainConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccIotDomainConfiguration to import
  * @param importFromId The id of the existing DataAwsccIotDomainConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/iot_domain_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccIotDomainConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_domain_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/iot_domain_configuration awscc_iot_domain_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotDomainConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotDomainConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iot_domain_configuration',
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

  // application_protocol - computed: true, optional: false, required: false
  public get applicationProtocol() {
    return this.getStringAttribute('application_protocol');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }

  // authorizer_config - computed: true, optional: false, required: false
  private _authorizerConfig = new DataAwsccIotDomainConfigurationAuthorizerConfigOutputReference(this, "authorizer_config");
  public get authorizerConfig() {
    return this._authorizerConfig;
  }

  // client_certificate_config - computed: true, optional: false, required: false
  private _clientCertificateConfig = new DataAwsccIotDomainConfigurationClientCertificateConfigOutputReference(this, "client_certificate_config");
  public get clientCertificateConfig() {
    return this._clientCertificateConfig;
  }

  // domain_configuration_name - computed: true, optional: false, required: false
  public get domainConfigurationName() {
    return this.getStringAttribute('domain_configuration_name');
  }

  // domain_configuration_status - computed: true, optional: false, required: false
  public get domainConfigurationStatus() {
    return this.getStringAttribute('domain_configuration_status');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // domain_type - computed: true, optional: false, required: false
  public get domainType() {
    return this.getStringAttribute('domain_type');
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

  // server_certificate_arns - computed: true, optional: false, required: false
  public get serverCertificateArns() {
    return this.getListAttribute('server_certificate_arns');
  }

  // server_certificate_config - computed: true, optional: false, required: false
  private _serverCertificateConfig = new DataAwsccIotDomainConfigurationServerCertificateConfigOutputReference(this, "server_certificate_config");
  public get serverCertificateConfig() {
    return this._serverCertificateConfig;
  }

  // server_certificates - computed: true, optional: false, required: false
  private _serverCertificates = new DataAwsccIotDomainConfigurationServerCertificatesList(this, "server_certificates", false);
  public get serverCertificates() {
    return this._serverCertificates;
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccIotDomainConfigurationTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new DataAwsccIotDomainConfigurationTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }

  // validation_certificate_arn - computed: true, optional: false, required: false
  public get validationCertificateArn() {
    return this.getStringAttribute('validation_certificate_arn');
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
