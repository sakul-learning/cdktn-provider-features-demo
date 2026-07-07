// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/autoscaling_scaling_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccAutoscalingScalingPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/autoscaling_scaling_policy#id DataAwsccAutoscalingScalingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions {
}

export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsToTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsToHclTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | undefined) {
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

export class DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference {
    return new DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric {
}

export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricToTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricToHclTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList(this, "dimensions", true);
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
export interface DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat {
}

export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatToTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatToHclTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric - computed: true, optional: false, required: false
  private _metric = new DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
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
export interface DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries {
}

export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesToTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesToHclTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // metric_stat - computed: true, optional: false, required: false
  private _metricStat = new DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference(this, "metric_stat");
  public get metricStat() {
    return this._metricStat;
  }

  // return_data - computed: true, optional: false, required: false
  public get returnData() {
    return this.getBooleanAttribute('return_data');
  }
}

export class DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference {
    return new DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification {
}

export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationToTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationToHclTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric_data_queries - computed: true, optional: false, required: false
  private _metricDataQueries = new DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList(this, "metric_data_queries", true);
  public get metricDataQueries() {
    return this._metricDataQueries;
  }
}
export interface DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions {
}

export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsToTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsToHclTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | undefined) {
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

export class DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference {
    return new DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric {
}

export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricToTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricToHclTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList(this, "dimensions", true);
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
export interface DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat {
}

export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatToTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatToHclTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric - computed: true, optional: false, required: false
  private _metric = new DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
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
export interface DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries {
}

export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesToTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesToHclTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // metric_stat - computed: true, optional: false, required: false
  private _metricStat = new DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference(this, "metric_stat");
  public get metricStat() {
    return this._metricStat;
  }

  // return_data - computed: true, optional: false, required: false
  public get returnData() {
    return this.getBooleanAttribute('return_data');
  }
}

export class DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference {
    return new DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification {
}

export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationToTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationToHclTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric_data_queries - computed: true, optional: false, required: false
  private _metricDataQueries = new DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList(this, "metric_data_queries", true);
  public get metricDataQueries() {
    return this._metricDataQueries;
  }
}
export interface DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions {
}

export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsToTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsToHclTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | undefined) {
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

export class DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference {
    return new DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric {
}

export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricToTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricToHclTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList(this, "dimensions", true);
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
export interface DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat {
}

export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatToTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatToHclTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric - computed: true, optional: false, required: false
  private _metric = new DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
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
export interface DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries {
}

export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesToTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesToHclTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // metric_stat - computed: true, optional: false, required: false
  private _metricStat = new DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference(this, "metric_stat");
  public get metricStat() {
    return this._metricStat;
  }

  // return_data - computed: true, optional: false, required: false
  public get returnData() {
    return this.getBooleanAttribute('return_data');
  }
}

export class DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference {
    return new DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification {
}

export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationToTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationToHclTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric_data_queries - computed: true, optional: false, required: false
  private _metricDataQueries = new DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList(this, "metric_data_queries", true);
  public get metricDataQueries() {
    return this._metricDataQueries;
  }
}
export interface DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification {
}

export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationToTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationToHclTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // predefined_metric_type - computed: true, optional: false, required: false
  public get predefinedMetricType() {
    return this.getStringAttribute('predefined_metric_type');
  }

  // resource_label - computed: true, optional: false, required: false
  public get resourceLabel() {
    return this.getStringAttribute('resource_label');
  }
}
export interface DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification {
}

export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationToTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationToHclTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // predefined_metric_type - computed: true, optional: false, required: false
  public get predefinedMetricType() {
    return this.getStringAttribute('predefined_metric_type');
  }

  // resource_label - computed: true, optional: false, required: false
  public get resourceLabel() {
    return this.getStringAttribute('resource_label');
  }
}
export interface DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification {
}

export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationToTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationToHclTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // predefined_metric_type - computed: true, optional: false, required: false
  public get predefinedMetricType() {
    return this.getStringAttribute('predefined_metric_type');
  }

  // resource_label - computed: true, optional: false, required: false
  public get resourceLabel() {
    return this.getStringAttribute('resource_label');
  }
}
export interface DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications {
}

export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsToTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsToHclTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // customized_capacity_metric_specification - computed: true, optional: false, required: false
  private _customizedCapacityMetricSpecification = new DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference(this, "customized_capacity_metric_specification");
  public get customizedCapacityMetricSpecification() {
    return this._customizedCapacityMetricSpecification;
  }

  // customized_load_metric_specification - computed: true, optional: false, required: false
  private _customizedLoadMetricSpecification = new DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference(this, "customized_load_metric_specification");
  public get customizedLoadMetricSpecification() {
    return this._customizedLoadMetricSpecification;
  }

  // customized_scaling_metric_specification - computed: true, optional: false, required: false
  private _customizedScalingMetricSpecification = new DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference(this, "customized_scaling_metric_specification");
  public get customizedScalingMetricSpecification() {
    return this._customizedScalingMetricSpecification;
  }

  // predefined_load_metric_specification - computed: true, optional: false, required: false
  private _predefinedLoadMetricSpecification = new DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference(this, "predefined_load_metric_specification");
  public get predefinedLoadMetricSpecification() {
    return this._predefinedLoadMetricSpecification;
  }

  // predefined_metric_pair_specification - computed: true, optional: false, required: false
  private _predefinedMetricPairSpecification = new DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference(this, "predefined_metric_pair_specification");
  public get predefinedMetricPairSpecification() {
    return this._predefinedMetricPairSpecification;
  }

  // predefined_scaling_metric_specification - computed: true, optional: false, required: false
  private _predefinedScalingMetricSpecification = new DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference(this, "predefined_scaling_metric_specification");
  public get predefinedScalingMetricSpecification() {
    return this._predefinedScalingMetricSpecification;
  }

  // target_value - computed: true, optional: false, required: false
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
}

export class DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference {
    return new DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAutoscalingScalingPolicyPredictiveScalingConfiguration {
}

export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationToTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationToHclTerraform(struct?: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingScalingPolicyPredictiveScalingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_capacity_breach_behavior - computed: true, optional: false, required: false
  public get maxCapacityBreachBehavior() {
    return this.getStringAttribute('max_capacity_breach_behavior');
  }

  // max_capacity_buffer - computed: true, optional: false, required: false
  public get maxCapacityBuffer() {
    return this.getNumberAttribute('max_capacity_buffer');
  }

  // metric_specifications - computed: true, optional: false, required: false
  private _metricSpecifications = new DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList(this, "metric_specifications", true);
  public get metricSpecifications() {
    return this._metricSpecifications;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // scheduling_buffer_time - computed: true, optional: false, required: false
  public get schedulingBufferTime() {
    return this.getNumberAttribute('scheduling_buffer_time');
  }
}
export interface DataAwsccAutoscalingScalingPolicyStepAdjustments {
}

export function dataAwsccAutoscalingScalingPolicyStepAdjustmentsToTerraform(struct?: DataAwsccAutoscalingScalingPolicyStepAdjustments): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingScalingPolicyStepAdjustmentsToHclTerraform(struct?: DataAwsccAutoscalingScalingPolicyStepAdjustments): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAutoscalingScalingPolicyStepAdjustments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingScalingPolicyStepAdjustments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric_interval_lower_bound - computed: true, optional: false, required: false
  public get metricIntervalLowerBound() {
    return this.getNumberAttribute('metric_interval_lower_bound');
  }

  // metric_interval_upper_bound - computed: true, optional: false, required: false
  public get metricIntervalUpperBound() {
    return this.getNumberAttribute('metric_interval_upper_bound');
  }

  // scaling_adjustment - computed: true, optional: false, required: false
  public get scalingAdjustment() {
    return this.getNumberAttribute('scaling_adjustment');
  }
}

export class DataAwsccAutoscalingScalingPolicyStepAdjustmentsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference {
    return new DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions {
}

export function dataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsToTerraform(struct?: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsToHclTerraform(struct?: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions | undefined) {
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

export class DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference {
    return new DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions {
}

export function dataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsToTerraform(struct?: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsToHclTerraform(struct?: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions | undefined) {
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

export class DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference {
    return new DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric {
}

export function dataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricToTerraform(struct?: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricToHclTerraform(struct?: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList(this, "dimensions", true);
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
export interface DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat {
}

export function dataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatToTerraform(struct?: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatToHclTerraform(struct?: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric - computed: true, optional: false, required: false
  private _metric = new DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference(this, "metric");
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
export interface DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics {
}

export function dataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsToTerraform(struct?: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsToHclTerraform(struct?: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // metric_stat - computed: true, optional: false, required: false
  private _metricStat = new DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference(this, "metric_stat");
  public get metricStat() {
    return this._metricStat;
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getNumberAttribute('period');
  }

  // return_data - computed: true, optional: false, required: false
  public get returnData() {
    return this.getBooleanAttribute('return_data');
  }
}

export class DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference {
    return new DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification {
}

export function dataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToTerraform(struct?: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToHclTerraform(struct?: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList(this, "dimensions", true);
  public get dimensions() {
    return this._dimensions;
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList(this, "metrics", true);
  public get metrics() {
    return this._metrics;
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getNumberAttribute('period');
  }

  // statistic - computed: true, optional: false, required: false
  public get statistic() {
    return this.getStringAttribute('statistic');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}
export interface DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification {
}

export function dataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToTerraform(struct?: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToHclTerraform(struct?: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // predefined_metric_type - computed: true, optional: false, required: false
  public get predefinedMetricType() {
    return this.getStringAttribute('predefined_metric_type');
  }

  // resource_label - computed: true, optional: false, required: false
  public get resourceLabel() {
    return this.getStringAttribute('resource_label');
  }
}
export interface DataAwsccAutoscalingScalingPolicyTargetTrackingConfiguration {
}

export function dataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationToTerraform(struct?: DataAwsccAutoscalingScalingPolicyTargetTrackingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationToHclTerraform(struct?: DataAwsccAutoscalingScalingPolicyTargetTrackingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingScalingPolicyTargetTrackingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingScalingPolicyTargetTrackingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // customized_metric_specification - computed: true, optional: false, required: false
  private _customizedMetricSpecification = new DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference(this, "customized_metric_specification");
  public get customizedMetricSpecification() {
    return this._customizedMetricSpecification;
  }

  // disable_scale_in - computed: true, optional: false, required: false
  public get disableScaleIn() {
    return this.getBooleanAttribute('disable_scale_in');
  }

  // predefined_metric_specification - computed: true, optional: false, required: false
  private _predefinedMetricSpecification = new DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference(this, "predefined_metric_specification");
  public get predefinedMetricSpecification() {
    return this._predefinedMetricSpecification;
  }

  // target_value - computed: true, optional: false, required: false
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/autoscaling_scaling_policy awscc_autoscaling_scaling_policy}
*/
export class DataAwsccAutoscalingScalingPolicy extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_autoscaling_scaling_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccAutoscalingScalingPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccAutoscalingScalingPolicy to import
  * @param importFromId The id of the existing DataAwsccAutoscalingScalingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/autoscaling_scaling_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccAutoscalingScalingPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_autoscaling_scaling_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/autoscaling_scaling_policy awscc_autoscaling_scaling_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccAutoscalingScalingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccAutoscalingScalingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_autoscaling_scaling_policy',
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

  // adjustment_type - computed: true, optional: false, required: false
  public get adjustmentType() {
    return this.getStringAttribute('adjustment_type');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_scaling_group_name - computed: true, optional: false, required: false
  public get autoScalingGroupName() {
    return this.getStringAttribute('auto_scaling_group_name');
  }

  // cooldown - computed: true, optional: false, required: false
  public get cooldown() {
    return this.getStringAttribute('cooldown');
  }

  // estimated_instance_warmup - computed: true, optional: false, required: false
  public get estimatedInstanceWarmup() {
    return this.getNumberAttribute('estimated_instance_warmup');
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

  // metric_aggregation_type - computed: true, optional: false, required: false
  public get metricAggregationType() {
    return this.getStringAttribute('metric_aggregation_type');
  }

  // min_adjustment_magnitude - computed: true, optional: false, required: false
  public get minAdjustmentMagnitude() {
    return this.getNumberAttribute('min_adjustment_magnitude');
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // policy_type - computed: true, optional: false, required: false
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }

  // predictive_scaling_configuration - computed: true, optional: false, required: false
  private _predictiveScalingConfiguration = new DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference(this, "predictive_scaling_configuration");
  public get predictiveScalingConfiguration() {
    return this._predictiveScalingConfiguration;
  }

  // scaling_adjustment - computed: true, optional: false, required: false
  public get scalingAdjustment() {
    return this.getNumberAttribute('scaling_adjustment');
  }

  // step_adjustments - computed: true, optional: false, required: false
  private _stepAdjustments = new DataAwsccAutoscalingScalingPolicyStepAdjustmentsList(this, "step_adjustments", true);
  public get stepAdjustments() {
    return this._stepAdjustments;
  }

  // target_tracking_configuration - computed: true, optional: false, required: false
  private _targetTrackingConfiguration = new DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference(this, "target_tracking_configuration");
  public get targetTrackingConfiguration() {
    return this._targetTrackingConfiguration;
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
