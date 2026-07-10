// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/aps_workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccApsWorkspaceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/aps_workspace#id DataAwsccApsWorkspace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccApsWorkspaceLoggingConfiguration {
}

export function dataAwsccApsWorkspaceLoggingConfigurationToTerraform(struct?: DataAwsccApsWorkspaceLoggingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApsWorkspaceLoggingConfigurationToHclTerraform(struct?: DataAwsccApsWorkspaceLoggingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApsWorkspaceLoggingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApsWorkspaceLoggingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApsWorkspaceLoggingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_group_arn - computed: true, optional: false, required: false
  public get logGroupArn() {
    return this.getStringAttribute('log_group_arn');
  }
}
export interface DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs {
}

export function dataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsToTerraform(struct?: DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsToHclTerraform(struct?: DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_group_arn - computed: true, optional: false, required: false
  public get logGroupArn() {
    return this.getStringAttribute('log_group_arn');
  }
}
export interface DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFilters {
}

export function dataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersToTerraform(struct?: DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersToHclTerraform(struct?: DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // qsp_threshold - computed: true, optional: false, required: false
  public get qspThreshold() {
    return this.getNumberAttribute('qsp_threshold');
  }
}
export interface DataAwsccApsWorkspaceQueryLoggingConfigurationDestinations {
}

export function dataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsToTerraform(struct?: DataAwsccApsWorkspaceQueryLoggingConfigurationDestinations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsToHclTerraform(struct?: DataAwsccApsWorkspaceQueryLoggingConfigurationDestinations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApsWorkspaceQueryLoggingConfigurationDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApsWorkspaceQueryLoggingConfigurationDestinations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_logs - computed: true, optional: false, required: false
  private _cloudwatchLogs = new DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference(this, "cloudwatch_logs");
  public get cloudwatchLogs() {
    return this._cloudwatchLogs;
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
}

export class DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference {
    return new DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApsWorkspaceQueryLoggingConfiguration {
}

export function dataAwsccApsWorkspaceQueryLoggingConfigurationToTerraform(struct?: DataAwsccApsWorkspaceQueryLoggingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApsWorkspaceQueryLoggingConfigurationToHclTerraform(struct?: DataAwsccApsWorkspaceQueryLoggingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApsWorkspaceQueryLoggingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApsWorkspaceQueryLoggingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destinations - computed: true, optional: false, required: false
  private _destinations = new DataAwsccApsWorkspaceQueryLoggingConfigurationDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
}
export interface DataAwsccApsWorkspaceTags {
}

export function dataAwsccApsWorkspaceTagsToTerraform(struct?: DataAwsccApsWorkspaceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApsWorkspaceTagsToHclTerraform(struct?: DataAwsccApsWorkspaceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApsWorkspaceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApsWorkspaceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApsWorkspaceTags | undefined) {
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

export class DataAwsccApsWorkspaceTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApsWorkspaceTagsOutputReference {
    return new DataAwsccApsWorkspaceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet {
}

export function dataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetToTerraform(struct?: DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetToHclTerraform(struct?: DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference {
    return new DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits {
}

export function dataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsToTerraform(struct?: DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsToHclTerraform(struct?: DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_series - computed: true, optional: false, required: false
  public get maxSeries() {
    return this.getNumberAttribute('max_series');
  }
}
export interface DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets {
}

export function dataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsToTerraform(struct?: DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsToHclTerraform(struct?: DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label_set - computed: true, optional: false, required: false
  private _labelSet = new DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList(this, "label_set", true);
  public get labelSet() {
    return this._labelSet;
  }

  // limits - computed: true, optional: false, required: false
  private _limits = new DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
}

export class DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference {
    return new DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApsWorkspaceWorkspaceConfiguration {
}

export function dataAwsccApsWorkspaceWorkspaceConfigurationToTerraform(struct?: DataAwsccApsWorkspaceWorkspaceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApsWorkspaceWorkspaceConfigurationToHclTerraform(struct?: DataAwsccApsWorkspaceWorkspaceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApsWorkspaceWorkspaceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApsWorkspaceWorkspaceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // limits_per_label_sets - computed: true, optional: false, required: false
  private _limitsPerLabelSets = new DataAwsccApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList(this, "limits_per_label_sets", true);
  public get limitsPerLabelSets() {
    return this._limitsPerLabelSets;
  }

  // out_of_order_time_window_in_seconds - computed: true, optional: false, required: false
  public get outOfOrderTimeWindowInSeconds() {
    return this.getNumberAttribute('out_of_order_time_window_in_seconds');
  }

  // retention_period_in_days - computed: true, optional: false, required: false
  public get retentionPeriodInDays() {
    return this.getNumberAttribute('retention_period_in_days');
  }

  // rule_query_offset_in_seconds - computed: true, optional: false, required: false
  public get ruleQueryOffsetInSeconds() {
    return this.getNumberAttribute('rule_query_offset_in_seconds');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/aps_workspace awscc_aps_workspace}
*/
export class DataAwsccApsWorkspace extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_aps_workspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccApsWorkspace resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccApsWorkspace to import
  * @param importFromId The id of the existing DataAwsccApsWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/aps_workspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccApsWorkspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_aps_workspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/aps_workspace awscc_aps_workspace} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccApsWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccApsWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_aps_workspace',
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

  // alert_manager_definition - computed: true, optional: false, required: false
  public get alertManagerDefinition() {
    return this.getStringAttribute('alert_manager_definition');
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }

  // logging_configuration - computed: true, optional: false, required: false
  private _loggingConfiguration = new DataAwsccApsWorkspaceLoggingConfigurationOutputReference(this, "logging_configuration");
  public get loggingConfiguration() {
    return this._loggingConfiguration;
  }

  // prometheus_endpoint - computed: true, optional: false, required: false
  public get prometheusEndpoint() {
    return this.getStringAttribute('prometheus_endpoint');
  }

  // query_logging_configuration - computed: true, optional: false, required: false
  private _queryLoggingConfiguration = new DataAwsccApsWorkspaceQueryLoggingConfigurationOutputReference(this, "query_logging_configuration");
  public get queryLoggingConfiguration() {
    return this._queryLoggingConfiguration;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccApsWorkspaceTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // workspace_configuration - computed: true, optional: false, required: false
  private _workspaceConfiguration = new DataAwsccApsWorkspaceWorkspaceConfigurationOutputReference(this, "workspace_configuration");
  public get workspaceConfiguration() {
    return this._workspaceConfiguration;
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
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
