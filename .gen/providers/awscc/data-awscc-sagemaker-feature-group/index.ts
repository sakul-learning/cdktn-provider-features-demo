// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/sagemaker_feature_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSagemakerFeatureGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/sagemaker_feature_group#id DataAwsccSagemakerFeatureGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSagemakerFeatureGroupFeatureDefinitions {
}

export function dataAwsccSagemakerFeatureGroupFeatureDefinitionsToTerraform(struct?: DataAwsccSagemakerFeatureGroupFeatureDefinitions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerFeatureGroupFeatureDefinitionsToHclTerraform(struct?: DataAwsccSagemakerFeatureGroupFeatureDefinitions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerFeatureGroupFeatureDefinitionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerFeatureGroupFeatureDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerFeatureGroupFeatureDefinitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // feature_name - computed: true, optional: false, required: false
  public get featureName() {
    return this.getStringAttribute('feature_name');
  }

  // feature_type - computed: true, optional: false, required: false
  public get featureType() {
    return this.getStringAttribute('feature_type');
  }
}

export class DataAwsccSagemakerFeatureGroupFeatureDefinitionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerFeatureGroupFeatureDefinitionsOutputReference {
    return new DataAwsccSagemakerFeatureGroupFeatureDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig {
}

export function dataAwsccSagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigToTerraform(struct?: DataAwsccSagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigToHclTerraform(struct?: DataAwsccSagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog - computed: true, optional: false, required: false
  public get catalog() {
    return this.getStringAttribute('catalog');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}
export interface DataAwsccSagemakerFeatureGroupOfflineStoreConfigS3StorageConfig {
}

export function dataAwsccSagemakerFeatureGroupOfflineStoreConfigS3StorageConfigToTerraform(struct?: DataAwsccSagemakerFeatureGroupOfflineStoreConfigS3StorageConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerFeatureGroupOfflineStoreConfigS3StorageConfigToHclTerraform(struct?: DataAwsccSagemakerFeatureGroupOfflineStoreConfigS3StorageConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerFeatureGroupOfflineStoreConfigS3StorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerFeatureGroupOfflineStoreConfigS3StorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}
export interface DataAwsccSagemakerFeatureGroupOfflineStoreConfig {
}

export function dataAwsccSagemakerFeatureGroupOfflineStoreConfigToTerraform(struct?: DataAwsccSagemakerFeatureGroupOfflineStoreConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerFeatureGroupOfflineStoreConfigToHclTerraform(struct?: DataAwsccSagemakerFeatureGroupOfflineStoreConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerFeatureGroupOfflineStoreConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerFeatureGroupOfflineStoreConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerFeatureGroupOfflineStoreConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_catalog_config - computed: true, optional: false, required: false
  private _dataCatalogConfig = new DataAwsccSagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference(this, "data_catalog_config");
  public get dataCatalogConfig() {
    return this._dataCatalogConfig;
  }

  // disable_glue_table_creation - computed: true, optional: false, required: false
  public get disableGlueTableCreation() {
    return this.getBooleanAttribute('disable_glue_table_creation');
  }

  // s3_storage_config - computed: true, optional: false, required: false
  private _s3StorageConfig = new DataAwsccSagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference(this, "s3_storage_config");
  public get s3StorageConfig() {
    return this._s3StorageConfig;
  }

  // table_format - computed: true, optional: false, required: false
  public get tableFormat() {
    return this.getStringAttribute('table_format');
  }
}
export interface DataAwsccSagemakerFeatureGroupOnlineStoreConfigSecurityConfig {
}

export function dataAwsccSagemakerFeatureGroupOnlineStoreConfigSecurityConfigToTerraform(struct?: DataAwsccSagemakerFeatureGroupOnlineStoreConfigSecurityConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerFeatureGroupOnlineStoreConfigSecurityConfigToHclTerraform(struct?: DataAwsccSagemakerFeatureGroupOnlineStoreConfigSecurityConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerFeatureGroupOnlineStoreConfigSecurityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerFeatureGroupOnlineStoreConfigSecurityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
}
export interface DataAwsccSagemakerFeatureGroupOnlineStoreConfigTtlDuration {
}

export function dataAwsccSagemakerFeatureGroupOnlineStoreConfigTtlDurationToTerraform(struct?: DataAwsccSagemakerFeatureGroupOnlineStoreConfigTtlDuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerFeatureGroupOnlineStoreConfigTtlDurationToHclTerraform(struct?: DataAwsccSagemakerFeatureGroupOnlineStoreConfigTtlDuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerFeatureGroupOnlineStoreConfigTtlDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerFeatureGroupOnlineStoreConfigTtlDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccSagemakerFeatureGroupOnlineStoreConfig {
}

export function dataAwsccSagemakerFeatureGroupOnlineStoreConfigToTerraform(struct?: DataAwsccSagemakerFeatureGroupOnlineStoreConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerFeatureGroupOnlineStoreConfigToHclTerraform(struct?: DataAwsccSagemakerFeatureGroupOnlineStoreConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerFeatureGroupOnlineStoreConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerFeatureGroupOnlineStoreConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerFeatureGroupOnlineStoreConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_online_store - computed: true, optional: false, required: false
  public get enableOnlineStore() {
    return this.getBooleanAttribute('enable_online_store');
  }

  // security_config - computed: true, optional: false, required: false
  private _securityConfig = new DataAwsccSagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference(this, "security_config");
  public get securityConfig() {
    return this._securityConfig;
  }

  // storage_type - computed: true, optional: false, required: false
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }

  // ttl_duration - computed: true, optional: false, required: false
  private _ttlDuration = new DataAwsccSagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference(this, "ttl_duration");
  public get ttlDuration() {
    return this._ttlDuration;
  }
}
export interface DataAwsccSagemakerFeatureGroupTags {
}

export function dataAwsccSagemakerFeatureGroupTagsToTerraform(struct?: DataAwsccSagemakerFeatureGroupTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerFeatureGroupTagsToHclTerraform(struct?: DataAwsccSagemakerFeatureGroupTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerFeatureGroupTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerFeatureGroupTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerFeatureGroupTags | undefined) {
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

export class DataAwsccSagemakerFeatureGroupTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerFeatureGroupTagsOutputReference {
    return new DataAwsccSagemakerFeatureGroupTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerFeatureGroupThroughputConfig {
}

export function dataAwsccSagemakerFeatureGroupThroughputConfigToTerraform(struct?: DataAwsccSagemakerFeatureGroupThroughputConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerFeatureGroupThroughputConfigToHclTerraform(struct?: DataAwsccSagemakerFeatureGroupThroughputConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerFeatureGroupThroughputConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerFeatureGroupThroughputConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerFeatureGroupThroughputConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // provisioned_read_capacity_units - computed: true, optional: false, required: false
  public get provisionedReadCapacityUnits() {
    return this.getNumberAttribute('provisioned_read_capacity_units');
  }

  // provisioned_write_capacity_units - computed: true, optional: false, required: false
  public get provisionedWriteCapacityUnits() {
    return this.getNumberAttribute('provisioned_write_capacity_units');
  }

  // throughput_mode - computed: true, optional: false, required: false
  public get throughputMode() {
    return this.getStringAttribute('throughput_mode');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/sagemaker_feature_group awscc_sagemaker_feature_group}
*/
export class DataAwsccSagemakerFeatureGroup extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_feature_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSagemakerFeatureGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSagemakerFeatureGroup to import
  * @param importFromId The id of the existing DataAwsccSagemakerFeatureGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/sagemaker_feature_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSagemakerFeatureGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_feature_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/sagemaker_feature_group awscc_sagemaker_feature_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSagemakerFeatureGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSagemakerFeatureGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_feature_group',
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

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // event_time_feature_name - computed: true, optional: false, required: false
  public get eventTimeFeatureName() {
    return this.getStringAttribute('event_time_feature_name');
  }

  // feature_definitions - computed: true, optional: false, required: false
  private _featureDefinitions = new DataAwsccSagemakerFeatureGroupFeatureDefinitionsList(this, "feature_definitions", false);
  public get featureDefinitions() {
    return this._featureDefinitions;
  }

  // feature_group_name - computed: true, optional: false, required: false
  public get featureGroupName() {
    return this.getStringAttribute('feature_group_name');
  }

  // feature_group_status - computed: true, optional: false, required: false
  public get featureGroupStatus() {
    return this.getStringAttribute('feature_group_status');
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

  // offline_store_config - computed: true, optional: false, required: false
  private _offlineStoreConfig = new DataAwsccSagemakerFeatureGroupOfflineStoreConfigOutputReference(this, "offline_store_config");
  public get offlineStoreConfig() {
    return this._offlineStoreConfig;
  }

  // online_store_config - computed: true, optional: false, required: false
  private _onlineStoreConfig = new DataAwsccSagemakerFeatureGroupOnlineStoreConfigOutputReference(this, "online_store_config");
  public get onlineStoreConfig() {
    return this._onlineStoreConfig;
  }

  // record_identifier_feature_name - computed: true, optional: false, required: false
  public get recordIdentifierFeatureName() {
    return this.getStringAttribute('record_identifier_feature_name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccSagemakerFeatureGroupTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // throughput_config - computed: true, optional: false, required: false
  private _throughputConfig = new DataAwsccSagemakerFeatureGroupThroughputConfigOutputReference(this, "throughput_config");
  public get throughputConfig() {
    return this._throughputConfig;
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
