// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/transfer_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccTransferConnectorConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/transfer_connector#id DataAwsccTransferConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccTransferConnectorAs2ConfigAsyncMdnConfig {
}

export function dataAwsccTransferConnectorAs2ConfigAsyncMdnConfigToTerraform(struct?: DataAwsccTransferConnectorAs2ConfigAsyncMdnConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferConnectorAs2ConfigAsyncMdnConfigToHclTerraform(struct?: DataAwsccTransferConnectorAs2ConfigAsyncMdnConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferConnectorAs2ConfigAsyncMdnConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTransferConnectorAs2ConfigAsyncMdnConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferConnectorAs2ConfigAsyncMdnConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // server_ids - computed: true, optional: false, required: false
  public get serverIds() {
    return cdktn.Fn.tolist(this.getListAttribute('server_ids'));
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataAwsccTransferConnectorAs2Config {
}

export function dataAwsccTransferConnectorAs2ConfigToTerraform(struct?: DataAwsccTransferConnectorAs2Config): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferConnectorAs2ConfigToHclTerraform(struct?: DataAwsccTransferConnectorAs2Config): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferConnectorAs2ConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTransferConnectorAs2Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferConnectorAs2Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // async_mdn_config - computed: true, optional: false, required: false
  private _asyncMdnConfig = new DataAwsccTransferConnectorAs2ConfigAsyncMdnConfigOutputReference(this, "async_mdn_config");
  public get asyncMdnConfig() {
    return this._asyncMdnConfig;
  }

  // basic_auth_secret_id - computed: true, optional: false, required: false
  public get basicAuthSecretId() {
    return this.getStringAttribute('basic_auth_secret_id');
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getStringAttribute('compression');
  }

  // encryption_algorithm - computed: true, optional: false, required: false
  public get encryptionAlgorithm() {
    return this.getStringAttribute('encryption_algorithm');
  }

  // local_profile_id - computed: true, optional: false, required: false
  public get localProfileId() {
    return this.getStringAttribute('local_profile_id');
  }

  // mdn_response - computed: true, optional: false, required: false
  public get mdnResponse() {
    return this.getStringAttribute('mdn_response');
  }

  // mdn_signing_algorithm - computed: true, optional: false, required: false
  public get mdnSigningAlgorithm() {
    return this.getStringAttribute('mdn_signing_algorithm');
  }

  // message_subject - computed: true, optional: false, required: false
  public get messageSubject() {
    return this.getStringAttribute('message_subject');
  }

  // partner_profile_id - computed: true, optional: false, required: false
  public get partnerProfileId() {
    return this.getStringAttribute('partner_profile_id');
  }

  // preserve_content_type - computed: true, optional: false, required: false
  public get preserveContentType() {
    return this.getStringAttribute('preserve_content_type');
  }

  // signing_algorithm - computed: true, optional: false, required: false
  public get signingAlgorithm() {
    return this.getStringAttribute('signing_algorithm');
  }
}
export interface DataAwsccTransferConnectorEgressConfigVpcLattice {
}

export function dataAwsccTransferConnectorEgressConfigVpcLatticeToTerraform(struct?: DataAwsccTransferConnectorEgressConfigVpcLattice): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferConnectorEgressConfigVpcLatticeToHclTerraform(struct?: DataAwsccTransferConnectorEgressConfigVpcLattice): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferConnectorEgressConfigVpcLatticeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTransferConnectorEgressConfigVpcLattice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferConnectorEgressConfigVpcLattice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port_number - computed: true, optional: false, required: false
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }

  // resource_configuration_arn - computed: true, optional: false, required: false
  public get resourceConfigurationArn() {
    return this.getStringAttribute('resource_configuration_arn');
  }
}
export interface DataAwsccTransferConnectorEgressConfig {
}

export function dataAwsccTransferConnectorEgressConfigToTerraform(struct?: DataAwsccTransferConnectorEgressConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferConnectorEgressConfigToHclTerraform(struct?: DataAwsccTransferConnectorEgressConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferConnectorEgressConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTransferConnectorEgressConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferConnectorEgressConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vpc_lattice - computed: true, optional: false, required: false
  private _vpcLattice = new DataAwsccTransferConnectorEgressConfigVpcLatticeOutputReference(this, "vpc_lattice");
  public get vpcLattice() {
    return this._vpcLattice;
  }
}
export interface DataAwsccTransferConnectorSftpConfig {
}

export function dataAwsccTransferConnectorSftpConfigToTerraform(struct?: DataAwsccTransferConnectorSftpConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferConnectorSftpConfigToHclTerraform(struct?: DataAwsccTransferConnectorSftpConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferConnectorSftpConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTransferConnectorSftpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferConnectorSftpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_concurrent_connections - computed: true, optional: false, required: false
  public get maxConcurrentConnections() {
    return this.getNumberAttribute('max_concurrent_connections');
  }

  // trusted_host_keys - computed: true, optional: false, required: false
  public get trustedHostKeys() {
    return this.getListAttribute('trusted_host_keys');
  }

  // user_secret_id - computed: true, optional: false, required: false
  public get userSecretId() {
    return this.getStringAttribute('user_secret_id');
  }
}
export interface DataAwsccTransferConnectorTags {
}

export function dataAwsccTransferConnectorTagsToTerraform(struct?: DataAwsccTransferConnectorTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferConnectorTagsToHclTerraform(struct?: DataAwsccTransferConnectorTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferConnectorTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccTransferConnectorTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferConnectorTags | undefined) {
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

export class DataAwsccTransferConnectorTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccTransferConnectorTagsOutputReference {
    return new DataAwsccTransferConnectorTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/transfer_connector awscc_transfer_connector}
*/
export class DataAwsccTransferConnector extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_transfer_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccTransferConnector resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccTransferConnector to import
  * @param importFromId The id of the existing DataAwsccTransferConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/transfer_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccTransferConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_transfer_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/transfer_connector awscc_transfer_connector} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccTransferConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccTransferConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_transfer_connector',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.92.0'
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

  // access_role - computed: true, optional: false, required: false
  public get accessRole() {
    return this.getStringAttribute('access_role');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // as_2_config - computed: true, optional: false, required: false
  private _as2Config = new DataAwsccTransferConnectorAs2ConfigOutputReference(this, "as_2_config");
  public get as2Config() {
    return this._as2Config;
  }

  // connector_id - computed: true, optional: false, required: false
  public get connectorId() {
    return this.getStringAttribute('connector_id');
  }

  // egress_config - computed: true, optional: false, required: false
  private _egressConfig = new DataAwsccTransferConnectorEgressConfigOutputReference(this, "egress_config");
  public get egressConfig() {
    return this._egressConfig;
  }

  // egress_type - computed: true, optional: false, required: false
  public get egressType() {
    return this.getStringAttribute('egress_type');
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
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

  // ip_address_type - computed: true, optional: false, required: false
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }

  // logging_role - computed: true, optional: false, required: false
  public get loggingRole() {
    return this.getStringAttribute('logging_role');
  }

  // security_policy_name - computed: true, optional: false, required: false
  public get securityPolicyName() {
    return this.getStringAttribute('security_policy_name');
  }

  // service_managed_egress_ip_addresses - computed: true, optional: false, required: false
  public get serviceManagedEgressIpAddresses() {
    return this.getListAttribute('service_managed_egress_ip_addresses');
  }

  // sftp_config - computed: true, optional: false, required: false
  private _sftpConfig = new DataAwsccTransferConnectorSftpConfigOutputReference(this, "sftp_config");
  public get sftpConfig() {
    return this._sftpConfig;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccTransferConnectorTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
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
