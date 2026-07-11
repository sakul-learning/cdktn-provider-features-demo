// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/wisdom_ai_guardrail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccWisdomAiGuardrailConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/wisdom_ai_guardrail#id DataAwsccWisdomAiGuardrail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfig {
}

export function dataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigToTerraform(struct?: DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigToHclTerraform(struct?: DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // input_strength - computed: true, optional: false, required: false
  public get inputStrength() {
    return this.getStringAttribute('input_strength');
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

export class DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference {
    return new DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomAiGuardrailContentPolicyConfig {
}

export function dataAwsccWisdomAiGuardrailContentPolicyConfigToTerraform(struct?: DataAwsccWisdomAiGuardrailContentPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiGuardrailContentPolicyConfigToHclTerraform(struct?: DataAwsccWisdomAiGuardrailContentPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiGuardrailContentPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiGuardrailContentPolicyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters_config - computed: true, optional: false, required: false
  private _filtersConfig = new DataAwsccWisdomAiGuardrailContentPolicyConfigFiltersConfigList(this, "filters_config", false);
  public get filtersConfig() {
    return this._filtersConfig;
  }
}
export interface DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig {
}

export function dataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigToTerraform(struct?: DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigToHclTerraform(struct?: DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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

export class DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference {
    return new DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfig {
}

export function dataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigToTerraform(struct?: DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigToHclTerraform(struct?: DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters_config - computed: true, optional: false, required: false
  private _filtersConfig = new DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList(this, "filters_config", false);
  public get filtersConfig() {
    return this._filtersConfig;
  }
}
export interface DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig {
}

export function dataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigToTerraform(struct?: DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigToHclTerraform(struct?: DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig | undefined) {
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference {
    return new DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig {
}

export function dataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigToTerraform(struct?: DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigToHclTerraform(struct?: DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
}

export class DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference {
    return new DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfig {
}

export function dataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigToTerraform(struct?: DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigToHclTerraform(struct?: DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pii_entities_config - computed: true, optional: false, required: false
  private _piiEntitiesConfig = new DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList(this, "pii_entities_config", false);
  public get piiEntitiesConfig() {
    return this._piiEntitiesConfig;
  }

  // regexes_config - computed: true, optional: false, required: false
  private _regexesConfig = new DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList(this, "regexes_config", false);
  public get regexesConfig() {
    return this._regexesConfig;
  }
}
export interface DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfig {
}

export function dataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigToTerraform(struct?: DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigToHclTerraform(struct?: DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfig | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference {
    return new DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomAiGuardrailTopicPolicyConfig {
}

export function dataAwsccWisdomAiGuardrailTopicPolicyConfigToTerraform(struct?: DataAwsccWisdomAiGuardrailTopicPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiGuardrailTopicPolicyConfigToHclTerraform(struct?: DataAwsccWisdomAiGuardrailTopicPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiGuardrailTopicPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiGuardrailTopicPolicyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // topics_config - computed: true, optional: false, required: false
  private _topicsConfig = new DataAwsccWisdomAiGuardrailTopicPolicyConfigTopicsConfigList(this, "topics_config", false);
  public get topicsConfig() {
    return this._topicsConfig;
  }
}
export interface DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfig {
}

export function dataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigToTerraform(struct?: DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigToHclTerraform(struct?: DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference {
    return new DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfig {
}

export function dataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigToTerraform(struct?: DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigToHclTerraform(struct?: DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}

export class DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference {
    return new DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomAiGuardrailWordPolicyConfig {
}

export function dataAwsccWisdomAiGuardrailWordPolicyConfigToTerraform(struct?: DataAwsccWisdomAiGuardrailWordPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomAiGuardrailWordPolicyConfigToHclTerraform(struct?: DataAwsccWisdomAiGuardrailWordPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomAiGuardrailWordPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomAiGuardrailWordPolicyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // managed_word_lists_config - computed: true, optional: false, required: false
  private _managedWordListsConfig = new DataAwsccWisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList(this, "managed_word_lists_config", false);
  public get managedWordListsConfig() {
    return this._managedWordListsConfig;
  }

  // words_config - computed: true, optional: false, required: false
  private _wordsConfig = new DataAwsccWisdomAiGuardrailWordPolicyConfigWordsConfigList(this, "words_config", false);
  public get wordsConfig() {
    return this._wordsConfig;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/wisdom_ai_guardrail awscc_wisdom_ai_guardrail}
*/
export class DataAwsccWisdomAiGuardrail extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_wisdom_ai_guardrail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccWisdomAiGuardrail resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccWisdomAiGuardrail to import
  * @param importFromId The id of the existing DataAwsccWisdomAiGuardrail that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/wisdom_ai_guardrail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccWisdomAiGuardrail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wisdom_ai_guardrail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/wisdom_ai_guardrail awscc_wisdom_ai_guardrail} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccWisdomAiGuardrailConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccWisdomAiGuardrailConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_wisdom_ai_guardrail',
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

  // ai_guardrail_arn - computed: true, optional: false, required: false
  public get aiGuardrailArn() {
    return this.getStringAttribute('ai_guardrail_arn');
  }

  // ai_guardrail_id - computed: true, optional: false, required: false
  public get aiGuardrailId() {
    return this.getStringAttribute('ai_guardrail_id');
  }

  // assistant_arn - computed: true, optional: false, required: false
  public get assistantArn() {
    return this.getStringAttribute('assistant_arn');
  }

  // assistant_id - computed: true, optional: false, required: false
  public get assistantId() {
    return this.getStringAttribute('assistant_id');
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
  private _contentPolicyConfig = new DataAwsccWisdomAiGuardrailContentPolicyConfigOutputReference(this, "content_policy_config");
  public get contentPolicyConfig() {
    return this._contentPolicyConfig;
  }

  // contextual_grounding_policy_config - computed: true, optional: false, required: false
  private _contextualGroundingPolicyConfig = new DataAwsccWisdomAiGuardrailContextualGroundingPolicyConfigOutputReference(this, "contextual_grounding_policy_config");
  public get contextualGroundingPolicyConfig() {
    return this._contextualGroundingPolicyConfig;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // modified_time_seconds - computed: true, optional: false, required: false
  public get modifiedTimeSeconds() {
    return this.getNumberAttribute('modified_time_seconds');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sensitive_information_policy_config - computed: true, optional: false, required: false
  private _sensitiveInformationPolicyConfig = new DataAwsccWisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference(this, "sensitive_information_policy_config");
  public get sensitiveInformationPolicyConfig() {
    return this._sensitiveInformationPolicyConfig;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // topic_policy_config - computed: true, optional: false, required: false
  private _topicPolicyConfig = new DataAwsccWisdomAiGuardrailTopicPolicyConfigOutputReference(this, "topic_policy_config");
  public get topicPolicyConfig() {
    return this._topicPolicyConfig;
  }

  // word_policy_config - computed: true, optional: false, required: false
  private _wordPolicyConfig = new DataAwsccWisdomAiGuardrailWordPolicyConfigOutputReference(this, "word_policy_config");
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
