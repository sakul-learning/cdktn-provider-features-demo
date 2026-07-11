// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/s3tables_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccS3TablesTableConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/s3tables_table#id DataAwsccS3TablesTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccS3TablesTableCompaction {
}

export function dataAwsccS3TablesTableCompactionToTerraform(struct?: DataAwsccS3TablesTableCompaction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3TablesTableCompactionToHclTerraform(struct?: DataAwsccS3TablesTableCompaction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3TablesTableCompactionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3TablesTableCompaction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3TablesTableCompaction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target_file_size_mb - computed: true, optional: false, required: false
  public get targetFileSizeMb() {
    return this.getNumberAttribute('target_file_size_mb');
  }
}
export interface DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFields {
}

export function dataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsToTerraform(struct?: DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFields): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsToHclTerraform(struct?: DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFields): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_id - computed: true, optional: false, required: false
  public get fieldId() {
    return this.getNumberAttribute('field_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getNumberAttribute('source_id');
  }

  // transform - computed: true, optional: false, required: false
  public get transform() {
    return this.getStringAttribute('transform');
  }
}

export class DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference {
    return new DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpec {
}

export function dataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecToTerraform(struct?: DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecToHclTerraform(struct?: DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fields - computed: true, optional: false, required: false
  private _fields = new DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }

  // spec_id - computed: true, optional: false, required: false
  public get specId() {
    return this.getNumberAttribute('spec_id');
  }
}
export interface DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct {
}

export function dataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructToTerraform(struct?: DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructToHclTerraform(struct?: DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference {
    return new DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3TablesTableIcebergMetadataIcebergSchema {
}

export function dataAwsccS3TablesTableIcebergMetadataIcebergSchemaToTerraform(struct?: DataAwsccS3TablesTableIcebergMetadataIcebergSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3TablesTableIcebergMetadataIcebergSchemaToHclTerraform(struct?: DataAwsccS3TablesTableIcebergMetadataIcebergSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3TablesTableIcebergMetadataIcebergSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3TablesTableIcebergMetadataIcebergSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // schema_field_list - computed: true, optional: false, required: false
  private _schemaFieldList = new DataAwsccS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList(this, "schema_field_list", false);
  public get schemaFieldList() {
    return this._schemaFieldList;
  }
}
export interface DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct {
}

export function dataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructToTerraform(struct?: DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructToHclTerraform(struct?: DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // doc - computed: true, optional: false, required: false
  public get doc() {
    return this.getStringAttribute('doc');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference {
    return new DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2 {
}

export function dataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2ToTerraform(struct?: DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2ToHclTerraform(struct?: DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identifier_field_ids - computed: true, optional: false, required: false
  public get identifierFieldIds() {
    return this.getNumberListAttribute('identifier_field_ids');
  }

  // schema_id - computed: true, optional: false, required: false
  public get schemaId() {
    return this.getNumberAttribute('schema_id');
  }

  // schema_v2_field_list - computed: true, optional: false, required: false
  private _schemaV2FieldList = new DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList(this, "schema_v2_field_list", false);
  public get schemaV2FieldList() {
    return this._schemaV2FieldList;
  }

  // schema_v2_field_type - computed: true, optional: false, required: false
  public get schemaV2FieldType() {
    return this.getStringAttribute('schema_v2_field_type');
  }
}
export interface DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFields {
}

export function dataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsToTerraform(struct?: DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFields): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsToHclTerraform(struct?: DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFields): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // null_order - computed: true, optional: false, required: false
  public get nullOrder() {
    return this.getStringAttribute('null_order');
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getNumberAttribute('source_id');
  }

  // transform - computed: true, optional: false, required: false
  public get transform() {
    return this.getStringAttribute('transform');
  }
}

export class DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference {
    return new DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3TablesTableIcebergMetadataIcebergSortOrder {
}

export function dataAwsccS3TablesTableIcebergMetadataIcebergSortOrderToTerraform(struct?: DataAwsccS3TablesTableIcebergMetadataIcebergSortOrder): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3TablesTableIcebergMetadataIcebergSortOrderToHclTerraform(struct?: DataAwsccS3TablesTableIcebergMetadataIcebergSortOrder): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3TablesTableIcebergMetadataIcebergSortOrder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3TablesTableIcebergMetadataIcebergSortOrder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fields - computed: true, optional: false, required: false
  private _fields = new DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }

  // order_id - computed: true, optional: false, required: false
  public get orderId() {
    return this.getNumberAttribute('order_id');
  }
}
export interface DataAwsccS3TablesTableIcebergMetadata {
}

export function dataAwsccS3TablesTableIcebergMetadataToTerraform(struct?: DataAwsccS3TablesTableIcebergMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3TablesTableIcebergMetadataToHclTerraform(struct?: DataAwsccS3TablesTableIcebergMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3TablesTableIcebergMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3TablesTableIcebergMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3TablesTableIcebergMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iceberg_partition_spec - computed: true, optional: false, required: false
  private _icebergPartitionSpec = new DataAwsccS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference(this, "iceberg_partition_spec");
  public get icebergPartitionSpec() {
    return this._icebergPartitionSpec;
  }

  // iceberg_schema - computed: true, optional: false, required: false
  private _icebergSchema = new DataAwsccS3TablesTableIcebergMetadataIcebergSchemaOutputReference(this, "iceberg_schema");
  public get icebergSchema() {
    return this._icebergSchema;
  }

  // iceberg_schema_v2 - computed: true, optional: false, required: false
  private _icebergSchemaV2 = new DataAwsccS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference(this, "iceberg_schema_v2");
  public get icebergSchemaV2() {
    return this._icebergSchemaV2;
  }

  // iceberg_sort_order - computed: true, optional: false, required: false
  private _icebergSortOrder = new DataAwsccS3TablesTableIcebergMetadataIcebergSortOrderOutputReference(this, "iceberg_sort_order");
  public get icebergSortOrder() {
    return this._icebergSortOrder;
  }

  // table_properties - computed: true, optional: false, required: false
  private _tableProperties = new cdktn.StringMap(this, "table_properties");
  public get tableProperties() {
    return this._tableProperties;
  }
}
export interface DataAwsccS3TablesTableSnapshotManagement {
}

export function dataAwsccS3TablesTableSnapshotManagementToTerraform(struct?: DataAwsccS3TablesTableSnapshotManagement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3TablesTableSnapshotManagementToHclTerraform(struct?: DataAwsccS3TablesTableSnapshotManagement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3TablesTableSnapshotManagementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3TablesTableSnapshotManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3TablesTableSnapshotManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_snapshot_age_hours - computed: true, optional: false, required: false
  public get maxSnapshotAgeHours() {
    return this.getNumberAttribute('max_snapshot_age_hours');
  }

  // min_snapshots_to_keep - computed: true, optional: false, required: false
  public get minSnapshotsToKeep() {
    return this.getNumberAttribute('min_snapshots_to_keep');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataAwsccS3TablesTableStorageClassConfiguration {
}

export function dataAwsccS3TablesTableStorageClassConfigurationToTerraform(struct?: DataAwsccS3TablesTableStorageClassConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3TablesTableStorageClassConfigurationToHclTerraform(struct?: DataAwsccS3TablesTableStorageClassConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3TablesTableStorageClassConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3TablesTableStorageClassConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3TablesTableStorageClassConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // storage_class - computed: true, optional: false, required: false
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
}
export interface DataAwsccS3TablesTableTags {
}

export function dataAwsccS3TablesTableTagsToTerraform(struct?: DataAwsccS3TablesTableTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3TablesTableTagsToHclTerraform(struct?: DataAwsccS3TablesTableTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3TablesTableTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3TablesTableTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3TablesTableTags | undefined) {
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

export class DataAwsccS3TablesTableTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3TablesTableTagsOutputReference {
    return new DataAwsccS3TablesTableTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/s3tables_table awscc_s3tables_table}
*/
export class DataAwsccS3TablesTable extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_s3tables_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccS3TablesTable resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccS3TablesTable to import
  * @param importFromId The id of the existing DataAwsccS3TablesTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/s3tables_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccS3TablesTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3tables_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/s3tables_table awscc_s3tables_table} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccS3TablesTableConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccS3TablesTableConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compaction - computed: true, optional: false, required: false
  private _compaction = new DataAwsccS3TablesTableCompactionOutputReference(this, "compaction");
  public get compaction() {
    return this._compaction;
  }

  // iceberg_metadata - computed: true, optional: false, required: false
  private _icebergMetadata = new DataAwsccS3TablesTableIcebergMetadataOutputReference(this, "iceberg_metadata");
  public get icebergMetadata() {
    return this._icebergMetadata;
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

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // open_table_format - computed: true, optional: false, required: false
  public get openTableFormat() {
    return this.getStringAttribute('open_table_format');
  }

  // snapshot_management - computed: true, optional: false, required: false
  private _snapshotManagement = new DataAwsccS3TablesTableSnapshotManagementOutputReference(this, "snapshot_management");
  public get snapshotManagement() {
    return this._snapshotManagement;
  }

  // storage_class_configuration - computed: true, optional: false, required: false
  private _storageClassConfiguration = new DataAwsccS3TablesTableStorageClassConfigurationOutputReference(this, "storage_class_configuration");
  public get storageClassConfiguration() {
    return this._storageClassConfiguration;
  }

  // table_arn - computed: true, optional: false, required: false
  public get tableArn() {
    return this.getStringAttribute('table_arn');
  }

  // table_bucket_arn - computed: true, optional: false, required: false
  public get tableBucketArn() {
    return this.getStringAttribute('table_bucket_arn');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccS3TablesTableTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // version_token - computed: true, optional: false, required: false
  public get versionToken() {
    return this.getStringAttribute('version_token');
  }

  // warehouse_location - computed: true, optional: false, required: false
  public get warehouseLocation() {
    return this.getStringAttribute('warehouse_location');
  }

  // without_metadata - computed: true, optional: false, required: false
  public get withoutMetadata() {
    return this.getStringAttribute('without_metadata');
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
