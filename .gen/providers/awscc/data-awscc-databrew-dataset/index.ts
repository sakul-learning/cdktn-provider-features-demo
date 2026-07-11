// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/databrew_dataset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccDatabrewDatasetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/databrew_dataset#id DataAwsccDatabrewDataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccDatabrewDatasetFormatOptionsCsv {
}

export function dataAwsccDatabrewDatasetFormatOptionsCsvToTerraform(struct?: DataAwsccDatabrewDatasetFormatOptionsCsv): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatabrewDatasetFormatOptionsCsvToHclTerraform(struct?: DataAwsccDatabrewDatasetFormatOptionsCsv): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatabrewDatasetFormatOptionsCsv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatabrewDatasetFormatOptionsCsv | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delimiter - computed: true, optional: false, required: false
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }

  // header_row - computed: true, optional: false, required: false
  public get headerRow() {
    return this.getBooleanAttribute('header_row');
  }
}
export interface DataAwsccDatabrewDatasetFormatOptionsExcel {
}

export function dataAwsccDatabrewDatasetFormatOptionsExcelToTerraform(struct?: DataAwsccDatabrewDatasetFormatOptionsExcel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatabrewDatasetFormatOptionsExcelToHclTerraform(struct?: DataAwsccDatabrewDatasetFormatOptionsExcel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatabrewDatasetFormatOptionsExcel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatabrewDatasetFormatOptionsExcel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // header_row - computed: true, optional: false, required: false
  public get headerRow() {
    return this.getBooleanAttribute('header_row');
  }

  // sheet_indexes - computed: true, optional: false, required: false
  public get sheetIndexes() {
    return this.getNumberListAttribute('sheet_indexes');
  }

  // sheet_names - computed: true, optional: false, required: false
  public get sheetNames() {
    return this.getListAttribute('sheet_names');
  }
}
export interface DataAwsccDatabrewDatasetFormatOptionsJson {
}

export function dataAwsccDatabrewDatasetFormatOptionsJsonToTerraform(struct?: DataAwsccDatabrewDatasetFormatOptionsJson): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatabrewDatasetFormatOptionsJsonToHclTerraform(struct?: DataAwsccDatabrewDatasetFormatOptionsJson): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatabrewDatasetFormatOptionsJson | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatabrewDatasetFormatOptionsJson | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // multi_line - computed: true, optional: false, required: false
  public get multiLine() {
    return this.getBooleanAttribute('multi_line');
  }
}
export interface DataAwsccDatabrewDatasetFormatOptions {
}

export function dataAwsccDatabrewDatasetFormatOptionsToTerraform(struct?: DataAwsccDatabrewDatasetFormatOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatabrewDatasetFormatOptionsToHclTerraform(struct?: DataAwsccDatabrewDatasetFormatOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatabrewDatasetFormatOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatabrewDatasetFormatOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatabrewDatasetFormatOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // csv - computed: true, optional: false, required: false
  private _csv = new DataAwsccDatabrewDatasetFormatOptionsCsvOutputReference(this, "csv");
  public get csv() {
    return this._csv;
  }

  // excel - computed: true, optional: false, required: false
  private _excel = new DataAwsccDatabrewDatasetFormatOptionsExcelOutputReference(this, "excel");
  public get excel() {
    return this._excel;
  }

  // json - computed: true, optional: false, required: false
  private _json = new DataAwsccDatabrewDatasetFormatOptionsJsonOutputReference(this, "json");
  public get json() {
    return this._json;
  }
}
export interface DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectory {
}

export function dataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryToTerraform(struct?: DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectory): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryToHclTerraform(struct?: DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectory): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectory | undefined) {
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

  // bucket_owner - computed: true, optional: false, required: false
  public get bucketOwner() {
    return this.getStringAttribute('bucket_owner');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}
export interface DataAwsccDatabrewDatasetInputDataCatalogInputDefinition {
}

export function dataAwsccDatabrewDatasetInputDataCatalogInputDefinitionToTerraform(struct?: DataAwsccDatabrewDatasetInputDataCatalogInputDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatabrewDatasetInputDataCatalogInputDefinitionToHclTerraform(struct?: DataAwsccDatabrewDatasetInputDataCatalogInputDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatabrewDatasetInputDataCatalogInputDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatabrewDatasetInputDataCatalogInputDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog_id - computed: true, optional: false, required: false
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // temp_directory - computed: true, optional: false, required: false
  private _tempDirectory = new DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference(this, "temp_directory");
  public get tempDirectory() {
    return this._tempDirectory;
  }
}
export interface DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectory {
}

export function dataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryToTerraform(struct?: DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectory): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryToHclTerraform(struct?: DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectory): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectory | undefined) {
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

  // bucket_owner - computed: true, optional: false, required: false
  public get bucketOwner() {
    return this.getStringAttribute('bucket_owner');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}
export interface DataAwsccDatabrewDatasetInputDatabaseInputDefinition {
}

export function dataAwsccDatabrewDatasetInputDatabaseInputDefinitionToTerraform(struct?: DataAwsccDatabrewDatasetInputDatabaseInputDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatabrewDatasetInputDatabaseInputDefinitionToHclTerraform(struct?: DataAwsccDatabrewDatasetInputDatabaseInputDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatabrewDatasetInputDatabaseInputDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatabrewDatasetInputDatabaseInputDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_table_name - computed: true, optional: false, required: false
  public get databaseTableName() {
    return this.getStringAttribute('database_table_name');
  }

  // glue_connection_name - computed: true, optional: false, required: false
  public get glueConnectionName() {
    return this.getStringAttribute('glue_connection_name');
  }

  // query_string - computed: true, optional: false, required: false
  public get queryString() {
    return this.getStringAttribute('query_string');
  }

  // temp_directory - computed: true, optional: false, required: false
  private _tempDirectory = new DataAwsccDatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference(this, "temp_directory");
  public get tempDirectory() {
    return this._tempDirectory;
  }
}
export interface DataAwsccDatabrewDatasetInputMetadata {
}

export function dataAwsccDatabrewDatasetInputMetadataToTerraform(struct?: DataAwsccDatabrewDatasetInputMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatabrewDatasetInputMetadataToHclTerraform(struct?: DataAwsccDatabrewDatasetInputMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatabrewDatasetInputMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatabrewDatasetInputMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatabrewDatasetInputMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_arn - computed: true, optional: false, required: false
  public get sourceArn() {
    return this.getStringAttribute('source_arn');
  }
}
export interface DataAwsccDatabrewDatasetInputS3InputDefinition {
}

export function dataAwsccDatabrewDatasetInputS3InputDefinitionToTerraform(struct?: DataAwsccDatabrewDatasetInputS3InputDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatabrewDatasetInputS3InputDefinitionToHclTerraform(struct?: DataAwsccDatabrewDatasetInputS3InputDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatabrewDatasetInputS3InputDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatabrewDatasetInputS3InputDefinition | undefined) {
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

  // bucket_owner - computed: true, optional: false, required: false
  public get bucketOwner() {
    return this.getStringAttribute('bucket_owner');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}
export interface DataAwsccDatabrewDatasetInput {
}

export function dataAwsccDatabrewDatasetInputToTerraform(struct?: DataAwsccDatabrewDatasetInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatabrewDatasetInputToHclTerraform(struct?: DataAwsccDatabrewDatasetInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatabrewDatasetInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatabrewDatasetInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatabrewDatasetInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_catalog_input_definition - computed: true, optional: false, required: false
  private _dataCatalogInputDefinition = new DataAwsccDatabrewDatasetInputDataCatalogInputDefinitionOutputReference(this, "data_catalog_input_definition");
  public get dataCatalogInputDefinition() {
    return this._dataCatalogInputDefinition;
  }

  // database_input_definition - computed: true, optional: false, required: false
  private _databaseInputDefinition = new DataAwsccDatabrewDatasetInputDatabaseInputDefinitionOutputReference(this, "database_input_definition");
  public get databaseInputDefinition() {
    return this._databaseInputDefinition;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataAwsccDatabrewDatasetInputMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // s3_input_definition - computed: true, optional: false, required: false
  private _s3InputDefinition = new DataAwsccDatabrewDatasetInputS3InputDefinitionOutputReference(this, "s3_input_definition");
  public get s3InputDefinition() {
    return this._s3InputDefinition;
  }
}
export interface DataAwsccDatabrewDatasetPathOptionsFilesLimit {
}

export function dataAwsccDatabrewDatasetPathOptionsFilesLimitToTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsFilesLimit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatabrewDatasetPathOptionsFilesLimitToHclTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsFilesLimit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatabrewDatasetPathOptionsFilesLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatabrewDatasetPathOptionsFilesLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_files - computed: true, optional: false, required: false
  public get maxFiles() {
    return this.getNumberAttribute('max_files');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getStringAttribute('order');
  }

  // ordered_by - computed: true, optional: false, required: false
  public get orderedBy() {
    return this.getStringAttribute('ordered_by');
  }
}
export interface DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap {
}

export function dataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapToTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapToHclTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // value_reference - computed: true, optional: false, required: false
  public get valueReference() {
    return this.getStringAttribute('value_reference');
  }
}

export class DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference {
    return new DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDatabrewDatasetPathOptionsLastModifiedDateCondition {
}

export function dataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionToTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsLastModifiedDateCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionToHclTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsLastModifiedDateCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatabrewDatasetPathOptionsLastModifiedDateCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatabrewDatasetPathOptionsLastModifiedDateCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // values_map - computed: true, optional: false, required: false
  private _valuesMap = new DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList(this, "values_map", false);
  public get valuesMap() {
    return this._valuesMap;
  }
}
export interface DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions {
}

export function dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsToTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsToHclTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // locale_code - computed: true, optional: false, required: false
  public get localeCode() {
    return this.getStringAttribute('locale_code');
  }

  // timezone_offset - computed: true, optional: false, required: false
  public get timezoneOffset() {
    return this.getStringAttribute('timezone_offset');
  }
}
export interface DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap {
}

export function dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapToTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapToHclTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // value_reference - computed: true, optional: false, required: false
  public get valueReference() {
    return this.getStringAttribute('value_reference');
  }
}

export class DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference {
    return new DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilter {
}

export function dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterToTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterToHclTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // values_map - computed: true, optional: false, required: false
  private _valuesMap = new DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList(this, "values_map", false);
  public get valuesMap() {
    return this._valuesMap;
  }
}
export interface DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameter {
}

export function dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterToTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterToHclTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_column - computed: true, optional: false, required: false
  public get createColumn() {
    return this.getBooleanAttribute('create_column');
  }

  // datetime_options - computed: true, optional: false, required: false
  private _datetimeOptions = new DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference(this, "datetime_options");
  public get datetimeOptions() {
    return this._datetimeOptions;
  }

  // filter - computed: true, optional: false, required: false
  private _filter = new DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
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
export interface DataAwsccDatabrewDatasetPathOptionsParameters {
}

export function dataAwsccDatabrewDatasetPathOptionsParametersToTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatabrewDatasetPathOptionsParametersToHclTerraform(struct?: DataAwsccDatabrewDatasetPathOptionsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatabrewDatasetPathOptionsParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDatabrewDatasetPathOptionsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatabrewDatasetPathOptionsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dataset_parameter - computed: true, optional: false, required: false
  private _datasetParameter = new DataAwsccDatabrewDatasetPathOptionsParametersDatasetParameterOutputReference(this, "dataset_parameter");
  public get datasetParameter() {
    return this._datasetParameter;
  }

  // path_parameter_name - computed: true, optional: false, required: false
  public get pathParameterName() {
    return this.getStringAttribute('path_parameter_name');
  }
}

export class DataAwsccDatabrewDatasetPathOptionsParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDatabrewDatasetPathOptionsParametersOutputReference {
    return new DataAwsccDatabrewDatasetPathOptionsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDatabrewDatasetPathOptions {
}

export function dataAwsccDatabrewDatasetPathOptionsToTerraform(struct?: DataAwsccDatabrewDatasetPathOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatabrewDatasetPathOptionsToHclTerraform(struct?: DataAwsccDatabrewDatasetPathOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatabrewDatasetPathOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatabrewDatasetPathOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatabrewDatasetPathOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // files_limit - computed: true, optional: false, required: false
  private _filesLimit = new DataAwsccDatabrewDatasetPathOptionsFilesLimitOutputReference(this, "files_limit");
  public get filesLimit() {
    return this._filesLimit;
  }

  // last_modified_date_condition - computed: true, optional: false, required: false
  private _lastModifiedDateCondition = new DataAwsccDatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference(this, "last_modified_date_condition");
  public get lastModifiedDateCondition() {
    return this._lastModifiedDateCondition;
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataAwsccDatabrewDatasetPathOptionsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
}
export interface DataAwsccDatabrewDatasetTags {
}

export function dataAwsccDatabrewDatasetTagsToTerraform(struct?: DataAwsccDatabrewDatasetTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatabrewDatasetTagsToHclTerraform(struct?: DataAwsccDatabrewDatasetTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatabrewDatasetTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDatabrewDatasetTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatabrewDatasetTags | undefined) {
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

export class DataAwsccDatabrewDatasetTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDatabrewDatasetTagsOutputReference {
    return new DataAwsccDatabrewDatasetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/databrew_dataset awscc_databrew_dataset}
*/
export class DataAwsccDatabrewDataset extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_databrew_dataset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccDatabrewDataset resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccDatabrewDataset to import
  * @param importFromId The id of the existing DataAwsccDatabrewDataset that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/databrew_dataset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccDatabrewDataset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_databrew_dataset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/databrew_dataset awscc_databrew_dataset} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDatabrewDatasetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDatabrewDatasetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_databrew_dataset',
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

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // format_options - computed: true, optional: false, required: false
  private _formatOptions = new DataAwsccDatabrewDatasetFormatOptionsOutputReference(this, "format_options");
  public get formatOptions() {
    return this._formatOptions;
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

  // input - computed: true, optional: false, required: false
  private _input = new DataAwsccDatabrewDatasetInputOutputReference(this, "input");
  public get input() {
    return this._input;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path_options - computed: true, optional: false, required: false
  private _pathOptions = new DataAwsccDatabrewDatasetPathOptionsOutputReference(this, "path_options");
  public get pathOptions() {
    return this._pathOptions;
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccDatabrewDatasetTagsList(this, "tags", false);
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
