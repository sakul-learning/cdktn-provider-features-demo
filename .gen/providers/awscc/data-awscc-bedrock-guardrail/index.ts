// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/bedrock_guardrail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccBedrockGuardrailConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/bedrock_guardrail#id DataAwsccBedrockGuardrail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfig {
}

export function dataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigToTerraform(struct?: DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigToHclTerraform(struct?: DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // confidence_threshold - computed: true, optional: false, required: false
  public get confidenceThreshold() {
    return this.getNumberAttribute('confidence_threshold');
  }

  // policies - computed: true, optional: false, required: false
  public get policies() {
    return this.getListAttribute('policies');
  }
}
export interface DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfig {
}

export function dataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigToTerraform(struct?: DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigToHclTerraform(struct?: DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tier_name - computed: true, optional: false, required: false
  public get tierName() {
    return this.getStringAttribute('tier_name');
  }
}
export interface DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfig {
}

export function dataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigToTerraform(struct?: DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigToHclTerraform(struct?: DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // input_action - computed: true, optional: false, required: false
  public get inputAction() {
    return this.getStringAttribute('input_action');
  }

  // input_enabled - computed: true, optional: false, required: false
  public get inputEnabled() {
    return this.getBooleanAttribute('input_enabled');
  }

  // input_modalities - computed: true, optional: false, required: false
  public get inputModalities() {
    return this.getListAttribute('input_modalities');
  }

  // input_strength - computed: true, optional: false, required: false
  public get inputStrength() {
    return this.getStringAttribute('input_strength');
  }

  // output_action - computed: true, optional: false, required: false
  public get outputAction() {
    return this.getStringAttribute('output_action');
  }

  // output_enabled - computed: true, optional: false, required: false
  public get outputEnabled() {
    return this.getBooleanAttribute('output_enabled');
  }

  // output_modalities - computed: true, optional: false, required: false
  public get outputModalities() {
    return this.getListAttribute('output_modalities');
  }

  // output_strength - computed: true, optional: false, required: false
  public get outputStrength() {
    return this.getStringAttribute('output_strength');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference {
    return new DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockGuardrailContentPolicyConfig {
}

export function dataAwsccBedrockGuardrailContentPolicyConfigToTerraform(struct?: DataAwsccBedrockGuardrailContentPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockGuardrailContentPolicyConfigToHclTerraform(struct?: DataAwsccBedrockGuardrailContentPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockGuardrailContentPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockGuardrailContentPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockGuardrailContentPolicyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_filters_tier_config - computed: true, optional: false, required: false
  private _contentFiltersTierConfig = new DataAwsccBedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference(this, "content_filters_tier_config");
  public get contentFiltersTierConfig() {
    return this._contentFiltersTierConfig;
  }

  // filters_config - computed: true, optional: false, required: false
  private _filtersConfig = new DataAwsccBedrockGuardrailContentPolicyConfigFiltersConfigList(this, "filters_config", false);
  public get filtersConfig() {
    return this._filtersConfig;
  }
}
export interface DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfig {
}

export function dataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigToTerraform(struct?: DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigToHclTerraform(struct?: DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfig | undefined) {
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

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference {
    return new DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockGuardrailContextualGroundingPolicyConfig {
}

export function dataAwsccBedrockGuardrailContextualGroundingPolicyConfigToTerraform(struct?: DataAwsccBedrockGuardrailContextualGroundingPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockGuardrailContextualGroundingPolicyConfigToHclTerraform(struct?: DataAwsccBedrockGuardrailContextualGroundingPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockGuardrailContextualGroundingPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockGuardrailContextualGroundingPolicyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters_config - computed: true, optional: false, required: false
  private _filtersConfig = new DataAwsccBedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList(this, "filters_config", false);
  public get filtersConfig() {
    return this._filtersConfig;
  }
}
export interface DataAwsccBedrockGuardrailCrossRegionConfig {
}

export function dataAwsccBedrockGuardrailCrossRegionConfigToTerraform(struct?: DataAwsccBedrockGuardrailCrossRegionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockGuardrailCrossRegionConfigToHclTerraform(struct?: DataAwsccBedrockGuardrailCrossRegionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockGuardrailCrossRegionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockGuardrailCrossRegionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockGuardrailCrossRegionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // guardrail_profile_arn - computed: true, optional: false, required: false
  public get guardrailProfileArn() {
    return this.getStringAttribute('guardrail_profile_arn');
  }
}
export interface DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig {
}

export function dataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigToTerraform(struct?: DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigToHclTerraform(struct?: DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig | undefined) {
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

  // input_action - computed: true, optional: false, required: false
  public get inputAction() {
    return this.getStringAttribute('input_action');
  }

  // input_enabled - computed: true, optional: false, required: false
  public get inputEnabled() {
    return this.getBooleanAttribute('input_enabled');
  }

  // output_action - computed: true, optional: false, required: false
  public get outputAction() {
    return this.getStringAttribute('output_action');
  }

  // output_enabled - computed: true, optional: false, required: false
  public get outputEnabled() {
    return this.getBooleanAttribute('output_enabled');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference {
    return new DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig {
}

export function dataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigToTerraform(struct?: DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigToHclTerraform(struct?: DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig | undefined) {
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // input_action - computed: true, optional: false, required: false
  public get inputAction() {
    return this.getStringAttribute('input_action');
  }

  // input_enabled - computed: true, optional: false, required: false
  public get inputEnabled() {
    return this.getBooleanAttribute('input_enabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // output_action - computed: true, optional: false, required: false
  public get outputAction() {
    return this.getStringAttribute('output_action');
  }

  // output_enabled - computed: true, optional: false, required: false
  public get outputEnabled() {
    return this.getBooleanAttribute('output_enabled');
  }

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
}

export class DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference {
    return new DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockGuardrailSensitiveInformationPolicyConfig {
}

export function dataAwsccBedrockGuardrailSensitiveInformationPolicyConfigToTerraform(struct?: DataAwsccBedrockGuardrailSensitiveInformationPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockGuardrailSensitiveInformationPolicyConfigToHclTerraform(struct?: DataAwsccBedrockGuardrailSensitiveInformationPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockGuardrailSensitiveInformationPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockGuardrailSensitiveInformationPolicyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pii_entities_config - computed: true, optional: false, required: false
  private _piiEntitiesConfig = new DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList(this, "pii_entities_config", false);
  public get piiEntitiesConfig() {
    return this._piiEntitiesConfig;
  }

  // regexes_config - computed: true, optional: false, required: false
  private _regexesConfig = new DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList(this, "regexes_config", false);
  public get regexesConfig() {
    return this._regexesConfig;
  }
}
export interface DataAwsccBedrockGuardrailTags {
}

export function dataAwsccBedrockGuardrailTagsToTerraform(struct?: DataAwsccBedrockGuardrailTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockGuardrailTagsToHclTerraform(struct?: DataAwsccBedrockGuardrailTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockGuardrailTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockGuardrailTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockGuardrailTags | undefined) {
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

export class DataAwsccBedrockGuardrailTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockGuardrailTagsOutputReference {
    return new DataAwsccBedrockGuardrailTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfig {
}

export function dataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigToTerraform(struct?: DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigToHclTerraform(struct?: DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getStringAttribute('definition');
  }

  // examples - computed: true, optional: false, required: false
  public get examples() {
    return this.getListAttribute('examples');
  }

  // input_action - computed: true, optional: false, required: false
  public get inputAction() {
    return this.getStringAttribute('input_action');
  }

  // input_enabled - computed: true, optional: false, required: false
  public get inputEnabled() {
    return this.getBooleanAttribute('input_enabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // output_action - computed: true, optional: false, required: false
  public get outputAction() {
    return this.getStringAttribute('output_action');
  }

  // output_enabled - computed: true, optional: false, required: false
  public get outputEnabled() {
    return this.getBooleanAttribute('output_enabled');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference {
    return new DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfig {
}

export function dataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigToTerraform(struct?: DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigToHclTerraform(struct?: DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tier_name - computed: true, optional: false, required: false
  public get tierName() {
    return this.getStringAttribute('tier_name');
  }
}
export interface DataAwsccBedrockGuardrailTopicPolicyConfig {
}

export function dataAwsccBedrockGuardrailTopicPolicyConfigToTerraform(struct?: DataAwsccBedrockGuardrailTopicPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockGuardrailTopicPolicyConfigToHclTerraform(struct?: DataAwsccBedrockGuardrailTopicPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockGuardrailTopicPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockGuardrailTopicPolicyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // topics_config - computed: true, optional: false, required: false
  private _topicsConfig = new DataAwsccBedrockGuardrailTopicPolicyConfigTopicsConfigList(this, "topics_config", false);
  public get topicsConfig() {
    return this._topicsConfig;
  }

  // topics_tier_config - computed: true, optional: false, required: false
  private _topicsTierConfig = new DataAwsccBedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference(this, "topics_tier_config");
  public get topicsTierConfig() {
    return this._topicsTierConfig;
  }
}
export interface DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfig {
}

export function dataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigToTerraform(struct?: DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigToHclTerraform(struct?: DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // input_action - computed: true, optional: false, required: false
  public get inputAction() {
    return this.getStringAttribute('input_action');
  }

  // input_enabled - computed: true, optional: false, required: false
  public get inputEnabled() {
    return this.getBooleanAttribute('input_enabled');
  }

  // output_action - computed: true, optional: false, required: false
  public get outputAction() {
    return this.getStringAttribute('output_action');
  }

  // output_enabled - computed: true, optional: false, required: false
  public get outputEnabled() {
    return this.getBooleanAttribute('output_enabled');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference {
    return new DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockGuardrailWordPolicyConfigWordsConfig {
}

export function dataAwsccBedrockGuardrailWordPolicyConfigWordsConfigToTerraform(struct?: DataAwsccBedrockGuardrailWordPolicyConfigWordsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockGuardrailWordPolicyConfigWordsConfigToHclTerraform(struct?: DataAwsccBedrockGuardrailWordPolicyConfigWordsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockGuardrailWordPolicyConfigWordsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockGuardrailWordPolicyConfigWordsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // input_action - computed: true, optional: false, required: false
  public get inputAction() {
    return this.getStringAttribute('input_action');
  }

  // input_enabled - computed: true, optional: false, required: false
  public get inputEnabled() {
    return this.getBooleanAttribute('input_enabled');
  }

  // output_action - computed: true, optional: false, required: false
  public get outputAction() {
    return this.getStringAttribute('output_action');
  }

  // output_enabled - computed: true, optional: false, required: false
  public get outputEnabled() {
    return this.getBooleanAttribute('output_enabled');
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}

export class DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference {
    return new DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockGuardrailWordPolicyConfig {
}

export function dataAwsccBedrockGuardrailWordPolicyConfigToTerraform(struct?: DataAwsccBedrockGuardrailWordPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockGuardrailWordPolicyConfigToHclTerraform(struct?: DataAwsccBedrockGuardrailWordPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockGuardrailWordPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockGuardrailWordPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockGuardrailWordPolicyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // managed_word_lists_config - computed: true, optional: false, required: false
  private _managedWordListsConfig = new DataAwsccBedrockGuardrailWordPolicyConfigManagedWordListsConfigList(this, "managed_word_lists_config", false);
  public get managedWordListsConfig() {
    return this._managedWordListsConfig;
  }

  // words_config - computed: true, optional: false, required: false
  private _wordsConfig = new DataAwsccBedrockGuardrailWordPolicyConfigWordsConfigList(this, "words_config", false);
  public get wordsConfig() {
    return this._wordsConfig;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/bedrock_guardrail awscc_bedrock_guardrail}
*/
export class DataAwsccBedrockGuardrail extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bedrock_guardrail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccBedrockGuardrail resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccBedrockGuardrail to import
  * @param importFromId The id of the existing DataAwsccBedrockGuardrail that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/bedrock_guardrail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccBedrockGuardrail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrock_guardrail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/bedrock_guardrail awscc_bedrock_guardrail} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccBedrockGuardrailConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccBedrockGuardrailConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_bedrock_guardrail',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automated_reasoning_policy_config - computed: true, optional: false, required: false
  private _automatedReasoningPolicyConfig = new DataAwsccBedrockGuardrailAutomatedReasoningPolicyConfigOutputReference(this, "automated_reasoning_policy_config");
  public get automatedReasoningPolicyConfig() {
    return this._automatedReasoningPolicyConfig;
  }

  // blocked_input_messaging - computed: true, optional: false, required: false
  public get blockedInputMessaging() {
    return this.getStringAttribute('blocked_input_messaging');
  }

  // blocked_outputs_messaging - computed: true, optional: false, required: false
  public get blockedOutputsMessaging() {
    return this.getStringAttribute('blocked_outputs_messaging');
  }

  // content_policy_config - computed: true, optional: false, required: false
  private _contentPolicyConfig = new DataAwsccBedrockGuardrailContentPolicyConfigOutputReference(this, "content_policy_config");
  public get contentPolicyConfig() {
    return this._contentPolicyConfig;
  }

  // contextual_grounding_policy_config - computed: true, optional: false, required: false
  private _contextualGroundingPolicyConfig = new DataAwsccBedrockGuardrailContextualGroundingPolicyConfigOutputReference(this, "contextual_grounding_policy_config");
  public get contextualGroundingPolicyConfig() {
    return this._contextualGroundingPolicyConfig;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // cross_region_config - computed: true, optional: false, required: false
  private _crossRegionConfig = new DataAwsccBedrockGuardrailCrossRegionConfigOutputReference(this, "cross_region_config");
  public get crossRegionConfig() {
    return this._crossRegionConfig;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // failure_recommendations - computed: true, optional: false, required: false
  public get failureRecommendations() {
    return this.getListAttribute('failure_recommendations');
  }

  // guardrail_arn - computed: true, optional: false, required: false
  public get guardrailArn() {
    return this.getStringAttribute('guardrail_arn');
  }

  // guardrail_id - computed: true, optional: false, required: false
  public get guardrailId() {
    return this.getStringAttribute('guardrail_id');
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

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sensitive_information_policy_config - computed: true, optional: false, required: false
  private _sensitiveInformationPolicyConfig = new DataAwsccBedrockGuardrailSensitiveInformationPolicyConfigOutputReference(this, "sensitive_information_policy_config");
  public get sensitiveInformationPolicyConfig() {
    return this._sensitiveInformationPolicyConfig;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reasons - computed: true, optional: false, required: false
  public get statusReasons() {
    return this.getListAttribute('status_reasons');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccBedrockGuardrailTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // topic_policy_config - computed: true, optional: false, required: false
  private _topicPolicyConfig = new DataAwsccBedrockGuardrailTopicPolicyConfigOutputReference(this, "topic_policy_config");
  public get topicPolicyConfig() {
    return this._topicPolicyConfig;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // word_policy_config - computed: true, optional: false, required: false
  private _wordPolicyConfig = new DataAwsccBedrockGuardrailWordPolicyConfigOutputReference(this, "word_policy_config");
  public get wordPolicyConfig() {
    return this._wordPolicyConfig;
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
