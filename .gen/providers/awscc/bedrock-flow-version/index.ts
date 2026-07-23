// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_flow_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockFlowVersionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Description of the flow version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_flow_version#description BedrockFlowVersion#description}
  */
  readonly description?: string;
  /**
  * Arn representation of the Flow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_flow_version#flow_arn BedrockFlowVersion#flow_arn}
  */
  readonly flowArn: string;
}
export interface BedrockFlowVersionDefinitionConnectionsConfigurationConditional {
}

export function bedrockFlowVersionDefinitionConnectionsConfigurationConditionalToTerraform(struct?: BedrockFlowVersionDefinitionConnectionsConfigurationConditional): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionConnectionsConfigurationConditionalToHclTerraform(struct?: BedrockFlowVersionDefinitionConnectionsConfigurationConditional): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockFlowVersionDefinitionConnectionsConfigurationConditional | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionConnectionsConfigurationConditional | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }
}
export interface BedrockFlowVersionDefinitionConnectionsConfigurationData {
}

export function bedrockFlowVersionDefinitionConnectionsConfigurationDataToTerraform(struct?: BedrockFlowVersionDefinitionConnectionsConfigurationData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionConnectionsConfigurationDataToHclTerraform(struct?: BedrockFlowVersionDefinitionConnectionsConfigurationData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockFlowVersionDefinitionConnectionsConfigurationData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionConnectionsConfigurationData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_output - computed: true, optional: false, required: false
  public get sourceOutput() {
    return this.getStringAttribute('source_output');
  }

  // target_input - computed: true, optional: false, required: false
  public get targetInput() {
    return this.getStringAttribute('target_input');
  }
}
export interface BedrockFlowVersionDefinitionConnectionsConfiguration {
}

export function bedrockFlowVersionDefinitionConnectionsConfigurationToTerraform(struct?: BedrockFlowVersionDefinitionConnectionsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionConnectionsConfigurationToHclTerraform(struct?: BedrockFlowVersionDefinitionConnectionsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockFlowVersionDefinitionConnectionsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionConnectionsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditional - computed: true, optional: false, required: false
  private _conditional = new BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference(this, "conditional");
  public get conditional() {
    return this._conditional;
  }

  // data - computed: true, optional: false, required: false
  private _data = new BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
}
export interface BedrockFlowVersionDefinitionConnections {
}

export function bedrockFlowVersionDefinitionConnectionsToTerraform(struct?: BedrockFlowVersionDefinitionConnections): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionConnectionsToHclTerraform(struct?: BedrockFlowVersionDefinitionConnections): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionConnectionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockFlowVersionDefinitionConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class BedrockFlowVersionDefinitionConnectionsList extends cdktn.ComplexList {

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
  public get(index: number): BedrockFlowVersionDefinitionConnectionsOutputReference {
    return new BedrockFlowVersionDefinitionConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockFlowVersionDefinitionNodesConfigurationAgent {
}

export function bedrockFlowVersionDefinitionNodesConfigurationAgentToTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionNodesConfigurationAgentToHclTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockFlowVersionDefinitionNodesConfigurationAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionNodesConfigurationAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_alias_arn - computed: true, optional: false, required: false
  public get agentAliasArn() {
    return this.getStringAttribute('agent_alias_arn');
  }
}
export interface BedrockFlowVersionDefinitionNodesConfigurationConditionConditions {
}

export function bedrockFlowVersionDefinitionNodesConfigurationConditionConditionsToTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationConditionConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionNodesConfigurationConditionConditionsToHclTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationConditionConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockFlowVersionDefinitionNodesConfigurationConditionConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionNodesConfigurationConditionConditions | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList extends cdktn.ComplexList {

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
  public get(index: number): BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference {
    return new BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockFlowVersionDefinitionNodesConfigurationCondition {
}

export function bedrockFlowVersionDefinitionNodesConfigurationConditionToTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionNodesConfigurationConditionToHclTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockFlowVersionDefinitionNodesConfigurationCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionNodesConfigurationCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
}
export interface BedrockFlowVersionDefinitionNodesConfigurationInlineCode {
}

export function bedrockFlowVersionDefinitionNodesConfigurationInlineCodeToTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationInlineCode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionNodesConfigurationInlineCodeToHclTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationInlineCode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockFlowVersionDefinitionNodesConfigurationInlineCode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionNodesConfigurationInlineCode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // language - computed: true, optional: false, required: false
  public get language() {
    return this.getStringAttribute('language');
  }
}
export interface BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration {
}

export function bedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationToTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationToHclTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // guardrail_identifier - computed: true, optional: false, required: false
  public get guardrailIdentifier() {
    return this.getStringAttribute('guardrail_identifier');
  }

  // guardrail_version - computed: true, optional: false, required: false
  public get guardrailVersion() {
    return this.getStringAttribute('guardrail_version');
  }
}
export interface BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase {
}

export function bedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseToTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseToHclTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // guardrail_configuration - computed: true, optional: false, required: false
  private _guardrailConfiguration = new BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference(this, "guardrail_configuration");
  public get guardrailConfiguration() {
    return this._guardrailConfiguration;
  }

  // knowledge_base_id - computed: true, optional: false, required: false
  public get knowledgeBaseId() {
    return this.getStringAttribute('knowledge_base_id');
  }

  // model_id - computed: true, optional: false, required: false
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
}
export interface BedrockFlowVersionDefinitionNodesConfigurationLambdaFunction {
}

export function bedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionToTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationLambdaFunction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionToHclTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationLambdaFunction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockFlowVersionDefinitionNodesConfigurationLambdaFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionNodesConfigurationLambdaFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lambda_arn - computed: true, optional: false, required: false
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }
}
export interface BedrockFlowVersionDefinitionNodesConfigurationLex {
}

export function bedrockFlowVersionDefinitionNodesConfigurationLexToTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationLex): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionNodesConfigurationLexToHclTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationLex): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockFlowVersionDefinitionNodesConfigurationLex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionNodesConfigurationLex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bot_alias_arn - computed: true, optional: false, required: false
  public get botAliasArn() {
    return this.getStringAttribute('bot_alias_arn');
  }

  // locale_id - computed: true, optional: false, required: false
  public get localeId() {
    return this.getStringAttribute('locale_id');
  }
}
export interface BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration {
}

export function bedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationToTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationToHclTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // guardrail_identifier - computed: true, optional: false, required: false
  public get guardrailIdentifier() {
    return this.getStringAttribute('guardrail_identifier');
  }

  // guardrail_version - computed: true, optional: false, required: false
  public get guardrailVersion() {
    return this.getStringAttribute('guardrail_version');
  }
}
export interface BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText {
}

export function bedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextToTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextToHclTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText | undefined) {
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
export interface BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration {
}

export function bedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationToTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationToHclTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // text - computed: true, optional: false, required: false
  private _text = new BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
}
export interface BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables {
}

export function bedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesToTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesToHclTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables | undefined) {
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

export class BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList extends cdktn.ComplexList {

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
  public get(index: number): BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference {
    return new BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText {
}

export function bedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextToTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextToHclTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // input_variables - computed: true, optional: false, required: false
  private _inputVariables = new BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList(this, "input_variables", false);
  public get inputVariables() {
    return this._inputVariables;
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}
export interface BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration {
}

export function bedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationToTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationToHclTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // text - computed: true, optional: false, required: false
  private _text = new BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
}
export interface BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline {
}

export function bedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineToTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineToHclTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inference_configuration - computed: true, optional: false, required: false
  private _inferenceConfiguration = new BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference(this, "inference_configuration");
  public get inferenceConfiguration() {
    return this._inferenceConfiguration;
  }

  // model_id - computed: true, optional: false, required: false
  public get modelId() {
    return this.getStringAttribute('model_id');
  }

  // template_configuration - computed: true, optional: false, required: false
  private _templateConfiguration = new BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference(this, "template_configuration");
  public get templateConfiguration() {
    return this._templateConfiguration;
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }
}
export interface BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource {
}

export function bedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceToTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceToHclTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prompt_arn - computed: true, optional: false, required: false
  public get promptArn() {
    return this.getStringAttribute('prompt_arn');
  }
}
export interface BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration {
}

export function bedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationToTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationToHclTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inline - computed: true, optional: false, required: false
  private _inline = new BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference(this, "inline");
  public get inline() {
    return this._inline;
  }

  // resource - computed: true, optional: false, required: false
  private _resource = new BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
}
export interface BedrockFlowVersionDefinitionNodesConfigurationPrompt {
}

export function bedrockFlowVersionDefinitionNodesConfigurationPromptToTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationPrompt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionNodesConfigurationPromptToHclTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationPrompt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockFlowVersionDefinitionNodesConfigurationPrompt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionNodesConfigurationPrompt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // guardrail_configuration - computed: true, optional: false, required: false
  private _guardrailConfiguration = new BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference(this, "guardrail_configuration");
  public get guardrailConfiguration() {
    return this._guardrailConfiguration;
  }

  // source_configuration - computed: true, optional: false, required: false
  private _sourceConfiguration = new BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference(this, "source_configuration");
  public get sourceConfiguration() {
    return this._sourceConfiguration;
  }
}
export interface BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3 {
}

export function bedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3ToTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3ToHclTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
}
export interface BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration {
}

export function bedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationToTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationToHclTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3 - computed: true, optional: false, required: false
  private _s3 = new BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
}
export interface BedrockFlowVersionDefinitionNodesConfigurationRetrieval {
}

export function bedrockFlowVersionDefinitionNodesConfigurationRetrievalToTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationRetrieval): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionNodesConfigurationRetrievalToHclTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationRetrieval): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockFlowVersionDefinitionNodesConfigurationRetrieval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionNodesConfigurationRetrieval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service_configuration - computed: true, optional: false, required: false
  private _serviceConfiguration = new BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference(this, "service_configuration");
  public get serviceConfiguration() {
    return this._serviceConfiguration;
  }
}
export interface BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3 {
}

export function bedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3ToTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3ToHclTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
}
export interface BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration {
}

export function bedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationToTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationToHclTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3 - computed: true, optional: false, required: false
  private _s3 = new BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
}
export interface BedrockFlowVersionDefinitionNodesConfigurationStorage {
}

export function bedrockFlowVersionDefinitionNodesConfigurationStorageToTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionNodesConfigurationStorageToHclTerraform(struct?: BedrockFlowVersionDefinitionNodesConfigurationStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockFlowVersionDefinitionNodesConfigurationStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionNodesConfigurationStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service_configuration - computed: true, optional: false, required: false
  private _serviceConfiguration = new BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference(this, "service_configuration");
  public get serviceConfiguration() {
    return this._serviceConfiguration;
  }
}
export interface BedrockFlowVersionDefinitionNodesConfiguration {
}

export function bedrockFlowVersionDefinitionNodesConfigurationToTerraform(struct?: BedrockFlowVersionDefinitionNodesConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionNodesConfigurationToHclTerraform(struct?: BedrockFlowVersionDefinitionNodesConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionNodesConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockFlowVersionDefinitionNodesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionNodesConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent - computed: true, optional: false, required: false
  private _agent = new BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference(this, "agent");
  public get agent() {
    return this._agent;
  }

  // collector - computed: true, optional: false, required: false
  public get collector() {
    return this.getStringAttribute('collector');
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }

  // inline_code - computed: true, optional: false, required: false
  private _inlineCode = new BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference(this, "inline_code");
  public get inlineCode() {
    return this._inlineCode;
  }

  // input - computed: true, optional: false, required: false
  public get input() {
    return this.getStringAttribute('input');
  }

  // iterator - computed: true, optional: false, required: false
  public get iterator() {
    return this.getStringAttribute('iterator');
  }

  // knowledge_base - computed: true, optional: false, required: false
  private _knowledgeBase = new BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference(this, "knowledge_base");
  public get knowledgeBase() {
    return this._knowledgeBase;
  }

  // lambda_function - computed: true, optional: false, required: false
  private _lambdaFunction = new BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference(this, "lambda_function");
  public get lambdaFunction() {
    return this._lambdaFunction;
  }

  // lex - computed: true, optional: false, required: false
  private _lex = new BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference(this, "lex");
  public get lex() {
    return this._lex;
  }

  // output - computed: true, optional: false, required: false
  public get output() {
    return this.getStringAttribute('output');
  }

  // prompt - computed: true, optional: false, required: false
  private _prompt = new BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference(this, "prompt");
  public get prompt() {
    return this._prompt;
  }

  // retrieval - computed: true, optional: false, required: false
  private _retrieval = new BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference(this, "retrieval");
  public get retrieval() {
    return this._retrieval;
  }

  // storage - computed: true, optional: false, required: false
  private _storage = new BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
}
export interface BedrockFlowVersionDefinitionNodesInputs {
}

export function bedrockFlowVersionDefinitionNodesInputsToTerraform(struct?: BedrockFlowVersionDefinitionNodesInputs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionNodesInputsToHclTerraform(struct?: BedrockFlowVersionDefinitionNodesInputs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionNodesInputsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockFlowVersionDefinitionNodesInputs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionNodesInputs | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class BedrockFlowVersionDefinitionNodesInputsList extends cdktn.ComplexList {

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
  public get(index: number): BedrockFlowVersionDefinitionNodesInputsOutputReference {
    return new BedrockFlowVersionDefinitionNodesInputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockFlowVersionDefinitionNodesOutputs {
}

export function bedrockFlowVersionDefinitionNodesOutputsToTerraform(struct?: BedrockFlowVersionDefinitionNodesOutputs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionNodesOutputsToHclTerraform(struct?: BedrockFlowVersionDefinitionNodesOutputs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionNodesOutputsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockFlowVersionDefinitionNodesOutputs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionNodesOutputs | undefined) {
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class BedrockFlowVersionDefinitionNodesOutputsList extends cdktn.ComplexList {

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
  public get(index: number): BedrockFlowVersionDefinitionNodesOutputsOutputReference {
    return new BedrockFlowVersionDefinitionNodesOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockFlowVersionDefinitionNodes {
}

export function bedrockFlowVersionDefinitionNodesToTerraform(struct?: BedrockFlowVersionDefinitionNodes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionNodesToHclTerraform(struct?: BedrockFlowVersionDefinitionNodes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionNodesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockFlowVersionDefinitionNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinitionNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new BedrockFlowVersionDefinitionNodesConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }

  // inputs - computed: true, optional: false, required: false
  private _inputs = new BedrockFlowVersionDefinitionNodesInputsList(this, "inputs", false);
  public get inputs() {
    return this._inputs;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // outputs - computed: true, optional: false, required: false
  private _outputs = new BedrockFlowVersionDefinitionNodesOutputsList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class BedrockFlowVersionDefinitionNodesList extends cdktn.ComplexList {

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
  public get(index: number): BedrockFlowVersionDefinitionNodesOutputReference {
    return new BedrockFlowVersionDefinitionNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockFlowVersionDefinition {
}

export function bedrockFlowVersionDefinitionToTerraform(struct?: BedrockFlowVersionDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockFlowVersionDefinitionToHclTerraform(struct?: BedrockFlowVersionDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockFlowVersionDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockFlowVersionDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockFlowVersionDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connections - computed: true, optional: false, required: false
  private _connections = new BedrockFlowVersionDefinitionConnectionsList(this, "connections", false);
  public get connections() {
    return this._connections;
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new BedrockFlowVersionDefinitionNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_flow_version awscc_bedrock_flow_version}
*/
export class BedrockFlowVersion extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bedrock_flow_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockFlowVersion resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockFlowVersion to import
  * @param importFromId The id of the existing BedrockFlowVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_flow_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockFlowVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrock_flow_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_flow_version awscc_bedrock_flow_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockFlowVersionConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockFlowVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_bedrock_flow_version',
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
    this._description = config.description;
    this._flowArn = config.flowArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // customer_encryption_key_arn - computed: true, optional: false, required: false
  public get customerEncryptionKeyArn() {
    return this.getStringAttribute('customer_encryption_key_arn');
  }

  // definition - computed: true, optional: false, required: false
  private _definition = new BedrockFlowVersionDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
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

  // execution_role_arn - computed: true, optional: false, required: false
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }

  // flow_arn - computed: false, optional: false, required: true
  private _flowArn?: string; 
  public get flowArn() {
    return this.getStringAttribute('flow_arn');
  }
  public set flowArn(value: string) {
    this._flowArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowArnInput() {
    return this._flowArn;
  }

  // flow_id - computed: true, optional: false, required: false
  public get flowId() {
    return this.getStringAttribute('flow_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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
      flow_arn: cdktn.stringToTerraform(this._flowArn),
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
      flow_arn: {
        value: cdktn.stringToHclTerraform(this._flowArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
