// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DatabrewDatasetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Dataset format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#format DatabrewDataset#format}
  */
  readonly format?: string;
  /**
  * Format options for dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#format_options DatabrewDataset#format_options}
  */
  readonly formatOptions?: DatabrewDatasetFormatOptions;
  /**
  * Input
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#input DatabrewDataset#input}
  */
  readonly input: DatabrewDatasetInput;
  /**
  * Dataset name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#name DatabrewDataset#name}
  */
  readonly name: string;
  /**
  * PathOptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#path_options DatabrewDataset#path_options}
  */
  readonly pathOptions?: DatabrewDatasetPathOptions;
  /**
  * Source type of the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#source DatabrewDataset#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#tags DatabrewDataset#tags}
  */
  readonly tags?: DatabrewDatasetTags[] | cdktn.IResolvable;
}
export interface DatabrewDatasetFormatOptionsCsv {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#delimiter DatabrewDataset#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#header_row DatabrewDataset#header_row}
  */
  readonly headerRow?: boolean | cdktn.IResolvable;
}

export function databrewDatasetFormatOptionsCsvToTerraform(struct?: DatabrewDatasetFormatOptionsCsv | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delimiter: cdktn.stringToTerraform(struct!.delimiter),
    header_row: cdktn.booleanToTerraform(struct!.headerRow),
  }
}


export function databrewDatasetFormatOptionsCsvToHclTerraform(struct?: DatabrewDatasetFormatOptionsCsv | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delimiter: {
      value: cdktn.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_row: {
      value: cdktn.booleanToHclTerraform(struct!.headerRow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewDatasetFormatOptionsCsvOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewDatasetFormatOptionsCsv | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._headerRow !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerRow = this._headerRow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewDatasetFormatOptionsCsv | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delimiter = undefined;
      this._headerRow = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delimiter = value.delimiter;
      this._headerRow = value.headerRow;
    }
  }

  // delimiter - computed: true, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // header_row - computed: true, optional: true, required: false
  private _headerRow?: boolean | cdktn.IResolvable; 
  public get headerRow() {
    return this.getBooleanAttribute('header_row');
  }
  public set headerRow(value: boolean | cdktn.IResolvable) {
    this._headerRow = value;
  }
  public resetHeaderRow() {
    this._headerRow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerRowInput() {
    return this._headerRow;
  }
}
export interface DatabrewDatasetFormatOptionsExcel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#header_row DatabrewDataset#header_row}
  */
  readonly headerRow?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#sheet_indexes DatabrewDataset#sheet_indexes}
  */
  readonly sheetIndexes?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#sheet_names DatabrewDataset#sheet_names}
  */
  readonly sheetNames?: string[];
}

export function databrewDatasetFormatOptionsExcelToTerraform(struct?: DatabrewDatasetFormatOptionsExcel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_row: cdktn.booleanToTerraform(struct!.headerRow),
    sheet_indexes: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.sheetIndexes),
    sheet_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sheetNames),
  }
}


export function databrewDatasetFormatOptionsExcelToHclTerraform(struct?: DatabrewDatasetFormatOptionsExcel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header_row: {
      value: cdktn.booleanToHclTerraform(struct!.headerRow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sheet_indexes: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.sheetIndexes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    sheet_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sheetNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewDatasetFormatOptionsExcelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewDatasetFormatOptionsExcel | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerRow !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerRow = this._headerRow;
    }
    if (this._sheetIndexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sheetIndexes = this._sheetIndexes;
    }
    if (this._sheetNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.sheetNames = this._sheetNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewDatasetFormatOptionsExcel | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerRow = undefined;
      this._sheetIndexes = undefined;
      this._sheetNames = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerRow = value.headerRow;
      this._sheetIndexes = value.sheetIndexes;
      this._sheetNames = value.sheetNames;
    }
  }

  // header_row - computed: true, optional: true, required: false
  private _headerRow?: boolean | cdktn.IResolvable; 
  public get headerRow() {
    return this.getBooleanAttribute('header_row');
  }
  public set headerRow(value: boolean | cdktn.IResolvable) {
    this._headerRow = value;
  }
  public resetHeaderRow() {
    this._headerRow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerRowInput() {
    return this._headerRow;
  }

  // sheet_indexes - computed: true, optional: true, required: false
  private _sheetIndexes?: number[]; 
  public get sheetIndexes() {
    return this.getNumberListAttribute('sheet_indexes');
  }
  public set sheetIndexes(value: number[]) {
    this._sheetIndexes = value;
  }
  public resetSheetIndexes() {
    this._sheetIndexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sheetIndexesInput() {
    return this._sheetIndexes;
  }

  // sheet_names - computed: true, optional: true, required: false
  private _sheetNames?: string[]; 
  public get sheetNames() {
    return this.getListAttribute('sheet_names');
  }
  public set sheetNames(value: string[]) {
    this._sheetNames = value;
  }
  public resetSheetNames() {
    this._sheetNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sheetNamesInput() {
    return this._sheetNames;
  }
}
export interface DatabrewDatasetFormatOptionsJson {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#multi_line DatabrewDataset#multi_line}
  */
  readonly multiLine?: boolean | cdktn.IResolvable;
}

export function databrewDatasetFormatOptionsJsonToTerraform(struct?: DatabrewDatasetFormatOptionsJson | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    multi_line: cdktn.booleanToTerraform(struct!.multiLine),
  }
}


export function databrewDatasetFormatOptionsJsonToHclTerraform(struct?: DatabrewDatasetFormatOptionsJson | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    multi_line: {
      value: cdktn.booleanToHclTerraform(struct!.multiLine),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewDatasetFormatOptionsJsonOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewDatasetFormatOptionsJson | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._multiLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiLine = this._multiLine;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewDatasetFormatOptionsJson | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._multiLine = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._multiLine = value.multiLine;
    }
  }

  // multi_line - computed: true, optional: true, required: false
  private _multiLine?: boolean | cdktn.IResolvable; 
  public get multiLine() {
    return this.getBooleanAttribute('multi_line');
  }
  public set multiLine(value: boolean | cdktn.IResolvable) {
    this._multiLine = value;
  }
  public resetMultiLine() {
    this._multiLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiLineInput() {
    return this._multiLine;
  }
}
export interface DatabrewDatasetFormatOptions {
  /**
  * Csv options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#csv DatabrewDataset#csv}
  */
  readonly csv?: DatabrewDatasetFormatOptionsCsv;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#excel DatabrewDataset#excel}
  */
  readonly excel?: DatabrewDatasetFormatOptionsExcel;
  /**
  * Json options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#json DatabrewDataset#json}
  */
  readonly json?: DatabrewDatasetFormatOptionsJson;
}

export function databrewDatasetFormatOptionsToTerraform(struct?: DatabrewDatasetFormatOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    csv: databrewDatasetFormatOptionsCsvToTerraform(struct!.csv),
    excel: databrewDatasetFormatOptionsExcelToTerraform(struct!.excel),
    json: databrewDatasetFormatOptionsJsonToTerraform(struct!.json),
  }
}


export function databrewDatasetFormatOptionsToHclTerraform(struct?: DatabrewDatasetFormatOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    csv: {
      value: databrewDatasetFormatOptionsCsvToHclTerraform(struct!.csv),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabrewDatasetFormatOptionsCsv",
    },
    excel: {
      value: databrewDatasetFormatOptionsExcelToHclTerraform(struct!.excel),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabrewDatasetFormatOptionsExcel",
    },
    json: {
      value: databrewDatasetFormatOptionsJsonToHclTerraform(struct!.json),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabrewDatasetFormatOptionsJson",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewDatasetFormatOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewDatasetFormatOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._csv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csv = this._csv?.internalValue;
    }
    if (this._excel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excel = this._excel?.internalValue;
    }
    if (this._json?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewDatasetFormatOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._csv.internalValue = undefined;
      this._excel.internalValue = undefined;
      this._json.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._csv.internalValue = value.csv;
      this._excel.internalValue = value.excel;
      this._json.internalValue = value.json;
    }
  }

  // csv - computed: true, optional: true, required: false
  private _csv = new DatabrewDatasetFormatOptionsCsvOutputReference(this, "csv");
  public get csv() {
    return this._csv;
  }
  public putCsv(value: DatabrewDatasetFormatOptionsCsv) {
    this._csv.internalValue = value;
  }
  public resetCsv() {
    this._csv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvInput() {
    return this._csv.internalValue;
  }

  // excel - computed: true, optional: true, required: false
  private _excel = new DatabrewDatasetFormatOptionsExcelOutputReference(this, "excel");
  public get excel() {
    return this._excel;
  }
  public putExcel(value: DatabrewDatasetFormatOptionsExcel) {
    this._excel.internalValue = value;
  }
  public resetExcel() {
    this._excel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excelInput() {
    return this._excel.internalValue;
  }

  // json - computed: true, optional: true, required: false
  private _json = new DatabrewDatasetFormatOptionsJsonOutputReference(this, "json");
  public get json() {
    return this._json;
  }
  public putJson(value: DatabrewDatasetFormatOptionsJson) {
    this._json.internalValue = value;
  }
  public resetJson() {
    this._json.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json.internalValue;
  }
}
export interface DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#bucket DatabrewDataset#bucket}
  */
  readonly bucket?: string;
  /**
  * Bucket owner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#bucket_owner DatabrewDataset#bucket_owner}
  */
  readonly bucketOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#key DatabrewDataset#key}
  */
  readonly key?: string;
}

export function databrewDatasetInputDataCatalogInputDefinitionTempDirectoryToTerraform(struct?: DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    bucket_owner: cdktn.stringToTerraform(struct!.bucketOwner),
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function databrewDatasetInputDataCatalogInputDefinitionTempDirectoryToHclTerraform(struct?: DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory | cdktn.IResolvable): any {
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
    bucket_owner: {
      value: cdktn.stringToHclTerraform(struct!.bucketOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._bucketOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketOwner = this._bucketOwner;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._bucketOwner = undefined;
      this._key = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._bucketOwner = value.bucketOwner;
      this._key = value.key;
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

  // bucket_owner - computed: true, optional: true, required: false
  private _bucketOwner?: string; 
  public get bucketOwner() {
    return this.getStringAttribute('bucket_owner');
  }
  public set bucketOwner(value: string) {
    this._bucketOwner = value;
  }
  public resetBucketOwner() {
    this._bucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOwnerInput() {
    return this._bucketOwner;
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
}
export interface DatabrewDatasetInputDataCatalogInputDefinition {
  /**
  * Catalog id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#catalog_id DatabrewDataset#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Database name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#database_name DatabrewDataset#database_name}
  */
  readonly databaseName?: string;
  /**
  * Table name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#table_name DatabrewDataset#table_name}
  */
  readonly tableName?: string;
  /**
  * Input location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#temp_directory DatabrewDataset#temp_directory}
  */
  readonly tempDirectory?: DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory;
}

export function databrewDatasetInputDataCatalogInputDefinitionToTerraform(struct?: DatabrewDatasetInputDataCatalogInputDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog_id: cdktn.stringToTerraform(struct!.catalogId),
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    table_name: cdktn.stringToTerraform(struct!.tableName),
    temp_directory: databrewDatasetInputDataCatalogInputDefinitionTempDirectoryToTerraform(struct!.tempDirectory),
  }
}


export function databrewDatasetInputDataCatalogInputDefinitionToHclTerraform(struct?: DatabrewDatasetInputDataCatalogInputDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog_id: {
      value: cdktn.stringToHclTerraform(struct!.catalogId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temp_directory: {
      value: databrewDatasetInputDataCatalogInputDefinitionTempDirectoryToHclTerraform(struct!.tempDirectory),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewDatasetInputDataCatalogInputDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewDatasetInputDataCatalogInputDefinition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogId !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogId = this._catalogId;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._tempDirectory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tempDirectory = this._tempDirectory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewDatasetInputDataCatalogInputDefinition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogId = undefined;
      this._databaseName = undefined;
      this._tableName = undefined;
      this._tempDirectory.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogId = value.catalogId;
      this._databaseName = value.databaseName;
      this._tableName = value.tableName;
      this._tempDirectory.internalValue = value.tempDirectory;
    }
  }

  // catalog_id - computed: true, optional: true, required: false
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

  // database_name - computed: true, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // table_name - computed: true, optional: true, required: false
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // temp_directory - computed: true, optional: true, required: false
  private _tempDirectory = new DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference(this, "temp_directory");
  public get tempDirectory() {
    return this._tempDirectory;
  }
  public putTempDirectory(value: DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory) {
    this._tempDirectory.internalValue = value;
  }
  public resetTempDirectory() {
    this._tempDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempDirectoryInput() {
    return this._tempDirectory.internalValue;
  }
}
export interface DatabrewDatasetInputDatabaseInputDefinitionTempDirectory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#bucket DatabrewDataset#bucket}
  */
  readonly bucket?: string;
  /**
  * Bucket owner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#bucket_owner DatabrewDataset#bucket_owner}
  */
  readonly bucketOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#key DatabrewDataset#key}
  */
  readonly key?: string;
}

export function databrewDatasetInputDatabaseInputDefinitionTempDirectoryToTerraform(struct?: DatabrewDatasetInputDatabaseInputDefinitionTempDirectory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    bucket_owner: cdktn.stringToTerraform(struct!.bucketOwner),
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function databrewDatasetInputDatabaseInputDefinitionTempDirectoryToHclTerraform(struct?: DatabrewDatasetInputDatabaseInputDefinitionTempDirectory | cdktn.IResolvable): any {
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
    bucket_owner: {
      value: cdktn.stringToHclTerraform(struct!.bucketOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewDatasetInputDatabaseInputDefinitionTempDirectory | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._bucketOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketOwner = this._bucketOwner;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewDatasetInputDatabaseInputDefinitionTempDirectory | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._bucketOwner = undefined;
      this._key = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._bucketOwner = value.bucketOwner;
      this._key = value.key;
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

  // bucket_owner - computed: true, optional: true, required: false
  private _bucketOwner?: string; 
  public get bucketOwner() {
    return this.getStringAttribute('bucket_owner');
  }
  public set bucketOwner(value: string) {
    this._bucketOwner = value;
  }
  public resetBucketOwner() {
    this._bucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOwnerInput() {
    return this._bucketOwner;
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
}
export interface DatabrewDatasetInputDatabaseInputDefinition {
  /**
  * Database table name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#database_table_name DatabrewDataset#database_table_name}
  */
  readonly databaseTableName?: string;
  /**
  * Glue connection name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#glue_connection_name DatabrewDataset#glue_connection_name}
  */
  readonly glueConnectionName?: string;
  /**
  * Custom SQL to run against the provided AWS Glue connection. This SQL will be used as the input for DataBrew projects and jobs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#query_string DatabrewDataset#query_string}
  */
  readonly queryString?: string;
  /**
  * Input location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#temp_directory DatabrewDataset#temp_directory}
  */
  readonly tempDirectory?: DatabrewDatasetInputDatabaseInputDefinitionTempDirectory;
}

export function databrewDatasetInputDatabaseInputDefinitionToTerraform(struct?: DatabrewDatasetInputDatabaseInputDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database_table_name: cdktn.stringToTerraform(struct!.databaseTableName),
    glue_connection_name: cdktn.stringToTerraform(struct!.glueConnectionName),
    query_string: cdktn.stringToTerraform(struct!.queryString),
    temp_directory: databrewDatasetInputDatabaseInputDefinitionTempDirectoryToTerraform(struct!.tempDirectory),
  }
}


export function databrewDatasetInputDatabaseInputDefinitionToHclTerraform(struct?: DatabrewDatasetInputDatabaseInputDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database_table_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseTableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glue_connection_name: {
      value: cdktn.stringToHclTerraform(struct!.glueConnectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_string: {
      value: cdktn.stringToHclTerraform(struct!.queryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temp_directory: {
      value: databrewDatasetInputDatabaseInputDefinitionTempDirectoryToHclTerraform(struct!.tempDirectory),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabrewDatasetInputDatabaseInputDefinitionTempDirectory",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewDatasetInputDatabaseInputDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewDatasetInputDatabaseInputDefinition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseTableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseTableName = this._databaseTableName;
    }
    if (this._glueConnectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.glueConnectionName = this._glueConnectionName;
    }
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    if (this._tempDirectory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tempDirectory = this._tempDirectory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewDatasetInputDatabaseInputDefinition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseTableName = undefined;
      this._glueConnectionName = undefined;
      this._queryString = undefined;
      this._tempDirectory.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseTableName = value.databaseTableName;
      this._glueConnectionName = value.glueConnectionName;
      this._queryString = value.queryString;
      this._tempDirectory.internalValue = value.tempDirectory;
    }
  }

  // database_table_name - computed: true, optional: true, required: false
  private _databaseTableName?: string; 
  public get databaseTableName() {
    return this.getStringAttribute('database_table_name');
  }
  public set databaseTableName(value: string) {
    this._databaseTableName = value;
  }
  public resetDatabaseTableName() {
    this._databaseTableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTableNameInput() {
    return this._databaseTableName;
  }

  // glue_connection_name - computed: true, optional: true, required: false
  private _glueConnectionName?: string; 
  public get glueConnectionName() {
    return this.getStringAttribute('glue_connection_name');
  }
  public set glueConnectionName(value: string) {
    this._glueConnectionName = value;
  }
  public resetGlueConnectionName() {
    this._glueConnectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glueConnectionNameInput() {
    return this._glueConnectionName;
  }

  // query_string - computed: true, optional: true, required: false
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // temp_directory - computed: true, optional: true, required: false
  private _tempDirectory = new DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference(this, "temp_directory");
  public get tempDirectory() {
    return this._tempDirectory;
  }
  public putTempDirectory(value: DatabrewDatasetInputDatabaseInputDefinitionTempDirectory) {
    this._tempDirectory.internalValue = value;
  }
  public resetTempDirectory() {
    this._tempDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempDirectoryInput() {
    return this._tempDirectory.internalValue;
  }
}
export interface DatabrewDatasetInputMetadata {
  /**
  * Arn of the source of the dataset. For e.g.: AppFlow Flow ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#source_arn DatabrewDataset#source_arn}
  */
  readonly sourceArn?: string;
}

export function databrewDatasetInputMetadataToTerraform(struct?: DatabrewDatasetInputMetadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_arn: cdktn.stringToTerraform(struct!.sourceArn),
  }
}


export function databrewDatasetInputMetadataToHclTerraform(struct?: DatabrewDatasetInputMetadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_arn: {
      value: cdktn.stringToHclTerraform(struct!.sourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewDatasetInputMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewDatasetInputMetadata | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceArn = this._sourceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewDatasetInputMetadata | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceArn = value.sourceArn;
    }
  }

  // source_arn - computed: true, optional: true, required: false
  private _sourceArn?: string; 
  public get sourceArn() {
    return this.getStringAttribute('source_arn');
  }
  public set sourceArn(value: string) {
    this._sourceArn = value;
  }
  public resetSourceArn() {
    this._sourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceArnInput() {
    return this._sourceArn;
  }
}
export interface DatabrewDatasetInputS3InputDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#bucket DatabrewDataset#bucket}
  */
  readonly bucket?: string;
  /**
  * Bucket owner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#bucket_owner DatabrewDataset#bucket_owner}
  */
  readonly bucketOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#key DatabrewDataset#key}
  */
  readonly key?: string;
}

export function databrewDatasetInputS3InputDefinitionToTerraform(struct?: DatabrewDatasetInputS3InputDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    bucket_owner: cdktn.stringToTerraform(struct!.bucketOwner),
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function databrewDatasetInputS3InputDefinitionToHclTerraform(struct?: DatabrewDatasetInputS3InputDefinition | cdktn.IResolvable): any {
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
    bucket_owner: {
      value: cdktn.stringToHclTerraform(struct!.bucketOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewDatasetInputS3InputDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewDatasetInputS3InputDefinition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._bucketOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketOwner = this._bucketOwner;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewDatasetInputS3InputDefinition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._bucketOwner = undefined;
      this._key = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._bucketOwner = value.bucketOwner;
      this._key = value.key;
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

  // bucket_owner - computed: true, optional: true, required: false
  private _bucketOwner?: string; 
  public get bucketOwner() {
    return this.getStringAttribute('bucket_owner');
  }
  public set bucketOwner(value: string) {
    this._bucketOwner = value;
  }
  public resetBucketOwner() {
    this._bucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOwnerInput() {
    return this._bucketOwner;
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
}
export interface DatabrewDatasetInput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#data_catalog_input_definition DatabrewDataset#data_catalog_input_definition}
  */
  readonly dataCatalogInputDefinition?: DatabrewDatasetInputDataCatalogInputDefinition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#database_input_definition DatabrewDataset#database_input_definition}
  */
  readonly databaseInputDefinition?: DatabrewDatasetInputDatabaseInputDefinition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#metadata DatabrewDataset#metadata}
  */
  readonly metadata?: DatabrewDatasetInputMetadata;
  /**
  * Input location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#s3_input_definition DatabrewDataset#s3_input_definition}
  */
  readonly s3InputDefinition?: DatabrewDatasetInputS3InputDefinition;
}

export function databrewDatasetInputToTerraform(struct?: DatabrewDatasetInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_catalog_input_definition: databrewDatasetInputDataCatalogInputDefinitionToTerraform(struct!.dataCatalogInputDefinition),
    database_input_definition: databrewDatasetInputDatabaseInputDefinitionToTerraform(struct!.databaseInputDefinition),
    metadata: databrewDatasetInputMetadataToTerraform(struct!.metadata),
    s3_input_definition: databrewDatasetInputS3InputDefinitionToTerraform(struct!.s3InputDefinition),
  }
}


export function databrewDatasetInputToHclTerraform(struct?: DatabrewDatasetInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_catalog_input_definition: {
      value: databrewDatasetInputDataCatalogInputDefinitionToHclTerraform(struct!.dataCatalogInputDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabrewDatasetInputDataCatalogInputDefinition",
    },
    database_input_definition: {
      value: databrewDatasetInputDatabaseInputDefinitionToHclTerraform(struct!.databaseInputDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabrewDatasetInputDatabaseInputDefinition",
    },
    metadata: {
      value: databrewDatasetInputMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabrewDatasetInputMetadata",
    },
    s3_input_definition: {
      value: databrewDatasetInputS3InputDefinitionToHclTerraform(struct!.s3InputDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabrewDatasetInputS3InputDefinition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewDatasetInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewDatasetInput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataCatalogInputDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCatalogInputDefinition = this._dataCatalogInputDefinition?.internalValue;
    }
    if (this._databaseInputDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseInputDefinition = this._databaseInputDefinition?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._s3InputDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3InputDefinition = this._s3InputDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewDatasetInput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataCatalogInputDefinition.internalValue = undefined;
      this._databaseInputDefinition.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._s3InputDefinition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataCatalogInputDefinition.internalValue = value.dataCatalogInputDefinition;
      this._databaseInputDefinition.internalValue = value.databaseInputDefinition;
      this._metadata.internalValue = value.metadata;
      this._s3InputDefinition.internalValue = value.s3InputDefinition;
    }
  }

  // data_catalog_input_definition - computed: true, optional: true, required: false
  private _dataCatalogInputDefinition = new DatabrewDatasetInputDataCatalogInputDefinitionOutputReference(this, "data_catalog_input_definition");
  public get dataCatalogInputDefinition() {
    return this._dataCatalogInputDefinition;
  }
  public putDataCatalogInputDefinition(value: DatabrewDatasetInputDataCatalogInputDefinition) {
    this._dataCatalogInputDefinition.internalValue = value;
  }
  public resetDataCatalogInputDefinition() {
    this._dataCatalogInputDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCatalogInputDefinitionInput() {
    return this._dataCatalogInputDefinition.internalValue;
  }

  // database_input_definition - computed: true, optional: true, required: false
  private _databaseInputDefinition = new DatabrewDatasetInputDatabaseInputDefinitionOutputReference(this, "database_input_definition");
  public get databaseInputDefinition() {
    return this._databaseInputDefinition;
  }
  public putDatabaseInputDefinition(value: DatabrewDatasetInputDatabaseInputDefinition) {
    this._databaseInputDefinition.internalValue = value;
  }
  public resetDatabaseInputDefinition() {
    this._databaseInputDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInputDefinitionInput() {
    return this._databaseInputDefinition.internalValue;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata = new DatabrewDatasetInputMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DatabrewDatasetInputMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // s3_input_definition - computed: true, optional: true, required: false
  private _s3InputDefinition = new DatabrewDatasetInputS3InputDefinitionOutputReference(this, "s3_input_definition");
  public get s3InputDefinition() {
    return this._s3InputDefinition;
  }
  public putS3InputDefinition(value: DatabrewDatasetInputS3InputDefinition) {
    this._s3InputDefinition.internalValue = value;
  }
  public resetS3InputDefinition() {
    this._s3InputDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3InputDefinitionInput() {
    return this._s3InputDefinition.internalValue;
  }
}
export interface DatabrewDatasetPathOptionsFilesLimit {
  /**
  * Maximum number of files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#max_files DatabrewDataset#max_files}
  */
  readonly maxFiles?: number;
  /**
  * Order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#order DatabrewDataset#order}
  */
  readonly order?: string;
  /**
  * Ordered by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#ordered_by DatabrewDataset#ordered_by}
  */
  readonly orderedBy?: string;
}

export function databrewDatasetPathOptionsFilesLimitToTerraform(struct?: DatabrewDatasetPathOptionsFilesLimit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_files: cdktn.numberToTerraform(struct!.maxFiles),
    order: cdktn.stringToTerraform(struct!.order),
    ordered_by: cdktn.stringToTerraform(struct!.orderedBy),
  }
}


export function databrewDatasetPathOptionsFilesLimitToHclTerraform(struct?: DatabrewDatasetPathOptionsFilesLimit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_files: {
      value: cdktn.numberToHclTerraform(struct!.maxFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    order: {
      value: cdktn.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ordered_by: {
      value: cdktn.stringToHclTerraform(struct!.orderedBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewDatasetPathOptionsFilesLimitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewDatasetPathOptionsFilesLimit | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFiles = this._maxFiles;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._orderedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderedBy = this._orderedBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewDatasetPathOptionsFilesLimit | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxFiles = undefined;
      this._order = undefined;
      this._orderedBy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxFiles = value.maxFiles;
      this._order = value.order;
      this._orderedBy = value.orderedBy;
    }
  }

  // max_files - computed: true, optional: true, required: false
  private _maxFiles?: number; 
  public get maxFiles() {
    return this.getNumberAttribute('max_files');
  }
  public set maxFiles(value: number) {
    this._maxFiles = value;
  }
  public resetMaxFiles() {
    this._maxFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFilesInput() {
    return this._maxFiles;
  }

  // order - computed: true, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // ordered_by - computed: true, optional: true, required: false
  private _orderedBy?: string; 
  public get orderedBy() {
    return this.getStringAttribute('ordered_by');
  }
  public set orderedBy(value: string) {
    this._orderedBy = value;
  }
  public resetOrderedBy() {
    this._orderedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderedByInput() {
    return this._orderedBy;
  }
}
export interface DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#value DatabrewDataset#value}
  */
  readonly value?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#value_reference DatabrewDataset#value_reference}
  */
  readonly valueReference?: string;
}

export function databrewDatasetPathOptionsLastModifiedDateConditionValuesMapToTerraform(struct?: DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
    value_reference: cdktn.stringToTerraform(struct!.valueReference),
  }
}


export function databrewDatasetPathOptionsLastModifiedDateConditionValuesMapToHclTerraform(struct?: DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_reference: {
      value: cdktn.stringToHclTerraform(struct!.valueReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueReference = this._valueReference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
      this._valueReference = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
      this._valueReference = value.valueReference;
    }
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

  // value_reference - computed: true, optional: true, required: false
  private _valueReference?: string; 
  public get valueReference() {
    return this.getStringAttribute('value_reference');
  }
  public set valueReference(value: string) {
    this._valueReference = value;
  }
  public resetValueReference() {
    this._valueReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueReferenceInput() {
    return this._valueReference;
  }
}

export class DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList extends cdktn.ComplexList {
  public internalValue? : DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap[] | cdktn.IResolvable

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
  public get(index: number): DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference {
    return new DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabrewDatasetPathOptionsLastModifiedDateCondition {
  /**
  * Filtering expression for a parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#expression DatabrewDataset#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#values_map DatabrewDataset#values_map}
  */
  readonly valuesMap?: DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap[] | cdktn.IResolvable;
}

export function databrewDatasetPathOptionsLastModifiedDateConditionToTerraform(struct?: DatabrewDatasetPathOptionsLastModifiedDateCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
    values_map: cdktn.listMapper(databrewDatasetPathOptionsLastModifiedDateConditionValuesMapToTerraform, false)(struct!.valuesMap),
  }
}


export function databrewDatasetPathOptionsLastModifiedDateConditionToHclTerraform(struct?: DatabrewDatasetPathOptionsLastModifiedDateCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values_map: {
      value: cdktn.listMapperHcl(databrewDatasetPathOptionsLastModifiedDateConditionValuesMapToHclTerraform, false)(struct!.valuesMap),
      isBlock: true,
      type: "list",
      storageClassType: "DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewDatasetPathOptionsLastModifiedDateCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._valuesMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesMap = this._valuesMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewDatasetPathOptionsLastModifiedDateCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._valuesMap.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._valuesMap.internalValue = value.valuesMap;
    }
  }

  // expression - computed: true, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // values_map - computed: true, optional: true, required: false
  private _valuesMap = new DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList(this, "values_map", false);
  public get valuesMap() {
    return this._valuesMap;
  }
  public putValuesMap(value: DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap[] | cdktn.IResolvable) {
    this._valuesMap.internalValue = value;
  }
  public resetValuesMap() {
    this._valuesMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesMapInput() {
    return this._valuesMap.internalValue;
  }
}
export interface DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions {
  /**
  * Date/time format of a date parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#format DatabrewDataset#format}
  */
  readonly format?: string;
  /**
  * Locale code for a date parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#locale_code DatabrewDataset#locale_code}
  */
  readonly localeCode?: string;
  /**
  * Timezone offset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#timezone_offset DatabrewDataset#timezone_offset}
  */
  readonly timezoneOffset?: string;
}

export function databrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsToTerraform(struct?: DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    format: cdktn.stringToTerraform(struct!.format),
    locale_code: cdktn.stringToTerraform(struct!.localeCode),
    timezone_offset: cdktn.stringToTerraform(struct!.timezoneOffset),
  }
}


export function databrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsToHclTerraform(struct?: DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locale_code: {
      value: cdktn.stringToHclTerraform(struct!.localeCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone_offset: {
      value: cdktn.stringToHclTerraform(struct!.timezoneOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._localeCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.localeCode = this._localeCode;
    }
    if (this._timezoneOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezoneOffset = this._timezoneOffset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._localeCode = undefined;
      this._timezoneOffset = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._localeCode = value.localeCode;
      this._timezoneOffset = value.timezoneOffset;
    }
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // locale_code - computed: true, optional: true, required: false
  private _localeCode?: string; 
  public get localeCode() {
    return this.getStringAttribute('locale_code');
  }
  public set localeCode(value: string) {
    this._localeCode = value;
  }
  public resetLocaleCode() {
    this._localeCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeCodeInput() {
    return this._localeCode;
  }

  // timezone_offset - computed: true, optional: true, required: false
  private _timezoneOffset?: string; 
  public get timezoneOffset() {
    return this.getStringAttribute('timezone_offset');
  }
  public set timezoneOffset(value: string) {
    this._timezoneOffset = value;
  }
  public resetTimezoneOffset() {
    this._timezoneOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneOffsetInput() {
    return this._timezoneOffset;
  }
}
export interface DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#value DatabrewDataset#value}
  */
  readonly value?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#value_reference DatabrewDataset#value_reference}
  */
  readonly valueReference?: string;
}

export function databrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapToTerraform(struct?: DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
    value_reference: cdktn.stringToTerraform(struct!.valueReference),
  }
}


export function databrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapToHclTerraform(struct?: DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_reference: {
      value: cdktn.stringToHclTerraform(struct!.valueReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueReference = this._valueReference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
      this._valueReference = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
      this._valueReference = value.valueReference;
    }
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

  // value_reference - computed: true, optional: true, required: false
  private _valueReference?: string; 
  public get valueReference() {
    return this.getStringAttribute('value_reference');
  }
  public set valueReference(value: string) {
    this._valueReference = value;
  }
  public resetValueReference() {
    this._valueReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueReferenceInput() {
    return this._valueReference;
  }
}

export class DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList extends cdktn.ComplexList {
  public internalValue? : DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap[] | cdktn.IResolvable

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
  public get(index: number): DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference {
    return new DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabrewDatasetPathOptionsParametersDatasetParameterFilter {
  /**
  * Filtering expression for a parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#expression DatabrewDataset#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#values_map DatabrewDataset#values_map}
  */
  readonly valuesMap?: DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap[] | cdktn.IResolvable;
}

export function databrewDatasetPathOptionsParametersDatasetParameterFilterToTerraform(struct?: DatabrewDatasetPathOptionsParametersDatasetParameterFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
    values_map: cdktn.listMapper(databrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapToTerraform, false)(struct!.valuesMap),
  }
}


export function databrewDatasetPathOptionsParametersDatasetParameterFilterToHclTerraform(struct?: DatabrewDatasetPathOptionsParametersDatasetParameterFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values_map: {
      value: cdktn.listMapperHcl(databrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapToHclTerraform, false)(struct!.valuesMap),
      isBlock: true,
      type: "list",
      storageClassType: "DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewDatasetPathOptionsParametersDatasetParameterFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._valuesMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesMap = this._valuesMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewDatasetPathOptionsParametersDatasetParameterFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._valuesMap.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._valuesMap.internalValue = value.valuesMap;
    }
  }

  // expression - computed: true, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // values_map - computed: true, optional: true, required: false
  private _valuesMap = new DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList(this, "values_map", false);
  public get valuesMap() {
    return this._valuesMap;
  }
  public putValuesMap(value: DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap[] | cdktn.IResolvable) {
    this._valuesMap.internalValue = value;
  }
  public resetValuesMap() {
    this._valuesMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesMapInput() {
    return this._valuesMap.internalValue;
  }
}
export interface DatabrewDatasetPathOptionsParametersDatasetParameter {
  /**
  * Add the value of this parameter as a column in a dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#create_column DatabrewDataset#create_column}
  */
  readonly createColumn?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#datetime_options DatabrewDataset#datetime_options}
  */
  readonly datetimeOptions?: DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#filter DatabrewDataset#filter}
  */
  readonly filter?: DatabrewDatasetPathOptionsParametersDatasetParameterFilter;
  /**
  * Parameter name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#name DatabrewDataset#name}
  */
  readonly name?: string;
  /**
  * Parameter type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#type DatabrewDataset#type}
  */
  readonly type?: string;
}

export function databrewDatasetPathOptionsParametersDatasetParameterToTerraform(struct?: DatabrewDatasetPathOptionsParametersDatasetParameter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create_column: cdktn.booleanToTerraform(struct!.createColumn),
    datetime_options: databrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsToTerraform(struct!.datetimeOptions),
    filter: databrewDatasetPathOptionsParametersDatasetParameterFilterToTerraform(struct!.filter),
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function databrewDatasetPathOptionsParametersDatasetParameterToHclTerraform(struct?: DatabrewDatasetPathOptionsParametersDatasetParameter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create_column: {
      value: cdktn.booleanToHclTerraform(struct!.createColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    datetime_options: {
      value: databrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsToHclTerraform(struct!.datetimeOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions",
    },
    filter: {
      value: databrewDatasetPathOptionsParametersDatasetParameterFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabrewDatasetPathOptionsParametersDatasetParameterFilter",
    },
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

export class DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewDatasetPathOptionsParametersDatasetParameter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.createColumn = this._createColumn;
    }
    if (this._datetimeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datetimeOptions = this._datetimeOptions?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
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

  public set internalValue(value: DatabrewDatasetPathOptionsParametersDatasetParameter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createColumn = undefined;
      this._datetimeOptions.internalValue = undefined;
      this._filter.internalValue = undefined;
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
      this._createColumn = value.createColumn;
      this._datetimeOptions.internalValue = value.datetimeOptions;
      this._filter.internalValue = value.filter;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // create_column - computed: true, optional: true, required: false
  private _createColumn?: boolean | cdktn.IResolvable; 
  public get createColumn() {
    return this.getBooleanAttribute('create_column');
  }
  public set createColumn(value: boolean | cdktn.IResolvable) {
    this._createColumn = value;
  }
  public resetCreateColumn() {
    this._createColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createColumnInput() {
    return this._createColumn;
  }

  // datetime_options - computed: true, optional: true, required: false
  private _datetimeOptions = new DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference(this, "datetime_options");
  public get datetimeOptions() {
    return this._datetimeOptions;
  }
  public putDatetimeOptions(value: DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions) {
    this._datetimeOptions.internalValue = value;
  }
  public resetDatetimeOptions() {
    this._datetimeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datetimeOptionsInput() {
    return this._datetimeOptions.internalValue;
  }

  // filter - computed: true, optional: true, required: false
  private _filter = new DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DatabrewDatasetPathOptionsParametersDatasetParameterFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
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
export interface DatabrewDatasetPathOptionsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#dataset_parameter DatabrewDataset#dataset_parameter}
  */
  readonly datasetParameter?: DatabrewDatasetPathOptionsParametersDatasetParameter;
  /**
  * Parameter name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#path_parameter_name DatabrewDataset#path_parameter_name}
  */
  readonly pathParameterName?: string;
}

export function databrewDatasetPathOptionsParametersToTerraform(struct?: DatabrewDatasetPathOptionsParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataset_parameter: databrewDatasetPathOptionsParametersDatasetParameterToTerraform(struct!.datasetParameter),
    path_parameter_name: cdktn.stringToTerraform(struct!.pathParameterName),
  }
}


export function databrewDatasetPathOptionsParametersToHclTerraform(struct?: DatabrewDatasetPathOptionsParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataset_parameter: {
      value: databrewDatasetPathOptionsParametersDatasetParameterToHclTerraform(struct!.datasetParameter),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabrewDatasetPathOptionsParametersDatasetParameter",
    },
    path_parameter_name: {
      value: cdktn.stringToHclTerraform(struct!.pathParameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewDatasetPathOptionsParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatabrewDatasetPathOptionsParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetParameter = this._datasetParameter?.internalValue;
    }
    if (this._pathParameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathParameterName = this._pathParameterName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewDatasetPathOptionsParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetParameter.internalValue = undefined;
      this._pathParameterName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetParameter.internalValue = value.datasetParameter;
      this._pathParameterName = value.pathParameterName;
    }
  }

  // dataset_parameter - computed: true, optional: true, required: false
  private _datasetParameter = new DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference(this, "dataset_parameter");
  public get datasetParameter() {
    return this._datasetParameter;
  }
  public putDatasetParameter(value: DatabrewDatasetPathOptionsParametersDatasetParameter) {
    this._datasetParameter.internalValue = value;
  }
  public resetDatasetParameter() {
    this._datasetParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetParameterInput() {
    return this._datasetParameter.internalValue;
  }

  // path_parameter_name - computed: true, optional: true, required: false
  private _pathParameterName?: string; 
  public get pathParameterName() {
    return this.getStringAttribute('path_parameter_name');
  }
  public set pathParameterName(value: string) {
    this._pathParameterName = value;
  }
  public resetPathParameterName() {
    this._pathParameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathParameterNameInput() {
    return this._pathParameterName;
  }
}

export class DatabrewDatasetPathOptionsParametersList extends cdktn.ComplexList {
  public internalValue? : DatabrewDatasetPathOptionsParameters[] | cdktn.IResolvable

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
  public get(index: number): DatabrewDatasetPathOptionsParametersOutputReference {
    return new DatabrewDatasetPathOptionsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabrewDatasetPathOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#files_limit DatabrewDataset#files_limit}
  */
  readonly filesLimit?: DatabrewDatasetPathOptionsFilesLimit;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#last_modified_date_condition DatabrewDataset#last_modified_date_condition}
  */
  readonly lastModifiedDateCondition?: DatabrewDatasetPathOptionsLastModifiedDateCondition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#parameters DatabrewDataset#parameters}
  */
  readonly parameters?: DatabrewDatasetPathOptionsParameters[] | cdktn.IResolvable;
}

export function databrewDatasetPathOptionsToTerraform(struct?: DatabrewDatasetPathOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    files_limit: databrewDatasetPathOptionsFilesLimitToTerraform(struct!.filesLimit),
    last_modified_date_condition: databrewDatasetPathOptionsLastModifiedDateConditionToTerraform(struct!.lastModifiedDateCondition),
    parameters: cdktn.listMapper(databrewDatasetPathOptionsParametersToTerraform, false)(struct!.parameters),
  }
}


export function databrewDatasetPathOptionsToHclTerraform(struct?: DatabrewDatasetPathOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    files_limit: {
      value: databrewDatasetPathOptionsFilesLimitToHclTerraform(struct!.filesLimit),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabrewDatasetPathOptionsFilesLimit",
    },
    last_modified_date_condition: {
      value: databrewDatasetPathOptionsLastModifiedDateConditionToHclTerraform(struct!.lastModifiedDateCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "DatabrewDatasetPathOptionsLastModifiedDateCondition",
    },
    parameters: {
      value: cdktn.listMapperHcl(databrewDatasetPathOptionsParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "DatabrewDatasetPathOptionsParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabrewDatasetPathOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabrewDatasetPathOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filesLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesLimit = this._filesLimit?.internalValue;
    }
    if (this._lastModifiedDateCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastModifiedDateCondition = this._lastModifiedDateCondition?.internalValue;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabrewDatasetPathOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filesLimit.internalValue = undefined;
      this._lastModifiedDateCondition.internalValue = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filesLimit.internalValue = value.filesLimit;
      this._lastModifiedDateCondition.internalValue = value.lastModifiedDateCondition;
      this._parameters.internalValue = value.parameters;
    }
  }

  // files_limit - computed: true, optional: true, required: false
  private _filesLimit = new DatabrewDatasetPathOptionsFilesLimitOutputReference(this, "files_limit");
  public get filesLimit() {
    return this._filesLimit;
  }
  public putFilesLimit(value: DatabrewDatasetPathOptionsFilesLimit) {
    this._filesLimit.internalValue = value;
  }
  public resetFilesLimit() {
    this._filesLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesLimitInput() {
    return this._filesLimit.internalValue;
  }

  // last_modified_date_condition - computed: true, optional: true, required: false
  private _lastModifiedDateCondition = new DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference(this, "last_modified_date_condition");
  public get lastModifiedDateCondition() {
    return this._lastModifiedDateCondition;
  }
  public putLastModifiedDateCondition(value: DatabrewDatasetPathOptionsLastModifiedDateCondition) {
    this._lastModifiedDateCondition.internalValue = value;
  }
  public resetLastModifiedDateCondition() {
    this._lastModifiedDateCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastModifiedDateConditionInput() {
    return this._lastModifiedDateCondition.internalValue;
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters = new DatabrewDatasetPathOptionsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DatabrewDatasetPathOptionsParameters[] | cdktn.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}
export interface DatabrewDatasetTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#key DatabrewDataset#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#value DatabrewDataset#value}
  */
  readonly value?: string;
}

export function databrewDatasetTagsToTerraform(struct?: DatabrewDatasetTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function databrewDatasetTagsToHclTerraform(struct?: DatabrewDatasetTags | cdktn.IResolvable): any {
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

export class DatabrewDatasetTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatabrewDatasetTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DatabrewDatasetTags | cdktn.IResolvable | undefined) {
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

export class DatabrewDatasetTagsList extends cdktn.ComplexList {
  public internalValue? : DatabrewDatasetTags[] | cdktn.IResolvable

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
  public get(index: number): DatabrewDatasetTagsOutputReference {
    return new DatabrewDatasetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset awscc_databrew_dataset}
*/
export class DatabrewDataset extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_databrew_dataset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DatabrewDataset resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabrewDataset to import
  * @param importFromId The id of the existing DatabrewDataset that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabrewDataset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_databrew_dataset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/databrew_dataset awscc_databrew_dataset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabrewDatasetConfig
  */
  public constructor(scope: Construct, id: string, config: DatabrewDatasetConfig) {
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
    this._format = config.format;
    this._formatOptions.internalValue = config.formatOptions;
    this._input.internalValue = config.input;
    this._name = config.name;
    this._pathOptions.internalValue = config.pathOptions;
    this._source = config.source;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // format_options - computed: true, optional: true, required: false
  private _formatOptions = new DatabrewDatasetFormatOptionsOutputReference(this, "format_options");
  public get formatOptions() {
    return this._formatOptions;
  }
  public putFormatOptions(value: DatabrewDatasetFormatOptions) {
    this._formatOptions.internalValue = value;
  }
  public resetFormatOptions() {
    this._formatOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatOptionsInput() {
    return this._formatOptions.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input - computed: false, optional: false, required: true
  private _input = new DatabrewDatasetInputOutputReference(this, "input");
  public get input() {
    return this._input;
  }
  public putInput(value: DatabrewDatasetInput) {
    this._input.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // path_options - computed: true, optional: true, required: false
  private _pathOptions = new DatabrewDatasetPathOptionsOutputReference(this, "path_options");
  public get pathOptions() {
    return this._pathOptions;
  }
  public putPathOptions(value: DatabrewDatasetPathOptions) {
    this._pathOptions.internalValue = value;
  }
  public resetPathOptions() {
    this._pathOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathOptionsInput() {
    return this._pathOptions.internalValue;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new DatabrewDatasetTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DatabrewDatasetTags[] | cdktn.IResolvable) {
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
      format: cdktn.stringToTerraform(this._format),
      format_options: databrewDatasetFormatOptionsToTerraform(this._formatOptions.internalValue),
      input: databrewDatasetInputToTerraform(this._input.internalValue),
      name: cdktn.stringToTerraform(this._name),
      path_options: databrewDatasetPathOptionsToTerraform(this._pathOptions.internalValue),
      source: cdktn.stringToTerraform(this._source),
      tags: cdktn.listMapper(databrewDatasetTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      format: {
        value: cdktn.stringToHclTerraform(this._format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format_options: {
        value: databrewDatasetFormatOptionsToHclTerraform(this._formatOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabrewDatasetFormatOptions",
      },
      input: {
        value: databrewDatasetInputToHclTerraform(this._input.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabrewDatasetInput",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_options: {
        value: databrewDatasetPathOptionsToHclTerraform(this._pathOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabrewDatasetPathOptions",
      },
      source: {
        value: cdktn.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(databrewDatasetTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabrewDatasetTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
