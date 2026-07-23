// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface WisdomAiGuardrailConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#assistant_id WisdomAiGuardrail#assistant_id}
  */
  readonly assistantId: string;
  /**
  * Messaging for when violations are detected in text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#blocked_input_messaging WisdomAiGuardrail#blocked_input_messaging}
  */
  readonly blockedInputMessaging: string;
  /**
  * Messaging for when violations are detected in text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#blocked_outputs_messaging WisdomAiGuardrail#blocked_outputs_messaging}
  */
  readonly blockedOutputsMessaging: string;
  /**
  * Content policy config for a guardrail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#content_policy_config WisdomAiGuardrail#content_policy_config}
  */
  readonly contentPolicyConfig?: WisdomAiGuardrailContentPolicyConfig;
  /**
  * Contextual grounding policy config for a guardrail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#contextual_grounding_policy_config WisdomAiGuardrail#contextual_grounding_policy_config}
  */
  readonly contextualGroundingPolicyConfig?: WisdomAiGuardrailContextualGroundingPolicyConfig;
  /**
  * Description of the guardrail or its version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#description WisdomAiGuardrail#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#name WisdomAiGuardrail#name}
  */
  readonly name?: string;
  /**
  * Sensitive information policy config for a guardrail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#sensitive_information_policy_config WisdomAiGuardrail#sensitive_information_policy_config}
  */
  readonly sensitiveInformationPolicyConfig?: WisdomAiGuardrailSensitiveInformationPolicyConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#tags WisdomAiGuardrail#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Topic policy config for a guardrail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#topic_policy_config WisdomAiGuardrail#topic_policy_config}
  */
  readonly topicPolicyConfig?: WisdomAiGuardrailTopicPolicyConfig;
  /**
  * Word policy config for a guardrail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#word_policy_config WisdomAiGuardrail#word_policy_config}
  */
  readonly wordPolicyConfig?: WisdomAiGuardrailWordPolicyConfig;
}
export interface WisdomAiGuardrailContentPolicyConfigFiltersConfig {
  /**
  * Strength for filters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#input_strength WisdomAiGuardrail#input_strength}
  */
  readonly inputStrength?: string;
  /**
  * Strength for filters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#output_strength WisdomAiGuardrail#output_strength}
  */
  readonly outputStrength?: string;
  /**
  * Type of text to text filter in content policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#type WisdomAiGuardrail#type}
  */
  readonly type?: string;
}

export function wisdomAiGuardrailContentPolicyConfigFiltersConfigToTerraform(struct?: WisdomAiGuardrailContentPolicyConfigFiltersConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input_strength: cdktn.stringToTerraform(struct!.inputStrength),
    output_strength: cdktn.stringToTerraform(struct!.outputStrength),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function wisdomAiGuardrailContentPolicyConfigFiltersConfigToHclTerraform(struct?: WisdomAiGuardrailContentPolicyConfigFiltersConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input_strength: {
      value: cdktn.stringToHclTerraform(struct!.inputStrength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_strength: {
      value: cdktn.stringToHclTerraform(struct!.outputStrength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomAiGuardrailContentPolicyConfigFiltersConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputStrength !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputStrength = this._inputStrength;
    }
    if (this._outputStrength !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputStrength = this._outputStrength;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiGuardrailContentPolicyConfigFiltersConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputStrength = undefined;
      this._outputStrength = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputStrength = value.inputStrength;
      this._outputStrength = value.outputStrength;
      this._type = value.type;
    }
  }

  // input_strength - computed: true, optional: true, required: false
  private _inputStrength?: string; 
  public get inputStrength() {
    return this.getStringAttribute('input_strength');
  }
  public set inputStrength(value: string) {
    this._inputStrength = value;
  }
  public resetInputStrength() {
    this._inputStrength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputStrengthInput() {
    return this._inputStrength;
  }

  // output_strength - computed: true, optional: true, required: false
  private _outputStrength?: string; 
  public get outputStrength() {
    return this.getStringAttribute('output_strength');
  }
  public set outputStrength(value: string) {
    this._outputStrength = value;
  }
  public resetOutputStrength() {
    this._outputStrength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputStrengthInput() {
    return this._outputStrength;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class WisdomAiGuardrailContentPolicyConfigFiltersConfigList extends cdktn.ComplexList {
  public internalValue? : WisdomAiGuardrailContentPolicyConfigFiltersConfig[] | cdktn.IResolvable

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
  public get(index: number): WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference {
    return new WisdomAiGuardrailContentPolicyConfigFiltersConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomAiGuardrailContentPolicyConfig {
  /**
  * List of content filter configs in content policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#filters_config WisdomAiGuardrail#filters_config}
  */
  readonly filtersConfig?: WisdomAiGuardrailContentPolicyConfigFiltersConfig[] | cdktn.IResolvable;
}

export function wisdomAiGuardrailContentPolicyConfigToTerraform(struct?: WisdomAiGuardrailContentPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filters_config: cdktn.listMapper(wisdomAiGuardrailContentPolicyConfigFiltersConfigToTerraform, false)(struct!.filtersConfig),
  }
}


export function wisdomAiGuardrailContentPolicyConfigToHclTerraform(struct?: WisdomAiGuardrailContentPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filters_config: {
      value: cdktn.listMapperHcl(wisdomAiGuardrailContentPolicyConfigFiltersConfigToHclTerraform, false)(struct!.filtersConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomAiGuardrailContentPolicyConfigFiltersConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiGuardrailContentPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiGuardrailContentPolicyConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filtersConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersConfig = this._filtersConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiGuardrailContentPolicyConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filtersConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filtersConfig.internalValue = value.filtersConfig;
    }
  }

  // filters_config - computed: true, optional: true, required: false
  private _filtersConfig = new WisdomAiGuardrailContentPolicyConfigFiltersConfigList(this, "filters_config", false);
  public get filtersConfig() {
    return this._filtersConfig;
  }
  public putFiltersConfig(value: WisdomAiGuardrailContentPolicyConfigFiltersConfig[] | cdktn.IResolvable) {
    this._filtersConfig.internalValue = value;
  }
  public resetFiltersConfig() {
    this._filtersConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersConfigInput() {
    return this._filtersConfig.internalValue;
  }
}
export interface WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig {
  /**
  * The threshold for this filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#threshold WisdomAiGuardrail#threshold}
  */
  readonly threshold?: number;
  /**
  * Type of contextual grounding filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#type WisdomAiGuardrail#type}
  */
  readonly type?: string;
}

export function wisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigToTerraform(struct?: WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    threshold: cdktn.numberToTerraform(struct!.threshold),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function wisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigToHclTerraform(struct?: WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    threshold: {
      value: cdktn.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._threshold = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._threshold = value.threshold;
      this._type = value.type;
    }
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList extends cdktn.ComplexList {
  public internalValue? : WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig[] | cdktn.IResolvable

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
  public get(index: number): WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference {
    return new WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomAiGuardrailContextualGroundingPolicyConfig {
  /**
  * List of contextual grounding filter configs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#filters_config WisdomAiGuardrail#filters_config}
  */
  readonly filtersConfig?: WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig[] | cdktn.IResolvable;
}

export function wisdomAiGuardrailContextualGroundingPolicyConfigToTerraform(struct?: WisdomAiGuardrailContextualGroundingPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filters_config: cdktn.listMapper(wisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigToTerraform, false)(struct!.filtersConfig),
  }
}


export function wisdomAiGuardrailContextualGroundingPolicyConfigToHclTerraform(struct?: WisdomAiGuardrailContextualGroundingPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filters_config: {
      value: cdktn.listMapperHcl(wisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigToHclTerraform, false)(struct!.filtersConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiGuardrailContextualGroundingPolicyConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filtersConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersConfig = this._filtersConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiGuardrailContextualGroundingPolicyConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filtersConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filtersConfig.internalValue = value.filtersConfig;
    }
  }

  // filters_config - computed: true, optional: true, required: false
  private _filtersConfig = new WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfigList(this, "filters_config", false);
  public get filtersConfig() {
    return this._filtersConfig;
  }
  public putFiltersConfig(value: WisdomAiGuardrailContextualGroundingPolicyConfigFiltersConfig[] | cdktn.IResolvable) {
    this._filtersConfig.internalValue = value;
  }
  public resetFiltersConfig() {
    this._filtersConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersConfigInput() {
    return this._filtersConfig.internalValue;
  }
}
export interface WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig {
  /**
  * Options for sensitive information action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#action WisdomAiGuardrail#action}
  */
  readonly action?: string;
  /**
  * The currently supported PII entities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#type WisdomAiGuardrail#type}
  */
  readonly type?: string;
}

export function wisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigToTerraform(struct?: WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function wisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigToHclTerraform(struct?: WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._type = value.type;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList extends cdktn.ComplexList {
  public internalValue? : WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig[] | cdktn.IResolvable

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
  public get(index: number): WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference {
    return new WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig {
  /**
  * Options for sensitive information action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#action WisdomAiGuardrail#action}
  */
  readonly action?: string;
  /**
  * The regex description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#description WisdomAiGuardrail#description}
  */
  readonly description?: string;
  /**
  * The regex name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#name WisdomAiGuardrail#name}
  */
  readonly name?: string;
  /**
  * The regex pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#pattern WisdomAiGuardrail#pattern}
  */
  readonly pattern?: string;
}

export function wisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigToTerraform(struct?: WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    pattern: cdktn.stringToTerraform(struct!.pattern),
  }
}


export function wisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigToHclTerraform(struct?: WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktn.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._name = undefined;
      this._pattern = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._description = value.description;
      this._name = value.name;
      this._pattern = value.pattern;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // pattern - computed: true, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList extends cdktn.ComplexList {
  public internalValue? : WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig[] | cdktn.IResolvable

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
  public get(index: number): WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference {
    return new WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomAiGuardrailSensitiveInformationPolicyConfig {
  /**
  * List of entities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#pii_entities_config WisdomAiGuardrail#pii_entities_config}
  */
  readonly piiEntitiesConfig?: WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig[] | cdktn.IResolvable;
  /**
  * List of regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#regexes_config WisdomAiGuardrail#regexes_config}
  */
  readonly regexesConfig?: WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig[] | cdktn.IResolvable;
}

export function wisdomAiGuardrailSensitiveInformationPolicyConfigToTerraform(struct?: WisdomAiGuardrailSensitiveInformationPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pii_entities_config: cdktn.listMapper(wisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigToTerraform, false)(struct!.piiEntitiesConfig),
    regexes_config: cdktn.listMapper(wisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigToTerraform, false)(struct!.regexesConfig),
  }
}


export function wisdomAiGuardrailSensitiveInformationPolicyConfigToHclTerraform(struct?: WisdomAiGuardrailSensitiveInformationPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pii_entities_config: {
      value: cdktn.listMapperHcl(wisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigToHclTerraform, false)(struct!.piiEntitiesConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList",
    },
    regexes_config: {
      value: cdktn.listMapperHcl(wisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigToHclTerraform, false)(struct!.regexesConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiGuardrailSensitiveInformationPolicyConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._piiEntitiesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.piiEntitiesConfig = this._piiEntitiesConfig?.internalValue;
    }
    if (this._regexesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexesConfig = this._regexesConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiGuardrailSensitiveInformationPolicyConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._piiEntitiesConfig.internalValue = undefined;
      this._regexesConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._piiEntitiesConfig.internalValue = value.piiEntitiesConfig;
      this._regexesConfig.internalValue = value.regexesConfig;
    }
  }

  // pii_entities_config - computed: true, optional: true, required: false
  private _piiEntitiesConfig = new WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList(this, "pii_entities_config", false);
  public get piiEntitiesConfig() {
    return this._piiEntitiesConfig;
  }
  public putPiiEntitiesConfig(value: WisdomAiGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig[] | cdktn.IResolvable) {
    this._piiEntitiesConfig.internalValue = value;
  }
  public resetPiiEntitiesConfig() {
    this._piiEntitiesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiEntitiesConfigInput() {
    return this._piiEntitiesConfig.internalValue;
  }

  // regexes_config - computed: true, optional: true, required: false
  private _regexesConfig = new WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfigList(this, "regexes_config", false);
  public get regexesConfig() {
    return this._regexesConfig;
  }
  public putRegexesConfig(value: WisdomAiGuardrailSensitiveInformationPolicyConfigRegexesConfig[] | cdktn.IResolvable) {
    this._regexesConfig.internalValue = value;
  }
  public resetRegexesConfig() {
    this._regexesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexesConfigInput() {
    return this._regexesConfig.internalValue;
  }
}
export interface WisdomAiGuardrailTopicPolicyConfigTopicsConfig {
  /**
  * Definition of topic in topic policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#definition WisdomAiGuardrail#definition}
  */
  readonly definition?: string;
  /**
  * List of text examples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#examples WisdomAiGuardrail#examples}
  */
  readonly examples?: string[];
  /**
  * Name of topic in topic policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#name WisdomAiGuardrail#name}
  */
  readonly name?: string;
  /**
  * Type of topic in a policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#type WisdomAiGuardrail#type}
  */
  readonly type?: string;
}

export function wisdomAiGuardrailTopicPolicyConfigTopicsConfigToTerraform(struct?: WisdomAiGuardrailTopicPolicyConfigTopicsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    definition: cdktn.stringToTerraform(struct!.definition),
    examples: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.examples),
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function wisdomAiGuardrailTopicPolicyConfigTopicsConfigToHclTerraform(struct?: WisdomAiGuardrailTopicPolicyConfigTopicsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    definition: {
      value: cdktn.stringToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    examples: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.examples),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomAiGuardrailTopicPolicyConfigTopicsConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._examples !== undefined) {
      hasAnyValues = true;
      internalValueResult.examples = this._examples;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiGuardrailTopicPolicyConfigTopicsConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._examples = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._examples = value.examples;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // definition - computed: true, optional: true, required: false
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  public resetDefinition() {
    this._definition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // examples - computed: true, optional: true, required: false
  private _examples?: string[]; 
  public get examples() {
    return this.getListAttribute('examples');
  }
  public set examples(value: string[]) {
    this._examples = value;
  }
  public resetExamples() {
    this._examples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get examplesInput() {
    return this._examples;
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class WisdomAiGuardrailTopicPolicyConfigTopicsConfigList extends cdktn.ComplexList {
  public internalValue? : WisdomAiGuardrailTopicPolicyConfigTopicsConfig[] | cdktn.IResolvable

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
  public get(index: number): WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference {
    return new WisdomAiGuardrailTopicPolicyConfigTopicsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomAiGuardrailTopicPolicyConfig {
  /**
  * List of topic configs in topic policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#topics_config WisdomAiGuardrail#topics_config}
  */
  readonly topicsConfig?: WisdomAiGuardrailTopicPolicyConfigTopicsConfig[] | cdktn.IResolvable;
}

export function wisdomAiGuardrailTopicPolicyConfigToTerraform(struct?: WisdomAiGuardrailTopicPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    topics_config: cdktn.listMapper(wisdomAiGuardrailTopicPolicyConfigTopicsConfigToTerraform, false)(struct!.topicsConfig),
  }
}


export function wisdomAiGuardrailTopicPolicyConfigToHclTerraform(struct?: WisdomAiGuardrailTopicPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    topics_config: {
      value: cdktn.listMapperHcl(wisdomAiGuardrailTopicPolicyConfigTopicsConfigToHclTerraform, false)(struct!.topicsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomAiGuardrailTopicPolicyConfigTopicsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiGuardrailTopicPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiGuardrailTopicPolicyConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topicsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicsConfig = this._topicsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiGuardrailTopicPolicyConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._topicsConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._topicsConfig.internalValue = value.topicsConfig;
    }
  }

  // topics_config - computed: true, optional: true, required: false
  private _topicsConfig = new WisdomAiGuardrailTopicPolicyConfigTopicsConfigList(this, "topics_config", false);
  public get topicsConfig() {
    return this._topicsConfig;
  }
  public putTopicsConfig(value: WisdomAiGuardrailTopicPolicyConfigTopicsConfig[] | cdktn.IResolvable) {
    this._topicsConfig.internalValue = value;
  }
  public resetTopicsConfig() {
    this._topicsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsConfigInput() {
    return this._topicsConfig.internalValue;
  }
}
export interface WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig {
  /**
  * Options for managed words.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#type WisdomAiGuardrail#type}
  */
  readonly type?: string;
}

export function wisdomAiGuardrailWordPolicyConfigManagedWordListsConfigToTerraform(struct?: WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function wisdomAiGuardrailWordPolicyConfigManagedWordListsConfigToHclTerraform(struct?: WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList extends cdktn.ComplexList {
  public internalValue? : WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig[] | cdktn.IResolvable

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
  public get(index: number): WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference {
    return new WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomAiGuardrailWordPolicyConfigWordsConfig {
  /**
  * The custom word text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#text WisdomAiGuardrail#text}
  */
  readonly text?: string;
}

export function wisdomAiGuardrailWordPolicyConfigWordsConfigToTerraform(struct?: WisdomAiGuardrailWordPolicyConfigWordsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
  }
}


export function wisdomAiGuardrailWordPolicyConfigWordsConfigToHclTerraform(struct?: WisdomAiGuardrailWordPolicyConfigWordsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomAiGuardrailWordPolicyConfigWordsConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiGuardrailWordPolicyConfigWordsConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
    }
  }

  // text - computed: true, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}

export class WisdomAiGuardrailWordPolicyConfigWordsConfigList extends cdktn.ComplexList {
  public internalValue? : WisdomAiGuardrailWordPolicyConfigWordsConfig[] | cdktn.IResolvable

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
  public get(index: number): WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference {
    return new WisdomAiGuardrailWordPolicyConfigWordsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomAiGuardrailWordPolicyConfig {
  /**
  * A config for the list of managed words.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#managed_word_lists_config WisdomAiGuardrail#managed_word_lists_config}
  */
  readonly managedWordListsConfig?: WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig[] | cdktn.IResolvable;
  /**
  * List of custom word configs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#words_config WisdomAiGuardrail#words_config}
  */
  readonly wordsConfig?: WisdomAiGuardrailWordPolicyConfigWordsConfig[] | cdktn.IResolvable;
}

export function wisdomAiGuardrailWordPolicyConfigToTerraform(struct?: WisdomAiGuardrailWordPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    managed_word_lists_config: cdktn.listMapper(wisdomAiGuardrailWordPolicyConfigManagedWordListsConfigToTerraform, false)(struct!.managedWordListsConfig),
    words_config: cdktn.listMapper(wisdomAiGuardrailWordPolicyConfigWordsConfigToTerraform, false)(struct!.wordsConfig),
  }
}


export function wisdomAiGuardrailWordPolicyConfigToHclTerraform(struct?: WisdomAiGuardrailWordPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    managed_word_lists_config: {
      value: cdktn.listMapperHcl(wisdomAiGuardrailWordPolicyConfigManagedWordListsConfigToHclTerraform, false)(struct!.managedWordListsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList",
    },
    words_config: {
      value: cdktn.listMapperHcl(wisdomAiGuardrailWordPolicyConfigWordsConfigToHclTerraform, false)(struct!.wordsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomAiGuardrailWordPolicyConfigWordsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomAiGuardrailWordPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomAiGuardrailWordPolicyConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedWordListsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedWordListsConfig = this._managedWordListsConfig?.internalValue;
    }
    if (this._wordsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wordsConfig = this._wordsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomAiGuardrailWordPolicyConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._managedWordListsConfig.internalValue = undefined;
      this._wordsConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._managedWordListsConfig.internalValue = value.managedWordListsConfig;
      this._wordsConfig.internalValue = value.wordsConfig;
    }
  }

  // managed_word_lists_config - computed: true, optional: true, required: false
  private _managedWordListsConfig = new WisdomAiGuardrailWordPolicyConfigManagedWordListsConfigList(this, "managed_word_lists_config", false);
  public get managedWordListsConfig() {
    return this._managedWordListsConfig;
  }
  public putManagedWordListsConfig(value: WisdomAiGuardrailWordPolicyConfigManagedWordListsConfig[] | cdktn.IResolvable) {
    this._managedWordListsConfig.internalValue = value;
  }
  public resetManagedWordListsConfig() {
    this._managedWordListsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedWordListsConfigInput() {
    return this._managedWordListsConfig.internalValue;
  }

  // words_config - computed: true, optional: true, required: false
  private _wordsConfig = new WisdomAiGuardrailWordPolicyConfigWordsConfigList(this, "words_config", false);
  public get wordsConfig() {
    return this._wordsConfig;
  }
  public putWordsConfig(value: WisdomAiGuardrailWordPolicyConfigWordsConfig[] | cdktn.IResolvable) {
    this._wordsConfig.internalValue = value;
  }
  public resetWordsConfig() {
    this._wordsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wordsConfigInput() {
    return this._wordsConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail awscc_wisdom_ai_guardrail}
*/
export class WisdomAiGuardrail extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_wisdom_ai_guardrail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a WisdomAiGuardrail resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WisdomAiGuardrail to import
  * @param importFromId The id of the existing WisdomAiGuardrail that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WisdomAiGuardrail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wisdom_ai_guardrail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_ai_guardrail awscc_wisdom_ai_guardrail} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WisdomAiGuardrailConfig
  */
  public constructor(scope: Construct, id: string, config: WisdomAiGuardrailConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_wisdom_ai_guardrail',
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
    this._assistantId = config.assistantId;
    this._blockedInputMessaging = config.blockedInputMessaging;
    this._blockedOutputsMessaging = config.blockedOutputsMessaging;
    this._contentPolicyConfig.internalValue = config.contentPolicyConfig;
    this._contextualGroundingPolicyConfig.internalValue = config.contextualGroundingPolicyConfig;
    this._description = config.description;
    this._name = config.name;
    this._sensitiveInformationPolicyConfig.internalValue = config.sensitiveInformationPolicyConfig;
    this._tags = config.tags;
    this._topicPolicyConfig.internalValue = config.topicPolicyConfig;
    this._wordPolicyConfig.internalValue = config.wordPolicyConfig;
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

  // assistant_id - computed: false, optional: false, required: true
  private _assistantId?: string; 
  public get assistantId() {
    return this.getStringAttribute('assistant_id');
  }
  public set assistantId(value: string) {
    this._assistantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assistantIdInput() {
    return this._assistantId;
  }

  // blocked_input_messaging - computed: false, optional: false, required: true
  private _blockedInputMessaging?: string; 
  public get blockedInputMessaging() {
    return this.getStringAttribute('blocked_input_messaging');
  }
  public set blockedInputMessaging(value: string) {
    this._blockedInputMessaging = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedInputMessagingInput() {
    return this._blockedInputMessaging;
  }

  // blocked_outputs_messaging - computed: false, optional: false, required: true
  private _blockedOutputsMessaging?: string; 
  public get blockedOutputsMessaging() {
    return this.getStringAttribute('blocked_outputs_messaging');
  }
  public set blockedOutputsMessaging(value: string) {
    this._blockedOutputsMessaging = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedOutputsMessagingInput() {
    return this._blockedOutputsMessaging;
  }

  // content_policy_config - computed: true, optional: true, required: false
  private _contentPolicyConfig = new WisdomAiGuardrailContentPolicyConfigOutputReference(this, "content_policy_config");
  public get contentPolicyConfig() {
    return this._contentPolicyConfig;
  }
  public putContentPolicyConfig(value: WisdomAiGuardrailContentPolicyConfig) {
    this._contentPolicyConfig.internalValue = value;
  }
  public resetContentPolicyConfig() {
    this._contentPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentPolicyConfigInput() {
    return this._contentPolicyConfig.internalValue;
  }

  // contextual_grounding_policy_config - computed: true, optional: true, required: false
  private _contextualGroundingPolicyConfig = new WisdomAiGuardrailContextualGroundingPolicyConfigOutputReference(this, "contextual_grounding_policy_config");
  public get contextualGroundingPolicyConfig() {
    return this._contextualGroundingPolicyConfig;
  }
  public putContextualGroundingPolicyConfig(value: WisdomAiGuardrailContextualGroundingPolicyConfig) {
    this._contextualGroundingPolicyConfig.internalValue = value;
  }
  public resetContextualGroundingPolicyConfig() {
    this._contextualGroundingPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextualGroundingPolicyConfigInput() {
    return this._contextualGroundingPolicyConfig.internalValue;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_time_seconds - computed: true, optional: false, required: false
  public get modifiedTimeSeconds() {
    return this.getNumberAttribute('modified_time_seconds');
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

  // sensitive_information_policy_config - computed: true, optional: true, required: false
  private _sensitiveInformationPolicyConfig = new WisdomAiGuardrailSensitiveInformationPolicyConfigOutputReference(this, "sensitive_information_policy_config");
  public get sensitiveInformationPolicyConfig() {
    return this._sensitiveInformationPolicyConfig;
  }
  public putSensitiveInformationPolicyConfig(value: WisdomAiGuardrailSensitiveInformationPolicyConfig) {
    this._sensitiveInformationPolicyConfig.internalValue = value;
  }
  public resetSensitiveInformationPolicyConfig() {
    this._sensitiveInformationPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInformationPolicyConfigInput() {
    return this._sensitiveInformationPolicyConfig.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // topic_policy_config - computed: true, optional: true, required: false
  private _topicPolicyConfig = new WisdomAiGuardrailTopicPolicyConfigOutputReference(this, "topic_policy_config");
  public get topicPolicyConfig() {
    return this._topicPolicyConfig;
  }
  public putTopicPolicyConfig(value: WisdomAiGuardrailTopicPolicyConfig) {
    this._topicPolicyConfig.internalValue = value;
  }
  public resetTopicPolicyConfig() {
    this._topicPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicPolicyConfigInput() {
    return this._topicPolicyConfig.internalValue;
  }

  // word_policy_config - computed: true, optional: true, required: false
  private _wordPolicyConfig = new WisdomAiGuardrailWordPolicyConfigOutputReference(this, "word_policy_config");
  public get wordPolicyConfig() {
    return this._wordPolicyConfig;
  }
  public putWordPolicyConfig(value: WisdomAiGuardrailWordPolicyConfig) {
    this._wordPolicyConfig.internalValue = value;
  }
  public resetWordPolicyConfig() {
    this._wordPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wordPolicyConfigInput() {
    return this._wordPolicyConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assistant_id: cdktn.stringToTerraform(this._assistantId),
      blocked_input_messaging: cdktn.stringToTerraform(this._blockedInputMessaging),
      blocked_outputs_messaging: cdktn.stringToTerraform(this._blockedOutputsMessaging),
      content_policy_config: wisdomAiGuardrailContentPolicyConfigToTerraform(this._contentPolicyConfig.internalValue),
      contextual_grounding_policy_config: wisdomAiGuardrailContextualGroundingPolicyConfigToTerraform(this._contextualGroundingPolicyConfig.internalValue),
      description: cdktn.stringToTerraform(this._description),
      name: cdktn.stringToTerraform(this._name),
      sensitive_information_policy_config: wisdomAiGuardrailSensitiveInformationPolicyConfigToTerraform(this._sensitiveInformationPolicyConfig.internalValue),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      topic_policy_config: wisdomAiGuardrailTopicPolicyConfigToTerraform(this._topicPolicyConfig.internalValue),
      word_policy_config: wisdomAiGuardrailWordPolicyConfigToTerraform(this._wordPolicyConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assistant_id: {
        value: cdktn.stringToHclTerraform(this._assistantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blocked_input_messaging: {
        value: cdktn.stringToHclTerraform(this._blockedInputMessaging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blocked_outputs_messaging: {
        value: cdktn.stringToHclTerraform(this._blockedOutputsMessaging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_policy_config: {
        value: wisdomAiGuardrailContentPolicyConfigToHclTerraform(this._contentPolicyConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WisdomAiGuardrailContentPolicyConfig",
      },
      contextual_grounding_policy_config: {
        value: wisdomAiGuardrailContextualGroundingPolicyConfigToHclTerraform(this._contextualGroundingPolicyConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WisdomAiGuardrailContextualGroundingPolicyConfig",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitive_information_policy_config: {
        value: wisdomAiGuardrailSensitiveInformationPolicyConfigToHclTerraform(this._sensitiveInformationPolicyConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WisdomAiGuardrailSensitiveInformationPolicyConfig",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      topic_policy_config: {
        value: wisdomAiGuardrailTopicPolicyConfigToHclTerraform(this._topicPolicyConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WisdomAiGuardrailTopicPolicyConfig",
      },
      word_policy_config: {
        value: wisdomAiGuardrailWordPolicyConfigToHclTerraform(this._wordPolicyConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WisdomAiGuardrailWordPolicyConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
