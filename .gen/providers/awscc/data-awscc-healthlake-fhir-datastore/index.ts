// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/healthlake_fhir_datastore
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccHealthlakeFhirDatastoreConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/healthlake_fhir_datastore#id DataAwsccHealthlakeFhirDatastore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccHealthlakeFhirDatastoreCreatedAt {
}

export function dataAwsccHealthlakeFhirDatastoreCreatedAtToTerraform(struct?: DataAwsccHealthlakeFhirDatastoreCreatedAt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccHealthlakeFhirDatastoreCreatedAtToHclTerraform(struct?: DataAwsccHealthlakeFhirDatastoreCreatedAt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccHealthlakeFhirDatastoreCreatedAt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccHealthlakeFhirDatastoreCreatedAt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nanos - computed: true, optional: false, required: false
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }

  // seconds - computed: true, optional: false, required: false
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
}
export interface DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration {
}

export function dataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationToTerraform(struct?: DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationToHclTerraform(struct?: DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_strategy - computed: true, optional: false, required: false
  public get authorizationStrategy() {
    return this.getStringAttribute('authorization_strategy');
  }

  // fine_grained_authorization_enabled - computed: true, optional: false, required: false
  public get fineGrainedAuthorizationEnabled() {
    return this.getBooleanAttribute('fine_grained_authorization_enabled');
  }

  // idp_lambda_arn - computed: true, optional: false, required: false
  public get idpLambdaArn() {
    return this.getStringAttribute('idp_lambda_arn');
  }

  // metadata - computed: true, optional: false, required: false
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
}
export interface DataAwsccHealthlakeFhirDatastorePreloadDataConfig {
}

export function dataAwsccHealthlakeFhirDatastorePreloadDataConfigToTerraform(struct?: DataAwsccHealthlakeFhirDatastorePreloadDataConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccHealthlakeFhirDatastorePreloadDataConfigToHclTerraform(struct?: DataAwsccHealthlakeFhirDatastorePreloadDataConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccHealthlakeFhirDatastorePreloadDataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccHealthlakeFhirDatastorePreloadDataConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // preload_data_type - computed: true, optional: false, required: false
  public get preloadDataType() {
    return this.getStringAttribute('preload_data_type');
  }
}
export interface DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig {
}

export function dataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigToTerraform(struct?: DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigToHclTerraform(struct?: DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cmk_type - computed: true, optional: false, required: false
  public get cmkType() {
    return this.getStringAttribute('cmk_type');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
}
export interface DataAwsccHealthlakeFhirDatastoreSseConfiguration {
}

export function dataAwsccHealthlakeFhirDatastoreSseConfigurationToTerraform(struct?: DataAwsccHealthlakeFhirDatastoreSseConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccHealthlakeFhirDatastoreSseConfigurationToHclTerraform(struct?: DataAwsccHealthlakeFhirDatastoreSseConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccHealthlakeFhirDatastoreSseConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccHealthlakeFhirDatastoreSseConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_encryption_config - computed: true, optional: false, required: false
  private _kmsEncryptionConfig = new DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference(this, "kms_encryption_config");
  public get kmsEncryptionConfig() {
    return this._kmsEncryptionConfig;
  }
}
export interface DataAwsccHealthlakeFhirDatastoreTags {
}

export function dataAwsccHealthlakeFhirDatastoreTagsToTerraform(struct?: DataAwsccHealthlakeFhirDatastoreTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccHealthlakeFhirDatastoreTagsToHclTerraform(struct?: DataAwsccHealthlakeFhirDatastoreTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccHealthlakeFhirDatastoreTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccHealthlakeFhirDatastoreTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccHealthlakeFhirDatastoreTags | undefined) {
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

export class DataAwsccHealthlakeFhirDatastoreTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccHealthlakeFhirDatastoreTagsOutputReference {
    return new DataAwsccHealthlakeFhirDatastoreTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/healthlake_fhir_datastore awscc_healthlake_fhir_datastore}
*/
export class DataAwsccHealthlakeFhirDatastore extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_healthlake_fhir_datastore";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccHealthlakeFhirDatastore resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccHealthlakeFhirDatastore to import
  * @param importFromId The id of the existing DataAwsccHealthlakeFhirDatastore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/healthlake_fhir_datastore#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccHealthlakeFhirDatastore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_healthlake_fhir_datastore", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/healthlake_fhir_datastore awscc_healthlake_fhir_datastore} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccHealthlakeFhirDatastoreConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccHealthlakeFhirDatastoreConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_healthlake_fhir_datastore',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.94.0'
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

  // created_at - computed: true, optional: false, required: false
  private _createdAt = new DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference(this, "created_at");
  public get createdAt() {
    return this._createdAt;
  }

  // datastore_arn - computed: true, optional: false, required: false
  public get datastoreArn() {
    return this.getStringAttribute('datastore_arn');
  }

  // datastore_endpoint - computed: true, optional: false, required: false
  public get datastoreEndpoint() {
    return this.getStringAttribute('datastore_endpoint');
  }

  // datastore_id - computed: true, optional: false, required: false
  public get datastoreId() {
    return this.getStringAttribute('datastore_id');
  }

  // datastore_name - computed: true, optional: false, required: false
  public get datastoreName() {
    return this.getStringAttribute('datastore_name');
  }

  // datastore_status - computed: true, optional: false, required: false
  public get datastoreStatus() {
    return this.getStringAttribute('datastore_status');
  }

  // datastore_type_version - computed: true, optional: false, required: false
  public get datastoreTypeVersion() {
    return this.getStringAttribute('datastore_type_version');
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

  // identity_provider_configuration - computed: true, optional: false, required: false
  private _identityProviderConfiguration = new DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference(this, "identity_provider_configuration");
  public get identityProviderConfiguration() {
    return this._identityProviderConfiguration;
  }

  // preload_data_config - computed: true, optional: false, required: false
  private _preloadDataConfig = new DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference(this, "preload_data_config");
  public get preloadDataConfig() {
    return this._preloadDataConfig;
  }

  // sse_configuration - computed: true, optional: false, required: false
  private _sseConfiguration = new DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference(this, "sse_configuration");
  public get sseConfiguration() {
    return this._sseConfiguration;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccHealthlakeFhirDatastoreTagsList(this, "tags", false);
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
