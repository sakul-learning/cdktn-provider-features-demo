// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/iotanalytics_datastore
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccIotanalyticsDatastoreConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/iotanalytics_datastore#id DataAwsccIotanalyticsDatastore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartition {
}

export function dataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionToTerraform(struct?: DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionToHclTerraform(struct?: DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
}
export interface DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition {
}

export function dataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionToTerraform(struct?: DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionToHclTerraform(struct?: DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // timestamp_format - computed: true, optional: false, required: false
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }
}
export interface DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitions {
}

export function dataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsToTerraform(struct?: DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsToHclTerraform(struct?: DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // partition - computed: true, optional: false, required: false
  private _partition = new DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference(this, "partition");
  public get partition() {
    return this._partition;
  }

  // timestamp_partition - computed: true, optional: false, required: false
  private _timestampPartition = new DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference(this, "timestamp_partition");
  public get timestampPartition() {
    return this._timestampPartition;
  }
}

export class DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference {
    return new DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotanalyticsDatastoreDatastorePartitions {
}

export function dataAwsccIotanalyticsDatastoreDatastorePartitionsToTerraform(struct?: DataAwsccIotanalyticsDatastoreDatastorePartitions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatastoreDatastorePartitionsToHclTerraform(struct?: DataAwsccIotanalyticsDatastoreDatastorePartitions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsDatastoreDatastorePartitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatastoreDatastorePartitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // partitions - computed: true, optional: false, required: false
  private _partitions = new DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList(this, "partitions", false);
  public get partitions() {
    return this._partitions;
  }
}
export interface DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3 {
}

export function dataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3ToTerraform(struct?: DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3ToHclTerraform(struct?: DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key_prefix - computed: true, optional: false, required: false
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage {
}

export function dataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageToTerraform(struct?: DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageToHclTerraform(struct?: DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key_prefix - computed: true, optional: false, required: false
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
}
export interface DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage {
}

export function dataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageToTerraform(struct?: DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageToHclTerraform(struct?: DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // customer_managed_s3_storage - computed: true, optional: false, required: false
  private _customerManagedS3Storage = new DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference(this, "customer_managed_s3_storage");
  public get customerManagedS3Storage() {
    return this._customerManagedS3Storage;
  }
}
export interface DataAwsccIotanalyticsDatastoreDatastoreStorage {
}

export function dataAwsccIotanalyticsDatastoreDatastoreStorageToTerraform(struct?: DataAwsccIotanalyticsDatastoreDatastoreStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatastoreDatastoreStorageToHclTerraform(struct?: DataAwsccIotanalyticsDatastoreDatastoreStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsDatastoreDatastoreStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatastoreDatastoreStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // customer_managed_s3 - computed: true, optional: false, required: false
  private _customerManagedS3 = new DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference(this, "customer_managed_s3");
  public get customerManagedS3() {
    return this._customerManagedS3;
  }

  // iot_site_wise_multi_layer_storage - computed: true, optional: false, required: false
  private _iotSiteWiseMultiLayerStorage = new DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference(this, "iot_site_wise_multi_layer_storage");
  public get iotSiteWiseMultiLayerStorage() {
    return this._iotSiteWiseMultiLayerStorage;
  }

  // service_managed_s3 - computed: true, optional: false, required: false
  public get serviceManagedS3() {
    return this.getStringAttribute('service_managed_s3');
  }
}
export interface DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns {
}

export function dataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsToTerraform(struct?: DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsToHclTerraform(struct?: DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference {
    return new DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition {
}

export function dataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionToTerraform(struct?: DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionToHclTerraform(struct?: DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // columns - computed: true, optional: false, required: false
  private _columns = new DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
}
export interface DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfiguration {
}

export function dataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationToTerraform(struct?: DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationToHclTerraform(struct?: DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // schema_definition - computed: true, optional: false, required: false
  private _schemaDefinition = new DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference(this, "schema_definition");
  public get schemaDefinition() {
    return this._schemaDefinition;
  }
}
export interface DataAwsccIotanalyticsDatastoreFileFormatConfiguration {
}

export function dataAwsccIotanalyticsDatastoreFileFormatConfigurationToTerraform(struct?: DataAwsccIotanalyticsDatastoreFileFormatConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatastoreFileFormatConfigurationToHclTerraform(struct?: DataAwsccIotanalyticsDatastoreFileFormatConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsDatastoreFileFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatastoreFileFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // json_configuration - computed: true, optional: false, required: false
  public get jsonConfiguration() {
    return this.getStringAttribute('json_configuration');
  }

  // parquet_configuration - computed: true, optional: false, required: false
  private _parquetConfiguration = new DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference(this, "parquet_configuration");
  public get parquetConfiguration() {
    return this._parquetConfiguration;
  }
}
export interface DataAwsccIotanalyticsDatastoreRetentionPeriod {
}

export function dataAwsccIotanalyticsDatastoreRetentionPeriodToTerraform(struct?: DataAwsccIotanalyticsDatastoreRetentionPeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatastoreRetentionPeriodToHclTerraform(struct?: DataAwsccIotanalyticsDatastoreRetentionPeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsDatastoreRetentionPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatastoreRetentionPeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number_of_days - computed: true, optional: false, required: false
  public get numberOfDays() {
    return this.getNumberAttribute('number_of_days');
  }

  // unlimited - computed: true, optional: false, required: false
  public get unlimited() {
    return this.getBooleanAttribute('unlimited');
  }
}
export interface DataAwsccIotanalyticsDatastoreTags {
}

export function dataAwsccIotanalyticsDatastoreTagsToTerraform(struct?: DataAwsccIotanalyticsDatastoreTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatastoreTagsToHclTerraform(struct?: DataAwsccIotanalyticsDatastoreTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatastoreTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotanalyticsDatastoreTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatastoreTags | undefined) {
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

export class DataAwsccIotanalyticsDatastoreTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotanalyticsDatastoreTagsOutputReference {
    return new DataAwsccIotanalyticsDatastoreTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/iotanalytics_datastore awscc_iotanalytics_datastore}
*/
export class DataAwsccIotanalyticsDatastore extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iotanalytics_datastore";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccIotanalyticsDatastore resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccIotanalyticsDatastore to import
  * @param importFromId The id of the existing DataAwsccIotanalyticsDatastore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/iotanalytics_datastore#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccIotanalyticsDatastore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotanalytics_datastore", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/iotanalytics_datastore awscc_iotanalytics_datastore} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotanalyticsDatastoreConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotanalyticsDatastoreConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotanalytics_datastore',
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

  // datastore_id - computed: true, optional: false, required: false
  public get datastoreId() {
    return this.getStringAttribute('datastore_id');
  }

  // datastore_name - computed: true, optional: false, required: false
  public get datastoreName() {
    return this.getStringAttribute('datastore_name');
  }

  // datastore_partitions - computed: true, optional: false, required: false
  private _datastorePartitions = new DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference(this, "datastore_partitions");
  public get datastorePartitions() {
    return this._datastorePartitions;
  }

  // datastore_storage - computed: true, optional: false, required: false
  private _datastoreStorage = new DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference(this, "datastore_storage");
  public get datastoreStorage() {
    return this._datastoreStorage;
  }

  // file_format_configuration - computed: true, optional: false, required: false
  private _fileFormatConfiguration = new DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference(this, "file_format_configuration");
  public get fileFormatConfiguration() {
    return this._fileFormatConfiguration;
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

  // retention_period - computed: true, optional: false, required: false
  private _retentionPeriod = new DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference(this, "retention_period");
  public get retentionPeriod() {
    return this._retentionPeriod;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccIotanalyticsDatastoreTagsList(this, "tags", false);
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
