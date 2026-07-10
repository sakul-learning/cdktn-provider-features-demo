// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/bedrock_flow_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccBedrockFlowVersionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/bedrock_flow_version#id DataAwsccBedrockFlowVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditional {
}

export function dataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditional): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditional): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditional | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditional | undefined) {
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
export interface DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationData {
}

export function dataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationData | undefined) {
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
export interface DataAwsccBedrockFlowVersionDefinitionConnectionsConfiguration {
}

export function dataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionConnectionsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionConnectionsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionConnectionsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionConnectionsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditional - computed: true, optional: false, required: false
  private _conditional = new DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference(this, "conditional");
  public get conditional() {
    return this._conditional;
  }

  // data - computed: true, optional: false, required: false
  private _data = new DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
}
export interface DataAwsccBedrockFlowVersionDefinitionConnections {
}

export function dataAwsccBedrockFlowVersionDefinitionConnectionsToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionConnections): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionConnectionsToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionConnections): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataAwsccBedrockFlowVersionDefinitionConnectionsConfigurationOutputReference(this, "configuration");
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

export class DataAwsccBedrockFlowVersionDefinitionConnectionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference {
    return new DataAwsccBedrockFlowVersionDefinitionConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgent {
}

export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgent | undefined) {
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
export interface DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditions {
}

export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditions | undefined) {
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

export class DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference {
    return new DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockFlowVersionDefinitionNodesConfigurationCondition {
}

export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionNodesConfigurationCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
}
export interface DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCode {
}

export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCode | undefined) {
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
export interface DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration {
}

export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration | undefined) {
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
export interface DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase {
}

export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // guardrail_configuration - computed: true, optional: false, required: false
  private _guardrailConfiguration = new DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference(this, "guardrail_configuration");
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
export interface DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunction {
}

export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunction | undefined) {
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
export interface DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLex {
}

export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLex): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLex): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLex | undefined) {
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
export interface DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration {
}

export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration | undefined) {
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
export interface DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText {
}

export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText | undefined) {
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
export interface DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration {
}

export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // text - computed: true, optional: false, required: false
  private _text = new DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
}
export interface DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables {
}

export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables | undefined) {
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

export class DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference {
    return new DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText {
}

export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // input_variables - computed: true, optional: false, required: false
  private _inputVariables = new DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList(this, "input_variables", false);
  public get inputVariables() {
    return this._inputVariables;
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}
export interface DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration {
}

export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // text - computed: true, optional: false, required: false
  private _text = new DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
}
export interface DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline {
}

export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inference_configuration - computed: true, optional: false, required: false
  private _inferenceConfiguration = new DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference(this, "inference_configuration");
  public get inferenceConfiguration() {
    return this._inferenceConfiguration;
  }

  // model_id - computed: true, optional: false, required: false
  public get modelId() {
    return this.getStringAttribute('model_id');
  }

  // template_configuration - computed: true, optional: false, required: false
  private _templateConfiguration = new DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference(this, "template_configuration");
  public get templateConfiguration() {
    return this._templateConfiguration;
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }
}
export interface DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource {
}

export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource | undefined) {
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
export interface DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration {
}

export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inline - computed: true, optional: false, required: false
  private _inline = new DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference(this, "inline");
  public get inline() {
    return this._inline;
  }

  // resource - computed: true, optional: false, required: false
  private _resource = new DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
}
export interface DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPrompt {
}

export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPrompt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPrompt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPrompt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPrompt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // guardrail_configuration - computed: true, optional: false, required: false
  private _guardrailConfiguration = new DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference(this, "guardrail_configuration");
  public get guardrailConfiguration() {
    return this._guardrailConfiguration;
  }

  // source_configuration - computed: true, optional: false, required: false
  private _sourceConfiguration = new DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference(this, "source_configuration");
  public get sourceConfiguration() {
    return this._sourceConfiguration;
  }
}
export interface DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3 {
}

export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3ToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3ToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3 | undefined) {
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
export interface DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration {
}

export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3 - computed: true, optional: false, required: false
  private _s3 = new DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
}
export interface DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrieval {
}

export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrieval): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrieval): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrieval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrieval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service_configuration - computed: true, optional: false, required: false
  private _serviceConfiguration = new DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference(this, "service_configuration");
  public get serviceConfiguration() {
    return this._serviceConfiguration;
  }
}
export interface DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3 {
}

export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3ToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3ToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3 | undefined) {
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
export interface DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration {
}

export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3 - computed: true, optional: false, required: false
  private _s3 = new DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
}
export interface DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorage {
}

export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service_configuration - computed: true, optional: false, required: false
  private _serviceConfiguration = new DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference(this, "service_configuration");
  public get serviceConfiguration() {
    return this._serviceConfiguration;
  }
}
export interface DataAwsccBedrockFlowVersionDefinitionNodesConfiguration {
}

export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionNodesConfigurationToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionNodesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionNodesConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent - computed: true, optional: false, required: false
  private _agent = new DataAwsccBedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference(this, "agent");
  public get agent() {
    return this._agent;
  }

  // collector - computed: true, optional: false, required: false
  public get collector() {
    return this.getStringAttribute('collector');
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataAwsccBedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }

  // inline_code - computed: true, optional: false, required: false
  private _inlineCode = new DataAwsccBedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference(this, "inline_code");
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
  private _knowledgeBase = new DataAwsccBedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference(this, "knowledge_base");
  public get knowledgeBase() {
    return this._knowledgeBase;
  }

  // lambda_function - computed: true, optional: false, required: false
  private _lambdaFunction = new DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference(this, "lambda_function");
  public get lambdaFunction() {
    return this._lambdaFunction;
  }

  // lex - computed: true, optional: false, required: false
  private _lex = new DataAwsccBedrockFlowVersionDefinitionNodesConfigurationLexOutputReference(this, "lex");
  public get lex() {
    return this._lex;
  }

  // output - computed: true, optional: false, required: false
  public get output() {
    return this.getStringAttribute('output');
  }

  // prompt - computed: true, optional: false, required: false
  private _prompt = new DataAwsccBedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference(this, "prompt");
  public get prompt() {
    return this._prompt;
  }

  // retrieval - computed: true, optional: false, required: false
  private _retrieval = new DataAwsccBedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference(this, "retrieval");
  public get retrieval() {
    return this._retrieval;
  }

  // storage - computed: true, optional: false, required: false
  private _storage = new DataAwsccBedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
}
export interface DataAwsccBedrockFlowVersionDefinitionNodesInputs {
}

export function dataAwsccBedrockFlowVersionDefinitionNodesInputsToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesInputs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionNodesInputsToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesInputs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionNodesInputs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionNodesInputs | undefined) {
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

export class DataAwsccBedrockFlowVersionDefinitionNodesInputsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference {
    return new DataAwsccBedrockFlowVersionDefinitionNodesInputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockFlowVersionDefinitionNodesOutputs {
}

export function dataAwsccBedrockFlowVersionDefinitionNodesOutputsToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesOutputs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionNodesOutputsToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodesOutputs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionNodesOutputs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionNodesOutputs | undefined) {
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

export class DataAwsccBedrockFlowVersionDefinitionNodesOutputsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference {
    return new DataAwsccBedrockFlowVersionDefinitionNodesOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockFlowVersionDefinitionNodes {
}

export function dataAwsccBedrockFlowVersionDefinitionNodesToTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionNodesToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinitionNodes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionNodesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockFlowVersionDefinitionNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinitionNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataAwsccBedrockFlowVersionDefinitionNodesConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }

  // inputs - computed: true, optional: false, required: false
  private _inputs = new DataAwsccBedrockFlowVersionDefinitionNodesInputsList(this, "inputs", false);
  public get inputs() {
    return this._inputs;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // outputs - computed: true, optional: false, required: false
  private _outputs = new DataAwsccBedrockFlowVersionDefinitionNodesOutputsList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccBedrockFlowVersionDefinitionNodesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockFlowVersionDefinitionNodesOutputReference {
    return new DataAwsccBedrockFlowVersionDefinitionNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockFlowVersionDefinition {
}

export function dataAwsccBedrockFlowVersionDefinitionToTerraform(struct?: DataAwsccBedrockFlowVersionDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockFlowVersionDefinitionToHclTerraform(struct?: DataAwsccBedrockFlowVersionDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockFlowVersionDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockFlowVersionDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockFlowVersionDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connections - computed: true, optional: false, required: false
  private _connections = new DataAwsccBedrockFlowVersionDefinitionConnectionsList(this, "connections", false);
  public get connections() {
    return this._connections;
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new DataAwsccBedrockFlowVersionDefinitionNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/bedrock_flow_version awscc_bedrock_flow_version}
*/
export class DataAwsccBedrockFlowVersion extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bedrock_flow_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccBedrockFlowVersion resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccBedrockFlowVersion to import
  * @param importFromId The id of the existing DataAwsccBedrockFlowVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/bedrock_flow_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccBedrockFlowVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrock_flow_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/bedrock_flow_version awscc_bedrock_flow_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccBedrockFlowVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccBedrockFlowVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_bedrock_flow_version',
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // customer_encryption_key_arn - computed: true, optional: false, required: false
  public get customerEncryptionKeyArn() {
    return this.getStringAttribute('customer_encryption_key_arn');
  }

  // definition - computed: true, optional: false, required: false
  private _definition = new DataAwsccBedrockFlowVersionDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // execution_role_arn - computed: true, optional: false, required: false
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }

  // flow_arn - computed: true, optional: false, required: false
  public get flowArn() {
    return this.getStringAttribute('flow_arn');
  }

  // flow_id - computed: true, optional: false, required: false
  public get flowId() {
    return this.getStringAttribute('flow_id');
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
