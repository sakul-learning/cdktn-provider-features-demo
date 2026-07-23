// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/workspaces_workspace_ip_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface WorkspacesWorkspaceIpGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * The description of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/workspaces_workspace_ip_group#group_desc WorkspacesWorkspaceIpGroup#group_desc}
  */
  readonly groupDesc?: string;
  /**
  * The name of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/workspaces_workspace_ip_group#group_name WorkspacesWorkspaceIpGroup#group_name}
  */
  readonly groupName: string;
  /**
  * The tags for the IP access control group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/workspaces_workspace_ip_group#tags WorkspacesWorkspaceIpGroup#tags}
  */
  readonly tags?: WorkspacesWorkspaceIpGroupTags[] | cdktn.IResolvable;
  /**
  * The rules for the IP access control group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/workspaces_workspace_ip_group#user_rules WorkspacesWorkspaceIpGroup#user_rules}
  */
  readonly userRules?: WorkspacesWorkspaceIpGroupUserRules[] | cdktn.IResolvable;
}
export interface WorkspacesWorkspaceIpGroupTags {
  /**
  * The key of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/workspaces_workspace_ip_group#key WorkspacesWorkspaceIpGroup#key}
  */
  readonly key?: string;
  /**
  * The value of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/workspaces_workspace_ip_group#value WorkspacesWorkspaceIpGroup#value}
  */
  readonly value?: string;
}

export function workspacesWorkspaceIpGroupTagsToTerraform(struct?: WorkspacesWorkspaceIpGroupTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function workspacesWorkspaceIpGroupTagsToHclTerraform(struct?: WorkspacesWorkspaceIpGroupTags | cdktn.IResolvable): any {
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

export class WorkspacesWorkspaceIpGroupTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkspacesWorkspaceIpGroupTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspacesWorkspaceIpGroupTags | cdktn.IResolvable | undefined) {
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

export class WorkspacesWorkspaceIpGroupTagsList extends cdktn.ComplexList {
  public internalValue? : WorkspacesWorkspaceIpGroupTags[] | cdktn.IResolvable

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
  public get(index: number): WorkspacesWorkspaceIpGroupTagsOutputReference {
    return new WorkspacesWorkspaceIpGroupTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkspacesWorkspaceIpGroupUserRules {
  /**
  * The IP address range, in CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/workspaces_workspace_ip_group#ip_rule WorkspacesWorkspaceIpGroup#ip_rule}
  */
  readonly ipRule?: string;
  /**
  * The description of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/workspaces_workspace_ip_group#rule_desc WorkspacesWorkspaceIpGroup#rule_desc}
  */
  readonly ruleDesc?: string;
}

export function workspacesWorkspaceIpGroupUserRulesToTerraform(struct?: WorkspacesWorkspaceIpGroupUserRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ip_rule: cdktn.stringToTerraform(struct!.ipRule),
    rule_desc: cdktn.stringToTerraform(struct!.ruleDesc),
  }
}


export function workspacesWorkspaceIpGroupUserRulesToHclTerraform(struct?: WorkspacesWorkspaceIpGroupUserRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ip_rule: {
      value: cdktn.stringToHclTerraform(struct!.ipRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_desc: {
      value: cdktn.stringToHclTerraform(struct!.ruleDesc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspacesWorkspaceIpGroupUserRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkspacesWorkspaceIpGroupUserRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRule = this._ipRule;
    }
    if (this._ruleDesc !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleDesc = this._ruleDesc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspacesWorkspaceIpGroupUserRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipRule = undefined;
      this._ruleDesc = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipRule = value.ipRule;
      this._ruleDesc = value.ruleDesc;
    }
  }

  // ip_rule - computed: true, optional: true, required: false
  private _ipRule?: string; 
  public get ipRule() {
    return this.getStringAttribute('ip_rule');
  }
  public set ipRule(value: string) {
    this._ipRule = value;
  }
  public resetIpRule() {
    this._ipRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRuleInput() {
    return this._ipRule;
  }

  // rule_desc - computed: true, optional: true, required: false
  private _ruleDesc?: string; 
  public get ruleDesc() {
    return this.getStringAttribute('rule_desc');
  }
  public set ruleDesc(value: string) {
    this._ruleDesc = value;
  }
  public resetRuleDesc() {
    this._ruleDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleDescInput() {
    return this._ruleDesc;
  }
}

export class WorkspacesWorkspaceIpGroupUserRulesList extends cdktn.ComplexList {
  public internalValue? : WorkspacesWorkspaceIpGroupUserRules[] | cdktn.IResolvable

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
  public get(index: number): WorkspacesWorkspaceIpGroupUserRulesOutputReference {
    return new WorkspacesWorkspaceIpGroupUserRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/workspaces_workspace_ip_group awscc_workspaces_workspace_ip_group}
*/
export class WorkspacesWorkspaceIpGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_workspaces_workspace_ip_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a WorkspacesWorkspaceIpGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspacesWorkspaceIpGroup to import
  * @param importFromId The id of the existing WorkspacesWorkspaceIpGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/workspaces_workspace_ip_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspacesWorkspaceIpGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_workspaces_workspace_ip_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/workspaces_workspace_ip_group awscc_workspaces_workspace_ip_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspacesWorkspaceIpGroupConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspacesWorkspaceIpGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_workspaces_workspace_ip_group',
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
    this._groupDesc = config.groupDesc;
    this._groupName = config.groupName;
    this._tags.internalValue = config.tags;
    this._userRules.internalValue = config.userRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // group_desc - computed: true, optional: true, required: false
  private _groupDesc?: string; 
  public get groupDesc() {
    return this.getStringAttribute('group_desc');
  }
  public set groupDesc(value: string) {
    this._groupDesc = value;
  }
  public resetGroupDesc() {
    this._groupDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupDescInput() {
    return this._groupDesc;
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new WorkspacesWorkspaceIpGroupTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: WorkspacesWorkspaceIpGroupTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // user_rules - computed: true, optional: true, required: false
  private _userRules = new WorkspacesWorkspaceIpGroupUserRulesList(this, "user_rules", false);
  public get userRules() {
    return this._userRules;
  }
  public putUserRules(value: WorkspacesWorkspaceIpGroupUserRules[] | cdktn.IResolvable) {
    this._userRules.internalValue = value;
  }
  public resetUserRules() {
    this._userRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRulesInput() {
    return this._userRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_desc: cdktn.stringToTerraform(this._groupDesc),
      group_name: cdktn.stringToTerraform(this._groupName),
      tags: cdktn.listMapper(workspacesWorkspaceIpGroupTagsToTerraform, false)(this._tags.internalValue),
      user_rules: cdktn.listMapper(workspacesWorkspaceIpGroupUserRulesToTerraform, false)(this._userRules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_desc: {
        value: cdktn.stringToHclTerraform(this._groupDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name: {
        value: cdktn.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(workspacesWorkspaceIpGroupTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkspacesWorkspaceIpGroupTagsList",
      },
      user_rules: {
        value: cdktn.listMapperHcl(workspacesWorkspaceIpGroupUserRulesToHclTerraform, false)(this._userRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkspacesWorkspaceIpGroupUserRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
