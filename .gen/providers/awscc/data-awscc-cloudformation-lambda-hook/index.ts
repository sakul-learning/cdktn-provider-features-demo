// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cloudformation_lambda_hook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCloudformationLambdaHookConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cloudformation_lambda_hook#id DataAwsccCloudformationLambdaHook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCloudformationLambdaHookStackFiltersStackNames {
}

export function dataAwsccCloudformationLambdaHookStackFiltersStackNamesToTerraform(struct?: DataAwsccCloudformationLambdaHookStackFiltersStackNames): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudformationLambdaHookStackFiltersStackNamesToHclTerraform(struct?: DataAwsccCloudformationLambdaHookStackFiltersStackNames): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudformationLambdaHookStackFiltersStackNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudformationLambdaHookStackFiltersStackNames | undefined) {
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
export interface DataAwsccCloudformationLambdaHookStackFiltersStackRoles {
}

export function dataAwsccCloudformationLambdaHookStackFiltersStackRolesToTerraform(struct?: DataAwsccCloudformationLambdaHookStackFiltersStackRoles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudformationLambdaHookStackFiltersStackRolesToHclTerraform(struct?: DataAwsccCloudformationLambdaHookStackFiltersStackRoles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudformationLambdaHookStackFiltersStackRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudformationLambdaHookStackFiltersStackRoles | undefined) {
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
export interface DataAwsccCloudformationLambdaHookStackFilters {
}

export function dataAwsccCloudformationLambdaHookStackFiltersToTerraform(struct?: DataAwsccCloudformationLambdaHookStackFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudformationLambdaHookStackFiltersToHclTerraform(struct?: DataAwsccCloudformationLambdaHookStackFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudformationLambdaHookStackFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudformationLambdaHookStackFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudformationLambdaHookStackFilters | undefined) {
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
  private _stackNames = new DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference(this, "stack_names");
  public get stackNames() {
    return this._stackNames;
  }

  // stack_roles - computed: true, optional: false, required: false
  private _stackRoles = new DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference(this, "stack_roles");
  public get stackRoles() {
    return this._stackRoles;
  }
}
export interface DataAwsccCloudformationLambdaHookTargetFiltersTargets {
}

export function dataAwsccCloudformationLambdaHookTargetFiltersTargetsToTerraform(struct?: DataAwsccCloudformationLambdaHookTargetFiltersTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudformationLambdaHookTargetFiltersTargetsToHclTerraform(struct?: DataAwsccCloudformationLambdaHookTargetFiltersTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCloudformationLambdaHookTargetFiltersTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudformationLambdaHookTargetFiltersTargets | undefined) {
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

export class DataAwsccCloudformationLambdaHookTargetFiltersTargetsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference {
    return new DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCloudformationLambdaHookTargetFilters {
}

export function dataAwsccCloudformationLambdaHookTargetFiltersToTerraform(struct?: DataAwsccCloudformationLambdaHookTargetFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudformationLambdaHookTargetFiltersToHclTerraform(struct?: DataAwsccCloudformationLambdaHookTargetFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudformationLambdaHookTargetFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudformationLambdaHookTargetFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudformationLambdaHookTargetFilters | undefined) {
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
  private _targets = new DataAwsccCloudformationLambdaHookTargetFiltersTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cloudformation_lambda_hook awscc_cloudformation_lambda_hook}
*/
export class DataAwsccCloudformationLambdaHook extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cloudformation_lambda_hook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCloudformationLambdaHook resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCloudformationLambdaHook to import
  * @param importFromId The id of the existing DataAwsccCloudformationLambdaHook that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cloudformation_lambda_hook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCloudformationLambdaHook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudformation_lambda_hook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cloudformation_lambda_hook awscc_cloudformation_lambda_hook} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCloudformationLambdaHookConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCloudformationLambdaHookConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudformation_lambda_hook',
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

  // lambda_function - computed: true, optional: false, required: false
  public get lambdaFunction() {
    return this.getStringAttribute('lambda_function');
  }

  // stack_filters - computed: true, optional: false, required: false
  private _stackFilters = new DataAwsccCloudformationLambdaHookStackFiltersOutputReference(this, "stack_filters");
  public get stackFilters() {
    return this._stackFilters;
  }

  // target_filters - computed: true, optional: false, required: false
  private _targetFilters = new DataAwsccCloudformationLambdaHookTargetFiltersOutputReference(this, "target_filters");
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
