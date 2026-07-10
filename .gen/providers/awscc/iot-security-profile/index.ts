// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IotSecurityProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#additional_metrics_to_retain_v2 IotSecurityProfile#additional_metrics_to_retain_v2}
  */
  readonly additionalMetricsToRetainV2?: IotSecurityProfileAdditionalMetricsToRetainV2[] | cdktn.IResolvable;
  /**
  * Specifies the destinations to which alerts are sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#alert_targets IotSecurityProfile#alert_targets}
  */
  readonly alertTargets?: { [key: string]: IotSecurityProfileAlertTargets } | cdktn.IResolvable;
  /**
  * Specifies the behaviors that, when violated by a device (thing), cause an alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#behaviors IotSecurityProfile#behaviors}
  */
  readonly behaviors?: IotSecurityProfileBehaviors[] | cdktn.IResolvable;
  /**
  * A structure containing the mqtt topic for metrics export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#metrics_export_config IotSecurityProfile#metrics_export_config}
  */
  readonly metricsExportConfig?: IotSecurityProfileMetricsExportConfig;
  /**
  * A description of the security profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#security_profile_description IotSecurityProfile#security_profile_description}
  */
  readonly securityProfileDescription?: string;
  /**
  * A unique identifier for the security profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#security_profile_name IotSecurityProfile#security_profile_name}
  */
  readonly securityProfileName?: string;
  /**
  * Metadata that can be used to manage the security profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#tags IotSecurityProfile#tags}
  */
  readonly tags?: IotSecurityProfileTags[] | cdktn.IResolvable;
  /**
  * A set of target ARNs that the security profile is attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#target_arns IotSecurityProfile#target_arns}
  */
  readonly targetArns?: string[];
}
export interface IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension {
  /**
  * A unique identifier for the dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#dimension_name IotSecurityProfile#dimension_name}
  */
  readonly dimensionName?: string;
  /**
  * Defines how the dimensionValues of a dimension are interpreted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#operator IotSecurityProfile#operator}
  */
  readonly operator?: string;
}

export function iotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionToTerraform(struct?: IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_name: cdktn.stringToTerraform(struct!.dimensionName),
    operator: cdktn.stringToTerraform(struct!.operator),
  }
}


export function iotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionToHclTerraform(struct?: IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_name: {
      value: cdktn.stringToHclTerraform(struct!.dimensionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionName = this._dimensionName;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionName = undefined;
      this._operator = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionName = value.dimensionName;
      this._operator = value.operator;
    }
  }

  // dimension_name - computed: true, optional: true, required: false
  private _dimensionName?: string; 
  public get dimensionName() {
    return this.getStringAttribute('dimension_name');
  }
  public set dimensionName(value: string) {
    this._dimensionName = value;
  }
  public resetDimensionName() {
    this._dimensionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionNameInput() {
    return this._dimensionName;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}
export interface IotSecurityProfileAdditionalMetricsToRetainV2 {
  /**
  * Flag to enable/disable metrics export for metric to be retained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#export_metric IotSecurityProfile#export_metric}
  */
  readonly exportMetric?: boolean | cdktn.IResolvable;
  /**
  * What is measured by the behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#metric IotSecurityProfile#metric}
  */
  readonly metric?: string;
  /**
  * The dimension of a metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#metric_dimension IotSecurityProfile#metric_dimension}
  */
  readonly metricDimension?: IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension;
}

export function iotSecurityProfileAdditionalMetricsToRetainV2ToTerraform(struct?: IotSecurityProfileAdditionalMetricsToRetainV2 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    export_metric: cdktn.booleanToTerraform(struct!.exportMetric),
    metric: cdktn.stringToTerraform(struct!.metric),
    metric_dimension: iotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionToTerraform(struct!.metricDimension),
  }
}


export function iotSecurityProfileAdditionalMetricsToRetainV2ToHclTerraform(struct?: IotSecurityProfileAdditionalMetricsToRetainV2 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    export_metric: {
      value: cdktn.booleanToHclTerraform(struct!.exportMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric: {
      value: cdktn.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_dimension: {
      value: iotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionToHclTerraform(struct!.metricDimension),
      isBlock: true,
      type: "struct",
      storageClassType: "IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotSecurityProfileAdditionalMetricsToRetainV2OutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotSecurityProfileAdditionalMetricsToRetainV2 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportMetric = this._exportMetric;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._metricDimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDimension = this._metricDimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotSecurityProfileAdditionalMetricsToRetainV2 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportMetric = undefined;
      this._metric = undefined;
      this._metricDimension.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportMetric = value.exportMetric;
      this._metric = value.metric;
      this._metricDimension.internalValue = value.metricDimension;
    }
  }

  // export_metric - computed: true, optional: true, required: false
  private _exportMetric?: boolean | cdktn.IResolvable; 
  public get exportMetric() {
    return this.getBooleanAttribute('export_metric');
  }
  public set exportMetric(value: boolean | cdktn.IResolvable) {
    this._exportMetric = value;
  }
  public resetExportMetric() {
    this._exportMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportMetricInput() {
    return this._exportMetric;
  }

  // metric - computed: true, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // metric_dimension - computed: true, optional: true, required: false
  private _metricDimension = new IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference(this, "metric_dimension");
  public get metricDimension() {
    return this._metricDimension;
  }
  public putMetricDimension(value: IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension) {
    this._metricDimension.internalValue = value;
  }
  public resetMetricDimension() {
    this._metricDimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDimensionInput() {
    return this._metricDimension.internalValue;
  }
}

export class IotSecurityProfileAdditionalMetricsToRetainV2List extends cdktn.ComplexList {
  public internalValue? : IotSecurityProfileAdditionalMetricsToRetainV2[] | cdktn.IResolvable

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
  public get(index: number): IotSecurityProfileAdditionalMetricsToRetainV2OutputReference {
    return new IotSecurityProfileAdditionalMetricsToRetainV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotSecurityProfileAlertTargets {
  /**
  * The ARN of the notification target to which alerts are sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#alert_target_arn IotSecurityProfile#alert_target_arn}
  */
  readonly alertTargetArn?: string;
  /**
  * The ARN of the role that grants permission to send alerts to the notification target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#role_arn IotSecurityProfile#role_arn}
  */
  readonly roleArn?: string;
}

export function iotSecurityProfileAlertTargetsToTerraform(struct?: IotSecurityProfileAlertTargets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alert_target_arn: cdktn.stringToTerraform(struct!.alertTargetArn),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function iotSecurityProfileAlertTargetsToHclTerraform(struct?: IotSecurityProfileAlertTargets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alert_target_arn: {
      value: cdktn.stringToHclTerraform(struct!.alertTargetArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotSecurityProfileAlertTargetsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): IotSecurityProfileAlertTargets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertTargetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertTargetArn = this._alertTargetArn;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotSecurityProfileAlertTargets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertTargetArn = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertTargetArn = value.alertTargetArn;
      this._roleArn = value.roleArn;
    }
  }

  // alert_target_arn - computed: true, optional: true, required: false
  private _alertTargetArn?: string; 
  public get alertTargetArn() {
    return this.getStringAttribute('alert_target_arn');
  }
  public set alertTargetArn(value: string) {
    this._alertTargetArn = value;
  }
  public resetAlertTargetArn() {
    this._alertTargetArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTargetArnInput() {
    return this._alertTargetArn;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

export class IotSecurityProfileAlertTargetsMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: IotSecurityProfileAlertTargets } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute);
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): IotSecurityProfileAlertTargetsOutputReference {
    return new IotSecurityProfileAlertTargetsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface IotSecurityProfileBehaviorsCriteriaMlDetectionConfig {
  /**
  * The sensitivity of anomalous behavior evaluation. Can be Low, Medium, or High.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#confidence_level IotSecurityProfile#confidence_level}
  */
  readonly confidenceLevel?: string;
}

export function iotSecurityProfileBehaviorsCriteriaMlDetectionConfigToTerraform(struct?: IotSecurityProfileBehaviorsCriteriaMlDetectionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    confidence_level: cdktn.stringToTerraform(struct!.confidenceLevel),
  }
}


export function iotSecurityProfileBehaviorsCriteriaMlDetectionConfigToHclTerraform(struct?: IotSecurityProfileBehaviorsCriteriaMlDetectionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    confidence_level: {
      value: cdktn.stringToHclTerraform(struct!.confidenceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotSecurityProfileBehaviorsCriteriaMlDetectionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidenceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidenceLevel = this._confidenceLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotSecurityProfileBehaviorsCriteriaMlDetectionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confidenceLevel = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confidenceLevel = value.confidenceLevel;
    }
  }

  // confidence_level - computed: true, optional: true, required: false
  private _confidenceLevel?: string; 
  public get confidenceLevel() {
    return this.getStringAttribute('confidence_level');
  }
  public set confidenceLevel(value: string) {
    this._confidenceLevel = value;
  }
  public resetConfidenceLevel() {
    this._confidenceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceLevelInput() {
    return this._confidenceLevel;
  }
}
export interface IotSecurityProfileBehaviorsCriteriaStatisticalThreshold {
  /**
  * The percentile which resolves to a threshold value by which compliance with a behavior is determined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#statistic IotSecurityProfile#statistic}
  */
  readonly statistic?: string;
}

export function iotSecurityProfileBehaviorsCriteriaStatisticalThresholdToTerraform(struct?: IotSecurityProfileBehaviorsCriteriaStatisticalThreshold | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    statistic: cdktn.stringToTerraform(struct!.statistic),
  }
}


export function iotSecurityProfileBehaviorsCriteriaStatisticalThresholdToHclTerraform(struct?: IotSecurityProfileBehaviorsCriteriaStatisticalThreshold | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotSecurityProfileBehaviorsCriteriaStatisticalThreshold | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistic = this._statistic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotSecurityProfileBehaviorsCriteriaStatisticalThreshold | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statistic = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statistic = value.statistic;
    }
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
export interface IotSecurityProfileBehaviorsCriteriaValue {
  /**
  * If the ComparisonOperator calls for a set of CIDRs, use this to specify that set to be compared with the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#cidrs IotSecurityProfile#cidrs}
  */
  readonly cidrs?: string[];
  /**
  * If the ComparisonOperator calls for a numeric value, use this to specify that (integer) numeric value to be compared with the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#count IotSecurityProfile#count}
  */
  readonly count?: string;
  /**
  * The numeral value of a metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#number IotSecurityProfile#number}
  */
  readonly number?: number;
  /**
  * The numeral values of a metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#numbers IotSecurityProfile#numbers}
  */
  readonly numbers?: number[];
  /**
  * If the ComparisonOperator calls for a set of ports, use this to specify that set to be compared with the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#ports IotSecurityProfile#ports}
  */
  readonly ports?: number[];
  /**
  * The string values of a metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#strings IotSecurityProfile#strings}
  */
  readonly strings?: string[];
}

export function iotSecurityProfileBehaviorsCriteriaValueToTerraform(struct?: IotSecurityProfileBehaviorsCriteriaValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cidrs: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cidrs),
    count: cdktn.stringToTerraform(struct!.count),
    number: cdktn.numberToTerraform(struct!.number),
    numbers: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.numbers),
    ports: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.ports),
    strings: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.strings),
  }
}


export function iotSecurityProfileBehaviorsCriteriaValueToHclTerraform(struct?: IotSecurityProfileBehaviorsCriteriaValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cidrs: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cidrs),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    count: {
      value: cdktn.stringToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number: {
      value: cdktn.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    numbers: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.numbers),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    ports: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    strings: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.strings),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotSecurityProfileBehaviorsCriteriaValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotSecurityProfileBehaviorsCriteriaValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrs = this._cidrs;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._numbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.numbers = this._numbers;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._strings !== undefined) {
      hasAnyValues = true;
      internalValueResult.strings = this._strings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotSecurityProfileBehaviorsCriteriaValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrs = undefined;
      this._count = undefined;
      this._number = undefined;
      this._numbers = undefined;
      this._ports = undefined;
      this._strings = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrs = value.cidrs;
      this._count = value.count;
      this._number = value.number;
      this._numbers = value.numbers;
      this._ports = value.ports;
      this._strings = value.strings;
    }
  }

  // cidrs - computed: true, optional: true, required: false
  private _cidrs?: string[]; 
  public get cidrs() {
    return cdktn.Fn.tolist(this.getListAttribute('cidrs'));
  }
  public set cidrs(value: string[]) {
    this._cidrs = value;
  }
  public resetCidrs() {
    this._cidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrsInput() {
    return this._cidrs;
  }

  // count - computed: true, optional: true, required: false
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // number - computed: true, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // numbers - computed: true, optional: true, required: false
  private _numbers?: number[]; 
  public get numbers() {
    return cdktn.Token.asNumberList(cdktn.Fn.tolist(this.getNumberListAttribute('numbers')));
  }
  public set numbers(value: number[]) {
    this._numbers = value;
  }
  public resetNumbers() {
    this._numbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numbersInput() {
    return this._numbers;
  }

  // ports - computed: true, optional: true, required: false
  private _ports?: number[]; 
  public get ports() {
    return cdktn.Token.asNumberList(cdktn.Fn.tolist(this.getNumberListAttribute('ports')));
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // strings - computed: true, optional: true, required: false
  private _strings?: string[]; 
  public get strings() {
    return cdktn.Fn.tolist(this.getListAttribute('strings'));
  }
  public set strings(value: string[]) {
    this._strings = value;
  }
  public resetStrings() {
    this._strings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringsInput() {
    return this._strings;
  }
}
export interface IotSecurityProfileBehaviorsCriteria {
  /**
  * The operator that relates the thing measured (metric) to the criteria (containing a value or statisticalThreshold).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#comparison_operator IotSecurityProfile#comparison_operator}
  */
  readonly comparisonOperator?: string;
  /**
  * If a device is in violation of the behavior for the specified number of consecutive datapoints, an alarm occurs. If not specified, the default is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#consecutive_datapoints_to_alarm IotSecurityProfile#consecutive_datapoints_to_alarm}
  */
  readonly consecutiveDatapointsToAlarm?: number;
  /**
  * If an alarm has occurred and the offending device is no longer in violation of the behavior for the specified number of consecutive datapoints, the alarm is cleared. If not specified, the default is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#consecutive_datapoints_to_clear IotSecurityProfile#consecutive_datapoints_to_clear}
  */
  readonly consecutiveDatapointsToClear?: number;
  /**
  * Use this to specify the time duration over which the behavior is evaluated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#duration_seconds IotSecurityProfile#duration_seconds}
  */
  readonly durationSeconds?: number;
  /**
  * The configuration of an ML Detect Security Profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#ml_detection_config IotSecurityProfile#ml_detection_config}
  */
  readonly mlDetectionConfig?: IotSecurityProfileBehaviorsCriteriaMlDetectionConfig;
  /**
  * A statistical ranking (percentile) which indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#statistical_threshold IotSecurityProfile#statistical_threshold}
  */
  readonly statisticalThreshold?: IotSecurityProfileBehaviorsCriteriaStatisticalThreshold;
  /**
  * The value to be compared with the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#value IotSecurityProfile#value}
  */
  readonly value?: IotSecurityProfileBehaviorsCriteriaValue;
}

export function iotSecurityProfileBehaviorsCriteriaToTerraform(struct?: IotSecurityProfileBehaviorsCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
    consecutive_datapoints_to_alarm: cdktn.numberToTerraform(struct!.consecutiveDatapointsToAlarm),
    consecutive_datapoints_to_clear: cdktn.numberToTerraform(struct!.consecutiveDatapointsToClear),
    duration_seconds: cdktn.numberToTerraform(struct!.durationSeconds),
    ml_detection_config: iotSecurityProfileBehaviorsCriteriaMlDetectionConfigToTerraform(struct!.mlDetectionConfig),
    statistical_threshold: iotSecurityProfileBehaviorsCriteriaStatisticalThresholdToTerraform(struct!.statisticalThreshold),
    value: iotSecurityProfileBehaviorsCriteriaValueToTerraform(struct!.value),
  }
}


export function iotSecurityProfileBehaviorsCriteriaToHclTerraform(struct?: IotSecurityProfileBehaviorsCriteria | cdktn.IResolvable): any {
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
    consecutive_datapoints_to_alarm: {
      value: cdktn.numberToHclTerraform(struct!.consecutiveDatapointsToAlarm),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_datapoints_to_clear: {
      value: cdktn.numberToHclTerraform(struct!.consecutiveDatapointsToClear),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duration_seconds: {
      value: cdktn.numberToHclTerraform(struct!.durationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ml_detection_config: {
      value: iotSecurityProfileBehaviorsCriteriaMlDetectionConfigToHclTerraform(struct!.mlDetectionConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "IotSecurityProfileBehaviorsCriteriaMlDetectionConfig",
    },
    statistical_threshold: {
      value: iotSecurityProfileBehaviorsCriteriaStatisticalThresholdToHclTerraform(struct!.statisticalThreshold),
      isBlock: true,
      type: "struct",
      storageClassType: "IotSecurityProfileBehaviorsCriteriaStatisticalThreshold",
    },
    value: {
      value: iotSecurityProfileBehaviorsCriteriaValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "IotSecurityProfileBehaviorsCriteriaValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotSecurityProfileBehaviorsCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotSecurityProfileBehaviorsCriteria | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._consecutiveDatapointsToAlarm !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveDatapointsToAlarm = this._consecutiveDatapointsToAlarm;
    }
    if (this._consecutiveDatapointsToClear !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveDatapointsToClear = this._consecutiveDatapointsToClear;
    }
    if (this._durationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationSeconds = this._durationSeconds;
    }
    if (this._mlDetectionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mlDetectionConfig = this._mlDetectionConfig?.internalValue;
    }
    if (this._statisticalThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statisticalThreshold = this._statisticalThreshold?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotSecurityProfileBehaviorsCriteria | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparisonOperator = undefined;
      this._consecutiveDatapointsToAlarm = undefined;
      this._consecutiveDatapointsToClear = undefined;
      this._durationSeconds = undefined;
      this._mlDetectionConfig.internalValue = undefined;
      this._statisticalThreshold.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparisonOperator = value.comparisonOperator;
      this._consecutiveDatapointsToAlarm = value.consecutiveDatapointsToAlarm;
      this._consecutiveDatapointsToClear = value.consecutiveDatapointsToClear;
      this._durationSeconds = value.durationSeconds;
      this._mlDetectionConfig.internalValue = value.mlDetectionConfig;
      this._statisticalThreshold.internalValue = value.statisticalThreshold;
      this._value.internalValue = value.value;
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

  // consecutive_datapoints_to_alarm - computed: true, optional: true, required: false
  private _consecutiveDatapointsToAlarm?: number; 
  public get consecutiveDatapointsToAlarm() {
    return this.getNumberAttribute('consecutive_datapoints_to_alarm');
  }
  public set consecutiveDatapointsToAlarm(value: number) {
    this._consecutiveDatapointsToAlarm = value;
  }
  public resetConsecutiveDatapointsToAlarm() {
    this._consecutiveDatapointsToAlarm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveDatapointsToAlarmInput() {
    return this._consecutiveDatapointsToAlarm;
  }

  // consecutive_datapoints_to_clear - computed: true, optional: true, required: false
  private _consecutiveDatapointsToClear?: number; 
  public get consecutiveDatapointsToClear() {
    return this.getNumberAttribute('consecutive_datapoints_to_clear');
  }
  public set consecutiveDatapointsToClear(value: number) {
    this._consecutiveDatapointsToClear = value;
  }
  public resetConsecutiveDatapointsToClear() {
    this._consecutiveDatapointsToClear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveDatapointsToClearInput() {
    return this._consecutiveDatapointsToClear;
  }

  // duration_seconds - computed: true, optional: true, required: false
  private _durationSeconds?: number; 
  public get durationSeconds() {
    return this.getNumberAttribute('duration_seconds');
  }
  public set durationSeconds(value: number) {
    this._durationSeconds = value;
  }
  public resetDurationSeconds() {
    this._durationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationSecondsInput() {
    return this._durationSeconds;
  }

  // ml_detection_config - computed: true, optional: true, required: false
  private _mlDetectionConfig = new IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference(this, "ml_detection_config");
  public get mlDetectionConfig() {
    return this._mlDetectionConfig;
  }
  public putMlDetectionConfig(value: IotSecurityProfileBehaviorsCriteriaMlDetectionConfig) {
    this._mlDetectionConfig.internalValue = value;
  }
  public resetMlDetectionConfig() {
    this._mlDetectionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlDetectionConfigInput() {
    return this._mlDetectionConfig.internalValue;
  }

  // statistical_threshold - computed: true, optional: true, required: false
  private _statisticalThreshold = new IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference(this, "statistical_threshold");
  public get statisticalThreshold() {
    return this._statisticalThreshold;
  }
  public putStatisticalThreshold(value: IotSecurityProfileBehaviorsCriteriaStatisticalThreshold) {
    this._statisticalThreshold.internalValue = value;
  }
  public resetStatisticalThreshold() {
    this._statisticalThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticalThresholdInput() {
    return this._statisticalThreshold.internalValue;
  }

  // value - computed: true, optional: true, required: false
  private _value = new IotSecurityProfileBehaviorsCriteriaValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: IotSecurityProfileBehaviorsCriteriaValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface IotSecurityProfileBehaviorsMetricDimension {
  /**
  * A unique identifier for the dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#dimension_name IotSecurityProfile#dimension_name}
  */
  readonly dimensionName?: string;
  /**
  * Defines how the dimensionValues of a dimension are interpreted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#operator IotSecurityProfile#operator}
  */
  readonly operator?: string;
}

export function iotSecurityProfileBehaviorsMetricDimensionToTerraform(struct?: IotSecurityProfileBehaviorsMetricDimension | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_name: cdktn.stringToTerraform(struct!.dimensionName),
    operator: cdktn.stringToTerraform(struct!.operator),
  }
}


export function iotSecurityProfileBehaviorsMetricDimensionToHclTerraform(struct?: IotSecurityProfileBehaviorsMetricDimension | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_name: {
      value: cdktn.stringToHclTerraform(struct!.dimensionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotSecurityProfileBehaviorsMetricDimensionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotSecurityProfileBehaviorsMetricDimension | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionName = this._dimensionName;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotSecurityProfileBehaviorsMetricDimension | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionName = undefined;
      this._operator = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionName = value.dimensionName;
      this._operator = value.operator;
    }
  }

  // dimension_name - computed: true, optional: true, required: false
  private _dimensionName?: string; 
  public get dimensionName() {
    return this.getStringAttribute('dimension_name');
  }
  public set dimensionName(value: string) {
    this._dimensionName = value;
  }
  public resetDimensionName() {
    this._dimensionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionNameInput() {
    return this._dimensionName;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}
export interface IotSecurityProfileBehaviors {
  /**
  * The criteria by which the behavior is determined to be normal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#criteria IotSecurityProfile#criteria}
  */
  readonly criteria?: IotSecurityProfileBehaviorsCriteria;
  /**
  * Flag to enable/disable metrics export for metric to be retained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#export_metric IotSecurityProfile#export_metric}
  */
  readonly exportMetric?: boolean | cdktn.IResolvable;
  /**
  * What is measured by the behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#metric IotSecurityProfile#metric}
  */
  readonly metric?: string;
  /**
  * The dimension of a metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#metric_dimension IotSecurityProfile#metric_dimension}
  */
  readonly metricDimension?: IotSecurityProfileBehaviorsMetricDimension;
  /**
  * The name for the behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#name IotSecurityProfile#name}
  */
  readonly name?: string;
  /**
  * Manage Detect alarm SNS notifications by setting behavior notification to on or suppressed. Detect will continue to performing device behavior evaluations. However, suppressed alarms wouldn't be forwarded for SNS notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#suppress_alerts IotSecurityProfile#suppress_alerts}
  */
  readonly suppressAlerts?: boolean | cdktn.IResolvable;
}

export function iotSecurityProfileBehaviorsToTerraform(struct?: IotSecurityProfileBehaviors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    criteria: iotSecurityProfileBehaviorsCriteriaToTerraform(struct!.criteria),
    export_metric: cdktn.booleanToTerraform(struct!.exportMetric),
    metric: cdktn.stringToTerraform(struct!.metric),
    metric_dimension: iotSecurityProfileBehaviorsMetricDimensionToTerraform(struct!.metricDimension),
    name: cdktn.stringToTerraform(struct!.name),
    suppress_alerts: cdktn.booleanToTerraform(struct!.suppressAlerts),
  }
}


export function iotSecurityProfileBehaviorsToHclTerraform(struct?: IotSecurityProfileBehaviors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    criteria: {
      value: iotSecurityProfileBehaviorsCriteriaToHclTerraform(struct!.criteria),
      isBlock: true,
      type: "struct",
      storageClassType: "IotSecurityProfileBehaviorsCriteria",
    },
    export_metric: {
      value: cdktn.booleanToHclTerraform(struct!.exportMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric: {
      value: cdktn.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_dimension: {
      value: iotSecurityProfileBehaviorsMetricDimensionToHclTerraform(struct!.metricDimension),
      isBlock: true,
      type: "struct",
      storageClassType: "IotSecurityProfileBehaviorsMetricDimension",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suppress_alerts: {
      value: cdktn.booleanToHclTerraform(struct!.suppressAlerts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotSecurityProfileBehaviorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotSecurityProfileBehaviors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    if (this._exportMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportMetric = this._exportMetric;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._metricDimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDimension = this._metricDimension?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._suppressAlerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppressAlerts = this._suppressAlerts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotSecurityProfileBehaviors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criteria.internalValue = undefined;
      this._exportMetric = undefined;
      this._metric = undefined;
      this._metricDimension.internalValue = undefined;
      this._name = undefined;
      this._suppressAlerts = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criteria.internalValue = value.criteria;
      this._exportMetric = value.exportMetric;
      this._metric = value.metric;
      this._metricDimension.internalValue = value.metricDimension;
      this._name = value.name;
      this._suppressAlerts = value.suppressAlerts;
    }
  }

  // criteria - computed: true, optional: true, required: false
  private _criteria = new IotSecurityProfileBehaviorsCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: IotSecurityProfileBehaviorsCriteria) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }

  // export_metric - computed: true, optional: true, required: false
  private _exportMetric?: boolean | cdktn.IResolvable; 
  public get exportMetric() {
    return this.getBooleanAttribute('export_metric');
  }
  public set exportMetric(value: boolean | cdktn.IResolvable) {
    this._exportMetric = value;
  }
  public resetExportMetric() {
    this._exportMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportMetricInput() {
    return this._exportMetric;
  }

  // metric - computed: true, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // metric_dimension - computed: true, optional: true, required: false
  private _metricDimension = new IotSecurityProfileBehaviorsMetricDimensionOutputReference(this, "metric_dimension");
  public get metricDimension() {
    return this._metricDimension;
  }
  public putMetricDimension(value: IotSecurityProfileBehaviorsMetricDimension) {
    this._metricDimension.internalValue = value;
  }
  public resetMetricDimension() {
    this._metricDimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDimensionInput() {
    return this._metricDimension.internalValue;
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

  // suppress_alerts - computed: true, optional: true, required: false
  private _suppressAlerts?: boolean | cdktn.IResolvable; 
  public get suppressAlerts() {
    return this.getBooleanAttribute('suppress_alerts');
  }
  public set suppressAlerts(value: boolean | cdktn.IResolvable) {
    this._suppressAlerts = value;
  }
  public resetSuppressAlerts() {
    this._suppressAlerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressAlertsInput() {
    return this._suppressAlerts;
  }
}

export class IotSecurityProfileBehaviorsList extends cdktn.ComplexList {
  public internalValue? : IotSecurityProfileBehaviors[] | cdktn.IResolvable

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
  public get(index: number): IotSecurityProfileBehaviorsOutputReference {
    return new IotSecurityProfileBehaviorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotSecurityProfileMetricsExportConfig {
  /**
  * The topic for metrics export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#mqtt_topic IotSecurityProfile#mqtt_topic}
  */
  readonly mqttTopic?: string;
  /**
  * The ARN of the role that grants permission to publish to mqtt topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#role_arn IotSecurityProfile#role_arn}
  */
  readonly roleArn?: string;
}

export function iotSecurityProfileMetricsExportConfigToTerraform(struct?: IotSecurityProfileMetricsExportConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mqtt_topic: cdktn.stringToTerraform(struct!.mqttTopic),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function iotSecurityProfileMetricsExportConfigToHclTerraform(struct?: IotSecurityProfileMetricsExportConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mqtt_topic: {
      value: cdktn.stringToHclTerraform(struct!.mqttTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotSecurityProfileMetricsExportConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotSecurityProfileMetricsExportConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mqttTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.mqttTopic = this._mqttTopic;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotSecurityProfileMetricsExportConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mqttTopic = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mqttTopic = value.mqttTopic;
      this._roleArn = value.roleArn;
    }
  }

  // mqtt_topic - computed: true, optional: true, required: false
  private _mqttTopic?: string; 
  public get mqttTopic() {
    return this.getStringAttribute('mqtt_topic');
  }
  public set mqttTopic(value: string) {
    this._mqttTopic = value;
  }
  public resetMqttTopic() {
    this._mqttTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mqttTopicInput() {
    return this._mqttTopic;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface IotSecurityProfileTags {
  /**
  * The tag's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#key IotSecurityProfile#key}
  */
  readonly key?: string;
  /**
  * The tag's value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#value IotSecurityProfile#value}
  */
  readonly value?: string;
}

export function iotSecurityProfileTagsToTerraform(struct?: IotSecurityProfileTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotSecurityProfileTagsToHclTerraform(struct?: IotSecurityProfileTags | cdktn.IResolvable): any {
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

export class IotSecurityProfileTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotSecurityProfileTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IotSecurityProfileTags | cdktn.IResolvable | undefined) {
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

export class IotSecurityProfileTagsList extends cdktn.ComplexList {
  public internalValue? : IotSecurityProfileTags[] | cdktn.IResolvable

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
  public get(index: number): IotSecurityProfileTagsOutputReference {
    return new IotSecurityProfileTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile awscc_iot_security_profile}
*/
export class IotSecurityProfile extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iot_security_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IotSecurityProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotSecurityProfile to import
  * @param importFromId The id of the existing IotSecurityProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotSecurityProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_security_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iot_security_profile awscc_iot_security_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotSecurityProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IotSecurityProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_iot_security_profile',
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
    this._additionalMetricsToRetainV2.internalValue = config.additionalMetricsToRetainV2;
    this._alertTargets.internalValue = config.alertTargets;
    this._behaviors.internalValue = config.behaviors;
    this._metricsExportConfig.internalValue = config.metricsExportConfig;
    this._securityProfileDescription = config.securityProfileDescription;
    this._securityProfileName = config.securityProfileName;
    this._tags.internalValue = config.tags;
    this._targetArns = config.targetArns;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_metrics_to_retain_v2 - computed: true, optional: true, required: false
  private _additionalMetricsToRetainV2 = new IotSecurityProfileAdditionalMetricsToRetainV2List(this, "additional_metrics_to_retain_v2", true);
  public get additionalMetricsToRetainV2() {
    return this._additionalMetricsToRetainV2;
  }
  public putAdditionalMetricsToRetainV2(value: IotSecurityProfileAdditionalMetricsToRetainV2[] | cdktn.IResolvable) {
    this._additionalMetricsToRetainV2.internalValue = value;
  }
  public resetAdditionalMetricsToRetainV2() {
    this._additionalMetricsToRetainV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalMetricsToRetainV2Input() {
    return this._additionalMetricsToRetainV2.internalValue;
  }

  // alert_targets - computed: true, optional: true, required: false
  private _alertTargets = new IotSecurityProfileAlertTargetsMap(this, "alert_targets");
  public get alertTargets() {
    return this._alertTargets;
  }
  public putAlertTargets(value: { [key: string]: IotSecurityProfileAlertTargets } | cdktn.IResolvable) {
    this._alertTargets.internalValue = value;
  }
  public resetAlertTargets() {
    this._alertTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTargetsInput() {
    return this._alertTargets.internalValue;
  }

  // behaviors - computed: true, optional: true, required: false
  private _behaviors = new IotSecurityProfileBehaviorsList(this, "behaviors", true);
  public get behaviors() {
    return this._behaviors;
  }
  public putBehaviors(value: IotSecurityProfileBehaviors[] | cdktn.IResolvable) {
    this._behaviors.internalValue = value;
  }
  public resetBehaviors() {
    this._behaviors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorsInput() {
    return this._behaviors.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metrics_export_config - computed: true, optional: true, required: false
  private _metricsExportConfig = new IotSecurityProfileMetricsExportConfigOutputReference(this, "metrics_export_config");
  public get metricsExportConfig() {
    return this._metricsExportConfig;
  }
  public putMetricsExportConfig(value: IotSecurityProfileMetricsExportConfig) {
    this._metricsExportConfig.internalValue = value;
  }
  public resetMetricsExportConfig() {
    this._metricsExportConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsExportConfigInput() {
    return this._metricsExportConfig.internalValue;
  }

  // security_profile_arn - computed: true, optional: false, required: false
  public get securityProfileArn() {
    return this.getStringAttribute('security_profile_arn');
  }

  // security_profile_description - computed: true, optional: true, required: false
  private _securityProfileDescription?: string; 
  public get securityProfileDescription() {
    return this.getStringAttribute('security_profile_description');
  }
  public set securityProfileDescription(value: string) {
    this._securityProfileDescription = value;
  }
  public resetSecurityProfileDescription() {
    this._securityProfileDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfileDescriptionInput() {
    return this._securityProfileDescription;
  }

  // security_profile_name - computed: true, optional: true, required: false
  private _securityProfileName?: string; 
  public get securityProfileName() {
    return this.getStringAttribute('security_profile_name');
  }
  public set securityProfileName(value: string) {
    this._securityProfileName = value;
  }
  public resetSecurityProfileName() {
    this._securityProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfileNameInput() {
    return this._securityProfileName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new IotSecurityProfileTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IotSecurityProfileTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // target_arns - computed: true, optional: true, required: false
  private _targetArns?: string[]; 
  public get targetArns() {
    return cdktn.Fn.tolist(this.getListAttribute('target_arns'));
  }
  public set targetArns(value: string[]) {
    this._targetArns = value;
  }
  public resetTargetArns() {
    this._targetArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetArnsInput() {
    return this._targetArns;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_metrics_to_retain_v2: cdktn.listMapper(iotSecurityProfileAdditionalMetricsToRetainV2ToTerraform, false)(this._additionalMetricsToRetainV2.internalValue),
      alert_targets: cdktn.hashMapper(iotSecurityProfileAlertTargetsToTerraform)(this._alertTargets.internalValue),
      behaviors: cdktn.listMapper(iotSecurityProfileBehaviorsToTerraform, false)(this._behaviors.internalValue),
      metrics_export_config: iotSecurityProfileMetricsExportConfigToTerraform(this._metricsExportConfig.internalValue),
      security_profile_description: cdktn.stringToTerraform(this._securityProfileDescription),
      security_profile_name: cdktn.stringToTerraform(this._securityProfileName),
      tags: cdktn.listMapper(iotSecurityProfileTagsToTerraform, false)(this._tags.internalValue),
      target_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._targetArns),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_metrics_to_retain_v2: {
        value: cdktn.listMapperHcl(iotSecurityProfileAdditionalMetricsToRetainV2ToHclTerraform, false)(this._additionalMetricsToRetainV2.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotSecurityProfileAdditionalMetricsToRetainV2List",
      },
      alert_targets: {
        value: cdktn.hashMapperHcl(iotSecurityProfileAlertTargetsToHclTerraform)(this._alertTargets.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "IotSecurityProfileAlertTargetsMap",
      },
      behaviors: {
        value: cdktn.listMapperHcl(iotSecurityProfileBehaviorsToHclTerraform, false)(this._behaviors.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotSecurityProfileBehaviorsList",
      },
      metrics_export_config: {
        value: iotSecurityProfileMetricsExportConfigToHclTerraform(this._metricsExportConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotSecurityProfileMetricsExportConfig",
      },
      security_profile_description: {
        value: cdktn.stringToHclTerraform(this._securityProfileDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_profile_name: {
        value: cdktn.stringToHclTerraform(this._securityProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(iotSecurityProfileTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotSecurityProfileTagsList",
      },
      target_arns: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._targetArns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
