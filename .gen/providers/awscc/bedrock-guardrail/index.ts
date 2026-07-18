// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockGuardrailConfig extends cdktn.TerraformMetaArguments {
  /**
  * Optional configuration for integrating Automated Reasoning policies with the guardrail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#automated_reasoning_policy_config BedrockGuardrail#automated_reasoning_policy_config}
  */
  readonly automatedReasoningPolicyConfig?: BedrockGuardrailAutomatedReasoningPolicyConfig;
  /**
  * Messaging for when violations are detected in text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#blocked_input_messaging BedrockGuardrail#blocked_input_messaging}
  */
  readonly blockedInputMessaging: string;
  /**
  * Messaging for when violations are detected in text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#blocked_outputs_messaging BedrockGuardrail#blocked_outputs_messaging}
  */
  readonly blockedOutputsMessaging: string;
  /**
  * Content policy config for a guardrail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#content_policy_config BedrockGuardrail#content_policy_config}
  */
  readonly contentPolicyConfig?: BedrockGuardrailContentPolicyConfig;
  /**
  * Contextual grounding policy config for a guardrail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#contextual_grounding_policy_config BedrockGuardrail#contextual_grounding_policy_config}
  */
  readonly contextualGroundingPolicyConfig?: BedrockGuardrailContextualGroundingPolicyConfig;
  /**
  * The system-defined guardrail profile that you?re using with your guardrail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#cross_region_config BedrockGuardrail#cross_region_config}
  */
  readonly crossRegionConfig?: BedrockGuardrailCrossRegionConfig;
  /**
  * Description of the guardrail or its version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#description BedrockGuardrail#description}
  */
  readonly description?: string;
  /**
  * The KMS key with which the guardrail was encrypted at rest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#kms_key_arn BedrockGuardrail#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Name of the guardrail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#name BedrockGuardrail#name}
  */
  readonly name: string;
  /**
  * Sensitive information policy config for a guardrail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#sensitive_information_policy_config BedrockGuardrail#sensitive_information_policy_config}
  */
  readonly sensitiveInformationPolicyConfig?: BedrockGuardrailSensitiveInformationPolicyConfig;
  /**
  * List of Tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#tags BedrockGuardrail#tags}
  */
  readonly tags?: BedrockGuardrailTags[] | cdktn.IResolvable;
  /**
  * Topic policy config for a guardrail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#topic_policy_config BedrockGuardrail#topic_policy_config}
  */
  readonly topicPolicyConfig?: BedrockGuardrailTopicPolicyConfig;
  /**
  * Word policy config for a guardrail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#word_policy_config BedrockGuardrail#word_policy_config}
  */
  readonly wordPolicyConfig?: BedrockGuardrailWordPolicyConfig;
}
export interface BedrockGuardrailAutomatedReasoningPolicyConfig {
  /**
  * The confidence threshold for triggering guardrail actions based on Automated Reasoning policy violations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#confidence_threshold BedrockGuardrail#confidence_threshold}
  */
  readonly confidenceThreshold?: number;
  /**
  * The list of Automated Reasoning policy ARNs to include in the guardrail configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#policies BedrockGuardrail#policies}
  */
  readonly policies?: string[];
}

export function bedrockGuardrailAutomatedReasoningPolicyConfigToTerraform(struct?: BedrockGuardrailAutomatedReasoningPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    confidence_threshold: cdktn.numberToTerraform(struct!.confidenceThreshold),
    policies: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.policies),
  }
}


export function bedrockGuardrailAutomatedReasoningPolicyConfigToHclTerraform(struct?: BedrockGuardrailAutomatedReasoningPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    confidence_threshold: {
      value: cdktn.numberToHclTerraform(struct!.confidenceThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policies: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.policies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockGuardrailAutomatedReasoningPolicyConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidenceThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidenceThreshold = this._confidenceThreshold;
    }
    if (this._policies !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailAutomatedReasoningPolicyConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confidenceThreshold = undefined;
      this._policies = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confidenceThreshold = value.confidenceThreshold;
      this._policies = value.policies;
    }
  }

  // confidence_threshold - computed: true, optional: true, required: false
  private _confidenceThreshold?: number; 
  public get confidenceThreshold() {
    return this.getNumberAttribute('confidence_threshold');
  }
  public set confidenceThreshold(value: number) {
    this._confidenceThreshold = value;
  }
  public resetConfidenceThreshold() {
    this._confidenceThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceThresholdInput() {
    return this._confidenceThreshold;
  }

  // policies - computed: true, optional: true, required: false
  private _policies?: string[]; 
  public get policies() {
    return this.getListAttribute('policies');
  }
  public set policies(value: string[]) {
    this._policies = value;
  }
  public resetPolicies() {
    this._policies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
  }
}
export interface BedrockGuardrailContentPolicyConfigContentFiltersTierConfig {
  /**
  * Tier name for tier configuration in content filters policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#tier_name BedrockGuardrail#tier_name}
  */
  readonly tierName?: string;
}

export function bedrockGuardrailContentPolicyConfigContentFiltersTierConfigToTerraform(struct?: BedrockGuardrailContentPolicyConfigContentFiltersTierConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tier_name: cdktn.stringToTerraform(struct!.tierName),
  }
}


export function bedrockGuardrailContentPolicyConfigContentFiltersTierConfigToHclTerraform(struct?: BedrockGuardrailContentPolicyConfigContentFiltersTierConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tier_name: {
      value: cdktn.stringToHclTerraform(struct!.tierName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockGuardrailContentPolicyConfigContentFiltersTierConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tierName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tierName = this._tierName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailContentPolicyConfigContentFiltersTierConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tierName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tierName = value.tierName;
    }
  }

  // tier_name - computed: true, optional: true, required: false
  private _tierName?: string; 
  public get tierName() {
    return this.getStringAttribute('tier_name');
  }
  public set tierName(value: string) {
    this._tierName = value;
  }
  public resetTierName() {
    this._tierName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierNameInput() {
    return this._tierName;
  }
}
export interface BedrockGuardrailContentPolicyConfigFiltersConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#input_action BedrockGuardrail#input_action}
  */
  readonly inputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#input_enabled BedrockGuardrail#input_enabled}
  */
  readonly inputEnabled?: boolean | cdktn.IResolvable;
  /**
  * List of modalities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#input_modalities BedrockGuardrail#input_modalities}
  */
  readonly inputModalities?: string[];
  /**
  * Strength for filters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#input_strength BedrockGuardrail#input_strength}
  */
  readonly inputStrength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#output_action BedrockGuardrail#output_action}
  */
  readonly outputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#output_enabled BedrockGuardrail#output_enabled}
  */
  readonly outputEnabled?: boolean | cdktn.IResolvable;
  /**
  * List of modalities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#output_modalities BedrockGuardrail#output_modalities}
  */
  readonly outputModalities?: string[];
  /**
  * Strength for filters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#output_strength BedrockGuardrail#output_strength}
  */
  readonly outputStrength?: string;
  /**
  * Type of filter in content policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}
  */
  readonly type?: string;
}

export function bedrockGuardrailContentPolicyConfigFiltersConfigToTerraform(struct?: BedrockGuardrailContentPolicyConfigFiltersConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input_action: cdktn.stringToTerraform(struct!.inputAction),
    input_enabled: cdktn.booleanToTerraform(struct!.inputEnabled),
    input_modalities: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inputModalities),
    input_strength: cdktn.stringToTerraform(struct!.inputStrength),
    output_action: cdktn.stringToTerraform(struct!.outputAction),
    output_enabled: cdktn.booleanToTerraform(struct!.outputEnabled),
    output_modalities: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.outputModalities),
    output_strength: cdktn.stringToTerraform(struct!.outputStrength),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockGuardrailContentPolicyConfigFiltersConfigToHclTerraform(struct?: BedrockGuardrailContentPolicyConfigFiltersConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input_action: {
      value: cdktn.stringToHclTerraform(struct!.inputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.inputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_modalities: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inputModalities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    input_strength: {
      value: cdktn.stringToHclTerraform(struct!.inputStrength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_action: {
      value: cdktn.stringToHclTerraform(struct!.outputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.outputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    output_modalities: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.outputModalities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockGuardrailContentPolicyConfigFiltersConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputAction = this._inputAction;
    }
    if (this._inputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputEnabled = this._inputEnabled;
    }
    if (this._inputModalities !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputModalities = this._inputModalities;
    }
    if (this._inputStrength !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputStrength = this._inputStrength;
    }
    if (this._outputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputAction = this._outputAction;
    }
    if (this._outputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputEnabled = this._outputEnabled;
    }
    if (this._outputModalities !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputModalities = this._outputModalities;
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

  public set internalValue(value: BedrockGuardrailContentPolicyConfigFiltersConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputAction = undefined;
      this._inputEnabled = undefined;
      this._inputModalities = undefined;
      this._inputStrength = undefined;
      this._outputAction = undefined;
      this._outputEnabled = undefined;
      this._outputModalities = undefined;
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
      this._inputAction = value.inputAction;
      this._inputEnabled = value.inputEnabled;
      this._inputModalities = value.inputModalities;
      this._inputStrength = value.inputStrength;
      this._outputAction = value.outputAction;
      this._outputEnabled = value.outputEnabled;
      this._outputModalities = value.outputModalities;
      this._outputStrength = value.outputStrength;
      this._type = value.type;
    }
  }

  // input_action - computed: true, optional: true, required: false
  private _inputAction?: string; 
  public get inputAction() {
    return this.getStringAttribute('input_action');
  }
  public set inputAction(value: string) {
    this._inputAction = value;
  }
  public resetInputAction() {
    this._inputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputActionInput() {
    return this._inputAction;
  }

  // input_enabled - computed: true, optional: true, required: false
  private _inputEnabled?: boolean | cdktn.IResolvable; 
  public get inputEnabled() {
    return this.getBooleanAttribute('input_enabled');
  }
  public set inputEnabled(value: boolean | cdktn.IResolvable) {
    this._inputEnabled = value;
  }
  public resetInputEnabled() {
    this._inputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputEnabledInput() {
    return this._inputEnabled;
  }

  // input_modalities - computed: true, optional: true, required: false
  private _inputModalities?: string[]; 
  public get inputModalities() {
    return this.getListAttribute('input_modalities');
  }
  public set inputModalities(value: string[]) {
    this._inputModalities = value;
  }
  public resetInputModalities() {
    this._inputModalities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputModalitiesInput() {
    return this._inputModalities;
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

  // output_action - computed: true, optional: true, required: false
  private _outputAction?: string; 
  public get outputAction() {
    return this.getStringAttribute('output_action');
  }
  public set outputAction(value: string) {
    this._outputAction = value;
  }
  public resetOutputAction() {
    this._outputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputActionInput() {
    return this._outputAction;
  }

  // output_enabled - computed: true, optional: true, required: false
  private _outputEnabled?: boolean | cdktn.IResolvable; 
  public get outputEnabled() {
    return this.getBooleanAttribute('output_enabled');
  }
  public set outputEnabled(value: boolean | cdktn.IResolvable) {
    this._outputEnabled = value;
  }
  public resetOutputEnabled() {
    this._outputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputEnabledInput() {
    return this._outputEnabled;
  }

  // output_modalities - computed: true, optional: true, required: false
  private _outputModalities?: string[]; 
  public get outputModalities() {
    return this.getListAttribute('output_modalities');
  }
  public set outputModalities(value: string[]) {
    this._outputModalities = value;
  }
  public resetOutputModalities() {
    this._outputModalities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputModalitiesInput() {
    return this._outputModalities;
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

export class BedrockGuardrailContentPolicyConfigFiltersConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockGuardrailContentPolicyConfigFiltersConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference {
    return new BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailContentPolicyConfig {
  /**
  * Guardrail tier config for content policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#content_filters_tier_config BedrockGuardrail#content_filters_tier_config}
  */
  readonly contentFiltersTierConfig?: BedrockGuardrailContentPolicyConfigContentFiltersTierConfig;
  /**
  * List of content filter configs in content policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#filters_config BedrockGuardrail#filters_config}
  */
  readonly filtersConfig?: BedrockGuardrailContentPolicyConfigFiltersConfig[] | cdktn.IResolvable;
}

export function bedrockGuardrailContentPolicyConfigToTerraform(struct?: BedrockGuardrailContentPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_filters_tier_config: bedrockGuardrailContentPolicyConfigContentFiltersTierConfigToTerraform(struct!.contentFiltersTierConfig),
    filters_config: cdktn.listMapper(bedrockGuardrailContentPolicyConfigFiltersConfigToTerraform, false)(struct!.filtersConfig),
  }
}


export function bedrockGuardrailContentPolicyConfigToHclTerraform(struct?: BedrockGuardrailContentPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_filters_tier_config: {
      value: bedrockGuardrailContentPolicyConfigContentFiltersTierConfigToHclTerraform(struct!.contentFiltersTierConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockGuardrailContentPolicyConfigContentFiltersTierConfig",
    },
    filters_config: {
      value: cdktn.listMapperHcl(bedrockGuardrailContentPolicyConfigFiltersConfigToHclTerraform, false)(struct!.filtersConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockGuardrailContentPolicyConfigFiltersConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockGuardrailContentPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockGuardrailContentPolicyConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentFiltersTierConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentFiltersTierConfig = this._contentFiltersTierConfig?.internalValue;
    }
    if (this._filtersConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersConfig = this._filtersConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailContentPolicyConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentFiltersTierConfig.internalValue = undefined;
      this._filtersConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentFiltersTierConfig.internalValue = value.contentFiltersTierConfig;
      this._filtersConfig.internalValue = value.filtersConfig;
    }
  }

  // content_filters_tier_config - computed: true, optional: true, required: false
  private _contentFiltersTierConfig = new BedrockGuardrailContentPolicyConfigContentFiltersTierConfigOutputReference(this, "content_filters_tier_config");
  public get contentFiltersTierConfig() {
    return this._contentFiltersTierConfig;
  }
  public putContentFiltersTierConfig(value: BedrockGuardrailContentPolicyConfigContentFiltersTierConfig) {
    this._contentFiltersTierConfig.internalValue = value;
  }
  public resetContentFiltersTierConfig() {
    this._contentFiltersTierConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentFiltersTierConfigInput() {
    return this._contentFiltersTierConfig.internalValue;
  }

  // filters_config - computed: true, optional: true, required: false
  private _filtersConfig = new BedrockGuardrailContentPolicyConfigFiltersConfigList(this, "filters_config", false);
  public get filtersConfig() {
    return this._filtersConfig;
  }
  public putFiltersConfig(value: BedrockGuardrailContentPolicyConfigFiltersConfig[] | cdktn.IResolvable) {
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
export interface BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#action BedrockGuardrail#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#enabled BedrockGuardrail#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * The threshold for this filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#threshold BedrockGuardrail#threshold}
  */
  readonly threshold?: number;
  /**
  * Type of contextual grounding filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}
  */
  readonly type?: string;
}

export function bedrockGuardrailContextualGroundingPolicyConfigFiltersConfigToTerraform(struct?: BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    threshold: cdktn.numberToTerraform(struct!.threshold),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockGuardrailContextualGroundingPolicyConfigFiltersConfigToHclTerraform(struct?: BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig | cdktn.IResolvable): any {
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
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
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

  public set internalValue(value: BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._enabled = undefined;
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
      this._action = value.action;
      this._enabled = value.enabled;
      this._threshold = value.threshold;
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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

export class BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference {
    return new BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailContextualGroundingPolicyConfig {
  /**
  * List of contextual grounding filter configs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#filters_config BedrockGuardrail#filters_config}
  */
  readonly filtersConfig?: BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig[] | cdktn.IResolvable;
}

export function bedrockGuardrailContextualGroundingPolicyConfigToTerraform(struct?: BedrockGuardrailContextualGroundingPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filters_config: cdktn.listMapper(bedrockGuardrailContextualGroundingPolicyConfigFiltersConfigToTerraform, false)(struct!.filtersConfig),
  }
}


export function bedrockGuardrailContextualGroundingPolicyConfigToHclTerraform(struct?: BedrockGuardrailContextualGroundingPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filters_config: {
      value: cdktn.listMapperHcl(bedrockGuardrailContextualGroundingPolicyConfigFiltersConfigToHclTerraform, false)(struct!.filtersConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockGuardrailContextualGroundingPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockGuardrailContextualGroundingPolicyConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockGuardrailContextualGroundingPolicyConfig | cdktn.IResolvable | undefined) {
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
  private _filtersConfig = new BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList(this, "filters_config", false);
  public get filtersConfig() {
    return this._filtersConfig;
  }
  public putFiltersConfig(value: BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig[] | cdktn.IResolvable) {
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
export interface BedrockGuardrailCrossRegionConfig {
  /**
  * The Amazon Resource Name (ARN) of the guardrail profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#guardrail_profile_arn BedrockGuardrail#guardrail_profile_arn}
  */
  readonly guardrailProfileArn?: string;
}

export function bedrockGuardrailCrossRegionConfigToTerraform(struct?: BedrockGuardrailCrossRegionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    guardrail_profile_arn: cdktn.stringToTerraform(struct!.guardrailProfileArn),
  }
}


export function bedrockGuardrailCrossRegionConfigToHclTerraform(struct?: BedrockGuardrailCrossRegionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    guardrail_profile_arn: {
      value: cdktn.stringToHclTerraform(struct!.guardrailProfileArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockGuardrailCrossRegionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockGuardrailCrossRegionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._guardrailProfileArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.guardrailProfileArn = this._guardrailProfileArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailCrossRegionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._guardrailProfileArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._guardrailProfileArn = value.guardrailProfileArn;
    }
  }

  // guardrail_profile_arn - computed: true, optional: true, required: false
  private _guardrailProfileArn?: string; 
  public get guardrailProfileArn() {
    return this.getStringAttribute('guardrail_profile_arn');
  }
  public set guardrailProfileArn(value: string) {
    this._guardrailProfileArn = value;
  }
  public resetGuardrailProfileArn() {
    this._guardrailProfileArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailProfileArnInput() {
    return this._guardrailProfileArn;
  }
}
export interface BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig {
  /**
  * Options for sensitive information action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#action BedrockGuardrail#action}
  */
  readonly action?: string;
  /**
  * Options for sensitive information action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#input_action BedrockGuardrail#input_action}
  */
  readonly inputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#input_enabled BedrockGuardrail#input_enabled}
  */
  readonly inputEnabled?: boolean | cdktn.IResolvable;
  /**
  * Options for sensitive information action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#output_action BedrockGuardrail#output_action}
  */
  readonly outputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#output_enabled BedrockGuardrail#output_enabled}
  */
  readonly outputEnabled?: boolean | cdktn.IResolvable;
  /**
  * The currently supported PII entities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}
  */
  readonly type?: string;
}

export function bedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigToTerraform(struct?: BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    input_action: cdktn.stringToTerraform(struct!.inputAction),
    input_enabled: cdktn.booleanToTerraform(struct!.inputEnabled),
    output_action: cdktn.stringToTerraform(struct!.outputAction),
    output_enabled: cdktn.booleanToTerraform(struct!.outputEnabled),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigToHclTerraform(struct?: BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig | cdktn.IResolvable): any {
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
    input_action: {
      value: cdktn.stringToHclTerraform(struct!.inputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.inputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    output_action: {
      value: cdktn.stringToHclTerraform(struct!.outputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.outputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._inputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputAction = this._inputAction;
    }
    if (this._inputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputEnabled = this._inputEnabled;
    }
    if (this._outputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputAction = this._outputAction;
    }
    if (this._outputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputEnabled = this._outputEnabled;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._inputAction = undefined;
      this._inputEnabled = undefined;
      this._outputAction = undefined;
      this._outputEnabled = undefined;
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
      this._inputAction = value.inputAction;
      this._inputEnabled = value.inputEnabled;
      this._outputAction = value.outputAction;
      this._outputEnabled = value.outputEnabled;
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

  // input_action - computed: true, optional: true, required: false
  private _inputAction?: string; 
  public get inputAction() {
    return this.getStringAttribute('input_action');
  }
  public set inputAction(value: string) {
    this._inputAction = value;
  }
  public resetInputAction() {
    this._inputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputActionInput() {
    return this._inputAction;
  }

  // input_enabled - computed: true, optional: true, required: false
  private _inputEnabled?: boolean | cdktn.IResolvable; 
  public get inputEnabled() {
    return this.getBooleanAttribute('input_enabled');
  }
  public set inputEnabled(value: boolean | cdktn.IResolvable) {
    this._inputEnabled = value;
  }
  public resetInputEnabled() {
    this._inputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputEnabledInput() {
    return this._inputEnabled;
  }

  // output_action - computed: true, optional: true, required: false
  private _outputAction?: string; 
  public get outputAction() {
    return this.getStringAttribute('output_action');
  }
  public set outputAction(value: string) {
    this._outputAction = value;
  }
  public resetOutputAction() {
    this._outputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputActionInput() {
    return this._outputAction;
  }

  // output_enabled - computed: true, optional: true, required: false
  private _outputEnabled?: boolean | cdktn.IResolvable; 
  public get outputEnabled() {
    return this.getBooleanAttribute('output_enabled');
  }
  public set outputEnabled(value: boolean | cdktn.IResolvable) {
    this._outputEnabled = value;
  }
  public resetOutputEnabled() {
    this._outputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputEnabledInput() {
    return this._outputEnabled;
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

export class BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference {
    return new BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig {
  /**
  * Options for sensitive information action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#action BedrockGuardrail#action}
  */
  readonly action?: string;
  /**
  * The regex description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#description BedrockGuardrail#description}
  */
  readonly description?: string;
  /**
  * Options for sensitive information action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#input_action BedrockGuardrail#input_action}
  */
  readonly inputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#input_enabled BedrockGuardrail#input_enabled}
  */
  readonly inputEnabled?: boolean | cdktn.IResolvable;
  /**
  * The regex name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#name BedrockGuardrail#name}
  */
  readonly name?: string;
  /**
  * Options for sensitive information action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#output_action BedrockGuardrail#output_action}
  */
  readonly outputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#output_enabled BedrockGuardrail#output_enabled}
  */
  readonly outputEnabled?: boolean | cdktn.IResolvable;
  /**
  * The regex pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#pattern BedrockGuardrail#pattern}
  */
  readonly pattern?: string;
}

export function bedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigToTerraform(struct?: BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    description: cdktn.stringToTerraform(struct!.description),
    input_action: cdktn.stringToTerraform(struct!.inputAction),
    input_enabled: cdktn.booleanToTerraform(struct!.inputEnabled),
    name: cdktn.stringToTerraform(struct!.name),
    output_action: cdktn.stringToTerraform(struct!.outputAction),
    output_enabled: cdktn.booleanToTerraform(struct!.outputEnabled),
    pattern: cdktn.stringToTerraform(struct!.pattern),
  }
}


export function bedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigToHclTerraform(struct?: BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig | cdktn.IResolvable): any {
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
    input_action: {
      value: cdktn.stringToHclTerraform(struct!.inputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.inputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_action: {
      value: cdktn.stringToHclTerraform(struct!.outputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.outputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig | cdktn.IResolvable | undefined {
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
    if (this._inputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputAction = this._inputAction;
    }
    if (this._inputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputEnabled = this._inputEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._outputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputAction = this._outputAction;
    }
    if (this._outputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputEnabled = this._outputEnabled;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._inputAction = undefined;
      this._inputEnabled = undefined;
      this._name = undefined;
      this._outputAction = undefined;
      this._outputEnabled = undefined;
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
      this._inputAction = value.inputAction;
      this._inputEnabled = value.inputEnabled;
      this._name = value.name;
      this._outputAction = value.outputAction;
      this._outputEnabled = value.outputEnabled;
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

  // input_action - computed: true, optional: true, required: false
  private _inputAction?: string; 
  public get inputAction() {
    return this.getStringAttribute('input_action');
  }
  public set inputAction(value: string) {
    this._inputAction = value;
  }
  public resetInputAction() {
    this._inputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputActionInput() {
    return this._inputAction;
  }

  // input_enabled - computed: true, optional: true, required: false
  private _inputEnabled?: boolean | cdktn.IResolvable; 
  public get inputEnabled() {
    return this.getBooleanAttribute('input_enabled');
  }
  public set inputEnabled(value: boolean | cdktn.IResolvable) {
    this._inputEnabled = value;
  }
  public resetInputEnabled() {
    this._inputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputEnabledInput() {
    return this._inputEnabled;
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

  // output_action - computed: true, optional: true, required: false
  private _outputAction?: string; 
  public get outputAction() {
    return this.getStringAttribute('output_action');
  }
  public set outputAction(value: string) {
    this._outputAction = value;
  }
  public resetOutputAction() {
    this._outputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputActionInput() {
    return this._outputAction;
  }

  // output_enabled - computed: true, optional: true, required: false
  private _outputEnabled?: boolean | cdktn.IResolvable; 
  public get outputEnabled() {
    return this.getBooleanAttribute('output_enabled');
  }
  public set outputEnabled(value: boolean | cdktn.IResolvable) {
    this._outputEnabled = value;
  }
  public resetOutputEnabled() {
    this._outputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputEnabledInput() {
    return this._outputEnabled;
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

export class BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference {
    return new BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailSensitiveInformationPolicyConfig {
  /**
  * List of entities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#pii_entities_config BedrockGuardrail#pii_entities_config}
  */
  readonly piiEntitiesConfig?: BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig[] | cdktn.IResolvable;
  /**
  * List of regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#regexes_config BedrockGuardrail#regexes_config}
  */
  readonly regexesConfig?: BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig[] | cdktn.IResolvable;
}

export function bedrockGuardrailSensitiveInformationPolicyConfigToTerraform(struct?: BedrockGuardrailSensitiveInformationPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pii_entities_config: cdktn.listMapper(bedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigToTerraform, false)(struct!.piiEntitiesConfig),
    regexes_config: cdktn.listMapper(bedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigToTerraform, false)(struct!.regexesConfig),
  }
}


export function bedrockGuardrailSensitiveInformationPolicyConfigToHclTerraform(struct?: BedrockGuardrailSensitiveInformationPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pii_entities_config: {
      value: cdktn.listMapperHcl(bedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigToHclTerraform, false)(struct!.piiEntitiesConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList",
    },
    regexes_config: {
      value: cdktn.listMapperHcl(bedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigToHclTerraform, false)(struct!.regexesConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockGuardrailSensitiveInformationPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockGuardrailSensitiveInformationPolicyConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockGuardrailSensitiveInformationPolicyConfig | cdktn.IResolvable | undefined) {
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
  private _piiEntitiesConfig = new BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList(this, "pii_entities_config", false);
  public get piiEntitiesConfig() {
    return this._piiEntitiesConfig;
  }
  public putPiiEntitiesConfig(value: BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig[] | cdktn.IResolvable) {
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
  private _regexesConfig = new BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList(this, "regexes_config", false);
  public get regexesConfig() {
    return this._regexesConfig;
  }
  public putRegexesConfig(value: BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig[] | cdktn.IResolvable) {
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
export interface BedrockGuardrailTags {
  /**
  * Tag Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#key BedrockGuardrail#key}
  */
  readonly key?: string;
  /**
  * Tag Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#value BedrockGuardrail#value}
  */
  readonly value?: string;
}

export function bedrockGuardrailTagsToTerraform(struct?: BedrockGuardrailTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function bedrockGuardrailTagsToHclTerraform(struct?: BedrockGuardrailTags | cdktn.IResolvable): any {
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

export class BedrockGuardrailTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockGuardrailTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockGuardrailTags | cdktn.IResolvable | undefined) {
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

export class BedrockGuardrailTagsList extends cdktn.ComplexList {
  public internalValue? : BedrockGuardrailTags[] | cdktn.IResolvable

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
  public get(index: number): BedrockGuardrailTagsOutputReference {
    return new BedrockGuardrailTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailTopicPolicyConfigTopicsConfig {
  /**
  * Definition of topic in topic policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#definition BedrockGuardrail#definition}
  */
  readonly definition?: string;
  /**
  * List of text examples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#examples BedrockGuardrail#examples}
  */
  readonly examples?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#input_action BedrockGuardrail#input_action}
  */
  readonly inputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#input_enabled BedrockGuardrail#input_enabled}
  */
  readonly inputEnabled?: boolean | cdktn.IResolvable;
  /**
  * Name of topic in topic policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#name BedrockGuardrail#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#output_action BedrockGuardrail#output_action}
  */
  readonly outputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#output_enabled BedrockGuardrail#output_enabled}
  */
  readonly outputEnabled?: boolean | cdktn.IResolvable;
  /**
  * Type of topic in a policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}
  */
  readonly type?: string;
}

export function bedrockGuardrailTopicPolicyConfigTopicsConfigToTerraform(struct?: BedrockGuardrailTopicPolicyConfigTopicsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    definition: cdktn.stringToTerraform(struct!.definition),
    examples: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.examples),
    input_action: cdktn.stringToTerraform(struct!.inputAction),
    input_enabled: cdktn.booleanToTerraform(struct!.inputEnabled),
    name: cdktn.stringToTerraform(struct!.name),
    output_action: cdktn.stringToTerraform(struct!.outputAction),
    output_enabled: cdktn.booleanToTerraform(struct!.outputEnabled),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockGuardrailTopicPolicyConfigTopicsConfigToHclTerraform(struct?: BedrockGuardrailTopicPolicyConfigTopicsConfig | cdktn.IResolvable): any {
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
    input_action: {
      value: cdktn.stringToHclTerraform(struct!.inputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.inputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_action: {
      value: cdktn.stringToHclTerraform(struct!.outputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.outputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockGuardrailTopicPolicyConfigTopicsConfig | cdktn.IResolvable | undefined {
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
    if (this._inputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputAction = this._inputAction;
    }
    if (this._inputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputEnabled = this._inputEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._outputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputAction = this._outputAction;
    }
    if (this._outputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputEnabled = this._outputEnabled;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailTopicPolicyConfigTopicsConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._examples = undefined;
      this._inputAction = undefined;
      this._inputEnabled = undefined;
      this._name = undefined;
      this._outputAction = undefined;
      this._outputEnabled = undefined;
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
      this._inputAction = value.inputAction;
      this._inputEnabled = value.inputEnabled;
      this._name = value.name;
      this._outputAction = value.outputAction;
      this._outputEnabled = value.outputEnabled;
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

  // input_action - computed: true, optional: true, required: false
  private _inputAction?: string; 
  public get inputAction() {
    return this.getStringAttribute('input_action');
  }
  public set inputAction(value: string) {
    this._inputAction = value;
  }
  public resetInputAction() {
    this._inputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputActionInput() {
    return this._inputAction;
  }

  // input_enabled - computed: true, optional: true, required: false
  private _inputEnabled?: boolean | cdktn.IResolvable; 
  public get inputEnabled() {
    return this.getBooleanAttribute('input_enabled');
  }
  public set inputEnabled(value: boolean | cdktn.IResolvable) {
    this._inputEnabled = value;
  }
  public resetInputEnabled() {
    this._inputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputEnabledInput() {
    return this._inputEnabled;
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

  // output_action - computed: true, optional: true, required: false
  private _outputAction?: string; 
  public get outputAction() {
    return this.getStringAttribute('output_action');
  }
  public set outputAction(value: string) {
    this._outputAction = value;
  }
  public resetOutputAction() {
    this._outputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputActionInput() {
    return this._outputAction;
  }

  // output_enabled - computed: true, optional: true, required: false
  private _outputEnabled?: boolean | cdktn.IResolvable; 
  public get outputEnabled() {
    return this.getBooleanAttribute('output_enabled');
  }
  public set outputEnabled(value: boolean | cdktn.IResolvable) {
    this._outputEnabled = value;
  }
  public resetOutputEnabled() {
    this._outputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputEnabledInput() {
    return this._outputEnabled;
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

export class BedrockGuardrailTopicPolicyConfigTopicsConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockGuardrailTopicPolicyConfigTopicsConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference {
    return new BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailTopicPolicyConfigTopicsTierConfig {
  /**
  * Tier name for tier configuration in topic policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#tier_name BedrockGuardrail#tier_name}
  */
  readonly tierName?: string;
}

export function bedrockGuardrailTopicPolicyConfigTopicsTierConfigToTerraform(struct?: BedrockGuardrailTopicPolicyConfigTopicsTierConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tier_name: cdktn.stringToTerraform(struct!.tierName),
  }
}


export function bedrockGuardrailTopicPolicyConfigTopicsTierConfigToHclTerraform(struct?: BedrockGuardrailTopicPolicyConfigTopicsTierConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tier_name: {
      value: cdktn.stringToHclTerraform(struct!.tierName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockGuardrailTopicPolicyConfigTopicsTierConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tierName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tierName = this._tierName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailTopicPolicyConfigTopicsTierConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tierName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tierName = value.tierName;
    }
  }

  // tier_name - computed: true, optional: true, required: false
  private _tierName?: string; 
  public get tierName() {
    return this.getStringAttribute('tier_name');
  }
  public set tierName(value: string) {
    this._tierName = value;
  }
  public resetTierName() {
    this._tierName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierNameInput() {
    return this._tierName;
  }
}
export interface BedrockGuardrailTopicPolicyConfig {
  /**
  * List of topic configs in topic policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#topics_config BedrockGuardrail#topics_config}
  */
  readonly topicsConfig?: BedrockGuardrailTopicPolicyConfigTopicsConfig[] | cdktn.IResolvable;
  /**
  * Guardrail tier config for topic policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#topics_tier_config BedrockGuardrail#topics_tier_config}
  */
  readonly topicsTierConfig?: BedrockGuardrailTopicPolicyConfigTopicsTierConfig;
}

export function bedrockGuardrailTopicPolicyConfigToTerraform(struct?: BedrockGuardrailTopicPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    topics_config: cdktn.listMapper(bedrockGuardrailTopicPolicyConfigTopicsConfigToTerraform, false)(struct!.topicsConfig),
    topics_tier_config: bedrockGuardrailTopicPolicyConfigTopicsTierConfigToTerraform(struct!.topicsTierConfig),
  }
}


export function bedrockGuardrailTopicPolicyConfigToHclTerraform(struct?: BedrockGuardrailTopicPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    topics_config: {
      value: cdktn.listMapperHcl(bedrockGuardrailTopicPolicyConfigTopicsConfigToHclTerraform, false)(struct!.topicsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockGuardrailTopicPolicyConfigTopicsConfigList",
    },
    topics_tier_config: {
      value: bedrockGuardrailTopicPolicyConfigTopicsTierConfigToHclTerraform(struct!.topicsTierConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockGuardrailTopicPolicyConfigTopicsTierConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockGuardrailTopicPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockGuardrailTopicPolicyConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topicsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicsConfig = this._topicsConfig?.internalValue;
    }
    if (this._topicsTierConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicsTierConfig = this._topicsTierConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailTopicPolicyConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._topicsConfig.internalValue = undefined;
      this._topicsTierConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._topicsConfig.internalValue = value.topicsConfig;
      this._topicsTierConfig.internalValue = value.topicsTierConfig;
    }
  }

  // topics_config - computed: true, optional: true, required: false
  private _topicsConfig = new BedrockGuardrailTopicPolicyConfigTopicsConfigList(this, "topics_config", false);
  public get topicsConfig() {
    return this._topicsConfig;
  }
  public putTopicsConfig(value: BedrockGuardrailTopicPolicyConfigTopicsConfig[] | cdktn.IResolvable) {
    this._topicsConfig.internalValue = value;
  }
  public resetTopicsConfig() {
    this._topicsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsConfigInput() {
    return this._topicsConfig.internalValue;
  }

  // topics_tier_config - computed: true, optional: true, required: false
  private _topicsTierConfig = new BedrockGuardrailTopicPolicyConfigTopicsTierConfigOutputReference(this, "topics_tier_config");
  public get topicsTierConfig() {
    return this._topicsTierConfig;
  }
  public putTopicsTierConfig(value: BedrockGuardrailTopicPolicyConfigTopicsTierConfig) {
    this._topicsTierConfig.internalValue = value;
  }
  public resetTopicsTierConfig() {
    this._topicsTierConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsTierConfigInput() {
    return this._topicsTierConfig.internalValue;
  }
}
export interface BedrockGuardrailWordPolicyConfigManagedWordListsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#input_action BedrockGuardrail#input_action}
  */
  readonly inputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#input_enabled BedrockGuardrail#input_enabled}
  */
  readonly inputEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#output_action BedrockGuardrail#output_action}
  */
  readonly outputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#output_enabled BedrockGuardrail#output_enabled}
  */
  readonly outputEnabled?: boolean | cdktn.IResolvable;
  /**
  * Options for managed words.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}
  */
  readonly type?: string;
}

export function bedrockGuardrailWordPolicyConfigManagedWordListsConfigToTerraform(struct?: BedrockGuardrailWordPolicyConfigManagedWordListsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input_action: cdktn.stringToTerraform(struct!.inputAction),
    input_enabled: cdktn.booleanToTerraform(struct!.inputEnabled),
    output_action: cdktn.stringToTerraform(struct!.outputAction),
    output_enabled: cdktn.booleanToTerraform(struct!.outputEnabled),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockGuardrailWordPolicyConfigManagedWordListsConfigToHclTerraform(struct?: BedrockGuardrailWordPolicyConfigManagedWordListsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input_action: {
      value: cdktn.stringToHclTerraform(struct!.inputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.inputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    output_action: {
      value: cdktn.stringToHclTerraform(struct!.outputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.outputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockGuardrailWordPolicyConfigManagedWordListsConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputAction = this._inputAction;
    }
    if (this._inputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputEnabled = this._inputEnabled;
    }
    if (this._outputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputAction = this._outputAction;
    }
    if (this._outputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputEnabled = this._outputEnabled;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailWordPolicyConfigManagedWordListsConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputAction = undefined;
      this._inputEnabled = undefined;
      this._outputAction = undefined;
      this._outputEnabled = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputAction = value.inputAction;
      this._inputEnabled = value.inputEnabled;
      this._outputAction = value.outputAction;
      this._outputEnabled = value.outputEnabled;
      this._type = value.type;
    }
  }

  // input_action - computed: true, optional: true, required: false
  private _inputAction?: string; 
  public get inputAction() {
    return this.getStringAttribute('input_action');
  }
  public set inputAction(value: string) {
    this._inputAction = value;
  }
  public resetInputAction() {
    this._inputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputActionInput() {
    return this._inputAction;
  }

  // input_enabled - computed: true, optional: true, required: false
  private _inputEnabled?: boolean | cdktn.IResolvable; 
  public get inputEnabled() {
    return this.getBooleanAttribute('input_enabled');
  }
  public set inputEnabled(value: boolean | cdktn.IResolvable) {
    this._inputEnabled = value;
  }
  public resetInputEnabled() {
    this._inputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputEnabledInput() {
    return this._inputEnabled;
  }

  // output_action - computed: true, optional: true, required: false
  private _outputAction?: string; 
  public get outputAction() {
    return this.getStringAttribute('output_action');
  }
  public set outputAction(value: string) {
    this._outputAction = value;
  }
  public resetOutputAction() {
    this._outputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputActionInput() {
    return this._outputAction;
  }

  // output_enabled - computed: true, optional: true, required: false
  private _outputEnabled?: boolean | cdktn.IResolvable; 
  public get outputEnabled() {
    return this.getBooleanAttribute('output_enabled');
  }
  public set outputEnabled(value: boolean | cdktn.IResolvable) {
    this._outputEnabled = value;
  }
  public resetOutputEnabled() {
    this._outputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputEnabledInput() {
    return this._outputEnabled;
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

export class BedrockGuardrailWordPolicyConfigManagedWordListsConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockGuardrailWordPolicyConfigManagedWordListsConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference {
    return new BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailWordPolicyConfigWordsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#input_action BedrockGuardrail#input_action}
  */
  readonly inputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#input_enabled BedrockGuardrail#input_enabled}
  */
  readonly inputEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#output_action BedrockGuardrail#output_action}
  */
  readonly outputAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#output_enabled BedrockGuardrail#output_enabled}
  */
  readonly outputEnabled?: boolean | cdktn.IResolvable;
  /**
  * The custom word text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#text BedrockGuardrail#text}
  */
  readonly text?: string;
}

export function bedrockGuardrailWordPolicyConfigWordsConfigToTerraform(struct?: BedrockGuardrailWordPolicyConfigWordsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input_action: cdktn.stringToTerraform(struct!.inputAction),
    input_enabled: cdktn.booleanToTerraform(struct!.inputEnabled),
    output_action: cdktn.stringToTerraform(struct!.outputAction),
    output_enabled: cdktn.booleanToTerraform(struct!.outputEnabled),
    text: cdktn.stringToTerraform(struct!.text),
  }
}


export function bedrockGuardrailWordPolicyConfigWordsConfigToHclTerraform(struct?: BedrockGuardrailWordPolicyConfigWordsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input_action: {
      value: cdktn.stringToHclTerraform(struct!.inputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.inputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    output_action: {
      value: cdktn.stringToHclTerraform(struct!.outputAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.outputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class BedrockGuardrailWordPolicyConfigWordsConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockGuardrailWordPolicyConfigWordsConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputAction = this._inputAction;
    }
    if (this._inputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputEnabled = this._inputEnabled;
    }
    if (this._outputAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputAction = this._outputAction;
    }
    if (this._outputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputEnabled = this._outputEnabled;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailWordPolicyConfigWordsConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputAction = undefined;
      this._inputEnabled = undefined;
      this._outputAction = undefined;
      this._outputEnabled = undefined;
      this._text = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputAction = value.inputAction;
      this._inputEnabled = value.inputEnabled;
      this._outputAction = value.outputAction;
      this._outputEnabled = value.outputEnabled;
      this._text = value.text;
    }
  }

  // input_action - computed: true, optional: true, required: false
  private _inputAction?: string; 
  public get inputAction() {
    return this.getStringAttribute('input_action');
  }
  public set inputAction(value: string) {
    this._inputAction = value;
  }
  public resetInputAction() {
    this._inputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputActionInput() {
    return this._inputAction;
  }

  // input_enabled - computed: true, optional: true, required: false
  private _inputEnabled?: boolean | cdktn.IResolvable; 
  public get inputEnabled() {
    return this.getBooleanAttribute('input_enabled');
  }
  public set inputEnabled(value: boolean | cdktn.IResolvable) {
    this._inputEnabled = value;
  }
  public resetInputEnabled() {
    this._inputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputEnabledInput() {
    return this._inputEnabled;
  }

  // output_action - computed: true, optional: true, required: false
  private _outputAction?: string; 
  public get outputAction() {
    return this.getStringAttribute('output_action');
  }
  public set outputAction(value: string) {
    this._outputAction = value;
  }
  public resetOutputAction() {
    this._outputAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputActionInput() {
    return this._outputAction;
  }

  // output_enabled - computed: true, optional: true, required: false
  private _outputEnabled?: boolean | cdktn.IResolvable; 
  public get outputEnabled() {
    return this.getBooleanAttribute('output_enabled');
  }
  public set outputEnabled(value: boolean | cdktn.IResolvable) {
    this._outputEnabled = value;
  }
  public resetOutputEnabled() {
    this._outputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputEnabledInput() {
    return this._outputEnabled;
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

export class BedrockGuardrailWordPolicyConfigWordsConfigList extends cdktn.ComplexList {
  public internalValue? : BedrockGuardrailWordPolicyConfigWordsConfig[] | cdktn.IResolvable

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
  public get(index: number): BedrockGuardrailWordPolicyConfigWordsConfigOutputReference {
    return new BedrockGuardrailWordPolicyConfigWordsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailWordPolicyConfig {
  /**
  * A config for the list of managed words.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#managed_word_lists_config BedrockGuardrail#managed_word_lists_config}
  */
  readonly managedWordListsConfig?: BedrockGuardrailWordPolicyConfigManagedWordListsConfig[] | cdktn.IResolvable;
  /**
  * List of custom word configs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#words_config BedrockGuardrail#words_config}
  */
  readonly wordsConfig?: BedrockGuardrailWordPolicyConfigWordsConfig[] | cdktn.IResolvable;
}

export function bedrockGuardrailWordPolicyConfigToTerraform(struct?: BedrockGuardrailWordPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    managed_word_lists_config: cdktn.listMapper(bedrockGuardrailWordPolicyConfigManagedWordListsConfigToTerraform, false)(struct!.managedWordListsConfig),
    words_config: cdktn.listMapper(bedrockGuardrailWordPolicyConfigWordsConfigToTerraform, false)(struct!.wordsConfig),
  }
}


export function bedrockGuardrailWordPolicyConfigToHclTerraform(struct?: BedrockGuardrailWordPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    managed_word_lists_config: {
      value: cdktn.listMapperHcl(bedrockGuardrailWordPolicyConfigManagedWordListsConfigToHclTerraform, false)(struct!.managedWordListsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockGuardrailWordPolicyConfigManagedWordListsConfigList",
    },
    words_config: {
      value: cdktn.listMapperHcl(bedrockGuardrailWordPolicyConfigWordsConfigToHclTerraform, false)(struct!.wordsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockGuardrailWordPolicyConfigWordsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockGuardrailWordPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockGuardrailWordPolicyConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockGuardrailWordPolicyConfig | cdktn.IResolvable | undefined) {
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
  private _managedWordListsConfig = new BedrockGuardrailWordPolicyConfigManagedWordListsConfigList(this, "managed_word_lists_config", false);
  public get managedWordListsConfig() {
    return this._managedWordListsConfig;
  }
  public putManagedWordListsConfig(value: BedrockGuardrailWordPolicyConfigManagedWordListsConfig[] | cdktn.IResolvable) {
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
  private _wordsConfig = new BedrockGuardrailWordPolicyConfigWordsConfigList(this, "words_config", false);
  public get wordsConfig() {
    return this._wordsConfig;
  }
  public putWordsConfig(value: BedrockGuardrailWordPolicyConfigWordsConfig[] | cdktn.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail awscc_bedrock_guardrail}
*/
export class BedrockGuardrail extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bedrock_guardrail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockGuardrail resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockGuardrail to import
  * @param importFromId The id of the existing BedrockGuardrail that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockGuardrail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrock_guardrail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrock_guardrail awscc_bedrock_guardrail} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockGuardrailConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockGuardrailConfig) {
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
    this._automatedReasoningPolicyConfig.internalValue = config.automatedReasoningPolicyConfig;
    this._blockedInputMessaging = config.blockedInputMessaging;
    this._blockedOutputsMessaging = config.blockedOutputsMessaging;
    this._contentPolicyConfig.internalValue = config.contentPolicyConfig;
    this._contextualGroundingPolicyConfig.internalValue = config.contextualGroundingPolicyConfig;
    this._crossRegionConfig.internalValue = config.crossRegionConfig;
    this._description = config.description;
    this._kmsKeyArn = config.kmsKeyArn;
    this._name = config.name;
    this._sensitiveInformationPolicyConfig.internalValue = config.sensitiveInformationPolicyConfig;
    this._tags.internalValue = config.tags;
    this._topicPolicyConfig.internalValue = config.topicPolicyConfig;
    this._wordPolicyConfig.internalValue = config.wordPolicyConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automated_reasoning_policy_config - computed: true, optional: true, required: false
  private _automatedReasoningPolicyConfig = new BedrockGuardrailAutomatedReasoningPolicyConfigOutputReference(this, "automated_reasoning_policy_config");
  public get automatedReasoningPolicyConfig() {
    return this._automatedReasoningPolicyConfig;
  }
  public putAutomatedReasoningPolicyConfig(value: BedrockGuardrailAutomatedReasoningPolicyConfig) {
    this._automatedReasoningPolicyConfig.internalValue = value;
  }
  public resetAutomatedReasoningPolicyConfig() {
    this._automatedReasoningPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedReasoningPolicyConfigInput() {
    return this._automatedReasoningPolicyConfig.internalValue;
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
  private _contentPolicyConfig = new BedrockGuardrailContentPolicyConfigOutputReference(this, "content_policy_config");
  public get contentPolicyConfig() {
    return this._contentPolicyConfig;
  }
  public putContentPolicyConfig(value: BedrockGuardrailContentPolicyConfig) {
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
  private _contextualGroundingPolicyConfig = new BedrockGuardrailContextualGroundingPolicyConfigOutputReference(this, "contextual_grounding_policy_config");
  public get contextualGroundingPolicyConfig() {
    return this._contextualGroundingPolicyConfig;
  }
  public putContextualGroundingPolicyConfig(value: BedrockGuardrailContextualGroundingPolicyConfig) {
    this._contextualGroundingPolicyConfig.internalValue = value;
  }
  public resetContextualGroundingPolicyConfig() {
    this._contextualGroundingPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextualGroundingPolicyConfigInput() {
    return this._contextualGroundingPolicyConfig.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // cross_region_config - computed: true, optional: true, required: false
  private _crossRegionConfig = new BedrockGuardrailCrossRegionConfigOutputReference(this, "cross_region_config");
  public get crossRegionConfig() {
    return this._crossRegionConfig;
  }
  public putCrossRegionConfig(value: BedrockGuardrailCrossRegionConfig) {
    this._crossRegionConfig.internalValue = value;
  }
  public resetCrossRegionConfig() {
    this._crossRegionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRegionConfigInput() {
    return this._crossRegionConfig.internalValue;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_arn - computed: true, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // sensitive_information_policy_config - computed: true, optional: true, required: false
  private _sensitiveInformationPolicyConfig = new BedrockGuardrailSensitiveInformationPolicyConfigOutputReference(this, "sensitive_information_policy_config");
  public get sensitiveInformationPolicyConfig() {
    return this._sensitiveInformationPolicyConfig;
  }
  public putSensitiveInformationPolicyConfig(value: BedrockGuardrailSensitiveInformationPolicyConfig) {
    this._sensitiveInformationPolicyConfig.internalValue = value;
  }
  public resetSensitiveInformationPolicyConfig() {
    this._sensitiveInformationPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInformationPolicyConfigInput() {
    return this._sensitiveInformationPolicyConfig.internalValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reasons - computed: true, optional: false, required: false
  public get statusReasons() {
    return this.getListAttribute('status_reasons');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new BedrockGuardrailTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: BedrockGuardrailTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // topic_policy_config - computed: true, optional: true, required: false
  private _topicPolicyConfig = new BedrockGuardrailTopicPolicyConfigOutputReference(this, "topic_policy_config");
  public get topicPolicyConfig() {
    return this._topicPolicyConfig;
  }
  public putTopicPolicyConfig(value: BedrockGuardrailTopicPolicyConfig) {
    this._topicPolicyConfig.internalValue = value;
  }
  public resetTopicPolicyConfig() {
    this._topicPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicPolicyConfigInput() {
    return this._topicPolicyConfig.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // word_policy_config - computed: true, optional: true, required: false
  private _wordPolicyConfig = new BedrockGuardrailWordPolicyConfigOutputReference(this, "word_policy_config");
  public get wordPolicyConfig() {
    return this._wordPolicyConfig;
  }
  public putWordPolicyConfig(value: BedrockGuardrailWordPolicyConfig) {
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
      automated_reasoning_policy_config: bedrockGuardrailAutomatedReasoningPolicyConfigToTerraform(this._automatedReasoningPolicyConfig.internalValue),
      blocked_input_messaging: cdktn.stringToTerraform(this._blockedInputMessaging),
      blocked_outputs_messaging: cdktn.stringToTerraform(this._blockedOutputsMessaging),
      content_policy_config: bedrockGuardrailContentPolicyConfigToTerraform(this._contentPolicyConfig.internalValue),
      contextual_grounding_policy_config: bedrockGuardrailContextualGroundingPolicyConfigToTerraform(this._contextualGroundingPolicyConfig.internalValue),
      cross_region_config: bedrockGuardrailCrossRegionConfigToTerraform(this._crossRegionConfig.internalValue),
      description: cdktn.stringToTerraform(this._description),
      kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
      name: cdktn.stringToTerraform(this._name),
      sensitive_information_policy_config: bedrockGuardrailSensitiveInformationPolicyConfigToTerraform(this._sensitiveInformationPolicyConfig.internalValue),
      tags: cdktn.listMapper(bedrockGuardrailTagsToTerraform, false)(this._tags.internalValue),
      topic_policy_config: bedrockGuardrailTopicPolicyConfigToTerraform(this._topicPolicyConfig.internalValue),
      word_policy_config: bedrockGuardrailWordPolicyConfigToTerraform(this._wordPolicyConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automated_reasoning_policy_config: {
        value: bedrockGuardrailAutomatedReasoningPolicyConfigToHclTerraform(this._automatedReasoningPolicyConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockGuardrailAutomatedReasoningPolicyConfig",
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
        value: bedrockGuardrailContentPolicyConfigToHclTerraform(this._contentPolicyConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockGuardrailContentPolicyConfig",
      },
      contextual_grounding_policy_config: {
        value: bedrockGuardrailContextualGroundingPolicyConfigToHclTerraform(this._contextualGroundingPolicyConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockGuardrailContextualGroundingPolicyConfig",
      },
      cross_region_config: {
        value: bedrockGuardrailCrossRegionConfigToHclTerraform(this._crossRegionConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockGuardrailCrossRegionConfig",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_arn: {
        value: cdktn.stringToHclTerraform(this._kmsKeyArn),
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
        value: bedrockGuardrailSensitiveInformationPolicyConfigToHclTerraform(this._sensitiveInformationPolicyConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockGuardrailSensitiveInformationPolicyConfig",
      },
      tags: {
        value: cdktn.listMapperHcl(bedrockGuardrailTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockGuardrailTagsList",
      },
      topic_policy_config: {
        value: bedrockGuardrailTopicPolicyConfigToHclTerraform(this._topicPolicyConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockGuardrailTopicPolicyConfig",
      },
      word_policy_config: {
        value: bedrockGuardrailWordPolicyConfigToHclTerraform(this._wordPolicyConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockGuardrailWordPolicyConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
