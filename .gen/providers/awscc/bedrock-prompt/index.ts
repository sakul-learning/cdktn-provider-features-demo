// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockPromptConfig extends cdktn.TerraformMetaArguments {
  /**
  * A KMS key ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#customer_encryption_key_arn BedrockPrompt#customer_encryption_key_arn}
  */
  readonly customerEncryptionKeyArn?: string;
  /**
  * Name for a variant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#default_variant BedrockPrompt#default_variant}
  */
  readonly defaultVariant?: string;
  /**
  * Name for a prompt resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#description BedrockPrompt#description}
  */
  readonly description?: string;
  /**
  * Name for a prompt resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}
  */
  readonly name: string;
  /**
  * A map of tag keys and values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#tags BedrockPrompt#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * List of prompt variants
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#variants BedrockPrompt#variants}
  */
  readonly variants?: BedrockPromptVariants[] | cdktn.IResolvable;
}
export interface BedrockPromptVariantsGenAiResourceAgent {
  /**
  * Arn representation of the Agent Alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#agent_identifier BedrockPrompt#agent_identifier}
  */
  readonly agentIdentifier?: string;
}

export function bedrockPromptVariantsGenAiResourceAgentToTerraform(struct?: BedrockPromptVariantsGenAiResourceAgent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agent_identifier: cdktn.stringToTerraform(struct!.agentIdentifier),
  }
}


export function bedrockPromptVariantsGenAiResourceAgentToHclTerraform(struct?: BedrockPromptVariantsGenAiResourceAgent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agent_identifier: {
      value: cdktn.stringToHclTerraform(struct!.agentIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockPromptVariantsGenAiResourceAgentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVariantsGenAiResourceAgent | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentIdentifier = this._agentIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVariantsGenAiResourceAgent | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentIdentifier = value.agentIdentifier;
    }
  }

  // agent_identifier - computed: true, optional: true, required: false
  private _agentIdentifier?: string; 
  public get agentIdentifier() {
    return this.getStringAttribute('agent_identifier');
  }
  public set agentIdentifier(value: string) {
    this._agentIdentifier = value;
  }
  public resetAgentIdentifier() {
    this._agentIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdentifierInput() {
    return this._agentIdentifier;
  }
}
export interface BedrockPromptVariantsGenAiResource {
  /**
  * Target Agent to invoke with Prompt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#agent BedrockPrompt#agent}
  */
  readonly agent?: BedrockPromptVariantsGenAiResourceAgent;
}

export function bedrockPromptVariantsGenAiResourceToTerraform(struct?: BedrockPromptVariantsGenAiResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agent: bedrockPromptVariantsGenAiResourceAgentToTerraform(struct!.agent),
  }
}


export function bedrockPromptVariantsGenAiResourceToHclTerraform(struct?: BedrockPromptVariantsGenAiResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agent: {
      value: bedrockPromptVariantsGenAiResourceAgentToHclTerraform(struct!.agent),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockPromptVariantsGenAiResourceAgent",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockPromptVariantsGenAiResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVariantsGenAiResource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVariantsGenAiResource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agent.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agent.internalValue = value.agent;
    }
  }

  // agent - computed: true, optional: true, required: false
  private _agent = new BedrockPromptVariantsGenAiResourceAgentOutputReference(this, "agent");
  public get agent() {
    return this._agent;
  }
  public putAgent(value: BedrockPromptVariantsGenAiResourceAgent) {
    this._agent.internalValue = value;
  }
  public resetAgent() {
    this._agent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent.internalValue;
  }
}
export interface BedrockPromptVariantsInferenceConfigurationText {
  /**
  * Maximum length of output
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#max_tokens BedrockPrompt#max_tokens}
  */
  readonly maxTokens?: number;
  /**
  * List of stop sequences
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#stop_sequences BedrockPrompt#stop_sequences}
  */
  readonly stopSequences?: string[];
  /**
  * Controls randomness, higher values increase diversity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#temperature BedrockPrompt#temperature}
  */
  readonly temperature?: number;
  /**
  * Cumulative probability cutoff for token selection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#top_p BedrockPrompt#top_p}
  */
  readonly topP?: number;
}

export function bedrockPromptVariantsInferenceConfigurationTextToTerraform(struct?: BedrockPromptVariantsInferenceConfigurationText | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_tokens: cdktn.numberToTerraform(struct!.maxTokens),
    stop_sequences: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stopSequences),
    temperature: cdktn.numberToTerraform(struct!.temperature),
    top_p: cdktn.numberToTerraform(struct!.topP),
  }
}


export function bedrockPromptVariantsInferenceConfigurationTextToHclTerraform(struct?: BedrockPromptVariantsInferenceConfigurationText | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_tokens: {
      value: cdktn.numberToHclTerraform(struct!.maxTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stop_sequences: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stopSequences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    temperature: {
      value: cdktn.numberToHclTerraform(struct!.temperature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top_p: {
      value: cdktn.numberToHclTerraform(struct!.topP),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockPromptVariantsInferenceConfigurationTextOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVariantsInferenceConfigurationText | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTokens = this._maxTokens;
    }
    if (this._stopSequences !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopSequences = this._stopSequences;
    }
    if (this._temperature !== undefined) {
      hasAnyValues = true;
      internalValueResult.temperature = this._temperature;
    }
    if (this._topP !== undefined) {
      hasAnyValues = true;
      internalValueResult.topP = this._topP;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVariantsInferenceConfigurationText | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxTokens = undefined;
      this._stopSequences = undefined;
      this._temperature = undefined;
      this._topP = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxTokens = value.maxTokens;
      this._stopSequences = value.stopSequences;
      this._temperature = value.temperature;
      this._topP = value.topP;
    }
  }

  // max_tokens - computed: true, optional: true, required: false
  private _maxTokens?: number; 
  public get maxTokens() {
    return this.getNumberAttribute('max_tokens');
  }
  public set maxTokens(value: number) {
    this._maxTokens = value;
  }
  public resetMaxTokens() {
    this._maxTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTokensInput() {
    return this._maxTokens;
  }

  // stop_sequences - computed: true, optional: true, required: false
  private _stopSequences?: string[]; 
  public get stopSequences() {
    return this.getListAttribute('stop_sequences');
  }
  public set stopSequences(value: string[]) {
    this._stopSequences = value;
  }
  public resetStopSequences() {
    this._stopSequences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopSequencesInput() {
    return this._stopSequences;
  }

  // temperature - computed: true, optional: true, required: false
  private _temperature?: number; 
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }
  public set temperature(value: number) {
    this._temperature = value;
  }
  public resetTemperature() {
    this._temperature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temperatureInput() {
    return this._temperature;
  }

  // top_p - computed: true, optional: true, required: false
  private _topP?: number; 
  public get topP() {
    return this.getNumberAttribute('top_p');
  }
  public set topP(value: number) {
    this._topP = value;
  }
  public resetTopP() {
    this._topP = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topPInput() {
    return this._topP;
  }
}
export interface BedrockPromptVariantsInferenceConfiguration {
  /**
  * Prompt model inference configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#text BedrockPrompt#text}
  */
  readonly text?: BedrockPromptVariantsInferenceConfigurationText;
}

export function bedrockPromptVariantsInferenceConfigurationToTerraform(struct?: BedrockPromptVariantsInferenceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: bedrockPromptVariantsInferenceConfigurationTextToTerraform(struct!.text),
  }
}


export function bedrockPromptVariantsInferenceConfigurationToHclTerraform(struct?: BedrockPromptVariantsInferenceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    text: {
      value: bedrockPromptVariantsInferenceConfigurationTextToHclTerraform(struct!.text),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockPromptVariantsInferenceConfigurationText",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockPromptVariantsInferenceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVariantsInferenceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVariantsInferenceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text.internalValue = value.text;
    }
  }

  // text - computed: true, optional: true, required: false
  private _text = new BedrockPromptVariantsInferenceConfigurationTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
  public putText(value: BedrockPromptVariantsInferenceConfigurationText) {
    this._text.internalValue = value;
  }
  public resetText() {
    this._text.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text.internalValue;
  }
}
export interface BedrockPromptVariantsMetadata {
  /**
  * The key of a metadata tag for a prompt variant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#key BedrockPrompt#key}
  */
  readonly key?: string;
  /**
  * The value of a metadata tag for a prompt variant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#value BedrockPrompt#value}
  */
  readonly value?: string;
}

export function bedrockPromptVariantsMetadataToTerraform(struct?: BedrockPromptVariantsMetadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function bedrockPromptVariantsMetadataToHclTerraform(struct?: BedrockPromptVariantsMetadata | cdktn.IResolvable): any {
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

export class BedrockPromptVariantsMetadataOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockPromptVariantsMetadata | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockPromptVariantsMetadata | cdktn.IResolvable | undefined) {
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

export class BedrockPromptVariantsMetadataList extends cdktn.ComplexList {
  public internalValue? : BedrockPromptVariantsMetadata[] | cdktn.IResolvable

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
  public get(index: number): BedrockPromptVariantsMetadataOutputReference {
    return new BedrockPromptVariantsMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockPromptVariantsTemplateConfigurationChatInputVariables {
  /**
  * Name for an input variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}
  */
  readonly name?: string;
}

export function bedrockPromptVariantsTemplateConfigurationChatInputVariablesToTerraform(struct?: BedrockPromptVariantsTemplateConfigurationChatInputVariables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function bedrockPromptVariantsTemplateConfigurationChatInputVariablesToHclTerraform(struct?: BedrockPromptVariantsTemplateConfigurationChatInputVariables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockPromptVariantsTemplateConfigurationChatInputVariables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVariantsTemplateConfigurationChatInputVariables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class BedrockPromptVariantsTemplateConfigurationChatInputVariablesList extends cdktn.ComplexList {
  public internalValue? : BedrockPromptVariantsTemplateConfigurationChatInputVariables[] | cdktn.IResolvable

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
  public get(index: number): BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference {
    return new BedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint {
  /**
  * CachePoint types for CachePointBlock
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#type BedrockPrompt#type}
  */
  readonly type?: string;
}

export function bedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointToTerraform(struct?: BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointToHclTerraform(struct?: BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint | cdktn.IResolvable): any {
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

export class BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint | cdktn.IResolvable | undefined) {
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
export interface BedrockPromptVariantsTemplateConfigurationChatMessagesContent {
  /**
  * CachePointBlock
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#cache_point BedrockPrompt#cache_point}
  */
  readonly cachePoint?: BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint;
  /**
  * Configuration for chat prompt template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#text BedrockPrompt#text}
  */
  readonly text?: string;
}

export function bedrockPromptVariantsTemplateConfigurationChatMessagesContentToTerraform(struct?: BedrockPromptVariantsTemplateConfigurationChatMessagesContent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cache_point: bedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointToTerraform(struct!.cachePoint),
    text: cdktn.stringToTerraform(struct!.text),
  }
}


export function bedrockPromptVariantsTemplateConfigurationChatMessagesContentToHclTerraform(struct?: BedrockPromptVariantsTemplateConfigurationChatMessagesContent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cache_point: {
      value: bedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointToHclTerraform(struct!.cachePoint),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint",
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

export class BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockPromptVariantsTemplateConfigurationChatMessagesContent | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachePoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachePoint = this._cachePoint?.internalValue;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVariantsTemplateConfigurationChatMessagesContent | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cachePoint.internalValue = undefined;
      this._text = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cachePoint.internalValue = value.cachePoint;
      this._text = value.text;
    }
  }

  // cache_point - computed: true, optional: true, required: false
  private _cachePoint = new BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference(this, "cache_point");
  public get cachePoint() {
    return this._cachePoint;
  }
  public putCachePoint(value: BedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint) {
    this._cachePoint.internalValue = value;
  }
  public resetCachePoint() {
    this._cachePoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachePointInput() {
    return this._cachePoint.internalValue;
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

export class BedrockPromptVariantsTemplateConfigurationChatMessagesContentList extends cdktn.ComplexList {
  public internalValue? : BedrockPromptVariantsTemplateConfigurationChatMessagesContent[] | cdktn.IResolvable

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
  public get(index: number): BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference {
    return new BedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockPromptVariantsTemplateConfigurationChatMessages {
  /**
  * List of Content Blocks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#content BedrockPrompt#content}
  */
  readonly content?: BedrockPromptVariantsTemplateConfigurationChatMessagesContent[] | cdktn.IResolvable;
  /**
  * Conversation roles for the chat prompt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#role BedrockPrompt#role}
  */
  readonly role?: string;
}

export function bedrockPromptVariantsTemplateConfigurationChatMessagesToTerraform(struct?: BedrockPromptVariantsTemplateConfigurationChatMessages | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content: cdktn.listMapper(bedrockPromptVariantsTemplateConfigurationChatMessagesContentToTerraform, false)(struct!.content),
    role: cdktn.stringToTerraform(struct!.role),
  }
}


export function bedrockPromptVariantsTemplateConfigurationChatMessagesToHclTerraform(struct?: BedrockPromptVariantsTemplateConfigurationChatMessages | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content: {
      value: cdktn.listMapperHcl(bedrockPromptVariantsTemplateConfigurationChatMessagesContentToHclTerraform, false)(struct!.content),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockPromptVariantsTemplateConfigurationChatMessagesContentList",
    },
    role: {
      value: cdktn.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockPromptVariantsTemplateConfigurationChatMessages | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content?.internalValue;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVariantsTemplateConfigurationChatMessages | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content.internalValue = undefined;
      this._role = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content.internalValue = value.content;
      this._role = value.role;
    }
  }

  // content - computed: true, optional: true, required: false
  private _content = new BedrockPromptVariantsTemplateConfigurationChatMessagesContentList(this, "content", false);
  public get content() {
    return this._content;
  }
  public putContent(value: BedrockPromptVariantsTemplateConfigurationChatMessagesContent[] | cdktn.IResolvable) {
    this._content.internalValue = value;
  }
  public resetContent() {
    this._content.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class BedrockPromptVariantsTemplateConfigurationChatMessagesList extends cdktn.ComplexList {
  public internalValue? : BedrockPromptVariantsTemplateConfigurationChatMessages[] | cdktn.IResolvable

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
  public get(index: number): BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference {
    return new BedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint {
  /**
  * CachePoint types for CachePointBlock
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#type BedrockPrompt#type}
  */
  readonly type?: string;
}

export function bedrockPromptVariantsTemplateConfigurationChatSystemCachePointToTerraform(struct?: BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockPromptVariantsTemplateConfigurationChatSystemCachePointToHclTerraform(struct?: BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint | cdktn.IResolvable): any {
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

export class BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint | cdktn.IResolvable | undefined) {
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
export interface BedrockPromptVariantsTemplateConfigurationChatSystem {
  /**
  * CachePointBlock
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#cache_point BedrockPrompt#cache_point}
  */
  readonly cachePoint?: BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint;
  /**
  * Configuration for chat prompt template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#text BedrockPrompt#text}
  */
  readonly text?: string;
}

export function bedrockPromptVariantsTemplateConfigurationChatSystemToTerraform(struct?: BedrockPromptVariantsTemplateConfigurationChatSystem | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cache_point: bedrockPromptVariantsTemplateConfigurationChatSystemCachePointToTerraform(struct!.cachePoint),
    text: cdktn.stringToTerraform(struct!.text),
  }
}


export function bedrockPromptVariantsTemplateConfigurationChatSystemToHclTerraform(struct?: BedrockPromptVariantsTemplateConfigurationChatSystem | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cache_point: {
      value: bedrockPromptVariantsTemplateConfigurationChatSystemCachePointToHclTerraform(struct!.cachePoint),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint",
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

export class BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockPromptVariantsTemplateConfigurationChatSystem | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachePoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachePoint = this._cachePoint?.internalValue;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVariantsTemplateConfigurationChatSystem | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cachePoint.internalValue = undefined;
      this._text = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cachePoint.internalValue = value.cachePoint;
      this._text = value.text;
    }
  }

  // cache_point - computed: true, optional: true, required: false
  private _cachePoint = new BedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference(this, "cache_point");
  public get cachePoint() {
    return this._cachePoint;
  }
  public putCachePoint(value: BedrockPromptVariantsTemplateConfigurationChatSystemCachePoint) {
    this._cachePoint.internalValue = value;
  }
  public resetCachePoint() {
    this._cachePoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachePointInput() {
    return this._cachePoint.internalValue;
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

export class BedrockPromptVariantsTemplateConfigurationChatSystemList extends cdktn.ComplexList {
  public internalValue? : BedrockPromptVariantsTemplateConfigurationChatSystem[] | cdktn.IResolvable

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
  public get(index: number): BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference {
    return new BedrockPromptVariantsTemplateConfigurationChatSystemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool {
  /**
  * Tool name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}
  */
  readonly name?: string;
}

export function bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolToTerraform(struct?: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolToHclTerraform(struct?: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}
export interface BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice {
  /**
  * Any Tool choice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#any BedrockPrompt#any}
  */
  readonly any?: string;
  /**
  * Auto Tool choice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#auto BedrockPrompt#auto}
  */
  readonly auto?: string;
  /**
  * Specific Tool choice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#tool BedrockPrompt#tool}
  */
  readonly tool?: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool;
}

export function bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToTerraform(struct?: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    any: cdktn.stringToTerraform(struct!.any),
    auto: cdktn.stringToTerraform(struct!.auto),
    tool: bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolToTerraform(struct!.tool),
  }
}


export function bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToHclTerraform(struct?: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    any: {
      value: cdktn.stringToHclTerraform(struct!.any),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto: {
      value: cdktn.stringToHclTerraform(struct!.auto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tool: {
      value: bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolToHclTerraform(struct!.tool),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._any !== undefined) {
      hasAnyValues = true;
      internalValueResult.any = this._any;
    }
    if (this._auto !== undefined) {
      hasAnyValues = true;
      internalValueResult.auto = this._auto;
    }
    if (this._tool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tool = this._tool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._any = undefined;
      this._auto = undefined;
      this._tool.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._any = value.any;
      this._auto = value.auto;
      this._tool.internalValue = value.tool;
    }
  }

  // any - computed: true, optional: true, required: false
  private _any?: string; 
  public get any() {
    return this.getStringAttribute('any');
  }
  public set any(value: string) {
    this._any = value;
  }
  public resetAny() {
    this._any = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInput() {
    return this._any;
  }

  // auto - computed: true, optional: true, required: false
  private _auto?: string; 
  public get auto() {
    return this.getStringAttribute('auto');
  }
  public set auto(value: string) {
    this._auto = value;
  }
  public resetAuto() {
    this._auto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInput() {
    return this._auto;
  }

  // tool - computed: true, optional: true, required: false
  private _tool = new BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference(this, "tool");
  public get tool() {
    return this._tool;
  }
  public putTool(value: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool) {
    this._tool.internalValue = value;
  }
  public resetTool() {
    this._tool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolInput() {
    return this._tool.internalValue;
  }
}
export interface BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint {
  /**
  * CachePoint types for CachePointBlock
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#type BedrockPrompt#type}
  */
  readonly type?: string;
}

export function bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointToTerraform(struct?: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointToHclTerraform(struct?: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint | cdktn.IResolvable): any {
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

export class BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint | cdktn.IResolvable | undefined) {
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
export interface BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#json BedrockPrompt#json}
  */
  readonly json?: string;
}

export function bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaToTerraform(struct?: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    json: cdktn.stringToTerraform(struct!.json),
  }
}


export function bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaToHclTerraform(struct?: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    json: {
      value: cdktn.stringToHclTerraform(struct!.json),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._json !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._json = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._json = value.json;
    }
  }

  // json - computed: true, optional: true, required: false
  private _json?: string; 
  public get json() {
    return this.getStringAttribute('json');
  }
  public set json(value: string) {
    this._json = value;
  }
  public resetJson() {
    this._json = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json;
  }
}
export interface BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#description BedrockPrompt#description}
  */
  readonly description?: string;
  /**
  * Tool input schema
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#input_schema BedrockPrompt#input_schema}
  */
  readonly inputSchema?: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema;
  /**
  * Tool name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}
  */
  readonly name?: string;
}

export function bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecToTerraform(struct?: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    input_schema: bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaToTerraform(struct!.inputSchema),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecToHclTerraform(struct?: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_schema: {
      value: bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaToHclTerraform(struct!.inputSchema),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._inputSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputSchema = this._inputSchema?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._inputSchema.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._inputSchema.internalValue = value.inputSchema;
      this._name = value.name;
    }
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

  // input_schema - computed: true, optional: true, required: false
  private _inputSchema = new BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference(this, "input_schema");
  public get inputSchema() {
    return this._inputSchema;
  }
  public putInputSchema(value: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema) {
    this._inputSchema.internalValue = value;
  }
  public resetInputSchema() {
    this._inputSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSchemaInput() {
    return this._inputSchema.internalValue;
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
}
export interface BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools {
  /**
  * CachePointBlock
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#cache_point BedrockPrompt#cache_point}
  */
  readonly cachePoint?: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint;
  /**
  * Tool specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#tool_spec BedrockPrompt#tool_spec}
  */
  readonly toolSpec?: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec;
}

export function bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToTerraform(struct?: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cache_point: bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointToTerraform(struct!.cachePoint),
    tool_spec: bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecToTerraform(struct!.toolSpec),
  }
}


export function bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToHclTerraform(struct?: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cache_point: {
      value: bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointToHclTerraform(struct!.cachePoint),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint",
    },
    tool_spec: {
      value: bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecToHclTerraform(struct!.toolSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachePoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachePoint = this._cachePoint?.internalValue;
    }
    if (this._toolSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolSpec = this._toolSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cachePoint.internalValue = undefined;
      this._toolSpec.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cachePoint.internalValue = value.cachePoint;
      this._toolSpec.internalValue = value.toolSpec;
    }
  }

  // cache_point - computed: true, optional: true, required: false
  private _cachePoint = new BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference(this, "cache_point");
  public get cachePoint() {
    return this._cachePoint;
  }
  public putCachePoint(value: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint) {
    this._cachePoint.internalValue = value;
  }
  public resetCachePoint() {
    this._cachePoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachePointInput() {
    return this._cachePoint.internalValue;
  }

  // tool_spec - computed: true, optional: true, required: false
  private _toolSpec = new BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference(this, "tool_spec");
  public get toolSpec() {
    return this._toolSpec;
  }
  public putToolSpec(value: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec) {
    this._toolSpec.internalValue = value;
  }
  public resetToolSpec() {
    this._toolSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolSpecInput() {
    return this._toolSpec.internalValue;
  }
}

export class BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList extends cdktn.ComplexList {
  public internalValue? : BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools[] | cdktn.IResolvable

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
  public get(index: number): BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference {
    return new BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockPromptVariantsTemplateConfigurationChatToolConfiguration {
  /**
  * Tool choice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#tool_choice BedrockPrompt#tool_choice}
  */
  readonly toolChoice?: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice;
  /**
  * List of Tools
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#tools BedrockPrompt#tools}
  */
  readonly tools?: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools[] | cdktn.IResolvable;
}

export function bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToTerraform(struct?: BedrockPromptVariantsTemplateConfigurationChatToolConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tool_choice: bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToTerraform(struct!.toolChoice),
    tools: cdktn.listMapper(bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToTerraform, false)(struct!.tools),
  }
}


export function bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToHclTerraform(struct?: BedrockPromptVariantsTemplateConfigurationChatToolConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tool_choice: {
      value: bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToHclTerraform(struct!.toolChoice),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice",
    },
    tools: {
      value: cdktn.listMapperHcl(bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToHclTerraform, false)(struct!.tools),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVariantsTemplateConfigurationChatToolConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._toolChoice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolChoice = this._toolChoice?.internalValue;
    }
    if (this._tools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tools = this._tools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVariantsTemplateConfigurationChatToolConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._toolChoice.internalValue = undefined;
      this._tools.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._toolChoice.internalValue = value.toolChoice;
      this._tools.internalValue = value.tools;
    }
  }

  // tool_choice - computed: true, optional: true, required: false
  private _toolChoice = new BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference(this, "tool_choice");
  public get toolChoice() {
    return this._toolChoice;
  }
  public putToolChoice(value: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice) {
    this._toolChoice.internalValue = value;
  }
  public resetToolChoice() {
    this._toolChoice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolChoiceInput() {
    return this._toolChoice.internalValue;
  }

  // tools - computed: true, optional: true, required: false
  private _tools = new BedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList(this, "tools", false);
  public get tools() {
    return this._tools;
  }
  public putTools(value: BedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools[] | cdktn.IResolvable) {
    this._tools.internalValue = value;
  }
  public resetTools() {
    this._tools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsInput() {
    return this._tools.internalValue;
  }
}
export interface BedrockPromptVariantsTemplateConfigurationChat {
  /**
  * List of input variables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#input_variables BedrockPrompt#input_variables}
  */
  readonly inputVariables?: BedrockPromptVariantsTemplateConfigurationChatInputVariables[] | cdktn.IResolvable;
  /**
  * List of messages for chat prompt template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#messages BedrockPrompt#messages}
  */
  readonly messages?: BedrockPromptVariantsTemplateConfigurationChatMessages[] | cdktn.IResolvable;
  /**
  * Configuration for chat prompt template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#system BedrockPrompt#system}
  */
  readonly systemAttribute?: BedrockPromptVariantsTemplateConfigurationChatSystem[] | cdktn.IResolvable;
  /**
  * Tool configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#tool_configuration BedrockPrompt#tool_configuration}
  */
  readonly toolConfiguration?: BedrockPromptVariantsTemplateConfigurationChatToolConfiguration;
}

export function bedrockPromptVariantsTemplateConfigurationChatToTerraform(struct?: BedrockPromptVariantsTemplateConfigurationChat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input_variables: cdktn.listMapper(bedrockPromptVariantsTemplateConfigurationChatInputVariablesToTerraform, false)(struct!.inputVariables),
    messages: cdktn.listMapper(bedrockPromptVariantsTemplateConfigurationChatMessagesToTerraform, false)(struct!.messages),
    system: cdktn.listMapper(bedrockPromptVariantsTemplateConfigurationChatSystemToTerraform, false)(struct!.systemAttribute),
    tool_configuration: bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToTerraform(struct!.toolConfiguration),
  }
}


export function bedrockPromptVariantsTemplateConfigurationChatToHclTerraform(struct?: BedrockPromptVariantsTemplateConfigurationChat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input_variables: {
      value: cdktn.listMapperHcl(bedrockPromptVariantsTemplateConfigurationChatInputVariablesToHclTerraform, false)(struct!.inputVariables),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockPromptVariantsTemplateConfigurationChatInputVariablesList",
    },
    messages: {
      value: cdktn.listMapperHcl(bedrockPromptVariantsTemplateConfigurationChatMessagesToHclTerraform, false)(struct!.messages),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockPromptVariantsTemplateConfigurationChatMessagesList",
    },
    system: {
      value: cdktn.listMapperHcl(bedrockPromptVariantsTemplateConfigurationChatSystemToHclTerraform, false)(struct!.systemAttribute),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockPromptVariantsTemplateConfigurationChatSystemList",
    },
    tool_configuration: {
      value: bedrockPromptVariantsTemplateConfigurationChatToolConfigurationToHclTerraform(struct!.toolConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockPromptVariantsTemplateConfigurationChatToolConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockPromptVariantsTemplateConfigurationChatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVariantsTemplateConfigurationChat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputVariables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputVariables = this._inputVariables?.internalValue;
    }
    if (this._messages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messages = this._messages?.internalValue;
    }
    if (this._system?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAttribute = this._system?.internalValue;
    }
    if (this._toolConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolConfiguration = this._toolConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVariantsTemplateConfigurationChat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputVariables.internalValue = undefined;
      this._messages.internalValue = undefined;
      this._system.internalValue = undefined;
      this._toolConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputVariables.internalValue = value.inputVariables;
      this._messages.internalValue = value.messages;
      this._system.internalValue = value.systemAttribute;
      this._toolConfiguration.internalValue = value.toolConfiguration;
    }
  }

  // input_variables - computed: true, optional: true, required: false
  private _inputVariables = new BedrockPromptVariantsTemplateConfigurationChatInputVariablesList(this, "input_variables", false);
  public get inputVariables() {
    return this._inputVariables;
  }
  public putInputVariables(value: BedrockPromptVariantsTemplateConfigurationChatInputVariables[] | cdktn.IResolvable) {
    this._inputVariables.internalValue = value;
  }
  public resetInputVariables() {
    this._inputVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputVariablesInput() {
    return this._inputVariables.internalValue;
  }

  // messages - computed: true, optional: true, required: false
  private _messages = new BedrockPromptVariantsTemplateConfigurationChatMessagesList(this, "messages", false);
  public get messages() {
    return this._messages;
  }
  public putMessages(value: BedrockPromptVariantsTemplateConfigurationChatMessages[] | cdktn.IResolvable) {
    this._messages.internalValue = value;
  }
  public resetMessages() {
    this._messages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesInput() {
    return this._messages.internalValue;
  }

  // system - computed: true, optional: true, required: false
  private _system = new BedrockPromptVariantsTemplateConfigurationChatSystemList(this, "system", false);
  public get systemAttribute() {
    return this._system;
  }
  public putSystemAttribute(value: BedrockPromptVariantsTemplateConfigurationChatSystem[] | cdktn.IResolvable) {
    this._system.internalValue = value;
  }
  public resetSystemAttribute() {
    this._system.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system.internalValue;
  }

  // tool_configuration - computed: true, optional: true, required: false
  private _toolConfiguration = new BedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference(this, "tool_configuration");
  public get toolConfiguration() {
    return this._toolConfiguration;
  }
  public putToolConfiguration(value: BedrockPromptVariantsTemplateConfigurationChatToolConfiguration) {
    this._toolConfiguration.internalValue = value;
  }
  public resetToolConfiguration() {
    this._toolConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolConfigurationInput() {
    return this._toolConfiguration.internalValue;
  }
}
export interface BedrockPromptVariantsTemplateConfigurationTextCachePoint {
  /**
  * CachePoint types for CachePointBlock
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#type BedrockPrompt#type}
  */
  readonly type?: string;
}

export function bedrockPromptVariantsTemplateConfigurationTextCachePointToTerraform(struct?: BedrockPromptVariantsTemplateConfigurationTextCachePoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockPromptVariantsTemplateConfigurationTextCachePointToHclTerraform(struct?: BedrockPromptVariantsTemplateConfigurationTextCachePoint | cdktn.IResolvable): any {
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

export class BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVariantsTemplateConfigurationTextCachePoint | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockPromptVariantsTemplateConfigurationTextCachePoint | cdktn.IResolvable | undefined) {
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
export interface BedrockPromptVariantsTemplateConfigurationTextInputVariables {
  /**
  * Name for an input variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}
  */
  readonly name?: string;
}

export function bedrockPromptVariantsTemplateConfigurationTextInputVariablesToTerraform(struct?: BedrockPromptVariantsTemplateConfigurationTextInputVariables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function bedrockPromptVariantsTemplateConfigurationTextInputVariablesToHclTerraform(struct?: BedrockPromptVariantsTemplateConfigurationTextInputVariables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockPromptVariantsTemplateConfigurationTextInputVariables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVariantsTemplateConfigurationTextInputVariables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class BedrockPromptVariantsTemplateConfigurationTextInputVariablesList extends cdktn.ComplexList {
  public internalValue? : BedrockPromptVariantsTemplateConfigurationTextInputVariables[] | cdktn.IResolvable

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
  public get(index: number): BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference {
    return new BedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockPromptVariantsTemplateConfigurationTextTextS3Location {
  /**
  * A bucket in S3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#bucket BedrockPrompt#bucket}
  */
  readonly bucket?: string;
  /**
  * A object key in S3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#key BedrockPrompt#key}
  */
  readonly key?: string;
  /**
  * The version of the the S3 object to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#version BedrockPrompt#version}
  */
  readonly version?: string;
}

export function bedrockPromptVariantsTemplateConfigurationTextTextS3LocationToTerraform(struct?: BedrockPromptVariantsTemplateConfigurationTextTextS3Location | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key: cdktn.stringToTerraform(struct!.key),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function bedrockPromptVariantsTemplateConfigurationTextTextS3LocationToHclTerraform(struct?: BedrockPromptVariantsTemplateConfigurationTextTextS3Location | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVariantsTemplateConfigurationTextTextS3Location | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVariantsTemplateConfigurationTextTextS3Location | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._key = undefined;
      this._version = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._key = value.key;
      this._version = value.version;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface BedrockPromptVariantsTemplateConfigurationText {
  /**
  * CachePointBlock
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#cache_point BedrockPrompt#cache_point}
  */
  readonly cachePoint?: BedrockPromptVariantsTemplateConfigurationTextCachePoint;
  /**
  * List of input variables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#input_variables BedrockPrompt#input_variables}
  */
  readonly inputVariables?: BedrockPromptVariantsTemplateConfigurationTextInputVariables[] | cdktn.IResolvable;
  /**
  * Prompt content for String prompt template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#text BedrockPrompt#text}
  */
  readonly text?: string;
  /**
  * The identifier for the S3 resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#text_s3_location BedrockPrompt#text_s3_location}
  */
  readonly textS3Location?: BedrockPromptVariantsTemplateConfigurationTextTextS3Location;
}

export function bedrockPromptVariantsTemplateConfigurationTextToTerraform(struct?: BedrockPromptVariantsTemplateConfigurationText | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cache_point: bedrockPromptVariantsTemplateConfigurationTextCachePointToTerraform(struct!.cachePoint),
    input_variables: cdktn.listMapper(bedrockPromptVariantsTemplateConfigurationTextInputVariablesToTerraform, false)(struct!.inputVariables),
    text: cdktn.stringToTerraform(struct!.text),
    text_s3_location: bedrockPromptVariantsTemplateConfigurationTextTextS3LocationToTerraform(struct!.textS3Location),
  }
}


export function bedrockPromptVariantsTemplateConfigurationTextToHclTerraform(struct?: BedrockPromptVariantsTemplateConfigurationText | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cache_point: {
      value: bedrockPromptVariantsTemplateConfigurationTextCachePointToHclTerraform(struct!.cachePoint),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockPromptVariantsTemplateConfigurationTextCachePoint",
    },
    input_variables: {
      value: cdktn.listMapperHcl(bedrockPromptVariantsTemplateConfigurationTextInputVariablesToHclTerraform, false)(struct!.inputVariables),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockPromptVariantsTemplateConfigurationTextInputVariablesList",
    },
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_s3_location: {
      value: bedrockPromptVariantsTemplateConfigurationTextTextS3LocationToHclTerraform(struct!.textS3Location),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockPromptVariantsTemplateConfigurationTextTextS3Location",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockPromptVariantsTemplateConfigurationTextOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVariantsTemplateConfigurationText | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachePoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachePoint = this._cachePoint?.internalValue;
    }
    if (this._inputVariables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputVariables = this._inputVariables?.internalValue;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._textS3Location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textS3Location = this._textS3Location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVariantsTemplateConfigurationText | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cachePoint.internalValue = undefined;
      this._inputVariables.internalValue = undefined;
      this._text = undefined;
      this._textS3Location.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cachePoint.internalValue = value.cachePoint;
      this._inputVariables.internalValue = value.inputVariables;
      this._text = value.text;
      this._textS3Location.internalValue = value.textS3Location;
    }
  }

  // cache_point - computed: true, optional: true, required: false
  private _cachePoint = new BedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference(this, "cache_point");
  public get cachePoint() {
    return this._cachePoint;
  }
  public putCachePoint(value: BedrockPromptVariantsTemplateConfigurationTextCachePoint) {
    this._cachePoint.internalValue = value;
  }
  public resetCachePoint() {
    this._cachePoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachePointInput() {
    return this._cachePoint.internalValue;
  }

  // input_variables - computed: true, optional: true, required: false
  private _inputVariables = new BedrockPromptVariantsTemplateConfigurationTextInputVariablesList(this, "input_variables", false);
  public get inputVariables() {
    return this._inputVariables;
  }
  public putInputVariables(value: BedrockPromptVariantsTemplateConfigurationTextInputVariables[] | cdktn.IResolvable) {
    this._inputVariables.internalValue = value;
  }
  public resetInputVariables() {
    this._inputVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputVariablesInput() {
    return this._inputVariables.internalValue;
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

  // text_s3_location - computed: true, optional: true, required: false
  private _textS3Location = new BedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference(this, "text_s3_location");
  public get textS3Location() {
    return this._textS3Location;
  }
  public putTextS3Location(value: BedrockPromptVariantsTemplateConfigurationTextTextS3Location) {
    this._textS3Location.internalValue = value;
  }
  public resetTextS3Location() {
    this._textS3Location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textS3LocationInput() {
    return this._textS3Location.internalValue;
  }
}
export interface BedrockPromptVariantsTemplateConfiguration {
  /**
  * Configuration for chat prompt template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#chat BedrockPrompt#chat}
  */
  readonly chat?: BedrockPromptVariantsTemplateConfigurationChat;
  /**
  * Configuration for text prompt template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#text BedrockPrompt#text}
  */
  readonly text?: BedrockPromptVariantsTemplateConfigurationText;
}

export function bedrockPromptVariantsTemplateConfigurationToTerraform(struct?: BedrockPromptVariantsTemplateConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    chat: bedrockPromptVariantsTemplateConfigurationChatToTerraform(struct!.chat),
    text: bedrockPromptVariantsTemplateConfigurationTextToTerraform(struct!.text),
  }
}


export function bedrockPromptVariantsTemplateConfigurationToHclTerraform(struct?: BedrockPromptVariantsTemplateConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    chat: {
      value: bedrockPromptVariantsTemplateConfigurationChatToHclTerraform(struct!.chat),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockPromptVariantsTemplateConfigurationChat",
    },
    text: {
      value: bedrockPromptVariantsTemplateConfigurationTextToHclTerraform(struct!.text),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockPromptVariantsTemplateConfigurationText",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockPromptVariantsTemplateConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVariantsTemplateConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chat = this._chat?.internalValue;
    }
    if (this._text?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVariantsTemplateConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chat.internalValue = undefined;
      this._text.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chat.internalValue = value.chat;
      this._text.internalValue = value.text;
    }
  }

  // chat - computed: true, optional: true, required: false
  private _chat = new BedrockPromptVariantsTemplateConfigurationChatOutputReference(this, "chat");
  public get chat() {
    return this._chat;
  }
  public putChat(value: BedrockPromptVariantsTemplateConfigurationChat) {
    this._chat.internalValue = value;
  }
  public resetChat() {
    this._chat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chatInput() {
    return this._chat.internalValue;
  }

  // text - computed: true, optional: true, required: false
  private _text = new BedrockPromptVariantsTemplateConfigurationTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
  public putText(value: BedrockPromptVariantsTemplateConfigurationText) {
    this._text.internalValue = value;
  }
  public resetText() {
    this._text.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text.internalValue;
  }
}
export interface BedrockPromptVariants {
  /**
  * Contains model-specific configurations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#additional_model_request_fields BedrockPrompt#additional_model_request_fields}
  */
  readonly additionalModelRequestFields?: string;
  /**
  * Target resource to invoke with Prompt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#gen_ai_resource BedrockPrompt#gen_ai_resource}
  */
  readonly genAiResource?: BedrockPromptVariantsGenAiResource;
  /**
  * Model inference configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#inference_configuration BedrockPrompt#inference_configuration}
  */
  readonly inferenceConfiguration?: BedrockPromptVariantsInferenceConfiguration;
  /**
  * List of metadata to associate with the prompt variant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#metadata BedrockPrompt#metadata}
  */
  readonly metadata?: BedrockPromptVariantsMetadata[] | cdktn.IResolvable;
  /**
  * ARN or Id of a Bedrock Foundational Model or Inference Profile, or the ARN of a imported model, or a provisioned throughput ARN for custom models.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#model_id BedrockPrompt#model_id}
  */
  readonly modelId?: string;
  /**
  * Name for a variant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#name BedrockPrompt#name}
  */
  readonly name?: string;
  /**
  * Prompt template configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#template_configuration BedrockPrompt#template_configuration}
  */
  readonly templateConfiguration?: BedrockPromptVariantsTemplateConfiguration;
  /**
  * Prompt template type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#template_type BedrockPrompt#template_type}
  */
  readonly templateType?: string;
}

export function bedrockPromptVariantsToTerraform(struct?: BedrockPromptVariants | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_model_request_fields: cdktn.stringToTerraform(struct!.additionalModelRequestFields),
    gen_ai_resource: bedrockPromptVariantsGenAiResourceToTerraform(struct!.genAiResource),
    inference_configuration: bedrockPromptVariantsInferenceConfigurationToTerraform(struct!.inferenceConfiguration),
    metadata: cdktn.listMapper(bedrockPromptVariantsMetadataToTerraform, false)(struct!.metadata),
    model_id: cdktn.stringToTerraform(struct!.modelId),
    name: cdktn.stringToTerraform(struct!.name),
    template_configuration: bedrockPromptVariantsTemplateConfigurationToTerraform(struct!.templateConfiguration),
    template_type: cdktn.stringToTerraform(struct!.templateType),
  }
}


export function bedrockPromptVariantsToHclTerraform(struct?: BedrockPromptVariants | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_model_request_fields: {
      value: cdktn.stringToHclTerraform(struct!.additionalModelRequestFields),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gen_ai_resource: {
      value: bedrockPromptVariantsGenAiResourceToHclTerraform(struct!.genAiResource),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockPromptVariantsGenAiResource",
    },
    inference_configuration: {
      value: bedrockPromptVariantsInferenceConfigurationToHclTerraform(struct!.inferenceConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockPromptVariantsInferenceConfiguration",
    },
    metadata: {
      value: cdktn.listMapperHcl(bedrockPromptVariantsMetadataToHclTerraform, false)(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockPromptVariantsMetadataList",
    },
    model_id: {
      value: cdktn.stringToHclTerraform(struct!.modelId),
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
    template_configuration: {
      value: bedrockPromptVariantsTemplateConfigurationToHclTerraform(struct!.templateConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockPromptVariantsTemplateConfiguration",
    },
    template_type: {
      value: cdktn.stringToHclTerraform(struct!.templateType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockPromptVariantsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockPromptVariants | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalModelRequestFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalModelRequestFields = this._additionalModelRequestFields;
    }
    if (this._genAiResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.genAiResource = this._genAiResource?.internalValue;
    }
    if (this._inferenceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceConfiguration = this._inferenceConfiguration?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._modelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelId = this._modelId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._templateConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateConfiguration = this._templateConfiguration?.internalValue;
    }
    if (this._templateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateType = this._templateType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVariants | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalModelRequestFields = undefined;
      this._genAiResource.internalValue = undefined;
      this._inferenceConfiguration.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._modelId = undefined;
      this._name = undefined;
      this._templateConfiguration.internalValue = undefined;
      this._templateType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalModelRequestFields = value.additionalModelRequestFields;
      this._genAiResource.internalValue = value.genAiResource;
      this._inferenceConfiguration.internalValue = value.inferenceConfiguration;
      this._metadata.internalValue = value.metadata;
      this._modelId = value.modelId;
      this._name = value.name;
      this._templateConfiguration.internalValue = value.templateConfiguration;
      this._templateType = value.templateType;
    }
  }

  // additional_model_request_fields - computed: true, optional: true, required: false
  private _additionalModelRequestFields?: string; 
  public get additionalModelRequestFields() {
    return this.getStringAttribute('additional_model_request_fields');
  }
  public set additionalModelRequestFields(value: string) {
    this._additionalModelRequestFields = value;
  }
  public resetAdditionalModelRequestFields() {
    this._additionalModelRequestFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalModelRequestFieldsInput() {
    return this._additionalModelRequestFields;
  }

  // gen_ai_resource - computed: true, optional: true, required: false
  private _genAiResource = new BedrockPromptVariantsGenAiResourceOutputReference(this, "gen_ai_resource");
  public get genAiResource() {
    return this._genAiResource;
  }
  public putGenAiResource(value: BedrockPromptVariantsGenAiResource) {
    this._genAiResource.internalValue = value;
  }
  public resetGenAiResource() {
    this._genAiResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genAiResourceInput() {
    return this._genAiResource.internalValue;
  }

  // inference_configuration - computed: true, optional: true, required: false
  private _inferenceConfiguration = new BedrockPromptVariantsInferenceConfigurationOutputReference(this, "inference_configuration");
  public get inferenceConfiguration() {
    return this._inferenceConfiguration;
  }
  public putInferenceConfiguration(value: BedrockPromptVariantsInferenceConfiguration) {
    this._inferenceConfiguration.internalValue = value;
  }
  public resetInferenceConfiguration() {
    this._inferenceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceConfigurationInput() {
    return this._inferenceConfiguration.internalValue;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata = new BedrockPromptVariantsMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: BedrockPromptVariantsMetadata[] | cdktn.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // model_id - computed: true, optional: true, required: false
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  public resetModelId() {
    this._modelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
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

  // template_configuration - computed: true, optional: true, required: false
  private _templateConfiguration = new BedrockPromptVariantsTemplateConfigurationOutputReference(this, "template_configuration");
  public get templateConfiguration() {
    return this._templateConfiguration;
  }
  public putTemplateConfiguration(value: BedrockPromptVariantsTemplateConfiguration) {
    this._templateConfiguration.internalValue = value;
  }
  public resetTemplateConfiguration() {
    this._templateConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateConfigurationInput() {
    return this._templateConfiguration.internalValue;
  }

  // template_type - computed: true, optional: true, required: false
  private _templateType?: string; 
  public get templateType() {
    return this.getStringAttribute('template_type');
  }
  public set templateType(value: string) {
    this._templateType = value;
  }
  public resetTemplateType() {
    this._templateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateTypeInput() {
    return this._templateType;
  }
}

export class BedrockPromptVariantsList extends cdktn.ComplexList {
  public internalValue? : BedrockPromptVariants[] | cdktn.IResolvable

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
  public get(index: number): BedrockPromptVariantsOutputReference {
    return new BedrockPromptVariantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt awscc_bedrock_prompt}
*/
export class BedrockPrompt extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bedrock_prompt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockPrompt resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockPrompt to import
  * @param importFromId The id of the existing BedrockPrompt that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockPrompt to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrock_prompt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt awscc_bedrock_prompt} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockPromptConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockPromptConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_bedrock_prompt',
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
    this._customerEncryptionKeyArn = config.customerEncryptionKeyArn;
    this._defaultVariant = config.defaultVariant;
    this._description = config.description;
    this._name = config.name;
    this._tags = config.tags;
    this._variants.internalValue = config.variants;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // customer_encryption_key_arn - computed: true, optional: true, required: false
  private _customerEncryptionKeyArn?: string; 
  public get customerEncryptionKeyArn() {
    return this.getStringAttribute('customer_encryption_key_arn');
  }
  public set customerEncryptionKeyArn(value: string) {
    this._customerEncryptionKeyArn = value;
  }
  public resetCustomerEncryptionKeyArn() {
    this._customerEncryptionKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerEncryptionKeyArnInput() {
    return this._customerEncryptionKeyArn;
  }

  // default_variant - computed: true, optional: true, required: false
  private _defaultVariant?: string; 
  public get defaultVariant() {
    return this.getStringAttribute('default_variant');
  }
  public set defaultVariant(value: string) {
    this._defaultVariant = value;
  }
  public resetDefaultVariant() {
    this._defaultVariant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVariantInput() {
    return this._defaultVariant;
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

  // prompt_id - computed: true, optional: false, required: false
  public get promptId() {
    return this.getStringAttribute('prompt_id');
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // variants - computed: true, optional: true, required: false
  private _variants = new BedrockPromptVariantsList(this, "variants", false);
  public get variants() {
    return this._variants;
  }
  public putVariants(value: BedrockPromptVariants[] | cdktn.IResolvable) {
    this._variants.internalValue = value;
  }
  public resetVariants() {
    this._variants.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variantsInput() {
    return this._variants.internalValue;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      customer_encryption_key_arn: cdktn.stringToTerraform(this._customerEncryptionKeyArn),
      default_variant: cdktn.stringToTerraform(this._defaultVariant),
      description: cdktn.stringToTerraform(this._description),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      variants: cdktn.listMapper(bedrockPromptVariantsToTerraform, false)(this._variants.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      customer_encryption_key_arn: {
        value: cdktn.stringToHclTerraform(this._customerEncryptionKeyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_variant: {
        value: cdktn.stringToHclTerraform(this._defaultVariant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      variants: {
        value: cdktn.listMapperHcl(bedrockPromptVariantsToHclTerraform, false)(this._variants.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockPromptVariantsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
