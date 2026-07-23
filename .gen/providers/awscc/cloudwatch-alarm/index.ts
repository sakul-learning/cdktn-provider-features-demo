// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudwatchAlarmConfig extends cdktn.TerraformMetaArguments {
  /**
  * Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#actions_enabled CloudwatchAlarm#actions_enabled}
  */
  readonly actionsEnabled?: boolean | cdktn.IResolvable;
  /**
  * The list of actions to execute when this alarm transitions into an ALARM state from any other state. Specify each action as an Amazon Resource Name (ARN). For more information about creating alarms and the actions that you can specify, see [PutMetricAlarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricAlarm.html) in the *API Reference*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#alarm_actions CloudwatchAlarm#alarm_actions}
  */
  readonly alarmActions?: string[];
  /**
  * The description of the alarm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#alarm_description CloudwatchAlarm#alarm_description}
  */
  readonly alarmDescription?: string;
  /**
  * The name of the alarm. If you don't specify a name, CFN generates a unique physical ID and uses that ID for the alarm name. 
  *   If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#alarm_name CloudwatchAlarm#alarm_name}
  */
  readonly alarmName?: string;
  /**
  * The arithmetic operation to use when comparing the specified statistic and threshold. The specified statistic value is used as the first operand.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#comparison_operator CloudwatchAlarm#comparison_operator}
  */
  readonly comparisonOperator?: string;
  /**
  * The number of datapoints that must be breaching to trigger the alarm. This is used only if you are setting an "M out of N" alarm. In that case, this value is the M, and the value that you set for ``EvaluationPeriods`` is the N value. For more information, see [Evaluating an Alarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation) in the *User Guide*.
  *  If you omit this parameter, CW uses the same value here that you set for ``EvaluationPeriods``, and the alarm goes to alarm state if that many consecutive periods are breaching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#datapoints_to_alarm CloudwatchAlarm#datapoints_to_alarm}
  */
  readonly datapointsToAlarm?: number;
  /**
  * The dimensions for the metric associated with the alarm. For an alarm based on a math expression, you can't specify ``Dimensions``. Instead, you use ``Metrics``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#dimensions CloudwatchAlarm#dimensions}
  */
  readonly dimensions?: CloudwatchAlarmDimensions[] | cdktn.IResolvable;
  /**
  * Used only for alarms based on percentiles. If ``ignore``, the alarm state does not change during periods with too few data points to be statistically significant. If ``evaluate`` or this parameter is not used, the alarm is always evaluated and possibly changes state no matter how many data points are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#evaluate_low_sample_count_percentile CloudwatchAlarm#evaluate_low_sample_count_percentile}
  */
  readonly evaluateLowSampleCountPercentile?: string;
  /**
  * The evaluation criteria for the alarm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#evaluation_criteria CloudwatchAlarm#evaluation_criteria}
  */
  readonly evaluationCriteria?: CloudwatchAlarmEvaluationCriteria;
  /**
  * The frequency, in seconds, at which the alarm is evaluated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#evaluation_interval CloudwatchAlarm#evaluation_interval}
  */
  readonly evaluationInterval?: number;
  /**
  * The number of periods over which data is compared to the specified threshold. If you are setting an alarm that requires that a number of consecutive data points be breaching to trigger the alarm, this value specifies that number. If you are setting an "M out of N" alarm, this value is the N, and ``DatapointsToAlarm`` is the M.
  *  For more information, see [Evaluating an Alarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation) in the *User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#evaluation_periods CloudwatchAlarm#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * The percentile statistic for the metric associated with the alarm. Specify a value between p0.0 and p100.
  *  For an alarm based on a metric, you must specify either ``Statistic`` or ``ExtendedStatistic`` but not both.
  *  For an alarm based on a math expression, you can't specify ``ExtendedStatistic``. Instead, you use ``Metrics``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#extended_statistic CloudwatchAlarm#extended_statistic}
  */
  readonly extendedStatistic?: string;
  /**
  * The actions to execute when this alarm transitions to the ``INSUFFICIENT_DATA`` state from any other state. Each action is specified as an Amazon Resource Name (ARN).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#insufficient_data_actions CloudwatchAlarm#insufficient_data_actions}
  */
  readonly insufficientDataActions?: string[];
  /**
  * The name of the metric associated with the alarm. This is required for an alarm based on a metric. For an alarm based on a math expression, you use ``Metrics`` instead and you can't specify ``MetricName``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#metric_name CloudwatchAlarm#metric_name}
  */
  readonly metricName?: string;
  /**
  * An array that enables you to create an alarm based on the result of a metric math expression. Each item in the array either retrieves a metric or performs a math expression.
  *  If you specify the ``Metrics`` parameter, you cannot specify ``MetricName``, ``Dimensions``, ``Period``, ``Namespace``, ``Statistic``, ``ExtendedStatistic``, or ``Unit``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#metrics CloudwatchAlarm#metrics}
  */
  readonly metrics?: CloudwatchAlarmMetrics[] | cdktn.IResolvable;
  /**
  * The namespace of the metric associated with the alarm. This is required for an alarm based on a metric. For an alarm based on a math expression, you can't specify ``Namespace`` and you use ``Metrics`` instead.
  *  For a list of namespaces for metrics from AWS services, see [Services That Publish Metrics.](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#namespace CloudwatchAlarm#namespace}
  */
  readonly namespace?: string;
  /**
  * The actions to execute when this alarm transitions to the ``OK`` state from any other state. Each action is specified as an Amazon Resource Name (ARN).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#ok_actions CloudwatchAlarm#ok_actions}
  */
  readonly okActions?: string[];
  /**
  * The period, in seconds, over which the statistic is applied. This is required for an alarm based on a metric. Valid values are 10, 20, 30, 60, and any multiple of 60.
  *  For an alarm based on a math expression, you can't specify ``Period``, and instead you use the ``Metrics`` parameter.
  *  *Minimum:* 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#period CloudwatchAlarm#period}
  */
  readonly period?: number;
  /**
  * The statistic for the metric associated with the alarm, other than percentile. For percentile statistics, use ``ExtendedStatistic``.
  *  For an alarm based on a metric, you must specify either ``Statistic`` or ``ExtendedStatistic`` but not both.
  *  For an alarm based on a math expression, you can't specify ``Statistic``. Instead, you use ``Metrics``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#statistic CloudwatchAlarm#statistic}
  */
  readonly statistic?: string;
  /**
  * A list of key-value pairs to associate with the alarm. You can associate as many as 50 tags with an alarm. To be able to associate tags with the alarm when you create the alarm, you must have the ``cloudwatch:TagResource`` permission.
  *  Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#tags CloudwatchAlarm#tags}
  */
  readonly tags?: CloudwatchAlarmTags[] | cdktn.IResolvable;
  /**
  * The value to compare with the specified statistic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#threshold CloudwatchAlarm#threshold}
  */
  readonly threshold?: number;
  /**
  * In an alarm based on an anomaly detection model, this is the ID of the ``ANOMALY_DETECTION_BAND`` function used as the threshold for the alarm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#threshold_metric_id CloudwatchAlarm#threshold_metric_id}
  */
  readonly thresholdMetricId?: string;
  /**
  * Sets how this alarm is to handle missing data points. Valid values are ``breaching``, ``notBreaching``, ``ignore``, and ``missing``. For more information, see [Configuring How Alarms Treat Missing Data](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-missing-data) in the *Amazon User Guide*.
  *  If you omit this parameter, the default behavior of ``missing`` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#treat_missing_data CloudwatchAlarm#treat_missing_data}
  */
  readonly treatMissingData?: string;
  /**
  * The unit of the metric associated with the alarm. Specify this only if you are creating an alarm based on a single metric. Do not specify this if you are specifying a ``Metrics`` array.
  *   You can specify the following values: Seconds, Microseconds, Milliseconds, Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, Bits, Kilobits, Megabits, Gigabits, Terabits, Percent, Count, Bytes/Second, Kilobytes/Second, Megabytes/Second, Gigabytes/Second, Terabytes/Second, Bits/Second, Kilobits/Second, Megabits/Second, Gigabits/Second, Terabits/Second, Count/Second, or None.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#unit CloudwatchAlarm#unit}
  */
  readonly unit?: string;
}
export interface CloudwatchAlarmDimensions {
  /**
  * The name of the dimension, from 1?255 characters in length. This dimension name must have been included when the metric was published.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#name CloudwatchAlarm#name}
  */
  readonly name?: string;
  /**
  * The value for the dimension, from 1?255 characters in length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#value CloudwatchAlarm#value}
  */
  readonly value?: string;
}

export function cloudwatchAlarmDimensionsToTerraform(struct?: CloudwatchAlarmDimensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function cloudwatchAlarmDimensionsToHclTerraform(struct?: CloudwatchAlarmDimensions | cdktn.IResolvable): any {
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

export class CloudwatchAlarmDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchAlarmDimensions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CloudwatchAlarmDimensions | cdktn.IResolvable | undefined) {
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

export class CloudwatchAlarmDimensionsList extends cdktn.ComplexList {
  public internalValue? : CloudwatchAlarmDimensions[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchAlarmDimensionsOutputReference {
    return new CloudwatchAlarmDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchAlarmEvaluationCriteriaPromQlCriteria {
  /**
  * The duration, in seconds, that a contributor must be continuously breaching before it transitions to the ``ALARM`` state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#pending_period CloudwatchAlarm#pending_period}
  */
  readonly pendingPeriod?: number;
  /**
  * The PromQL query that the alarm evaluates. The query must return a result of vector type. Each entry in the vector result represents an alarm contributor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#query CloudwatchAlarm#query}
  */
  readonly query?: string;
  /**
  * The duration, in seconds, that a contributor must continuously not be breaching before it transitions back to the ``OK`` state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#recovery_period CloudwatchAlarm#recovery_period}
  */
  readonly recoveryPeriod?: number;
}

export function cloudwatchAlarmEvaluationCriteriaPromQlCriteriaToTerraform(struct?: CloudwatchAlarmEvaluationCriteriaPromQlCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pending_period: cdktn.numberToTerraform(struct!.pendingPeriod),
    query: cdktn.stringToTerraform(struct!.query),
    recovery_period: cdktn.numberToTerraform(struct!.recoveryPeriod),
  }
}


export function cloudwatchAlarmEvaluationCriteriaPromQlCriteriaToHclTerraform(struct?: CloudwatchAlarmEvaluationCriteriaPromQlCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pending_period: {
      value: cdktn.numberToHclTerraform(struct!.pendingPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query: {
      value: cdktn.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recovery_period: {
      value: cdktn.numberToHclTerraform(struct!.recoveryPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudwatchAlarmEvaluationCriteriaPromQlCriteria | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pendingPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.pendingPeriod = this._pendingPeriod;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._recoveryPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryPeriod = this._recoveryPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchAlarmEvaluationCriteriaPromQlCriteria | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pendingPeriod = undefined;
      this._query = undefined;
      this._recoveryPeriod = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pendingPeriod = value.pendingPeriod;
      this._query = value.query;
      this._recoveryPeriod = value.recoveryPeriod;
    }
  }

  // pending_period - computed: true, optional: true, required: false
  private _pendingPeriod?: number; 
  public get pendingPeriod() {
    return this.getNumberAttribute('pending_period');
  }
  public set pendingPeriod(value: number) {
    this._pendingPeriod = value;
  }
  public resetPendingPeriod() {
    this._pendingPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingPeriodInput() {
    return this._pendingPeriod;
  }

  // query - computed: true, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // recovery_period - computed: true, optional: true, required: false
  private _recoveryPeriod?: number; 
  public get recoveryPeriod() {
    return this.getNumberAttribute('recovery_period');
  }
  public set recoveryPeriod(value: number) {
    this._recoveryPeriod = value;
  }
  public resetRecoveryPeriod() {
    this._recoveryPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPeriodInput() {
    return this._recoveryPeriod;
  }
}
export interface CloudwatchAlarmEvaluationCriteria {
  /**
  * The PromQL criteria for the alarm evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#prom_ql_criteria CloudwatchAlarm#prom_ql_criteria}
  */
  readonly promQlCriteria?: CloudwatchAlarmEvaluationCriteriaPromQlCriteria;
}

export function cloudwatchAlarmEvaluationCriteriaToTerraform(struct?: CloudwatchAlarmEvaluationCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    prom_ql_criteria: cloudwatchAlarmEvaluationCriteriaPromQlCriteriaToTerraform(struct!.promQlCriteria),
  }
}


export function cloudwatchAlarmEvaluationCriteriaToHclTerraform(struct?: CloudwatchAlarmEvaluationCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    prom_ql_criteria: {
      value: cloudwatchAlarmEvaluationCriteriaPromQlCriteriaToHclTerraform(struct!.promQlCriteria),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudwatchAlarmEvaluationCriteriaPromQlCriteria",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchAlarmEvaluationCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudwatchAlarmEvaluationCriteria | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._promQlCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.promQlCriteria = this._promQlCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchAlarmEvaluationCriteria | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._promQlCriteria.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._promQlCriteria.internalValue = value.promQlCriteria;
    }
  }

  // prom_ql_criteria - computed: true, optional: true, required: false
  private _promQlCriteria = new CloudwatchAlarmEvaluationCriteriaPromQlCriteriaOutputReference(this, "prom_ql_criteria");
  public get promQlCriteria() {
    return this._promQlCriteria;
  }
  public putPromQlCriteria(value: CloudwatchAlarmEvaluationCriteriaPromQlCriteria) {
    this._promQlCriteria.internalValue = value;
  }
  public resetPromQlCriteria() {
    this._promQlCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promQlCriteriaInput() {
    return this._promQlCriteria.internalValue;
  }
}
export interface CloudwatchAlarmMetricsMetricStatMetricDimensions {
  /**
  * The name of the dimension, from 1?255 characters in length. This dimension name must have been included when the metric was published.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#name CloudwatchAlarm#name}
  */
  readonly name?: string;
  /**
  * The value for the dimension, from 1?255 characters in length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#value CloudwatchAlarm#value}
  */
  readonly value?: string;
}

export function cloudwatchAlarmMetricsMetricStatMetricDimensionsToTerraform(struct?: CloudwatchAlarmMetricsMetricStatMetricDimensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function cloudwatchAlarmMetricsMetricStatMetricDimensionsToHclTerraform(struct?: CloudwatchAlarmMetricsMetricStatMetricDimensions | cdktn.IResolvable): any {
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

export class CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchAlarmMetricsMetricStatMetricDimensions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CloudwatchAlarmMetricsMetricStatMetricDimensions | cdktn.IResolvable | undefined) {
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

export class CloudwatchAlarmMetricsMetricStatMetricDimensionsList extends cdktn.ComplexList {
  public internalValue? : CloudwatchAlarmMetricsMetricStatMetricDimensions[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference {
    return new CloudwatchAlarmMetricsMetricStatMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchAlarmMetricsMetricStatMetric {
  /**
  * The metric dimensions that you want to be used for the metric that the alarm will watch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#dimensions CloudwatchAlarm#dimensions}
  */
  readonly dimensions?: CloudwatchAlarmMetricsMetricStatMetricDimensions[] | cdktn.IResolvable;
  /**
  * The name of the metric that you want the alarm to watch. This is a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#metric_name CloudwatchAlarm#metric_name}
  */
  readonly metricName?: string;
  /**
  * The namespace of the metric that the alarm will watch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#namespace CloudwatchAlarm#namespace}
  */
  readonly namespace?: string;
}

export function cloudwatchAlarmMetricsMetricStatMetricToTerraform(struct?: CloudwatchAlarmMetricsMetricStatMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimensions: cdktn.listMapper(cloudwatchAlarmMetricsMetricStatMetricDimensionsToTerraform, false)(struct!.dimensions),
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    namespace: cdktn.stringToTerraform(struct!.namespace),
  }
}


export function cloudwatchAlarmMetricsMetricStatMetricToHclTerraform(struct?: CloudwatchAlarmMetricsMetricStatMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimensions: {
      value: cdktn.listMapperHcl(cloudwatchAlarmMetricsMetricStatMetricDimensionsToHclTerraform, false)(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchAlarmMetricsMetricStatMetricDimensionsList",
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

export class CloudwatchAlarmMetricsMetricStatMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudwatchAlarmMetricsMetricStatMetric | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CloudwatchAlarmMetricsMetricStatMetric | cdktn.IResolvable | undefined) {
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
  private _dimensions = new CloudwatchAlarmMetricsMetricStatMetricDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: CloudwatchAlarmMetricsMetricStatMetricDimensions[] | cdktn.IResolvable) {
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
export interface CloudwatchAlarmMetricsMetricStat {
  /**
  * The metric to return, including the metric name, namespace, and dimensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#metric CloudwatchAlarm#metric}
  */
  readonly metric?: CloudwatchAlarmMetricsMetricStatMetric;
  /**
  * The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 20, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a ``PutMetricData`` call that includes a ``StorageResolution`` of 1 second.
  *  If the ``StartTime`` parameter specifies a time stamp that is greater than 3 hours ago, you must specify the period as follows or no data points in that time range is returned:
  *   +  Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).
  *   +  Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).
  *   +  Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#period CloudwatchAlarm#period}
  */
  readonly period?: number;
  /**
  * The statistic to return. It can include any CW statistic or extended statistic. For a list of valid values, see the table in [Statistics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic) in the *User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#stat CloudwatchAlarm#stat}
  */
  readonly stat?: string;
  /**
  * The unit to use for the returned data points. 
  *  Valid values are: Seconds, Microseconds, Milliseconds, Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, Bits, Kilobits, Megabits, Gigabits, Terabits, Percent, Count, Bytes/Second, Kilobytes/Second, Megabytes/Second, Gigabytes/Second, Terabytes/Second, Bits/Second, Kilobits/Second, Megabits/Second, Gigabits/Second, Terabits/Second, Count/Second, or None.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#unit CloudwatchAlarm#unit}
  */
  readonly unit?: string;
}

export function cloudwatchAlarmMetricsMetricStatToTerraform(struct?: CloudwatchAlarmMetricsMetricStat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric: cloudwatchAlarmMetricsMetricStatMetricToTerraform(struct!.metric),
    period: cdktn.numberToTerraform(struct!.period),
    stat: cdktn.stringToTerraform(struct!.stat),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function cloudwatchAlarmMetricsMetricStatToHclTerraform(struct?: CloudwatchAlarmMetricsMetricStat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric: {
      value: cloudwatchAlarmMetricsMetricStatMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudwatchAlarmMetricsMetricStatMetric",
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

export class CloudwatchAlarmMetricsMetricStatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudwatchAlarmMetricsMetricStat | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CloudwatchAlarmMetricsMetricStat | cdktn.IResolvable | undefined) {
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
  private _metric = new CloudwatchAlarmMetricsMetricStatMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: CloudwatchAlarmMetricsMetricStatMetric) {
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
export interface CloudwatchAlarmMetrics {
  /**
  * The ID of the account where the metrics are located, if this is a cross-account alarm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#account_id CloudwatchAlarm#account_id}
  */
  readonly accountId?: string;
  /**
  * The math expression to be performed on the returned data, if this object is performing a math expression. This expression can use the ``Id`` of the other metrics to refer to those metrics, and can also use the ``Id`` of other expressions to use the result of those expressions. For more information about metric math expressions, see [Metric Math Syntax and Functions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax) in the *User Guide*.
  *  Within each MetricDataQuery object, you must specify either ``Expression`` or ``MetricStat`` but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#expression CloudwatchAlarm#expression}
  */
  readonly expression?: string;
  /**
  * A short name used to tie this object to the results in the response. This name must be unique within a single call to ``GetMetricData``. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscore. The first character must be a lowercase letter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#id CloudwatchAlarm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A human-readable label for this metric or expression. This is especially useful if this is an expression, so that you know what the value represents. If the metric or expression is shown in a CW dashboard widget, the label is shown. If ``Label`` is omitted, CW generates a default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#label CloudwatchAlarm#label}
  */
  readonly label?: string;
  /**
  * The metric to be returned, along with statistics, period, and units. Use this parameter only if this object is retrieving a metric and not performing a math expression on returned data.
  *  Within one MetricDataQuery object, you must specify either ``Expression`` or ``MetricStat`` but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#metric_stat CloudwatchAlarm#metric_stat}
  */
  readonly metricStat?: CloudwatchAlarmMetricsMetricStat;
  /**
  * The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 20, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a ``PutMetricData`` operation that includes a ``StorageResolution of 1 second``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#period CloudwatchAlarm#period}
  */
  readonly period?: number;
  /**
  * This option indicates whether to return the timestamps and raw data values of this metric.
  *  When you create an alarm based on a metric math expression, specify ``True`` for this value for only the one math expression that the alarm is based on. You must specify ``False`` for ``ReturnData`` for all the other metrics and expressions used in the alarm.
  *  This field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#return_data CloudwatchAlarm#return_data}
  */
  readonly returnData?: boolean | cdktn.IResolvable;
}

export function cloudwatchAlarmMetricsToTerraform(struct?: CloudwatchAlarmMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    expression: cdktn.stringToTerraform(struct!.expression),
    id: cdktn.stringToTerraform(struct!.id),
    label: cdktn.stringToTerraform(struct!.label),
    metric_stat: cloudwatchAlarmMetricsMetricStatToTerraform(struct!.metricStat),
    period: cdktn.numberToTerraform(struct!.period),
    return_data: cdktn.booleanToTerraform(struct!.returnData),
  }
}


export function cloudwatchAlarmMetricsToHclTerraform(struct?: CloudwatchAlarmMetrics | cdktn.IResolvable): any {
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
    label: {
      value: cdktn.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_stat: {
      value: cloudwatchAlarmMetricsMetricStatToHclTerraform(struct!.metricStat),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudwatchAlarmMetricsMetricStat",
    },
    period: {
      value: cdktn.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class CloudwatchAlarmMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchAlarmMetrics | cdktn.IResolvable | undefined {
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
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._metricStat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricStat = this._metricStat?.internalValue;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._returnData !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnData = this._returnData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchAlarmMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._expression = undefined;
      this._id = undefined;
      this._label = undefined;
      this._metricStat.internalValue = undefined;
      this._period = undefined;
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
      this._label = value.label;
      this._metricStat.internalValue = value.metricStat;
      this._period = value.period;
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

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // metric_stat - computed: true, optional: true, required: false
  private _metricStat = new CloudwatchAlarmMetricsMetricStatOutputReference(this, "metric_stat");
  public get metricStat() {
    return this._metricStat;
  }
  public putMetricStat(value: CloudwatchAlarmMetricsMetricStat) {
    this._metricStat.internalValue = value;
  }
  public resetMetricStat() {
    this._metricStat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricStatInput() {
    return this._metricStat.internalValue;
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

export class CloudwatchAlarmMetricsList extends cdktn.ComplexList {
  public internalValue? : CloudwatchAlarmMetrics[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchAlarmMetricsOutputReference {
    return new CloudwatchAlarmMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchAlarmTags {
  /**
  * A string that you can use to assign a value. The combination of tag keys and values can help you organize and categorize your resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#key CloudwatchAlarm#key}
  */
  readonly key?: string;
  /**
  * The value for the specified tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#value CloudwatchAlarm#value}
  */
  readonly value?: string;
}

export function cloudwatchAlarmTagsToTerraform(struct?: CloudwatchAlarmTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function cloudwatchAlarmTagsToHclTerraform(struct?: CloudwatchAlarmTags | cdktn.IResolvable): any {
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

export class CloudwatchAlarmTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchAlarmTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CloudwatchAlarmTags | cdktn.IResolvable | undefined) {
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

export class CloudwatchAlarmTagsList extends cdktn.ComplexList {
  public internalValue? : CloudwatchAlarmTags[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchAlarmTagsOutputReference {
    return new CloudwatchAlarmTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm awscc_cloudwatch_alarm}
*/
export class CloudwatchAlarm extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cloudwatch_alarm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudwatchAlarm resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudwatchAlarm to import
  * @param importFromId The id of the existing CloudwatchAlarm that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudwatchAlarm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudwatch_alarm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudwatch_alarm awscc_cloudwatch_alarm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchAlarmConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudwatchAlarmConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudwatch_alarm',
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
    this._actionsEnabled = config.actionsEnabled;
    this._alarmActions = config.alarmActions;
    this._alarmDescription = config.alarmDescription;
    this._alarmName = config.alarmName;
    this._comparisonOperator = config.comparisonOperator;
    this._datapointsToAlarm = config.datapointsToAlarm;
    this._dimensions.internalValue = config.dimensions;
    this._evaluateLowSampleCountPercentile = config.evaluateLowSampleCountPercentile;
    this._evaluationCriteria.internalValue = config.evaluationCriteria;
    this._evaluationInterval = config.evaluationInterval;
    this._evaluationPeriods = config.evaluationPeriods;
    this._extendedStatistic = config.extendedStatistic;
    this._insufficientDataActions = config.insufficientDataActions;
    this._metricName = config.metricName;
    this._metrics.internalValue = config.metrics;
    this._namespace = config.namespace;
    this._okActions = config.okActions;
    this._period = config.period;
    this._statistic = config.statistic;
    this._tags.internalValue = config.tags;
    this._threshold = config.threshold;
    this._thresholdMetricId = config.thresholdMetricId;
    this._treatMissingData = config.treatMissingData;
    this._unit = config.unit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions_enabled - computed: true, optional: true, required: false
  private _actionsEnabled?: boolean | cdktn.IResolvable; 
  public get actionsEnabled() {
    return this.getBooleanAttribute('actions_enabled');
  }
  public set actionsEnabled(value: boolean | cdktn.IResolvable) {
    this._actionsEnabled = value;
  }
  public resetActionsEnabled() {
    this._actionsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsEnabledInput() {
    return this._actionsEnabled;
  }

  // alarm_actions - computed: true, optional: true, required: false
  private _alarmActions?: string[]; 
  public get alarmActions() {
    return this.getListAttribute('alarm_actions');
  }
  public set alarmActions(value: string[]) {
    this._alarmActions = value;
  }
  public resetAlarmActions() {
    this._alarmActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmActionsInput() {
    return this._alarmActions;
  }

  // alarm_description - computed: true, optional: true, required: false
  private _alarmDescription?: string; 
  public get alarmDescription() {
    return this.getStringAttribute('alarm_description');
  }
  public set alarmDescription(value: string) {
    this._alarmDescription = value;
  }
  public resetAlarmDescription() {
    this._alarmDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmDescriptionInput() {
    return this._alarmDescription;
  }

  // alarm_name - computed: true, optional: true, required: false
  private _alarmName?: string; 
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }
  public set alarmName(value: string) {
    this._alarmName = value;
  }
  public resetAlarmName() {
    this._alarmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmNameInput() {
    return this._alarmName;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // datapoints_to_alarm - computed: true, optional: true, required: false
  private _datapointsToAlarm?: number; 
  public get datapointsToAlarm() {
    return this.getNumberAttribute('datapoints_to_alarm');
  }
  public set datapointsToAlarm(value: number) {
    this._datapointsToAlarm = value;
  }
  public resetDatapointsToAlarm() {
    this._datapointsToAlarm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datapointsToAlarmInput() {
    return this._datapointsToAlarm;
  }

  // dimensions - computed: true, optional: true, required: false
  private _dimensions = new CloudwatchAlarmDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: CloudwatchAlarmDimensions[] | cdktn.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // evaluate_low_sample_count_percentile - computed: true, optional: true, required: false
  private _evaluateLowSampleCountPercentile?: string; 
  public get evaluateLowSampleCountPercentile() {
    return this.getStringAttribute('evaluate_low_sample_count_percentile');
  }
  public set evaluateLowSampleCountPercentile(value: string) {
    this._evaluateLowSampleCountPercentile = value;
  }
  public resetEvaluateLowSampleCountPercentile() {
    this._evaluateLowSampleCountPercentile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateLowSampleCountPercentileInput() {
    return this._evaluateLowSampleCountPercentile;
  }

  // evaluation_criteria - computed: true, optional: true, required: false
  private _evaluationCriteria = new CloudwatchAlarmEvaluationCriteriaOutputReference(this, "evaluation_criteria");
  public get evaluationCriteria() {
    return this._evaluationCriteria;
  }
  public putEvaluationCriteria(value: CloudwatchAlarmEvaluationCriteria) {
    this._evaluationCriteria.internalValue = value;
  }
  public resetEvaluationCriteria() {
    this._evaluationCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationCriteriaInput() {
    return this._evaluationCriteria.internalValue;
  }

  // evaluation_interval - computed: true, optional: true, required: false
  private _evaluationInterval?: number; 
  public get evaluationInterval() {
    return this.getNumberAttribute('evaluation_interval');
  }
  public set evaluationInterval(value: number) {
    this._evaluationInterval = value;
  }
  public resetEvaluationInterval() {
    this._evaluationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationIntervalInput() {
    return this._evaluationInterval;
  }

  // evaluation_periods - computed: true, optional: true, required: false
  private _evaluationPeriods?: number; 
  public get evaluationPeriods() {
    return this.getNumberAttribute('evaluation_periods');
  }
  public set evaluationPeriods(value: number) {
    this._evaluationPeriods = value;
  }
  public resetEvaluationPeriods() {
    this._evaluationPeriods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationPeriodsInput() {
    return this._evaluationPeriods;
  }

  // extended_statistic - computed: true, optional: true, required: false
  private _extendedStatistic?: string; 
  public get extendedStatistic() {
    return this.getStringAttribute('extended_statistic');
  }
  public set extendedStatistic(value: string) {
    this._extendedStatistic = value;
  }
  public resetExtendedStatistic() {
    this._extendedStatistic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedStatisticInput() {
    return this._extendedStatistic;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // insufficient_data_actions - computed: true, optional: true, required: false
  private _insufficientDataActions?: string[]; 
  public get insufficientDataActions() {
    return this.getListAttribute('insufficient_data_actions');
  }
  public set insufficientDataActions(value: string[]) {
    this._insufficientDataActions = value;
  }
  public resetInsufficientDataActions() {
    this._insufficientDataActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insufficientDataActionsInput() {
    return this._insufficientDataActions;
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

  // metrics - computed: true, optional: true, required: false
  private _metrics = new CloudwatchAlarmMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: CloudwatchAlarmMetrics[] | cdktn.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
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

  // ok_actions - computed: true, optional: true, required: false
  private _okActions?: string[]; 
  public get okActions() {
    return this.getListAttribute('ok_actions');
  }
  public set okActions(value: string[]) {
    this._okActions = value;
  }
  public resetOkActions() {
    this._okActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get okActionsInput() {
    return this._okActions;
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

  // tags - computed: true, optional: true, required: false
  private _tags = new CloudwatchAlarmTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CloudwatchAlarmTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // threshold_metric_id - computed: true, optional: true, required: false
  private _thresholdMetricId?: string; 
  public get thresholdMetricId() {
    return this.getStringAttribute('threshold_metric_id');
  }
  public set thresholdMetricId(value: string) {
    this._thresholdMetricId = value;
  }
  public resetThresholdMetricId() {
    this._thresholdMetricId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdMetricIdInput() {
    return this._thresholdMetricId;
  }

  // treat_missing_data - computed: true, optional: true, required: false
  private _treatMissingData?: string; 
  public get treatMissingData() {
    return this.getStringAttribute('treat_missing_data');
  }
  public set treatMissingData(value: string) {
    this._treatMissingData = value;
  }
  public resetTreatMissingData() {
    this._treatMissingData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get treatMissingDataInput() {
    return this._treatMissingData;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions_enabled: cdktn.booleanToTerraform(this._actionsEnabled),
      alarm_actions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._alarmActions),
      alarm_description: cdktn.stringToTerraform(this._alarmDescription),
      alarm_name: cdktn.stringToTerraform(this._alarmName),
      comparison_operator: cdktn.stringToTerraform(this._comparisonOperator),
      datapoints_to_alarm: cdktn.numberToTerraform(this._datapointsToAlarm),
      dimensions: cdktn.listMapper(cloudwatchAlarmDimensionsToTerraform, false)(this._dimensions.internalValue),
      evaluate_low_sample_count_percentile: cdktn.stringToTerraform(this._evaluateLowSampleCountPercentile),
      evaluation_criteria: cloudwatchAlarmEvaluationCriteriaToTerraform(this._evaluationCriteria.internalValue),
      evaluation_interval: cdktn.numberToTerraform(this._evaluationInterval),
      evaluation_periods: cdktn.numberToTerraform(this._evaluationPeriods),
      extended_statistic: cdktn.stringToTerraform(this._extendedStatistic),
      insufficient_data_actions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._insufficientDataActions),
      metric_name: cdktn.stringToTerraform(this._metricName),
      metrics: cdktn.listMapper(cloudwatchAlarmMetricsToTerraform, false)(this._metrics.internalValue),
      namespace: cdktn.stringToTerraform(this._namespace),
      ok_actions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._okActions),
      period: cdktn.numberToTerraform(this._period),
      statistic: cdktn.stringToTerraform(this._statistic),
      tags: cdktn.listMapper(cloudwatchAlarmTagsToTerraform, false)(this._tags.internalValue),
      threshold: cdktn.numberToTerraform(this._threshold),
      threshold_metric_id: cdktn.stringToTerraform(this._thresholdMetricId),
      treat_missing_data: cdktn.stringToTerraform(this._treatMissingData),
      unit: cdktn.stringToTerraform(this._unit),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actions_enabled: {
        value: cdktn.booleanToHclTerraform(this._actionsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alarm_actions: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._alarmActions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      alarm_description: {
        value: cdktn.stringToHclTerraform(this._alarmDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alarm_name: {
        value: cdktn.stringToHclTerraform(this._alarmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comparison_operator: {
        value: cdktn.stringToHclTerraform(this._comparisonOperator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datapoints_to_alarm: {
        value: cdktn.numberToHclTerraform(this._datapointsToAlarm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dimensions: {
        value: cdktn.listMapperHcl(cloudwatchAlarmDimensionsToHclTerraform, false)(this._dimensions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchAlarmDimensionsList",
      },
      evaluate_low_sample_count_percentile: {
        value: cdktn.stringToHclTerraform(this._evaluateLowSampleCountPercentile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      evaluation_criteria: {
        value: cloudwatchAlarmEvaluationCriteriaToHclTerraform(this._evaluationCriteria.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudwatchAlarmEvaluationCriteria",
      },
      evaluation_interval: {
        value: cdktn.numberToHclTerraform(this._evaluationInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      evaluation_periods: {
        value: cdktn.numberToHclTerraform(this._evaluationPeriods),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      extended_statistic: {
        value: cdktn.stringToHclTerraform(this._extendedStatistic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insufficient_data_actions: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._insufficientDataActions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      metric_name: {
        value: cdktn.stringToHclTerraform(this._metricName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metrics: {
        value: cdktn.listMapperHcl(cloudwatchAlarmMetricsToHclTerraform, false)(this._metrics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchAlarmMetricsList",
      },
      namespace: {
        value: cdktn.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ok_actions: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._okActions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      period: {
        value: cdktn.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      statistic: {
        value: cdktn.stringToHclTerraform(this._statistic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(cloudwatchAlarmTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchAlarmTagsList",
      },
      threshold: {
        value: cdktn.numberToHclTerraform(this._threshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_metric_id: {
        value: cdktn.stringToHclTerraform(this._thresholdMetricId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      treat_missing_data: {
        value: cdktn.stringToHclTerraform(this._treatMissingData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit: {
        value: cdktn.stringToHclTerraform(this._unit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
