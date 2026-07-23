// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/apptest_test_case
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccApptestTestCaseConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/apptest_test_case#id DataAwsccApptestTestCase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccApptestTestCaseLatestVersion {
}

export function dataAwsccApptestTestCaseLatestVersionToTerraform(struct?: DataAwsccApptestTestCaseLatestVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApptestTestCaseLatestVersionToHclTerraform(struct?: DataAwsccApptestTestCaseLatestVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApptestTestCaseLatestVersionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApptestTestCaseLatestVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApptestTestCaseLatestVersion | undefined) {
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}
export interface DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets {
}

export function dataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsToTerraform(struct?: DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsToHclTerraform(struct?: DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ccsid - computed: true, optional: false, required: false
  public get ccsid() {
    return this.getStringAttribute('ccsid');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
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

export class DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference {
    return new DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata {
}

export function dataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataToTerraform(struct?: DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataToHclTerraform(struct?: DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capture_tool - computed: true, optional: false, required: false
  public get captureTool() {
    return this.getStringAttribute('capture_tool');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata {
}

export function dataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataToTerraform(struct?: DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataToHclTerraform(struct?: DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capture_tool - computed: true, optional: false, required: false
  public get captureTool() {
    return this.getStringAttribute('capture_tool');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc {
}

export function dataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcToTerraform(struct?: DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcToHclTerraform(struct?: DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_metadata - computed: true, optional: false, required: false
  private _sourceMetadata = new DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference(this, "source_metadata");
  public get sourceMetadata() {
    return this._sourceMetadata;
  }

  // target_metadata - computed: true, optional: false, required: false
  private _targetMetadata = new DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference(this, "target_metadata");
  public get targetMetadata() {
    return this._targetMetadata;
  }
}
export interface DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadata {
}

export function dataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataToTerraform(struct?: DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataToHclTerraform(struct?: DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_sets - computed: true, optional: false, required: false
  private _dataSets = new DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList(this, "data_sets", false);
  public get dataSets() {
    return this._dataSets;
  }

  // database_cdc - computed: true, optional: false, required: false
  private _databaseCdc = new DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference(this, "database_cdc");
  public get databaseCdc() {
    return this._databaseCdc;
  }
}
export interface DataAwsccApptestTestCaseStepsActionCompareActionInputFile {
}

export function dataAwsccApptestTestCaseStepsActionCompareActionInputFileToTerraform(struct?: DataAwsccApptestTestCaseStepsActionCompareActionInputFile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApptestTestCaseStepsActionCompareActionInputFileToHclTerraform(struct?: DataAwsccApptestTestCaseStepsActionCompareActionInputFile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApptestTestCaseStepsActionCompareActionInputFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApptestTestCaseStepsActionCompareActionInputFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_metadata - computed: true, optional: false, required: false
  private _fileMetadata = new DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference(this, "file_metadata");
  public get fileMetadata() {
    return this._fileMetadata;
  }

  // source_location - computed: true, optional: false, required: false
  public get sourceLocation() {
    return this.getStringAttribute('source_location');
  }

  // target_location - computed: true, optional: false, required: false
  public get targetLocation() {
    return this.getStringAttribute('target_location');
  }
}
export interface DataAwsccApptestTestCaseStepsActionCompareActionInput {
}

export function dataAwsccApptestTestCaseStepsActionCompareActionInputToTerraform(struct?: DataAwsccApptestTestCaseStepsActionCompareActionInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApptestTestCaseStepsActionCompareActionInputToHclTerraform(struct?: DataAwsccApptestTestCaseStepsActionCompareActionInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApptestTestCaseStepsActionCompareActionInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApptestTestCaseStepsActionCompareActionInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file - computed: true, optional: false, required: false
  private _file = new DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
}
export interface DataAwsccApptestTestCaseStepsActionCompareActionOutputFile {
}

export function dataAwsccApptestTestCaseStepsActionCompareActionOutputFileToTerraform(struct?: DataAwsccApptestTestCaseStepsActionCompareActionOutputFile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApptestTestCaseStepsActionCompareActionOutputFileToHclTerraform(struct?: DataAwsccApptestTestCaseStepsActionCompareActionOutputFile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApptestTestCaseStepsActionCompareActionOutputFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApptestTestCaseStepsActionCompareActionOutputFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_location - computed: true, optional: false, required: false
  public get fileLocation() {
    return this.getStringAttribute('file_location');
  }
}
export interface DataAwsccApptestTestCaseStepsActionCompareActionOutput {
}

export function dataAwsccApptestTestCaseStepsActionCompareActionOutputToTerraform(struct?: DataAwsccApptestTestCaseStepsActionCompareActionOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApptestTestCaseStepsActionCompareActionOutputToHclTerraform(struct?: DataAwsccApptestTestCaseStepsActionCompareActionOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApptestTestCaseStepsActionCompareActionOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApptestTestCaseStepsActionCompareActionOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file - computed: true, optional: false, required: false
  private _file = new DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
}
export interface DataAwsccApptestTestCaseStepsActionCompareAction {
}

export function dataAwsccApptestTestCaseStepsActionCompareActionToTerraform(struct?: DataAwsccApptestTestCaseStepsActionCompareAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApptestTestCaseStepsActionCompareActionToHclTerraform(struct?: DataAwsccApptestTestCaseStepsActionCompareAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApptestTestCaseStepsActionCompareActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApptestTestCaseStepsActionCompareAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApptestTestCaseStepsActionCompareAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // input - computed: true, optional: false, required: false
  private _input = new DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference(this, "input");
  public get input() {
    return this._input;
  }

  // output - computed: true, optional: false, required: false
  private _output = new DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference(this, "output");
  public get output() {
    return this._output;
  }
}
export interface DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatch {
}

export function dataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchToTerraform(struct?: DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchToHclTerraform(struct?: DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_job_name - computed: true, optional: false, required: false
  public get batchJobName() {
    return this.getStringAttribute('batch_job_name');
  }

  // batch_job_parameters - computed: true, optional: false, required: false
  private _batchJobParameters = new cdktn.StringMap(this, "batch_job_parameters");
  public get batchJobParameters() {
    return this._batchJobParameters;
  }

  // export_data_set_names - computed: true, optional: false, required: false
  public get exportDataSetNames() {
    return this.getListAttribute('export_data_set_names');
  }
}
export interface DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script {
}

export function dataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptToTerraform(struct?: DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptToHclTerraform(struct?: DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // script_location - computed: true, optional: false, required: false
  public get scriptLocation() {
    return this.getStringAttribute('script_location');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270 {
}

export function dataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ToTerraform(struct?: DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ToHclTerraform(struct?: DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // export_data_set_names - computed: true, optional: false, required: false
  public get exportDataSetNames() {
    return this.getListAttribute('export_data_set_names');
  }

  // script - computed: true, optional: false, required: false
  private _script = new DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference(this, "script");
  public get script() {
    return this._script;
  }
}
export interface DataAwsccApptestTestCaseStepsActionMainframeActionActionType {
}

export function dataAwsccApptestTestCaseStepsActionMainframeActionActionTypeToTerraform(struct?: DataAwsccApptestTestCaseStepsActionMainframeActionActionType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApptestTestCaseStepsActionMainframeActionActionTypeToHclTerraform(struct?: DataAwsccApptestTestCaseStepsActionMainframeActionActionType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApptestTestCaseStepsActionMainframeActionActionType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApptestTestCaseStepsActionMainframeActionActionType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch - computed: true, optional: false, required: false
  private _batch = new DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference(this, "batch");
  public get batch() {
    return this._batch;
  }

  // tn_3270 - computed: true, optional: false, required: false
  private _tn3270 = new DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference(this, "tn_3270");
  public get tn3270() {
    return this._tn3270;
  }
}
export interface DataAwsccApptestTestCaseStepsActionMainframeActionProperties {
}

export function dataAwsccApptestTestCaseStepsActionMainframeActionPropertiesToTerraform(struct?: DataAwsccApptestTestCaseStepsActionMainframeActionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApptestTestCaseStepsActionMainframeActionPropertiesToHclTerraform(struct?: DataAwsccApptestTestCaseStepsActionMainframeActionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApptestTestCaseStepsActionMainframeActionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApptestTestCaseStepsActionMainframeActionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dms_task_arn - computed: true, optional: false, required: false
  public get dmsTaskArn() {
    return this.getStringAttribute('dms_task_arn');
  }
}
export interface DataAwsccApptestTestCaseStepsActionMainframeAction {
}

export function dataAwsccApptestTestCaseStepsActionMainframeActionToTerraform(struct?: DataAwsccApptestTestCaseStepsActionMainframeAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApptestTestCaseStepsActionMainframeActionToHclTerraform(struct?: DataAwsccApptestTestCaseStepsActionMainframeAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApptestTestCaseStepsActionMainframeAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApptestTestCaseStepsActionMainframeAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_type - computed: true, optional: false, required: false
  private _actionType = new DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference(this, "action_type");
  public get actionType() {
    return this._actionType;
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }
}
export interface DataAwsccApptestTestCaseStepsActionResourceActionCloudformationAction {
}

export function dataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionToTerraform(struct?: DataAwsccApptestTestCaseStepsActionResourceActionCloudformationAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionToHclTerraform(struct?: DataAwsccApptestTestCaseStepsActionResourceActionCloudformationAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApptestTestCaseStepsActionResourceActionCloudformationAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApptestTestCaseStepsActionResourceActionCloudformationAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_type - computed: true, optional: false, required: false
  public get actionType() {
    return this.getStringAttribute('action_type');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }
}
export interface DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties {
}

export function dataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesToTerraform(struct?: DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesToHclTerraform(struct?: DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // force_stop - computed: true, optional: false, required: false
  public get forceStop() {
    return this.getBooleanAttribute('force_stop');
  }

  // import_data_set_location - computed: true, optional: false, required: false
  public get importDataSetLocation() {
    return this.getStringAttribute('import_data_set_location');
  }
}
export interface DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction {
}

export function dataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionToTerraform(struct?: DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionToHclTerraform(struct?: DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_type - computed: true, optional: false, required: false
  public get actionType() {
    return this.getStringAttribute('action_type');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }
}
export interface DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction {
}

export function dataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionToTerraform(struct?: DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionToHclTerraform(struct?: DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_type - computed: true, optional: false, required: false
  public get actionType() {
    return this.getStringAttribute('action_type');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }
}
export interface DataAwsccApptestTestCaseStepsActionResourceAction {
}

export function dataAwsccApptestTestCaseStepsActionResourceActionToTerraform(struct?: DataAwsccApptestTestCaseStepsActionResourceAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApptestTestCaseStepsActionResourceActionToHclTerraform(struct?: DataAwsccApptestTestCaseStepsActionResourceAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApptestTestCaseStepsActionResourceActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApptestTestCaseStepsActionResourceAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApptestTestCaseStepsActionResourceAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudformation_action - computed: true, optional: false, required: false
  private _cloudformationAction = new DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference(this, "cloudformation_action");
  public get cloudformationAction() {
    return this._cloudformationAction;
  }

  // m2_managed_application_action - computed: true, optional: false, required: false
  private _m2ManagedApplicationAction = new DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference(this, "m2_managed_application_action");
  public get m2ManagedApplicationAction() {
    return this._m2ManagedApplicationAction;
  }

  // m2_non_managed_application_action - computed: true, optional: false, required: false
  private _m2NonManagedApplicationAction = new DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference(this, "m2_non_managed_application_action");
  public get m2NonManagedApplicationAction() {
    return this._m2NonManagedApplicationAction;
  }
}
export interface DataAwsccApptestTestCaseStepsAction {
}

export function dataAwsccApptestTestCaseStepsActionToTerraform(struct?: DataAwsccApptestTestCaseStepsAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApptestTestCaseStepsActionToHclTerraform(struct?: DataAwsccApptestTestCaseStepsAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApptestTestCaseStepsActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApptestTestCaseStepsAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApptestTestCaseStepsAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compare_action - computed: true, optional: false, required: false
  private _compareAction = new DataAwsccApptestTestCaseStepsActionCompareActionOutputReference(this, "compare_action");
  public get compareAction() {
    return this._compareAction;
  }

  // mainframe_action - computed: true, optional: false, required: false
  private _mainframeAction = new DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference(this, "mainframe_action");
  public get mainframeAction() {
    return this._mainframeAction;
  }

  // resource_action - computed: true, optional: false, required: false
  private _resourceAction = new DataAwsccApptestTestCaseStepsActionResourceActionOutputReference(this, "resource_action");
  public get resourceAction() {
    return this._resourceAction;
  }
}
export interface DataAwsccApptestTestCaseSteps {
}

export function dataAwsccApptestTestCaseStepsToTerraform(struct?: DataAwsccApptestTestCaseSteps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApptestTestCaseStepsToHclTerraform(struct?: DataAwsccApptestTestCaseSteps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApptestTestCaseStepsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApptestTestCaseSteps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApptestTestCaseSteps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataAwsccApptestTestCaseStepsActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsccApptestTestCaseStepsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApptestTestCaseStepsOutputReference {
    return new DataAwsccApptestTestCaseStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/apptest_test_case awscc_apptest_test_case}
*/
export class DataAwsccApptestTestCase extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_apptest_test_case";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccApptestTestCase resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccApptestTestCase to import
  * @param importFromId The id of the existing DataAwsccApptestTestCase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/apptest_test_case#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccApptestTestCase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apptest_test_case", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/apptest_test_case awscc_apptest_test_case} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccApptestTestCaseConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccApptestTestCaseConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_apptest_test_case',
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

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getStringAttribute('last_update_time');
  }

  // latest_version - computed: true, optional: false, required: false
  private _latestVersion = new DataAwsccApptestTestCaseLatestVersionOutputReference(this, "latest_version");
  public get latestVersion() {
    return this._latestVersion;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // steps - computed: true, optional: false, required: false
  private _steps = new DataAwsccApptestTestCaseStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // test_case_arn - computed: true, optional: false, required: false
  public get testCaseArn() {
    return this.getStringAttribute('test_case_arn');
  }

  // test_case_id - computed: true, optional: false, required: false
  public get testCaseId() {
    return this.getStringAttribute('test_case_id');
  }

  // test_case_version - computed: true, optional: false, required: false
  public get testCaseVersion() {
    return this.getNumberAttribute('test_case_version');
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
