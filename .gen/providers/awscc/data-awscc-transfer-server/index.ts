// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/transfer_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccTransferServerConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/transfer_server#id DataAwsccTransferServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccTransferServerEndpointDetails {
}

export function dataAwsccTransferServerEndpointDetailsToTerraform(struct?: DataAwsccTransferServerEndpointDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferServerEndpointDetailsToHclTerraform(struct?: DataAwsccTransferServerEndpointDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferServerEndpointDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTransferServerEndpointDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferServerEndpointDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_allocation_ids - computed: true, optional: false, required: false
  public get addressAllocationIds() {
    return this.getListAttribute('address_allocation_ids');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // vpc_endpoint_id - computed: true, optional: false, required: false
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}
export interface DataAwsccTransferServerIdentityProviderDetails {
}

export function dataAwsccTransferServerIdentityProviderDetailsToTerraform(struct?: DataAwsccTransferServerIdentityProviderDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferServerIdentityProviderDetailsToHclTerraform(struct?: DataAwsccTransferServerIdentityProviderDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferServerIdentityProviderDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTransferServerIdentityProviderDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferServerIdentityProviderDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // directory_id - computed: true, optional: false, required: false
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }

  // function - computed: true, optional: false, required: false
  public get function() {
    return this.getStringAttribute('function');
  }

  // invocation_role - computed: true, optional: false, required: false
  public get invocationRole() {
    return this.getStringAttribute('invocation_role');
  }

  // sftp_authentication_methods - computed: true, optional: false, required: false
  public get sftpAuthenticationMethods() {
    return this.getStringAttribute('sftp_authentication_methods');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataAwsccTransferServerProtocolDetails {
}

export function dataAwsccTransferServerProtocolDetailsToTerraform(struct?: DataAwsccTransferServerProtocolDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferServerProtocolDetailsToHclTerraform(struct?: DataAwsccTransferServerProtocolDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferServerProtocolDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTransferServerProtocolDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferServerProtocolDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_2_transports - computed: true, optional: false, required: false
  public get as2Transports() {
    return this.getListAttribute('as_2_transports');
  }

  // passive_ip - computed: true, optional: false, required: false
  public get passiveIp() {
    return this.getStringAttribute('passive_ip');
  }

  // set_stat_option - computed: true, optional: false, required: false
  public get setStatOption() {
    return this.getStringAttribute('set_stat_option');
  }

  // tls_session_resumption_mode - computed: true, optional: false, required: false
  public get tlsSessionResumptionMode() {
    return this.getStringAttribute('tls_session_resumption_mode');
  }
}
export interface DataAwsccTransferServerS3StorageOptions {
}

export function dataAwsccTransferServerS3StorageOptionsToTerraform(struct?: DataAwsccTransferServerS3StorageOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferServerS3StorageOptionsToHclTerraform(struct?: DataAwsccTransferServerS3StorageOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferServerS3StorageOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTransferServerS3StorageOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferServerS3StorageOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // directory_listing_optimization - computed: true, optional: false, required: false
  public get directoryListingOptimization() {
    return this.getStringAttribute('directory_listing_optimization');
  }
}
export interface DataAwsccTransferServerTags {
}

export function dataAwsccTransferServerTagsToTerraform(struct?: DataAwsccTransferServerTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferServerTagsToHclTerraform(struct?: DataAwsccTransferServerTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferServerTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccTransferServerTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferServerTags | undefined) {
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

export class DataAwsccTransferServerTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccTransferServerTagsOutputReference {
    return new DataAwsccTransferServerTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccTransferServerWorkflowDetailsOnPartialUpload {
}

export function dataAwsccTransferServerWorkflowDetailsOnPartialUploadToTerraform(struct?: DataAwsccTransferServerWorkflowDetailsOnPartialUpload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferServerWorkflowDetailsOnPartialUploadToHclTerraform(struct?: DataAwsccTransferServerWorkflowDetailsOnPartialUpload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccTransferServerWorkflowDetailsOnPartialUpload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferServerWorkflowDetailsOnPartialUpload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execution_role - computed: true, optional: false, required: false
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }

  // workflow_id - computed: true, optional: false, required: false
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }
}

export class DataAwsccTransferServerWorkflowDetailsOnPartialUploadList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference {
    return new DataAwsccTransferServerWorkflowDetailsOnPartialUploadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccTransferServerWorkflowDetailsOnUpload {
}

export function dataAwsccTransferServerWorkflowDetailsOnUploadToTerraform(struct?: DataAwsccTransferServerWorkflowDetailsOnUpload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferServerWorkflowDetailsOnUploadToHclTerraform(struct?: DataAwsccTransferServerWorkflowDetailsOnUpload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccTransferServerWorkflowDetailsOnUpload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferServerWorkflowDetailsOnUpload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execution_role - computed: true, optional: false, required: false
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }

  // workflow_id - computed: true, optional: false, required: false
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }
}

export class DataAwsccTransferServerWorkflowDetailsOnUploadList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference {
    return new DataAwsccTransferServerWorkflowDetailsOnUploadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccTransferServerWorkflowDetails {
}

export function dataAwsccTransferServerWorkflowDetailsToTerraform(struct?: DataAwsccTransferServerWorkflowDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferServerWorkflowDetailsToHclTerraform(struct?: DataAwsccTransferServerWorkflowDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferServerWorkflowDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTransferServerWorkflowDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferServerWorkflowDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // on_partial_upload - computed: true, optional: false, required: false
  private _onPartialUpload = new DataAwsccTransferServerWorkflowDetailsOnPartialUploadList(this, "on_partial_upload", false);
  public get onPartialUpload() {
    return this._onPartialUpload;
  }

  // on_upload - computed: true, optional: false, required: false
  private _onUpload = new DataAwsccTransferServerWorkflowDetailsOnUploadList(this, "on_upload", false);
  public get onUpload() {
    return this._onUpload;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/transfer_server awscc_transfer_server}
*/
export class DataAwsccTransferServer extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_transfer_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccTransferServer resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccTransferServer to import
  * @param importFromId The id of the existing DataAwsccTransferServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/transfer_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccTransferServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_transfer_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/transfer_server awscc_transfer_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccTransferServerConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccTransferServerConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_transfer_server',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // as_2_service_managed_egress_ip_addresses - computed: true, optional: false, required: false
  public get as2ServiceManagedEgressIpAddresses() {
    return this.getListAttribute('as_2_service_managed_egress_ip_addresses');
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // endpoint_details - computed: true, optional: false, required: false
  private _endpointDetails = new DataAwsccTransferServerEndpointDetailsOutputReference(this, "endpoint_details");
  public get endpointDetails() {
    return this._endpointDetails;
  }

  // endpoint_type - computed: true, optional: false, required: false
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
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

  // identity_provider_details - computed: true, optional: false, required: false
  private _identityProviderDetails = new DataAwsccTransferServerIdentityProviderDetailsOutputReference(this, "identity_provider_details");
  public get identityProviderDetails() {
    return this._identityProviderDetails;
  }

  // identity_provider_type - computed: true, optional: false, required: false
  public get identityProviderType() {
    return this.getStringAttribute('identity_provider_type');
  }

  // ip_address_type - computed: true, optional: false, required: false
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }

  // logging_role - computed: true, optional: false, required: false
  public get loggingRole() {
    return this.getStringAttribute('logging_role');
  }

  // post_authentication_login_banner - computed: true, optional: false, required: false
  public get postAuthenticationLoginBanner() {
    return this.getStringAttribute('post_authentication_login_banner');
  }

  // pre_authentication_login_banner - computed: true, optional: false, required: false
  public get preAuthenticationLoginBanner() {
    return this.getStringAttribute('pre_authentication_login_banner');
  }

  // protocol_details - computed: true, optional: false, required: false
  private _protocolDetails = new DataAwsccTransferServerProtocolDetailsOutputReference(this, "protocol_details");
  public get protocolDetails() {
    return this._protocolDetails;
  }

  // protocols - computed: true, optional: false, required: false
  public get protocols() {
    return this.getListAttribute('protocols');
  }

  // s3_storage_options - computed: true, optional: false, required: false
  private _s3StorageOptions = new DataAwsccTransferServerS3StorageOptionsOutputReference(this, "s3_storage_options");
  public get s3StorageOptions() {
    return this._s3StorageOptions;
  }

  // security_policy_name - computed: true, optional: false, required: false
  public get securityPolicyName() {
    return this.getStringAttribute('security_policy_name');
  }

  // server_id - computed: true, optional: false, required: false
  public get serverId() {
    return this.getStringAttribute('server_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // structured_log_destinations - computed: true, optional: false, required: false
  public get structuredLogDestinations() {
    return this.getListAttribute('structured_log_destinations');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccTransferServerTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // workflow_details - computed: true, optional: false, required: false
  private _workflowDetails = new DataAwsccTransferServerWorkflowDetailsOutputReference(this, "workflow_details");
  public get workflowDetails() {
    return this._workflowDetails;
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
