// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/cloudformation_guard_hook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCloudformationGuardHookConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/cloudformation_guard_hook#id DataAwsccCloudformationGuardHook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCloudformationGuardHookOptions {
}

export function dataAwsccCloudformationGuardHookOptionsToTerraform(struct?: DataAwsccCloudformationGuardHookOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudformationGuardHookOptionsToHclTerraform(struct?: DataAwsccCloudformationGuardHookOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudformationGuardHookOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudformationGuardHookOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudformationGuardHookOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // input_params - computed: true, optional: false, required: false
  public get inputParams() {
    return this.getStringAttribute('input_params');
  }
}
export interface DataAwsccCloudformationGuardHookRuleLocation {
}

export function dataAwsccCloudformationGuardHookRuleLocationToTerraform(struct?: DataAwsccCloudformationGuardHookRuleLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudformationGuardHookRuleLocationToHclTerraform(struct?: DataAwsccCloudformationGuardHookRuleLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudformationGuardHookRuleLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudformationGuardHookRuleLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudformationGuardHookRuleLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
}
export interface DataAwsccCloudformationGuardHookStackFiltersStackNames {
}

export function dataAwsccCloudformationGuardHookStackFiltersStackNamesToTerraform(struct?: DataAwsccCloudformationGuardHookStackFiltersStackNames): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudformationGuardHookStackFiltersStackNamesToHclTerraform(struct?: DataAwsccCloudformationGuardHookStackFiltersStackNames): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudformationGuardHookStackFiltersStackNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudformationGuardHookStackFiltersStackNames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude - computed: true, optional: false, required: false
  public get exclude() {
    return cdktn.Fn.tolist(this.getListAttribute('exclude'));
  }

  // include - computed: true, optional: false, required: false
  public get include() {
    return cdktn.Fn.tolist(this.getListAttribute('include'));
  }
}
export interface DataAwsccCloudformationGuardHookStackFiltersStackRoles {
}

export function dataAwsccCloudformationGuardHookStackFiltersStackRolesToTerraform(struct?: DataAwsccCloudformationGuardHookStackFiltersStackRoles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudformationGuardHookStackFiltersStackRolesToHclTerraform(struct?: DataAwsccCloudformationGuardHookStackFiltersStackRoles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudformationGuardHookStackFiltersStackRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudformationGuardHookStackFiltersStackRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude - computed: true, optional: false, required: false
  public get exclude() {
    return cdktn.Fn.tolist(this.getListAttribute('exclude'));
  }

  // include - computed: true, optional: false, required: false
  public get include() {
    return cdktn.Fn.tolist(this.getListAttribute('include'));
  }
}
export interface DataAwsccCloudformationGuardHookStackFilters {
}

export function dataAwsccCloudformationGuardHookStackFiltersToTerraform(struct?: DataAwsccCloudformationGuardHookStackFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudformationGuardHookStackFiltersToHclTerraform(struct?: DataAwsccCloudformationGuardHookStackFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudformationGuardHookStackFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudformationGuardHookStackFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudformationGuardHookStackFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filtering_criteria - computed: true, optional: false, required: false
  public get filteringCriteria() {
    return this.getStringAttribute('filtering_criteria');
  }

  // stack_names - computed: true, optional: false, required: false
  private _stackNames = new DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference(this, "stack_names");
  public get stackNames() {
    return this._stackNames;
  }

  // stack_roles - computed: true, optional: false, required: false
  private _stackRoles = new DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference(this, "stack_roles");
  public get stackRoles() {
    return this._stackRoles;
  }
}
export interface DataAwsccCloudformationGuardHookTargetFiltersTargets {
}

export function dataAwsccCloudformationGuardHookTargetFiltersTargetsToTerraform(struct?: DataAwsccCloudformationGuardHookTargetFiltersTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudformationGuardHookTargetFiltersTargetsToHclTerraform(struct?: DataAwsccCloudformationGuardHookTargetFiltersTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCloudformationGuardHookTargetFiltersTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudformationGuardHookTargetFiltersTargets | undefined) {
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

  // invocation_point - computed: true, optional: false, required: false
  public get invocationPoint() {
    return this.getStringAttribute('invocation_point');
  }

  // target_name - computed: true, optional: false, required: false
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
}

export class DataAwsccCloudformationGuardHookTargetFiltersTargetsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference {
    return new DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCloudformationGuardHookTargetFilters {
}

export function dataAwsccCloudformationGuardHookTargetFiltersToTerraform(struct?: DataAwsccCloudformationGuardHookTargetFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudformationGuardHookTargetFiltersToHclTerraform(struct?: DataAwsccCloudformationGuardHookTargetFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudformationGuardHookTargetFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudformationGuardHookTargetFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudformationGuardHookTargetFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return cdktn.Fn.tolist(this.getListAttribute('actions'));
  }

  // invocation_points - computed: true, optional: false, required: false
  public get invocationPoints() {
    return cdktn.Fn.tolist(this.getListAttribute('invocation_points'));
  }

  // target_names - computed: true, optional: false, required: false
  public get targetNames() {
    return cdktn.Fn.tolist(this.getListAttribute('target_names'));
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataAwsccCloudformationGuardHookTargetFiltersTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/cloudformation_guard_hook awscc_cloudformation_guard_hook}
*/
export class DataAwsccCloudformationGuardHook extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cloudformation_guard_hook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCloudformationGuardHook resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCloudformationGuardHook to import
  * @param importFromId The id of the existing DataAwsccCloudformationGuardHook that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/cloudformation_guard_hook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCloudformationGuardHook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudformation_guard_hook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/cloudformation_guard_hook awscc_cloudformation_guard_hook} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCloudformationGuardHookConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCloudformationGuardHookConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudformation_guard_hook',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // execution_role - computed: true, optional: false, required: false
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }

  // failure_mode - computed: true, optional: false, required: false
  public get failureMode() {
    return this.getStringAttribute('failure_mode');
  }

  // hook_arn - computed: true, optional: false, required: false
  public get hookArn() {
    return this.getStringAttribute('hook_arn');
  }

  // hook_status - computed: true, optional: false, required: false
  public get hookStatus() {
    return this.getStringAttribute('hook_status');
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

  // log_bucket - computed: true, optional: false, required: false
  public get logBucket() {
    return this.getStringAttribute('log_bucket');
  }

  // options - computed: true, optional: false, required: false
  private _options = new DataAwsccCloudformationGuardHookOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }

  // rule_location - computed: true, optional: false, required: false
  private _ruleLocation = new DataAwsccCloudformationGuardHookRuleLocationOutputReference(this, "rule_location");
  public get ruleLocation() {
    return this._ruleLocation;
  }

  // stack_filters - computed: true, optional: false, required: false
  private _stackFilters = new DataAwsccCloudformationGuardHookStackFiltersOutputReference(this, "stack_filters");
  public get stackFilters() {
    return this._stackFilters;
  }

  // target_filters - computed: true, optional: false, required: false
  private _targetFilters = new DataAwsccCloudformationGuardHookTargetFiltersOutputReference(this, "target_filters");
  public get targetFilters() {
    return this._targetFilters;
  }

  // target_operations - computed: true, optional: false, required: false
  public get targetOperations() {
    return this.getListAttribute('target_operations');
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
