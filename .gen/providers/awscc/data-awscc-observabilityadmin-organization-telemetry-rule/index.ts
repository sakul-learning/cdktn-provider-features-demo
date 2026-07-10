// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/observabilityadmin_organization_telemetry_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccObservabilityadminOrganizationTelemetryRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/observabilityadmin_organization_telemetry_rule#id DataAwsccObservabilityadminOrganizationTelemetryRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccObservabilityadminOrganizationTelemetryRuleRegionStatuses {
}

export function dataAwsccObservabilityadminOrganizationTelemetryRuleRegionStatusesToTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRegionStatuses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccObservabilityadminOrganizationTelemetryRuleRegionStatusesToHclTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRegionStatuses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccObservabilityadminOrganizationTelemetryRuleRegionStatuses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccObservabilityadminOrganizationTelemetryRuleRegionStatuses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // rule_arn - computed: true, optional: false, required: false
  public get ruleArn() {
    return this.getStringAttribute('rule_arn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAwsccObservabilityadminOrganizationTelemetryRuleRegionStatusesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference {
    return new DataAwsccObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors {
}

export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsToTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsToHclTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ends_with - computed: true, optional: false, required: false
  public get endsWith() {
    return cdktn.Fn.tolist(this.getListAttribute('ends_with'));
  }

  // equals - computed: true, optional: false, required: false
  public get equalTo() {
    return cdktn.Fn.tolist(this.getListAttribute('equals'));
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // not_ends_with - computed: true, optional: false, required: false
  public get notEndsWith() {
    return cdktn.Fn.tolist(this.getListAttribute('not_ends_with'));
  }

  // not_equals - computed: true, optional: false, required: false
  public get notEquals() {
    return cdktn.Fn.tolist(this.getListAttribute('not_equals'));
  }

  // not_starts_with - computed: true, optional: false, required: false
  public get notStartsWith() {
    return cdktn.Fn.tolist(this.getListAttribute('not_starts_with'));
  }

  // starts_with - computed: true, optional: false, required: false
  public get startsWith() {
    return cdktn.Fn.tolist(this.getListAttribute('starts_with'));
  }
}

export class DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference {
    return new DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors {
}

export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsToTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsToHclTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_selectors - computed: true, optional: false, required: false
  private _fieldSelectors = new DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList(this, "field_selectors", true);
  public get fieldSelectors() {
    return this._fieldSelectors;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference {
    return new DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters {
}

export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersToTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersToHclTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advanced_event_selectors - computed: true, optional: false, required: false
  private _advancedEventSelectors = new DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList(this, "advanced_event_selectors", true);
  public get advancedEventSelectors() {
    return this._advancedEventSelectors;
  }
}
export interface DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters {
}

export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersToTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersToHclTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_delimiter - computed: true, optional: false, required: false
  public get fieldDelimiter() {
    return this.getStringAttribute('field_delimiter');
  }

  // output_format - computed: true, optional: false, required: false
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
}
export interface DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters {
}

export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersToTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersToHclTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_types - computed: true, optional: false, required: false
  public get logTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('log_types'));
  }
}
export interface DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters {
}

export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersToTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersToHclTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_format - computed: true, optional: false, required: false
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }

  // max_aggregation_interval - computed: true, optional: false, required: false
  public get maxAggregationInterval() {
    return this.getNumberAttribute('max_aggregation_interval');
  }

  // traffic_type - computed: true, optional: false, required: false
  public get trafficType() {
    return this.getStringAttribute('traffic_type');
  }
}
export interface DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition {
}

export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionToTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionToHclTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }
}
export interface DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition {
}

export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionToTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionToHclTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label_name - computed: true, optional: false, required: false
  public get labelName() {
    return this.getStringAttribute('label_name');
  }
}
export interface DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions {
}

export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsToTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsToHclTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_condition - computed: true, optional: false, required: false
  private _actionCondition = new DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference(this, "action_condition");
  public get actionCondition() {
    return this._actionCondition;
  }

  // label_name_condition - computed: true, optional: false, required: false
  private _labelNameCondition = new DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference(this, "label_name_condition");
  public get labelNameCondition() {
    return this._labelNameCondition;
  }
}

export class DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference {
    return new DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters {
}

export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersToTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersToHclTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // behavior - computed: true, optional: false, required: false
  public get behavior() {
    return this.getStringAttribute('behavior');
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList(this, "conditions", true);
  public get conditions() {
    return this._conditions;
  }

  // requirement - computed: true, optional: false, required: false
  public get requirement() {
    return this.getStringAttribute('requirement');
  }
}

export class DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference {
    return new DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter {
}

export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterToTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterToHclTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_behavior - computed: true, optional: false, required: false
  public get defaultBehavior() {
    return this.getStringAttribute('default_behavior');
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList(this, "filters", true);
  public get filters() {
    return this._filters;
  }
}
export interface DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader {
}

export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderToTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderToHclTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader | undefined) {
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
}
export interface DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields {
}

export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsToTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsToHclTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // query_string - computed: true, optional: false, required: false
  public get queryString() {
    return this.getStringAttribute('query_string');
  }

  // single_header - computed: true, optional: false, required: false
  private _singleHeader = new DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference(this, "single_header");
  public get singleHeader() {
    return this._singleHeader;
  }

  // uri_path - computed: true, optional: false, required: false
  public get uriPath() {
    return this.getStringAttribute('uri_path');
  }
}

export class DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference {
    return new DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters {
}

export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersToTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersToHclTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_type - computed: true, optional: false, required: false
  public get logType() {
    return this.getStringAttribute('log_type');
  }

  // logging_filter - computed: true, optional: false, required: false
  private _loggingFilter = new DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference(this, "logging_filter");
  public get loggingFilter() {
    return this._loggingFilter;
  }

  // redacted_fields - computed: true, optional: false, required: false
  private _redactedFields = new DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList(this, "redacted_fields", true);
  public get redactedFields() {
    return this._redactedFields;
  }
}
export interface DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration {
}

export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationToTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationToHclTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudtrail_parameters - computed: true, optional: false, required: false
  private _cloudtrailParameters = new DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference(this, "cloudtrail_parameters");
  public get cloudtrailParameters() {
    return this._cloudtrailParameters;
  }

  // destination_pattern - computed: true, optional: false, required: false
  public get destinationPattern() {
    return this.getStringAttribute('destination_pattern');
  }

  // destination_type - computed: true, optional: false, required: false
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }

  // elb_load_balancer_logging_parameters - computed: true, optional: false, required: false
  private _elbLoadBalancerLoggingParameters = new DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference(this, "elb_load_balancer_logging_parameters");
  public get elbLoadBalancerLoggingParameters() {
    return this._elbLoadBalancerLoggingParameters;
  }

  // log_delivery_parameters - computed: true, optional: false, required: false
  private _logDeliveryParameters = new DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference(this, "log_delivery_parameters");
  public get logDeliveryParameters() {
    return this._logDeliveryParameters;
  }

  // retention_in_days - computed: true, optional: false, required: false
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }

  // vpc_flow_log_parameters - computed: true, optional: false, required: false
  private _vpcFlowLogParameters = new DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference(this, "vpc_flow_log_parameters");
  public get vpcFlowLogParameters() {
    return this._vpcFlowLogParameters;
  }

  // waf_logging_parameters - computed: true, optional: false, required: false
  private _wafLoggingParameters = new DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference(this, "waf_logging_parameters");
  public get wafLoggingParameters() {
    return this._wafLoggingParameters;
  }
}
export interface DataAwsccObservabilityadminOrganizationTelemetryRuleRule {
}

export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleToTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccObservabilityadminOrganizationTelemetryRuleRuleToHclTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccObservabilityadminOrganizationTelemetryRuleRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccObservabilityadminOrganizationTelemetryRuleRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccObservabilityadminOrganizationTelemetryRuleRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_regions - computed: true, optional: false, required: false
  public get allRegions() {
    return this.getBooleanAttribute('all_regions');
  }

  // allow_field_updates - computed: true, optional: false, required: false
  public get allowFieldUpdates() {
    return this.getBooleanAttribute('allow_field_updates');
  }

  // destination_configuration - computed: true, optional: false, required: false
  private _destinationConfiguration = new DataAwsccObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference(this, "destination_configuration");
  public get destinationConfiguration() {
    return this._destinationConfiguration;
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return cdktn.Fn.tolist(this.getListAttribute('regions'));
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // selection_criteria - computed: true, optional: false, required: false
  public get selectionCriteria() {
    return this.getStringAttribute('selection_criteria');
  }

  // telemetry_source_types - computed: true, optional: false, required: false
  public get telemetrySourceTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('telemetry_source_types'));
  }

  // telemetry_type - computed: true, optional: false, required: false
  public get telemetryType() {
    return this.getStringAttribute('telemetry_type');
  }
}
export interface DataAwsccObservabilityadminOrganizationTelemetryRuleTags {
}

export function dataAwsccObservabilityadminOrganizationTelemetryRuleTagsToTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccObservabilityadminOrganizationTelemetryRuleTagsToHclTerraform(struct?: DataAwsccObservabilityadminOrganizationTelemetryRuleTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccObservabilityadminOrganizationTelemetryRuleTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccObservabilityadminOrganizationTelemetryRuleTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccObservabilityadminOrganizationTelemetryRuleTags | undefined) {
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

export class DataAwsccObservabilityadminOrganizationTelemetryRuleTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccObservabilityadminOrganizationTelemetryRuleTagsOutputReference {
    return new DataAwsccObservabilityadminOrganizationTelemetryRuleTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/observabilityadmin_organization_telemetry_rule awscc_observabilityadmin_organization_telemetry_rule}
*/
export class DataAwsccObservabilityadminOrganizationTelemetryRule extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_observabilityadmin_organization_telemetry_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccObservabilityadminOrganizationTelemetryRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccObservabilityadminOrganizationTelemetryRule to import
  * @param importFromId The id of the existing DataAwsccObservabilityadminOrganizationTelemetryRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/observabilityadmin_organization_telemetry_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccObservabilityadminOrganizationTelemetryRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_observabilityadmin_organization_telemetry_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/observabilityadmin_organization_telemetry_rule awscc_observabilityadmin_organization_telemetry_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccObservabilityadminOrganizationTelemetryRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccObservabilityadminOrganizationTelemetryRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_observabilityadmin_organization_telemetry_rule',
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

  // region_statuses - computed: true, optional: false, required: false
  private _regionStatuses = new DataAwsccObservabilityadminOrganizationTelemetryRuleRegionStatusesList(this, "region_statuses", false);
  public get regionStatuses() {
    return this._regionStatuses;
  }

  // rule - computed: true, optional: false, required: false
  private _rule = new DataAwsccObservabilityadminOrganizationTelemetryRuleRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }

  // rule_arn - computed: true, optional: false, required: false
  public get ruleArn() {
    return this.getStringAttribute('rule_arn');
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccObservabilityadminOrganizationTelemetryRuleTagsList(this, "tags", true);
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
