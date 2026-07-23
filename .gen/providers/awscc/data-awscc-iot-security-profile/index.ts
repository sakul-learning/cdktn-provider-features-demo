// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/iot_security_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccIotSecurityProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/iot_security_profile#id DataAwsccIotSecurityProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension {
}

export function dataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionToTerraform(struct?: DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionToHclTerraform(struct?: DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_name - computed: true, optional: false, required: false
  public get dimensionName() {
    return this.getStringAttribute('dimension_name');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }
}
export interface DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2 {
}

export function dataAwsccIotSecurityProfileAdditionalMetricsToRetainV2ToTerraform(struct?: DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotSecurityProfileAdditionalMetricsToRetainV2ToHclTerraform(struct?: DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // export_metric - computed: true, optional: false, required: false
  public get exportMetric() {
    return this.getBooleanAttribute('export_metric');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // metric_dimension - computed: true, optional: false, required: false
  private _metricDimension = new DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference(this, "metric_dimension");
  public get metricDimension() {
    return this._metricDimension;
  }
}

export class DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference {
    return new DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotSecurityProfileAlertTargets {
}

export function dataAwsccIotSecurityProfileAlertTargetsToTerraform(struct?: DataAwsccIotSecurityProfileAlertTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotSecurityProfileAlertTargetsToHclTerraform(struct?: DataAwsccIotSecurityProfileAlertTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotSecurityProfileAlertTargetsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccIotSecurityProfileAlertTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotSecurityProfileAlertTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alert_target_arn - computed: true, optional: false, required: false
  public get alertTargetArn() {
    return this.getStringAttribute('alert_target_arn');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export class DataAwsccIotSecurityProfileAlertTargetsMap extends cdktn.ComplexMap {

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
  public get(key: string): DataAwsccIotSecurityProfileAlertTargetsOutputReference {
    return new DataAwsccIotSecurityProfileAlertTargetsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig {
}

export function dataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigToTerraform(struct?: DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigToHclTerraform(struct?: DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // confidence_level - computed: true, optional: false, required: false
  public get confidenceLevel() {
    return this.getStringAttribute('confidence_level');
  }
}
export interface DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold {
}

export function dataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdToTerraform(struct?: DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdToHclTerraform(struct?: DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // statistic - computed: true, optional: false, required: false
  public get statistic() {
    return this.getStringAttribute('statistic');
  }
}
export interface DataAwsccIotSecurityProfileBehaviorsCriteriaValue {
}

export function dataAwsccIotSecurityProfileBehaviorsCriteriaValueToTerraform(struct?: DataAwsccIotSecurityProfileBehaviorsCriteriaValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotSecurityProfileBehaviorsCriteriaValueToHclTerraform(struct?: DataAwsccIotSecurityProfileBehaviorsCriteriaValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotSecurityProfileBehaviorsCriteriaValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotSecurityProfileBehaviorsCriteriaValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidrs - computed: true, optional: false, required: false
  public get cidrs() {
    return cdktn.Fn.tolist(this.getListAttribute('cidrs'));
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // numbers - computed: true, optional: false, required: false
  public get numbers() {
    return cdktn.Token.asNumberList(cdktn.Fn.tolist(this.getNumberListAttribute('numbers')));
  }

  // ports - computed: true, optional: false, required: false
  public get ports() {
    return cdktn.Token.asNumberList(cdktn.Fn.tolist(this.getNumberListAttribute('ports')));
  }

  // strings - computed: true, optional: false, required: false
  public get strings() {
    return cdktn.Fn.tolist(this.getListAttribute('strings'));
  }
}
export interface DataAwsccIotSecurityProfileBehaviorsCriteria {
}

export function dataAwsccIotSecurityProfileBehaviorsCriteriaToTerraform(struct?: DataAwsccIotSecurityProfileBehaviorsCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotSecurityProfileBehaviorsCriteriaToHclTerraform(struct?: DataAwsccIotSecurityProfileBehaviorsCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotSecurityProfileBehaviorsCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotSecurityProfileBehaviorsCriteria | undefined) {
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

  // consecutive_datapoints_to_alarm - computed: true, optional: false, required: false
  public get consecutiveDatapointsToAlarm() {
    return this.getNumberAttribute('consecutive_datapoints_to_alarm');
  }

  // consecutive_datapoints_to_clear - computed: true, optional: false, required: false
  public get consecutiveDatapointsToClear() {
    return this.getNumberAttribute('consecutive_datapoints_to_clear');
  }

  // duration_seconds - computed: true, optional: false, required: false
  public get durationSeconds() {
    return this.getNumberAttribute('duration_seconds');
  }

  // ml_detection_config - computed: true, optional: false, required: false
  private _mlDetectionConfig = new DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference(this, "ml_detection_config");
  public get mlDetectionConfig() {
    return this._mlDetectionConfig;
  }

  // statistical_threshold - computed: true, optional: false, required: false
  private _statisticalThreshold = new DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference(this, "statistical_threshold");
  public get statisticalThreshold() {
    return this._statisticalThreshold;
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataAwsccIotSecurityProfileBehaviorsMetricDimension {
}

export function dataAwsccIotSecurityProfileBehaviorsMetricDimensionToTerraform(struct?: DataAwsccIotSecurityProfileBehaviorsMetricDimension): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotSecurityProfileBehaviorsMetricDimensionToHclTerraform(struct?: DataAwsccIotSecurityProfileBehaviorsMetricDimension): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotSecurityProfileBehaviorsMetricDimension | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotSecurityProfileBehaviorsMetricDimension | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_name - computed: true, optional: false, required: false
  public get dimensionName() {
    return this.getStringAttribute('dimension_name');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }
}
export interface DataAwsccIotSecurityProfileBehaviors {
}

export function dataAwsccIotSecurityProfileBehaviorsToTerraform(struct?: DataAwsccIotSecurityProfileBehaviors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotSecurityProfileBehaviorsToHclTerraform(struct?: DataAwsccIotSecurityProfileBehaviors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotSecurityProfileBehaviorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotSecurityProfileBehaviors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotSecurityProfileBehaviors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }

  // export_metric - computed: true, optional: false, required: false
  public get exportMetric() {
    return this.getBooleanAttribute('export_metric');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // metric_dimension - computed: true, optional: false, required: false
  private _metricDimension = new DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference(this, "metric_dimension");
  public get metricDimension() {
    return this._metricDimension;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // suppress_alerts - computed: true, optional: false, required: false
  public get suppressAlerts() {
    return this.getBooleanAttribute('suppress_alerts');
  }
}

export class DataAwsccIotSecurityProfileBehaviorsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotSecurityProfileBehaviorsOutputReference {
    return new DataAwsccIotSecurityProfileBehaviorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotSecurityProfileMetricsExportConfig {
}

export function dataAwsccIotSecurityProfileMetricsExportConfigToTerraform(struct?: DataAwsccIotSecurityProfileMetricsExportConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotSecurityProfileMetricsExportConfigToHclTerraform(struct?: DataAwsccIotSecurityProfileMetricsExportConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotSecurityProfileMetricsExportConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotSecurityProfileMetricsExportConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotSecurityProfileMetricsExportConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mqtt_topic - computed: true, optional: false, required: false
  public get mqttTopic() {
    return this.getStringAttribute('mqtt_topic');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccIotSecurityProfileTags {
}

export function dataAwsccIotSecurityProfileTagsToTerraform(struct?: DataAwsccIotSecurityProfileTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotSecurityProfileTagsToHclTerraform(struct?: DataAwsccIotSecurityProfileTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotSecurityProfileTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotSecurityProfileTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotSecurityProfileTags | undefined) {
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

export class DataAwsccIotSecurityProfileTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotSecurityProfileTagsOutputReference {
    return new DataAwsccIotSecurityProfileTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/iot_security_profile awscc_iot_security_profile}
*/
export class DataAwsccIotSecurityProfile extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iot_security_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccIotSecurityProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccIotSecurityProfile to import
  * @param importFromId The id of the existing DataAwsccIotSecurityProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/iot_security_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccIotSecurityProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_security_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/iot_security_profile awscc_iot_security_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotSecurityProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotSecurityProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iot_security_profile',
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

  // additional_metrics_to_retain_v2 - computed: true, optional: false, required: false
  private _additionalMetricsToRetainV2 = new DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List(this, "additional_metrics_to_retain_v2", true);
  public get additionalMetricsToRetainV2() {
    return this._additionalMetricsToRetainV2;
  }

  // alert_targets - computed: true, optional: false, required: false
  private _alertTargets = new DataAwsccIotSecurityProfileAlertTargetsMap(this, "alert_targets");
  public get alertTargets() {
    return this._alertTargets;
  }

  // behaviors - computed: true, optional: false, required: false
  private _behaviors = new DataAwsccIotSecurityProfileBehaviorsList(this, "behaviors", true);
  public get behaviors() {
    return this._behaviors;
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

  // metrics_export_config - computed: true, optional: false, required: false
  private _metricsExportConfig = new DataAwsccIotSecurityProfileMetricsExportConfigOutputReference(this, "metrics_export_config");
  public get metricsExportConfig() {
    return this._metricsExportConfig;
  }

  // security_profile_arn - computed: true, optional: false, required: false
  public get securityProfileArn() {
    return this.getStringAttribute('security_profile_arn');
  }

  // security_profile_description - computed: true, optional: false, required: false
  public get securityProfileDescription() {
    return this.getStringAttribute('security_profile_description');
  }

  // security_profile_name - computed: true, optional: false, required: false
  public get securityProfileName() {
    return this.getStringAttribute('security_profile_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccIotSecurityProfileTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // target_arns - computed: true, optional: false, required: false
  public get targetArns() {
    return cdktn.Fn.tolist(this.getListAttribute('target_arns'));
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
