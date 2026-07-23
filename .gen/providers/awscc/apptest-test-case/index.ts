// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ApptestTestCaseConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#description ApptestTestCase#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#name ApptestTestCase#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#steps ApptestTestCase#steps}
  */
  readonly steps: ApptestTestCaseSteps[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#tags ApptestTestCase#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface ApptestTestCaseLatestVersion {
}

export function apptestTestCaseLatestVersionToTerraform(struct?: ApptestTestCaseLatestVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function apptestTestCaseLatestVersionToHclTerraform(struct?: ApptestTestCaseLatestVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ApptestTestCaseLatestVersionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApptestTestCaseLatestVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApptestTestCaseLatestVersion | undefined) {
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
export interface ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#ccsid ApptestTestCase#ccsid}
  */
  readonly ccsid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#format ApptestTestCase#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#length ApptestTestCase#length}
  */
  readonly length?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#name ApptestTestCase#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#type ApptestTestCase#type}
  */
  readonly type?: string;
}

export function apptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsToTerraform(struct?: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ccsid: cdktn.stringToTerraform(struct!.ccsid),
    format: cdktn.stringToTerraform(struct!.format),
    length: cdktn.numberToTerraform(struct!.length),
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function apptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsToHclTerraform(struct?: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ccsid: {
      value: cdktn.stringToHclTerraform(struct!.ccsid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    length: {
      value: cdktn.numberToHclTerraform(struct!.length),
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

export class ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ccsid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccsid = this._ccsid;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
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

  public set internalValue(value: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ccsid = undefined;
      this._format = undefined;
      this._length = undefined;
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
      this._ccsid = value.ccsid;
      this._format = value.format;
      this._length = value.length;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // ccsid - computed: true, optional: true, required: false
  private _ccsid?: string; 
  public get ccsid() {
    return this.getStringAttribute('ccsid');
  }
  public set ccsid(value: string) {
    this._ccsid = value;
  }
  public resetCcsid() {
    this._ccsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccsidInput() {
    return this._ccsid;
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

  // length - computed: true, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
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

export class ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList extends cdktn.ComplexList {
  public internalValue? : ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets[] | cdktn.IResolvable

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
  public get(index: number): ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference {
    return new ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#capture_tool ApptestTestCase#capture_tool}
  */
  readonly captureTool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#type ApptestTestCase#type}
  */
  readonly type?: string;
}

export function apptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataToTerraform(struct?: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capture_tool: cdktn.stringToTerraform(struct!.captureTool),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function apptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataToHclTerraform(struct?: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capture_tool: {
      value: cdktn.stringToHclTerraform(struct!.captureTool),
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

export class ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captureTool !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureTool = this._captureTool;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._captureTool = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._captureTool = value.captureTool;
      this._type = value.type;
    }
  }

  // capture_tool - computed: true, optional: true, required: false
  private _captureTool?: string; 
  public get captureTool() {
    return this.getStringAttribute('capture_tool');
  }
  public set captureTool(value: string) {
    this._captureTool = value;
  }
  public resetCaptureTool() {
    this._captureTool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureToolInput() {
    return this._captureTool;
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
export interface ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#capture_tool ApptestTestCase#capture_tool}
  */
  readonly captureTool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#type ApptestTestCase#type}
  */
  readonly type?: string;
}

export function apptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataToTerraform(struct?: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capture_tool: cdktn.stringToTerraform(struct!.captureTool),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function apptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataToHclTerraform(struct?: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capture_tool: {
      value: cdktn.stringToHclTerraform(struct!.captureTool),
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

export class ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captureTool !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureTool = this._captureTool;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._captureTool = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._captureTool = value.captureTool;
      this._type = value.type;
    }
  }

  // capture_tool - computed: true, optional: true, required: false
  private _captureTool?: string; 
  public get captureTool() {
    return this.getStringAttribute('capture_tool');
  }
  public set captureTool(value: string) {
    this._captureTool = value;
  }
  public resetCaptureTool() {
    this._captureTool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureToolInput() {
    return this._captureTool;
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
export interface ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#source_metadata ApptestTestCase#source_metadata}
  */
  readonly sourceMetadata?: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#target_metadata ApptestTestCase#target_metadata}
  */
  readonly targetMetadata?: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata;
}

export function apptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcToTerraform(struct?: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_metadata: apptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataToTerraform(struct!.sourceMetadata),
    target_metadata: apptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataToTerraform(struct!.targetMetadata),
  }
}


export function apptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcToHclTerraform(struct?: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_metadata: {
      value: apptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataToHclTerraform(struct!.sourceMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata",
    },
    target_metadata: {
      value: apptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataToHclTerraform(struct!.targetMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceMetadata = this._sourceMetadata?.internalValue;
    }
    if (this._targetMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetMetadata = this._targetMetadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceMetadata.internalValue = undefined;
      this._targetMetadata.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceMetadata.internalValue = value.sourceMetadata;
      this._targetMetadata.internalValue = value.targetMetadata;
    }
  }

  // source_metadata - computed: true, optional: true, required: false
  private _sourceMetadata = new ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference(this, "source_metadata");
  public get sourceMetadata() {
    return this._sourceMetadata;
  }
  public putSourceMetadata(value: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata) {
    this._sourceMetadata.internalValue = value;
  }
  public resetSourceMetadata() {
    this._sourceMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceMetadataInput() {
    return this._sourceMetadata.internalValue;
  }

  // target_metadata - computed: true, optional: true, required: false
  private _targetMetadata = new ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference(this, "target_metadata");
  public get targetMetadata() {
    return this._targetMetadata;
  }
  public putTargetMetadata(value: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata) {
    this._targetMetadata.internalValue = value;
  }
  public resetTargetMetadata() {
    this._targetMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetMetadataInput() {
    return this._targetMetadata.internalValue;
  }
}
export interface ApptestTestCaseStepsActionCompareActionInputFileFileMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#data_sets ApptestTestCase#data_sets}
  */
  readonly dataSets?: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#database_cdc ApptestTestCase#database_cdc}
  */
  readonly databaseCdc?: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc;
}

export function apptestTestCaseStepsActionCompareActionInputFileFileMetadataToTerraform(struct?: ApptestTestCaseStepsActionCompareActionInputFileFileMetadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_sets: cdktn.listMapper(apptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsToTerraform, false)(struct!.dataSets),
    database_cdc: apptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcToTerraform(struct!.databaseCdc),
  }
}


export function apptestTestCaseStepsActionCompareActionInputFileFileMetadataToHclTerraform(struct?: ApptestTestCaseStepsActionCompareActionInputFileFileMetadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_sets: {
      value: cdktn.listMapperHcl(apptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsToHclTerraform, false)(struct!.dataSets),
      isBlock: true,
      type: "list",
      storageClassType: "ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList",
    },
    database_cdc: {
      value: apptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcToHclTerraform(struct!.databaseCdc),
      isBlock: true,
      type: "struct",
      storageClassType: "ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApptestTestCaseStepsActionCompareActionInputFileFileMetadata | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSets = this._dataSets?.internalValue;
    }
    if (this._databaseCdc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseCdc = this._databaseCdc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApptestTestCaseStepsActionCompareActionInputFileFileMetadata | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSets.internalValue = undefined;
      this._databaseCdc.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSets.internalValue = value.dataSets;
      this._databaseCdc.internalValue = value.databaseCdc;
    }
  }

  // data_sets - computed: true, optional: true, required: false
  private _dataSets = new ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList(this, "data_sets", false);
  public get dataSets() {
    return this._dataSets;
  }
  public putDataSets(value: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets[] | cdktn.IResolvable) {
    this._dataSets.internalValue = value;
  }
  public resetDataSets() {
    this._dataSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetsInput() {
    return this._dataSets.internalValue;
  }

  // database_cdc - computed: true, optional: true, required: false
  private _databaseCdc = new ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference(this, "database_cdc");
  public get databaseCdc() {
    return this._databaseCdc;
  }
  public putDatabaseCdc(value: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc) {
    this._databaseCdc.internalValue = value;
  }
  public resetDatabaseCdc() {
    this._databaseCdc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseCdcInput() {
    return this._databaseCdc.internalValue;
  }
}
export interface ApptestTestCaseStepsActionCompareActionInputFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#file_metadata ApptestTestCase#file_metadata}
  */
  readonly fileMetadata?: ApptestTestCaseStepsActionCompareActionInputFileFileMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#source_location ApptestTestCase#source_location}
  */
  readonly sourceLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#target_location ApptestTestCase#target_location}
  */
  readonly targetLocation?: string;
}

export function apptestTestCaseStepsActionCompareActionInputFileToTerraform(struct?: ApptestTestCaseStepsActionCompareActionInputFile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_metadata: apptestTestCaseStepsActionCompareActionInputFileFileMetadataToTerraform(struct!.fileMetadata),
    source_location: cdktn.stringToTerraform(struct!.sourceLocation),
    target_location: cdktn.stringToTerraform(struct!.targetLocation),
  }
}


export function apptestTestCaseStepsActionCompareActionInputFileToHclTerraform(struct?: ApptestTestCaseStepsActionCompareActionInputFile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_metadata: {
      value: apptestTestCaseStepsActionCompareActionInputFileFileMetadataToHclTerraform(struct!.fileMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "ApptestTestCaseStepsActionCompareActionInputFileFileMetadata",
    },
    source_location: {
      value: cdktn.stringToHclTerraform(struct!.sourceLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_location: {
      value: cdktn.stringToHclTerraform(struct!.targetLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApptestTestCaseStepsActionCompareActionInputFileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApptestTestCaseStepsActionCompareActionInputFile | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileMetadata = this._fileMetadata?.internalValue;
    }
    if (this._sourceLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLocation = this._sourceLocation;
    }
    if (this._targetLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetLocation = this._targetLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApptestTestCaseStepsActionCompareActionInputFile | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileMetadata.internalValue = undefined;
      this._sourceLocation = undefined;
      this._targetLocation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileMetadata.internalValue = value.fileMetadata;
      this._sourceLocation = value.sourceLocation;
      this._targetLocation = value.targetLocation;
    }
  }

  // file_metadata - computed: true, optional: true, required: false
  private _fileMetadata = new ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference(this, "file_metadata");
  public get fileMetadata() {
    return this._fileMetadata;
  }
  public putFileMetadata(value: ApptestTestCaseStepsActionCompareActionInputFileFileMetadata) {
    this._fileMetadata.internalValue = value;
  }
  public resetFileMetadata() {
    this._fileMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileMetadataInput() {
    return this._fileMetadata.internalValue;
  }

  // source_location - computed: true, optional: true, required: false
  private _sourceLocation?: string; 
  public get sourceLocation() {
    return this.getStringAttribute('source_location');
  }
  public set sourceLocation(value: string) {
    this._sourceLocation = value;
  }
  public resetSourceLocation() {
    this._sourceLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLocationInput() {
    return this._sourceLocation;
  }

  // target_location - computed: true, optional: true, required: false
  private _targetLocation?: string; 
  public get targetLocation() {
    return this.getStringAttribute('target_location');
  }
  public set targetLocation(value: string) {
    this._targetLocation = value;
  }
  public resetTargetLocation() {
    this._targetLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLocationInput() {
    return this._targetLocation;
  }
}
export interface ApptestTestCaseStepsActionCompareActionInput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#file ApptestTestCase#file}
  */
  readonly file?: ApptestTestCaseStepsActionCompareActionInputFile;
}

export function apptestTestCaseStepsActionCompareActionInputToTerraform(struct?: ApptestTestCaseStepsActionCompareActionInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file: apptestTestCaseStepsActionCompareActionInputFileToTerraform(struct!.file),
  }
}


export function apptestTestCaseStepsActionCompareActionInputToHclTerraform(struct?: ApptestTestCaseStepsActionCompareActionInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file: {
      value: apptestTestCaseStepsActionCompareActionInputFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "ApptestTestCaseStepsActionCompareActionInputFile",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApptestTestCaseStepsActionCompareActionInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApptestTestCaseStepsActionCompareActionInput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApptestTestCaseStepsActionCompareActionInput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._file.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._file.internalValue = value.file;
    }
  }

  // file - computed: true, optional: true, required: false
  private _file = new ApptestTestCaseStepsActionCompareActionInputFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: ApptestTestCaseStepsActionCompareActionInputFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }
}
export interface ApptestTestCaseStepsActionCompareActionOutputFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#file_location ApptestTestCase#file_location}
  */
  readonly fileLocation?: string;
}

export function apptestTestCaseStepsActionCompareActionOutputFileToTerraform(struct?: ApptestTestCaseStepsActionCompareActionOutputFile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_location: cdktn.stringToTerraform(struct!.fileLocation),
  }
}


export function apptestTestCaseStepsActionCompareActionOutputFileToHclTerraform(struct?: ApptestTestCaseStepsActionCompareActionOutputFile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_location: {
      value: cdktn.stringToHclTerraform(struct!.fileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApptestTestCaseStepsActionCompareActionOutputFileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApptestTestCaseStepsActionCompareActionOutputFile | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileLocation = this._fileLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApptestTestCaseStepsActionCompareActionOutputFile | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileLocation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileLocation = value.fileLocation;
    }
  }

  // file_location - computed: true, optional: true, required: false
  private _fileLocation?: string; 
  public get fileLocation() {
    return this.getStringAttribute('file_location');
  }
  public set fileLocation(value: string) {
    this._fileLocation = value;
  }
  public resetFileLocation() {
    this._fileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileLocationInput() {
    return this._fileLocation;
  }
}
export interface ApptestTestCaseStepsActionCompareActionOutput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#file ApptestTestCase#file}
  */
  readonly file?: ApptestTestCaseStepsActionCompareActionOutputFile;
}

export function apptestTestCaseStepsActionCompareActionOutputToTerraform(struct?: ApptestTestCaseStepsActionCompareActionOutput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file: apptestTestCaseStepsActionCompareActionOutputFileToTerraform(struct!.file),
  }
}


export function apptestTestCaseStepsActionCompareActionOutputToHclTerraform(struct?: ApptestTestCaseStepsActionCompareActionOutput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file: {
      value: apptestTestCaseStepsActionCompareActionOutputFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "ApptestTestCaseStepsActionCompareActionOutputFile",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApptestTestCaseStepsActionCompareActionOutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApptestTestCaseStepsActionCompareActionOutput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApptestTestCaseStepsActionCompareActionOutput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._file.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._file.internalValue = value.file;
    }
  }

  // file - computed: true, optional: true, required: false
  private _file = new ApptestTestCaseStepsActionCompareActionOutputFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: ApptestTestCaseStepsActionCompareActionOutputFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }
}
export interface ApptestTestCaseStepsActionCompareAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#input ApptestTestCase#input}
  */
  readonly input?: ApptestTestCaseStepsActionCompareActionInput;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#output ApptestTestCase#output}
  */
  readonly output?: ApptestTestCaseStepsActionCompareActionOutput;
}

export function apptestTestCaseStepsActionCompareActionToTerraform(struct?: ApptestTestCaseStepsActionCompareAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input: apptestTestCaseStepsActionCompareActionInputToTerraform(struct!.input),
    output: apptestTestCaseStepsActionCompareActionOutputToTerraform(struct!.output),
  }
}


export function apptestTestCaseStepsActionCompareActionToHclTerraform(struct?: ApptestTestCaseStepsActionCompareAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input: {
      value: apptestTestCaseStepsActionCompareActionInputToHclTerraform(struct!.input),
      isBlock: true,
      type: "struct",
      storageClassType: "ApptestTestCaseStepsActionCompareActionInput",
    },
    output: {
      value: apptestTestCaseStepsActionCompareActionOutputToHclTerraform(struct!.output),
      isBlock: true,
      type: "struct",
      storageClassType: "ApptestTestCaseStepsActionCompareActionOutput",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApptestTestCaseStepsActionCompareActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApptestTestCaseStepsActionCompareAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._input?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input?.internalValue;
    }
    if (this._output?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApptestTestCaseStepsActionCompareAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._input.internalValue = undefined;
      this._output.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._input.internalValue = value.input;
      this._output.internalValue = value.output;
    }
  }

  // input - computed: true, optional: true, required: false
  private _input = new ApptestTestCaseStepsActionCompareActionInputOutputReference(this, "input");
  public get input() {
    return this._input;
  }
  public putInput(value: ApptestTestCaseStepsActionCompareActionInput) {
    this._input.internalValue = value;
  }
  public resetInput() {
    this._input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // output - computed: true, optional: true, required: false
  private _output = new ApptestTestCaseStepsActionCompareActionOutputOutputReference(this, "output");
  public get output() {
    return this._output;
  }
  public putOutput(value: ApptestTestCaseStepsActionCompareActionOutput) {
    this._output.internalValue = value;
  }
  public resetOutput() {
    this._output.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output.internalValue;
  }
}
export interface ApptestTestCaseStepsActionMainframeActionActionTypeBatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#batch_job_name ApptestTestCase#batch_job_name}
  */
  readonly batchJobName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#batch_job_parameters ApptestTestCase#batch_job_parameters}
  */
  readonly batchJobParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#export_data_set_names ApptestTestCase#export_data_set_names}
  */
  readonly exportDataSetNames?: string[];
}

export function apptestTestCaseStepsActionMainframeActionActionTypeBatchToTerraform(struct?: ApptestTestCaseStepsActionMainframeActionActionTypeBatch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_job_name: cdktn.stringToTerraform(struct!.batchJobName),
    batch_job_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.batchJobParameters),
    export_data_set_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exportDataSetNames),
  }
}


export function apptestTestCaseStepsActionMainframeActionActionTypeBatchToHclTerraform(struct?: ApptestTestCaseStepsActionMainframeActionActionTypeBatch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch_job_name: {
      value: cdktn.stringToHclTerraform(struct!.batchJobName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch_job_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.batchJobParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    export_data_set_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exportDataSetNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApptestTestCaseStepsActionMainframeActionActionTypeBatch | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchJobName !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchJobName = this._batchJobName;
    }
    if (this._batchJobParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchJobParameters = this._batchJobParameters;
    }
    if (this._exportDataSetNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportDataSetNames = this._exportDataSetNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApptestTestCaseStepsActionMainframeActionActionTypeBatch | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchJobName = undefined;
      this._batchJobParameters = undefined;
      this._exportDataSetNames = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchJobName = value.batchJobName;
      this._batchJobParameters = value.batchJobParameters;
      this._exportDataSetNames = value.exportDataSetNames;
    }
  }

  // batch_job_name - computed: true, optional: true, required: false
  private _batchJobName?: string; 
  public get batchJobName() {
    return this.getStringAttribute('batch_job_name');
  }
  public set batchJobName(value: string) {
    this._batchJobName = value;
  }
  public resetBatchJobName() {
    this._batchJobName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchJobNameInput() {
    return this._batchJobName;
  }

  // batch_job_parameters - computed: true, optional: true, required: false
  private _batchJobParameters?: { [key: string]: string }; 
  public get batchJobParameters() {
    return this.getStringMapAttribute('batch_job_parameters');
  }
  public set batchJobParameters(value: { [key: string]: string }) {
    this._batchJobParameters = value;
  }
  public resetBatchJobParameters() {
    this._batchJobParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchJobParametersInput() {
    return this._batchJobParameters;
  }

  // export_data_set_names - computed: true, optional: true, required: false
  private _exportDataSetNames?: string[]; 
  public get exportDataSetNames() {
    return this.getListAttribute('export_data_set_names');
  }
  public set exportDataSetNames(value: string[]) {
    this._exportDataSetNames = value;
  }
  public resetExportDataSetNames() {
    this._exportDataSetNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportDataSetNamesInput() {
    return this._exportDataSetNames;
  }
}
export interface ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#script_location ApptestTestCase#script_location}
  */
  readonly scriptLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#type ApptestTestCase#type}
  */
  readonly type?: string;
}

export function apptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptToTerraform(struct?: ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    script_location: cdktn.stringToTerraform(struct!.scriptLocation),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function apptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptToHclTerraform(struct?: ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    script_location: {
      value: cdktn.stringToHclTerraform(struct!.scriptLocation),
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

export class ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scriptLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptLocation = this._scriptLocation;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scriptLocation = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scriptLocation = value.scriptLocation;
      this._type = value.type;
    }
  }

  // script_location - computed: true, optional: true, required: false
  private _scriptLocation?: string; 
  public get scriptLocation() {
    return this.getStringAttribute('script_location');
  }
  public set scriptLocation(value: string) {
    this._scriptLocation = value;
  }
  public resetScriptLocation() {
    this._scriptLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptLocationInput() {
    return this._scriptLocation;
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
export interface ApptestTestCaseStepsActionMainframeActionActionTypeTn3270 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#export_data_set_names ApptestTestCase#export_data_set_names}
  */
  readonly exportDataSetNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#script ApptestTestCase#script}
  */
  readonly script?: ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script;
}

export function apptestTestCaseStepsActionMainframeActionActionTypeTn3270ToTerraform(struct?: ApptestTestCaseStepsActionMainframeActionActionTypeTn3270 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    export_data_set_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exportDataSetNames),
    script: apptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptToTerraform(struct!.script),
  }
}


export function apptestTestCaseStepsActionMainframeActionActionTypeTn3270ToHclTerraform(struct?: ApptestTestCaseStepsActionMainframeActionActionTypeTn3270 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    export_data_set_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exportDataSetNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    script: {
      value: apptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptToHclTerraform(struct!.script),
      isBlock: true,
      type: "struct",
      storageClassType: "ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApptestTestCaseStepsActionMainframeActionActionTypeTn3270 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportDataSetNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportDataSetNames = this._exportDataSetNames;
    }
    if (this._script?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApptestTestCaseStepsActionMainframeActionActionTypeTn3270 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportDataSetNames = undefined;
      this._script.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportDataSetNames = value.exportDataSetNames;
      this._script.internalValue = value.script;
    }
  }

  // export_data_set_names - computed: true, optional: true, required: false
  private _exportDataSetNames?: string[]; 
  public get exportDataSetNames() {
    return this.getListAttribute('export_data_set_names');
  }
  public set exportDataSetNames(value: string[]) {
    this._exportDataSetNames = value;
  }
  public resetExportDataSetNames() {
    this._exportDataSetNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportDataSetNamesInput() {
    return this._exportDataSetNames;
  }

  // script - computed: true, optional: true, required: false
  private _script = new ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference(this, "script");
  public get script() {
    return this._script;
  }
  public putScript(value: ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script) {
    this._script.internalValue = value;
  }
  public resetScript() {
    this._script.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script.internalValue;
  }
}
export interface ApptestTestCaseStepsActionMainframeActionActionType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#batch ApptestTestCase#batch}
  */
  readonly batch?: ApptestTestCaseStepsActionMainframeActionActionTypeBatch;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#tn_3270 ApptestTestCase#tn_3270}
  */
  readonly tn3270?: ApptestTestCaseStepsActionMainframeActionActionTypeTn3270;
}

export function apptestTestCaseStepsActionMainframeActionActionTypeToTerraform(struct?: ApptestTestCaseStepsActionMainframeActionActionType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch: apptestTestCaseStepsActionMainframeActionActionTypeBatchToTerraform(struct!.batch),
    tn_3270: apptestTestCaseStepsActionMainframeActionActionTypeTn3270ToTerraform(struct!.tn3270),
  }
}


export function apptestTestCaseStepsActionMainframeActionActionTypeToHclTerraform(struct?: ApptestTestCaseStepsActionMainframeActionActionType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch: {
      value: apptestTestCaseStepsActionMainframeActionActionTypeBatchToHclTerraform(struct!.batch),
      isBlock: true,
      type: "struct",
      storageClassType: "ApptestTestCaseStepsActionMainframeActionActionTypeBatch",
    },
    tn_3270: {
      value: apptestTestCaseStepsActionMainframeActionActionTypeTn3270ToHclTerraform(struct!.tn3270),
      isBlock: true,
      type: "struct",
      storageClassType: "ApptestTestCaseStepsActionMainframeActionActionTypeTn3270",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApptestTestCaseStepsActionMainframeActionActionType | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.batch = this._batch?.internalValue;
    }
    if (this._tn3270?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tn3270 = this._tn3270?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApptestTestCaseStepsActionMainframeActionActionType | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batch.internalValue = undefined;
      this._tn3270.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batch.internalValue = value.batch;
      this._tn3270.internalValue = value.tn3270;
    }
  }

  // batch - computed: true, optional: true, required: false
  private _batch = new ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference(this, "batch");
  public get batch() {
    return this._batch;
  }
  public putBatch(value: ApptestTestCaseStepsActionMainframeActionActionTypeBatch) {
    this._batch.internalValue = value;
  }
  public resetBatch() {
    this._batch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchInput() {
    return this._batch.internalValue;
  }

  // tn_3270 - computed: true, optional: true, required: false
  private _tn3270 = new ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference(this, "tn_3270");
  public get tn3270() {
    return this._tn3270;
  }
  public putTn3270(value: ApptestTestCaseStepsActionMainframeActionActionTypeTn3270) {
    this._tn3270.internalValue = value;
  }
  public resetTn3270() {
    this._tn3270.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tn3270Input() {
    return this._tn3270.internalValue;
  }
}
export interface ApptestTestCaseStepsActionMainframeActionProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#dms_task_arn ApptestTestCase#dms_task_arn}
  */
  readonly dmsTaskArn?: string;
}

export function apptestTestCaseStepsActionMainframeActionPropertiesToTerraform(struct?: ApptestTestCaseStepsActionMainframeActionProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dms_task_arn: cdktn.stringToTerraform(struct!.dmsTaskArn),
  }
}


export function apptestTestCaseStepsActionMainframeActionPropertiesToHclTerraform(struct?: ApptestTestCaseStepsActionMainframeActionProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dms_task_arn: {
      value: cdktn.stringToHclTerraform(struct!.dmsTaskArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApptestTestCaseStepsActionMainframeActionProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dmsTaskArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dmsTaskArn = this._dmsTaskArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApptestTestCaseStepsActionMainframeActionProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dmsTaskArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dmsTaskArn = value.dmsTaskArn;
    }
  }

  // dms_task_arn - computed: true, optional: true, required: false
  private _dmsTaskArn?: string; 
  public get dmsTaskArn() {
    return this.getStringAttribute('dms_task_arn');
  }
  public set dmsTaskArn(value: string) {
    this._dmsTaskArn = value;
  }
  public resetDmsTaskArn() {
    this._dmsTaskArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dmsTaskArnInput() {
    return this._dmsTaskArn;
  }
}
export interface ApptestTestCaseStepsActionMainframeAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}
  */
  readonly actionType?: ApptestTestCaseStepsActionMainframeActionActionType;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#properties ApptestTestCase#properties}
  */
  readonly properties?: ApptestTestCaseStepsActionMainframeActionProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}
  */
  readonly resource?: string;
}

export function apptestTestCaseStepsActionMainframeActionToTerraform(struct?: ApptestTestCaseStepsActionMainframeAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_type: apptestTestCaseStepsActionMainframeActionActionTypeToTerraform(struct!.actionType),
    properties: apptestTestCaseStepsActionMainframeActionPropertiesToTerraform(struct!.properties),
    resource: cdktn.stringToTerraform(struct!.resource),
  }
}


export function apptestTestCaseStepsActionMainframeActionToHclTerraform(struct?: ApptestTestCaseStepsActionMainframeAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_type: {
      value: apptestTestCaseStepsActionMainframeActionActionTypeToHclTerraform(struct!.actionType),
      isBlock: true,
      type: "struct",
      storageClassType: "ApptestTestCaseStepsActionMainframeActionActionType",
    },
    properties: {
      value: apptestTestCaseStepsActionMainframeActionPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "struct",
      storageClassType: "ApptestTestCaseStepsActionMainframeActionProperties",
    },
    resource: {
      value: cdktn.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApptestTestCaseStepsActionMainframeActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApptestTestCaseStepsActionMainframeAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType?.internalValue;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApptestTestCaseStepsActionMainframeAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionType.internalValue = undefined;
      this._properties.internalValue = undefined;
      this._resource = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionType.internalValue = value.actionType;
      this._properties.internalValue = value.properties;
      this._resource = value.resource;
    }
  }

  // action_type - computed: true, optional: true, required: false
  private _actionType = new ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference(this, "action_type");
  public get actionType() {
    return this._actionType;
  }
  public putActionType(value: ApptestTestCaseStepsActionMainframeActionActionType) {
    this._actionType.internalValue = value;
  }
  public resetActionType() {
    this._actionType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType.internalValue;
  }

  // properties - computed: true, optional: true, required: false
  private _properties = new ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: ApptestTestCaseStepsActionMainframeActionProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // resource - computed: true, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface ApptestTestCaseStepsActionResourceActionCloudformationAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}
  */
  readonly actionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}
  */
  readonly resource?: string;
}

export function apptestTestCaseStepsActionResourceActionCloudformationActionToTerraform(struct?: ApptestTestCaseStepsActionResourceActionCloudformationAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_type: cdktn.stringToTerraform(struct!.actionType),
    resource: cdktn.stringToTerraform(struct!.resource),
  }
}


export function apptestTestCaseStepsActionResourceActionCloudformationActionToHclTerraform(struct?: ApptestTestCaseStepsActionResourceActionCloudformationAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_type: {
      value: cdktn.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktn.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApptestTestCaseStepsActionResourceActionCloudformationAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApptestTestCaseStepsActionResourceActionCloudformationAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionType = undefined;
      this._resource = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionType = value.actionType;
      this._resource = value.resource;
    }
  }

  // action_type - computed: true, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // resource - computed: true, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#force_stop ApptestTestCase#force_stop}
  */
  readonly forceStop?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#import_data_set_location ApptestTestCase#import_data_set_location}
  */
  readonly importDataSetLocation?: string;
}

export function apptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesToTerraform(struct?: ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    force_stop: cdktn.booleanToTerraform(struct!.forceStop),
    import_data_set_location: cdktn.stringToTerraform(struct!.importDataSetLocation),
  }
}


export function apptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesToHclTerraform(struct?: ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    force_stop: {
      value: cdktn.booleanToHclTerraform(struct!.forceStop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    import_data_set_location: {
      value: cdktn.stringToHclTerraform(struct!.importDataSetLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceStop !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceStop = this._forceStop;
    }
    if (this._importDataSetLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.importDataSetLocation = this._importDataSetLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forceStop = undefined;
      this._importDataSetLocation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forceStop = value.forceStop;
      this._importDataSetLocation = value.importDataSetLocation;
    }
  }

  // force_stop - computed: true, optional: true, required: false
  private _forceStop?: boolean | cdktn.IResolvable; 
  public get forceStop() {
    return this.getBooleanAttribute('force_stop');
  }
  public set forceStop(value: boolean | cdktn.IResolvable) {
    this._forceStop = value;
  }
  public resetForceStop() {
    this._forceStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceStopInput() {
    return this._forceStop;
  }

  // import_data_set_location - computed: true, optional: true, required: false
  private _importDataSetLocation?: string; 
  public get importDataSetLocation() {
    return this.getStringAttribute('import_data_set_location');
  }
  public set importDataSetLocation(value: string) {
    this._importDataSetLocation = value;
  }
  public resetImportDataSetLocation() {
    this._importDataSetLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importDataSetLocationInput() {
    return this._importDataSetLocation;
  }
}
export interface ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}
  */
  readonly actionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#properties ApptestTestCase#properties}
  */
  readonly properties?: ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}
  */
  readonly resource?: string;
}

export function apptestTestCaseStepsActionResourceActionM2ManagedApplicationActionToTerraform(struct?: ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_type: cdktn.stringToTerraform(struct!.actionType),
    properties: apptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesToTerraform(struct!.properties),
    resource: cdktn.stringToTerraform(struct!.resource),
  }
}


export function apptestTestCaseStepsActionResourceActionM2ManagedApplicationActionToHclTerraform(struct?: ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_type: {
      value: cdktn.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: apptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "struct",
      storageClassType: "ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties",
    },
    resource: {
      value: cdktn.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionType = undefined;
      this._properties.internalValue = undefined;
      this._resource = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionType = value.actionType;
      this._properties.internalValue = value.properties;
      this._resource = value.resource;
    }
  }

  // action_type - computed: true, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // properties - computed: true, optional: true, required: false
  private _properties = new ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // resource - computed: true, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}
  */
  readonly actionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}
  */
  readonly resource?: string;
}

export function apptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionToTerraform(struct?: ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_type: cdktn.stringToTerraform(struct!.actionType),
    resource: cdktn.stringToTerraform(struct!.resource),
  }
}


export function apptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionToHclTerraform(struct?: ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_type: {
      value: cdktn.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktn.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionType = undefined;
      this._resource = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionType = value.actionType;
      this._resource = value.resource;
    }
  }

  // action_type - computed: true, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // resource - computed: true, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface ApptestTestCaseStepsActionResourceAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#cloudformation_action ApptestTestCase#cloudformation_action}
  */
  readonly cloudformationAction?: ApptestTestCaseStepsActionResourceActionCloudformationAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#m2_managed_application_action ApptestTestCase#m2_managed_application_action}
  */
  readonly m2ManagedApplicationAction?: ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#m2_non_managed_application_action ApptestTestCase#m2_non_managed_application_action}
  */
  readonly m2NonManagedApplicationAction?: ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction;
}

export function apptestTestCaseStepsActionResourceActionToTerraform(struct?: ApptestTestCaseStepsActionResourceAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudformation_action: apptestTestCaseStepsActionResourceActionCloudformationActionToTerraform(struct!.cloudformationAction),
    m2_managed_application_action: apptestTestCaseStepsActionResourceActionM2ManagedApplicationActionToTerraform(struct!.m2ManagedApplicationAction),
    m2_non_managed_application_action: apptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionToTerraform(struct!.m2NonManagedApplicationAction),
  }
}


export function apptestTestCaseStepsActionResourceActionToHclTerraform(struct?: ApptestTestCaseStepsActionResourceAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudformation_action: {
      value: apptestTestCaseStepsActionResourceActionCloudformationActionToHclTerraform(struct!.cloudformationAction),
      isBlock: true,
      type: "struct",
      storageClassType: "ApptestTestCaseStepsActionResourceActionCloudformationAction",
    },
    m2_managed_application_action: {
      value: apptestTestCaseStepsActionResourceActionM2ManagedApplicationActionToHclTerraform(struct!.m2ManagedApplicationAction),
      isBlock: true,
      type: "struct",
      storageClassType: "ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction",
    },
    m2_non_managed_application_action: {
      value: apptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionToHclTerraform(struct!.m2NonManagedApplicationAction),
      isBlock: true,
      type: "struct",
      storageClassType: "ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApptestTestCaseStepsActionResourceActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApptestTestCaseStepsActionResourceAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudformationAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudformationAction = this._cloudformationAction?.internalValue;
    }
    if (this._m2ManagedApplicationAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.m2ManagedApplicationAction = this._m2ManagedApplicationAction?.internalValue;
    }
    if (this._m2NonManagedApplicationAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.m2NonManagedApplicationAction = this._m2NonManagedApplicationAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApptestTestCaseStepsActionResourceAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudformationAction.internalValue = undefined;
      this._m2ManagedApplicationAction.internalValue = undefined;
      this._m2NonManagedApplicationAction.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudformationAction.internalValue = value.cloudformationAction;
      this._m2ManagedApplicationAction.internalValue = value.m2ManagedApplicationAction;
      this._m2NonManagedApplicationAction.internalValue = value.m2NonManagedApplicationAction;
    }
  }

  // cloudformation_action - computed: true, optional: true, required: false
  private _cloudformationAction = new ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference(this, "cloudformation_action");
  public get cloudformationAction() {
    return this._cloudformationAction;
  }
  public putCloudformationAction(value: ApptestTestCaseStepsActionResourceActionCloudformationAction) {
    this._cloudformationAction.internalValue = value;
  }
  public resetCloudformationAction() {
    this._cloudformationAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudformationActionInput() {
    return this._cloudformationAction.internalValue;
  }

  // m2_managed_application_action - computed: true, optional: true, required: false
  private _m2ManagedApplicationAction = new ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference(this, "m2_managed_application_action");
  public get m2ManagedApplicationAction() {
    return this._m2ManagedApplicationAction;
  }
  public putM2ManagedApplicationAction(value: ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction) {
    this._m2ManagedApplicationAction.internalValue = value;
  }
  public resetM2ManagedApplicationAction() {
    this._m2ManagedApplicationAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get m2ManagedApplicationActionInput() {
    return this._m2ManagedApplicationAction.internalValue;
  }

  // m2_non_managed_application_action - computed: true, optional: true, required: false
  private _m2NonManagedApplicationAction = new ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference(this, "m2_non_managed_application_action");
  public get m2NonManagedApplicationAction() {
    return this._m2NonManagedApplicationAction;
  }
  public putM2NonManagedApplicationAction(value: ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction) {
    this._m2NonManagedApplicationAction.internalValue = value;
  }
  public resetM2NonManagedApplicationAction() {
    this._m2NonManagedApplicationAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get m2NonManagedApplicationActionInput() {
    return this._m2NonManagedApplicationAction.internalValue;
  }
}
export interface ApptestTestCaseStepsAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#compare_action ApptestTestCase#compare_action}
  */
  readonly compareAction?: ApptestTestCaseStepsActionCompareAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#mainframe_action ApptestTestCase#mainframe_action}
  */
  readonly mainframeAction?: ApptestTestCaseStepsActionMainframeAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#resource_action ApptestTestCase#resource_action}
  */
  readonly resourceAction?: ApptestTestCaseStepsActionResourceAction;
}

export function apptestTestCaseStepsActionToTerraform(struct?: ApptestTestCaseStepsAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compare_action: apptestTestCaseStepsActionCompareActionToTerraform(struct!.compareAction),
    mainframe_action: apptestTestCaseStepsActionMainframeActionToTerraform(struct!.mainframeAction),
    resource_action: apptestTestCaseStepsActionResourceActionToTerraform(struct!.resourceAction),
  }
}


export function apptestTestCaseStepsActionToHclTerraform(struct?: ApptestTestCaseStepsAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compare_action: {
      value: apptestTestCaseStepsActionCompareActionToHclTerraform(struct!.compareAction),
      isBlock: true,
      type: "struct",
      storageClassType: "ApptestTestCaseStepsActionCompareAction",
    },
    mainframe_action: {
      value: apptestTestCaseStepsActionMainframeActionToHclTerraform(struct!.mainframeAction),
      isBlock: true,
      type: "struct",
      storageClassType: "ApptestTestCaseStepsActionMainframeAction",
    },
    resource_action: {
      value: apptestTestCaseStepsActionResourceActionToHclTerraform(struct!.resourceAction),
      isBlock: true,
      type: "struct",
      storageClassType: "ApptestTestCaseStepsActionResourceAction",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApptestTestCaseStepsActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApptestTestCaseStepsAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compareAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compareAction = this._compareAction?.internalValue;
    }
    if (this._mainframeAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainframeAction = this._mainframeAction?.internalValue;
    }
    if (this._resourceAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAction = this._resourceAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApptestTestCaseStepsAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compareAction.internalValue = undefined;
      this._mainframeAction.internalValue = undefined;
      this._resourceAction.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compareAction.internalValue = value.compareAction;
      this._mainframeAction.internalValue = value.mainframeAction;
      this._resourceAction.internalValue = value.resourceAction;
    }
  }

  // compare_action - computed: true, optional: true, required: false
  private _compareAction = new ApptestTestCaseStepsActionCompareActionOutputReference(this, "compare_action");
  public get compareAction() {
    return this._compareAction;
  }
  public putCompareAction(value: ApptestTestCaseStepsActionCompareAction) {
    this._compareAction.internalValue = value;
  }
  public resetCompareAction() {
    this._compareAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compareActionInput() {
    return this._compareAction.internalValue;
  }

  // mainframe_action - computed: true, optional: true, required: false
  private _mainframeAction = new ApptestTestCaseStepsActionMainframeActionOutputReference(this, "mainframe_action");
  public get mainframeAction() {
    return this._mainframeAction;
  }
  public putMainframeAction(value: ApptestTestCaseStepsActionMainframeAction) {
    this._mainframeAction.internalValue = value;
  }
  public resetMainframeAction() {
    this._mainframeAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainframeActionInput() {
    return this._mainframeAction.internalValue;
  }

  // resource_action - computed: true, optional: true, required: false
  private _resourceAction = new ApptestTestCaseStepsActionResourceActionOutputReference(this, "resource_action");
  public get resourceAction() {
    return this._resourceAction;
  }
  public putResourceAction(value: ApptestTestCaseStepsActionResourceAction) {
    this._resourceAction.internalValue = value;
  }
  public resetResourceAction() {
    this._resourceAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceActionInput() {
    return this._resourceAction.internalValue;
  }
}
export interface ApptestTestCaseSteps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#action ApptestTestCase#action}
  */
  readonly action: ApptestTestCaseStepsAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#description ApptestTestCase#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#name ApptestTestCase#name}
  */
  readonly name: string;
}

export function apptestTestCaseStepsToTerraform(struct?: ApptestTestCaseSteps | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: apptestTestCaseStepsActionToTerraform(struct!.action),
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function apptestTestCaseStepsToHclTerraform(struct?: ApptestTestCaseSteps | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: apptestTestCaseStepsActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "ApptestTestCaseStepsAction",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApptestTestCaseStepsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApptestTestCaseSteps | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApptestTestCaseSteps | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._description = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._description = value.description;
      this._name = value.name;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new ApptestTestCaseStepsActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: ApptestTestCaseStepsAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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
}

export class ApptestTestCaseStepsList extends cdktn.ComplexList {
  public internalValue? : ApptestTestCaseSteps[] | cdktn.IResolvable

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
  public get(index: number): ApptestTestCaseStepsOutputReference {
    return new ApptestTestCaseStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case awscc_apptest_test_case}
*/
export class ApptestTestCase extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_apptest_test_case";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ApptestTestCase resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApptestTestCase to import
  * @param importFromId The id of the existing ApptestTestCase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApptestTestCase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apptest_test_case", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apptest_test_case awscc_apptest_test_case} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApptestTestCaseConfig
  */
  public constructor(scope: Construct, id: string, config: ApptestTestCaseConfig) {
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
    this._description = config.description;
    this._name = config.name;
    this._steps.internalValue = config.steps;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getStringAttribute('last_update_time');
  }

  // latest_version - computed: true, optional: false, required: false
  private _latestVersion = new ApptestTestCaseLatestVersionOutputReference(this, "latest_version");
  public get latestVersion() {
    return this._latestVersion;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // steps - computed: false, optional: false, required: true
  private _steps = new ApptestTestCaseStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: ApptestTestCaseSteps[] | cdktn.IResolvable) {
    this._steps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
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
      description: cdktn.stringToTerraform(this._description),
      name: cdktn.stringToTerraform(this._name),
      steps: cdktn.listMapper(apptestTestCaseStepsToTerraform, false)(this._steps.internalValue),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      steps: {
        value: cdktn.listMapperHcl(apptestTestCaseStepsToHclTerraform, false)(this._steps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApptestTestCaseStepsList",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
