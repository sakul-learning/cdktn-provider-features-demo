// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IotanalyticsDatastoreConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#datastore_name IotanalyticsDatastore#datastore_name}
  */
  readonly datastoreName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#datastore_partitions IotanalyticsDatastore#datastore_partitions}
  */
  readonly datastorePartitions?: IotanalyticsDatastoreDatastorePartitions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#datastore_storage IotanalyticsDatastore#datastore_storage}
  */
  readonly datastoreStorage?: IotanalyticsDatastoreDatastoreStorage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#file_format_configuration IotanalyticsDatastore#file_format_configuration}
  */
  readonly fileFormatConfiguration?: IotanalyticsDatastoreFileFormatConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#retention_period IotanalyticsDatastore#retention_period}
  */
  readonly retentionPeriod?: IotanalyticsDatastoreRetentionPeriod;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#tags IotanalyticsDatastore#tags}
  */
  readonly tags?: IotanalyticsDatastoreTags[] | cdktn.IResolvable;
}
export interface IotanalyticsDatastoreDatastorePartitionsPartitionsPartition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#attribute_name IotanalyticsDatastore#attribute_name}
  */
  readonly attributeName?: string;
}

export function iotanalyticsDatastoreDatastorePartitionsPartitionsPartitionToTerraform(struct?: IotanalyticsDatastoreDatastorePartitionsPartitionsPartition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute_name: cdktn.stringToTerraform(struct!.attributeName),
  }
}


export function iotanalyticsDatastoreDatastorePartitionsPartitionsPartitionToHclTerraform(struct?: IotanalyticsDatastoreDatastorePartitionsPartitionsPartition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute_name: {
      value: cdktn.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsDatastoreDatastorePartitionsPartitionsPartition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatastoreDatastorePartitionsPartitionsPartition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
    }
  }

  // attribute_name - computed: true, optional: true, required: false
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  public resetAttributeName() {
    this._attributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }
}
export interface IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#attribute_name IotanalyticsDatastore#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#timestamp_format IotanalyticsDatastore#timestamp_format}
  */
  readonly timestampFormat?: string;
}

export function iotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionToTerraform(struct?: IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute_name: cdktn.stringToTerraform(struct!.attributeName),
    timestamp_format: cdktn.stringToTerraform(struct!.timestampFormat),
  }
}


export function iotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionToHclTerraform(struct?: IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute_name: {
      value: cdktn.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_format: {
      value: cdktn.stringToHclTerraform(struct!.timestampFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._timestampFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampFormat = this._timestampFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._timestampFormat = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._timestampFormat = value.timestampFormat;
    }
  }

  // attribute_name - computed: true, optional: true, required: false
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  public resetAttributeName() {
    this._attributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // timestamp_format - computed: true, optional: true, required: false
  private _timestampFormat?: string; 
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }
  public set timestampFormat(value: string) {
    this._timestampFormat = value;
  }
  public resetTimestampFormat() {
    this._timestampFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFormatInput() {
    return this._timestampFormat;
  }
}
export interface IotanalyticsDatastoreDatastorePartitionsPartitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#partition IotanalyticsDatastore#partition}
  */
  readonly partition?: IotanalyticsDatastoreDatastorePartitionsPartitionsPartition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#timestamp_partition IotanalyticsDatastore#timestamp_partition}
  */
  readonly timestampPartition?: IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition;
}

export function iotanalyticsDatastoreDatastorePartitionsPartitionsToTerraform(struct?: IotanalyticsDatastoreDatastorePartitionsPartitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    partition: iotanalyticsDatastoreDatastorePartitionsPartitionsPartitionToTerraform(struct!.partition),
    timestamp_partition: iotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionToTerraform(struct!.timestampPartition),
  }
}


export function iotanalyticsDatastoreDatastorePartitionsPartitionsToHclTerraform(struct?: IotanalyticsDatastoreDatastorePartitionsPartitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    partition: {
      value: iotanalyticsDatastoreDatastorePartitionsPartitionsPartitionToHclTerraform(struct!.partition),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsDatastoreDatastorePartitionsPartitionsPartition",
    },
    timestamp_partition: {
      value: iotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionToHclTerraform(struct!.timestampPartition),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IotanalyticsDatastoreDatastorePartitionsPartitions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition?.internalValue;
    }
    if (this._timestampPartition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampPartition = this._timestampPartition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatastoreDatastorePartitionsPartitions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._partition.internalValue = undefined;
      this._timestampPartition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._partition.internalValue = value.partition;
      this._timestampPartition.internalValue = value.timestampPartition;
    }
  }

  // partition - computed: true, optional: true, required: false
  private _partition = new IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference(this, "partition");
  public get partition() {
    return this._partition;
  }
  public putPartition(value: IotanalyticsDatastoreDatastorePartitionsPartitionsPartition) {
    this._partition.internalValue = value;
  }
  public resetPartition() {
    this._partition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition.internalValue;
  }

  // timestamp_partition - computed: true, optional: true, required: false
  private _timestampPartition = new IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference(this, "timestamp_partition");
  public get timestampPartition() {
    return this._timestampPartition;
  }
  public putTimestampPartition(value: IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition) {
    this._timestampPartition.internalValue = value;
  }
  public resetTimestampPartition() {
    this._timestampPartition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampPartitionInput() {
    return this._timestampPartition.internalValue;
  }
}

export class IotanalyticsDatastoreDatastorePartitionsPartitionsList extends cdktn.ComplexList {
  public internalValue? : IotanalyticsDatastoreDatastorePartitionsPartitions[] | cdktn.IResolvable

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
  public get(index: number): IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference {
    return new IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotanalyticsDatastoreDatastorePartitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#partitions IotanalyticsDatastore#partitions}
  */
  readonly partitions?: IotanalyticsDatastoreDatastorePartitionsPartitions[] | cdktn.IResolvable;
}

export function iotanalyticsDatastoreDatastorePartitionsToTerraform(struct?: IotanalyticsDatastoreDatastorePartitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    partitions: cdktn.listMapper(iotanalyticsDatastoreDatastorePartitionsPartitionsToTerraform, false)(struct!.partitions),
  }
}


export function iotanalyticsDatastoreDatastorePartitionsToHclTerraform(struct?: IotanalyticsDatastoreDatastorePartitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    partitions: {
      value: cdktn.listMapperHcl(iotanalyticsDatastoreDatastorePartitionsPartitionsToHclTerraform, false)(struct!.partitions),
      isBlock: true,
      type: "list",
      storageClassType: "IotanalyticsDatastoreDatastorePartitionsPartitionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatastoreDatastorePartitionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsDatastoreDatastorePartitions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitions = this._partitions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatastoreDatastorePartitions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._partitions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._partitions.internalValue = value.partitions;
    }
  }

  // partitions - computed: true, optional: true, required: false
  private _partitions = new IotanalyticsDatastoreDatastorePartitionsPartitionsList(this, "partitions", false);
  public get partitions() {
    return this._partitions;
  }
  public putPartitions(value: IotanalyticsDatastoreDatastorePartitionsPartitions[] | cdktn.IResolvable) {
    this._partitions.internalValue = value;
  }
  public resetPartitions() {
    this._partitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionsInput() {
    return this._partitions.internalValue;
  }
}
export interface IotanalyticsDatastoreDatastoreStorageCustomerManagedS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#bucket IotanalyticsDatastore#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#key_prefix IotanalyticsDatastore#key_prefix}
  */
  readonly keyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#role_arn IotanalyticsDatastore#role_arn}
  */
  readonly roleArn?: string;
}

export function iotanalyticsDatastoreDatastoreStorageCustomerManagedS3ToTerraform(struct?: IotanalyticsDatastoreDatastoreStorageCustomerManagedS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key_prefix: cdktn.stringToTerraform(struct!.keyPrefix),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function iotanalyticsDatastoreDatastoreStorageCustomerManagedS3ToHclTerraform(struct?: IotanalyticsDatastoreDatastoreStorageCustomerManagedS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_prefix: {
      value: cdktn.stringToHclTerraform(struct!.keyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsDatastoreDatastoreStorageCustomerManagedS3 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._keyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefix = this._keyPrefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatastoreDatastoreStorageCustomerManagedS3 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._keyPrefix = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._keyPrefix = value.keyPrefix;
      this._roleArn = value.roleArn;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // key_prefix - computed: true, optional: true, required: false
  private _keyPrefix?: string; 
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
  public set keyPrefix(value: string) {
    this._keyPrefix = value;
  }
  public resetKeyPrefix() {
    this._keyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixInput() {
    return this._keyPrefix;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#bucket IotanalyticsDatastore#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#key_prefix IotanalyticsDatastore#key_prefix}
  */
  readonly keyPrefix?: string;
}

export function iotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageToTerraform(struct?: IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key_prefix: cdktn.stringToTerraform(struct!.keyPrefix),
  }
}


export function iotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageToHclTerraform(struct?: IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_prefix: {
      value: cdktn.stringToHclTerraform(struct!.keyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._keyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefix = this._keyPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._keyPrefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._keyPrefix = value.keyPrefix;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // key_prefix - computed: true, optional: true, required: false
  private _keyPrefix?: string; 
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
  public set keyPrefix(value: string) {
    this._keyPrefix = value;
  }
  public resetKeyPrefix() {
    this._keyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixInput() {
    return this._keyPrefix;
  }
}
export interface IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#customer_managed_s3_storage IotanalyticsDatastore#customer_managed_s3_storage}
  */
  readonly customerManagedS3Storage?: IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage;
}

export function iotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageToTerraform(struct?: IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    customer_managed_s3_storage: iotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageToTerraform(struct!.customerManagedS3Storage),
  }
}


export function iotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageToHclTerraform(struct?: IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    customer_managed_s3_storage: {
      value: iotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageToHclTerraform(struct!.customerManagedS3Storage),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerManagedS3Storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerManagedS3Storage = this._customerManagedS3Storage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customerManagedS3Storage.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customerManagedS3Storage.internalValue = value.customerManagedS3Storage;
    }
  }

  // customer_managed_s3_storage - computed: true, optional: true, required: false
  private _customerManagedS3Storage = new IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference(this, "customer_managed_s3_storage");
  public get customerManagedS3Storage() {
    return this._customerManagedS3Storage;
  }
  public putCustomerManagedS3Storage(value: IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage) {
    this._customerManagedS3Storage.internalValue = value;
  }
  public resetCustomerManagedS3Storage() {
    this._customerManagedS3Storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedS3StorageInput() {
    return this._customerManagedS3Storage.internalValue;
  }
}
export interface IotanalyticsDatastoreDatastoreStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#customer_managed_s3 IotanalyticsDatastore#customer_managed_s3}
  */
  readonly customerManagedS3?: IotanalyticsDatastoreDatastoreStorageCustomerManagedS3;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#iot_site_wise_multi_layer_storage IotanalyticsDatastore#iot_site_wise_multi_layer_storage}
  */
  readonly iotSiteWiseMultiLayerStorage?: IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#service_managed_s3 IotanalyticsDatastore#service_managed_s3}
  */
  readonly serviceManagedS3?: string;
}

export function iotanalyticsDatastoreDatastoreStorageToTerraform(struct?: IotanalyticsDatastoreDatastoreStorage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    customer_managed_s3: iotanalyticsDatastoreDatastoreStorageCustomerManagedS3ToTerraform(struct!.customerManagedS3),
    iot_site_wise_multi_layer_storage: iotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageToTerraform(struct!.iotSiteWiseMultiLayerStorage),
    service_managed_s3: cdktn.stringToTerraform(struct!.serviceManagedS3),
  }
}


export function iotanalyticsDatastoreDatastoreStorageToHclTerraform(struct?: IotanalyticsDatastoreDatastoreStorage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    customer_managed_s3: {
      value: iotanalyticsDatastoreDatastoreStorageCustomerManagedS3ToHclTerraform(struct!.customerManagedS3),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsDatastoreDatastoreStorageCustomerManagedS3",
    },
    iot_site_wise_multi_layer_storage: {
      value: iotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageToHclTerraform(struct!.iotSiteWiseMultiLayerStorage),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage",
    },
    service_managed_s3: {
      value: cdktn.stringToHclTerraform(struct!.serviceManagedS3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatastoreDatastoreStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsDatastoreDatastoreStorage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerManagedS3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerManagedS3 = this._customerManagedS3?.internalValue;
    }
    if (this._iotSiteWiseMultiLayerStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotSiteWiseMultiLayerStorage = this._iotSiteWiseMultiLayerStorage?.internalValue;
    }
    if (this._serviceManagedS3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceManagedS3 = this._serviceManagedS3;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatastoreDatastoreStorage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customerManagedS3.internalValue = undefined;
      this._iotSiteWiseMultiLayerStorage.internalValue = undefined;
      this._serviceManagedS3 = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customerManagedS3.internalValue = value.customerManagedS3;
      this._iotSiteWiseMultiLayerStorage.internalValue = value.iotSiteWiseMultiLayerStorage;
      this._serviceManagedS3 = value.serviceManagedS3;
    }
  }

  // customer_managed_s3 - computed: true, optional: true, required: false
  private _customerManagedS3 = new IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference(this, "customer_managed_s3");
  public get customerManagedS3() {
    return this._customerManagedS3;
  }
  public putCustomerManagedS3(value: IotanalyticsDatastoreDatastoreStorageCustomerManagedS3) {
    this._customerManagedS3.internalValue = value;
  }
  public resetCustomerManagedS3() {
    this._customerManagedS3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedS3Input() {
    return this._customerManagedS3.internalValue;
  }

  // iot_site_wise_multi_layer_storage - computed: true, optional: true, required: false
  private _iotSiteWiseMultiLayerStorage = new IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference(this, "iot_site_wise_multi_layer_storage");
  public get iotSiteWiseMultiLayerStorage() {
    return this._iotSiteWiseMultiLayerStorage;
  }
  public putIotSiteWiseMultiLayerStorage(value: IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage) {
    this._iotSiteWiseMultiLayerStorage.internalValue = value;
  }
  public resetIotSiteWiseMultiLayerStorage() {
    this._iotSiteWiseMultiLayerStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotSiteWiseMultiLayerStorageInput() {
    return this._iotSiteWiseMultiLayerStorage.internalValue;
  }

  // service_managed_s3 - computed: true, optional: true, required: false
  private _serviceManagedS3?: string; 
  public get serviceManagedS3() {
    return this.getStringAttribute('service_managed_s3');
  }
  public set serviceManagedS3(value: string) {
    this._serviceManagedS3 = value;
  }
  public resetServiceManagedS3() {
    this._serviceManagedS3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceManagedS3Input() {
    return this._serviceManagedS3;
  }
}
export interface IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#name IotanalyticsDatastore#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#type IotanalyticsDatastore#type}
  */
  readonly type?: string;
}

export function iotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsToTerraform(struct?: IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function iotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsToHclTerraform(struct?: IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList extends cdktn.ComplexList {
  public internalValue? : IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns[] | cdktn.IResolvable

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
  public get(index: number): IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference {
    return new IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#columns IotanalyticsDatastore#columns}
  */
  readonly columns?: IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns[] | cdktn.IResolvable;
}

export function iotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionToTerraform(struct?: IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    columns: cdktn.listMapper(iotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsToTerraform, false)(struct!.columns),
  }
}


export function iotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionToHclTerraform(struct?: IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    columns: {
      value: cdktn.listMapperHcl(iotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsToHclTerraform, false)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns.internalValue = value.columns;
    }
  }

  // columns - computed: true, optional: true, required: false
  private _columns = new IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns[] | cdktn.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }
}
export interface IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#schema_definition IotanalyticsDatastore#schema_definition}
  */
  readonly schemaDefinition?: IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition;
}

export function iotanalyticsDatastoreFileFormatConfigurationParquetConfigurationToTerraform(struct?: IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schema_definition: iotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionToTerraform(struct!.schemaDefinition),
  }
}


export function iotanalyticsDatastoreFileFormatConfigurationParquetConfigurationToHclTerraform(struct?: IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    schema_definition: {
      value: iotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionToHclTerraform(struct!.schemaDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemaDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaDefinition = this._schemaDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schemaDefinition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schemaDefinition.internalValue = value.schemaDefinition;
    }
  }

  // schema_definition - computed: true, optional: true, required: false
  private _schemaDefinition = new IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference(this, "schema_definition");
  public get schemaDefinition() {
    return this._schemaDefinition;
  }
  public putSchemaDefinition(value: IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition) {
    this._schemaDefinition.internalValue = value;
  }
  public resetSchemaDefinition() {
    this._schemaDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaDefinitionInput() {
    return this._schemaDefinition.internalValue;
  }
}
export interface IotanalyticsDatastoreFileFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#json_configuration IotanalyticsDatastore#json_configuration}
  */
  readonly jsonConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#parquet_configuration IotanalyticsDatastore#parquet_configuration}
  */
  readonly parquetConfiguration?: IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration;
}

export function iotanalyticsDatastoreFileFormatConfigurationToTerraform(struct?: IotanalyticsDatastoreFileFormatConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    json_configuration: cdktn.stringToTerraform(struct!.jsonConfiguration),
    parquet_configuration: iotanalyticsDatastoreFileFormatConfigurationParquetConfigurationToTerraform(struct!.parquetConfiguration),
  }
}


export function iotanalyticsDatastoreFileFormatConfigurationToHclTerraform(struct?: IotanalyticsDatastoreFileFormatConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    json_configuration: {
      value: cdktn.stringToHclTerraform(struct!.jsonConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parquet_configuration: {
      value: iotanalyticsDatastoreFileFormatConfigurationParquetConfigurationToHclTerraform(struct!.parquetConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatastoreFileFormatConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsDatastoreFileFormatConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonConfiguration = this._jsonConfiguration;
    }
    if (this._parquetConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parquetConfiguration = this._parquetConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatastoreFileFormatConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonConfiguration = undefined;
      this._parquetConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonConfiguration = value.jsonConfiguration;
      this._parquetConfiguration.internalValue = value.parquetConfiguration;
    }
  }

  // json_configuration - computed: true, optional: true, required: false
  private _jsonConfiguration?: string; 
  public get jsonConfiguration() {
    return this.getStringAttribute('json_configuration');
  }
  public set jsonConfiguration(value: string) {
    this._jsonConfiguration = value;
  }
  public resetJsonConfiguration() {
    this._jsonConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonConfigurationInput() {
    return this._jsonConfiguration;
  }

  // parquet_configuration - computed: true, optional: true, required: false
  private _parquetConfiguration = new IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference(this, "parquet_configuration");
  public get parquetConfiguration() {
    return this._parquetConfiguration;
  }
  public putParquetConfiguration(value: IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration) {
    this._parquetConfiguration.internalValue = value;
  }
  public resetParquetConfiguration() {
    this._parquetConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parquetConfigurationInput() {
    return this._parquetConfiguration.internalValue;
  }
}
export interface IotanalyticsDatastoreRetentionPeriod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#number_of_days IotanalyticsDatastore#number_of_days}
  */
  readonly numberOfDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#unlimited IotanalyticsDatastore#unlimited}
  */
  readonly unlimited?: boolean | cdktn.IResolvable;
}

export function iotanalyticsDatastoreRetentionPeriodToTerraform(struct?: IotanalyticsDatastoreRetentionPeriod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    number_of_days: cdktn.numberToTerraform(struct!.numberOfDays),
    unlimited: cdktn.booleanToTerraform(struct!.unlimited),
  }
}


export function iotanalyticsDatastoreRetentionPeriodToHclTerraform(struct?: IotanalyticsDatastoreRetentionPeriod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    number_of_days: {
      value: cdktn.numberToHclTerraform(struct!.numberOfDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unlimited: {
      value: cdktn.booleanToHclTerraform(struct!.unlimited),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatastoreRetentionPeriodOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsDatastoreRetentionPeriod | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberOfDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfDays = this._numberOfDays;
    }
    if (this._unlimited !== undefined) {
      hasAnyValues = true;
      internalValueResult.unlimited = this._unlimited;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatastoreRetentionPeriod | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numberOfDays = undefined;
      this._unlimited = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numberOfDays = value.numberOfDays;
      this._unlimited = value.unlimited;
    }
  }

  // number_of_days - computed: true, optional: true, required: false
  private _numberOfDays?: number; 
  public get numberOfDays() {
    return this.getNumberAttribute('number_of_days');
  }
  public set numberOfDays(value: number) {
    this._numberOfDays = value;
  }
  public resetNumberOfDays() {
    this._numberOfDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfDaysInput() {
    return this._numberOfDays;
  }

  // unlimited - computed: true, optional: true, required: false
  private _unlimited?: boolean | cdktn.IResolvable; 
  public get unlimited() {
    return this.getBooleanAttribute('unlimited');
  }
  public set unlimited(value: boolean | cdktn.IResolvable) {
    this._unlimited = value;
  }
  public resetUnlimited() {
    this._unlimited = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unlimitedInput() {
    return this._unlimited;
  }
}
export interface IotanalyticsDatastoreTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#key IotanalyticsDatastore#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#value IotanalyticsDatastore#value}
  */
  readonly value?: string;
}

export function iotanalyticsDatastoreTagsToTerraform(struct?: IotanalyticsDatastoreTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotanalyticsDatastoreTagsToHclTerraform(struct?: IotanalyticsDatastoreTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsDatastoreTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IotanalyticsDatastoreTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsDatastoreTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class IotanalyticsDatastoreTagsList extends cdktn.ComplexList {
  public internalValue? : IotanalyticsDatastoreTags[] | cdktn.IResolvable

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
  public get(index: number): IotanalyticsDatastoreTagsOutputReference {
    return new IotanalyticsDatastoreTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore awscc_iotanalytics_datastore}
*/
export class IotanalyticsDatastore extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iotanalytics_datastore";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IotanalyticsDatastore resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotanalyticsDatastore to import
  * @param importFromId The id of the existing IotanalyticsDatastore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotanalyticsDatastore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotanalytics_datastore", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotanalytics_datastore awscc_iotanalytics_datastore} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotanalyticsDatastoreConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IotanalyticsDatastoreConfig = {}) {
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
    this._datastoreName = config.datastoreName;
    this._datastorePartitions.internalValue = config.datastorePartitions;
    this._datastoreStorage.internalValue = config.datastoreStorage;
    this._fileFormatConfiguration.internalValue = config.fileFormatConfiguration;
    this._retentionPeriod.internalValue = config.retentionPeriod;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datastore_id - computed: true, optional: false, required: false
  public get datastoreId() {
    return this.getStringAttribute('datastore_id');
  }

  // datastore_name - computed: true, optional: true, required: false
  private _datastoreName?: string; 
  public get datastoreName() {
    return this.getStringAttribute('datastore_name');
  }
  public set datastoreName(value: string) {
    this._datastoreName = value;
  }
  public resetDatastoreName() {
    this._datastoreName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreNameInput() {
    return this._datastoreName;
  }

  // datastore_partitions - computed: true, optional: true, required: false
  private _datastorePartitions = new IotanalyticsDatastoreDatastorePartitionsOutputReference(this, "datastore_partitions");
  public get datastorePartitions() {
    return this._datastorePartitions;
  }
  public putDatastorePartitions(value: IotanalyticsDatastoreDatastorePartitions) {
    this._datastorePartitions.internalValue = value;
  }
  public resetDatastorePartitions() {
    this._datastorePartitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastorePartitionsInput() {
    return this._datastorePartitions.internalValue;
  }

  // datastore_storage - computed: true, optional: true, required: false
  private _datastoreStorage = new IotanalyticsDatastoreDatastoreStorageOutputReference(this, "datastore_storage");
  public get datastoreStorage() {
    return this._datastoreStorage;
  }
  public putDatastoreStorage(value: IotanalyticsDatastoreDatastoreStorage) {
    this._datastoreStorage.internalValue = value;
  }
  public resetDatastoreStorage() {
    this._datastoreStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreStorageInput() {
    return this._datastoreStorage.internalValue;
  }

  // file_format_configuration - computed: true, optional: true, required: false
  private _fileFormatConfiguration = new IotanalyticsDatastoreFileFormatConfigurationOutputReference(this, "file_format_configuration");
  public get fileFormatConfiguration() {
    return this._fileFormatConfiguration;
  }
  public putFileFormatConfiguration(value: IotanalyticsDatastoreFileFormatConfiguration) {
    this._fileFormatConfiguration.internalValue = value;
  }
  public resetFileFormatConfiguration() {
    this._fileFormatConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFormatConfigurationInput() {
    return this._fileFormatConfiguration.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // retention_period - computed: true, optional: true, required: false
  private _retentionPeriod = new IotanalyticsDatastoreRetentionPeriodOutputReference(this, "retention_period");
  public get retentionPeriod() {
    return this._retentionPeriod;
  }
  public putRetentionPeriod(value: IotanalyticsDatastoreRetentionPeriod) {
    this._retentionPeriod.internalValue = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new IotanalyticsDatastoreTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IotanalyticsDatastoreTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datastore_name: cdktn.stringToTerraform(this._datastoreName),
      datastore_partitions: iotanalyticsDatastoreDatastorePartitionsToTerraform(this._datastorePartitions.internalValue),
      datastore_storage: iotanalyticsDatastoreDatastoreStorageToTerraform(this._datastoreStorage.internalValue),
      file_format_configuration: iotanalyticsDatastoreFileFormatConfigurationToTerraform(this._fileFormatConfiguration.internalValue),
      retention_period: iotanalyticsDatastoreRetentionPeriodToTerraform(this._retentionPeriod.internalValue),
      tags: cdktn.listMapper(iotanalyticsDatastoreTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datastore_name: {
        value: cdktn.stringToHclTerraform(this._datastoreName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datastore_partitions: {
        value: iotanalyticsDatastoreDatastorePartitionsToHclTerraform(this._datastorePartitions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotanalyticsDatastoreDatastorePartitions",
      },
      datastore_storage: {
        value: iotanalyticsDatastoreDatastoreStorageToHclTerraform(this._datastoreStorage.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotanalyticsDatastoreDatastoreStorage",
      },
      file_format_configuration: {
        value: iotanalyticsDatastoreFileFormatConfigurationToHclTerraform(this._fileFormatConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotanalyticsDatastoreFileFormatConfiguration",
      },
      retention_period: {
        value: iotanalyticsDatastoreRetentionPeriodToHclTerraform(this._retentionPeriod.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotanalyticsDatastoreRetentionPeriod",
      },
      tags: {
        value: cdktn.listMapperHcl(iotanalyticsDatastoreTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotanalyticsDatastoreTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
