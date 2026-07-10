// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockPromptVersionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Description for a prompt version resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt_version#description BedrockPromptVersion#description}
  */
  readonly description?: string;
  /**
  * ARN of a prompt resource possibly with a version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt_version#prompt_arn BedrockPromptVersion#prompt_arn}
  */
  readonly promptArn: string;
  /**
  * A map of tag keys and values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt_version#tags BedrockPromptVersion#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface BedrockPromptVersionVariantsGenAiResourceAgent {
}

export function bedrockPromptVersionVariantsGenAiResourceAgentToTerraform(struct?: BedrockPromptVersionVariantsGenAiResourceAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockPromptVersionVariantsGenAiResourceAgentToHclTerraform(struct?: BedrockPromptVersionVariantsGenAiResourceAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockPromptVersionVariantsGenAiResourceAgentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVersionVariantsGenAiResourceAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVersionVariantsGenAiResourceAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_identifier - computed: true, optional: false, required: false
  public get agentIdentifier() {
    return this.getStringAttribute('agent_identifier');
  }
}
export interface BedrockPromptVersionVariantsGenAiResource {
}

export function bedrockPromptVersionVariantsGenAiResourceToTerraform(struct?: BedrockPromptVersionVariantsGenAiResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockPromptVersionVariantsGenAiResourceToHclTerraform(struct?: BedrockPromptVersionVariantsGenAiResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockPromptVersionVariantsGenAiResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVersionVariantsGenAiResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVersionVariantsGenAiResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent - computed: true, optional: false, required: false
  private _agent = new BedrockPromptVersionVariantsGenAiResourceAgentOutputReference(this, "agent");
  public get agent() {
    return this._agent;
  }
}
export interface BedrockPromptVersionVariantsInferenceConfigurationText {
}

export function bedrockPromptVersionVariantsInferenceConfigurationTextToTerraform(struct?: BedrockPromptVersionVariantsInferenceConfigurationText): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockPromptVersionVariantsInferenceConfigurationTextToHclTerraform(struct?: BedrockPromptVersionVariantsInferenceConfigurationText): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVersionVariantsInferenceConfigurationText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVersionVariantsInferenceConfigurationText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_tokens - computed: true, optional: false, required: false
  public get maxTokens() {
    return this.getNumberAttribute('max_tokens');
  }

  // stop_sequences - computed: true, optional: false, required: false
  public get stopSequences() {
    return this.getListAttribute('stop_sequences');
  }

  // temperature - computed: true, optional: false, required: false
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }

  // top_p - computed: true, optional: false, required: false
  public get topP() {
    return this.getNumberAttribute('top_p');
  }
}
export interface BedrockPromptVersionVariantsInferenceConfiguration {
}

export function bedrockPromptVersionVariantsInferenceConfigurationToTerraform(struct?: BedrockPromptVersionVariantsInferenceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockPromptVersionVariantsInferenceConfigurationToHclTerraform(struct?: BedrockPromptVersionVariantsInferenceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockPromptVersionVariantsInferenceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVersionVariantsInferenceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVersionVariantsInferenceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // text - computed: true, optional: false, required: false
  private _text = new BedrockPromptVersionVariantsInferenceConfigurationTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
}
export interface BedrockPromptVersionVariantsMetadata {
}

export function bedrockPromptVersionVariantsMetadataToTerraform(struct?: BedrockPromptVersionVariantsMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockPromptVersionVariantsMetadataToHclTerraform(struct?: BedrockPromptVersionVariantsMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockPromptVersionVariantsMetadataOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockPromptVersionVariantsMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVersionVariantsMetadata | undefined) {
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

export class BedrockPromptVersionVariantsMetadataList extends cdktn.ComplexList {

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
  public get(index: number): BedrockPromptVersionVariantsMetadataOutputReference {
    return new BedrockPromptVersionVariantsMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockPromptVersionVariantsTemplateConfigurationChatInputVariables {
}

export function bedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesToTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationChatInputVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesToHclTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationChatInputVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockPromptVersionVariantsTemplateConfigurationChatInputVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVersionVariantsTemplateConfigurationChatInputVariables | undefined) {
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

export class BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList extends cdktn.ComplexList {

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
  public get(index: number): BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference {
    return new BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint {
}

export function bedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointToTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointToHclTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePoint | undefined) {
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
export interface BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent {
}

export function bedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentToTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentToHclTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cache_point - computed: true, optional: false, required: false
  private _cachePoint = new BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference(this, "cache_point");
  public get cachePoint() {
    return this._cachePoint;
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}

export class BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList extends cdktn.ComplexList {

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
  public get(index: number): BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference {
    return new BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockPromptVersionVariantsTemplateConfigurationChatMessages {
}

export function bedrockPromptVersionVariantsTemplateConfigurationChatMessagesToTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationChatMessages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockPromptVersionVariantsTemplateConfigurationChatMessagesToHclTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationChatMessages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockPromptVersionVariantsTemplateConfigurationChatMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVersionVariantsTemplateConfigurationChatMessages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  private _content = new BedrockPromptVersionVariantsTemplateConfigurationChatMessagesContentList(this, "content", false);
  public get content() {
    return this._content;
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }
}

export class BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList extends cdktn.ComplexList {

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
  public get(index: number): BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference {
    return new BedrockPromptVersionVariantsTemplateConfigurationChatMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint {
}

export function bedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointToTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointToHclTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePoint | undefined) {
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
export interface BedrockPromptVersionVariantsTemplateConfigurationChatSystem {
}

export function bedrockPromptVersionVariantsTemplateConfigurationChatSystemToTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationChatSystem): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockPromptVersionVariantsTemplateConfigurationChatSystemToHclTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationChatSystem): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockPromptVersionVariantsTemplateConfigurationChatSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVersionVariantsTemplateConfigurationChatSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cache_point - computed: true, optional: false, required: false
  private _cachePoint = new BedrockPromptVersionVariantsTemplateConfigurationChatSystemCachePointOutputReference(this, "cache_point");
  public get cachePoint() {
    return this._cachePoint;
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}

export class BedrockPromptVersionVariantsTemplateConfigurationChatSystemList extends cdktn.ComplexList {

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
  public get(index: number): BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference {
    return new BedrockPromptVersionVariantsTemplateConfigurationChatSystemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool {
}

export function bedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolToTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolToHclTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool | undefined) {
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
export interface BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice {
}

export function bedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToHclTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // any - computed: true, optional: false, required: false
  public get any() {
    return this.getStringAttribute('any');
  }

  // auto - computed: true, optional: false, required: false
  public get auto() {
    return this.getStringAttribute('auto');
  }

  // tool - computed: true, optional: false, required: false
  private _tool = new BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference(this, "tool");
  public get tool() {
    return this._tool;
  }
}
export interface BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint {
}

export function bedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointToTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointToHclTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint | undefined) {
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
export interface BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema {
}

export function bedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaToTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaToHclTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }
}
export interface BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec {
}

export function bedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecToTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecToHclTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // input_schema - computed: true, optional: false, required: false
  private _inputSchema = new BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference(this, "input_schema");
  public get inputSchema() {
    return this._inputSchema;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools {
}

export function bedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToHclTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationTools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cache_point - computed: true, optional: false, required: false
  private _cachePoint = new BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference(this, "cache_point");
  public get cachePoint() {
    return this._cachePoint;
  }

  // tool_spec - computed: true, optional: false, required: false
  private _toolSpec = new BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference(this, "tool_spec");
  public get toolSpec() {
    return this._toolSpec;
  }
}

export class BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList extends cdktn.ComplexList {

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
  public get(index: number): BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference {
    return new BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration {
}

export function bedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToHclTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVersionVariantsTemplateConfigurationChatToolConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tool_choice - computed: true, optional: false, required: false
  private _toolChoice = new BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference(this, "tool_choice");
  public get toolChoice() {
    return this._toolChoice;
  }

  // tools - computed: true, optional: false, required: false
  private _tools = new BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationToolsList(this, "tools", false);
  public get tools() {
    return this._tools;
  }
}
export interface BedrockPromptVersionVariantsTemplateConfigurationChat {
}

export function bedrockPromptVersionVariantsTemplateConfigurationChatToTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationChat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockPromptVersionVariantsTemplateConfigurationChatToHclTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationChat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVersionVariantsTemplateConfigurationChat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVersionVariantsTemplateConfigurationChat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // input_variables - computed: true, optional: false, required: false
  private _inputVariables = new BedrockPromptVersionVariantsTemplateConfigurationChatInputVariablesList(this, "input_variables", false);
  public get inputVariables() {
    return this._inputVariables;
  }

  // messages - computed: true, optional: false, required: false
  private _messages = new BedrockPromptVersionVariantsTemplateConfigurationChatMessagesList(this, "messages", false);
  public get messages() {
    return this._messages;
  }

  // system - computed: true, optional: false, required: false
  private _system = new BedrockPromptVersionVariantsTemplateConfigurationChatSystemList(this, "system", false);
  public get systemAttribute() {
    return this._system;
  }

  // tool_configuration - computed: true, optional: false, required: false
  private _toolConfiguration = new BedrockPromptVersionVariantsTemplateConfigurationChatToolConfigurationOutputReference(this, "tool_configuration");
  public get toolConfiguration() {
    return this._toolConfiguration;
  }
}
export interface BedrockPromptVersionVariantsTemplateConfigurationTextCachePoint {
}

export function bedrockPromptVersionVariantsTemplateConfigurationTextCachePointToTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationTextCachePoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockPromptVersionVariantsTemplateConfigurationTextCachePointToHclTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationTextCachePoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVersionVariantsTemplateConfigurationTextCachePoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVersionVariantsTemplateConfigurationTextCachePoint | undefined) {
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
export interface BedrockPromptVersionVariantsTemplateConfigurationTextInputVariables {
}

export function bedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesToTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationTextInputVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesToHclTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationTextInputVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockPromptVersionVariantsTemplateConfigurationTextInputVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVersionVariantsTemplateConfigurationTextInputVariables | undefined) {
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

export class BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList extends cdktn.ComplexList {

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
  public get(index: number): BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference {
    return new BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockPromptVersionVariantsTemplateConfigurationText {
}

export function bedrockPromptVersionVariantsTemplateConfigurationTextToTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationText): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockPromptVersionVariantsTemplateConfigurationTextToHclTerraform(struct?: BedrockPromptVersionVariantsTemplateConfigurationText): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVersionVariantsTemplateConfigurationText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVersionVariantsTemplateConfigurationText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cache_point - computed: true, optional: false, required: false
  private _cachePoint = new BedrockPromptVersionVariantsTemplateConfigurationTextCachePointOutputReference(this, "cache_point");
  public get cachePoint() {
    return this._cachePoint;
  }

  // input_variables - computed: true, optional: false, required: false
  private _inputVariables = new BedrockPromptVersionVariantsTemplateConfigurationTextInputVariablesList(this, "input_variables", false);
  public get inputVariables() {
    return this._inputVariables;
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}
export interface BedrockPromptVersionVariantsTemplateConfiguration {
}

export function bedrockPromptVersionVariantsTemplateConfigurationToTerraform(struct?: BedrockPromptVersionVariantsTemplateConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockPromptVersionVariantsTemplateConfigurationToHclTerraform(struct?: BedrockPromptVersionVariantsTemplateConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockPromptVersionVariantsTemplateConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockPromptVersionVariantsTemplateConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVersionVariantsTemplateConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chat - computed: true, optional: false, required: false
  private _chat = new BedrockPromptVersionVariantsTemplateConfigurationChatOutputReference(this, "chat");
  public get chat() {
    return this._chat;
  }

  // text - computed: true, optional: false, required: false
  private _text = new BedrockPromptVersionVariantsTemplateConfigurationTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
}
export interface BedrockPromptVersionVariants {
}

export function bedrockPromptVersionVariantsToTerraform(struct?: BedrockPromptVersionVariants): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockPromptVersionVariantsToHclTerraform(struct?: BedrockPromptVersionVariants): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockPromptVersionVariantsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockPromptVersionVariants | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockPromptVersionVariants | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_model_request_fields - computed: true, optional: false, required: false
  public get additionalModelRequestFields() {
    return this.getStringAttribute('additional_model_request_fields');
  }

  // gen_ai_resource - computed: true, optional: false, required: false
  private _genAiResource = new BedrockPromptVersionVariantsGenAiResourceOutputReference(this, "gen_ai_resource");
  public get genAiResource() {
    return this._genAiResource;
  }

  // inference_configuration - computed: true, optional: false, required: false
  private _inferenceConfiguration = new BedrockPromptVersionVariantsInferenceConfigurationOutputReference(this, "inference_configuration");
  public get inferenceConfiguration() {
    return this._inferenceConfiguration;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new BedrockPromptVersionVariantsMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // model_id - computed: true, optional: false, required: false
  public get modelId() {
    return this.getStringAttribute('model_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // template_configuration - computed: true, optional: false, required: false
  private _templateConfiguration = new BedrockPromptVersionVariantsTemplateConfigurationOutputReference(this, "template_configuration");
  public get templateConfiguration() {
    return this._templateConfiguration;
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }
}

export class BedrockPromptVersionVariantsList extends cdktn.ComplexList {

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
  public get(index: number): BedrockPromptVersionVariantsOutputReference {
    return new BedrockPromptVersionVariantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt_version awscc_bedrock_prompt_version}
*/
export class BedrockPromptVersion extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bedrock_prompt_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockPromptVersion resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockPromptVersion to import
  * @param importFromId The id of the existing BedrockPromptVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockPromptVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrock_prompt_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrock_prompt_version awscc_bedrock_prompt_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockPromptVersionConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockPromptVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_bedrock_prompt_version',
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
    this._description = config.description;
    this._promptArn = config.promptArn;
    this._tags = config.tags;
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

  // customer_encryption_key_arn - computed: true, optional: false, required: false
  public get customerEncryptionKeyArn() {
    return this.getStringAttribute('customer_encryption_key_arn');
  }

  // default_variant - computed: true, optional: false, required: false
  public get defaultVariant() {
    return this.getStringAttribute('default_variant');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // prompt_arn - computed: false, optional: false, required: true
  private _promptArn?: string; 
  public get promptArn() {
    return this.getStringAttribute('prompt_arn');
  }
  public set promptArn(value: string) {
    this._promptArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promptArnInput() {
    return this._promptArn;
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

  // variants - computed: true, optional: false, required: false
  private _variants = new BedrockPromptVersionVariantsList(this, "variants", false);
  public get variants() {
    return this._variants;
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
      description: cdktn.stringToTerraform(this._description),
      prompt_arn: cdktn.stringToTerraform(this._promptArn),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prompt_arn: {
        value: cdktn.stringToHclTerraform(this._promptArn),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
