// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/budgets_budgets_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccBudgetsBudgetsActionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/budgets_budgets_action#id DataAwsccBudgetsBudgetsAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccBudgetsBudgetsActionActionThreshold {
}

export function dataAwsccBudgetsBudgetsActionActionThresholdToTerraform(struct?: DataAwsccBudgetsBudgetsActionActionThreshold): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBudgetsBudgetsActionActionThresholdToHclTerraform(struct?: DataAwsccBudgetsBudgetsActionActionThreshold): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBudgetsBudgetsActionActionThresholdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBudgetsBudgetsActionActionThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBudgetsBudgetsActionActionThreshold | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition {
}

export function dataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionToTerraform(struct?: DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionToHclTerraform(struct?: DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return this.getListAttribute('groups');
  }

  // policy_arn - computed: true, optional: false, required: false
  public get policyArn() {
    return this.getStringAttribute('policy_arn');
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return this.getListAttribute('roles');
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return this.getListAttribute('users');
  }
}
export interface DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition {
}

export function dataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionToTerraform(struct?: DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionToHclTerraform(struct?: DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // target_ids - computed: true, optional: false, required: false
  public get targetIds() {
    return this.getListAttribute('target_ids');
  }
}
export interface DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition {
}

export function dataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionToTerraform(struct?: DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionToHclTerraform(struct?: DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_ids - computed: true, optional: false, required: false
  public get instanceIds() {
    return this.getListAttribute('instance_ids');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // subtype - computed: true, optional: false, required: false
  public get subtype() {
    return this.getStringAttribute('subtype');
  }
}
export interface DataAwsccBudgetsBudgetsActionDefinition {
}

export function dataAwsccBudgetsBudgetsActionDefinitionToTerraform(struct?: DataAwsccBudgetsBudgetsActionDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBudgetsBudgetsActionDefinitionToHclTerraform(struct?: DataAwsccBudgetsBudgetsActionDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBudgetsBudgetsActionDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBudgetsBudgetsActionDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBudgetsBudgetsActionDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iam_action_definition - computed: true, optional: false, required: false
  private _iamActionDefinition = new DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference(this, "iam_action_definition");
  public get iamActionDefinition() {
    return this._iamActionDefinition;
  }

  // scp_action_definition - computed: true, optional: false, required: false
  private _scpActionDefinition = new DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference(this, "scp_action_definition");
  public get scpActionDefinition() {
    return this._scpActionDefinition;
  }

  // ssm_action_definition - computed: true, optional: false, required: false
  private _ssmActionDefinition = new DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference(this, "ssm_action_definition");
  public get ssmActionDefinition() {
    return this._ssmActionDefinition;
  }
}
export interface DataAwsccBudgetsBudgetsActionResourceTags {
}

export function dataAwsccBudgetsBudgetsActionResourceTagsToTerraform(struct?: DataAwsccBudgetsBudgetsActionResourceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBudgetsBudgetsActionResourceTagsToHclTerraform(struct?: DataAwsccBudgetsBudgetsActionResourceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBudgetsBudgetsActionResourceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBudgetsBudgetsActionResourceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBudgetsBudgetsActionResourceTags | undefined) {
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

export class DataAwsccBudgetsBudgetsActionResourceTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBudgetsBudgetsActionResourceTagsOutputReference {
    return new DataAwsccBudgetsBudgetsActionResourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBudgetsBudgetsActionSubscribers {
}

export function dataAwsccBudgetsBudgetsActionSubscribersToTerraform(struct?: DataAwsccBudgetsBudgetsActionSubscribers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBudgetsBudgetsActionSubscribersToHclTerraform(struct?: DataAwsccBudgetsBudgetsActionSubscribers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBudgetsBudgetsActionSubscribersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBudgetsBudgetsActionSubscribers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBudgetsBudgetsActionSubscribers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccBudgetsBudgetsActionSubscribersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBudgetsBudgetsActionSubscribersOutputReference {
    return new DataAwsccBudgetsBudgetsActionSubscribersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/budgets_budgets_action awscc_budgets_budgets_action}
*/
export class DataAwsccBudgetsBudgetsAction extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_budgets_budgets_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccBudgetsBudgetsAction resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccBudgetsBudgetsAction to import
  * @param importFromId The id of the existing DataAwsccBudgetsBudgetsAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/budgets_budgets_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccBudgetsBudgetsAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_budgets_budgets_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/budgets_budgets_action awscc_budgets_budgets_action} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccBudgetsBudgetsActionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccBudgetsBudgetsActionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_budgets_budgets_action',
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

  // action_id - computed: true, optional: false, required: false
  public get actionId() {
    return this.getStringAttribute('action_id');
  }

  // action_threshold - computed: true, optional: false, required: false
  private _actionThreshold = new DataAwsccBudgetsBudgetsActionActionThresholdOutputReference(this, "action_threshold");
  public get actionThreshold() {
    return this._actionThreshold;
  }

  // action_type - computed: true, optional: false, required: false
  public get actionType() {
    return this.getStringAttribute('action_type');
  }

  // approval_model - computed: true, optional: false, required: false
  public get approvalModel() {
    return this.getStringAttribute('approval_model');
  }

  // budget_name - computed: true, optional: false, required: false
  public get budgetName() {
    return this.getStringAttribute('budget_name');
  }

  // definition - computed: true, optional: false, required: false
  private _definition = new DataAwsccBudgetsBudgetsActionDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }

  // execution_role_arn - computed: true, optional: false, required: false
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
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

  // notification_type - computed: true, optional: false, required: false
  public get notificationType() {
    return this.getStringAttribute('notification_type');
  }

  // resource_tags - computed: true, optional: false, required: false
  private _resourceTags = new DataAwsccBudgetsBudgetsActionResourceTagsList(this, "resource_tags", false);
  public get resourceTags() {
    return this._resourceTags;
  }

  // subscribers - computed: true, optional: false, required: false
  private _subscribers = new DataAwsccBudgetsBudgetsActionSubscribersList(this, "subscribers", false);
  public get subscribers() {
    return this._subscribers;
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
