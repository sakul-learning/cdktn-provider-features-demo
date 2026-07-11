// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/bedrockagentcore_online_evaluation_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/bedrockagentcore_online_evaluation_config#id DataAwsccBedrockagentcoreOnlineEvaluationConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig {
}

export function dataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigToTerraform(struct?: DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // frequencies - computed: true, optional: false, required: false
  public get frequencies() {
    return this.getListAttribute('frequencies');
  }
}
export interface DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs {
}

export function dataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsToTerraform(struct?: DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsToHclTerraform(struct?: DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_group_names - computed: true, optional: false, required: false
  public get logGroupNames() {
    return this.getListAttribute('log_group_names');
  }

  // service_names - computed: true, optional: false, required: false
  public get serviceNames() {
    return this.getListAttribute('service_names');
  }
}
export interface DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig {
}

export function dataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigToTerraform(struct?: DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_logs - computed: true, optional: false, required: false
  private _cloudwatchLogs = new DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference(this, "cloudwatch_logs");
  public get cloudwatchLogs() {
    return this._cloudwatchLogs;
  }
}
export interface DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators {
}

export function dataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsToTerraform(struct?: DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsToHclTerraform(struct?: DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // evaluator_id - computed: true, optional: false, required: false
  public get evaluatorId() {
    return this.getStringAttribute('evaluator_id');
  }
}

export class DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference {
    return new DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights {
}

export function dataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsToTerraform(struct?: DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsToHclTerraform(struct?: DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insight_id - computed: true, optional: false, required: false
  public get insightId() {
    return this.getStringAttribute('insight_id');
  }
}

export class DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference {
    return new DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig {
}

export function dataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigToTerraform(struct?: DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
}
export interface DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig {
}

export function dataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigToTerraform(struct?: DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_config - computed: true, optional: false, required: false
  private _cloudwatchConfig = new DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference(this, "cloudwatch_config");
  public get cloudwatchConfig() {
    return this._cloudwatchConfig;
  }
}
export interface DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue {
}

export function dataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueToTerraform(struct?: DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueToHclTerraform(struct?: DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boolean_value - computed: true, optional: false, required: false
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }

  // double_value - computed: true, optional: false, required: false
  public get doubleValue() {
    return this.getNumberAttribute('double_value');
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}
export interface DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters {
}

export function dataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersToTerraform(struct?: DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersToHclTerraform(struct?: DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters | undefined) {
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

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference {
    return new DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig {
}

export function dataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigToTerraform(struct?: DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sampling_percentage - computed: true, optional: false, required: false
  public get samplingPercentage() {
    return this.getNumberAttribute('sampling_percentage');
  }
}
export interface DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig {
}

export function dataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigToTerraform(struct?: DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // session_timeout_minutes - computed: true, optional: false, required: false
  public get sessionTimeoutMinutes() {
    return this.getNumberAttribute('session_timeout_minutes');
  }
}
export interface DataAwsccBedrockagentcoreOnlineEvaluationConfigRule {
}

export function dataAwsccBedrockagentcoreOnlineEvaluationConfigRuleToTerraform(struct?: DataAwsccBedrockagentcoreOnlineEvaluationConfigRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOnlineEvaluationConfigRuleToHclTerraform(struct?: DataAwsccBedrockagentcoreOnlineEvaluationConfigRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreOnlineEvaluationConfigRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOnlineEvaluationConfigRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // sampling_config - computed: true, optional: false, required: false
  private _samplingConfig = new DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference(this, "sampling_config");
  public get samplingConfig() {
    return this._samplingConfig;
  }

  // session_config - computed: true, optional: false, required: false
  private _sessionConfig = new DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference(this, "session_config");
  public get sessionConfig() {
    return this._sessionConfig;
  }
}
export interface DataAwsccBedrockagentcoreOnlineEvaluationConfigTags {
}

export function dataAwsccBedrockagentcoreOnlineEvaluationConfigTagsToTerraform(struct?: DataAwsccBedrockagentcoreOnlineEvaluationConfigTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreOnlineEvaluationConfigTagsToHclTerraform(struct?: DataAwsccBedrockagentcoreOnlineEvaluationConfigTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcoreOnlineEvaluationConfigTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreOnlineEvaluationConfigTags | undefined) {
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

export class DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference {
    return new DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/bedrockagentcore_online_evaluation_config awscc_bedrockagentcore_online_evaluation_config}
*/
export class DataAwsccBedrockagentcoreOnlineEvaluationConfig extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bedrockagentcore_online_evaluation_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccBedrockagentcoreOnlineEvaluationConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccBedrockagentcoreOnlineEvaluationConfig to import
  * @param importFromId The id of the existing DataAwsccBedrockagentcoreOnlineEvaluationConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/bedrockagentcore_online_evaluation_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccBedrockagentcoreOnlineEvaluationConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_online_evaluation_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/bedrockagentcore_online_evaluation_config awscc_bedrockagentcore_online_evaluation_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_bedrockagentcore_online_evaluation_config',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clustering_config - computed: true, optional: false, required: false
  private _clusteringConfig = new DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference(this, "clustering_config");
  public get clusteringConfig() {
    return this._clusteringConfig;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // data_source_config - computed: true, optional: false, required: false
  private _dataSourceConfig = new DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference(this, "data_source_config");
  public get dataSourceConfig() {
    return this._dataSourceConfig;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // evaluation_execution_role_arn - computed: true, optional: false, required: false
  public get evaluationExecutionRoleArn() {
    return this.getStringAttribute('evaluation_execution_role_arn');
  }

  // evaluators - computed: true, optional: false, required: false
  private _evaluators = new DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList(this, "evaluators", false);
  public get evaluators() {
    return this._evaluators;
  }

  // execution_status - computed: true, optional: false, required: false
  public get executionStatus() {
    return this.getStringAttribute('execution_status');
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

  // insights - computed: true, optional: false, required: false
  private _insights = new DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList(this, "insights", false);
  public get insights() {
    return this._insights;
  }

  // online_evaluation_config_arn - computed: true, optional: false, required: false
  public get onlineEvaluationConfigArn() {
    return this.getStringAttribute('online_evaluation_config_arn');
  }

  // online_evaluation_config_id - computed: true, optional: false, required: false
  public get onlineEvaluationConfigId() {
    return this.getStringAttribute('online_evaluation_config_id');
  }

  // online_evaluation_config_name - computed: true, optional: false, required: false
  public get onlineEvaluationConfigName() {
    return this.getStringAttribute('online_evaluation_config_name');
  }

  // output_config - computed: true, optional: false, required: false
  private _outputConfig = new DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference(this, "output_config");
  public get outputConfig() {
    return this._outputConfig;
  }

  // rule - computed: true, optional: false, required: false
  private _rule = new DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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
