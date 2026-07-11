// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/datasync_location_hdfs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccDatasyncLocationHdfsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/datasync_location_hdfs#id DataAwsccDatasyncLocationHdfs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccDatasyncLocationHdfsCmkSecretConfig {
}

export function dataAwsccDatasyncLocationHdfsCmkSecretConfigToTerraform(struct?: DataAwsccDatasyncLocationHdfsCmkSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatasyncLocationHdfsCmkSecretConfigToHclTerraform(struct?: DataAwsccDatasyncLocationHdfsCmkSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatasyncLocationHdfsCmkSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatasyncLocationHdfsCmkSecretConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatasyncLocationHdfsCmkSecretConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DataAwsccDatasyncLocationHdfsCustomSecretConfig {
}

export function dataAwsccDatasyncLocationHdfsCustomSecretConfigToTerraform(struct?: DataAwsccDatasyncLocationHdfsCustomSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatasyncLocationHdfsCustomSecretConfigToHclTerraform(struct?: DataAwsccDatasyncLocationHdfsCustomSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatasyncLocationHdfsCustomSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatasyncLocationHdfsCustomSecretConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatasyncLocationHdfsCustomSecretConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secret_access_role_arn - computed: true, optional: false, required: false
  public get secretAccessRoleArn() {
    return this.getStringAttribute('secret_access_role_arn');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DataAwsccDatasyncLocationHdfsManagedSecretConfig {
}

export function dataAwsccDatasyncLocationHdfsManagedSecretConfigToTerraform(struct?: DataAwsccDatasyncLocationHdfsManagedSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatasyncLocationHdfsManagedSecretConfigToHclTerraform(struct?: DataAwsccDatasyncLocationHdfsManagedSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatasyncLocationHdfsManagedSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatasyncLocationHdfsManagedSecretConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatasyncLocationHdfsManagedSecretConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DataAwsccDatasyncLocationHdfsNameNodes {
}

export function dataAwsccDatasyncLocationHdfsNameNodesToTerraform(struct?: DataAwsccDatasyncLocationHdfsNameNodes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatasyncLocationHdfsNameNodesToHclTerraform(struct?: DataAwsccDatasyncLocationHdfsNameNodes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatasyncLocationHdfsNameNodesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDatasyncLocationHdfsNameNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatasyncLocationHdfsNameNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DataAwsccDatasyncLocationHdfsNameNodesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDatasyncLocationHdfsNameNodesOutputReference {
    return new DataAwsccDatasyncLocationHdfsNameNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDatasyncLocationHdfsQopConfiguration {
}

export function dataAwsccDatasyncLocationHdfsQopConfigurationToTerraform(struct?: DataAwsccDatasyncLocationHdfsQopConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatasyncLocationHdfsQopConfigurationToHclTerraform(struct?: DataAwsccDatasyncLocationHdfsQopConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatasyncLocationHdfsQopConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatasyncLocationHdfsQopConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatasyncLocationHdfsQopConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_transfer_protection - computed: true, optional: false, required: false
  public get dataTransferProtection() {
    return this.getStringAttribute('data_transfer_protection');
  }

  // rpc_protection - computed: true, optional: false, required: false
  public get rpcProtection() {
    return this.getStringAttribute('rpc_protection');
  }
}
export interface DataAwsccDatasyncLocationHdfsTags {
}

export function dataAwsccDatasyncLocationHdfsTagsToTerraform(struct?: DataAwsccDatasyncLocationHdfsTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatasyncLocationHdfsTagsToHclTerraform(struct?: DataAwsccDatasyncLocationHdfsTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatasyncLocationHdfsTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDatasyncLocationHdfsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatasyncLocationHdfsTags | undefined) {
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

export class DataAwsccDatasyncLocationHdfsTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDatasyncLocationHdfsTagsOutputReference {
    return new DataAwsccDatasyncLocationHdfsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/datasync_location_hdfs awscc_datasync_location_hdfs}
*/
export class DataAwsccDatasyncLocationHdfs extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_datasync_location_hdfs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccDatasyncLocationHdfs resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccDatasyncLocationHdfs to import
  * @param importFromId The id of the existing DataAwsccDatasyncLocationHdfs that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/datasync_location_hdfs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccDatasyncLocationHdfs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datasync_location_hdfs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/datasync_location_hdfs awscc_datasync_location_hdfs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDatasyncLocationHdfsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDatasyncLocationHdfsConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_datasync_location_hdfs',
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

  // agent_arns - computed: true, optional: false, required: false
  public get agentArns() {
    return this.getListAttribute('agent_arns');
  }

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }

  // block_size - computed: true, optional: false, required: false
  public get blockSize() {
    return this.getNumberAttribute('block_size');
  }

  // cmk_secret_config - computed: true, optional: false, required: false
  private _cmkSecretConfig = new DataAwsccDatasyncLocationHdfsCmkSecretConfigOutputReference(this, "cmk_secret_config");
  public get cmkSecretConfig() {
    return this._cmkSecretConfig;
  }

  // custom_secret_config - computed: true, optional: false, required: false
  private _customSecretConfig = new DataAwsccDatasyncLocationHdfsCustomSecretConfigOutputReference(this, "custom_secret_config");
  public get customSecretConfig() {
    return this._customSecretConfig;
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

  // kerberos_keytab - computed: true, optional: false, required: false
  public get kerberosKeytab() {
    return this.getStringAttribute('kerberos_keytab');
  }

  // kerberos_krb_5_conf - computed: true, optional: false, required: false
  public get kerberosKrb5Conf() {
    return this.getStringAttribute('kerberos_krb_5_conf');
  }

  // kerberos_principal - computed: true, optional: false, required: false
  public get kerberosPrincipal() {
    return this.getStringAttribute('kerberos_principal');
  }

  // kms_key_provider_uri - computed: true, optional: false, required: false
  public get kmsKeyProviderUri() {
    return this.getStringAttribute('kms_key_provider_uri');
  }

  // location_arn - computed: true, optional: false, required: false
  public get locationArn() {
    return this.getStringAttribute('location_arn');
  }

  // location_uri - computed: true, optional: false, required: false
  public get locationUri() {
    return this.getStringAttribute('location_uri');
  }

  // managed_secret_config - computed: true, optional: false, required: false
  private _managedSecretConfig = new DataAwsccDatasyncLocationHdfsManagedSecretConfigOutputReference(this, "managed_secret_config");
  public get managedSecretConfig() {
    return this._managedSecretConfig;
  }

  // name_nodes - computed: true, optional: false, required: false
  private _nameNodes = new DataAwsccDatasyncLocationHdfsNameNodesList(this, "name_nodes", false);
  public get nameNodes() {
    return this._nameNodes;
  }

  // qop_configuration - computed: true, optional: false, required: false
  private _qopConfiguration = new DataAwsccDatasyncLocationHdfsQopConfigurationOutputReference(this, "qop_configuration");
  public get qopConfiguration() {
    return this._qopConfiguration;
  }

  // replication_factor - computed: true, optional: false, required: false
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }

  // simple_user - computed: true, optional: false, required: false
  public get simpleUser() {
    return this.getStringAttribute('simple_user');
  }

  // subdirectory - computed: true, optional: false, required: false
  public get subdirectory() {
    return this.getStringAttribute('subdirectory');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccDatasyncLocationHdfsTagsList(this, "tags", true);
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
