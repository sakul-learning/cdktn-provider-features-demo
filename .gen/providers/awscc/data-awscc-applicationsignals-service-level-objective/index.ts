// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/applicationsignals_service_level_objective
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccApplicationsignalsServiceLevelObjectiveConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/applicationsignals_service_level_objective#id DataAwsccApplicationsignalsServiceLevelObjective#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveBurnRateConfigurations {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveBurnRateConfigurationsToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveBurnRateConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveBurnRateConfigurationsToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveBurnRateConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveBurnRateConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveBurnRateConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveBurnRateConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // look_back_window_minutes - computed: true, optional: false, required: false
  public get lookBackWindowMinutes() {
    return this.getNumberAttribute('look_back_window_minutes');
  }
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveBurnRateConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationsignalsServiceLevelObjectiveBurnRateConfigurationsOutputReference {
    return new DataAwsccApplicationsignalsServiceLevelObjectiveBurnRateConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveExclusionWindowsRecurrenceRule {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveExclusionWindowsRecurrenceRuleToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveExclusionWindowsRecurrenceRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveExclusionWindowsRecurrenceRuleToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveExclusionWindowsRecurrenceRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveExclusionWindowsRecurrenceRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveExclusionWindowsRecurrenceRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveExclusionWindowsRecurrenceRule | undefined) {
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
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveExclusionWindowsWindow {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveExclusionWindowsWindowToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveExclusionWindowsWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveExclusionWindowsWindowToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveExclusionWindowsWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveExclusionWindowsWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveExclusionWindowsWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveExclusionWindowsWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // duration_unit - computed: true, optional: false, required: false
  public get durationUnit() {
    return this.getStringAttribute('duration_unit');
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveExclusionWindows {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveExclusionWindowsToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveExclusionWindows): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveExclusionWindowsToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveExclusionWindows): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveExclusionWindowsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveExclusionWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveExclusionWindows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // recurrence_rule - computed: true, optional: false, required: false
  private _recurrenceRule = new DataAwsccApplicationsignalsServiceLevelObjectiveExclusionWindowsRecurrenceRuleOutputReference(this, "recurrence_rule");
  public get recurrenceRule() {
    return this._recurrenceRule;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // window - computed: true, optional: false, required: false
  private _window = new DataAwsccApplicationsignalsServiceLevelObjectiveExclusionWindowsWindowOutputReference(this, "window");
  public get window() {
    return this._window;
  }
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveExclusionWindowsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationsignalsServiceLevelObjectiveExclusionWindowsOutputReference {
    return new DataAwsccApplicationsignalsServiceLevelObjectiveExclusionWindowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveGoalIntervalCalendarInterval {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveGoalIntervalCalendarIntervalToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveGoalIntervalCalendarInterval): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveGoalIntervalCalendarIntervalToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveGoalIntervalCalendarInterval): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveGoalIntervalCalendarIntervalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveGoalIntervalCalendarInterval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveGoalIntervalCalendarInterval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // duration_unit - computed: true, optional: false, required: false
  public get durationUnit() {
    return this.getStringAttribute('duration_unit');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveGoalIntervalRollingInterval {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveGoalIntervalRollingIntervalToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveGoalIntervalRollingInterval): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveGoalIntervalRollingIntervalToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveGoalIntervalRollingInterval): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveGoalIntervalRollingIntervalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveGoalIntervalRollingInterval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveGoalIntervalRollingInterval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // duration_unit - computed: true, optional: false, required: false
  public get durationUnit() {
    return this.getStringAttribute('duration_unit');
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveGoalInterval {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveGoalIntervalToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveGoalInterval): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveGoalIntervalToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveGoalInterval): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveGoalIntervalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveGoalInterval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveGoalInterval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // calendar_interval - computed: true, optional: false, required: false
  private _calendarInterval = new DataAwsccApplicationsignalsServiceLevelObjectiveGoalIntervalCalendarIntervalOutputReference(this, "calendar_interval");
  public get calendarInterval() {
    return this._calendarInterval;
  }

  // rolling_interval - computed: true, optional: false, required: false
  private _rollingInterval = new DataAwsccApplicationsignalsServiceLevelObjectiveGoalIntervalRollingIntervalOutputReference(this, "rolling_interval");
  public get rollingInterval() {
    return this._rollingInterval;
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveGoal {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveGoalToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveGoal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveGoalToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveGoal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveGoalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveGoal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveGoal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attainment_goal - computed: true, optional: false, required: false
  public get attainmentGoal() {
    return this.getNumberAttribute('attainment_goal');
  }

  // interval - computed: true, optional: false, required: false
  private _interval = new DataAwsccApplicationsignalsServiceLevelObjectiveGoalIntervalOutputReference(this, "interval");
  public get interval() {
    return this._interval;
  }

  // warning_threshold - computed: true, optional: false, required: false
  public get warningThreshold() {
    return this.getNumberAttribute('warning_threshold');
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigCompositeSliComponents {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigCompositeSliComponentsToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigCompositeSliComponents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigCompositeSliComponentsToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigCompositeSliComponents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigCompositeSliComponentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigCompositeSliComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigCompositeSliComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operation_name - computed: true, optional: false, required: false
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigCompositeSliComponentsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigCompositeSliComponentsOutputReference {
    return new DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigCompositeSliComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigSelectionConfig {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigSelectionConfigToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigSelectionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigSelectionConfigToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigSelectionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigSelectionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigSelectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigSelectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfig {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // composite_sli_components - computed: true, optional: false, required: false
  private _compositeSliComponents = new DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigCompositeSliComponentsList(this, "composite_sli_components", false);
  public get compositeSliComponents() {
    return this._compositeSliComponents;
  }

  // selection_config - computed: true, optional: false, required: false
  private _selectionConfig = new DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigSelectionConfigOutputReference(this, "selection_config");
  public get selectionConfig() {
    return this._selectionConfig;
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricDependencyConfig {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricDependencyConfigToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricDependencyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricDependencyConfigToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricDependencyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricDependencyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricDependencyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricDependencyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dependency_key_attributes - computed: true, optional: false, required: false
  private _dependencyKeyAttributes = new cdktn.StringMap(this, "dependency_key_attributes");
  public get dependencyKeyAttributes() {
    return this._dependencyKeyAttributes;
  }

  // dependency_operation_name - computed: true, optional: false, required: false
  public get dependencyOperationName() {
    return this.getStringAttribute('dependency_operation_name');
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMetricSource {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMetricSourceToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMetricSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMetricSourceToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMetricSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMetricSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMetricSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMetricSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric_source_attributes - computed: true, optional: false, required: false
  private _metricSourceAttributes = new cdktn.StringMap(this, "metric_source_attributes");
  public get metricSourceAttributes() {
    return this._metricSourceAttributes;
  }

  // metric_source_key_attributes - computed: true, optional: false, required: false
  private _metricSourceKeyAttributes = new cdktn.StringMap(this, "metric_source_key_attributes");
  public get metricSourceKeyAttributes() {
    return this._metricSourceKeyAttributes;
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricDimensions {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricDimensionsToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricDimensionsToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricDimensions | undefined) {
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

export class DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricDimensionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricDimensionsOutputReference {
    return new DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetric {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStat {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric - computed: true, optional: false, required: false
  private _metric = new DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getNumberAttribute('period');
  }

  // stat - computed: true, optional: false, required: false
  public get stat() {
    return this.getStringAttribute('stat');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetric {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metric_stat - computed: true, optional: false, required: false
  private _metricStat = new DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatOutputReference(this, "metric_stat");
  public get metricStat() {
    return this._metricStat;
  }

  // return_data - computed: true, optional: false, required: false
  public get returnData() {
    return this.getBooleanAttribute('return_data');
  }
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricOutputReference {
    return new DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensions {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensions | undefined) {
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

export class DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsOutputReference {
    return new DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetric {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStat {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric - computed: true, optional: false, required: false
  private _metric = new DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getNumberAttribute('period');
  }

  // stat - computed: true, optional: false, required: false
  public get stat() {
    return this.getStringAttribute('stat');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetric {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metric_stat - computed: true, optional: false, required: false
  private _metricStat = new DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatOutputReference(this, "metric_stat");
  public get metricStat() {
    return this._metricStat;
  }

  // return_data - computed: true, optional: false, required: false
  public get returnData() {
    return this.getBooleanAttribute('return_data');
  }
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricOutputReference {
    return new DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetric {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bad_count_metric - computed: true, optional: false, required: false
  private _badCountMetric = new DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricList(this, "bad_count_metric", false);
  public get badCountMetric() {
    return this._badCountMetric;
  }

  // good_count_metric - computed: true, optional: false, required: false
  private _goodCountMetric = new DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricList(this, "good_count_metric", false);
  public get goodCountMetric() {
    return this._goodCountMetric;
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensions {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensions | undefined) {
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

export class DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsOutputReference {
    return new DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetric {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStat {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric - computed: true, optional: false, required: false
  private _metric = new DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getNumberAttribute('period');
  }

  // stat - computed: true, optional: false, required: false
  public get stat() {
    return this.getStringAttribute('stat');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetric {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metric_stat - computed: true, optional: false, required: false
  private _metricStat = new DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatOutputReference(this, "metric_stat");
  public get metricStat() {
    return this._metricStat;
  }

  // return_data - computed: true, optional: false, required: false
  public get returnData() {
    return this.getBooleanAttribute('return_data');
  }
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricOutputReference {
    return new DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetric {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // composite_sli_config - computed: true, optional: false, required: false
  private _compositeSliConfig = new DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigOutputReference(this, "composite_sli_config");
  public get compositeSliConfig() {
    return this._compositeSliConfig;
  }

  // dependency_config - computed: true, optional: false, required: false
  private _dependencyConfig = new DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricDependencyConfigOutputReference(this, "dependency_config");
  public get dependencyConfig() {
    return this._dependencyConfig;
  }

  // key_attributes - computed: true, optional: false, required: false
  private _keyAttributes = new cdktn.StringMap(this, "key_attributes");
  public get keyAttributes() {
    return this._keyAttributes;
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // metric_source - computed: true, optional: false, required: false
  private _metricSource = new DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMetricSourceOutputReference(this, "metric_source");
  public get metricSource() {
    return this._metricSource;
  }

  // metric_type - computed: true, optional: false, required: false
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }

  // monitored_request_count_metric - computed: true, optional: false, required: false
  private _monitoredRequestCountMetric = new DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricOutputReference(this, "monitored_request_count_metric");
  public get monitoredRequestCountMetric() {
    return this._monitoredRequestCountMetric;
  }

  // operation_name - computed: true, optional: false, required: false
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }

  // total_request_count_metric - computed: true, optional: false, required: false
  private _totalRequestCountMetric = new DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricList(this, "total_request_count_metric", false);
  public get totalRequestCountMetric() {
    return this._totalRequestCountMetric;
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSli {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSli): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSli): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSli | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSli | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison_operator - computed: true, optional: false, required: false
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }

  // metric_threshold - computed: true, optional: false, required: false
  public get metricThreshold() {
    return this.getNumberAttribute('metric_threshold');
  }

  // request_based_sli_metric - computed: true, optional: false, required: false
  private _requestBasedSliMetric = new DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricOutputReference(this, "request_based_sli_metric");
  public get requestBasedSliMetric() {
    return this._requestBasedSliMetric;
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigCompositeSliComponents {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigCompositeSliComponentsToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigCompositeSliComponents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigCompositeSliComponentsToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigCompositeSliComponents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigCompositeSliComponentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigCompositeSliComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigCompositeSliComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operation_name - computed: true, optional: false, required: false
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigCompositeSliComponentsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigCompositeSliComponentsOutputReference {
    return new DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigCompositeSliComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigSelectionConfig {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigSelectionConfigToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigSelectionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigSelectionConfigToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigSelectionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigSelectionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigSelectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigSelectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfig {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // composite_sli_components - computed: true, optional: false, required: false
  private _compositeSliComponents = new DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigCompositeSliComponentsList(this, "composite_sli_components", false);
  public get compositeSliComponents() {
    return this._compositeSliComponents;
  }

  // selection_config - computed: true, optional: false, required: false
  private _selectionConfig = new DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigSelectionConfigOutputReference(this, "selection_config");
  public get selectionConfig() {
    return this._selectionConfig;
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricDependencyConfig {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricDependencyConfigToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricDependencyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricDependencyConfigToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricDependencyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricDependencyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricDependencyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricDependencyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dependency_key_attributes - computed: true, optional: false, required: false
  private _dependencyKeyAttributes = new cdktn.StringMap(this, "dependency_key_attributes");
  public get dependencyKeyAttributes() {
    return this._dependencyKeyAttributes;
  }

  // dependency_operation_name - computed: true, optional: false, required: false
  public get dependencyOperationName() {
    return this.getStringAttribute('dependency_operation_name');
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensions {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensionsToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensionsToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensions | undefined) {
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

export class DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensionsOutputReference {
    return new DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetric {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStat {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric - computed: true, optional: false, required: false
  private _metric = new DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getNumberAttribute('period');
  }

  // stat - computed: true, optional: false, required: false
  public get stat() {
    return this.getStringAttribute('stat');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueries {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueries): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueries): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metric_stat - computed: true, optional: false, required: false
  private _metricStat = new DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatOutputReference(this, "metric_stat");
  public get metricStat() {
    return this._metricStat;
  }

  // return_data - computed: true, optional: false, required: false
  public get returnData() {
    return this.getBooleanAttribute('return_data');
  }
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesOutputReference {
    return new DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricSource {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricSourceToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricSourceToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric_source_attributes - computed: true, optional: false, required: false
  private _metricSourceAttributes = new cdktn.StringMap(this, "metric_source_attributes");
  public get metricSourceAttributes() {
    return this._metricSourceAttributes;
  }

  // metric_source_key_attributes - computed: true, optional: false, required: false
  private _metricSourceKeyAttributes = new cdktn.StringMap(this, "metric_source_key_attributes");
  public get metricSourceKeyAttributes() {
    return this._metricSourceKeyAttributes;
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetric {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // composite_sli_config - computed: true, optional: false, required: false
  private _compositeSliConfig = new DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigOutputReference(this, "composite_sli_config");
  public get compositeSliConfig() {
    return this._compositeSliConfig;
  }

  // dependency_config - computed: true, optional: false, required: false
  private _dependencyConfig = new DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricDependencyConfigOutputReference(this, "dependency_config");
  public get dependencyConfig() {
    return this._dependencyConfig;
  }

  // key_attributes - computed: true, optional: false, required: false
  private _keyAttributes = new cdktn.StringMap(this, "key_attributes");
  public get keyAttributes() {
    return this._keyAttributes;
  }

  // metric_data_queries - computed: true, optional: false, required: false
  private _metricDataQueries = new DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesList(this, "metric_data_queries", false);
  public get metricDataQueries() {
    return this._metricDataQueries;
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // metric_source - computed: true, optional: false, required: false
  private _metricSource = new DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricMetricSourceOutputReference(this, "metric_source");
  public get metricSource() {
    return this._metricSource;
  }

  // metric_type - computed: true, optional: false, required: false
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }

  // operation_name - computed: true, optional: false, required: false
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }

  // period_seconds - computed: true, optional: false, required: false
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // statistic - computed: true, optional: false, required: false
  public get statistic() {
    return this.getStringAttribute('statistic');
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveSli {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveSliToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveSli): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveSliToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveSli): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveSliOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveSli | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveSli | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison_operator - computed: true, optional: false, required: false
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }

  // metric_threshold - computed: true, optional: false, required: false
  public get metricThreshold() {
    return this.getNumberAttribute('metric_threshold');
  }

  // sli_metric - computed: true, optional: false, required: false
  private _sliMetric = new DataAwsccApplicationsignalsServiceLevelObjectiveSliSliMetricOutputReference(this, "sli_metric");
  public get sliMetric() {
    return this._sliMetric;
  }
}
export interface DataAwsccApplicationsignalsServiceLevelObjectiveTags {
}

export function dataAwsccApplicationsignalsServiceLevelObjectiveTagsToTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationsignalsServiceLevelObjectiveTagsToHclTerraform(struct?: DataAwsccApplicationsignalsServiceLevelObjectiveTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationsignalsServiceLevelObjectiveTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationsignalsServiceLevelObjectiveTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationsignalsServiceLevelObjectiveTags | undefined) {
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

export class DataAwsccApplicationsignalsServiceLevelObjectiveTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationsignalsServiceLevelObjectiveTagsOutputReference {
    return new DataAwsccApplicationsignalsServiceLevelObjectiveTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/applicationsignals_service_level_objective awscc_applicationsignals_service_level_objective}
*/
export class DataAwsccApplicationsignalsServiceLevelObjective extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_applicationsignals_service_level_objective";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccApplicationsignalsServiceLevelObjective resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccApplicationsignalsServiceLevelObjective to import
  * @param importFromId The id of the existing DataAwsccApplicationsignalsServiceLevelObjective that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/applicationsignals_service_level_objective#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccApplicationsignalsServiceLevelObjective to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_applicationsignals_service_level_objective", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/applicationsignals_service_level_objective awscc_applicationsignals_service_level_objective} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccApplicationsignalsServiceLevelObjectiveConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccApplicationsignalsServiceLevelObjectiveConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_applicationsignals_service_level_objective',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // burn_rate_configurations - computed: true, optional: false, required: false
  private _burnRateConfigurations = new DataAwsccApplicationsignalsServiceLevelObjectiveBurnRateConfigurationsList(this, "burn_rate_configurations", true);
  public get burnRateConfigurations() {
    return this._burnRateConfigurations;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getNumberAttribute('created_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // evaluation_type - computed: true, optional: false, required: false
  public get evaluationType() {
    return this.getStringAttribute('evaluation_type');
  }

  // exclusion_windows - computed: true, optional: false, required: false
  private _exclusionWindows = new DataAwsccApplicationsignalsServiceLevelObjectiveExclusionWindowsList(this, "exclusion_windows", true);
  public get exclusionWindows() {
    return this._exclusionWindows;
  }

  // goal - computed: true, optional: false, required: false
  private _goal = new DataAwsccApplicationsignalsServiceLevelObjectiveGoalOutputReference(this, "goal");
  public get goal() {
    return this._goal;
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

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getNumberAttribute('last_updated_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // request_based_sli - computed: true, optional: false, required: false
  private _requestBasedSli = new DataAwsccApplicationsignalsServiceLevelObjectiveRequestBasedSliOutputReference(this, "request_based_sli");
  public get requestBasedSli() {
    return this._requestBasedSli;
  }

  // sli - computed: true, optional: false, required: false
  private _sli = new DataAwsccApplicationsignalsServiceLevelObjectiveSliOutputReference(this, "sli");
  public get sli() {
    return this._sli;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccApplicationsignalsServiceLevelObjectiveTagsList(this, "tags", true);
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
