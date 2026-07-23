// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/iotanalytics_dataset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccIotanalyticsDatasetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/iotanalytics_dataset#id DataAwsccIotanalyticsDataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfiguration {
}

export function dataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationToTerraform(struct?: DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationToHclTerraform(struct?: DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute_type - computed: true, optional: false, required: false
  public get computeType() {
    return this.getStringAttribute('compute_type');
  }

  // volume_size_in_gb - computed: true, optional: false, required: false
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
}
export interface DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue {
}

export function dataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueToTerraform(struct?: DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueToHclTerraform(struct?: DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dataset_name - computed: true, optional: false, required: false
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }
}
export interface DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue {
}

export function dataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueToTerraform(struct?: DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueToHclTerraform(struct?: DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_name - computed: true, optional: false, required: false
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
}
export interface DataAwsccIotanalyticsDatasetActionsContainerActionVariables {
}

export function dataAwsccIotanalyticsDatasetActionsContainerActionVariablesToTerraform(struct?: DataAwsccIotanalyticsDatasetActionsContainerActionVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatasetActionsContainerActionVariablesToHclTerraform(struct?: DataAwsccIotanalyticsDatasetActionsContainerActionVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotanalyticsDatasetActionsContainerActionVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatasetActionsContainerActionVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dataset_content_version_value - computed: true, optional: false, required: false
  private _datasetContentVersionValue = new DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference(this, "dataset_content_version_value");
  public get datasetContentVersionValue() {
    return this._datasetContentVersionValue;
  }

  // double_value - computed: true, optional: false, required: false
  public get doubleValue() {
    return this.getNumberAttribute('double_value');
  }

  // output_file_uri_value - computed: true, optional: false, required: false
  private _outputFileUriValue = new DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference(this, "output_file_uri_value");
  public get outputFileUriValue() {
    return this._outputFileUriValue;
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }

  // variable_name - computed: true, optional: false, required: false
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
}

export class DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference {
    return new DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotanalyticsDatasetActionsContainerAction {
}

export function dataAwsccIotanalyticsDatasetActionsContainerActionToTerraform(struct?: DataAwsccIotanalyticsDatasetActionsContainerAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatasetActionsContainerActionToHclTerraform(struct?: DataAwsccIotanalyticsDatasetActionsContainerAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsDatasetActionsContainerAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatasetActionsContainerAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execution_role_arn - computed: true, optional: false, required: false
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // resource_configuration - computed: true, optional: false, required: false
  private _resourceConfiguration = new DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference(this, "resource_configuration");
  public get resourceConfiguration() {
    return this._resourceConfiguration;
  }

  // variables - computed: true, optional: false, required: false
  private _variables = new DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
}
export interface DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTime {
}

export function dataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeToTerraform(struct?: DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeToHclTerraform(struct?: DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // offset_seconds - computed: true, optional: false, required: false
  public get offsetSeconds() {
    return this.getNumberAttribute('offset_seconds');
  }

  // time_expression - computed: true, optional: false, required: false
  public get timeExpression() {
    return this.getStringAttribute('time_expression');
  }
}
export interface DataAwsccIotanalyticsDatasetActionsQueryActionFilters {
}

export function dataAwsccIotanalyticsDatasetActionsQueryActionFiltersToTerraform(struct?: DataAwsccIotanalyticsDatasetActionsQueryActionFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatasetActionsQueryActionFiltersToHclTerraform(struct?: DataAwsccIotanalyticsDatasetActionsQueryActionFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotanalyticsDatasetActionsQueryActionFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatasetActionsQueryActionFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delta_time - computed: true, optional: false, required: false
  private _deltaTime = new DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference(this, "delta_time");
  public get deltaTime() {
    return this._deltaTime;
  }
}

export class DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference {
    return new DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotanalyticsDatasetActionsQueryAction {
}

export function dataAwsccIotanalyticsDatasetActionsQueryActionToTerraform(struct?: DataAwsccIotanalyticsDatasetActionsQueryAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatasetActionsQueryActionToHclTerraform(struct?: DataAwsccIotanalyticsDatasetActionsQueryAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsDatasetActionsQueryAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatasetActionsQueryAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // sql_query - computed: true, optional: false, required: false
  public get sqlQuery() {
    return this.getStringAttribute('sql_query');
  }
}
export interface DataAwsccIotanalyticsDatasetActions {
}

export function dataAwsccIotanalyticsDatasetActionsToTerraform(struct?: DataAwsccIotanalyticsDatasetActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatasetActionsToHclTerraform(struct?: DataAwsccIotanalyticsDatasetActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatasetActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotanalyticsDatasetActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatasetActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_name - computed: true, optional: false, required: false
  public get actionName() {
    return this.getStringAttribute('action_name');
  }

  // container_action - computed: true, optional: false, required: false
  private _containerAction = new DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference(this, "container_action");
  public get containerAction() {
    return this._containerAction;
  }

  // query_action - computed: true, optional: false, required: false
  private _queryAction = new DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference(this, "query_action");
  public get queryAction() {
    return this._queryAction;
  }
}

export class DataAwsccIotanalyticsDatasetActionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotanalyticsDatasetActionsOutputReference {
    return new DataAwsccIotanalyticsDatasetActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration {
}

export function dataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationToTerraform(struct?: DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationToHclTerraform(struct?: DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // input_name - computed: true, optional: false, required: false
  public get inputName() {
    return this.getStringAttribute('input_name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration {
}

export function dataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationToTerraform(struct?: DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationToHclTerraform(struct?: DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}
export interface DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration {
}

export function dataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationToTerraform(struct?: DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationToHclTerraform(struct?: DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration | undefined) {
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

  // glue_configuration - computed: true, optional: false, required: false
  private _glueConfiguration = new DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference(this, "glue_configuration");
  public get glueConfiguration() {
    return this._glueConfiguration;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccIotanalyticsDatasetContentDeliveryRulesDestination {
}

export function dataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationToTerraform(struct?: DataAwsccIotanalyticsDatasetContentDeliveryRulesDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationToHclTerraform(struct?: DataAwsccIotanalyticsDatasetContentDeliveryRulesDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsDatasetContentDeliveryRulesDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatasetContentDeliveryRulesDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iot_events_destination_configuration - computed: true, optional: false, required: false
  private _iotEventsDestinationConfiguration = new DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference(this, "iot_events_destination_configuration");
  public get iotEventsDestinationConfiguration() {
    return this._iotEventsDestinationConfiguration;
  }

  // s3_destination_configuration - computed: true, optional: false, required: false
  private _s3DestinationConfiguration = new DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference(this, "s3_destination_configuration");
  public get s3DestinationConfiguration() {
    return this._s3DestinationConfiguration;
  }
}
export interface DataAwsccIotanalyticsDatasetContentDeliveryRules {
}

export function dataAwsccIotanalyticsDatasetContentDeliveryRulesToTerraform(struct?: DataAwsccIotanalyticsDatasetContentDeliveryRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatasetContentDeliveryRulesToHclTerraform(struct?: DataAwsccIotanalyticsDatasetContentDeliveryRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotanalyticsDatasetContentDeliveryRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatasetContentDeliveryRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  private _destination = new DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }

  // entry_name - computed: true, optional: false, required: false
  public get entryName() {
    return this.getStringAttribute('entry_name');
  }
}

export class DataAwsccIotanalyticsDatasetContentDeliveryRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference {
    return new DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration {
}

export function dataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationToTerraform(struct?: DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationToHclTerraform(struct?: DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timeout_in_minutes - computed: true, optional: false, required: false
  public get timeoutInMinutes() {
    return this.getNumberAttribute('timeout_in_minutes');
  }
}
export interface DataAwsccIotanalyticsDatasetLateDataRulesRuleConfiguration {
}

export function dataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationToTerraform(struct?: DataAwsccIotanalyticsDatasetLateDataRulesRuleConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationToHclTerraform(struct?: DataAwsccIotanalyticsDatasetLateDataRulesRuleConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsDatasetLateDataRulesRuleConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatasetLateDataRulesRuleConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delta_time_session_window_configuration - computed: true, optional: false, required: false
  private _deltaTimeSessionWindowConfiguration = new DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference(this, "delta_time_session_window_configuration");
  public get deltaTimeSessionWindowConfiguration() {
    return this._deltaTimeSessionWindowConfiguration;
  }
}
export interface DataAwsccIotanalyticsDatasetLateDataRules {
}

export function dataAwsccIotanalyticsDatasetLateDataRulesToTerraform(struct?: DataAwsccIotanalyticsDatasetLateDataRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatasetLateDataRulesToHclTerraform(struct?: DataAwsccIotanalyticsDatasetLateDataRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatasetLateDataRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotanalyticsDatasetLateDataRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatasetLateDataRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rule_configuration - computed: true, optional: false, required: false
  private _ruleConfiguration = new DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference(this, "rule_configuration");
  public get ruleConfiguration() {
    return this._ruleConfiguration;
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
}

export class DataAwsccIotanalyticsDatasetLateDataRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotanalyticsDatasetLateDataRulesOutputReference {
    return new DataAwsccIotanalyticsDatasetLateDataRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotanalyticsDatasetRetentionPeriod {
}

export function dataAwsccIotanalyticsDatasetRetentionPeriodToTerraform(struct?: DataAwsccIotanalyticsDatasetRetentionPeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatasetRetentionPeriodToHclTerraform(struct?: DataAwsccIotanalyticsDatasetRetentionPeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsDatasetRetentionPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatasetRetentionPeriod | undefined) {
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
export interface DataAwsccIotanalyticsDatasetTags {
}

export function dataAwsccIotanalyticsDatasetTagsToTerraform(struct?: DataAwsccIotanalyticsDatasetTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatasetTagsToHclTerraform(struct?: DataAwsccIotanalyticsDatasetTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatasetTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotanalyticsDatasetTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatasetTags | undefined) {
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

export class DataAwsccIotanalyticsDatasetTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotanalyticsDatasetTagsOutputReference {
    return new DataAwsccIotanalyticsDatasetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotanalyticsDatasetTriggersSchedule {
}

export function dataAwsccIotanalyticsDatasetTriggersScheduleToTerraform(struct?: DataAwsccIotanalyticsDatasetTriggersSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatasetTriggersScheduleToHclTerraform(struct?: DataAwsccIotanalyticsDatasetTriggersSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsDatasetTriggersSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatasetTriggersSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // schedule_expression - computed: true, optional: false, required: false
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
}
export interface DataAwsccIotanalyticsDatasetTriggersTriggeringDataset {
}

export function dataAwsccIotanalyticsDatasetTriggersTriggeringDatasetToTerraform(struct?: DataAwsccIotanalyticsDatasetTriggersTriggeringDataset): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatasetTriggersTriggeringDatasetToHclTerraform(struct?: DataAwsccIotanalyticsDatasetTriggersTriggeringDataset): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsDatasetTriggersTriggeringDataset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatasetTriggersTriggeringDataset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dataset_name - computed: true, optional: false, required: false
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }
}
export interface DataAwsccIotanalyticsDatasetTriggers {
}

export function dataAwsccIotanalyticsDatasetTriggersToTerraform(struct?: DataAwsccIotanalyticsDatasetTriggers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatasetTriggersToHclTerraform(struct?: DataAwsccIotanalyticsDatasetTriggers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatasetTriggersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotanalyticsDatasetTriggers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatasetTriggers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }

  // triggering_dataset - computed: true, optional: false, required: false
  private _triggeringDataset = new DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference(this, "triggering_dataset");
  public get triggeringDataset() {
    return this._triggeringDataset;
  }
}

export class DataAwsccIotanalyticsDatasetTriggersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotanalyticsDatasetTriggersOutputReference {
    return new DataAwsccIotanalyticsDatasetTriggersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotanalyticsDatasetVersioningConfiguration {
}

export function dataAwsccIotanalyticsDatasetVersioningConfigurationToTerraform(struct?: DataAwsccIotanalyticsDatasetVersioningConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsDatasetVersioningConfigurationToHclTerraform(struct?: DataAwsccIotanalyticsDatasetVersioningConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsDatasetVersioningConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsDatasetVersioningConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_versions - computed: true, optional: false, required: false
  public get maxVersions() {
    return this.getNumberAttribute('max_versions');
  }

  // unlimited - computed: true, optional: false, required: false
  public get unlimited() {
    return this.getBooleanAttribute('unlimited');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/iotanalytics_dataset awscc_iotanalytics_dataset}
*/
export class DataAwsccIotanalyticsDataset extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iotanalytics_dataset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccIotanalyticsDataset resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccIotanalyticsDataset to import
  * @param importFromId The id of the existing DataAwsccIotanalyticsDataset that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/iotanalytics_dataset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccIotanalyticsDataset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotanalytics_dataset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/iotanalytics_dataset awscc_iotanalytics_dataset} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotanalyticsDatasetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotanalyticsDatasetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotanalytics_dataset',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.93.0'
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

  // actions - computed: true, optional: false, required: false
  private _actions = new DataAwsccIotanalyticsDatasetActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // content_delivery_rules - computed: true, optional: false, required: false
  private _contentDeliveryRules = new DataAwsccIotanalyticsDatasetContentDeliveryRulesList(this, "content_delivery_rules", false);
  public get contentDeliveryRules() {
    return this._contentDeliveryRules;
  }

  // dataset_id - computed: true, optional: false, required: false
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }

  // dataset_name - computed: true, optional: false, required: false
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
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

  // late_data_rules - computed: true, optional: false, required: false
  private _lateDataRules = new DataAwsccIotanalyticsDatasetLateDataRulesList(this, "late_data_rules", false);
  public get lateDataRules() {
    return this._lateDataRules;
  }

  // retention_period - computed: true, optional: false, required: false
  private _retentionPeriod = new DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference(this, "retention_period");
  public get retentionPeriod() {
    return this._retentionPeriod;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccIotanalyticsDatasetTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // triggers - computed: true, optional: false, required: false
  private _triggers = new DataAwsccIotanalyticsDatasetTriggersList(this, "triggers", false);
  public get triggers() {
    return this._triggers;
  }

  // versioning_configuration - computed: true, optional: false, required: false
  private _versioningConfiguration = new DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference(this, "versioning_configuration");
  public get versioningConfiguration() {
    return this._versioningConfiguration;
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
