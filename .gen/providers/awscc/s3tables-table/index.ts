// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface S3TablesTableConfig extends cdktn.TerraformMetaArguments {
  /**
  * Settings governing the Compaction maintenance action. Contains details about the compaction settings for an Iceberg table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#compaction S3TablesTable#compaction}
  */
  readonly compaction?: S3TablesTableCompaction;
  /**
  * Contains details about the metadata for an Iceberg table. Specify either IcebergSchema (for simple flat schemas with primitive types only) or IcebergSchemaV2 (for schemas with nested types like struct, list, map), but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#iceberg_metadata S3TablesTable#iceberg_metadata}
  */
  readonly icebergMetadata?: S3TablesTableIcebergMetadata;
  /**
  * The namespace that the table belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#namespace S3TablesTable#namespace}
  */
  readonly namespace: string;
  /**
  * Format of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#open_table_format S3TablesTable#open_table_format}
  */
  readonly openTableFormat: string;
  /**
  * Contains details about the snapshot management settings for an Iceberg table. A snapshot is expired when it exceeds MinSnapshotsToKeep and MaxSnapshotAgeHours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#snapshot_management S3TablesTable#snapshot_management}
  */
  readonly snapshotManagement?: S3TablesTableSnapshotManagement;
  /**
  * Specifies storage class settings for the table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#storage_class_configuration S3TablesTable#storage_class_configuration}
  */
  readonly storageClassConfiguration?: S3TablesTableStorageClassConfiguration;
  /**
  * The Amazon Resource Name (ARN) of the specified table bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#table_bucket_arn S3TablesTable#table_bucket_arn}
  */
  readonly tableBucketArn: string;
  /**
  * The name for the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#table_name S3TablesTable#table_name}
  */
  readonly tableName: string;
  /**
  * User tags (key-value pairs) to associate with the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#tags S3TablesTable#tags}
  */
  readonly tags?: S3TablesTableTags[] | cdktn.IResolvable;
  /**
  * Indicates that you don't want to specify a schema for the table. This property is mutually exclusive to 'IcebergMetadata', and its only possible value is 'Yes'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#without_metadata S3TablesTable#without_metadata}
  */
  readonly withoutMetadata?: string;
}
export interface S3TablesTableCompaction {
  /**
  * Indicates whether the Compaction maintenance action is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#status S3TablesTable#status}
  */
  readonly status?: string;
  /**
  * The target file size for the table in MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#target_file_size_mb S3TablesTable#target_file_size_mb}
  */
  readonly targetFileSizeMb?: number;
}

export function s3TablesTableCompactionToTerraform(struct?: S3TablesTableCompaction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    status: cdktn.stringToTerraform(struct!.status),
    target_file_size_mb: cdktn.numberToTerraform(struct!.targetFileSizeMb),
  }
}


export function s3TablesTableCompactionToHclTerraform(struct?: S3TablesTableCompaction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_file_size_mb: {
      value: cdktn.numberToHclTerraform(struct!.targetFileSizeMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3TablesTableCompactionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3TablesTableCompaction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._targetFileSizeMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetFileSizeMb = this._targetFileSizeMb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3TablesTableCompaction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
      this._targetFileSizeMb = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
      this._targetFileSizeMb = value.targetFileSizeMb;
    }
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // target_file_size_mb - computed: true, optional: true, required: false
  private _targetFileSizeMb?: number; 
  public get targetFileSizeMb() {
    return this.getNumberAttribute('target_file_size_mb');
  }
  public set targetFileSizeMb(value: number) {
    this._targetFileSizeMb = value;
  }
  public resetTargetFileSizeMb() {
    this._targetFileSizeMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFileSizeMbInput() {
    return this._targetFileSizeMb;
  }
}
export interface S3TablesTableIcebergMetadataIcebergPartitionSpecFields {
  /**
  * The partition field ID (auto-assigned starting from 1000 if not specified)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#field_id S3TablesTable#field_id}
  */
  readonly fieldId?: number;
  /**
  * The name of the partition field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#name S3TablesTable#name}
  */
  readonly name?: string;
  /**
  * The source column ID to partition on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#source_id S3TablesTable#source_id}
  */
  readonly sourceId?: number;
  /**
  * The partition transform function (identity, bucket[N], truncate[N], year, month, day, hour)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#transform S3TablesTable#transform}
  */
  readonly transform?: string;
}

export function s3TablesTableIcebergMetadataIcebergPartitionSpecFieldsToTerraform(struct?: S3TablesTableIcebergMetadataIcebergPartitionSpecFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field_id: cdktn.numberToTerraform(struct!.fieldId),
    name: cdktn.stringToTerraform(struct!.name),
    source_id: cdktn.numberToTerraform(struct!.sourceId),
    transform: cdktn.stringToTerraform(struct!.transform),
  }
}


export function s3TablesTableIcebergMetadataIcebergPartitionSpecFieldsToHclTerraform(struct?: S3TablesTableIcebergMetadataIcebergPartitionSpecFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field_id: {
      value: cdktn.numberToHclTerraform(struct!.fieldId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_id: {
      value: cdktn.numberToHclTerraform(struct!.sourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transform: {
      value: cdktn.stringToHclTerraform(struct!.transform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3TablesTableIcebergMetadataIcebergPartitionSpecFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldId = this._fieldId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceId = this._sourceId;
    }
    if (this._transform !== undefined) {
      hasAnyValues = true;
      internalValueResult.transform = this._transform;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3TablesTableIcebergMetadataIcebergPartitionSpecFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldId = undefined;
      this._name = undefined;
      this._sourceId = undefined;
      this._transform = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldId = value.fieldId;
      this._name = value.name;
      this._sourceId = value.sourceId;
      this._transform = value.transform;
    }
  }

  // field_id - computed: true, optional: true, required: false
  private _fieldId?: number; 
  public get fieldId() {
    return this.getNumberAttribute('field_id');
  }
  public set fieldId(value: number) {
    this._fieldId = value;
  }
  public resetFieldId() {
    this._fieldId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldIdInput() {
    return this._fieldId;
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

  // source_id - computed: true, optional: true, required: false
  private _sourceId?: number; 
  public get sourceId() {
    return this.getNumberAttribute('source_id');
  }
  public set sourceId(value: number) {
    this._sourceId = value;
  }
  public resetSourceId() {
    this._sourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // transform - computed: true, optional: true, required: false
  private _transform?: string; 
  public get transform() {
    return this.getStringAttribute('transform');
  }
  public set transform(value: string) {
    this._transform = value;
  }
  public resetTransform() {
    this._transform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformInput() {
    return this._transform;
  }
}

export class S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList extends cdktn.ComplexList {
  public internalValue? : S3TablesTableIcebergMetadataIcebergPartitionSpecFields[] | cdktn.IResolvable

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
  public get(index: number): S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference {
    return new S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3TablesTableIcebergMetadataIcebergPartitionSpec {
  /**
  * List of partition fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#fields S3TablesTable#fields}
  */
  readonly fields?: S3TablesTableIcebergMetadataIcebergPartitionSpecFields[] | cdktn.IResolvable;
  /**
  * The partition spec ID (defaults to 0 if not specified)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#spec_id S3TablesTable#spec_id}
  */
  readonly specId?: number;
}

export function s3TablesTableIcebergMetadataIcebergPartitionSpecToTerraform(struct?: S3TablesTableIcebergMetadataIcebergPartitionSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fields: cdktn.listMapper(s3TablesTableIcebergMetadataIcebergPartitionSpecFieldsToTerraform, false)(struct!.fields),
    spec_id: cdktn.numberToTerraform(struct!.specId),
  }
}


export function s3TablesTableIcebergMetadataIcebergPartitionSpecToHclTerraform(struct?: S3TablesTableIcebergMetadataIcebergPartitionSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fields: {
      value: cdktn.listMapperHcl(s3TablesTableIcebergMetadataIcebergPartitionSpecFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList",
    },
    spec_id: {
      value: cdktn.numberToHclTerraform(struct!.specId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3TablesTableIcebergMetadataIcebergPartitionSpec | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._specId !== undefined) {
      hasAnyValues = true;
      internalValueResult.specId = this._specId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3TablesTableIcebergMetadataIcebergPartitionSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields.internalValue = undefined;
      this._specId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields.internalValue = value.fields;
      this._specId = value.specId;
    }
  }

  // fields - computed: true, optional: true, required: false
  private _fields = new S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: S3TablesTableIcebergMetadataIcebergPartitionSpecFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // spec_id - computed: true, optional: true, required: false
  private _specId?: number; 
  public get specId() {
    return this.getNumberAttribute('spec_id');
  }
  public set specId(value: number) {
    this._specId = value;
  }
  public resetSpecId() {
    this._specId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specIdInput() {
    return this._specId;
  }
}
export interface S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct {
  /**
  * The unique identifier for the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#id S3TablesTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * The name of the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#name S3TablesTable#name}
  */
  readonly name?: string;
  /**
  * A Boolean value that specifies whether values are required for each row in this field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#required S3TablesTable#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
  /**
  * The field type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#type S3TablesTable#type}
  */
  readonly type?: string;
}

export function s3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructToTerraform(struct?: S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.numberToTerraform(struct!.id),
    name: cdktn.stringToTerraform(struct!.name),
    required: cdktn.booleanToTerraform(struct!.required),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function s3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructToHclTerraform(struct?: S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktn.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._required = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._required = value.required;
      this._type = value.type;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktn.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktn.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
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

export class S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList extends cdktn.ComplexList {
  public internalValue? : S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct[] | cdktn.IResolvable

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
  public get(index: number): S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference {
    return new S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3TablesTableIcebergMetadataIcebergSchema {
  /**
  * Contains details about the schema for an Iceberg table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#schema_field_list S3TablesTable#schema_field_list}
  */
  readonly schemaFieldList?: S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct[] | cdktn.IResolvable;
}

export function s3TablesTableIcebergMetadataIcebergSchemaToTerraform(struct?: S3TablesTableIcebergMetadataIcebergSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schema_field_list: cdktn.listMapper(s3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructToTerraform, false)(struct!.schemaFieldList),
  }
}


export function s3TablesTableIcebergMetadataIcebergSchemaToHclTerraform(struct?: S3TablesTableIcebergMetadataIcebergSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    schema_field_list: {
      value: cdktn.listMapperHcl(s3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructToHclTerraform, false)(struct!.schemaFieldList),
      isBlock: true,
      type: "list",
      storageClassType: "S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3TablesTableIcebergMetadataIcebergSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3TablesTableIcebergMetadataIcebergSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemaFieldList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaFieldList = this._schemaFieldList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3TablesTableIcebergMetadataIcebergSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schemaFieldList.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schemaFieldList.internalValue = value.schemaFieldList;
    }
  }

  // schema_field_list - computed: true, optional: true, required: false
  private _schemaFieldList = new S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList(this, "schema_field_list", false);
  public get schemaFieldList() {
    return this._schemaFieldList;
  }
  public putSchemaFieldList(value: S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct[] | cdktn.IResolvable) {
    this._schemaFieldList.internalValue = value;
  }
  public resetSchemaFieldList() {
    this._schemaFieldList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaFieldListInput() {
    return this._schemaFieldList.internalValue;
  }
}
export interface S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct {
  /**
  * Optional documentation for the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#doc S3TablesTable#doc}
  */
  readonly doc?: string;
  /**
  * The unique identifier for the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#id S3TablesTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * The name of the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#name S3TablesTable#name}
  */
  readonly name?: string;
  /**
  * A Boolean value that specifies whether values are required for each row in this field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#required S3TablesTable#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
  /**
  * The field type. For primitive types, use a string (e.g., 'int', 'string', 'long'). For nested types, use an object (e.g., {'type': 'struct', 'fields': [...]} for struct, {'type': 'list', 'element-id': N, 'element': 'type'} for list, {'type': 'map', 'key-id': N, 'key': 'type', 'value-id': N, 'value': 'type'} for map).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#type S3TablesTable#type}
  */
  readonly type?: string;
}

export function s3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructToTerraform(struct?: S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    doc: cdktn.stringToTerraform(struct!.doc),
    id: cdktn.numberToTerraform(struct!.id),
    name: cdktn.stringToTerraform(struct!.name),
    required: cdktn.booleanToTerraform(struct!.required),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function s3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructToHclTerraform(struct?: S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    doc: {
      value: cdktn.stringToHclTerraform(struct!.doc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktn.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doc !== undefined) {
      hasAnyValues = true;
      internalValueResult.doc = this._doc;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doc = undefined;
      this._id = undefined;
      this._name = undefined;
      this._required = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doc = value.doc;
      this._id = value.id;
      this._name = value.name;
      this._required = value.required;
      this._type = value.type;
    }
  }

  // doc - computed: true, optional: true, required: false
  private _doc?: string; 
  public get doc() {
    return this.getStringAttribute('doc');
  }
  public set doc(value: string) {
    this._doc = value;
  }
  public resetDoc() {
    this._doc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get docInput() {
    return this._doc;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktn.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktn.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
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

export class S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList extends cdktn.ComplexList {
  public internalValue? : S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct[] | cdktn.IResolvable

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
  public get(index: number): S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference {
    return new S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3TablesTableIcebergMetadataIcebergSchemaV2 {
  /**
  * A list of field IDs that are used as the identifier fields for the table. Identifier fields uniquely identify a row in the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#identifier_field_ids S3TablesTable#identifier_field_ids}
  */
  readonly identifierFieldIds?: number[];
  /**
  * An optional unique identifier for the schema
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#schema_id S3TablesTable#schema_id}
  */
  readonly schemaId?: number;
  /**
  * The schema fields for the table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#schema_v2_field_list S3TablesTable#schema_v2_field_list}
  */
  readonly schemaV2FieldList?: S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct[] | cdktn.IResolvable;
  /**
  * The type of the top-level schema, which is always 'struct'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#schema_v2_field_type S3TablesTable#schema_v2_field_type}
  */
  readonly schemaV2FieldType?: string;
}

export function s3TablesTableIcebergMetadataIcebergSchemaV2ToTerraform(struct?: S3TablesTableIcebergMetadataIcebergSchemaV2 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identifier_field_ids: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.identifierFieldIds),
    schema_id: cdktn.numberToTerraform(struct!.schemaId),
    schema_v2_field_list: cdktn.listMapper(s3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructToTerraform, false)(struct!.schemaV2FieldList),
    schema_v2_field_type: cdktn.stringToTerraform(struct!.schemaV2FieldType),
  }
}


export function s3TablesTableIcebergMetadataIcebergSchemaV2ToHclTerraform(struct?: S3TablesTableIcebergMetadataIcebergSchemaV2 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identifier_field_ids: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.identifierFieldIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    schema_id: {
      value: cdktn.numberToHclTerraform(struct!.schemaId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schema_v2_field_list: {
      value: cdktn.listMapperHcl(s3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructToHclTerraform, false)(struct!.schemaV2FieldList),
      isBlock: true,
      type: "list",
      storageClassType: "S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList",
    },
    schema_v2_field_type: {
      value: cdktn.stringToHclTerraform(struct!.schemaV2FieldType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3TablesTableIcebergMetadataIcebergSchemaV2 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifierFieldIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifierFieldIds = this._identifierFieldIds;
    }
    if (this._schemaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaId = this._schemaId;
    }
    if (this._schemaV2FieldList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaV2FieldList = this._schemaV2FieldList?.internalValue;
    }
    if (this._schemaV2FieldType !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaV2FieldType = this._schemaV2FieldType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3TablesTableIcebergMetadataIcebergSchemaV2 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifierFieldIds = undefined;
      this._schemaId = undefined;
      this._schemaV2FieldList.internalValue = undefined;
      this._schemaV2FieldType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifierFieldIds = value.identifierFieldIds;
      this._schemaId = value.schemaId;
      this._schemaV2FieldList.internalValue = value.schemaV2FieldList;
      this._schemaV2FieldType = value.schemaV2FieldType;
    }
  }

  // identifier_field_ids - computed: true, optional: true, required: false
  private _identifierFieldIds?: number[]; 
  public get identifierFieldIds() {
    return this.getNumberListAttribute('identifier_field_ids');
  }
  public set identifierFieldIds(value: number[]) {
    this._identifierFieldIds = value;
  }
  public resetIdentifierFieldIds() {
    this._identifierFieldIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierFieldIdsInput() {
    return this._identifierFieldIds;
  }

  // schema_id - computed: true, optional: true, required: false
  private _schemaId?: number; 
  public get schemaId() {
    return this.getNumberAttribute('schema_id');
  }
  public set schemaId(value: number) {
    this._schemaId = value;
  }
  public resetSchemaId() {
    this._schemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // schema_v2_field_list - computed: true, optional: true, required: false
  private _schemaV2FieldList = new S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList(this, "schema_v2_field_list", false);
  public get schemaV2FieldList() {
    return this._schemaV2FieldList;
  }
  public putSchemaV2FieldList(value: S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct[] | cdktn.IResolvable) {
    this._schemaV2FieldList.internalValue = value;
  }
  public resetSchemaV2FieldList() {
    this._schemaV2FieldList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaV2FieldListInput() {
    return this._schemaV2FieldList.internalValue;
  }

  // schema_v2_field_type - computed: true, optional: true, required: false
  private _schemaV2FieldType?: string; 
  public get schemaV2FieldType() {
    return this.getStringAttribute('schema_v2_field_type');
  }
  public set schemaV2FieldType(value: string) {
    this._schemaV2FieldType = value;
  }
  public resetSchemaV2FieldType() {
    this._schemaV2FieldType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaV2FieldTypeInput() {
    return this._schemaV2FieldType;
  }
}
export interface S3TablesTableIcebergMetadataIcebergSortOrderFields {
  /**
  * Sort direction (asc or desc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#direction S3TablesTable#direction}
  */
  readonly direction?: string;
  /**
  * Null value ordering (nulls-first or nulls-last)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#null_order S3TablesTable#null_order}
  */
  readonly nullOrder?: string;
  /**
  * The source column ID to sort on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#source_id S3TablesTable#source_id}
  */
  readonly sourceId?: number;
  /**
  * The sort transform function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#transform S3TablesTable#transform}
  */
  readonly transform?: string;
}

export function s3TablesTableIcebergMetadataIcebergSortOrderFieldsToTerraform(struct?: S3TablesTableIcebergMetadataIcebergSortOrderFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    direction: cdktn.stringToTerraform(struct!.direction),
    null_order: cdktn.stringToTerraform(struct!.nullOrder),
    source_id: cdktn.numberToTerraform(struct!.sourceId),
    transform: cdktn.stringToTerraform(struct!.transform),
  }
}


export function s3TablesTableIcebergMetadataIcebergSortOrderFieldsToHclTerraform(struct?: S3TablesTableIcebergMetadataIcebergSortOrderFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    direction: {
      value: cdktn.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    null_order: {
      value: cdktn.stringToHclTerraform(struct!.nullOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_id: {
      value: cdktn.numberToHclTerraform(struct!.sourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transform: {
      value: cdktn.stringToHclTerraform(struct!.transform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3TablesTableIcebergMetadataIcebergSortOrderFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._nullOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullOrder = this._nullOrder;
    }
    if (this._sourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceId = this._sourceId;
    }
    if (this._transform !== undefined) {
      hasAnyValues = true;
      internalValueResult.transform = this._transform;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3TablesTableIcebergMetadataIcebergSortOrderFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._nullOrder = undefined;
      this._sourceId = undefined;
      this._transform = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._nullOrder = value.nullOrder;
      this._sourceId = value.sourceId;
      this._transform = value.transform;
    }
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // null_order - computed: true, optional: true, required: false
  private _nullOrder?: string; 
  public get nullOrder() {
    return this.getStringAttribute('null_order');
  }
  public set nullOrder(value: string) {
    this._nullOrder = value;
  }
  public resetNullOrder() {
    this._nullOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullOrderInput() {
    return this._nullOrder;
  }

  // source_id - computed: true, optional: true, required: false
  private _sourceId?: number; 
  public get sourceId() {
    return this.getNumberAttribute('source_id');
  }
  public set sourceId(value: number) {
    this._sourceId = value;
  }
  public resetSourceId() {
    this._sourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // transform - computed: true, optional: true, required: false
  private _transform?: string; 
  public get transform() {
    return this.getStringAttribute('transform');
  }
  public set transform(value: string) {
    this._transform = value;
  }
  public resetTransform() {
    this._transform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformInput() {
    return this._transform;
  }
}

export class S3TablesTableIcebergMetadataIcebergSortOrderFieldsList extends cdktn.ComplexList {
  public internalValue? : S3TablesTableIcebergMetadataIcebergSortOrderFields[] | cdktn.IResolvable

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
  public get(index: number): S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference {
    return new S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3TablesTableIcebergMetadataIcebergSortOrder {
  /**
  * List of sort fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#fields S3TablesTable#fields}
  */
  readonly fields?: S3TablesTableIcebergMetadataIcebergSortOrderFields[] | cdktn.IResolvable;
  /**
  * The sort order ID (defaults to 1 if not specified, 0 is reserved for unsorted)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#order_id S3TablesTable#order_id}
  */
  readonly orderId?: number;
}

export function s3TablesTableIcebergMetadataIcebergSortOrderToTerraform(struct?: S3TablesTableIcebergMetadataIcebergSortOrder | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fields: cdktn.listMapper(s3TablesTableIcebergMetadataIcebergSortOrderFieldsToTerraform, false)(struct!.fields),
    order_id: cdktn.numberToTerraform(struct!.orderId),
  }
}


export function s3TablesTableIcebergMetadataIcebergSortOrderToHclTerraform(struct?: S3TablesTableIcebergMetadataIcebergSortOrder | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fields: {
      value: cdktn.listMapperHcl(s3TablesTableIcebergMetadataIcebergSortOrderFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "S3TablesTableIcebergMetadataIcebergSortOrderFieldsList",
    },
    order_id: {
      value: cdktn.numberToHclTerraform(struct!.orderId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3TablesTableIcebergMetadataIcebergSortOrderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3TablesTableIcebergMetadataIcebergSortOrder | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._orderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderId = this._orderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3TablesTableIcebergMetadataIcebergSortOrder | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields.internalValue = undefined;
      this._orderId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields.internalValue = value.fields;
      this._orderId = value.orderId;
    }
  }

  // fields - computed: true, optional: true, required: false
  private _fields = new S3TablesTableIcebergMetadataIcebergSortOrderFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: S3TablesTableIcebergMetadataIcebergSortOrderFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // order_id - computed: true, optional: true, required: false
  private _orderId?: number; 
  public get orderId() {
    return this.getNumberAttribute('order_id');
  }
  public set orderId(value: number) {
    this._orderId = value;
  }
  public resetOrderId() {
    this._orderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderIdInput() {
    return this._orderId;
  }
}
export interface S3TablesTableIcebergMetadata {
  /**
  * Partition specification for an Iceberg table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#iceberg_partition_spec S3TablesTable#iceberg_partition_spec}
  */
  readonly icebergPartitionSpec?: S3TablesTableIcebergMetadataIcebergPartitionSpec;
  /**
  * Schema definition for flat tables with primitive types only. Mutually exclusive with IcebergSchemaV2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#iceberg_schema S3TablesTable#iceberg_schema}
  */
  readonly icebergSchema?: S3TablesTableIcebergMetadataIcebergSchema;
  /**
  * Schema definition that supports Apache Iceberg nested types (struct, list, map) and primitive types. Mutually exclusive with IcebergSchema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#iceberg_schema_v2 S3TablesTable#iceberg_schema_v2}
  */
  readonly icebergSchemaV2?: S3TablesTableIcebergMetadataIcebergSchemaV2;
  /**
  * Sort order specification for an Iceberg table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#iceberg_sort_order S3TablesTable#iceberg_sort_order}
  */
  readonly icebergSortOrder?: S3TablesTableIcebergMetadataIcebergSortOrder;
  /**
  * Iceberg table properties (e.g., format-version, write.parquet.compression-codec)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#table_properties S3TablesTable#table_properties}
  */
  readonly tableProperties?: { [key: string]: string };
}

export function s3TablesTableIcebergMetadataToTerraform(struct?: S3TablesTableIcebergMetadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iceberg_partition_spec: s3TablesTableIcebergMetadataIcebergPartitionSpecToTerraform(struct!.icebergPartitionSpec),
    iceberg_schema: s3TablesTableIcebergMetadataIcebergSchemaToTerraform(struct!.icebergSchema),
    iceberg_schema_v2: s3TablesTableIcebergMetadataIcebergSchemaV2ToTerraform(struct!.icebergSchemaV2),
    iceberg_sort_order: s3TablesTableIcebergMetadataIcebergSortOrderToTerraform(struct!.icebergSortOrder),
    table_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tableProperties),
  }
}


export function s3TablesTableIcebergMetadataToHclTerraform(struct?: S3TablesTableIcebergMetadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iceberg_partition_spec: {
      value: s3TablesTableIcebergMetadataIcebergPartitionSpecToHclTerraform(struct!.icebergPartitionSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "S3TablesTableIcebergMetadataIcebergPartitionSpec",
    },
    iceberg_schema: {
      value: s3TablesTableIcebergMetadataIcebergSchemaToHclTerraform(struct!.icebergSchema),
      isBlock: true,
      type: "struct",
      storageClassType: "S3TablesTableIcebergMetadataIcebergSchema",
    },
    iceberg_schema_v2: {
      value: s3TablesTableIcebergMetadataIcebergSchemaV2ToHclTerraform(struct!.icebergSchemaV2),
      isBlock: true,
      type: "struct",
      storageClassType: "S3TablesTableIcebergMetadataIcebergSchemaV2",
    },
    iceberg_sort_order: {
      value: s3TablesTableIcebergMetadataIcebergSortOrderToHclTerraform(struct!.icebergSortOrder),
      isBlock: true,
      type: "struct",
      storageClassType: "S3TablesTableIcebergMetadataIcebergSortOrder",
    },
    table_properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tableProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3TablesTableIcebergMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3TablesTableIcebergMetadata | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icebergPartitionSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icebergPartitionSpec = this._icebergPartitionSpec?.internalValue;
    }
    if (this._icebergSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icebergSchema = this._icebergSchema?.internalValue;
    }
    if (this._icebergSchemaV2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icebergSchemaV2 = this._icebergSchemaV2?.internalValue;
    }
    if (this._icebergSortOrder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icebergSortOrder = this._icebergSortOrder?.internalValue;
    }
    if (this._tableProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableProperties = this._tableProperties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3TablesTableIcebergMetadata | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icebergPartitionSpec.internalValue = undefined;
      this._icebergSchema.internalValue = undefined;
      this._icebergSchemaV2.internalValue = undefined;
      this._icebergSortOrder.internalValue = undefined;
      this._tableProperties = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icebergPartitionSpec.internalValue = value.icebergPartitionSpec;
      this._icebergSchema.internalValue = value.icebergSchema;
      this._icebergSchemaV2.internalValue = value.icebergSchemaV2;
      this._icebergSortOrder.internalValue = value.icebergSortOrder;
      this._tableProperties = value.tableProperties;
    }
  }

  // iceberg_partition_spec - computed: true, optional: true, required: false
  private _icebergPartitionSpec = new S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference(this, "iceberg_partition_spec");
  public get icebergPartitionSpec() {
    return this._icebergPartitionSpec;
  }
  public putIcebergPartitionSpec(value: S3TablesTableIcebergMetadataIcebergPartitionSpec) {
    this._icebergPartitionSpec.internalValue = value;
  }
  public resetIcebergPartitionSpec() {
    this._icebergPartitionSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergPartitionSpecInput() {
    return this._icebergPartitionSpec.internalValue;
  }

  // iceberg_schema - computed: true, optional: true, required: false
  private _icebergSchema = new S3TablesTableIcebergMetadataIcebergSchemaOutputReference(this, "iceberg_schema");
  public get icebergSchema() {
    return this._icebergSchema;
  }
  public putIcebergSchema(value: S3TablesTableIcebergMetadataIcebergSchema) {
    this._icebergSchema.internalValue = value;
  }
  public resetIcebergSchema() {
    this._icebergSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergSchemaInput() {
    return this._icebergSchema.internalValue;
  }

  // iceberg_schema_v2 - computed: true, optional: true, required: false
  private _icebergSchemaV2 = new S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference(this, "iceberg_schema_v2");
  public get icebergSchemaV2() {
    return this._icebergSchemaV2;
  }
  public putIcebergSchemaV2(value: S3TablesTableIcebergMetadataIcebergSchemaV2) {
    this._icebergSchemaV2.internalValue = value;
  }
  public resetIcebergSchemaV2() {
    this._icebergSchemaV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergSchemaV2Input() {
    return this._icebergSchemaV2.internalValue;
  }

  // iceberg_sort_order - computed: true, optional: true, required: false
  private _icebergSortOrder = new S3TablesTableIcebergMetadataIcebergSortOrderOutputReference(this, "iceberg_sort_order");
  public get icebergSortOrder() {
    return this._icebergSortOrder;
  }
  public putIcebergSortOrder(value: S3TablesTableIcebergMetadataIcebergSortOrder) {
    this._icebergSortOrder.internalValue = value;
  }
  public resetIcebergSortOrder() {
    this._icebergSortOrder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergSortOrderInput() {
    return this._icebergSortOrder.internalValue;
  }

  // table_properties - computed: true, optional: true, required: false
  private _tableProperties?: { [key: string]: string }; 
  public get tableProperties() {
    return this.getStringMapAttribute('table_properties');
  }
  public set tableProperties(value: { [key: string]: string }) {
    this._tableProperties = value;
  }
  public resetTableProperties() {
    this._tableProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablePropertiesInput() {
    return this._tableProperties;
  }
}
export interface S3TablesTableSnapshotManagement {
  /**
  * The maximum age of a snapshot before it can be expired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#max_snapshot_age_hours S3TablesTable#max_snapshot_age_hours}
  */
  readonly maxSnapshotAgeHours?: number;
  /**
  * The minimum number of snapshots to keep.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#min_snapshots_to_keep S3TablesTable#min_snapshots_to_keep}
  */
  readonly minSnapshotsToKeep?: number;
  /**
  * Indicates whether the SnapshotManagement maintenance action is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#status S3TablesTable#status}
  */
  readonly status?: string;
}

export function s3TablesTableSnapshotManagementToTerraform(struct?: S3TablesTableSnapshotManagement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_snapshot_age_hours: cdktn.numberToTerraform(struct!.maxSnapshotAgeHours),
    min_snapshots_to_keep: cdktn.numberToTerraform(struct!.minSnapshotsToKeep),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function s3TablesTableSnapshotManagementToHclTerraform(struct?: S3TablesTableSnapshotManagement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_snapshot_age_hours: {
      value: cdktn.numberToHclTerraform(struct!.maxSnapshotAgeHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_snapshots_to_keep: {
      value: cdktn.numberToHclTerraform(struct!.minSnapshotsToKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3TablesTableSnapshotManagementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3TablesTableSnapshotManagement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSnapshotAgeHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSnapshotAgeHours = this._maxSnapshotAgeHours;
    }
    if (this._minSnapshotsToKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSnapshotsToKeep = this._minSnapshotsToKeep;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3TablesTableSnapshotManagement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxSnapshotAgeHours = undefined;
      this._minSnapshotsToKeep = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxSnapshotAgeHours = value.maxSnapshotAgeHours;
      this._minSnapshotsToKeep = value.minSnapshotsToKeep;
      this._status = value.status;
    }
  }

  // max_snapshot_age_hours - computed: true, optional: true, required: false
  private _maxSnapshotAgeHours?: number; 
  public get maxSnapshotAgeHours() {
    return this.getNumberAttribute('max_snapshot_age_hours');
  }
  public set maxSnapshotAgeHours(value: number) {
    this._maxSnapshotAgeHours = value;
  }
  public resetMaxSnapshotAgeHours() {
    this._maxSnapshotAgeHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSnapshotAgeHoursInput() {
    return this._maxSnapshotAgeHours;
  }

  // min_snapshots_to_keep - computed: true, optional: true, required: false
  private _minSnapshotsToKeep?: number; 
  public get minSnapshotsToKeep() {
    return this.getNumberAttribute('min_snapshots_to_keep');
  }
  public set minSnapshotsToKeep(value: number) {
    this._minSnapshotsToKeep = value;
  }
  public resetMinSnapshotsToKeep() {
    this._minSnapshotsToKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSnapshotsToKeepInput() {
    return this._minSnapshotsToKeep;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface S3TablesTableStorageClassConfiguration {
  /**
  * The storage class for the table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#storage_class S3TablesTable#storage_class}
  */
  readonly storageClass?: string;
}

export function s3TablesTableStorageClassConfigurationToTerraform(struct?: S3TablesTableStorageClassConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    storage_class: cdktn.stringToTerraform(struct!.storageClass),
  }
}


export function s3TablesTableStorageClassConfigurationToHclTerraform(struct?: S3TablesTableStorageClassConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    storage_class: {
      value: cdktn.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3TablesTableStorageClassConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3TablesTableStorageClassConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3TablesTableStorageClassConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._storageClass = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._storageClass = value.storageClass;
    }
  }

  // storage_class - computed: true, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface S3TablesTableTags {
  /**
  * Tag key must be between 1 to 128 characters in length. Tag key cannot start with 'aws:' and can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and @.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#key S3TablesTable#key}
  */
  readonly key?: string;
  /**
  * Tag value must be between 0 to 256 characters in length. Tag value can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and @.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#value S3TablesTable#value}
  */
  readonly value?: string;
}

export function s3TablesTableTagsToTerraform(struct?: S3TablesTableTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function s3TablesTableTagsToHclTerraform(struct?: S3TablesTableTags | cdktn.IResolvable): any {
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

export class S3TablesTableTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3TablesTableTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3TablesTableTags | cdktn.IResolvable | undefined) {
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

export class S3TablesTableTagsList extends cdktn.ComplexList {
  public internalValue? : S3TablesTableTags[] | cdktn.IResolvable

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
  public get(index: number): S3TablesTableTagsOutputReference {
    return new S3TablesTableTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table awscc_s3tables_table}
*/
export class S3TablesTable extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_s3tables_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a S3TablesTable resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3TablesTable to import
  * @param importFromId The id of the existing S3TablesTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3TablesTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3tables_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3tables_table awscc_s3tables_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3TablesTableConfig
  */
  public constructor(scope: Construct, id: string, config: S3TablesTableConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_s3tables_table',
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
    this._compaction.internalValue = config.compaction;
    this._icebergMetadata.internalValue = config.icebergMetadata;
    this._namespace = config.namespace;
    this._openTableFormat = config.openTableFormat;
    this._snapshotManagement.internalValue = config.snapshotManagement;
    this._storageClassConfiguration.internalValue = config.storageClassConfiguration;
    this._tableBucketArn = config.tableBucketArn;
    this._tableName = config.tableName;
    this._tags.internalValue = config.tags;
    this._withoutMetadata = config.withoutMetadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compaction - computed: true, optional: true, required: false
  private _compaction = new S3TablesTableCompactionOutputReference(this, "compaction");
  public get compaction() {
    return this._compaction;
  }
  public putCompaction(value: S3TablesTableCompaction) {
    this._compaction.internalValue = value;
  }
  public resetCompaction() {
    this._compaction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compactionInput() {
    return this._compaction.internalValue;
  }

  // iceberg_metadata - computed: true, optional: true, required: false
  private _icebergMetadata = new S3TablesTableIcebergMetadataOutputReference(this, "iceberg_metadata");
  public get icebergMetadata() {
    return this._icebergMetadata;
  }
  public putIcebergMetadata(value: S3TablesTableIcebergMetadata) {
    this._icebergMetadata.internalValue = value;
  }
  public resetIcebergMetadata() {
    this._icebergMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergMetadataInput() {
    return this._icebergMetadata.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // open_table_format - computed: false, optional: false, required: true
  private _openTableFormat?: string; 
  public get openTableFormat() {
    return this.getStringAttribute('open_table_format');
  }
  public set openTableFormat(value: string) {
    this._openTableFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openTableFormatInput() {
    return this._openTableFormat;
  }

  // snapshot_management - computed: true, optional: true, required: false
  private _snapshotManagement = new S3TablesTableSnapshotManagementOutputReference(this, "snapshot_management");
  public get snapshotManagement() {
    return this._snapshotManagement;
  }
  public putSnapshotManagement(value: S3TablesTableSnapshotManagement) {
    this._snapshotManagement.internalValue = value;
  }
  public resetSnapshotManagement() {
    this._snapshotManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotManagementInput() {
    return this._snapshotManagement.internalValue;
  }

  // storage_class_configuration - computed: true, optional: true, required: false
  private _storageClassConfiguration = new S3TablesTableStorageClassConfigurationOutputReference(this, "storage_class_configuration");
  public get storageClassConfiguration() {
    return this._storageClassConfiguration;
  }
  public putStorageClassConfiguration(value: S3TablesTableStorageClassConfiguration) {
    this._storageClassConfiguration.internalValue = value;
  }
  public resetStorageClassConfiguration() {
    this._storageClassConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassConfigurationInput() {
    return this._storageClassConfiguration.internalValue;
  }

  // table_arn - computed: true, optional: false, required: false
  public get tableArn() {
    return this.getStringAttribute('table_arn');
  }

  // table_bucket_arn - computed: false, optional: false, required: true
  private _tableBucketArn?: string; 
  public get tableBucketArn() {
    return this.getStringAttribute('table_bucket_arn');
  }
  public set tableBucketArn(value: string) {
    this._tableBucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableBucketArnInput() {
    return this._tableBucketArn;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new S3TablesTableTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: S3TablesTableTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // version_token - computed: true, optional: false, required: false
  public get versionToken() {
    return this.getStringAttribute('version_token');
  }

  // warehouse_location - computed: true, optional: false, required: false
  public get warehouseLocation() {
    return this.getStringAttribute('warehouse_location');
  }

  // without_metadata - computed: true, optional: true, required: false
  private _withoutMetadata?: string; 
  public get withoutMetadata() {
    return this.getStringAttribute('without_metadata');
  }
  public set withoutMetadata(value: string) {
    this._withoutMetadata = value;
  }
  public resetWithoutMetadata() {
    this._withoutMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withoutMetadataInput() {
    return this._withoutMetadata;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compaction: s3TablesTableCompactionToTerraform(this._compaction.internalValue),
      iceberg_metadata: s3TablesTableIcebergMetadataToTerraform(this._icebergMetadata.internalValue),
      namespace: cdktn.stringToTerraform(this._namespace),
      open_table_format: cdktn.stringToTerraform(this._openTableFormat),
      snapshot_management: s3TablesTableSnapshotManagementToTerraform(this._snapshotManagement.internalValue),
      storage_class_configuration: s3TablesTableStorageClassConfigurationToTerraform(this._storageClassConfiguration.internalValue),
      table_bucket_arn: cdktn.stringToTerraform(this._tableBucketArn),
      table_name: cdktn.stringToTerraform(this._tableName),
      tags: cdktn.listMapper(s3TablesTableTagsToTerraform, false)(this._tags.internalValue),
      without_metadata: cdktn.stringToTerraform(this._withoutMetadata),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compaction: {
        value: s3TablesTableCompactionToHclTerraform(this._compaction.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3TablesTableCompaction",
      },
      iceberg_metadata: {
        value: s3TablesTableIcebergMetadataToHclTerraform(this._icebergMetadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3TablesTableIcebergMetadata",
      },
      namespace: {
        value: cdktn.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      open_table_format: {
        value: cdktn.stringToHclTerraform(this._openTableFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_management: {
        value: s3TablesTableSnapshotManagementToHclTerraform(this._snapshotManagement.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3TablesTableSnapshotManagement",
      },
      storage_class_configuration: {
        value: s3TablesTableStorageClassConfigurationToHclTerraform(this._storageClassConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3TablesTableStorageClassConfiguration",
      },
      table_bucket_arn: {
        value: cdktn.stringToHclTerraform(this._tableBucketArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_name: {
        value: cdktn.stringToHclTerraform(this._tableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(s3TablesTableTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "S3TablesTableTagsList",
      },
      without_metadata: {
        value: cdktn.stringToHclTerraform(this._withoutMetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
