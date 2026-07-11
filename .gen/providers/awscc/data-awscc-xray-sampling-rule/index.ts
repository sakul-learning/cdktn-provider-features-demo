// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/xray_sampling_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccXraySamplingRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/xray_sampling_rule#id DataAwsccXraySamplingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoost {
}

export function dataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostToTerraform(struct?: DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoost): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostToHclTerraform(struct?: DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoost): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cooldown_window_minutes - computed: true, optional: false, required: false
  public get cooldownWindowMinutes() {
    return this.getNumberAttribute('cooldown_window_minutes');
  }

  // max_rate - computed: true, optional: false, required: false
  public get maxRate() {
    return this.getNumberAttribute('max_rate');
  }
}
export interface DataAwsccXraySamplingRuleSamplingRule {
}

export function dataAwsccXraySamplingRuleSamplingRuleToTerraform(struct?: DataAwsccXraySamplingRuleSamplingRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccXraySamplingRuleSamplingRuleToHclTerraform(struct?: DataAwsccXraySamplingRuleSamplingRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccXraySamplingRuleSamplingRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccXraySamplingRuleSamplingRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccXraySamplingRuleSamplingRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new cdktn.StringMap(this, "attributes");
  public get attributes() {
    return this._attributes;
  }

  // fixed_rate - computed: true, optional: false, required: false
  public get fixedRate() {
    return this.getNumberAttribute('fixed_rate');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_method - computed: true, optional: false, required: false
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // reservoir_size - computed: true, optional: false, required: false
  public get reservoirSize() {
    return this.getNumberAttribute('reservoir_size');
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // rule_arn - computed: true, optional: false, required: false
  public get ruleArn() {
    return this.getStringAttribute('rule_arn');
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }

  // sampling_rate_boost - computed: true, optional: false, required: false
  private _samplingRateBoost = new DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference(this, "sampling_rate_boost");
  public get samplingRateBoost() {
    return this._samplingRateBoost;
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // url_path - computed: true, optional: false, required: false
  public get urlPath() {
    return this.getStringAttribute('url_path');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}
export interface DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost {
}

export function dataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostToTerraform(struct?: DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostToHclTerraform(struct?: DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cooldown_window_minutes - computed: true, optional: false, required: false
  public get cooldownWindowMinutes() {
    return this.getNumberAttribute('cooldown_window_minutes');
  }

  // max_rate - computed: true, optional: false, required: false
  public get maxRate() {
    return this.getNumberAttribute('max_rate');
  }
}
export interface DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRule {
}

export function dataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleToTerraform(struct?: DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleToHclTerraform(struct?: DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new cdktn.StringMap(this, "attributes");
  public get attributes() {
    return this._attributes;
  }

  // fixed_rate - computed: true, optional: false, required: false
  public get fixedRate() {
    return this.getNumberAttribute('fixed_rate');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_method - computed: true, optional: false, required: false
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // reservoir_size - computed: true, optional: false, required: false
  public get reservoirSize() {
    return this.getNumberAttribute('reservoir_size');
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // rule_arn - computed: true, optional: false, required: false
  public get ruleArn() {
    return this.getStringAttribute('rule_arn');
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }

  // sampling_rate_boost - computed: true, optional: false, required: false
  private _samplingRateBoost = new DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference(this, "sampling_rate_boost");
  public get samplingRateBoost() {
    return this._samplingRateBoost;
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // url_path - computed: true, optional: false, required: false
  public get urlPath() {
    return this.getStringAttribute('url_path');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}
export interface DataAwsccXraySamplingRuleSamplingRuleRecord {
}

export function dataAwsccXraySamplingRuleSamplingRuleRecordToTerraform(struct?: DataAwsccXraySamplingRuleSamplingRuleRecord): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccXraySamplingRuleSamplingRuleRecordToHclTerraform(struct?: DataAwsccXraySamplingRuleSamplingRuleRecord): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccXraySamplingRuleSamplingRuleRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccXraySamplingRuleSamplingRuleRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // sampling_rule - computed: true, optional: false, required: false
  private _samplingRule = new DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference(this, "sampling_rule");
  public get samplingRule() {
    return this._samplingRule;
  }
}
export interface DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoost {
}

export function dataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostToTerraform(struct?: DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoost): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostToHclTerraform(struct?: DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoost): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cooldown_window_minutes - computed: true, optional: false, required: false
  public get cooldownWindowMinutes() {
    return this.getNumberAttribute('cooldown_window_minutes');
  }

  // max_rate - computed: true, optional: false, required: false
  public get maxRate() {
    return this.getNumberAttribute('max_rate');
  }
}
export interface DataAwsccXraySamplingRuleSamplingRuleUpdate {
}

export function dataAwsccXraySamplingRuleSamplingRuleUpdateToTerraform(struct?: DataAwsccXraySamplingRuleSamplingRuleUpdate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccXraySamplingRuleSamplingRuleUpdateToHclTerraform(struct?: DataAwsccXraySamplingRuleSamplingRuleUpdate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccXraySamplingRuleSamplingRuleUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccXraySamplingRuleSamplingRuleUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new cdktn.StringMap(this, "attributes");
  public get attributes() {
    return this._attributes;
  }

  // fixed_rate - computed: true, optional: false, required: false
  public get fixedRate() {
    return this.getNumberAttribute('fixed_rate');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_method - computed: true, optional: false, required: false
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // reservoir_size - computed: true, optional: false, required: false
  public get reservoirSize() {
    return this.getNumberAttribute('reservoir_size');
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // rule_arn - computed: true, optional: false, required: false
  public get ruleArn() {
    return this.getStringAttribute('rule_arn');
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }

  // sampling_rate_boost - computed: true, optional: false, required: false
  private _samplingRateBoost = new DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference(this, "sampling_rate_boost");
  public get samplingRateBoost() {
    return this._samplingRateBoost;
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // url_path - computed: true, optional: false, required: false
  public get urlPath() {
    return this.getStringAttribute('url_path');
  }
}
export interface DataAwsccXraySamplingRuleTags {
}

export function dataAwsccXraySamplingRuleTagsToTerraform(struct?: DataAwsccXraySamplingRuleTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccXraySamplingRuleTagsToHclTerraform(struct?: DataAwsccXraySamplingRuleTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccXraySamplingRuleTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccXraySamplingRuleTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccXraySamplingRuleTags | undefined) {
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

export class DataAwsccXraySamplingRuleTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccXraySamplingRuleTagsOutputReference {
    return new DataAwsccXraySamplingRuleTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/xray_sampling_rule awscc_xray_sampling_rule}
*/
export class DataAwsccXraySamplingRule extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_xray_sampling_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccXraySamplingRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccXraySamplingRule to import
  * @param importFromId The id of the existing DataAwsccXraySamplingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/xray_sampling_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccXraySamplingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_xray_sampling_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/xray_sampling_rule awscc_xray_sampling_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccXraySamplingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccXraySamplingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_xray_sampling_rule',
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

  // rule_arn - computed: true, optional: false, required: false
  public get ruleArn() {
    return this.getStringAttribute('rule_arn');
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }

  // sampling_rule - computed: true, optional: false, required: false
  private _samplingRule = new DataAwsccXraySamplingRuleSamplingRuleOutputReference(this, "sampling_rule");
  public get samplingRule() {
    return this._samplingRule;
  }

  // sampling_rule_record - computed: true, optional: false, required: false
  private _samplingRuleRecord = new DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference(this, "sampling_rule_record");
  public get samplingRuleRecord() {
    return this._samplingRuleRecord;
  }

  // sampling_rule_update - computed: true, optional: false, required: false
  private _samplingRuleUpdate = new DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference(this, "sampling_rule_update");
  public get samplingRuleUpdate() {
    return this._samplingRuleUpdate;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccXraySamplingRuleTagsList(this, "tags", false);
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
