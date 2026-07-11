// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/datasync_location_azure_blob
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccDatasyncLocationAzureBlobConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/datasync_location_azure_blob#id DataAwsccDatasyncLocationAzureBlob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration {
}

export function dataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationToTerraform(struct?: DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationToHclTerraform(struct?: DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_blob_sas_token - computed: true, optional: false, required: false
  public get azureBlobSasToken() {
    return this.getStringAttribute('azure_blob_sas_token');
  }
}
export interface DataAwsccDatasyncLocationAzureBlobCmkSecretConfig {
}

export function dataAwsccDatasyncLocationAzureBlobCmkSecretConfigToTerraform(struct?: DataAwsccDatasyncLocationAzureBlobCmkSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatasyncLocationAzureBlobCmkSecretConfigToHclTerraform(struct?: DataAwsccDatasyncLocationAzureBlobCmkSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatasyncLocationAzureBlobCmkSecretConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatasyncLocationAzureBlobCmkSecretConfig | undefined) {
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
export interface DataAwsccDatasyncLocationAzureBlobCustomSecretConfig {
}

export function dataAwsccDatasyncLocationAzureBlobCustomSecretConfigToTerraform(struct?: DataAwsccDatasyncLocationAzureBlobCustomSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatasyncLocationAzureBlobCustomSecretConfigToHclTerraform(struct?: DataAwsccDatasyncLocationAzureBlobCustomSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatasyncLocationAzureBlobCustomSecretConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatasyncLocationAzureBlobCustomSecretConfig | undefined) {
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
export interface DataAwsccDatasyncLocationAzureBlobManagedSecretConfig {
}

export function dataAwsccDatasyncLocationAzureBlobManagedSecretConfigToTerraform(struct?: DataAwsccDatasyncLocationAzureBlobManagedSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatasyncLocationAzureBlobManagedSecretConfigToHclTerraform(struct?: DataAwsccDatasyncLocationAzureBlobManagedSecretConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatasyncLocationAzureBlobManagedSecretConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatasyncLocationAzureBlobManagedSecretConfig | undefined) {
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
export interface DataAwsccDatasyncLocationAzureBlobTags {
}

export function dataAwsccDatasyncLocationAzureBlobTagsToTerraform(struct?: DataAwsccDatasyncLocationAzureBlobTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatasyncLocationAzureBlobTagsToHclTerraform(struct?: DataAwsccDatasyncLocationAzureBlobTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatasyncLocationAzureBlobTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDatasyncLocationAzureBlobTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatasyncLocationAzureBlobTags | undefined) {
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

export class DataAwsccDatasyncLocationAzureBlobTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDatasyncLocationAzureBlobTagsOutputReference {
    return new DataAwsccDatasyncLocationAzureBlobTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/datasync_location_azure_blob awscc_datasync_location_azure_blob}
*/
export class DataAwsccDatasyncLocationAzureBlob extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_datasync_location_azure_blob";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccDatasyncLocationAzureBlob resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccDatasyncLocationAzureBlob to import
  * @param importFromId The id of the existing DataAwsccDatasyncLocationAzureBlob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/datasync_location_azure_blob#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccDatasyncLocationAzureBlob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datasync_location_azure_blob", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/datasync_location_azure_blob awscc_datasync_location_azure_blob} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDatasyncLocationAzureBlobConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDatasyncLocationAzureBlobConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_datasync_location_azure_blob',
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

  // azure_access_tier - computed: true, optional: false, required: false
  public get azureAccessTier() {
    return this.getStringAttribute('azure_access_tier');
  }

  // azure_blob_authentication_type - computed: true, optional: false, required: false
  public get azureBlobAuthenticationType() {
    return this.getStringAttribute('azure_blob_authentication_type');
  }

  // azure_blob_container_url - computed: true, optional: false, required: false
  public get azureBlobContainerUrl() {
    return this.getStringAttribute('azure_blob_container_url');
  }

  // azure_blob_sas_configuration - computed: true, optional: false, required: false
  private _azureBlobSasConfiguration = new DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference(this, "azure_blob_sas_configuration");
  public get azureBlobSasConfiguration() {
    return this._azureBlobSasConfiguration;
  }

  // azure_blob_type - computed: true, optional: false, required: false
  public get azureBlobType() {
    return this.getStringAttribute('azure_blob_type');
  }

  // cmk_secret_config - computed: true, optional: false, required: false
  private _cmkSecretConfig = new DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference(this, "cmk_secret_config");
  public get cmkSecretConfig() {
    return this._cmkSecretConfig;
  }

  // custom_secret_config - computed: true, optional: false, required: false
  private _customSecretConfig = new DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference(this, "custom_secret_config");
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

  // location_arn - computed: true, optional: false, required: false
  public get locationArn() {
    return this.getStringAttribute('location_arn');
  }

  // location_uri - computed: true, optional: false, required: false
  public get locationUri() {
    return this.getStringAttribute('location_uri');
  }

  // managed_secret_config - computed: true, optional: false, required: false
  private _managedSecretConfig = new DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference(this, "managed_secret_config");
  public get managedSecretConfig() {
    return this._managedSecretConfig;
  }

  // subdirectory - computed: true, optional: false, required: false
  public get subdirectory() {
    return this.getStringAttribute('subdirectory');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccDatasyncLocationAzureBlobTagsList(this, "tags", true);
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
