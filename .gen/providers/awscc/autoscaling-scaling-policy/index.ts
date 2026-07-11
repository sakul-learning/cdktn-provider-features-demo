// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AutoscalingScalingPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Specifies how the scaling adjustment is interpreted. The valid values are ChangeInCapacity, ExactCapacity, and PercentChangeInCapacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#adjustment_type AutoscalingScalingPolicy#adjustment_type}
  */
  readonly adjustmentType?: string;
  /**
  * The name of the Auto Scaling group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#auto_scaling_group_name AutoscalingScalingPolicy#auto_scaling_group_name}
  */
  readonly autoScalingGroupName: string;
  /**
  * The duration of the policy's cooldown period, in seconds. When a cooldown period is specified here, it overrides the default cooldown period defined for the Auto Scaling group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#cooldown AutoscalingScalingPolicy#cooldown}
  */
  readonly cooldown?: string;
  /**
  * The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. If not provided, the default is to use the value from the default cooldown period for the Auto Scaling group. Valid only if the policy type is TargetTrackingScaling or StepScaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#estimated_instance_warmup AutoscalingScalingPolicy#estimated_instance_warmup}
  */
  readonly estimatedInstanceWarmup?: number;
  /**
  * The aggregation type for the CloudWatch metrics. The valid values are Minimum, Maximum, and Average. If the aggregation type is null, the value is treated as Average. Valid only if the policy type is StepScaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#metric_aggregation_type AutoscalingScalingPolicy#metric_aggregation_type}
  */
  readonly metricAggregationType?: string;
  /**
  * The minimum value to scale by when the adjustment type is PercentChangeInCapacity. For example, suppose that you create a step scaling policy to scale out an Auto Scaling group by 25 percent and you specify a MinAdjustmentMagnitude of 2. If the group has 4 instances and the scaling policy is performed, 25 percent of 4 is 1. However, because you specified a MinAdjustmentMagnitude of 2, Amazon EC2 Auto Scaling scales out the group by 2 instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#min_adjustment_magnitude AutoscalingScalingPolicy#min_adjustment_magnitude}
  */
  readonly minAdjustmentMagnitude?: number;
  /**
  * One of the following policy types: TargetTrackingScaling, StepScaling, SimpleScaling (default), PredictiveScaling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#policy_type AutoscalingScalingPolicy#policy_type}
  */
  readonly policyType?: string;
  /**
  * A predictive scaling policy. Includes support for predefined metrics only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#predictive_scaling_configuration AutoscalingScalingPolicy#predictive_scaling_configuration}
  */
  readonly predictiveScalingConfiguration?: AutoscalingScalingPolicyPredictiveScalingConfiguration;
  /**
  * The amount by which to scale, based on the specified adjustment type. A positive value adds to the current capacity while a negative number removes from the current capacity. For exact capacity, you must specify a positive value. Required if the policy type is SimpleScaling. (Not used with any other policy type.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#scaling_adjustment AutoscalingScalingPolicy#scaling_adjustment}
  */
  readonly scalingAdjustment?: number;
  /**
  * A set of adjustments that enable you to scale based on the size of the alarm breach. Required if the policy type is StepScaling. (Not used with any other policy type.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#step_adjustments AutoscalingScalingPolicy#step_adjustments}
  */
  readonly stepAdjustments?: AutoscalingScalingPolicyStepAdjustments[] | cdktn.IResolvable;
  /**
  * A target tracking scaling policy. Includes support for predefined or customized metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#target_tracking_configuration AutoscalingScalingPolicy#target_tracking_configuration}
  */
  readonly targetTrackingConfiguration?: AutoscalingScalingPolicyTargetTrackingConfiguration;
}
export interface AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#name AutoscalingScalingPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#value AutoscalingScalingPolicy#value}
  */
  readonly value?: string;
}

export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsToTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsToHclTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktn.IResolvable): any {
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

export class AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktn.IResolvable | undefined) {
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

export class AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList extends cdktn.ComplexList {
  public internalValue? : AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[] | cdktn.IResolvable

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
  public get(index: number): AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference {
    return new AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#dimensions AutoscalingScalingPolicy#dimensions}
  */
  readonly dimensions?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#metric_name AutoscalingScalingPolicy#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#namespace AutoscalingScalingPolicy#namespace}
  */
  readonly namespace?: string;
}

export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricToTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimensions: cdktn.listMapper(autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsToTerraform, false)(struct!.dimensions),
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    namespace: cdktn.stringToTerraform(struct!.namespace),
  }
}


export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricToHclTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimensions: {
      value: cdktn.listMapperHcl(autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsToHclTerraform, false)(struct!.dimensions),
      isBlock: true,
      type: "set",
      storageClassType: "AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList",
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

export class AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric | cdktn.IResolvable | undefined) {
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
  private _dimensions = new AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList(this, "dimensions", true);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[] | cdktn.IResolvable) {
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
export interface AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#metric AutoscalingScalingPolicy#metric}
  */
  readonly metric?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#stat AutoscalingScalingPolicy#stat}
  */
  readonly stat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#unit AutoscalingScalingPolicy#unit}
  */
  readonly unit?: string;
}

export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatToTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric: autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricToTerraform(struct!.metric),
    stat: cdktn.stringToTerraform(struct!.stat),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatToHclTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric: {
      value: autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric",
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

export class AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
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

  public set internalValue(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric.internalValue = undefined;
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
      this._stat = value.stat;
      this._unit = value.unit;
    }
  }

  // metric - computed: true, optional: true, required: false
  private _metric = new AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
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
export interface AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#expression AutoscalingScalingPolicy#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#id AutoscalingScalingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#label AutoscalingScalingPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#metric_stat AutoscalingScalingPolicy#metric_stat}
  */
  readonly metricStat?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#return_data AutoscalingScalingPolicy#return_data}
  */
  readonly returnData?: boolean | cdktn.IResolvable;
}

export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesToTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
    id: cdktn.stringToTerraform(struct!.id),
    label: cdktn.stringToTerraform(struct!.label),
    metric_stat: autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatToTerraform(struct!.metricStat),
    return_data: cdktn.booleanToTerraform(struct!.returnData),
  }
}


export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesToHclTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries | cdktn.IResolvable): any {
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
      value: autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatToHclTerraform(struct!.metricStat),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat",
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

export class AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._returnData !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnData = this._returnData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._id = undefined;
      this._label = undefined;
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
      this._expression = value.expression;
      this._id = value.id;
      this._label = value.label;
      this._metricStat.internalValue = value.metricStat;
      this._returnData = value.returnData;
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
  private _metricStat = new AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference(this, "metric_stat");
  public get metricStat() {
    return this._metricStat;
  }
  public putMetricStat(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat) {
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

export class AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList extends cdktn.ComplexList {
  public internalValue? : AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries[] | cdktn.IResolvable

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
  public get(index: number): AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference {
    return new AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#metric_data_queries AutoscalingScalingPolicy#metric_data_queries}
  */
  readonly metricDataQueries?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries[] | cdktn.IResolvable;
}

export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationToTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_data_queries: cdktn.listMapper(autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesToTerraform, false)(struct!.metricDataQueries),
  }
}


export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationToHclTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_data_queries: {
      value: cdktn.listMapperHcl(autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesToHclTerraform, false)(struct!.metricDataQueries),
      isBlock: true,
      type: "set",
      storageClassType: "AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricDataQueries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDataQueries = this._metricDataQueries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricDataQueries.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricDataQueries.internalValue = value.metricDataQueries;
    }
  }

  // metric_data_queries - computed: true, optional: true, required: false
  private _metricDataQueries = new AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList(this, "metric_data_queries", true);
  public get metricDataQueries() {
    return this._metricDataQueries;
  }
  public putMetricDataQueries(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries[] | cdktn.IResolvable) {
    this._metricDataQueries.internalValue = value;
  }
  public resetMetricDataQueries() {
    this._metricDataQueries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDataQueriesInput() {
    return this._metricDataQueries.internalValue;
  }
}
export interface AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#name AutoscalingScalingPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#value AutoscalingScalingPolicy#value}
  */
  readonly value?: string;
}

export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsToTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsToHclTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktn.IResolvable): any {
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

export class AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktn.IResolvable | undefined) {
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

export class AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList extends cdktn.ComplexList {
  public internalValue? : AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[] | cdktn.IResolvable

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
  public get(index: number): AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference {
    return new AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#dimensions AutoscalingScalingPolicy#dimensions}
  */
  readonly dimensions?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#metric_name AutoscalingScalingPolicy#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#namespace AutoscalingScalingPolicy#namespace}
  */
  readonly namespace?: string;
}

export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricToTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimensions: cdktn.listMapper(autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsToTerraform, false)(struct!.dimensions),
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    namespace: cdktn.stringToTerraform(struct!.namespace),
  }
}


export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricToHclTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimensions: {
      value: cdktn.listMapperHcl(autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsToHclTerraform, false)(struct!.dimensions),
      isBlock: true,
      type: "set",
      storageClassType: "AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList",
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

export class AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric | cdktn.IResolvable | undefined) {
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
  private _dimensions = new AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList(this, "dimensions", true);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[] | cdktn.IResolvable) {
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
export interface AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#metric AutoscalingScalingPolicy#metric}
  */
  readonly metric?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#stat AutoscalingScalingPolicy#stat}
  */
  readonly stat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#unit AutoscalingScalingPolicy#unit}
  */
  readonly unit?: string;
}

export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatToTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric: autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricToTerraform(struct!.metric),
    stat: cdktn.stringToTerraform(struct!.stat),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatToHclTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric: {
      value: autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric",
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

export class AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
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

  public set internalValue(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric.internalValue = undefined;
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
      this._stat = value.stat;
      this._unit = value.unit;
    }
  }

  // metric - computed: true, optional: true, required: false
  private _metric = new AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
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
export interface AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#expression AutoscalingScalingPolicy#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#id AutoscalingScalingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#label AutoscalingScalingPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#metric_stat AutoscalingScalingPolicy#metric_stat}
  */
  readonly metricStat?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#return_data AutoscalingScalingPolicy#return_data}
  */
  readonly returnData?: boolean | cdktn.IResolvable;
}

export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesToTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
    id: cdktn.stringToTerraform(struct!.id),
    label: cdktn.stringToTerraform(struct!.label),
    metric_stat: autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatToTerraform(struct!.metricStat),
    return_data: cdktn.booleanToTerraform(struct!.returnData),
  }
}


export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesToHclTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries | cdktn.IResolvable): any {
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
      value: autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatToHclTerraform(struct!.metricStat),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat",
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

export class AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._returnData !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnData = this._returnData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._id = undefined;
      this._label = undefined;
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
      this._expression = value.expression;
      this._id = value.id;
      this._label = value.label;
      this._metricStat.internalValue = value.metricStat;
      this._returnData = value.returnData;
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
  private _metricStat = new AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference(this, "metric_stat");
  public get metricStat() {
    return this._metricStat;
  }
  public putMetricStat(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat) {
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

export class AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList extends cdktn.ComplexList {
  public internalValue? : AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries[] | cdktn.IResolvable

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
  public get(index: number): AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference {
    return new AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#metric_data_queries AutoscalingScalingPolicy#metric_data_queries}
  */
  readonly metricDataQueries?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries[] | cdktn.IResolvable;
}

export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationToTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_data_queries: cdktn.listMapper(autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesToTerraform, false)(struct!.metricDataQueries),
  }
}


export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationToHclTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_data_queries: {
      value: cdktn.listMapperHcl(autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesToHclTerraform, false)(struct!.metricDataQueries),
      isBlock: true,
      type: "set",
      storageClassType: "AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricDataQueries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDataQueries = this._metricDataQueries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricDataQueries.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricDataQueries.internalValue = value.metricDataQueries;
    }
  }

  // metric_data_queries - computed: true, optional: true, required: false
  private _metricDataQueries = new AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList(this, "metric_data_queries", true);
  public get metricDataQueries() {
    return this._metricDataQueries;
  }
  public putMetricDataQueries(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries[] | cdktn.IResolvable) {
    this._metricDataQueries.internalValue = value;
  }
  public resetMetricDataQueries() {
    this._metricDataQueries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDataQueriesInput() {
    return this._metricDataQueries.internalValue;
  }
}
export interface AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#name AutoscalingScalingPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#value AutoscalingScalingPolicy#value}
  */
  readonly value?: string;
}

export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsToTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsToHclTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktn.IResolvable): any {
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

export class AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktn.IResolvable | undefined) {
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

export class AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList extends cdktn.ComplexList {
  public internalValue? : AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[] | cdktn.IResolvable

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
  public get(index: number): AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference {
    return new AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#dimensions AutoscalingScalingPolicy#dimensions}
  */
  readonly dimensions?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#metric_name AutoscalingScalingPolicy#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#namespace AutoscalingScalingPolicy#namespace}
  */
  readonly namespace?: string;
}

export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricToTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimensions: cdktn.listMapper(autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsToTerraform, false)(struct!.dimensions),
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    namespace: cdktn.stringToTerraform(struct!.namespace),
  }
}


export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricToHclTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimensions: {
      value: cdktn.listMapperHcl(autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsToHclTerraform, false)(struct!.dimensions),
      isBlock: true,
      type: "set",
      storageClassType: "AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList",
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

export class AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric | cdktn.IResolvable | undefined) {
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
  private _dimensions = new AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList(this, "dimensions", true);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[] | cdktn.IResolvable) {
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
export interface AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#metric AutoscalingScalingPolicy#metric}
  */
  readonly metric?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#stat AutoscalingScalingPolicy#stat}
  */
  readonly stat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#unit AutoscalingScalingPolicy#unit}
  */
  readonly unit?: string;
}

export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatToTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric: autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricToTerraform(struct!.metric),
    stat: cdktn.stringToTerraform(struct!.stat),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatToHclTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric: {
      value: autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric",
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

export class AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
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

  public set internalValue(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric.internalValue = undefined;
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
      this._stat = value.stat;
      this._unit = value.unit;
    }
  }

  // metric - computed: true, optional: true, required: false
  private _metric = new AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
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
export interface AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#expression AutoscalingScalingPolicy#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#id AutoscalingScalingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#label AutoscalingScalingPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#metric_stat AutoscalingScalingPolicy#metric_stat}
  */
  readonly metricStat?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#return_data AutoscalingScalingPolicy#return_data}
  */
  readonly returnData?: boolean | cdktn.IResolvable;
}

export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesToTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
    id: cdktn.stringToTerraform(struct!.id),
    label: cdktn.stringToTerraform(struct!.label),
    metric_stat: autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatToTerraform(struct!.metricStat),
    return_data: cdktn.booleanToTerraform(struct!.returnData),
  }
}


export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesToHclTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries | cdktn.IResolvable): any {
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
      value: autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatToHclTerraform(struct!.metricStat),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat",
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

export class AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._returnData !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnData = this._returnData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._id = undefined;
      this._label = undefined;
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
      this._expression = value.expression;
      this._id = value.id;
      this._label = value.label;
      this._metricStat.internalValue = value.metricStat;
      this._returnData = value.returnData;
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
  private _metricStat = new AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference(this, "metric_stat");
  public get metricStat() {
    return this._metricStat;
  }
  public putMetricStat(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat) {
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

export class AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList extends cdktn.ComplexList {
  public internalValue? : AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries[] | cdktn.IResolvable

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
  public get(index: number): AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference {
    return new AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#metric_data_queries AutoscalingScalingPolicy#metric_data_queries}
  */
  readonly metricDataQueries?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries[] | cdktn.IResolvable;
}

export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationToTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_data_queries: cdktn.listMapper(autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesToTerraform, false)(struct!.metricDataQueries),
  }
}


export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationToHclTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_data_queries: {
      value: cdktn.listMapperHcl(autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesToHclTerraform, false)(struct!.metricDataQueries),
      isBlock: true,
      type: "set",
      storageClassType: "AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricDataQueries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDataQueries = this._metricDataQueries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricDataQueries.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricDataQueries.internalValue = value.metricDataQueries;
    }
  }

  // metric_data_queries - computed: true, optional: true, required: false
  private _metricDataQueries = new AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList(this, "metric_data_queries", true);
  public get metricDataQueries() {
    return this._metricDataQueries;
  }
  public putMetricDataQueries(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries[] | cdktn.IResolvable) {
    this._metricDataQueries.internalValue = value;
  }
  public resetMetricDataQueries() {
    this._metricDataQueries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDataQueriesInput() {
    return this._metricDataQueries.internalValue;
  }
}
export interface AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#predefined_metric_type AutoscalingScalingPolicy#predefined_metric_type}
  */
  readonly predefinedMetricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#resource_label AutoscalingScalingPolicy#resource_label}
  */
  readonly resourceLabel?: string;
}

export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationToTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    predefined_metric_type: cdktn.stringToTerraform(struct!.predefinedMetricType),
    resource_label: cdktn.stringToTerraform(struct!.resourceLabel),
  }
}


export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationToHclTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    predefined_metric_type: {
      value: cdktn.stringToHclTerraform(struct!.predefinedMetricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_label: {
      value: cdktn.stringToHclTerraform(struct!.resourceLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._predefinedMetricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedMetricType = this._predefinedMetricType;
    }
    if (this._resourceLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLabel = this._resourceLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._predefinedMetricType = undefined;
      this._resourceLabel = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._predefinedMetricType = value.predefinedMetricType;
      this._resourceLabel = value.resourceLabel;
    }
  }

  // predefined_metric_type - computed: true, optional: true, required: false
  private _predefinedMetricType?: string; 
  public get predefinedMetricType() {
    return this.getStringAttribute('predefined_metric_type');
  }
  public set predefinedMetricType(value: string) {
    this._predefinedMetricType = value;
  }
  public resetPredefinedMetricType() {
    this._predefinedMetricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedMetricTypeInput() {
    return this._predefinedMetricType;
  }

  // resource_label - computed: true, optional: true, required: false
  private _resourceLabel?: string; 
  public get resourceLabel() {
    return this.getStringAttribute('resource_label');
  }
  public set resourceLabel(value: string) {
    this._resourceLabel = value;
  }
  public resetResourceLabel() {
    this._resourceLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLabelInput() {
    return this._resourceLabel;
  }
}
export interface AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#predefined_metric_type AutoscalingScalingPolicy#predefined_metric_type}
  */
  readonly predefinedMetricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#resource_label AutoscalingScalingPolicy#resource_label}
  */
  readonly resourceLabel?: string;
}

export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationToTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    predefined_metric_type: cdktn.stringToTerraform(struct!.predefinedMetricType),
    resource_label: cdktn.stringToTerraform(struct!.resourceLabel),
  }
}


export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationToHclTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    predefined_metric_type: {
      value: cdktn.stringToHclTerraform(struct!.predefinedMetricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_label: {
      value: cdktn.stringToHclTerraform(struct!.resourceLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._predefinedMetricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedMetricType = this._predefinedMetricType;
    }
    if (this._resourceLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLabel = this._resourceLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._predefinedMetricType = undefined;
      this._resourceLabel = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._predefinedMetricType = value.predefinedMetricType;
      this._resourceLabel = value.resourceLabel;
    }
  }

  // predefined_metric_type - computed: true, optional: true, required: false
  private _predefinedMetricType?: string; 
  public get predefinedMetricType() {
    return this.getStringAttribute('predefined_metric_type');
  }
  public set predefinedMetricType(value: string) {
    this._predefinedMetricType = value;
  }
  public resetPredefinedMetricType() {
    this._predefinedMetricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedMetricTypeInput() {
    return this._predefinedMetricType;
  }

  // resource_label - computed: true, optional: true, required: false
  private _resourceLabel?: string; 
  public get resourceLabel() {
    return this.getStringAttribute('resource_label');
  }
  public set resourceLabel(value: string) {
    this._resourceLabel = value;
  }
  public resetResourceLabel() {
    this._resourceLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLabelInput() {
    return this._resourceLabel;
  }
}
export interface AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#predefined_metric_type AutoscalingScalingPolicy#predefined_metric_type}
  */
  readonly predefinedMetricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#resource_label AutoscalingScalingPolicy#resource_label}
  */
  readonly resourceLabel?: string;
}

export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationToTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    predefined_metric_type: cdktn.stringToTerraform(struct!.predefinedMetricType),
    resource_label: cdktn.stringToTerraform(struct!.resourceLabel),
  }
}


export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationToHclTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    predefined_metric_type: {
      value: cdktn.stringToHclTerraform(struct!.predefinedMetricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_label: {
      value: cdktn.stringToHclTerraform(struct!.resourceLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._predefinedMetricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedMetricType = this._predefinedMetricType;
    }
    if (this._resourceLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLabel = this._resourceLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._predefinedMetricType = undefined;
      this._resourceLabel = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._predefinedMetricType = value.predefinedMetricType;
      this._resourceLabel = value.resourceLabel;
    }
  }

  // predefined_metric_type - computed: true, optional: true, required: false
  private _predefinedMetricType?: string; 
  public get predefinedMetricType() {
    return this.getStringAttribute('predefined_metric_type');
  }
  public set predefinedMetricType(value: string) {
    this._predefinedMetricType = value;
  }
  public resetPredefinedMetricType() {
    this._predefinedMetricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedMetricTypeInput() {
    return this._predefinedMetricType;
  }

  // resource_label - computed: true, optional: true, required: false
  private _resourceLabel?: string; 
  public get resourceLabel() {
    return this.getStringAttribute('resource_label');
  }
  public set resourceLabel(value: string) {
    this._resourceLabel = value;
  }
  public resetResourceLabel() {
    this._resourceLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLabelInput() {
    return this._resourceLabel;
  }
}
export interface AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#customized_capacity_metric_specification AutoscalingScalingPolicy#customized_capacity_metric_specification}
  */
  readonly customizedCapacityMetricSpecification?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#customized_load_metric_specification AutoscalingScalingPolicy#customized_load_metric_specification}
  */
  readonly customizedLoadMetricSpecification?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#customized_scaling_metric_specification AutoscalingScalingPolicy#customized_scaling_metric_specification}
  */
  readonly customizedScalingMetricSpecification?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#predefined_load_metric_specification AutoscalingScalingPolicy#predefined_load_metric_specification}
  */
  readonly predefinedLoadMetricSpecification?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#predefined_metric_pair_specification AutoscalingScalingPolicy#predefined_metric_pair_specification}
  */
  readonly predefinedMetricPairSpecification?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#predefined_scaling_metric_specification AutoscalingScalingPolicy#predefined_scaling_metric_specification}
  */
  readonly predefinedScalingMetricSpecification?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#target_value AutoscalingScalingPolicy#target_value}
  */
  readonly targetValue?: number;
}

export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsToTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    customized_capacity_metric_specification: autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationToTerraform(struct!.customizedCapacityMetricSpecification),
    customized_load_metric_specification: autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationToTerraform(struct!.customizedLoadMetricSpecification),
    customized_scaling_metric_specification: autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationToTerraform(struct!.customizedScalingMetricSpecification),
    predefined_load_metric_specification: autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationToTerraform(struct!.predefinedLoadMetricSpecification),
    predefined_metric_pair_specification: autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationToTerraform(struct!.predefinedMetricPairSpecification),
    predefined_scaling_metric_specification: autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationToTerraform(struct!.predefinedScalingMetricSpecification),
    target_value: cdktn.numberToTerraform(struct!.targetValue),
  }
}


export function autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsToHclTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    customized_capacity_metric_specification: {
      value: autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationToHclTerraform(struct!.customizedCapacityMetricSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification",
    },
    customized_load_metric_specification: {
      value: autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationToHclTerraform(struct!.customizedLoadMetricSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification",
    },
    customized_scaling_metric_specification: {
      value: autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationToHclTerraform(struct!.customizedScalingMetricSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification",
    },
    predefined_load_metric_specification: {
      value: autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationToHclTerraform(struct!.predefinedLoadMetricSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification",
    },
    predefined_metric_pair_specification: {
      value: autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationToHclTerraform(struct!.predefinedMetricPairSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification",
    },
    predefined_scaling_metric_specification: {
      value: autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationToHclTerraform(struct!.predefinedScalingMetricSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification",
    },
    target_value: {
      value: cdktn.numberToHclTerraform(struct!.targetValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customizedCapacityMetricSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizedCapacityMetricSpecification = this._customizedCapacityMetricSpecification?.internalValue;
    }
    if (this._customizedLoadMetricSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizedLoadMetricSpecification = this._customizedLoadMetricSpecification?.internalValue;
    }
    if (this._customizedScalingMetricSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizedScalingMetricSpecification = this._customizedScalingMetricSpecification?.internalValue;
    }
    if (this._predefinedLoadMetricSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedLoadMetricSpecification = this._predefinedLoadMetricSpecification?.internalValue;
    }
    if (this._predefinedMetricPairSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedMetricPairSpecification = this._predefinedMetricPairSpecification?.internalValue;
    }
    if (this._predefinedScalingMetricSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedScalingMetricSpecification = this._predefinedScalingMetricSpecification?.internalValue;
    }
    if (this._targetValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetValue = this._targetValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customizedCapacityMetricSpecification.internalValue = undefined;
      this._customizedLoadMetricSpecification.internalValue = undefined;
      this._customizedScalingMetricSpecification.internalValue = undefined;
      this._predefinedLoadMetricSpecification.internalValue = undefined;
      this._predefinedMetricPairSpecification.internalValue = undefined;
      this._predefinedScalingMetricSpecification.internalValue = undefined;
      this._targetValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customizedCapacityMetricSpecification.internalValue = value.customizedCapacityMetricSpecification;
      this._customizedLoadMetricSpecification.internalValue = value.customizedLoadMetricSpecification;
      this._customizedScalingMetricSpecification.internalValue = value.customizedScalingMetricSpecification;
      this._predefinedLoadMetricSpecification.internalValue = value.predefinedLoadMetricSpecification;
      this._predefinedMetricPairSpecification.internalValue = value.predefinedMetricPairSpecification;
      this._predefinedScalingMetricSpecification.internalValue = value.predefinedScalingMetricSpecification;
      this._targetValue = value.targetValue;
    }
  }

  // customized_capacity_metric_specification - computed: true, optional: true, required: false
  private _customizedCapacityMetricSpecification = new AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference(this, "customized_capacity_metric_specification");
  public get customizedCapacityMetricSpecification() {
    return this._customizedCapacityMetricSpecification;
  }
  public putCustomizedCapacityMetricSpecification(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification) {
    this._customizedCapacityMetricSpecification.internalValue = value;
  }
  public resetCustomizedCapacityMetricSpecification() {
    this._customizedCapacityMetricSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizedCapacityMetricSpecificationInput() {
    return this._customizedCapacityMetricSpecification.internalValue;
  }

  // customized_load_metric_specification - computed: true, optional: true, required: false
  private _customizedLoadMetricSpecification = new AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference(this, "customized_load_metric_specification");
  public get customizedLoadMetricSpecification() {
    return this._customizedLoadMetricSpecification;
  }
  public putCustomizedLoadMetricSpecification(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification) {
    this._customizedLoadMetricSpecification.internalValue = value;
  }
  public resetCustomizedLoadMetricSpecification() {
    this._customizedLoadMetricSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizedLoadMetricSpecificationInput() {
    return this._customizedLoadMetricSpecification.internalValue;
  }

  // customized_scaling_metric_specification - computed: true, optional: true, required: false
  private _customizedScalingMetricSpecification = new AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference(this, "customized_scaling_metric_specification");
  public get customizedScalingMetricSpecification() {
    return this._customizedScalingMetricSpecification;
  }
  public putCustomizedScalingMetricSpecification(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification) {
    this._customizedScalingMetricSpecification.internalValue = value;
  }
  public resetCustomizedScalingMetricSpecification() {
    this._customizedScalingMetricSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizedScalingMetricSpecificationInput() {
    return this._customizedScalingMetricSpecification.internalValue;
  }

  // predefined_load_metric_specification - computed: true, optional: true, required: false
  private _predefinedLoadMetricSpecification = new AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference(this, "predefined_load_metric_specification");
  public get predefinedLoadMetricSpecification() {
    return this._predefinedLoadMetricSpecification;
  }
  public putPredefinedLoadMetricSpecification(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification) {
    this._predefinedLoadMetricSpecification.internalValue = value;
  }
  public resetPredefinedLoadMetricSpecification() {
    this._predefinedLoadMetricSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedLoadMetricSpecificationInput() {
    return this._predefinedLoadMetricSpecification.internalValue;
  }

  // predefined_metric_pair_specification - computed: true, optional: true, required: false
  private _predefinedMetricPairSpecification = new AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference(this, "predefined_metric_pair_specification");
  public get predefinedMetricPairSpecification() {
    return this._predefinedMetricPairSpecification;
  }
  public putPredefinedMetricPairSpecification(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification) {
    this._predefinedMetricPairSpecification.internalValue = value;
  }
  public resetPredefinedMetricPairSpecification() {
    this._predefinedMetricPairSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedMetricPairSpecificationInput() {
    return this._predefinedMetricPairSpecification.internalValue;
  }

  // predefined_scaling_metric_specification - computed: true, optional: true, required: false
  private _predefinedScalingMetricSpecification = new AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference(this, "predefined_scaling_metric_specification");
  public get predefinedScalingMetricSpecification() {
    return this._predefinedScalingMetricSpecification;
  }
  public putPredefinedScalingMetricSpecification(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification) {
    this._predefinedScalingMetricSpecification.internalValue = value;
  }
  public resetPredefinedScalingMetricSpecification() {
    this._predefinedScalingMetricSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedScalingMetricSpecificationInput() {
    return this._predefinedScalingMetricSpecification.internalValue;
  }

  // target_value - computed: true, optional: true, required: false
  private _targetValue?: number; 
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
  public set targetValue(value: number) {
    this._targetValue = value;
  }
  public resetTargetValue() {
    this._targetValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetValueInput() {
    return this._targetValue;
  }
}

export class AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList extends cdktn.ComplexList {
  public internalValue? : AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications[] | cdktn.IResolvable

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
  public get(index: number): AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference {
    return new AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingScalingPolicyPredictiveScalingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#max_capacity_breach_behavior AutoscalingScalingPolicy#max_capacity_breach_behavior}
  */
  readonly maxCapacityBreachBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#max_capacity_buffer AutoscalingScalingPolicy#max_capacity_buffer}
  */
  readonly maxCapacityBuffer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#metric_specifications AutoscalingScalingPolicy#metric_specifications}
  */
  readonly metricSpecifications?: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#mode AutoscalingScalingPolicy#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#scheduling_buffer_time AutoscalingScalingPolicy#scheduling_buffer_time}
  */
  readonly schedulingBufferTime?: number;
}

export function autoscalingScalingPolicyPredictiveScalingConfigurationToTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_capacity_breach_behavior: cdktn.stringToTerraform(struct!.maxCapacityBreachBehavior),
    max_capacity_buffer: cdktn.numberToTerraform(struct!.maxCapacityBuffer),
    metric_specifications: cdktn.listMapper(autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsToTerraform, false)(struct!.metricSpecifications),
    mode: cdktn.stringToTerraform(struct!.mode),
    scheduling_buffer_time: cdktn.numberToTerraform(struct!.schedulingBufferTime),
  }
}


export function autoscalingScalingPolicyPredictiveScalingConfigurationToHclTerraform(struct?: AutoscalingScalingPolicyPredictiveScalingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_capacity_breach_behavior: {
      value: cdktn.stringToHclTerraform(struct!.maxCapacityBreachBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_capacity_buffer: {
      value: cdktn.numberToHclTerraform(struct!.maxCapacityBuffer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_specifications: {
      value: cdktn.listMapperHcl(autoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsToHclTerraform, false)(struct!.metricSpecifications),
      isBlock: true,
      type: "set",
      storageClassType: "AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduling_buffer_time: {
      value: cdktn.numberToHclTerraform(struct!.schedulingBufferTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoscalingScalingPolicyPredictiveScalingConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCapacityBreachBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCapacityBreachBehavior = this._maxCapacityBreachBehavior;
    }
    if (this._maxCapacityBuffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCapacityBuffer = this._maxCapacityBuffer;
    }
    if (this._metricSpecifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricSpecifications = this._metricSpecifications?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._schedulingBufferTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingBufferTime = this._schedulingBufferTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingScalingPolicyPredictiveScalingConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxCapacityBreachBehavior = undefined;
      this._maxCapacityBuffer = undefined;
      this._metricSpecifications.internalValue = undefined;
      this._mode = undefined;
      this._schedulingBufferTime = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxCapacityBreachBehavior = value.maxCapacityBreachBehavior;
      this._maxCapacityBuffer = value.maxCapacityBuffer;
      this._metricSpecifications.internalValue = value.metricSpecifications;
      this._mode = value.mode;
      this._schedulingBufferTime = value.schedulingBufferTime;
    }
  }

  // max_capacity_breach_behavior - computed: true, optional: true, required: false
  private _maxCapacityBreachBehavior?: string; 
  public get maxCapacityBreachBehavior() {
    return this.getStringAttribute('max_capacity_breach_behavior');
  }
  public set maxCapacityBreachBehavior(value: string) {
    this._maxCapacityBreachBehavior = value;
  }
  public resetMaxCapacityBreachBehavior() {
    this._maxCapacityBreachBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityBreachBehaviorInput() {
    return this._maxCapacityBreachBehavior;
  }

  // max_capacity_buffer - computed: true, optional: true, required: false
  private _maxCapacityBuffer?: number; 
  public get maxCapacityBuffer() {
    return this.getNumberAttribute('max_capacity_buffer');
  }
  public set maxCapacityBuffer(value: number) {
    this._maxCapacityBuffer = value;
  }
  public resetMaxCapacityBuffer() {
    this._maxCapacityBuffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityBufferInput() {
    return this._maxCapacityBuffer;
  }

  // metric_specifications - computed: true, optional: true, required: false
  private _metricSpecifications = new AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList(this, "metric_specifications", true);
  public get metricSpecifications() {
    return this._metricSpecifications;
  }
  public putMetricSpecifications(value: AutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications[] | cdktn.IResolvable) {
    this._metricSpecifications.internalValue = value;
  }
  public resetMetricSpecifications() {
    this._metricSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricSpecificationsInput() {
    return this._metricSpecifications.internalValue;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // scheduling_buffer_time - computed: true, optional: true, required: false
  private _schedulingBufferTime?: number; 
  public get schedulingBufferTime() {
    return this.getNumberAttribute('scheduling_buffer_time');
  }
  public set schedulingBufferTime(value: number) {
    this._schedulingBufferTime = value;
  }
  public resetSchedulingBufferTime() {
    this._schedulingBufferTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingBufferTimeInput() {
    return this._schedulingBufferTime;
  }
}
export interface AutoscalingScalingPolicyStepAdjustments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#metric_interval_lower_bound AutoscalingScalingPolicy#metric_interval_lower_bound}
  */
  readonly metricIntervalLowerBound?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#metric_interval_upper_bound AutoscalingScalingPolicy#metric_interval_upper_bound}
  */
  readonly metricIntervalUpperBound?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#scaling_adjustment AutoscalingScalingPolicy#scaling_adjustment}
  */
  readonly scalingAdjustment?: number;
}

export function autoscalingScalingPolicyStepAdjustmentsToTerraform(struct?: AutoscalingScalingPolicyStepAdjustments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_interval_lower_bound: cdktn.numberToTerraform(struct!.metricIntervalLowerBound),
    metric_interval_upper_bound: cdktn.numberToTerraform(struct!.metricIntervalUpperBound),
    scaling_adjustment: cdktn.numberToTerraform(struct!.scalingAdjustment),
  }
}


export function autoscalingScalingPolicyStepAdjustmentsToHclTerraform(struct?: AutoscalingScalingPolicyStepAdjustments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_interval_lower_bound: {
      value: cdktn.numberToHclTerraform(struct!.metricIntervalLowerBound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_interval_upper_bound: {
      value: cdktn.numberToHclTerraform(struct!.metricIntervalUpperBound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scaling_adjustment: {
      value: cdktn.numberToHclTerraform(struct!.scalingAdjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingScalingPolicyStepAdjustmentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AutoscalingScalingPolicyStepAdjustments | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricIntervalLowerBound !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricIntervalLowerBound = this._metricIntervalLowerBound;
    }
    if (this._metricIntervalUpperBound !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricIntervalUpperBound = this._metricIntervalUpperBound;
    }
    if (this._scalingAdjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingAdjustment = this._scalingAdjustment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingScalingPolicyStepAdjustments | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricIntervalLowerBound = undefined;
      this._metricIntervalUpperBound = undefined;
      this._scalingAdjustment = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricIntervalLowerBound = value.metricIntervalLowerBound;
      this._metricIntervalUpperBound = value.metricIntervalUpperBound;
      this._scalingAdjustment = value.scalingAdjustment;
    }
  }

  // metric_interval_lower_bound - computed: true, optional: true, required: false
  private _metricIntervalLowerBound?: number; 
  public get metricIntervalLowerBound() {
    return this.getNumberAttribute('metric_interval_lower_bound');
  }
  public set metricIntervalLowerBound(value: number) {
    this._metricIntervalLowerBound = value;
  }
  public resetMetricIntervalLowerBound() {
    this._metricIntervalLowerBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIntervalLowerBoundInput() {
    return this._metricIntervalLowerBound;
  }

  // metric_interval_upper_bound - computed: true, optional: true, required: false
  private _metricIntervalUpperBound?: number; 
  public get metricIntervalUpperBound() {
    return this.getNumberAttribute('metric_interval_upper_bound');
  }
  public set metricIntervalUpperBound(value: number) {
    this._metricIntervalUpperBound = value;
  }
  public resetMetricIntervalUpperBound() {
    this._metricIntervalUpperBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIntervalUpperBoundInput() {
    return this._metricIntervalUpperBound;
  }

  // scaling_adjustment - computed: true, optional: true, required: false
  private _scalingAdjustment?: number; 
  public get scalingAdjustment() {
    return this.getNumberAttribute('scaling_adjustment');
  }
  public set scalingAdjustment(value: number) {
    this._scalingAdjustment = value;
  }
  public resetScalingAdjustment() {
    this._scalingAdjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingAdjustmentInput() {
    return this._scalingAdjustment;
  }
}

export class AutoscalingScalingPolicyStepAdjustmentsList extends cdktn.ComplexList {
  public internalValue? : AutoscalingScalingPolicyStepAdjustments[] | cdktn.IResolvable

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
  public get(index: number): AutoscalingScalingPolicyStepAdjustmentsOutputReference {
    return new AutoscalingScalingPolicyStepAdjustmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#name AutoscalingScalingPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#value AutoscalingScalingPolicy#value}
  */
  readonly value?: string;
}

export function autoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsToTerraform(struct?: AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function autoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsToHclTerraform(struct?: AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions | cdktn.IResolvable): any {
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

export class AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions | cdktn.IResolvable | undefined) {
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

export class AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList extends cdktn.ComplexList {
  public internalValue? : AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions[] | cdktn.IResolvable

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
  public get(index: number): AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference {
    return new AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#name AutoscalingScalingPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#value AutoscalingScalingPolicy#value}
  */
  readonly value?: string;
}

export function autoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsToTerraform(struct?: AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function autoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsToHclTerraform(struct?: AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions | cdktn.IResolvable): any {
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

export class AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions | cdktn.IResolvable | undefined) {
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

export class AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList extends cdktn.ComplexList {
  public internalValue? : AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions[] | cdktn.IResolvable

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
  public get(index: number): AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference {
    return new AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#dimensions AutoscalingScalingPolicy#dimensions}
  */
  readonly dimensions?: AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#metric_name AutoscalingScalingPolicy#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#namespace AutoscalingScalingPolicy#namespace}
  */
  readonly namespace?: string;
}

export function autoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricToTerraform(struct?: AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimensions: cdktn.listMapper(autoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsToTerraform, false)(struct!.dimensions),
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    namespace: cdktn.stringToTerraform(struct!.namespace),
  }
}


export function autoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricToHclTerraform(struct?: AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimensions: {
      value: cdktn.listMapperHcl(autoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsToHclTerraform, false)(struct!.dimensions),
      isBlock: true,
      type: "set",
      storageClassType: "AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList",
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

export class AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric | cdktn.IResolvable | undefined) {
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
  private _dimensions = new AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList(this, "dimensions", true);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions[] | cdktn.IResolvable) {
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
export interface AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#metric AutoscalingScalingPolicy#metric}
  */
  readonly metric?: AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#period AutoscalingScalingPolicy#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#stat AutoscalingScalingPolicy#stat}
  */
  readonly stat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#unit AutoscalingScalingPolicy#unit}
  */
  readonly unit?: string;
}

export function autoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatToTerraform(struct?: AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric: autoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricToTerraform(struct!.metric),
    period: cdktn.numberToTerraform(struct!.period),
    stat: cdktn.stringToTerraform(struct!.stat),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function autoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatToHclTerraform(struct?: AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric: {
      value: autoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric",
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

export class AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat | cdktn.IResolvable | undefined) {
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
  private _metric = new AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric) {
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
export interface AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#expression AutoscalingScalingPolicy#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#id AutoscalingScalingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#label AutoscalingScalingPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#metric_stat AutoscalingScalingPolicy#metric_stat}
  */
  readonly metricStat?: AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#period AutoscalingScalingPolicy#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#return_data AutoscalingScalingPolicy#return_data}
  */
  readonly returnData?: boolean | cdktn.IResolvable;
}

export function autoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsToTerraform(struct?: AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
    id: cdktn.stringToTerraform(struct!.id),
    label: cdktn.stringToTerraform(struct!.label),
    metric_stat: autoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatToTerraform(struct!.metricStat),
    period: cdktn.numberToTerraform(struct!.period),
    return_data: cdktn.booleanToTerraform(struct!.returnData),
  }
}


export function autoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsToHclTerraform(struct?: AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics | cdktn.IResolvable): any {
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
      value: autoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatToHclTerraform(struct!.metricStat),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat",
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

export class AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._expression = value.expression;
      this._id = value.id;
      this._label = value.label;
      this._metricStat.internalValue = value.metricStat;
      this._period = value.period;
      this._returnData = value.returnData;
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
  private _metricStat = new AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference(this, "metric_stat");
  public get metricStat() {
    return this._metricStat;
  }
  public putMetricStat(value: AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat) {
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

export class AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList extends cdktn.ComplexList {
  public internalValue? : AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics[] | cdktn.IResolvable

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
  public get(index: number): AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference {
    return new AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#dimensions AutoscalingScalingPolicy#dimensions}
  */
  readonly dimensions?: AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#metric_name AutoscalingScalingPolicy#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#metrics AutoscalingScalingPolicy#metrics}
  */
  readonly metrics?: AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#namespace AutoscalingScalingPolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#period AutoscalingScalingPolicy#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#statistic AutoscalingScalingPolicy#statistic}
  */
  readonly statistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#unit AutoscalingScalingPolicy#unit}
  */
  readonly unit?: string;
}

export function autoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToTerraform(struct?: AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimensions: cdktn.listMapper(autoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsToTerraform, false)(struct!.dimensions),
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    metrics: cdktn.listMapper(autoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsToTerraform, false)(struct!.metrics),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    period: cdktn.numberToTerraform(struct!.period),
    statistic: cdktn.stringToTerraform(struct!.statistic),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function autoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToHclTerraform(struct?: AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimensions: {
      value: cdktn.listMapperHcl(autoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsToHclTerraform, false)(struct!.dimensions),
      isBlock: true,
      type: "set",
      storageClassType: "AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList",
    },
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metrics: {
      value: cdktn.listMapperHcl(autoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsToHclTerraform, false)(struct!.metrics),
      isBlock: true,
      type: "set",
      storageClassType: "AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktn.numberToHclTerraform(struct!.period),
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

export class AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification | cdktn.IResolvable | undefined {
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
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._statistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistic = this._statistic;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensions.internalValue = undefined;
      this._metricName = undefined;
      this._metrics.internalValue = undefined;
      this._namespace = undefined;
      this._period = undefined;
      this._statistic = undefined;
      this._unit = undefined;
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
      this._metrics.internalValue = value.metrics;
      this._namespace = value.namespace;
      this._period = value.period;
      this._statistic = value.statistic;
      this._unit = value.unit;
    }
  }

  // dimensions - computed: true, optional: true, required: false
  private _dimensions = new AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList(this, "dimensions", true);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions[] | cdktn.IResolvable) {
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

  // metrics - computed: true, optional: true, required: false
  private _metrics = new AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList(this, "metrics", true);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics[] | cdktn.IResolvable) {
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
export interface AutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#predefined_metric_type AutoscalingScalingPolicy#predefined_metric_type}
  */
  readonly predefinedMetricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#resource_label AutoscalingScalingPolicy#resource_label}
  */
  readonly resourceLabel?: string;
}

export function autoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToTerraform(struct?: AutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    predefined_metric_type: cdktn.stringToTerraform(struct!.predefinedMetricType),
    resource_label: cdktn.stringToTerraform(struct!.resourceLabel),
  }
}


export function autoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToHclTerraform(struct?: AutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    predefined_metric_type: {
      value: cdktn.stringToHclTerraform(struct!.predefinedMetricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_label: {
      value: cdktn.stringToHclTerraform(struct!.resourceLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._predefinedMetricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedMetricType = this._predefinedMetricType;
    }
    if (this._resourceLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLabel = this._resourceLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._predefinedMetricType = undefined;
      this._resourceLabel = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._predefinedMetricType = value.predefinedMetricType;
      this._resourceLabel = value.resourceLabel;
    }
  }

  // predefined_metric_type - computed: true, optional: true, required: false
  private _predefinedMetricType?: string; 
  public get predefinedMetricType() {
    return this.getStringAttribute('predefined_metric_type');
  }
  public set predefinedMetricType(value: string) {
    this._predefinedMetricType = value;
  }
  public resetPredefinedMetricType() {
    this._predefinedMetricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedMetricTypeInput() {
    return this._predefinedMetricType;
  }

  // resource_label - computed: true, optional: true, required: false
  private _resourceLabel?: string; 
  public get resourceLabel() {
    return this.getStringAttribute('resource_label');
  }
  public set resourceLabel(value: string) {
    this._resourceLabel = value;
  }
  public resetResourceLabel() {
    this._resourceLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLabelInput() {
    return this._resourceLabel;
  }
}
export interface AutoscalingScalingPolicyTargetTrackingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#customized_metric_specification AutoscalingScalingPolicy#customized_metric_specification}
  */
  readonly customizedMetricSpecification?: AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#disable_scale_in AutoscalingScalingPolicy#disable_scale_in}
  */
  readonly disableScaleIn?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#predefined_metric_specification AutoscalingScalingPolicy#predefined_metric_specification}
  */
  readonly predefinedMetricSpecification?: AutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#target_value AutoscalingScalingPolicy#target_value}
  */
  readonly targetValue?: number;
}

export function autoscalingScalingPolicyTargetTrackingConfigurationToTerraform(struct?: AutoscalingScalingPolicyTargetTrackingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    customized_metric_specification: autoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToTerraform(struct!.customizedMetricSpecification),
    disable_scale_in: cdktn.booleanToTerraform(struct!.disableScaleIn),
    predefined_metric_specification: autoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToTerraform(struct!.predefinedMetricSpecification),
    target_value: cdktn.numberToTerraform(struct!.targetValue),
  }
}


export function autoscalingScalingPolicyTargetTrackingConfigurationToHclTerraform(struct?: AutoscalingScalingPolicyTargetTrackingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    customized_metric_specification: {
      value: autoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToHclTerraform(struct!.customizedMetricSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification",
    },
    disable_scale_in: {
      value: cdktn.booleanToHclTerraform(struct!.disableScaleIn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    predefined_metric_specification: {
      value: autoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToHclTerraform(struct!.predefinedMetricSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "AutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification",
    },
    target_value: {
      value: cdktn.numberToHclTerraform(struct!.targetValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingScalingPolicyTargetTrackingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoscalingScalingPolicyTargetTrackingConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customizedMetricSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizedMetricSpecification = this._customizedMetricSpecification?.internalValue;
    }
    if (this._disableScaleIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableScaleIn = this._disableScaleIn;
    }
    if (this._predefinedMetricSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedMetricSpecification = this._predefinedMetricSpecification?.internalValue;
    }
    if (this._targetValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetValue = this._targetValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingScalingPolicyTargetTrackingConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customizedMetricSpecification.internalValue = undefined;
      this._disableScaleIn = undefined;
      this._predefinedMetricSpecification.internalValue = undefined;
      this._targetValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customizedMetricSpecification.internalValue = value.customizedMetricSpecification;
      this._disableScaleIn = value.disableScaleIn;
      this._predefinedMetricSpecification.internalValue = value.predefinedMetricSpecification;
      this._targetValue = value.targetValue;
    }
  }

  // customized_metric_specification - computed: true, optional: true, required: false
  private _customizedMetricSpecification = new AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference(this, "customized_metric_specification");
  public get customizedMetricSpecification() {
    return this._customizedMetricSpecification;
  }
  public putCustomizedMetricSpecification(value: AutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification) {
    this._customizedMetricSpecification.internalValue = value;
  }
  public resetCustomizedMetricSpecification() {
    this._customizedMetricSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizedMetricSpecificationInput() {
    return this._customizedMetricSpecification.internalValue;
  }

  // disable_scale_in - computed: true, optional: true, required: false
  private _disableScaleIn?: boolean | cdktn.IResolvable; 
  public get disableScaleIn() {
    return this.getBooleanAttribute('disable_scale_in');
  }
  public set disableScaleIn(value: boolean | cdktn.IResolvable) {
    this._disableScaleIn = value;
  }
  public resetDisableScaleIn() {
    this._disableScaleIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableScaleInInput() {
    return this._disableScaleIn;
  }

  // predefined_metric_specification - computed: true, optional: true, required: false
  private _predefinedMetricSpecification = new AutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference(this, "predefined_metric_specification");
  public get predefinedMetricSpecification() {
    return this._predefinedMetricSpecification;
  }
  public putPredefinedMetricSpecification(value: AutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification) {
    this._predefinedMetricSpecification.internalValue = value;
  }
  public resetPredefinedMetricSpecification() {
    this._predefinedMetricSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedMetricSpecificationInput() {
    return this._predefinedMetricSpecification.internalValue;
  }

  // target_value - computed: true, optional: true, required: false
  private _targetValue?: number; 
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
  public set targetValue(value: number) {
    this._targetValue = value;
  }
  public resetTargetValue() {
    this._targetValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetValueInput() {
    return this._targetValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy awscc_autoscaling_scaling_policy}
*/
export class AutoscalingScalingPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_autoscaling_scaling_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AutoscalingScalingPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutoscalingScalingPolicy to import
  * @param importFromId The id of the existing AutoscalingScalingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutoscalingScalingPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_autoscaling_scaling_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/autoscaling_scaling_policy awscc_autoscaling_scaling_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutoscalingScalingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AutoscalingScalingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_autoscaling_scaling_policy',
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
    this._adjustmentType = config.adjustmentType;
    this._autoScalingGroupName = config.autoScalingGroupName;
    this._cooldown = config.cooldown;
    this._estimatedInstanceWarmup = config.estimatedInstanceWarmup;
    this._metricAggregationType = config.metricAggregationType;
    this._minAdjustmentMagnitude = config.minAdjustmentMagnitude;
    this._policyType = config.policyType;
    this._predictiveScalingConfiguration.internalValue = config.predictiveScalingConfiguration;
    this._scalingAdjustment = config.scalingAdjustment;
    this._stepAdjustments.internalValue = config.stepAdjustments;
    this._targetTrackingConfiguration.internalValue = config.targetTrackingConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adjustment_type - computed: true, optional: true, required: false
  private _adjustmentType?: string; 
  public get adjustmentType() {
    return this.getStringAttribute('adjustment_type');
  }
  public set adjustmentType(value: string) {
    this._adjustmentType = value;
  }
  public resetAdjustmentType() {
    this._adjustmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentTypeInput() {
    return this._adjustmentType;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_scaling_group_name - computed: false, optional: false, required: true
  private _autoScalingGroupName?: string; 
  public get autoScalingGroupName() {
    return this.getStringAttribute('auto_scaling_group_name');
  }
  public set autoScalingGroupName(value: string) {
    this._autoScalingGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingGroupNameInput() {
    return this._autoScalingGroupName;
  }

  // cooldown - computed: true, optional: true, required: false
  private _cooldown?: string; 
  public get cooldown() {
    return this.getStringAttribute('cooldown');
  }
  public set cooldown(value: string) {
    this._cooldown = value;
  }
  public resetCooldown() {
    this._cooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cooldownInput() {
    return this._cooldown;
  }

  // estimated_instance_warmup - computed: true, optional: true, required: false
  private _estimatedInstanceWarmup?: number; 
  public get estimatedInstanceWarmup() {
    return this.getNumberAttribute('estimated_instance_warmup');
  }
  public set estimatedInstanceWarmup(value: number) {
    this._estimatedInstanceWarmup = value;
  }
  public resetEstimatedInstanceWarmup() {
    this._estimatedInstanceWarmup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimatedInstanceWarmupInput() {
    return this._estimatedInstanceWarmup;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metric_aggregation_type - computed: true, optional: true, required: false
  private _metricAggregationType?: string; 
  public get metricAggregationType() {
    return this.getStringAttribute('metric_aggregation_type');
  }
  public set metricAggregationType(value: string) {
    this._metricAggregationType = value;
  }
  public resetMetricAggregationType() {
    this._metricAggregationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricAggregationTypeInput() {
    return this._metricAggregationType;
  }

  // min_adjustment_magnitude - computed: true, optional: true, required: false
  private _minAdjustmentMagnitude?: number; 
  public get minAdjustmentMagnitude() {
    return this.getNumberAttribute('min_adjustment_magnitude');
  }
  public set minAdjustmentMagnitude(value: number) {
    this._minAdjustmentMagnitude = value;
  }
  public resetMinAdjustmentMagnitude() {
    this._minAdjustmentMagnitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAdjustmentMagnitudeInput() {
    return this._minAdjustmentMagnitude;
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // policy_type - computed: true, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // predictive_scaling_configuration - computed: true, optional: true, required: false
  private _predictiveScalingConfiguration = new AutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference(this, "predictive_scaling_configuration");
  public get predictiveScalingConfiguration() {
    return this._predictiveScalingConfiguration;
  }
  public putPredictiveScalingConfiguration(value: AutoscalingScalingPolicyPredictiveScalingConfiguration) {
    this._predictiveScalingConfiguration.internalValue = value;
  }
  public resetPredictiveScalingConfiguration() {
    this._predictiveScalingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictiveScalingConfigurationInput() {
    return this._predictiveScalingConfiguration.internalValue;
  }

  // scaling_adjustment - computed: true, optional: true, required: false
  private _scalingAdjustment?: number; 
  public get scalingAdjustment() {
    return this.getNumberAttribute('scaling_adjustment');
  }
  public set scalingAdjustment(value: number) {
    this._scalingAdjustment = value;
  }
  public resetScalingAdjustment() {
    this._scalingAdjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingAdjustmentInput() {
    return this._scalingAdjustment;
  }

  // step_adjustments - computed: true, optional: true, required: false
  private _stepAdjustments = new AutoscalingScalingPolicyStepAdjustmentsList(this, "step_adjustments", true);
  public get stepAdjustments() {
    return this._stepAdjustments;
  }
  public putStepAdjustments(value: AutoscalingScalingPolicyStepAdjustments[] | cdktn.IResolvable) {
    this._stepAdjustments.internalValue = value;
  }
  public resetStepAdjustments() {
    this._stepAdjustments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepAdjustmentsInput() {
    return this._stepAdjustments.internalValue;
  }

  // target_tracking_configuration - computed: true, optional: true, required: false
  private _targetTrackingConfiguration = new AutoscalingScalingPolicyTargetTrackingConfigurationOutputReference(this, "target_tracking_configuration");
  public get targetTrackingConfiguration() {
    return this._targetTrackingConfiguration;
  }
  public putTargetTrackingConfiguration(value: AutoscalingScalingPolicyTargetTrackingConfiguration) {
    this._targetTrackingConfiguration.internalValue = value;
  }
  public resetTargetTrackingConfiguration() {
    this._targetTrackingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTrackingConfigurationInput() {
    return this._targetTrackingConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adjustment_type: cdktn.stringToTerraform(this._adjustmentType),
      auto_scaling_group_name: cdktn.stringToTerraform(this._autoScalingGroupName),
      cooldown: cdktn.stringToTerraform(this._cooldown),
      estimated_instance_warmup: cdktn.numberToTerraform(this._estimatedInstanceWarmup),
      metric_aggregation_type: cdktn.stringToTerraform(this._metricAggregationType),
      min_adjustment_magnitude: cdktn.numberToTerraform(this._minAdjustmentMagnitude),
      policy_type: cdktn.stringToTerraform(this._policyType),
      predictive_scaling_configuration: autoscalingScalingPolicyPredictiveScalingConfigurationToTerraform(this._predictiveScalingConfiguration.internalValue),
      scaling_adjustment: cdktn.numberToTerraform(this._scalingAdjustment),
      step_adjustments: cdktn.listMapper(autoscalingScalingPolicyStepAdjustmentsToTerraform, false)(this._stepAdjustments.internalValue),
      target_tracking_configuration: autoscalingScalingPolicyTargetTrackingConfigurationToTerraform(this._targetTrackingConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adjustment_type: {
        value: cdktn.stringToHclTerraform(this._adjustmentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_scaling_group_name: {
        value: cdktn.stringToHclTerraform(this._autoScalingGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cooldown: {
        value: cdktn.stringToHclTerraform(this._cooldown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      estimated_instance_warmup: {
        value: cdktn.numberToHclTerraform(this._estimatedInstanceWarmup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metric_aggregation_type: {
        value: cdktn.stringToHclTerraform(this._metricAggregationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_adjustment_magnitude: {
        value: cdktn.numberToHclTerraform(this._minAdjustmentMagnitude),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policy_type: {
        value: cdktn.stringToHclTerraform(this._policyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      predictive_scaling_configuration: {
        value: autoscalingScalingPolicyPredictiveScalingConfigurationToHclTerraform(this._predictiveScalingConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutoscalingScalingPolicyPredictiveScalingConfiguration",
      },
      scaling_adjustment: {
        value: cdktn.numberToHclTerraform(this._scalingAdjustment),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      step_adjustments: {
        value: cdktn.listMapperHcl(autoscalingScalingPolicyStepAdjustmentsToHclTerraform, false)(this._stepAdjustments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AutoscalingScalingPolicyStepAdjustmentsList",
      },
      target_tracking_configuration: {
        value: autoscalingScalingPolicyTargetTrackingConfigurationToHclTerraform(this._targetTrackingConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutoscalingScalingPolicyTargetTrackingConfiguration",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
