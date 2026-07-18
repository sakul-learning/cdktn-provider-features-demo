// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ApplicationsignalsServiceLevelObjectiveConfig extends cdktn.TerraformMetaArguments {
  /**
  * Each object in this array defines the length of the look-back window used to calculate one burn rate metric for this SLO. The burn rate measures how fast the service is consuming the error budget, relative to the attainment goal of the SLO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#burn_rate_configurations ApplicationsignalsServiceLevelObjective#burn_rate_configurations}
  */
  readonly burnRateConfigurations?: ApplicationsignalsServiceLevelObjectiveBurnRateConfigurations[] | cdktn.IResolvable;
  /**
  * An optional description for this SLO. Default is 'No description'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#description ApplicationsignalsServiceLevelObjective#description}
  */
  readonly description?: string;
  /**
  * Each object in this array defines a time exclusion window for this SLO. The time exclusion window is used to exclude breaching data points from affecting attainment rate, error budget, and burn rate metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#exclusion_windows ApplicationsignalsServiceLevelObjective#exclusion_windows}
  */
  readonly exclusionWindows?: ApplicationsignalsServiceLevelObjectiveExclusionWindows[] | cdktn.IResolvable;
  /**
  * A structure that contains the attributes that determine the goal of the SLO. This includes the time period for evaluation and the attainment threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#goal ApplicationsignalsServiceLevelObjective#goal}
  */
  readonly goal?: ApplicationsignalsServiceLevelObjectiveGoal;
  /**
  * The name of this SLO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#name ApplicationsignalsServiceLevelObjective#name}
  */
  readonly name: string;
  /**
  * This structure contains information about the performance metric that a request-based SLO monitors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#request_based_sli ApplicationsignalsServiceLevelObjective#request_based_sli}
  */
  readonly requestBasedSli?: ApplicationsignalsServiceLevelObjectiveRequestBasedSli;
  /**
  * This structure contains information about the performance metric that an SLO monitors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#sli ApplicationsignalsServiceLevelObjective#sli}
  */
  readonly sli?: ApplicationsignalsServiceLevelObjectiveSli;
  /**
  * The list of tag keys and values associated with the resource you specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#tags ApplicationsignalsServiceLevelObjective#tags}
  */
  readonly tags?: ApplicationsignalsServiceLevelObjectiveTags[] | cdktn.IResolvable;
}
export interface ApplicationsignalsServiceLevelObjectiveBurnRateConfigurations {
  /**
  * The number of minutes to use as the look-back window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#look_back_window_minutes ApplicationsignalsServiceLevelObjective#look_back_window_minutes}
  */
  readonly lookBackWindowMinutes?: number;
}

export function applicationsignalsServiceLevelObjectiveBurnRateConfigurationsToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveBurnRateConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    look_back_window_minutes: cdktn.numberToTerraform(struct!.lookBackWindowMinutes),
  }
}


export function applicationsignalsServiceLevelObjectiveBurnRateConfigurationsToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveBurnRateConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    look_back_window_minutes: {
      value: cdktn.numberToHclTerraform(struct!.lookBackWindowMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveBurnRateConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveBurnRateConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lookBackWindowMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookBackWindowMinutes = this._lookBackWindowMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveBurnRateConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lookBackWindowMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lookBackWindowMinutes = value.lookBackWindowMinutes;
    }
  }

  // look_back_window_minutes - computed: true, optional: true, required: false
  private _lookBackWindowMinutes?: number; 
  public get lookBackWindowMinutes() {
    return this.getNumberAttribute('look_back_window_minutes');
  }
  public set lookBackWindowMinutes(value: number) {
    this._lookBackWindowMinutes = value;
  }
  public resetLookBackWindowMinutes() {
    this._lookBackWindowMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookBackWindowMinutesInput() {
    return this._lookBackWindowMinutes;
  }
}

export class ApplicationsignalsServiceLevelObjectiveBurnRateConfigurationsList extends cdktn.ComplexList {
  public internalValue? : ApplicationsignalsServiceLevelObjectiveBurnRateConfigurations[] | cdktn.IResolvable

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
  public get(index: number): ApplicationsignalsServiceLevelObjectiveBurnRateConfigurationsOutputReference {
    return new ApplicationsignalsServiceLevelObjectiveBurnRateConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationsignalsServiceLevelObjectiveExclusionWindowsRecurrenceRule {
  /**
  * A cron or rate expression denoting how often to repeat this exclusion window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#expression ApplicationsignalsServiceLevelObjective#expression}
  */
  readonly expression?: string;
}

export function applicationsignalsServiceLevelObjectiveExclusionWindowsRecurrenceRuleToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveExclusionWindowsRecurrenceRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
  }
}


export function applicationsignalsServiceLevelObjectiveExclusionWindowsRecurrenceRuleToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveExclusionWindowsRecurrenceRule | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveExclusionWindowsRecurrenceRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveExclusionWindowsRecurrenceRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveExclusionWindowsRecurrenceRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
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
}
export interface ApplicationsignalsServiceLevelObjectiveExclusionWindowsWindow {
  /**
  * Specifies the duration of each interval. For example, if `Duration` is 1 and `DurationUnit` is `MONTH`, each interval is one month, aligned with the calendar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#duration ApplicationsignalsServiceLevelObjective#duration}
  */
  readonly duration?: number;
  /**
  * Specifies the interval unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#duration_unit ApplicationsignalsServiceLevelObjective#duration_unit}
  */
  readonly durationUnit?: string;
}

export function applicationsignalsServiceLevelObjectiveExclusionWindowsWindowToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveExclusionWindowsWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration: cdktn.numberToTerraform(struct!.duration),
    duration_unit: cdktn.stringToTerraform(struct!.durationUnit),
  }
}


export function applicationsignalsServiceLevelObjectiveExclusionWindowsWindowToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveExclusionWindowsWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration: {
      value: cdktn.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duration_unit: {
      value: cdktn.stringToHclTerraform(struct!.durationUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveExclusionWindowsWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveExclusionWindowsWindow | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._durationUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationUnit = this._durationUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveExclusionWindowsWindow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._durationUnit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._durationUnit = value.durationUnit;
    }
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // duration_unit - computed: true, optional: true, required: false
  private _durationUnit?: string; 
  public get durationUnit() {
    return this.getStringAttribute('duration_unit');
  }
  public set durationUnit(value: string) {
    this._durationUnit = value;
  }
  public resetDurationUnit() {
    this._durationUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationUnitInput() {
    return this._durationUnit;
  }
}
export interface ApplicationsignalsServiceLevelObjectiveExclusionWindows {
  /**
  * An optional reason for scheduling this time exclusion window. Default is 'No reason'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#reason ApplicationsignalsServiceLevelObjective#reason}
  */
  readonly reason?: string;
  /**
  * This object defines how often to repeat a time exclusion window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#recurrence_rule ApplicationsignalsServiceLevelObjective#recurrence_rule}
  */
  readonly recurrenceRule?: ApplicationsignalsServiceLevelObjectiveExclusionWindowsRecurrenceRule;
  /**
  * The time you want the exclusion window to start at. Note that time exclusion windows can only be scheduled in the future, not the past.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#start_time ApplicationsignalsServiceLevelObjective#start_time}
  */
  readonly startTime?: string;
  /**
  * This object defines the length of time an exclusion window should span.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#window ApplicationsignalsServiceLevelObjective#window}
  */
  readonly window?: ApplicationsignalsServiceLevelObjectiveExclusionWindowsWindow;
}

export function applicationsignalsServiceLevelObjectiveExclusionWindowsToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveExclusionWindows | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    reason: cdktn.stringToTerraform(struct!.reason),
    recurrence_rule: applicationsignalsServiceLevelObjectiveExclusionWindowsRecurrenceRuleToTerraform(struct!.recurrenceRule),
    start_time: cdktn.stringToTerraform(struct!.startTime),
    window: applicationsignalsServiceLevelObjectiveExclusionWindowsWindowToTerraform(struct!.window),
  }
}


export function applicationsignalsServiceLevelObjectiveExclusionWindowsToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveExclusionWindows | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    reason: {
      value: cdktn.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurrence_rule: {
      value: applicationsignalsServiceLevelObjectiveExclusionWindowsRecurrenceRuleToHclTerraform(struct!.recurrenceRule),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveExclusionWindowsRecurrenceRule",
    },
    start_time: {
      value: cdktn.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window: {
      value: applicationsignalsServiceLevelObjectiveExclusionWindowsWindowToHclTerraform(struct!.window),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveExclusionWindowsWindow",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveExclusionWindowsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveExclusionWindows | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._recurrenceRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrenceRule = this._recurrenceRule?.internalValue;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._window?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveExclusionWindows | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reason = undefined;
      this._recurrenceRule.internalValue = undefined;
      this._startTime = undefined;
      this._window.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reason = value.reason;
      this._recurrenceRule.internalValue = value.recurrenceRule;
      this._startTime = value.startTime;
      this._window.internalValue = value.window;
    }
  }

  // reason - computed: true, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // recurrence_rule - computed: true, optional: true, required: false
  private _recurrenceRule = new ApplicationsignalsServiceLevelObjectiveExclusionWindowsRecurrenceRuleOutputReference(this, "recurrence_rule");
  public get recurrenceRule() {
    return this._recurrenceRule;
  }
  public putRecurrenceRule(value: ApplicationsignalsServiceLevelObjectiveExclusionWindowsRecurrenceRule) {
    this._recurrenceRule.internalValue = value;
  }
  public resetRecurrenceRule() {
    this._recurrenceRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceRuleInput() {
    return this._recurrenceRule.internalValue;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // window - computed: true, optional: true, required: false
  private _window = new ApplicationsignalsServiceLevelObjectiveExclusionWindowsWindowOutputReference(this, "window");
  public get window() {
    return this._window;
  }
  public putWindow(value: ApplicationsignalsServiceLevelObjectiveExclusionWindowsWindow) {
    this._window.internalValue = value;
  }
  public resetWindow() {
    this._window.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window.internalValue;
  }
}

export class ApplicationsignalsServiceLevelObjectiveExclusionWindowsList extends cdktn.ComplexList {
  public internalValue? : ApplicationsignalsServiceLevelObjectiveExclusionWindows[] | cdktn.IResolvable

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
  public get(index: number): ApplicationsignalsServiceLevelObjectiveExclusionWindowsOutputReference {
    return new ApplicationsignalsServiceLevelObjectiveExclusionWindowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationsignalsServiceLevelObjectiveGoalIntervalCalendarInterval {
  /**
  * Specifies the duration of each interval. For example, if `Duration` is 1 and `DurationUnit` is `MONTH`, each interval is one month, aligned with the calendar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#duration ApplicationsignalsServiceLevelObjective#duration}
  */
  readonly duration?: number;
  /**
  * Specifies the interval unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#duration_unit ApplicationsignalsServiceLevelObjective#duration_unit}
  */
  readonly durationUnit?: string;
  /**
  * Epoch time in seconds you want the first interval to start. Be sure to choose a time that configures the intervals the way that you want. For example, if you want weekly intervals starting on Mondays at 6 a.m., be sure to specify a start time that is a Monday at 6 a.m.
  * As soon as one calendar interval ends, another automatically begins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#start_time ApplicationsignalsServiceLevelObjective#start_time}
  */
  readonly startTime?: number;
}

export function applicationsignalsServiceLevelObjectiveGoalIntervalCalendarIntervalToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveGoalIntervalCalendarInterval | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration: cdktn.numberToTerraform(struct!.duration),
    duration_unit: cdktn.stringToTerraform(struct!.durationUnit),
    start_time: cdktn.numberToTerraform(struct!.startTime),
  }
}


export function applicationsignalsServiceLevelObjectiveGoalIntervalCalendarIntervalToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveGoalIntervalCalendarInterval | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration: {
      value: cdktn.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duration_unit: {
      value: cdktn.stringToHclTerraform(struct!.durationUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktn.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveGoalIntervalCalendarIntervalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveGoalIntervalCalendarInterval | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._durationUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationUnit = this._durationUnit;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveGoalIntervalCalendarInterval | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._durationUnit = undefined;
      this._startTime = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._durationUnit = value.durationUnit;
      this._startTime = value.startTime;
    }
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // duration_unit - computed: true, optional: true, required: false
  private _durationUnit?: string; 
  public get durationUnit() {
    return this.getStringAttribute('duration_unit');
  }
  public set durationUnit(value: string) {
    this._durationUnit = value;
  }
  public resetDurationUnit() {
    this._durationUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationUnitInput() {
    return this._durationUnit;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface ApplicationsignalsServiceLevelObjectiveGoalIntervalRollingInterval {
  /**
  * Specifies the duration of each interval. For example, if `Duration` is 1 and `DurationUnit` is `MONTH`, each interval is one month, aligned with the calendar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#duration ApplicationsignalsServiceLevelObjective#duration}
  */
  readonly duration?: number;
  /**
  * Specifies the interval unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#duration_unit ApplicationsignalsServiceLevelObjective#duration_unit}
  */
  readonly durationUnit?: string;
}

export function applicationsignalsServiceLevelObjectiveGoalIntervalRollingIntervalToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveGoalIntervalRollingInterval | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration: cdktn.numberToTerraform(struct!.duration),
    duration_unit: cdktn.stringToTerraform(struct!.durationUnit),
  }
}


export function applicationsignalsServiceLevelObjectiveGoalIntervalRollingIntervalToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveGoalIntervalRollingInterval | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration: {
      value: cdktn.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duration_unit: {
      value: cdktn.stringToHclTerraform(struct!.durationUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveGoalIntervalRollingIntervalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveGoalIntervalRollingInterval | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._durationUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationUnit = this._durationUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveGoalIntervalRollingInterval | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._durationUnit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._durationUnit = value.durationUnit;
    }
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // duration_unit - computed: true, optional: true, required: false
  private _durationUnit?: string; 
  public get durationUnit() {
    return this.getStringAttribute('duration_unit');
  }
  public set durationUnit(value: string) {
    this._durationUnit = value;
  }
  public resetDurationUnit() {
    this._durationUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationUnitInput() {
    return this._durationUnit;
  }
}
export interface ApplicationsignalsServiceLevelObjectiveGoalInterval {
  /**
  * If the interval for this service level objective is a calendar interval, this structure contains the interval specifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#calendar_interval ApplicationsignalsServiceLevelObjective#calendar_interval}
  */
  readonly calendarInterval?: ApplicationsignalsServiceLevelObjectiveGoalIntervalCalendarInterval;
  /**
  * If the interval is a calendar interval, this structure contains the interval specifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#rolling_interval ApplicationsignalsServiceLevelObjective#rolling_interval}
  */
  readonly rollingInterval?: ApplicationsignalsServiceLevelObjectiveGoalIntervalRollingInterval;
}

export function applicationsignalsServiceLevelObjectiveGoalIntervalToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveGoalInterval | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    calendar_interval: applicationsignalsServiceLevelObjectiveGoalIntervalCalendarIntervalToTerraform(struct!.calendarInterval),
    rolling_interval: applicationsignalsServiceLevelObjectiveGoalIntervalRollingIntervalToTerraform(struct!.rollingInterval),
  }
}


export function applicationsignalsServiceLevelObjectiveGoalIntervalToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveGoalInterval | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    calendar_interval: {
      value: applicationsignalsServiceLevelObjectiveGoalIntervalCalendarIntervalToHclTerraform(struct!.calendarInterval),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveGoalIntervalCalendarInterval",
    },
    rolling_interval: {
      value: applicationsignalsServiceLevelObjectiveGoalIntervalRollingIntervalToHclTerraform(struct!.rollingInterval),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveGoalIntervalRollingInterval",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveGoalIntervalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveGoalInterval | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calendarInterval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.calendarInterval = this._calendarInterval?.internalValue;
    }
    if (this._rollingInterval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingInterval = this._rollingInterval?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveGoalInterval | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._calendarInterval.internalValue = undefined;
      this._rollingInterval.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._calendarInterval.internalValue = value.calendarInterval;
      this._rollingInterval.internalValue = value.rollingInterval;
    }
  }

  // calendar_interval - computed: true, optional: true, required: false
  private _calendarInterval = new ApplicationsignalsServiceLevelObjectiveGoalIntervalCalendarIntervalOutputReference(this, "calendar_interval");
  public get calendarInterval() {
    return this._calendarInterval;
  }
  public putCalendarInterval(value: ApplicationsignalsServiceLevelObjectiveGoalIntervalCalendarInterval) {
    this._calendarInterval.internalValue = value;
  }
  public resetCalendarInterval() {
    this._calendarInterval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calendarIntervalInput() {
    return this._calendarInterval.internalValue;
  }

  // rolling_interval - computed: true, optional: true, required: false
  private _rollingInterval = new ApplicationsignalsServiceLevelObjectiveGoalIntervalRollingIntervalOutputReference(this, "rolling_interval");
  public get rollingInterval() {
    return this._rollingInterval;
  }
  public putRollingInterval(value: ApplicationsignalsServiceLevelObjectiveGoalIntervalRollingInterval) {
    this._rollingInterval.internalValue = value;
  }
  public resetRollingInterval() {
    this._rollingInterval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingIntervalInput() {
    return this._rollingInterval.internalValue;
  }
}
export interface ApplicationsignalsServiceLevelObjectiveGoal {
  /**
  * The threshold that determines if the goal is being met. An attainment goal is the ratio of good periods that meet the threshold requirements to the total periods within the interval. For example, an attainment goal of 99.9% means that within your interval, you are targeting 99.9% of the periods to be in healthy state.
  * If you omit this parameter, 99 is used to represent 99% as the attainment goal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#attainment_goal ApplicationsignalsServiceLevelObjective#attainment_goal}
  */
  readonly attainmentGoal?: number;
  /**
  * The time period used to evaluate the SLO. It can be either a calendar interval or rolling interval.
  * If you omit this parameter, a rolling interval of 7 days is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#interval ApplicationsignalsServiceLevelObjective#interval}
  */
  readonly interval?: ApplicationsignalsServiceLevelObjectiveGoalInterval;
  /**
  * The percentage of remaining budget over total budget that you want to get warnings for. If you omit this parameter, the default of 50.0 is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#warning_threshold ApplicationsignalsServiceLevelObjective#warning_threshold}
  */
  readonly warningThreshold?: number;
}

export function applicationsignalsServiceLevelObjectiveGoalToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveGoal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attainment_goal: cdktn.numberToTerraform(struct!.attainmentGoal),
    interval: applicationsignalsServiceLevelObjectiveGoalIntervalToTerraform(struct!.interval),
    warning_threshold: cdktn.numberToTerraform(struct!.warningThreshold),
  }
}


export function applicationsignalsServiceLevelObjectiveGoalToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveGoal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attainment_goal: {
      value: cdktn.numberToHclTerraform(struct!.attainmentGoal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: applicationsignalsServiceLevelObjectiveGoalIntervalToHclTerraform(struct!.interval),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveGoalInterval",
    },
    warning_threshold: {
      value: cdktn.numberToHclTerraform(struct!.warningThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveGoalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveGoal | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attainmentGoal !== undefined) {
      hasAnyValues = true;
      internalValueResult.attainmentGoal = this._attainmentGoal;
    }
    if (this._interval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval?.internalValue;
    }
    if (this._warningThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningThreshold = this._warningThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveGoal | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attainmentGoal = undefined;
      this._interval.internalValue = undefined;
      this._warningThreshold = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attainmentGoal = value.attainmentGoal;
      this._interval.internalValue = value.interval;
      this._warningThreshold = value.warningThreshold;
    }
  }

  // attainment_goal - computed: true, optional: true, required: false
  private _attainmentGoal?: number; 
  public get attainmentGoal() {
    return this.getNumberAttribute('attainment_goal');
  }
  public set attainmentGoal(value: number) {
    this._attainmentGoal = value;
  }
  public resetAttainmentGoal() {
    this._attainmentGoal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attainmentGoalInput() {
    return this._attainmentGoal;
  }

  // interval - computed: true, optional: true, required: false
  private _interval = new ApplicationsignalsServiceLevelObjectiveGoalIntervalOutputReference(this, "interval");
  public get interval() {
    return this._interval;
  }
  public putInterval(value: ApplicationsignalsServiceLevelObjectiveGoalInterval) {
    this._interval.internalValue = value;
  }
  public resetInterval() {
    this._interval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval.internalValue;
  }

  // warning_threshold - computed: true, optional: true, required: false
  private _warningThreshold?: number; 
  public get warningThreshold() {
    return this.getNumberAttribute('warning_threshold');
  }
  public set warningThreshold(value: number) {
    this._warningThreshold = value;
  }
  public resetWarningThreshold() {
    this._warningThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningThresholdInput() {
    return this._warningThreshold;
  }
}
export interface ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigCompositeSliComponents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#operation_name ApplicationsignalsServiceLevelObjective#operation_name}
  */
  readonly operationName?: string;
}

export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigCompositeSliComponentsToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigCompositeSliComponents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operation_name: cdktn.stringToTerraform(struct!.operationName),
  }
}


export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigCompositeSliComponentsToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigCompositeSliComponents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operation_name: {
      value: cdktn.stringToHclTerraform(struct!.operationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigCompositeSliComponentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigCompositeSliComponents | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationName = this._operationName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigCompositeSliComponents | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operationName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operationName = value.operationName;
    }
  }

  // operation_name - computed: true, optional: true, required: false
  private _operationName?: string; 
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }
  public set operationName(value: string) {
    this._operationName = value;
  }
  public resetOperationName() {
    this._operationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationNameInput() {
    return this._operationName;
  }
}

export class ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigCompositeSliComponentsList extends cdktn.ComplexList {
  public internalValue? : ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigCompositeSliComponents[] | cdktn.IResolvable

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
  public get(index: number): ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigCompositeSliComponentsOutputReference {
    return new ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigCompositeSliComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigSelectionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#pattern ApplicationsignalsServiceLevelObjective#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#type ApplicationsignalsServiceLevelObjective#type}
  */
  readonly type?: string;
}

export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigSelectionConfigToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigSelectionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pattern: cdktn.stringToTerraform(struct!.pattern),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigSelectionConfigToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigSelectionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pattern: {
      value: cdktn.stringToHclTerraform(struct!.pattern),
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

export class ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigSelectionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigSelectionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigSelectionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pattern = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pattern = value.pattern;
      this._type = value.type;
    }
  }

  // pattern - computed: true, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
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
export interface ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#composite_sli_components ApplicationsignalsServiceLevelObjective#composite_sli_components}
  */
  readonly compositeSliComponents?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigCompositeSliComponents[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#selection_config ApplicationsignalsServiceLevelObjective#selection_config}
  */
  readonly selectionConfig?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigSelectionConfig;
}

export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    composite_sli_components: cdktn.listMapper(applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigCompositeSliComponentsToTerraform, false)(struct!.compositeSliComponents),
    selection_config: applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigSelectionConfigToTerraform(struct!.selectionConfig),
  }
}


export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    composite_sli_components: {
      value: cdktn.listMapperHcl(applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigCompositeSliComponentsToHclTerraform, false)(struct!.compositeSliComponents),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigCompositeSliComponentsList",
    },
    selection_config: {
      value: applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigSelectionConfigToHclTerraform(struct!.selectionConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigSelectionConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compositeSliComponents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compositeSliComponents = this._compositeSliComponents?.internalValue;
    }
    if (this._selectionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionConfig = this._selectionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compositeSliComponents.internalValue = undefined;
      this._selectionConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compositeSliComponents.internalValue = value.compositeSliComponents;
      this._selectionConfig.internalValue = value.selectionConfig;
    }
  }

  // composite_sli_components - computed: true, optional: true, required: false
  private _compositeSliComponents = new ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigCompositeSliComponentsList(this, "composite_sli_components", false);
  public get compositeSliComponents() {
    return this._compositeSliComponents;
  }
  public putCompositeSliComponents(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigCompositeSliComponents[] | cdktn.IResolvable) {
    this._compositeSliComponents.internalValue = value;
  }
  public resetCompositeSliComponents() {
    this._compositeSliComponents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeSliComponentsInput() {
    return this._compositeSliComponents.internalValue;
  }

  // selection_config - computed: true, optional: true, required: false
  private _selectionConfig = new ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigSelectionConfigOutputReference(this, "selection_config");
  public get selectionConfig() {
    return this._selectionConfig;
  }
  public putSelectionConfig(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigSelectionConfig) {
    this._selectionConfig.internalValue = value;
  }
  public resetSelectionConfig() {
    this._selectionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionConfigInput() {
    return this._selectionConfig.internalValue;
  }
}
export interface ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricDependencyConfig {
  /**
  * If this SLO is related to a metric collected by Application Signals, you must use this field to specify which dependency the SLO metric is related to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#dependency_key_attributes ApplicationsignalsServiceLevelObjective#dependency_key_attributes}
  */
  readonly dependencyKeyAttributes?: { [key: string]: string };
  /**
  * When the SLO monitors a specific operation of the dependency, this field specifies the name of that operation in the dependency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#dependency_operation_name ApplicationsignalsServiceLevelObjective#dependency_operation_name}
  */
  readonly dependencyOperationName?: string;
}

export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricDependencyConfigToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricDependencyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dependency_key_attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.dependencyKeyAttributes),
    dependency_operation_name: cdktn.stringToTerraform(struct!.dependencyOperationName),
  }
}


export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricDependencyConfigToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricDependencyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dependency_key_attributes: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.dependencyKeyAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    dependency_operation_name: {
      value: cdktn.stringToHclTerraform(struct!.dependencyOperationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricDependencyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricDependencyConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependencyKeyAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencyKeyAttributes = this._dependencyKeyAttributes;
    }
    if (this._dependencyOperationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencyOperationName = this._dependencyOperationName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricDependencyConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dependencyKeyAttributes = undefined;
      this._dependencyOperationName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dependencyKeyAttributes = value.dependencyKeyAttributes;
      this._dependencyOperationName = value.dependencyOperationName;
    }
  }

  // dependency_key_attributes - computed: true, optional: true, required: false
  private _dependencyKeyAttributes?: { [key: string]: string }; 
  public get dependencyKeyAttributes() {
    return this.getStringMapAttribute('dependency_key_attributes');
  }
  public set dependencyKeyAttributes(value: { [key: string]: string }) {
    this._dependencyKeyAttributes = value;
  }
  public resetDependencyKeyAttributes() {
    this._dependencyKeyAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyKeyAttributesInput() {
    return this._dependencyKeyAttributes;
  }

  // dependency_operation_name - computed: true, optional: true, required: false
  private _dependencyOperationName?: string; 
  public get dependencyOperationName() {
    return this.getStringAttribute('dependency_operation_name');
  }
  public set dependencyOperationName(value: string) {
    this._dependencyOperationName = value;
  }
  public resetDependencyOperationName() {
    this._dependencyOperationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyOperationNameInput() {
    return this._dependencyOperationName;
  }
}
export interface ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMetricSource {
  /**
  * Optional additional attributes for the metric source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#metric_source_attributes ApplicationsignalsServiceLevelObjective#metric_source_attributes}
  */
  readonly metricSourceAttributes?: { [key: string]: string };
  /**
  * Required attributes that identify the metric source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#metric_source_key_attributes ApplicationsignalsServiceLevelObjective#metric_source_key_attributes}
  */
  readonly metricSourceKeyAttributes?: { [key: string]: string };
}

export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMetricSourceToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMetricSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_source_attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.metricSourceAttributes),
    metric_source_key_attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.metricSourceKeyAttributes),
  }
}


export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMetricSourceToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMetricSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_source_attributes: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.metricSourceAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    metric_source_key_attributes: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.metricSourceKeyAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMetricSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMetricSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricSourceAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricSourceAttributes = this._metricSourceAttributes;
    }
    if (this._metricSourceKeyAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricSourceKeyAttributes = this._metricSourceKeyAttributes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMetricSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricSourceAttributes = undefined;
      this._metricSourceKeyAttributes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricSourceAttributes = value.metricSourceAttributes;
      this._metricSourceKeyAttributes = value.metricSourceKeyAttributes;
    }
  }

  // metric_source_attributes - computed: true, optional: true, required: false
  private _metricSourceAttributes?: { [key: string]: string }; 
  public get metricSourceAttributes() {
    return this.getStringMapAttribute('metric_source_attributes');
  }
  public set metricSourceAttributes(value: { [key: string]: string }) {
    this._metricSourceAttributes = value;
  }
  public resetMetricSourceAttributes() {
    this._metricSourceAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricSourceAttributesInput() {
    return this._metricSourceAttributes;
  }

  // metric_source_key_attributes - computed: true, optional: true, required: false
  private _metricSourceKeyAttributes?: { [key: string]: string }; 
  public get metricSourceKeyAttributes() {
    return this.getStringMapAttribute('metric_source_key_attributes');
  }
  public set metricSourceKeyAttributes(value: { [key: string]: string }) {
    this._metricSourceKeyAttributes = value;
  }
  public resetMetricSourceKeyAttributes() {
    this._metricSourceKeyAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricSourceKeyAttributesInput() {
    return this._metricSourceKeyAttributes;
  }
}
export interface ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricDimensions {
  /**
  * The name of the dimension. Dimension names must contain only ASCII characters, must include at least one non-whitespace character, and cannot start with a colon (:). ASCII control characters are not supported as part of dimension names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#name ApplicationsignalsServiceLevelObjective#name}
  */
  readonly name?: string;
  /**
  * The value of the dimension. Dimension values must contain only ASCII characters and must include at least one non-whitespace character. ASCII control characters are not supported as part of dimension values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#value ApplicationsignalsServiceLevelObjective#value}
  */
  readonly value?: string;
}

export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricDimensionsToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricDimensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricDimensionsToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricDimensions | cdktn.IResolvable): any {
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

export class ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricDimensions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricDimensions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricDimensionsList extends cdktn.ComplexList {
  public internalValue? : ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricDimensions[] | cdktn.IResolvable

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
  public get(index: number): ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricDimensionsOutputReference {
    return new ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetric {
  /**
  * An array of one or more dimensions to use to define the metric that you want to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#dimensions ApplicationsignalsServiceLevelObjective#dimensions}
  */
  readonly dimensions?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricDimensions[] | cdktn.IResolvable;
  /**
  * The name of the metric to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#metric_name ApplicationsignalsServiceLevelObjective#metric_name}
  */
  readonly metricName?: string;
  /**
  * The namespace of the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#namespace ApplicationsignalsServiceLevelObjective#namespace}
  */
  readonly namespace?: string;
}

export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimensions: cdktn.listMapper(applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricDimensionsToTerraform, false)(struct!.dimensions),
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    namespace: cdktn.stringToTerraform(struct!.namespace),
  }
}


export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimensions: {
      value: cdktn.listMapperHcl(applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricDimensionsToHclTerraform, false)(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricDimensionsList",
    },
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetric | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetric | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensions.internalValue = undefined;
      this._metricName = undefined;
      this._namespace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensions.internalValue = value.dimensions;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
    }
  }

  // dimensions - computed: true, optional: true, required: false
  private _dimensions = new ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricDimensions[] | cdktn.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // metric_name - computed: true, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStat {
  /**
  * This structure defines the metric used for a service level indicator, including the metric name, namespace, and dimensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#metric ApplicationsignalsServiceLevelObjective#metric}
  */
  readonly metric?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetric;
  /**
  * The granularity, in seconds, to be used for the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#period ApplicationsignalsServiceLevelObjective#period}
  */
  readonly period?: number;
  /**
  * The statistic to use for comparison to the threshold. It can be any CloudWatch statistic or extended statistic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#stat ApplicationsignalsServiceLevelObjective#stat}
  */
  readonly stat?: string;
  /**
  * If you omit Unit then all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#unit ApplicationsignalsServiceLevelObjective#unit}
  */
  readonly unit?: string;
}

export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric: applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricToTerraform(struct!.metric),
    period: cdktn.numberToTerraform(struct!.period),
    stat: cdktn.stringToTerraform(struct!.stat),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric: {
      value: applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetric",
    },
    period: {
      value: cdktn.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stat: {
      value: cdktn.stringToHclTerraform(struct!.stat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._stat !== undefined) {
      hasAnyValues = true;
      internalValueResult.stat = this._stat;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric.internalValue = undefined;
      this._period = undefined;
      this._stat = undefined;
      this._unit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric.internalValue = value.metric;
      this._period = value.period;
      this._stat = value.stat;
      this._unit = value.unit;
    }
  }

  // metric - computed: true, optional: true, required: false
  private _metric = new ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // period - computed: true, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // stat - computed: true, optional: true, required: false
  private _stat?: string; 
  public get stat() {
    return this.getStringAttribute('stat');
  }
  public set stat(value: string) {
    this._stat = value;
  }
  public resetStat() {
    this._stat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statInput() {
    return this._stat;
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetric {
  /**
  * The ID of the account where the metrics are located, if this is a cross-account alarm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#account_id ApplicationsignalsServiceLevelObjective#account_id}
  */
  readonly accountId?: string;
  /**
  * The math expression to be performed on the returned data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#expression ApplicationsignalsServiceLevelObjective#expression}
  */
  readonly expression?: string;
  /**
  * A short name used to tie this object to the results in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#id ApplicationsignalsServiceLevelObjective#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A metric to be used directly for the SLO, or to be used in the math expression that will be used for the SLO. Within one MetricDataQuery, you must specify either Expression or MetricStat but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#metric_stat ApplicationsignalsServiceLevelObjective#metric_stat}
  */
  readonly metricStat?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStat;
  /**
  * This option indicates whether to return the timestamps and raw data values of this metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#return_data ApplicationsignalsServiceLevelObjective#return_data}
  */
  readonly returnData?: boolean | cdktn.IResolvable;
}

export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    expression: cdktn.stringToTerraform(struct!.expression),
    id: cdktn.stringToTerraform(struct!.id),
    metric_stat: applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatToTerraform(struct!.metricStat),
    return_data: cdktn.booleanToTerraform(struct!.returnData),
  }
}


export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_id: {
      value: cdktn.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_stat: {
      value: applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatToHclTerraform(struct!.metricStat),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStat",
    },
    return_data: {
      value: cdktn.booleanToHclTerraform(struct!.returnData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetric | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._metricStat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricStat = this._metricStat?.internalValue;
    }
    if (this._returnData !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnData = this._returnData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetric | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._expression = undefined;
      this._id = undefined;
      this._metricStat.internalValue = undefined;
      this._returnData = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._expression = value.expression;
      this._id = value.id;
      this._metricStat.internalValue = value.metricStat;
      this._returnData = value.returnData;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
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

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // metric_stat - computed: true, optional: true, required: false
  private _metricStat = new ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStatOutputReference(this, "metric_stat");
  public get metricStat() {
    return this._metricStat;
  }
  public putMetricStat(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricMetricStat) {
    this._metricStat.internalValue = value;
  }
  public resetMetricStat() {
    this._metricStat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricStatInput() {
    return this._metricStat.internalValue;
  }

  // return_data - computed: true, optional: true, required: false
  private _returnData?: boolean | cdktn.IResolvable; 
  public get returnData() {
    return this.getBooleanAttribute('return_data');
  }
  public set returnData(value: boolean | cdktn.IResolvable) {
    this._returnData = value;
  }
  public resetReturnData() {
    this._returnData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnDataInput() {
    return this._returnData;
  }
}

export class ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricList extends cdktn.ComplexList {
  public internalValue? : ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetric[] | cdktn.IResolvable

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
  public get(index: number): ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricOutputReference {
    return new ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensions {
  /**
  * The name of the dimension. Dimension names must contain only ASCII characters, must include at least one non-whitespace character, and cannot start with a colon (:). ASCII control characters are not supported as part of dimension names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#name ApplicationsignalsServiceLevelObjective#name}
  */
  readonly name?: string;
  /**
  * The value of the dimension. Dimension values must contain only ASCII characters and must include at least one non-whitespace character. ASCII control characters are not supported as part of dimension values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#value ApplicationsignalsServiceLevelObjective#value}
  */
  readonly value?: string;
}

export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensions | cdktn.IResolvable): any {
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

export class ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsList extends cdktn.ComplexList {
  public internalValue? : ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensions[] | cdktn.IResolvable

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
  public get(index: number): ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsOutputReference {
    return new ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetric {
  /**
  * An array of one or more dimensions to use to define the metric that you want to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#dimensions ApplicationsignalsServiceLevelObjective#dimensions}
  */
  readonly dimensions?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensions[] | cdktn.IResolvable;
  /**
  * The name of the metric to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#metric_name ApplicationsignalsServiceLevelObjective#metric_name}
  */
  readonly metricName?: string;
  /**
  * The namespace of the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#namespace ApplicationsignalsServiceLevelObjective#namespace}
  */
  readonly namespace?: string;
}

export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimensions: cdktn.listMapper(applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsToTerraform, false)(struct!.dimensions),
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    namespace: cdktn.stringToTerraform(struct!.namespace),
  }
}


export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimensions: {
      value: cdktn.listMapperHcl(applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsToHclTerraform, false)(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsList",
    },
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetric | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetric | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensions.internalValue = undefined;
      this._metricName = undefined;
      this._namespace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensions.internalValue = value.dimensions;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
    }
  }

  // dimensions - computed: true, optional: true, required: false
  private _dimensions = new ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensions[] | cdktn.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // metric_name - computed: true, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStat {
  /**
  * This structure defines the metric used for a service level indicator, including the metric name, namespace, and dimensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#metric ApplicationsignalsServiceLevelObjective#metric}
  */
  readonly metric?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetric;
  /**
  * The granularity, in seconds, to be used for the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#period ApplicationsignalsServiceLevelObjective#period}
  */
  readonly period?: number;
  /**
  * The statistic to use for comparison to the threshold. It can be any CloudWatch statistic or extended statistic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#stat ApplicationsignalsServiceLevelObjective#stat}
  */
  readonly stat?: string;
  /**
  * If you omit Unit then all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#unit ApplicationsignalsServiceLevelObjective#unit}
  */
  readonly unit?: string;
}

export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric: applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricToTerraform(struct!.metric),
    period: cdktn.numberToTerraform(struct!.period),
    stat: cdktn.stringToTerraform(struct!.stat),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric: {
      value: applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetric",
    },
    period: {
      value: cdktn.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stat: {
      value: cdktn.stringToHclTerraform(struct!.stat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._stat !== undefined) {
      hasAnyValues = true;
      internalValueResult.stat = this._stat;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric.internalValue = undefined;
      this._period = undefined;
      this._stat = undefined;
      this._unit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric.internalValue = value.metric;
      this._period = value.period;
      this._stat = value.stat;
      this._unit = value.unit;
    }
  }

  // metric - computed: true, optional: true, required: false
  private _metric = new ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // period - computed: true, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // stat - computed: true, optional: true, required: false
  private _stat?: string; 
  public get stat() {
    return this.getStringAttribute('stat');
  }
  public set stat(value: string) {
    this._stat = value;
  }
  public resetStat() {
    this._stat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statInput() {
    return this._stat;
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetric {
  /**
  * The ID of the account where the metrics are located, if this is a cross-account alarm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#account_id ApplicationsignalsServiceLevelObjective#account_id}
  */
  readonly accountId?: string;
  /**
  * The math expression to be performed on the returned data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#expression ApplicationsignalsServiceLevelObjective#expression}
  */
  readonly expression?: string;
  /**
  * A short name used to tie this object to the results in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#id ApplicationsignalsServiceLevelObjective#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A metric to be used directly for the SLO, or to be used in the math expression that will be used for the SLO. Within one MetricDataQuery, you must specify either Expression or MetricStat but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#metric_stat ApplicationsignalsServiceLevelObjective#metric_stat}
  */
  readonly metricStat?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStat;
  /**
  * This option indicates whether to return the timestamps and raw data values of this metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#return_data ApplicationsignalsServiceLevelObjective#return_data}
  */
  readonly returnData?: boolean | cdktn.IResolvable;
}

export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    expression: cdktn.stringToTerraform(struct!.expression),
    id: cdktn.stringToTerraform(struct!.id),
    metric_stat: applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatToTerraform(struct!.metricStat),
    return_data: cdktn.booleanToTerraform(struct!.returnData),
  }
}


export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_id: {
      value: cdktn.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_stat: {
      value: applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatToHclTerraform(struct!.metricStat),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStat",
    },
    return_data: {
      value: cdktn.booleanToHclTerraform(struct!.returnData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetric | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._metricStat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricStat = this._metricStat?.internalValue;
    }
    if (this._returnData !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnData = this._returnData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetric | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._expression = undefined;
      this._id = undefined;
      this._metricStat.internalValue = undefined;
      this._returnData = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._expression = value.expression;
      this._id = value.id;
      this._metricStat.internalValue = value.metricStat;
      this._returnData = value.returnData;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
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

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // metric_stat - computed: true, optional: true, required: false
  private _metricStat = new ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatOutputReference(this, "metric_stat");
  public get metricStat() {
    return this._metricStat;
  }
  public putMetricStat(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStat) {
    this._metricStat.internalValue = value;
  }
  public resetMetricStat() {
    this._metricStat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricStatInput() {
    return this._metricStat.internalValue;
  }

  // return_data - computed: true, optional: true, required: false
  private _returnData?: boolean | cdktn.IResolvable; 
  public get returnData() {
    return this.getBooleanAttribute('return_data');
  }
  public set returnData(value: boolean | cdktn.IResolvable) {
    this._returnData = value;
  }
  public resetReturnData() {
    this._returnData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnDataInput() {
    return this._returnData;
  }
}

export class ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricList extends cdktn.ComplexList {
  public internalValue? : ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetric[] | cdktn.IResolvable

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
  public get(index: number): ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricOutputReference {
    return new ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetric {
  /**
  * If you want to count "bad requests" to determine the percentage of successful requests for this request-based SLO, specify the metric to use as "bad requests" in this structure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#bad_count_metric ApplicationsignalsServiceLevelObjective#bad_count_metric}
  */
  readonly badCountMetric?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetric[] | cdktn.IResolvable;
  /**
  * If you want to count "good requests" to determine the percentage of successful requests for this request-based SLO, specify the metric to use as "good requests" in this structure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#good_count_metric ApplicationsignalsServiceLevelObjective#good_count_metric}
  */
  readonly goodCountMetric?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetric[] | cdktn.IResolvable;
}

export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bad_count_metric: cdktn.listMapper(applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricToTerraform, false)(struct!.badCountMetric),
    good_count_metric: cdktn.listMapper(applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricToTerraform, false)(struct!.goodCountMetric),
  }
}


export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bad_count_metric: {
      value: cdktn.listMapperHcl(applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricToHclTerraform, false)(struct!.badCountMetric),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricList",
    },
    good_count_metric: {
      value: cdktn.listMapperHcl(applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricToHclTerraform, false)(struct!.goodCountMetric),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetric | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._badCountMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.badCountMetric = this._badCountMetric?.internalValue;
    }
    if (this._goodCountMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.goodCountMetric = this._goodCountMetric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetric | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._badCountMetric.internalValue = undefined;
      this._goodCountMetric.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._badCountMetric.internalValue = value.badCountMetric;
      this._goodCountMetric.internalValue = value.goodCountMetric;
    }
  }

  // bad_count_metric - computed: true, optional: true, required: false
  private _badCountMetric = new ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetricList(this, "bad_count_metric", false);
  public get badCountMetric() {
    return this._badCountMetric;
  }
  public putBadCountMetric(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricBadCountMetric[] | cdktn.IResolvable) {
    this._badCountMetric.internalValue = value;
  }
  public resetBadCountMetric() {
    this._badCountMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badCountMetricInput() {
    return this._badCountMetric.internalValue;
  }

  // good_count_metric - computed: true, optional: true, required: false
  private _goodCountMetric = new ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricList(this, "good_count_metric", false);
  public get goodCountMetric() {
    return this._goodCountMetric;
  }
  public putGoodCountMetric(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetric[] | cdktn.IResolvable) {
    this._goodCountMetric.internalValue = value;
  }
  public resetGoodCountMetric() {
    this._goodCountMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goodCountMetricInput() {
    return this._goodCountMetric.internalValue;
  }
}
export interface ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensions {
  /**
  * The name of the dimension. Dimension names must contain only ASCII characters, must include at least one non-whitespace character, and cannot start with a colon (:). ASCII control characters are not supported as part of dimension names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#name ApplicationsignalsServiceLevelObjective#name}
  */
  readonly name?: string;
  /**
  * The value of the dimension. Dimension values must contain only ASCII characters and must include at least one non-whitespace character. ASCII control characters are not supported as part of dimension values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#value ApplicationsignalsServiceLevelObjective#value}
  */
  readonly value?: string;
}

export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensions | cdktn.IResolvable): any {
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

export class ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsList extends cdktn.ComplexList {
  public internalValue? : ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensions[] | cdktn.IResolvable

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
  public get(index: number): ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsOutputReference {
    return new ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetric {
  /**
  * An array of one or more dimensions to use to define the metric that you want to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#dimensions ApplicationsignalsServiceLevelObjective#dimensions}
  */
  readonly dimensions?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensions[] | cdktn.IResolvable;
  /**
  * The name of the metric to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#metric_name ApplicationsignalsServiceLevelObjective#metric_name}
  */
  readonly metricName?: string;
  /**
  * The namespace of the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#namespace ApplicationsignalsServiceLevelObjective#namespace}
  */
  readonly namespace?: string;
}

export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimensions: cdktn.listMapper(applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsToTerraform, false)(struct!.dimensions),
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    namespace: cdktn.stringToTerraform(struct!.namespace),
  }
}


export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimensions: {
      value: cdktn.listMapperHcl(applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsToHclTerraform, false)(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsList",
    },
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetric | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetric | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensions.internalValue = undefined;
      this._metricName = undefined;
      this._namespace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensions.internalValue = value.dimensions;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
    }
  }

  // dimensions - computed: true, optional: true, required: false
  private _dimensions = new ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensions[] | cdktn.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // metric_name - computed: true, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStat {
  /**
  * This structure defines the metric used for a service level indicator, including the metric name, namespace, and dimensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#metric ApplicationsignalsServiceLevelObjective#metric}
  */
  readonly metric?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetric;
  /**
  * The granularity, in seconds, to be used for the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#period ApplicationsignalsServiceLevelObjective#period}
  */
  readonly period?: number;
  /**
  * The statistic to use for comparison to the threshold. It can be any CloudWatch statistic or extended statistic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#stat ApplicationsignalsServiceLevelObjective#stat}
  */
  readonly stat?: string;
  /**
  * If you omit Unit then all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#unit ApplicationsignalsServiceLevelObjective#unit}
  */
  readonly unit?: string;
}

export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric: applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricToTerraform(struct!.metric),
    period: cdktn.numberToTerraform(struct!.period),
    stat: cdktn.stringToTerraform(struct!.stat),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric: {
      value: applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetric",
    },
    period: {
      value: cdktn.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stat: {
      value: cdktn.stringToHclTerraform(struct!.stat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._stat !== undefined) {
      hasAnyValues = true;
      internalValueResult.stat = this._stat;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric.internalValue = undefined;
      this._period = undefined;
      this._stat = undefined;
      this._unit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric.internalValue = value.metric;
      this._period = value.period;
      this._stat = value.stat;
      this._unit = value.unit;
    }
  }

  // metric - computed: true, optional: true, required: false
  private _metric = new ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // period - computed: true, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // stat - computed: true, optional: true, required: false
  private _stat?: string; 
  public get stat() {
    return this.getStringAttribute('stat');
  }
  public set stat(value: string) {
    this._stat = value;
  }
  public resetStat() {
    this._stat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statInput() {
    return this._stat;
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetric {
  /**
  * The ID of the account where the metrics are located, if this is a cross-account alarm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#account_id ApplicationsignalsServiceLevelObjective#account_id}
  */
  readonly accountId?: string;
  /**
  * The math expression to be performed on the returned data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#expression ApplicationsignalsServiceLevelObjective#expression}
  */
  readonly expression?: string;
  /**
  * A short name used to tie this object to the results in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#id ApplicationsignalsServiceLevelObjective#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A metric to be used directly for the SLO, or to be used in the math expression that will be used for the SLO. Within one MetricDataQuery, you must specify either Expression or MetricStat but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#metric_stat ApplicationsignalsServiceLevelObjective#metric_stat}
  */
  readonly metricStat?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStat;
  /**
  * This option indicates whether to return the timestamps and raw data values of this metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#return_data ApplicationsignalsServiceLevelObjective#return_data}
  */
  readonly returnData?: boolean | cdktn.IResolvable;
}

export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    expression: cdktn.stringToTerraform(struct!.expression),
    id: cdktn.stringToTerraform(struct!.id),
    metric_stat: applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatToTerraform(struct!.metricStat),
    return_data: cdktn.booleanToTerraform(struct!.returnData),
  }
}


export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_id: {
      value: cdktn.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_stat: {
      value: applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatToHclTerraform(struct!.metricStat),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStat",
    },
    return_data: {
      value: cdktn.booleanToHclTerraform(struct!.returnData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetric | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._metricStat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricStat = this._metricStat?.internalValue;
    }
    if (this._returnData !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnData = this._returnData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetric | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._expression = undefined;
      this._id = undefined;
      this._metricStat.internalValue = undefined;
      this._returnData = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._expression = value.expression;
      this._id = value.id;
      this._metricStat.internalValue = value.metricStat;
      this._returnData = value.returnData;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
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

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // metric_stat - computed: true, optional: true, required: false
  private _metricStat = new ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatOutputReference(this, "metric_stat");
  public get metricStat() {
    return this._metricStat;
  }
  public putMetricStat(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStat) {
    this._metricStat.internalValue = value;
  }
  public resetMetricStat() {
    this._metricStat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricStatInput() {
    return this._metricStat.internalValue;
  }

  // return_data - computed: true, optional: true, required: false
  private _returnData?: boolean | cdktn.IResolvable; 
  public get returnData() {
    return this.getBooleanAttribute('return_data');
  }
  public set returnData(value: boolean | cdktn.IResolvable) {
    this._returnData = value;
  }
  public resetReturnData() {
    this._returnData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnDataInput() {
    return this._returnData;
  }
}

export class ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricList extends cdktn.ComplexList {
  public internalValue? : ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetric[] | cdktn.IResolvable

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
  public get(index: number): ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricOutputReference {
    return new ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#composite_sli_config ApplicationsignalsServiceLevelObjective#composite_sli_config}
  */
  readonly compositeSliConfig?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfig;
  /**
  * Configuration for identifying a dependency and its operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#dependency_config ApplicationsignalsServiceLevelObjective#dependency_config}
  */
  readonly dependencyConfig?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricDependencyConfig;
  /**
  * This is a string-to-string map that contains information about the type of object that this SLO is related to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#key_attributes ApplicationsignalsServiceLevelObjective#key_attributes}
  */
  readonly keyAttributes?: { [key: string]: string };
  /**
  * The name of the metric for non-Application Signals services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#metric_name ApplicationsignalsServiceLevelObjective#metric_name}
  */
  readonly metricName?: string;
  /**
  * Configuration for identifying the source of metrics for non-Application Signals services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#metric_source ApplicationsignalsServiceLevelObjective#metric_source}
  */
  readonly metricSource?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMetricSource;
  /**
  * If the SLO monitors either the LATENCY or AVAILABILITY metric that Application Signals collects, this field displays which of those metrics is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#metric_type ApplicationsignalsServiceLevelObjective#metric_type}
  */
  readonly metricType?: string;
  /**
  * This structure defines the metric that is used as the "good request" or "bad request" value for a request-based SLO. This value observed for the metric defined in `TotalRequestCountMetric` is divided by the number found for `MonitoredRequestCountMetric` to determine the percentage of successful requests that this SLO tracks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#monitored_request_count_metric ApplicationsignalsServiceLevelObjective#monitored_request_count_metric}
  */
  readonly monitoredRequestCountMetric?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetric;
  /**
  * If the SLO monitors a specific operation of the service, this field displays that operation name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#operation_name ApplicationsignalsServiceLevelObjective#operation_name}
  */
  readonly operationName?: string;
  /**
  * This structure defines the metric that is used as the "total requests" number for a request-based SLO. The number observed for this metric is divided by the number of "good requests" or "bad requests" that is observed for the metric defined in `MonitoredRequestCountMetric`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#total_request_count_metric ApplicationsignalsServiceLevelObjective#total_request_count_metric}
  */
  readonly totalRequestCountMetric?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetric[] | cdktn.IResolvable;
}

export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    composite_sli_config: applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigToTerraform(struct!.compositeSliConfig),
    dependency_config: applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricDependencyConfigToTerraform(struct!.dependencyConfig),
    key_attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.keyAttributes),
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    metric_source: applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMetricSourceToTerraform(struct!.metricSource),
    metric_type: cdktn.stringToTerraform(struct!.metricType),
    monitored_request_count_metric: applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricToTerraform(struct!.monitoredRequestCountMetric),
    operation_name: cdktn.stringToTerraform(struct!.operationName),
    total_request_count_metric: cdktn.listMapper(applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricToTerraform, false)(struct!.totalRequestCountMetric),
  }
}


export function applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    composite_sli_config: {
      value: applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigToHclTerraform(struct!.compositeSliConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfig",
    },
    dependency_config: {
      value: applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricDependencyConfigToHclTerraform(struct!.dependencyConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricDependencyConfig",
    },
    key_attributes: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.keyAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_source: {
      value: applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMetricSourceToHclTerraform(struct!.metricSource),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMetricSource",
    },
    metric_type: {
      value: cdktn.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitored_request_count_metric: {
      value: applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricToHclTerraform(struct!.monitoredRequestCountMetric),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetric",
    },
    operation_name: {
      value: cdktn.stringToHclTerraform(struct!.operationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_request_count_metric: {
      value: cdktn.listMapperHcl(applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricToHclTerraform, false)(struct!.totalRequestCountMetric),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetric | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compositeSliConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compositeSliConfig = this._compositeSliConfig?.internalValue;
    }
    if (this._dependencyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencyConfig = this._dependencyConfig?.internalValue;
    }
    if (this._keyAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyAttributes = this._keyAttributes;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._metricSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricSource = this._metricSource?.internalValue;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._monitoredRequestCountMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoredRequestCountMetric = this._monitoredRequestCountMetric?.internalValue;
    }
    if (this._operationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationName = this._operationName;
    }
    if (this._totalRequestCountMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalRequestCountMetric = this._totalRequestCountMetric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetric | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compositeSliConfig.internalValue = undefined;
      this._dependencyConfig.internalValue = undefined;
      this._keyAttributes = undefined;
      this._metricName = undefined;
      this._metricSource.internalValue = undefined;
      this._metricType = undefined;
      this._monitoredRequestCountMetric.internalValue = undefined;
      this._operationName = undefined;
      this._totalRequestCountMetric.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compositeSliConfig.internalValue = value.compositeSliConfig;
      this._dependencyConfig.internalValue = value.dependencyConfig;
      this._keyAttributes = value.keyAttributes;
      this._metricName = value.metricName;
      this._metricSource.internalValue = value.metricSource;
      this._metricType = value.metricType;
      this._monitoredRequestCountMetric.internalValue = value.monitoredRequestCountMetric;
      this._operationName = value.operationName;
      this._totalRequestCountMetric.internalValue = value.totalRequestCountMetric;
    }
  }

  // composite_sli_config - computed: true, optional: true, required: false
  private _compositeSliConfig = new ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfigOutputReference(this, "composite_sli_config");
  public get compositeSliConfig() {
    return this._compositeSliConfig;
  }
  public putCompositeSliConfig(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricCompositeSliConfig) {
    this._compositeSliConfig.internalValue = value;
  }
  public resetCompositeSliConfig() {
    this._compositeSliConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeSliConfigInput() {
    return this._compositeSliConfig.internalValue;
  }

  // dependency_config - computed: true, optional: true, required: false
  private _dependencyConfig = new ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricDependencyConfigOutputReference(this, "dependency_config");
  public get dependencyConfig() {
    return this._dependencyConfig;
  }
  public putDependencyConfig(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricDependencyConfig) {
    this._dependencyConfig.internalValue = value;
  }
  public resetDependencyConfig() {
    this._dependencyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyConfigInput() {
    return this._dependencyConfig.internalValue;
  }

  // key_attributes - computed: true, optional: true, required: false
  private _keyAttributes?: { [key: string]: string }; 
  public get keyAttributes() {
    return this.getStringMapAttribute('key_attributes');
  }
  public set keyAttributes(value: { [key: string]: string }) {
    this._keyAttributes = value;
  }
  public resetKeyAttributes() {
    this._keyAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAttributesInput() {
    return this._keyAttributes;
  }

  // metric_name - computed: true, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // metric_source - computed: true, optional: true, required: false
  private _metricSource = new ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMetricSourceOutputReference(this, "metric_source");
  public get metricSource() {
    return this._metricSource;
  }
  public putMetricSource(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMetricSource) {
    this._metricSource.internalValue = value;
  }
  public resetMetricSource() {
    this._metricSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricSourceInput() {
    return this._metricSource.internalValue;
  }

  // metric_type - computed: true, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // monitored_request_count_metric - computed: true, optional: true, required: false
  private _monitoredRequestCountMetric = new ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricOutputReference(this, "monitored_request_count_metric");
  public get monitoredRequestCountMetric() {
    return this._monitoredRequestCountMetric;
  }
  public putMonitoredRequestCountMetric(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetric) {
    this._monitoredRequestCountMetric.internalValue = value;
  }
  public resetMonitoredRequestCountMetric() {
    this._monitoredRequestCountMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredRequestCountMetricInput() {
    return this._monitoredRequestCountMetric.internalValue;
  }

  // operation_name - computed: true, optional: true, required: false
  private _operationName?: string; 
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }
  public set operationName(value: string) {
    this._operationName = value;
  }
  public resetOperationName() {
    this._operationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationNameInput() {
    return this._operationName;
  }

  // total_request_count_metric - computed: true, optional: true, required: false
  private _totalRequestCountMetric = new ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricList(this, "total_request_count_metric", false);
  public get totalRequestCountMetric() {
    return this._totalRequestCountMetric;
  }
  public putTotalRequestCountMetric(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetric[] | cdktn.IResolvable) {
    this._totalRequestCountMetric.internalValue = value;
  }
  public resetTotalRequestCountMetric() {
    this._totalRequestCountMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRequestCountMetricInput() {
    return this._totalRequestCountMetric.internalValue;
  }
}
export interface ApplicationsignalsServiceLevelObjectiveRequestBasedSli {
  /**
  * The arithmetic operation used when comparing the specified metric to the threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#comparison_operator ApplicationsignalsServiceLevelObjective#comparison_operator}
  */
  readonly comparisonOperator?: string;
  /**
  * The value that the SLI metric is compared to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#metric_threshold ApplicationsignalsServiceLevelObjective#metric_threshold}
  */
  readonly metricThreshold?: number;
  /**
  * This structure contains the information about the metric that is used for a request-based SLO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#request_based_sli_metric ApplicationsignalsServiceLevelObjective#request_based_sli_metric}
  */
  readonly requestBasedSliMetric?: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetric;
}

export function applicationsignalsServiceLevelObjectiveRequestBasedSliToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSli | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
    metric_threshold: cdktn.numberToTerraform(struct!.metricThreshold),
    request_based_sli_metric: applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricToTerraform(struct!.requestBasedSliMetric),
  }
}


export function applicationsignalsServiceLevelObjectiveRequestBasedSliToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveRequestBasedSli | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison_operator: {
      value: cdktn.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_threshold: {
      value: cdktn.numberToHclTerraform(struct!.metricThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_based_sli_metric: {
      value: applicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricToHclTerraform(struct!.requestBasedSliMetric),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetric",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveRequestBasedSliOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveRequestBasedSli | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._metricThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricThreshold = this._metricThreshold;
    }
    if (this._requestBasedSliMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBasedSliMetric = this._requestBasedSliMetric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSli | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparisonOperator = undefined;
      this._metricThreshold = undefined;
      this._requestBasedSliMetric.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparisonOperator = value.comparisonOperator;
      this._metricThreshold = value.metricThreshold;
      this._requestBasedSliMetric.internalValue = value.requestBasedSliMetric;
    }
  }

  // comparison_operator - computed: true, optional: true, required: false
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  public resetComparisonOperator() {
    this._comparisonOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // metric_threshold - computed: true, optional: true, required: false
  private _metricThreshold?: number; 
  public get metricThreshold() {
    return this.getNumberAttribute('metric_threshold');
  }
  public set metricThreshold(value: number) {
    this._metricThreshold = value;
  }
  public resetMetricThreshold() {
    this._metricThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricThresholdInput() {
    return this._metricThreshold;
  }

  // request_based_sli_metric - computed: true, optional: true, required: false
  private _requestBasedSliMetric = new ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricOutputReference(this, "request_based_sli_metric");
  public get requestBasedSliMetric() {
    return this._requestBasedSliMetric;
  }
  public putRequestBasedSliMetric(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSliRequestBasedSliMetric) {
    this._requestBasedSliMetric.internalValue = value;
  }
  public resetRequestBasedSliMetric() {
    this._requestBasedSliMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBasedSliMetricInput() {
    return this._requestBasedSliMetric.internalValue;
  }
}
export interface ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigCompositeSliComponents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#operation_name ApplicationsignalsServiceLevelObjective#operation_name}
  */
  readonly operationName?: string;
}

export function applicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigCompositeSliComponentsToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigCompositeSliComponents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operation_name: cdktn.stringToTerraform(struct!.operationName),
  }
}


export function applicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigCompositeSliComponentsToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigCompositeSliComponents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operation_name: {
      value: cdktn.stringToHclTerraform(struct!.operationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigCompositeSliComponentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigCompositeSliComponents | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationName = this._operationName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigCompositeSliComponents | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operationName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operationName = value.operationName;
    }
  }

  // operation_name - computed: true, optional: true, required: false
  private _operationName?: string; 
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }
  public set operationName(value: string) {
    this._operationName = value;
  }
  public resetOperationName() {
    this._operationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationNameInput() {
    return this._operationName;
  }
}

export class ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigCompositeSliComponentsList extends cdktn.ComplexList {
  public internalValue? : ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigCompositeSliComponents[] | cdktn.IResolvable

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
  public get(index: number): ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigCompositeSliComponentsOutputReference {
    return new ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigCompositeSliComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigSelectionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#pattern ApplicationsignalsServiceLevelObjective#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#type ApplicationsignalsServiceLevelObjective#type}
  */
  readonly type?: string;
}

export function applicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigSelectionConfigToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigSelectionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pattern: cdktn.stringToTerraform(struct!.pattern),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function applicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigSelectionConfigToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigSelectionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pattern: {
      value: cdktn.stringToHclTerraform(struct!.pattern),
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

export class ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigSelectionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigSelectionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigSelectionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pattern = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pattern = value.pattern;
      this._type = value.type;
    }
  }

  // pattern - computed: true, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
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
export interface ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#composite_sli_components ApplicationsignalsServiceLevelObjective#composite_sli_components}
  */
  readonly compositeSliComponents?: ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigCompositeSliComponents[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#selection_config ApplicationsignalsServiceLevelObjective#selection_config}
  */
  readonly selectionConfig?: ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigSelectionConfig;
}

export function applicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    composite_sli_components: cdktn.listMapper(applicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigCompositeSliComponentsToTerraform, false)(struct!.compositeSliComponents),
    selection_config: applicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigSelectionConfigToTerraform(struct!.selectionConfig),
  }
}


export function applicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    composite_sli_components: {
      value: cdktn.listMapperHcl(applicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigCompositeSliComponentsToHclTerraform, false)(struct!.compositeSliComponents),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigCompositeSliComponentsList",
    },
    selection_config: {
      value: applicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigSelectionConfigToHclTerraform(struct!.selectionConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigSelectionConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compositeSliComponents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compositeSliComponents = this._compositeSliComponents?.internalValue;
    }
    if (this._selectionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionConfig = this._selectionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compositeSliComponents.internalValue = undefined;
      this._selectionConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compositeSliComponents.internalValue = value.compositeSliComponents;
      this._selectionConfig.internalValue = value.selectionConfig;
    }
  }

  // composite_sli_components - computed: true, optional: true, required: false
  private _compositeSliComponents = new ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigCompositeSliComponentsList(this, "composite_sli_components", false);
  public get compositeSliComponents() {
    return this._compositeSliComponents;
  }
  public putCompositeSliComponents(value: ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigCompositeSliComponents[] | cdktn.IResolvable) {
    this._compositeSliComponents.internalValue = value;
  }
  public resetCompositeSliComponents() {
    this._compositeSliComponents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeSliComponentsInput() {
    return this._compositeSliComponents.internalValue;
  }

  // selection_config - computed: true, optional: true, required: false
  private _selectionConfig = new ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigSelectionConfigOutputReference(this, "selection_config");
  public get selectionConfig() {
    return this._selectionConfig;
  }
  public putSelectionConfig(value: ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigSelectionConfig) {
    this._selectionConfig.internalValue = value;
  }
  public resetSelectionConfig() {
    this._selectionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionConfigInput() {
    return this._selectionConfig.internalValue;
  }
}
export interface ApplicationsignalsServiceLevelObjectiveSliSliMetricDependencyConfig {
  /**
  * If this SLO is related to a metric collected by Application Signals, you must use this field to specify which dependency the SLO metric is related to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#dependency_key_attributes ApplicationsignalsServiceLevelObjective#dependency_key_attributes}
  */
  readonly dependencyKeyAttributes?: { [key: string]: string };
  /**
  * When the SLO monitors a specific operation of the dependency, this field specifies the name of that operation in the dependency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#dependency_operation_name ApplicationsignalsServiceLevelObjective#dependency_operation_name}
  */
  readonly dependencyOperationName?: string;
}

export function applicationsignalsServiceLevelObjectiveSliSliMetricDependencyConfigToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveSliSliMetricDependencyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dependency_key_attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.dependencyKeyAttributes),
    dependency_operation_name: cdktn.stringToTerraform(struct!.dependencyOperationName),
  }
}


export function applicationsignalsServiceLevelObjectiveSliSliMetricDependencyConfigToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveSliSliMetricDependencyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dependency_key_attributes: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.dependencyKeyAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    dependency_operation_name: {
      value: cdktn.stringToHclTerraform(struct!.dependencyOperationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveSliSliMetricDependencyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveSliSliMetricDependencyConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependencyKeyAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencyKeyAttributes = this._dependencyKeyAttributes;
    }
    if (this._dependencyOperationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencyOperationName = this._dependencyOperationName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveSliSliMetricDependencyConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dependencyKeyAttributes = undefined;
      this._dependencyOperationName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dependencyKeyAttributes = value.dependencyKeyAttributes;
      this._dependencyOperationName = value.dependencyOperationName;
    }
  }

  // dependency_key_attributes - computed: true, optional: true, required: false
  private _dependencyKeyAttributes?: { [key: string]: string }; 
  public get dependencyKeyAttributes() {
    return this.getStringMapAttribute('dependency_key_attributes');
  }
  public set dependencyKeyAttributes(value: { [key: string]: string }) {
    this._dependencyKeyAttributes = value;
  }
  public resetDependencyKeyAttributes() {
    this._dependencyKeyAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyKeyAttributesInput() {
    return this._dependencyKeyAttributes;
  }

  // dependency_operation_name - computed: true, optional: true, required: false
  private _dependencyOperationName?: string; 
  public get dependencyOperationName() {
    return this.getStringAttribute('dependency_operation_name');
  }
  public set dependencyOperationName(value: string) {
    this._dependencyOperationName = value;
  }
  public resetDependencyOperationName() {
    this._dependencyOperationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyOperationNameInput() {
    return this._dependencyOperationName;
  }
}
export interface ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensions {
  /**
  * The name of the dimension. Dimension names must contain only ASCII characters, must include at least one non-whitespace character, and cannot start with a colon (:). ASCII control characters are not supported as part of dimension names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#name ApplicationsignalsServiceLevelObjective#name}
  */
  readonly name?: string;
  /**
  * The value of the dimension. Dimension values must contain only ASCII characters and must include at least one non-whitespace character. ASCII control characters are not supported as part of dimension values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#value ApplicationsignalsServiceLevelObjective#value}
  */
  readonly value?: string;
}

export function applicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensionsToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function applicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensionsToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensions | cdktn.IResolvable): any {
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

export class ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensionsList extends cdktn.ComplexList {
  public internalValue? : ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensions[] | cdktn.IResolvable

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
  public get(index: number): ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensionsOutputReference {
    return new ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetric {
  /**
  * An array of one or more dimensions to use to define the metric that you want to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#dimensions ApplicationsignalsServiceLevelObjective#dimensions}
  */
  readonly dimensions?: ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensions[] | cdktn.IResolvable;
  /**
  * The name of the metric to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#metric_name ApplicationsignalsServiceLevelObjective#metric_name}
  */
  readonly metricName?: string;
  /**
  * The namespace of the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#namespace ApplicationsignalsServiceLevelObjective#namespace}
  */
  readonly namespace?: string;
}

export function applicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimensions: cdktn.listMapper(applicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensionsToTerraform, false)(struct!.dimensions),
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    namespace: cdktn.stringToTerraform(struct!.namespace),
  }
}


export function applicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimensions: {
      value: cdktn.listMapperHcl(applicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensionsToHclTerraform, false)(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensionsList",
    },
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetric | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetric | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensions.internalValue = undefined;
      this._metricName = undefined;
      this._namespace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensions.internalValue = value.dimensions;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
    }
  }

  // dimensions - computed: true, optional: true, required: false
  private _dimensions = new ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensions[] | cdktn.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // metric_name - computed: true, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStat {
  /**
  * This structure defines the metric used for a service level indicator, including the metric name, namespace, and dimensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#metric ApplicationsignalsServiceLevelObjective#metric}
  */
  readonly metric?: ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetric;
  /**
  * The granularity, in seconds, to be used for the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#period ApplicationsignalsServiceLevelObjective#period}
  */
  readonly period?: number;
  /**
  * The statistic to use for comparison to the threshold. It can be any CloudWatch statistic or extended statistic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#stat ApplicationsignalsServiceLevelObjective#stat}
  */
  readonly stat?: string;
  /**
  * If you omit Unit then all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#unit ApplicationsignalsServiceLevelObjective#unit}
  */
  readonly unit?: string;
}

export function applicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric: applicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricToTerraform(struct!.metric),
    period: cdktn.numberToTerraform(struct!.period),
    stat: cdktn.stringToTerraform(struct!.stat),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function applicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric: {
      value: applicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetric",
    },
    period: {
      value: cdktn.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stat: {
      value: cdktn.stringToHclTerraform(struct!.stat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._stat !== undefined) {
      hasAnyValues = true;
      internalValueResult.stat = this._stat;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric.internalValue = undefined;
      this._period = undefined;
      this._stat = undefined;
      this._unit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric.internalValue = value.metric;
      this._period = value.period;
      this._stat = value.stat;
      this._unit = value.unit;
    }
  }

  // metric - computed: true, optional: true, required: false
  private _metric = new ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // period - computed: true, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // stat - computed: true, optional: true, required: false
  private _stat?: string; 
  public get stat() {
    return this.getStringAttribute('stat');
  }
  public set stat(value: string) {
    this._stat = value;
  }
  public resetStat() {
    this._stat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statInput() {
    return this._stat;
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueries {
  /**
  * The ID of the account where the metrics are located, if this is a cross-account alarm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#account_id ApplicationsignalsServiceLevelObjective#account_id}
  */
  readonly accountId?: string;
  /**
  * The math expression to be performed on the returned data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#expression ApplicationsignalsServiceLevelObjective#expression}
  */
  readonly expression?: string;
  /**
  * A short name used to tie this object to the results in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#id ApplicationsignalsServiceLevelObjective#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A metric to be used directly for the SLO, or to be used in the math expression that will be used for the SLO. Within one MetricDataQuery, you must specify either Expression or MetricStat but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#metric_stat ApplicationsignalsServiceLevelObjective#metric_stat}
  */
  readonly metricStat?: ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStat;
  /**
  * This option indicates whether to return the timestamps and raw data values of this metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#return_data ApplicationsignalsServiceLevelObjective#return_data}
  */
  readonly returnData?: boolean | cdktn.IResolvable;
}

export function applicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    expression: cdktn.stringToTerraform(struct!.expression),
    id: cdktn.stringToTerraform(struct!.id),
    metric_stat: applicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatToTerraform(struct!.metricStat),
    return_data: cdktn.booleanToTerraform(struct!.returnData),
  }
}


export function applicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_id: {
      value: cdktn.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_stat: {
      value: applicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatToHclTerraform(struct!.metricStat),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStat",
    },
    return_data: {
      value: cdktn.booleanToHclTerraform(struct!.returnData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueries | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._metricStat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricStat = this._metricStat?.internalValue;
    }
    if (this._returnData !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnData = this._returnData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueries | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._expression = undefined;
      this._id = undefined;
      this._metricStat.internalValue = undefined;
      this._returnData = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._expression = value.expression;
      this._id = value.id;
      this._metricStat.internalValue = value.metricStat;
      this._returnData = value.returnData;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
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

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // metric_stat - computed: true, optional: true, required: false
  private _metricStat = new ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatOutputReference(this, "metric_stat");
  public get metricStat() {
    return this._metricStat;
  }
  public putMetricStat(value: ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStat) {
    this._metricStat.internalValue = value;
  }
  public resetMetricStat() {
    this._metricStat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricStatInput() {
    return this._metricStat.internalValue;
  }

  // return_data - computed: true, optional: true, required: false
  private _returnData?: boolean | cdktn.IResolvable; 
  public get returnData() {
    return this.getBooleanAttribute('return_data');
  }
  public set returnData(value: boolean | cdktn.IResolvable) {
    this._returnData = value;
  }
  public resetReturnData() {
    this._returnData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnDataInput() {
    return this._returnData;
  }
}

export class ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesList extends cdktn.ComplexList {
  public internalValue? : ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueries[] | cdktn.IResolvable

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
  public get(index: number): ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesOutputReference {
    return new ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricSource {
  /**
  * Optional additional attributes for the metric source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#metric_source_attributes ApplicationsignalsServiceLevelObjective#metric_source_attributes}
  */
  readonly metricSourceAttributes?: { [key: string]: string };
  /**
  * Required attributes that identify the metric source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#metric_source_key_attributes ApplicationsignalsServiceLevelObjective#metric_source_key_attributes}
  */
  readonly metricSourceKeyAttributes?: { [key: string]: string };
}

export function applicationsignalsServiceLevelObjectiveSliSliMetricMetricSourceToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_source_attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.metricSourceAttributes),
    metric_source_key_attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.metricSourceKeyAttributes),
  }
}


export function applicationsignalsServiceLevelObjectiveSliSliMetricMetricSourceToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_source_attributes: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.metricSourceAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    metric_source_key_attributes: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.metricSourceKeyAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricSourceAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricSourceAttributes = this._metricSourceAttributes;
    }
    if (this._metricSourceKeyAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricSourceKeyAttributes = this._metricSourceKeyAttributes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricSourceAttributes = undefined;
      this._metricSourceKeyAttributes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricSourceAttributes = value.metricSourceAttributes;
      this._metricSourceKeyAttributes = value.metricSourceKeyAttributes;
    }
  }

  // metric_source_attributes - computed: true, optional: true, required: false
  private _metricSourceAttributes?: { [key: string]: string }; 
  public get metricSourceAttributes() {
    return this.getStringMapAttribute('metric_source_attributes');
  }
  public set metricSourceAttributes(value: { [key: string]: string }) {
    this._metricSourceAttributes = value;
  }
  public resetMetricSourceAttributes() {
    this._metricSourceAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricSourceAttributesInput() {
    return this._metricSourceAttributes;
  }

  // metric_source_key_attributes - computed: true, optional: true, required: false
  private _metricSourceKeyAttributes?: { [key: string]: string }; 
  public get metricSourceKeyAttributes() {
    return this.getStringMapAttribute('metric_source_key_attributes');
  }
  public set metricSourceKeyAttributes(value: { [key: string]: string }) {
    this._metricSourceKeyAttributes = value;
  }
  public resetMetricSourceKeyAttributes() {
    this._metricSourceKeyAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricSourceKeyAttributesInput() {
    return this._metricSourceKeyAttributes;
  }
}
export interface ApplicationsignalsServiceLevelObjectiveSliSliMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#composite_sli_config ApplicationsignalsServiceLevelObjective#composite_sli_config}
  */
  readonly compositeSliConfig?: ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfig;
  /**
  * Configuration for identifying a dependency and its operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#dependency_config ApplicationsignalsServiceLevelObjective#dependency_config}
  */
  readonly dependencyConfig?: ApplicationsignalsServiceLevelObjectiveSliSliMetricDependencyConfig;
  /**
  * This is a string-to-string map that contains information about the type of object that this SLO is related to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#key_attributes ApplicationsignalsServiceLevelObjective#key_attributes}
  */
  readonly keyAttributes?: { [key: string]: string };
  /**
  * If this SLO monitors a CloudWatch metric or the result of a CloudWatch metric math expression, this structure includes the information about that metric or expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#metric_data_queries ApplicationsignalsServiceLevelObjective#metric_data_queries}
  */
  readonly metricDataQueries?: ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueries[] | cdktn.IResolvable;
  /**
  * The name of the metric for non-Application Signals services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#metric_name ApplicationsignalsServiceLevelObjective#metric_name}
  */
  readonly metricName?: string;
  /**
  * Configuration for identifying the source of metrics for non-Application Signals services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#metric_source ApplicationsignalsServiceLevelObjective#metric_source}
  */
  readonly metricSource?: ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricSource;
  /**
  * If the SLO monitors either the LATENCY or AVAILABILITY metric that Application Signals collects, this field displays which of those metrics is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#metric_type ApplicationsignalsServiceLevelObjective#metric_type}
  */
  readonly metricType?: string;
  /**
  * If the SLO monitors a specific operation of the service, this field displays that operation name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#operation_name ApplicationsignalsServiceLevelObjective#operation_name}
  */
  readonly operationName?: string;
  /**
  * The number of seconds to use as the period for SLO evaluation. Your application's performance is compared to the SLI during each period. For each period, the application is determined to have either achieved or not achieved the necessary performance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#period_seconds ApplicationsignalsServiceLevelObjective#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * The statistic to use for comparison to the threshold. It can be any CloudWatch statistic or extended statistic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#statistic ApplicationsignalsServiceLevelObjective#statistic}
  */
  readonly statistic?: string;
}

export function applicationsignalsServiceLevelObjectiveSliSliMetricToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveSliSliMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    composite_sli_config: applicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigToTerraform(struct!.compositeSliConfig),
    dependency_config: applicationsignalsServiceLevelObjectiveSliSliMetricDependencyConfigToTerraform(struct!.dependencyConfig),
    key_attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.keyAttributes),
    metric_data_queries: cdktn.listMapper(applicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesToTerraform, false)(struct!.metricDataQueries),
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    metric_source: applicationsignalsServiceLevelObjectiveSliSliMetricMetricSourceToTerraform(struct!.metricSource),
    metric_type: cdktn.stringToTerraform(struct!.metricType),
    operation_name: cdktn.stringToTerraform(struct!.operationName),
    period_seconds: cdktn.numberToTerraform(struct!.periodSeconds),
    statistic: cdktn.stringToTerraform(struct!.statistic),
  }
}


export function applicationsignalsServiceLevelObjectiveSliSliMetricToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveSliSliMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    composite_sli_config: {
      value: applicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigToHclTerraform(struct!.compositeSliConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfig",
    },
    dependency_config: {
      value: applicationsignalsServiceLevelObjectiveSliSliMetricDependencyConfigToHclTerraform(struct!.dependencyConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveSliSliMetricDependencyConfig",
    },
    key_attributes: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.keyAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    metric_data_queries: {
      value: cdktn.listMapperHcl(applicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesToHclTerraform, false)(struct!.metricDataQueries),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesList",
    },
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_source: {
      value: applicationsignalsServiceLevelObjectiveSliSliMetricMetricSourceToHclTerraform(struct!.metricSource),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricSource",
    },
    metric_type: {
      value: cdktn.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation_name: {
      value: cdktn.stringToHclTerraform(struct!.operationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period_seconds: {
      value: cdktn.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    statistic: {
      value: cdktn.stringToHclTerraform(struct!.statistic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveSliSliMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveSliSliMetric | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compositeSliConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compositeSliConfig = this._compositeSliConfig?.internalValue;
    }
    if (this._dependencyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencyConfig = this._dependencyConfig?.internalValue;
    }
    if (this._keyAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyAttributes = this._keyAttributes;
    }
    if (this._metricDataQueries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDataQueries = this._metricDataQueries?.internalValue;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._metricSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricSource = this._metricSource?.internalValue;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._operationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationName = this._operationName;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._statistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistic = this._statistic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveSliSliMetric | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compositeSliConfig.internalValue = undefined;
      this._dependencyConfig.internalValue = undefined;
      this._keyAttributes = undefined;
      this._metricDataQueries.internalValue = undefined;
      this._metricName = undefined;
      this._metricSource.internalValue = undefined;
      this._metricType = undefined;
      this._operationName = undefined;
      this._periodSeconds = undefined;
      this._statistic = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compositeSliConfig.internalValue = value.compositeSliConfig;
      this._dependencyConfig.internalValue = value.dependencyConfig;
      this._keyAttributes = value.keyAttributes;
      this._metricDataQueries.internalValue = value.metricDataQueries;
      this._metricName = value.metricName;
      this._metricSource.internalValue = value.metricSource;
      this._metricType = value.metricType;
      this._operationName = value.operationName;
      this._periodSeconds = value.periodSeconds;
      this._statistic = value.statistic;
    }
  }

  // composite_sli_config - computed: true, optional: true, required: false
  private _compositeSliConfig = new ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfigOutputReference(this, "composite_sli_config");
  public get compositeSliConfig() {
    return this._compositeSliConfig;
  }
  public putCompositeSliConfig(value: ApplicationsignalsServiceLevelObjectiveSliSliMetricCompositeSliConfig) {
    this._compositeSliConfig.internalValue = value;
  }
  public resetCompositeSliConfig() {
    this._compositeSliConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeSliConfigInput() {
    return this._compositeSliConfig.internalValue;
  }

  // dependency_config - computed: true, optional: true, required: false
  private _dependencyConfig = new ApplicationsignalsServiceLevelObjectiveSliSliMetricDependencyConfigOutputReference(this, "dependency_config");
  public get dependencyConfig() {
    return this._dependencyConfig;
  }
  public putDependencyConfig(value: ApplicationsignalsServiceLevelObjectiveSliSliMetricDependencyConfig) {
    this._dependencyConfig.internalValue = value;
  }
  public resetDependencyConfig() {
    this._dependencyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyConfigInput() {
    return this._dependencyConfig.internalValue;
  }

  // key_attributes - computed: true, optional: true, required: false
  private _keyAttributes?: { [key: string]: string }; 
  public get keyAttributes() {
    return this.getStringMapAttribute('key_attributes');
  }
  public set keyAttributes(value: { [key: string]: string }) {
    this._keyAttributes = value;
  }
  public resetKeyAttributes() {
    this._keyAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAttributesInput() {
    return this._keyAttributes;
  }

  // metric_data_queries - computed: true, optional: true, required: false
  private _metricDataQueries = new ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueriesList(this, "metric_data_queries", false);
  public get metricDataQueries() {
    return this._metricDataQueries;
  }
  public putMetricDataQueries(value: ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricDataQueries[] | cdktn.IResolvable) {
    this._metricDataQueries.internalValue = value;
  }
  public resetMetricDataQueries() {
    this._metricDataQueries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDataQueriesInput() {
    return this._metricDataQueries.internalValue;
  }

  // metric_name - computed: true, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // metric_source - computed: true, optional: true, required: false
  private _metricSource = new ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricSourceOutputReference(this, "metric_source");
  public get metricSource() {
    return this._metricSource;
  }
  public putMetricSource(value: ApplicationsignalsServiceLevelObjectiveSliSliMetricMetricSource) {
    this._metricSource.internalValue = value;
  }
  public resetMetricSource() {
    this._metricSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricSourceInput() {
    return this._metricSource.internalValue;
  }

  // metric_type - computed: true, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // operation_name - computed: true, optional: true, required: false
  private _operationName?: string; 
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }
  public set operationName(value: string) {
    this._operationName = value;
  }
  public resetOperationName() {
    this._operationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationNameInput() {
    return this._operationName;
  }

  // period_seconds - computed: true, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // statistic - computed: true, optional: true, required: false
  private _statistic?: string; 
  public get statistic() {
    return this.getStringAttribute('statistic');
  }
  public set statistic(value: string) {
    this._statistic = value;
  }
  public resetStatistic() {
    this._statistic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticInput() {
    return this._statistic;
  }
}
export interface ApplicationsignalsServiceLevelObjectiveSli {
  /**
  * The arithmetic operation used when comparing the specified metric to the threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#comparison_operator ApplicationsignalsServiceLevelObjective#comparison_operator}
  */
  readonly comparisonOperator?: string;
  /**
  * The value that the SLI metric is compared to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#metric_threshold ApplicationsignalsServiceLevelObjective#metric_threshold}
  */
  readonly metricThreshold?: number;
  /**
  * A structure that contains information about the metric that the SLO monitors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#sli_metric ApplicationsignalsServiceLevelObjective#sli_metric}
  */
  readonly sliMetric?: ApplicationsignalsServiceLevelObjectiveSliSliMetric;
}

export function applicationsignalsServiceLevelObjectiveSliToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveSli | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
    metric_threshold: cdktn.numberToTerraform(struct!.metricThreshold),
    sli_metric: applicationsignalsServiceLevelObjectiveSliSliMetricToTerraform(struct!.sliMetric),
  }
}


export function applicationsignalsServiceLevelObjectiveSliToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveSli | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison_operator: {
      value: cdktn.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_threshold: {
      value: cdktn.numberToHclTerraform(struct!.metricThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sli_metric: {
      value: applicationsignalsServiceLevelObjectiveSliSliMetricToHclTerraform(struct!.sliMetric),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationsignalsServiceLevelObjectiveSliSliMetric",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationsignalsServiceLevelObjectiveSliOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveSli | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._metricThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricThreshold = this._metricThreshold;
    }
    if (this._sliMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sliMetric = this._sliMetric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveSli | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparisonOperator = undefined;
      this._metricThreshold = undefined;
      this._sliMetric.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparisonOperator = value.comparisonOperator;
      this._metricThreshold = value.metricThreshold;
      this._sliMetric.internalValue = value.sliMetric;
    }
  }

  // comparison_operator - computed: true, optional: true, required: false
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  public resetComparisonOperator() {
    this._comparisonOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // metric_threshold - computed: true, optional: true, required: false
  private _metricThreshold?: number; 
  public get metricThreshold() {
    return this.getNumberAttribute('metric_threshold');
  }
  public set metricThreshold(value: number) {
    this._metricThreshold = value;
  }
  public resetMetricThreshold() {
    this._metricThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricThresholdInput() {
    return this._metricThreshold;
  }

  // sli_metric - computed: true, optional: true, required: false
  private _sliMetric = new ApplicationsignalsServiceLevelObjectiveSliSliMetricOutputReference(this, "sli_metric");
  public get sliMetric() {
    return this._sliMetric;
  }
  public putSliMetric(value: ApplicationsignalsServiceLevelObjectiveSliSliMetric) {
    this._sliMetric.internalValue = value;
  }
  public resetSliMetric() {
    this._sliMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sliMetricInput() {
    return this._sliMetric.internalValue;
  }
}
export interface ApplicationsignalsServiceLevelObjectiveTags {
  /**
  * A string that you can use to assign a value. The combination of tag keys and values can help you organize and categorize your resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#key ApplicationsignalsServiceLevelObjective#key}
  */
  readonly key?: string;
  /**
  * The value for the specified tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#value ApplicationsignalsServiceLevelObjective#value}
  */
  readonly value?: string;
}

export function applicationsignalsServiceLevelObjectiveTagsToTerraform(struct?: ApplicationsignalsServiceLevelObjectiveTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function applicationsignalsServiceLevelObjectiveTagsToHclTerraform(struct?: ApplicationsignalsServiceLevelObjectiveTags | cdktn.IResolvable): any {
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

export class ApplicationsignalsServiceLevelObjectiveTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApplicationsignalsServiceLevelObjectiveTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ApplicationsignalsServiceLevelObjectiveTags | cdktn.IResolvable | undefined) {
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

export class ApplicationsignalsServiceLevelObjectiveTagsList extends cdktn.ComplexList {
  public internalValue? : ApplicationsignalsServiceLevelObjectiveTags[] | cdktn.IResolvable

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
  public get(index: number): ApplicationsignalsServiceLevelObjectiveTagsOutputReference {
    return new ApplicationsignalsServiceLevelObjectiveTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective awscc_applicationsignals_service_level_objective}
*/
export class ApplicationsignalsServiceLevelObjective extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_applicationsignals_service_level_objective";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ApplicationsignalsServiceLevelObjective resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationsignalsServiceLevelObjective to import
  * @param importFromId The id of the existing ApplicationsignalsServiceLevelObjective that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationsignalsServiceLevelObjective to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_applicationsignals_service_level_objective", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/applicationsignals_service_level_objective awscc_applicationsignals_service_level_objective} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationsignalsServiceLevelObjectiveConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationsignalsServiceLevelObjectiveConfig) {
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
    this._burnRateConfigurations.internalValue = config.burnRateConfigurations;
    this._description = config.description;
    this._exclusionWindows.internalValue = config.exclusionWindows;
    this._goal.internalValue = config.goal;
    this._name = config.name;
    this._requestBasedSli.internalValue = config.requestBasedSli;
    this._sli.internalValue = config.sli;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // burn_rate_configurations - computed: true, optional: true, required: false
  private _burnRateConfigurations = new ApplicationsignalsServiceLevelObjectiveBurnRateConfigurationsList(this, "burn_rate_configurations", true);
  public get burnRateConfigurations() {
    return this._burnRateConfigurations;
  }
  public putBurnRateConfigurations(value: ApplicationsignalsServiceLevelObjectiveBurnRateConfigurations[] | cdktn.IResolvable) {
    this._burnRateConfigurations.internalValue = value;
  }
  public resetBurnRateConfigurations() {
    this._burnRateConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burnRateConfigurationsInput() {
    return this._burnRateConfigurations.internalValue;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getNumberAttribute('created_time');
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

  // evaluation_type - computed: true, optional: false, required: false
  public get evaluationType() {
    return this.getStringAttribute('evaluation_type');
  }

  // exclusion_windows - computed: true, optional: true, required: false
  private _exclusionWindows = new ApplicationsignalsServiceLevelObjectiveExclusionWindowsList(this, "exclusion_windows", true);
  public get exclusionWindows() {
    return this._exclusionWindows;
  }
  public putExclusionWindows(value: ApplicationsignalsServiceLevelObjectiveExclusionWindows[] | cdktn.IResolvable) {
    this._exclusionWindows.internalValue = value;
  }
  public resetExclusionWindows() {
    this._exclusionWindows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionWindowsInput() {
    return this._exclusionWindows.internalValue;
  }

  // goal - computed: true, optional: true, required: false
  private _goal = new ApplicationsignalsServiceLevelObjectiveGoalOutputReference(this, "goal");
  public get goal() {
    return this._goal;
  }
  public putGoal(value: ApplicationsignalsServiceLevelObjectiveGoal) {
    this._goal.internalValue = value;
  }
  public resetGoal() {
    this._goal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goalInput() {
    return this._goal.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getNumberAttribute('last_updated_time');
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

  // request_based_sli - computed: true, optional: true, required: false
  private _requestBasedSli = new ApplicationsignalsServiceLevelObjectiveRequestBasedSliOutputReference(this, "request_based_sli");
  public get requestBasedSli() {
    return this._requestBasedSli;
  }
  public putRequestBasedSli(value: ApplicationsignalsServiceLevelObjectiveRequestBasedSli) {
    this._requestBasedSli.internalValue = value;
  }
  public resetRequestBasedSli() {
    this._requestBasedSli.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBasedSliInput() {
    return this._requestBasedSli.internalValue;
  }

  // sli - computed: true, optional: true, required: false
  private _sli = new ApplicationsignalsServiceLevelObjectiveSliOutputReference(this, "sli");
  public get sli() {
    return this._sli;
  }
  public putSli(value: ApplicationsignalsServiceLevelObjectiveSli) {
    this._sli.internalValue = value;
  }
  public resetSli() {
    this._sli.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sliInput() {
    return this._sli.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ApplicationsignalsServiceLevelObjectiveTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ApplicationsignalsServiceLevelObjectiveTags[] | cdktn.IResolvable) {
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
      burn_rate_configurations: cdktn.listMapper(applicationsignalsServiceLevelObjectiveBurnRateConfigurationsToTerraform, false)(this._burnRateConfigurations.internalValue),
      description: cdktn.stringToTerraform(this._description),
      exclusion_windows: cdktn.listMapper(applicationsignalsServiceLevelObjectiveExclusionWindowsToTerraform, false)(this._exclusionWindows.internalValue),
      goal: applicationsignalsServiceLevelObjectiveGoalToTerraform(this._goal.internalValue),
      name: cdktn.stringToTerraform(this._name),
      request_based_sli: applicationsignalsServiceLevelObjectiveRequestBasedSliToTerraform(this._requestBasedSli.internalValue),
      sli: applicationsignalsServiceLevelObjectiveSliToTerraform(this._sli.internalValue),
      tags: cdktn.listMapper(applicationsignalsServiceLevelObjectiveTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      burn_rate_configurations: {
        value: cdktn.listMapperHcl(applicationsignalsServiceLevelObjectiveBurnRateConfigurationsToHclTerraform, false)(this._burnRateConfigurations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationsignalsServiceLevelObjectiveBurnRateConfigurationsList",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclusion_windows: {
        value: cdktn.listMapperHcl(applicationsignalsServiceLevelObjectiveExclusionWindowsToHclTerraform, false)(this._exclusionWindows.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationsignalsServiceLevelObjectiveExclusionWindowsList",
      },
      goal: {
        value: applicationsignalsServiceLevelObjectiveGoalToHclTerraform(this._goal.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationsignalsServiceLevelObjectiveGoal",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_based_sli: {
        value: applicationsignalsServiceLevelObjectiveRequestBasedSliToHclTerraform(this._requestBasedSli.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationsignalsServiceLevelObjectiveRequestBasedSli",
      },
      sli: {
        value: applicationsignalsServiceLevelObjectiveSliToHclTerraform(this._sli.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationsignalsServiceLevelObjectiveSli",
      },
      tags: {
        value: cdktn.listMapperHcl(applicationsignalsServiceLevelObjectiveTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationsignalsServiceLevelObjectiveTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
