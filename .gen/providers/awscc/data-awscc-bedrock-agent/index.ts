// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/bedrock_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccBedrockAgentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/bedrock_agent#id DataAwsccBedrockAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccBedrockAgentActionGroupsActionGroupExecutor {
}

export function dataAwsccBedrockAgentActionGroupsActionGroupExecutorToTerraform(struct?: DataAwsccBedrockAgentActionGroupsActionGroupExecutor): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockAgentActionGroupsActionGroupExecutorToHclTerraform(struct?: DataAwsccBedrockAgentActionGroupsActionGroupExecutor): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockAgentActionGroupsActionGroupExecutor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockAgentActionGroupsActionGroupExecutor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_control - computed: true, optional: false, required: false
  public get customControl() {
    return this.getStringAttribute('custom_control');
  }

  // lambda - computed: true, optional: false, required: false
  public get lambda() {
    return this.getStringAttribute('lambda');
  }
}
export interface DataAwsccBedrockAgentActionGroupsApiSchemaS3 {
}

export function dataAwsccBedrockAgentActionGroupsApiSchemaS3ToTerraform(struct?: DataAwsccBedrockAgentActionGroupsApiSchemaS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockAgentActionGroupsApiSchemaS3ToHclTerraform(struct?: DataAwsccBedrockAgentActionGroupsApiSchemaS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockAgentActionGroupsApiSchemaS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockAgentActionGroupsApiSchemaS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_bucket_name - computed: true, optional: false, required: false
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }

  // s3_object_key - computed: true, optional: false, required: false
  public get s3ObjectKey() {
    return this.getStringAttribute('s3_object_key');
  }
}
export interface DataAwsccBedrockAgentActionGroupsApiSchema {
}

export function dataAwsccBedrockAgentActionGroupsApiSchemaToTerraform(struct?: DataAwsccBedrockAgentActionGroupsApiSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockAgentActionGroupsApiSchemaToHclTerraform(struct?: DataAwsccBedrockAgentActionGroupsApiSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockAgentActionGroupsApiSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockAgentActionGroupsApiSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.getStringAttribute('payload');
  }

  // s3 - computed: true, optional: false, required: false
  private _s3 = new DataAwsccBedrockAgentActionGroupsApiSchemaS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
}
export interface DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParameters {
}

export function dataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersToTerraform(struct?: DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersToHclTerraform(struct?: DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParameters | undefined) {
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

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap extends cdktn.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute);
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference {
    return new DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctions {
}

export function dataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsToTerraform(struct?: DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsToHclTerraform(struct?: DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctions | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsParametersMap(this, "parameters");
  public get parameters() {
    return this._parameters;
  }

  // require_confirmation - computed: true, optional: false, required: false
  public get requireConfirmation() {
    return this.getStringAttribute('require_confirmation');
  }
}

export class DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference {
    return new DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockAgentActionGroupsFunctionSchema {
}

export function dataAwsccBedrockAgentActionGroupsFunctionSchemaToTerraform(struct?: DataAwsccBedrockAgentActionGroupsFunctionSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockAgentActionGroupsFunctionSchemaToHclTerraform(struct?: DataAwsccBedrockAgentActionGroupsFunctionSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockAgentActionGroupsFunctionSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockAgentActionGroupsFunctionSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // functions - computed: true, optional: false, required: false
  private _functions = new DataAwsccBedrockAgentActionGroupsFunctionSchemaFunctionsList(this, "functions", false);
  public get functions() {
    return this._functions;
  }
}
export interface DataAwsccBedrockAgentActionGroups {
}

export function dataAwsccBedrockAgentActionGroupsToTerraform(struct?: DataAwsccBedrockAgentActionGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockAgentActionGroupsToHclTerraform(struct?: DataAwsccBedrockAgentActionGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockAgentActionGroupsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockAgentActionGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockAgentActionGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_group_executor - computed: true, optional: false, required: false
  private _actionGroupExecutor = new DataAwsccBedrockAgentActionGroupsActionGroupExecutorOutputReference(this, "action_group_executor");
  public get actionGroupExecutor() {
    return this._actionGroupExecutor;
  }

  // action_group_name - computed: true, optional: false, required: false
  public get actionGroupName() {
    return this.getStringAttribute('action_group_name');
  }

  // action_group_state - computed: true, optional: false, required: false
  public get actionGroupState() {
    return this.getStringAttribute('action_group_state');
  }

  // api_schema - computed: true, optional: false, required: false
  private _apiSchema = new DataAwsccBedrockAgentActionGroupsApiSchemaOutputReference(this, "api_schema");
  public get apiSchema() {
    return this._apiSchema;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // function_schema - computed: true, optional: false, required: false
  private _functionSchema = new DataAwsccBedrockAgentActionGroupsFunctionSchemaOutputReference(this, "function_schema");
  public get functionSchema() {
    return this._functionSchema;
  }

  // parent_action_group_signature - computed: true, optional: false, required: false
  public get parentActionGroupSignature() {
    return this.getStringAttribute('parent_action_group_signature');
  }

  // skip_resource_in_use_check_on_delete - computed: true, optional: false, required: false
  public get skipResourceInUseCheckOnDelete() {
    return this.getBooleanAttribute('skip_resource_in_use_check_on_delete');
  }
}

export class DataAwsccBedrockAgentActionGroupsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockAgentActionGroupsOutputReference {
    return new DataAwsccBedrockAgentActionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptor {
}

export function dataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorToTerraform(struct?: DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptor): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorToHclTerraform(struct?: DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptor): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alias_arn - computed: true, optional: false, required: false
  public get aliasArn() {
    return this.getStringAttribute('alias_arn');
  }
}
export interface DataAwsccBedrockAgentAgentCollaborators {
}

export function dataAwsccBedrockAgentAgentCollaboratorsToTerraform(struct?: DataAwsccBedrockAgentAgentCollaborators): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockAgentAgentCollaboratorsToHclTerraform(struct?: DataAwsccBedrockAgentAgentCollaborators): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockAgentAgentCollaboratorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockAgentAgentCollaborators | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockAgentAgentCollaborators | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_descriptor - computed: true, optional: false, required: false
  private _agentDescriptor = new DataAwsccBedrockAgentAgentCollaboratorsAgentDescriptorOutputReference(this, "agent_descriptor");
  public get agentDescriptor() {
    return this._agentDescriptor;
  }

  // collaboration_instruction - computed: true, optional: false, required: false
  public get collaborationInstruction() {
    return this.getStringAttribute('collaboration_instruction');
  }

  // collaborator_name - computed: true, optional: false, required: false
  public get collaboratorName() {
    return this.getStringAttribute('collaborator_name');
  }

  // relay_conversation_history - computed: true, optional: false, required: false
  public get relayConversationHistory() {
    return this.getStringAttribute('relay_conversation_history');
  }
}

export class DataAwsccBedrockAgentAgentCollaboratorsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockAgentAgentCollaboratorsOutputReference {
    return new DataAwsccBedrockAgentAgentCollaboratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockAgentCustomOrchestrationExecutor {
}

export function dataAwsccBedrockAgentCustomOrchestrationExecutorToTerraform(struct?: DataAwsccBedrockAgentCustomOrchestrationExecutor): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockAgentCustomOrchestrationExecutorToHclTerraform(struct?: DataAwsccBedrockAgentCustomOrchestrationExecutor): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockAgentCustomOrchestrationExecutor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockAgentCustomOrchestrationExecutor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lambda - computed: true, optional: false, required: false
  public get lambda() {
    return this.getStringAttribute('lambda');
  }
}
export interface DataAwsccBedrockAgentCustomOrchestration {
}

export function dataAwsccBedrockAgentCustomOrchestrationToTerraform(struct?: DataAwsccBedrockAgentCustomOrchestration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockAgentCustomOrchestrationToHclTerraform(struct?: DataAwsccBedrockAgentCustomOrchestration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockAgentCustomOrchestrationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockAgentCustomOrchestration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockAgentCustomOrchestration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // executor - computed: true, optional: false, required: false
  private _executor = new DataAwsccBedrockAgentCustomOrchestrationExecutorOutputReference(this, "executor");
  public get executor() {
    return this._executor;
  }
}
export interface DataAwsccBedrockAgentGuardrailConfiguration {
}

export function dataAwsccBedrockAgentGuardrailConfigurationToTerraform(struct?: DataAwsccBedrockAgentGuardrailConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockAgentGuardrailConfigurationToHclTerraform(struct?: DataAwsccBedrockAgentGuardrailConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockAgentGuardrailConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockAgentGuardrailConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockAgentGuardrailConfiguration | undefined) {
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
export interface DataAwsccBedrockAgentKnowledgeBases {
}

export function dataAwsccBedrockAgentKnowledgeBasesToTerraform(struct?: DataAwsccBedrockAgentKnowledgeBases): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockAgentKnowledgeBasesToHclTerraform(struct?: DataAwsccBedrockAgentKnowledgeBases): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockAgentKnowledgeBasesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockAgentKnowledgeBases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockAgentKnowledgeBases | undefined) {
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

  // knowledge_base_id - computed: true, optional: false, required: false
  public get knowledgeBaseId() {
    return this.getStringAttribute('knowledge_base_id');
  }

  // knowledge_base_state - computed: true, optional: false, required: false
  public get knowledgeBaseState() {
    return this.getStringAttribute('knowledge_base_state');
  }
}

export class DataAwsccBedrockAgentKnowledgeBasesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockAgentKnowledgeBasesOutputReference {
    return new DataAwsccBedrockAgentKnowledgeBasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfiguration {
}

export function dataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationToTerraform(struct?: DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationToHclTerraform(struct?: DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_recent_sessions - computed: true, optional: false, required: false
  public get maxRecentSessions() {
    return this.getNumberAttribute('max_recent_sessions');
  }
}
export interface DataAwsccBedrockAgentMemoryConfiguration {
}

export function dataAwsccBedrockAgentMemoryConfigurationToTerraform(struct?: DataAwsccBedrockAgentMemoryConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockAgentMemoryConfigurationToHclTerraform(struct?: DataAwsccBedrockAgentMemoryConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockAgentMemoryConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockAgentMemoryConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockAgentMemoryConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled_memory_types - computed: true, optional: false, required: false
  public get enabledMemoryTypes() {
    return this.getListAttribute('enabled_memory_types');
  }

  // session_summary_configuration - computed: true, optional: false, required: false
  private _sessionSummaryConfiguration = new DataAwsccBedrockAgentMemoryConfigurationSessionSummaryConfigurationOutputReference(this, "session_summary_configuration");
  public get sessionSummaryConfiguration() {
    return this._sessionSummaryConfiguration;
  }

  // storage_days - computed: true, optional: false, required: false
  public get storageDays() {
    return this.getNumberAttribute('storage_days');
  }
}
export interface DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration {
}

export function dataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationToTerraform(struct?: DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationToHclTerraform(struct?: DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // maximum_length - computed: true, optional: false, required: false
  public get maximumLength() {
    return this.getNumberAttribute('maximum_length');
  }

  // stop_sequences - computed: true, optional: false, required: false
  public get stopSequences() {
    return this.getListAttribute('stop_sequences');
  }

  // temperature - computed: true, optional: false, required: false
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }

  // top_k - computed: true, optional: false, required: false
  public get topK() {
    return this.getNumberAttribute('top_k');
  }

  // top_p - computed: true, optional: false, required: false
  public get topP() {
    return this.getNumberAttribute('top_p');
  }
}
export interface DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurations {
}

export function dataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsToTerraform(struct?: DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsToHclTerraform(struct?: DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurations | undefined) {
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

  // base_prompt_template - computed: true, optional: false, required: false
  public get basePromptTemplate() {
    return this.getStringAttribute('base_prompt_template');
  }

  // foundation_model - computed: true, optional: false, required: false
  public get foundationModel() {
    return this.getStringAttribute('foundation_model');
  }

  // inference_configuration - computed: true, optional: false, required: false
  private _inferenceConfiguration = new DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference(this, "inference_configuration");
  public get inferenceConfiguration() {
    return this._inferenceConfiguration;
  }

  // parser_mode - computed: true, optional: false, required: false
  public get parserMode() {
    return this.getStringAttribute('parser_mode');
  }

  // prompt_creation_mode - computed: true, optional: false, required: false
  public get promptCreationMode() {
    return this.getStringAttribute('prompt_creation_mode');
  }

  // prompt_state - computed: true, optional: false, required: false
  public get promptState() {
    return this.getStringAttribute('prompt_state');
  }

  // prompt_type - computed: true, optional: false, required: false
  public get promptType() {
    return this.getStringAttribute('prompt_type');
  }
}

export class DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference {
    return new DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockAgentPromptOverrideConfiguration {
}

export function dataAwsccBedrockAgentPromptOverrideConfigurationToTerraform(struct?: DataAwsccBedrockAgentPromptOverrideConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockAgentPromptOverrideConfigurationToHclTerraform(struct?: DataAwsccBedrockAgentPromptOverrideConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockAgentPromptOverrideConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockAgentPromptOverrideConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // override_lambda - computed: true, optional: false, required: false
  public get overrideLambda() {
    return this.getStringAttribute('override_lambda');
  }

  // prompt_configurations - computed: true, optional: false, required: false
  private _promptConfigurations = new DataAwsccBedrockAgentPromptOverrideConfigurationPromptConfigurationsList(this, "prompt_configurations", false);
  public get promptConfigurations() {
    return this._promptConfigurations;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/bedrock_agent awscc_bedrock_agent}
*/
export class DataAwsccBedrockAgent extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bedrock_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccBedrockAgent resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccBedrockAgent to import
  * @param importFromId The id of the existing DataAwsccBedrockAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/bedrock_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccBedrockAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrock_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/bedrock_agent awscc_bedrock_agent} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccBedrockAgentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccBedrockAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_bedrock_agent',
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

  // action_groups - computed: true, optional: false, required: false
  private _actionGroups = new DataAwsccBedrockAgentActionGroupsList(this, "action_groups", false);
  public get actionGroups() {
    return this._actionGroups;
  }

  // agent_arn - computed: true, optional: false, required: false
  public get agentArn() {
    return this.getStringAttribute('agent_arn');
  }

  // agent_collaboration - computed: true, optional: false, required: false
  public get agentCollaboration() {
    return this.getStringAttribute('agent_collaboration');
  }

  // agent_collaborators - computed: true, optional: false, required: false
  private _agentCollaborators = new DataAwsccBedrockAgentAgentCollaboratorsList(this, "agent_collaborators", false);
  public get agentCollaborators() {
    return this._agentCollaborators;
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // agent_name - computed: true, optional: false, required: false
  public get agentName() {
    return this.getStringAttribute('agent_name');
  }

  // agent_resource_role_arn - computed: true, optional: false, required: false
  public get agentResourceRoleArn() {
    return this.getStringAttribute('agent_resource_role_arn');
  }

  // agent_status - computed: true, optional: false, required: false
  public get agentStatus() {
    return this.getStringAttribute('agent_status');
  }

  // agent_version - computed: true, optional: false, required: false
  public get agentVersion() {
    return this.getStringAttribute('agent_version');
  }

  // auto_prepare - computed: true, optional: false, required: false
  public get autoPrepare() {
    return this.getBooleanAttribute('auto_prepare');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // custom_orchestration - computed: true, optional: false, required: false
  private _customOrchestration = new DataAwsccBedrockAgentCustomOrchestrationOutputReference(this, "custom_orchestration");
  public get customOrchestration() {
    return this._customOrchestration;
  }

  // customer_encryption_key_arn - computed: true, optional: false, required: false
  public get customerEncryptionKeyArn() {
    return this.getStringAttribute('customer_encryption_key_arn');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // failure_reasons - computed: true, optional: false, required: false
  public get failureReasons() {
    return this.getListAttribute('failure_reasons');
  }

  // foundation_model - computed: true, optional: false, required: false
  public get foundationModel() {
    return this.getStringAttribute('foundation_model');
  }

  // guardrail_configuration - computed: true, optional: false, required: false
  private _guardrailConfiguration = new DataAwsccBedrockAgentGuardrailConfigurationOutputReference(this, "guardrail_configuration");
  public get guardrailConfiguration() {
    return this._guardrailConfiguration;
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

  // idle_session_ttl_in_seconds - computed: true, optional: false, required: false
  public get idleSessionTtlInSeconds() {
    return this.getNumberAttribute('idle_session_ttl_in_seconds');
  }

  // instruction - computed: true, optional: false, required: false
  public get instruction() {
    return this.getStringAttribute('instruction');
  }

  // knowledge_bases - computed: true, optional: false, required: false
  private _knowledgeBases = new DataAwsccBedrockAgentKnowledgeBasesList(this, "knowledge_bases", false);
  public get knowledgeBases() {
    return this._knowledgeBases;
  }

  // memory_configuration - computed: true, optional: false, required: false
  private _memoryConfiguration = new DataAwsccBedrockAgentMemoryConfigurationOutputReference(this, "memory_configuration");
  public get memoryConfiguration() {
    return this._memoryConfiguration;
  }

  // orchestration_type - computed: true, optional: false, required: false
  public get orchestrationType() {
    return this.getStringAttribute('orchestration_type');
  }

  // prepared_at - computed: true, optional: false, required: false
  public get preparedAt() {
    return this.getStringAttribute('prepared_at');
  }

  // prompt_override_configuration - computed: true, optional: false, required: false
  private _promptOverrideConfiguration = new DataAwsccBedrockAgentPromptOverrideConfigurationOutputReference(this, "prompt_override_configuration");
  public get promptOverrideConfiguration() {
    return this._promptOverrideConfiguration;
  }

  // recommended_actions - computed: true, optional: false, required: false
  public get recommendedActions() {
    return this.getListAttribute('recommended_actions');
  }

  // skip_resource_in_use_check_on_delete - computed: true, optional: false, required: false
  public get skipResourceInUseCheckOnDelete() {
    return this.getBooleanAttribute('skip_resource_in_use_check_on_delete');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // test_alias_tags - computed: true, optional: false, required: false
  private _testAliasTags = new cdktn.StringMap(this, "test_alias_tags");
  public get testAliasTags() {
    return this._testAliasTags;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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
