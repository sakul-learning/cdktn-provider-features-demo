// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/events_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEventsRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/events_rule#id DataAwsccEventsRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEventsRuleTags {
}

export function dataAwsccEventsRuleTagsToTerraform(struct?: DataAwsccEventsRuleTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsRuleTagsToHclTerraform(struct?: DataAwsccEventsRuleTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsRuleTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEventsRuleTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsRuleTags | undefined) {
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

export class DataAwsccEventsRuleTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEventsRuleTagsOutputReference {
    return new DataAwsccEventsRuleTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEventsRuleTargetsAppSyncParameters {
}

export function dataAwsccEventsRuleTargetsAppSyncParametersToTerraform(struct?: DataAwsccEventsRuleTargetsAppSyncParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsRuleTargetsAppSyncParametersToHclTerraform(struct?: DataAwsccEventsRuleTargetsAppSyncParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsRuleTargetsAppSyncParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsRuleTargetsAppSyncParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsRuleTargetsAppSyncParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // graph_ql_operation - computed: true, optional: false, required: false
  public get graphQlOperation() {
    return this.getStringAttribute('graph_ql_operation');
  }
}
export interface DataAwsccEventsRuleTargetsBatchParametersArrayProperties {
}

export function dataAwsccEventsRuleTargetsBatchParametersArrayPropertiesToTerraform(struct?: DataAwsccEventsRuleTargetsBatchParametersArrayProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsRuleTargetsBatchParametersArrayPropertiesToHclTerraform(struct?: DataAwsccEventsRuleTargetsBatchParametersArrayProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsRuleTargetsBatchParametersArrayProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsRuleTargetsBatchParametersArrayProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }
}
export interface DataAwsccEventsRuleTargetsBatchParametersRetryStrategy {
}

export function dataAwsccEventsRuleTargetsBatchParametersRetryStrategyToTerraform(struct?: DataAwsccEventsRuleTargetsBatchParametersRetryStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsRuleTargetsBatchParametersRetryStrategyToHclTerraform(struct?: DataAwsccEventsRuleTargetsBatchParametersRetryStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsRuleTargetsBatchParametersRetryStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsRuleTargetsBatchParametersRetryStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attempts - computed: true, optional: false, required: false
  public get attempts() {
    return this.getNumberAttribute('attempts');
  }
}
export interface DataAwsccEventsRuleTargetsBatchParameters {
}

export function dataAwsccEventsRuleTargetsBatchParametersToTerraform(struct?: DataAwsccEventsRuleTargetsBatchParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsRuleTargetsBatchParametersToHclTerraform(struct?: DataAwsccEventsRuleTargetsBatchParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsRuleTargetsBatchParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsRuleTargetsBatchParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsRuleTargetsBatchParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // array_properties - computed: true, optional: false, required: false
  private _arrayProperties = new DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference(this, "array_properties");
  public get arrayProperties() {
    return this._arrayProperties;
  }

  // job_definition - computed: true, optional: false, required: false
  public get jobDefinition() {
    return this.getStringAttribute('job_definition');
  }

  // job_name - computed: true, optional: false, required: false
  public get jobName() {
    return this.getStringAttribute('job_name');
  }

  // retry_strategy - computed: true, optional: false, required: false
  private _retryStrategy = new DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference(this, "retry_strategy");
  public get retryStrategy() {
    return this._retryStrategy;
  }
}
export interface DataAwsccEventsRuleTargetsDeadLetterConfig {
}

export function dataAwsccEventsRuleTargetsDeadLetterConfigToTerraform(struct?: DataAwsccEventsRuleTargetsDeadLetterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsRuleTargetsDeadLetterConfigToHclTerraform(struct?: DataAwsccEventsRuleTargetsDeadLetterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsRuleTargetsDeadLetterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsRuleTargetsDeadLetterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }
}
export interface DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy {
}

export function dataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyToTerraform(struct?: DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyToHclTerraform(struct?: DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base - computed: true, optional: false, required: false
  public get base() {
    return this.getNumberAttribute('base');
  }

  // capacity_provider - computed: true, optional: false, required: false
  public get capacityProvider() {
    return this.getStringAttribute('capacity_provider');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference {
    return new DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration {
}

export function dataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationToTerraform(struct?: DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationToHclTerraform(struct?: DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assign_public_ip - computed: true, optional: false, required: false
  public get assignPublicIp() {
    return this.getStringAttribute('assign_public_ip');
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }
}
export interface DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration {
}

export function dataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationToTerraform(struct?: DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationToHclTerraform(struct?: DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_vpc_configuration - computed: true, optional: false, required: false
  private _awsVpcConfiguration = new DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference(this, "aws_vpc_configuration");
  public get awsVpcConfiguration() {
    return this._awsVpcConfiguration;
  }
}
export interface DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints {
}

export function dataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsToTerraform(struct?: DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsToHclTerraform(struct?: DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints | undefined) {
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference {
    return new DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies {
}

export function dataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesToTerraform(struct?: DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesToHclTerraform(struct?: DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference {
    return new DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEventsRuleTargetsEcsParametersTagListStruct {
}

export function dataAwsccEventsRuleTargetsEcsParametersTagListStructToTerraform(struct?: DataAwsccEventsRuleTargetsEcsParametersTagListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsRuleTargetsEcsParametersTagListStructToHclTerraform(struct?: DataAwsccEventsRuleTargetsEcsParametersTagListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEventsRuleTargetsEcsParametersTagListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsRuleTargetsEcsParametersTagListStruct | undefined) {
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

export class DataAwsccEventsRuleTargetsEcsParametersTagListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference {
    return new DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEventsRuleTargetsEcsParameters {
}

export function dataAwsccEventsRuleTargetsEcsParametersToTerraform(struct?: DataAwsccEventsRuleTargetsEcsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsRuleTargetsEcsParametersToHclTerraform(struct?: DataAwsccEventsRuleTargetsEcsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsRuleTargetsEcsParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsRuleTargetsEcsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsRuleTargetsEcsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_provider_strategy - computed: true, optional: false, required: false
  private _capacityProviderStrategy = new DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList(this, "capacity_provider_strategy", false);
  public get capacityProviderStrategy() {
    return this._capacityProviderStrategy;
  }

  // enable_ecs_managed_tags - computed: true, optional: false, required: false
  public get enableEcsManagedTags() {
    return this.getBooleanAttribute('enable_ecs_managed_tags');
  }

  // enable_execute_command - computed: true, optional: false, required: false
  public get enableExecuteCommand() {
    return this.getBooleanAttribute('enable_execute_command');
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // launch_type - computed: true, optional: false, required: false
  public get launchType() {
    return this.getStringAttribute('launch_type');
  }

  // network_configuration - computed: true, optional: false, required: false
  private _networkConfiguration = new DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }

  // placement_constraints - computed: true, optional: false, required: false
  private _placementConstraints = new DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList(this, "placement_constraints", false);
  public get placementConstraints() {
    return this._placementConstraints;
  }

  // placement_strategies - computed: true, optional: false, required: false
  private _placementStrategies = new DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList(this, "placement_strategies", false);
  public get placementStrategies() {
    return this._placementStrategies;
  }

  // platform_version - computed: true, optional: false, required: false
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }

  // propagate_tags - computed: true, optional: false, required: false
  public get propagateTags() {
    return this.getStringAttribute('propagate_tags');
  }

  // reference_id - computed: true, optional: false, required: false
  public get referenceId() {
    return this.getStringAttribute('reference_id');
  }

  // tag_list - computed: true, optional: false, required: false
  private _tagList = new DataAwsccEventsRuleTargetsEcsParametersTagListStructList(this, "tag_list", false);
  public get tagList() {
    return this._tagList;
  }

  // task_count - computed: true, optional: false, required: false
  public get taskCount() {
    return this.getNumberAttribute('task_count');
  }

  // task_definition_arn - computed: true, optional: false, required: false
  public get taskDefinitionArn() {
    return this.getStringAttribute('task_definition_arn');
  }
}
export interface DataAwsccEventsRuleTargetsHttpParameters {
}

export function dataAwsccEventsRuleTargetsHttpParametersToTerraform(struct?: DataAwsccEventsRuleTargetsHttpParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsRuleTargetsHttpParametersToHclTerraform(struct?: DataAwsccEventsRuleTargetsHttpParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsRuleTargetsHttpParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsRuleTargetsHttpParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsRuleTargetsHttpParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // header_parameters - computed: true, optional: false, required: false
  private _headerParameters = new cdktn.StringMap(this, "header_parameters");
  public get headerParameters() {
    return this._headerParameters;
  }

  // path_parameter_values - computed: true, optional: false, required: false
  public get pathParameterValues() {
    return this.getListAttribute('path_parameter_values');
  }

  // query_string_parameters - computed: true, optional: false, required: false
  private _queryStringParameters = new cdktn.StringMap(this, "query_string_parameters");
  public get queryStringParameters() {
    return this._queryStringParameters;
  }
}
export interface DataAwsccEventsRuleTargetsInputTransformer {
}

export function dataAwsccEventsRuleTargetsInputTransformerToTerraform(struct?: DataAwsccEventsRuleTargetsInputTransformer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsRuleTargetsInputTransformerToHclTerraform(struct?: DataAwsccEventsRuleTargetsInputTransformer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsRuleTargetsInputTransformerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsRuleTargetsInputTransformer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsRuleTargetsInputTransformer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // input_paths_map - computed: true, optional: false, required: false
  private _inputPathsMap = new cdktn.StringMap(this, "input_paths_map");
  public get inputPathsMap() {
    return this._inputPathsMap;
  }

  // input_template - computed: true, optional: false, required: false
  public get inputTemplate() {
    return this.getStringAttribute('input_template');
  }
}
export interface DataAwsccEventsRuleTargetsKinesisParameters {
}

export function dataAwsccEventsRuleTargetsKinesisParametersToTerraform(struct?: DataAwsccEventsRuleTargetsKinesisParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsRuleTargetsKinesisParametersToHclTerraform(struct?: DataAwsccEventsRuleTargetsKinesisParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsRuleTargetsKinesisParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsRuleTargetsKinesisParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsRuleTargetsKinesisParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // partition_key_path - computed: true, optional: false, required: false
  public get partitionKeyPath() {
    return this.getStringAttribute('partition_key_path');
  }
}
export interface DataAwsccEventsRuleTargetsRedshiftDataParameters {
}

export function dataAwsccEventsRuleTargetsRedshiftDataParametersToTerraform(struct?: DataAwsccEventsRuleTargetsRedshiftDataParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsRuleTargetsRedshiftDataParametersToHclTerraform(struct?: DataAwsccEventsRuleTargetsRedshiftDataParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsRuleTargetsRedshiftDataParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsRuleTargetsRedshiftDataParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // db_user - computed: true, optional: false, required: false
  public get dbUser() {
    return this.getStringAttribute('db_user');
  }

  // secret_manager_arn - computed: true, optional: false, required: false
  public get secretManagerArn() {
    return this.getStringAttribute('secret_manager_arn');
  }

  // sql - computed: true, optional: false, required: false
  public get sql() {
    return this.getStringAttribute('sql');
  }

  // sqls - computed: true, optional: false, required: false
  public get sqls() {
    return this.getListAttribute('sqls');
  }

  // statement_name - computed: true, optional: false, required: false
  public get statementName() {
    return this.getStringAttribute('statement_name');
  }

  // with_event - computed: true, optional: false, required: false
  public get withEvent() {
    return this.getBooleanAttribute('with_event');
  }
}
export interface DataAwsccEventsRuleTargetsRetryPolicy {
}

export function dataAwsccEventsRuleTargetsRetryPolicyToTerraform(struct?: DataAwsccEventsRuleTargetsRetryPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsRuleTargetsRetryPolicyToHclTerraform(struct?: DataAwsccEventsRuleTargetsRetryPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsRuleTargetsRetryPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsRuleTargetsRetryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsRuleTargetsRetryPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // maximum_event_age_in_seconds - computed: true, optional: false, required: false
  public get maximumEventAgeInSeconds() {
    return this.getNumberAttribute('maximum_event_age_in_seconds');
  }

  // maximum_retry_attempts - computed: true, optional: false, required: false
  public get maximumRetryAttempts() {
    return this.getNumberAttribute('maximum_retry_attempts');
  }
}
export interface DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets {
}

export function dataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsToTerraform(struct?: DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsToHclTerraform(struct?: DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference {
    return new DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEventsRuleTargetsRunCommandParameters {
}

export function dataAwsccEventsRuleTargetsRunCommandParametersToTerraform(struct?: DataAwsccEventsRuleTargetsRunCommandParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsRuleTargetsRunCommandParametersToHclTerraform(struct?: DataAwsccEventsRuleTargetsRunCommandParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsRuleTargetsRunCommandParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsRuleTargetsRunCommandParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsRuleTargetsRunCommandParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // run_command_targets - computed: true, optional: false, required: false
  private _runCommandTargets = new DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList(this, "run_command_targets", false);
  public get runCommandTargets() {
    return this._runCommandTargets;
  }
}
export interface DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct {
}

export function dataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructToTerraform(struct?: DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructToHclTerraform(struct?: DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct | undefined) {
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

export class DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference {
    return new DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEventsRuleTargetsSageMakerPipelineParameters {
}

export function dataAwsccEventsRuleTargetsSageMakerPipelineParametersToTerraform(struct?: DataAwsccEventsRuleTargetsSageMakerPipelineParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsRuleTargetsSageMakerPipelineParametersToHclTerraform(struct?: DataAwsccEventsRuleTargetsSageMakerPipelineParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsRuleTargetsSageMakerPipelineParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsRuleTargetsSageMakerPipelineParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pipeline_parameter_list - computed: true, optional: false, required: false
  private _pipelineParameterList = new DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList(this, "pipeline_parameter_list", false);
  public get pipelineParameterList() {
    return this._pipelineParameterList;
  }
}
export interface DataAwsccEventsRuleTargetsSqsParameters {
}

export function dataAwsccEventsRuleTargetsSqsParametersToTerraform(struct?: DataAwsccEventsRuleTargetsSqsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsRuleTargetsSqsParametersToHclTerraform(struct?: DataAwsccEventsRuleTargetsSqsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsRuleTargetsSqsParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsRuleTargetsSqsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsRuleTargetsSqsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message_group_id - computed: true, optional: false, required: false
  public get messageGroupId() {
    return this.getStringAttribute('message_group_id');
  }
}
export interface DataAwsccEventsRuleTargets {
}

export function dataAwsccEventsRuleTargetsToTerraform(struct?: DataAwsccEventsRuleTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsRuleTargetsToHclTerraform(struct?: DataAwsccEventsRuleTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsRuleTargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEventsRuleTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsRuleTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_sync_parameters - computed: true, optional: false, required: false
  private _appSyncParameters = new DataAwsccEventsRuleTargetsAppSyncParametersOutputReference(this, "app_sync_parameters");
  public get appSyncParameters() {
    return this._appSyncParameters;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // batch_parameters - computed: true, optional: false, required: false
  private _batchParameters = new DataAwsccEventsRuleTargetsBatchParametersOutputReference(this, "batch_parameters");
  public get batchParameters() {
    return this._batchParameters;
  }

  // dead_letter_config - computed: true, optional: false, required: false
  private _deadLetterConfig = new DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference(this, "dead_letter_config");
  public get deadLetterConfig() {
    return this._deadLetterConfig;
  }

  // ecs_parameters - computed: true, optional: false, required: false
  private _ecsParameters = new DataAwsccEventsRuleTargetsEcsParametersOutputReference(this, "ecs_parameters");
  public get ecsParameters() {
    return this._ecsParameters;
  }

  // http_parameters - computed: true, optional: false, required: false
  private _httpParameters = new DataAwsccEventsRuleTargetsHttpParametersOutputReference(this, "http_parameters");
  public get httpParameters() {
    return this._httpParameters;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input - computed: true, optional: false, required: false
  public get input() {
    return this.getStringAttribute('input');
  }

  // input_path - computed: true, optional: false, required: false
  public get inputPath() {
    return this.getStringAttribute('input_path');
  }

  // input_transformer - computed: true, optional: false, required: false
  private _inputTransformer = new DataAwsccEventsRuleTargetsInputTransformerOutputReference(this, "input_transformer");
  public get inputTransformer() {
    return this._inputTransformer;
  }

  // kinesis_parameters - computed: true, optional: false, required: false
  private _kinesisParameters = new DataAwsccEventsRuleTargetsKinesisParametersOutputReference(this, "kinesis_parameters");
  public get kinesisParameters() {
    return this._kinesisParameters;
  }

  // redshift_data_parameters - computed: true, optional: false, required: false
  private _redshiftDataParameters = new DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference(this, "redshift_data_parameters");
  public get redshiftDataParameters() {
    return this._redshiftDataParameters;
  }

  // retry_policy - computed: true, optional: false, required: false
  private _retryPolicy = new DataAwsccEventsRuleTargetsRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // run_command_parameters - computed: true, optional: false, required: false
  private _runCommandParameters = new DataAwsccEventsRuleTargetsRunCommandParametersOutputReference(this, "run_command_parameters");
  public get runCommandParameters() {
    return this._runCommandParameters;
  }

  // sage_maker_pipeline_parameters - computed: true, optional: false, required: false
  private _sageMakerPipelineParameters = new DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference(this, "sage_maker_pipeline_parameters");
  public get sageMakerPipelineParameters() {
    return this._sageMakerPipelineParameters;
  }

  // sqs_parameters - computed: true, optional: false, required: false
  private _sqsParameters = new DataAwsccEventsRuleTargetsSqsParametersOutputReference(this, "sqs_parameters");
  public get sqsParameters() {
    return this._sqsParameters;
  }
}

export class DataAwsccEventsRuleTargetsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEventsRuleTargetsOutputReference {
    return new DataAwsccEventsRuleTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/events_rule awscc_events_rule}
*/
export class DataAwsccEventsRule extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_events_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEventsRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEventsRule to import
  * @param importFromId The id of the existing DataAwsccEventsRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/events_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEventsRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_events_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/events_rule awscc_events_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEventsRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEventsRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_events_rule',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // event_bus_name - computed: true, optional: false, required: false
  public get eventBusName() {
    return this.getStringAttribute('event_bus_name');
  }

  // event_pattern - computed: true, optional: false, required: false
  public get eventPattern() {
    return this.getStringAttribute('event_pattern');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // schedule_expression - computed: true, optional: false, required: false
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEventsRuleTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataAwsccEventsRuleTargetsList(this, "targets", true);
  public get targets() {
    return this._targets;
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
