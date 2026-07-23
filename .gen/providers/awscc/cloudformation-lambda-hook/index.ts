// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudformation_lambda_hook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudformationLambdaHookConfig extends cdktn.TerraformMetaArguments {
  /**
  * The typename alias for the hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudformation_lambda_hook#alias CloudformationLambdaHook#alias}
  */
  readonly alias: string;
  /**
  * The execution role ARN assumed by Hooks to invoke Lambda.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudformation_lambda_hook#execution_role CloudformationLambdaHook#execution_role}
  */
  readonly executionRole: string;
  /**
  * Attribute to specify CloudFormation behavior on hook failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudformation_lambda_hook#failure_mode CloudformationLambdaHook#failure_mode}
  */
  readonly failureMode: string;
  /**
  * Attribute to specify which stacks this hook applies to or should get invoked for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudformation_lambda_hook#hook_status CloudformationLambdaHook#hook_status}
  */
  readonly hookStatus?: string;
  /**
  * Amazon Resource Name (ARN), Partial ARN, name, version, or alias of the Lambda function to invoke with this hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudformation_lambda_hook#lambda_function CloudformationLambdaHook#lambda_function}
  */
  readonly lambdaFunction: string;
  /**
  * Filters to allow hooks to target specific stack attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudformation_lambda_hook#stack_filters CloudformationLambdaHook#stack_filters}
  */
  readonly stackFilters?: CloudformationLambdaHookStackFilters;
  /**
  * Attribute to specify which targets should invoke the hook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudformation_lambda_hook#target_filters CloudformationLambdaHook#target_filters}
  */
  readonly targetFilters?: CloudformationLambdaHookTargetFilters;
  /**
  * Which operations should this Hook run against? Resource changes, stacks or change sets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudformation_lambda_hook#target_operations CloudformationLambdaHook#target_operations}
  */
  readonly targetOperations: string[];
}
export interface CloudformationLambdaHookStackFiltersStackNames {
  /**
  * List of stack names that the hook is going to be excluded from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudformation_lambda_hook#exclude CloudformationLambdaHook#exclude}
  */
  readonly exclude?: string[];
  /**
  * List of stack names that the hook is going to target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudformation_lambda_hook#include CloudformationLambdaHook#include}
  */
  readonly include?: string[];
}

export function cloudformationLambdaHookStackFiltersStackNamesToTerraform(struct?: CloudformationLambdaHookStackFiltersStackNames | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exclude: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclude),
    include: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.include),
  }
}


export function cloudformationLambdaHookStackFiltersStackNamesToHclTerraform(struct?: CloudformationLambdaHookStackFiltersStackNames | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exclude: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    include: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudformationLambdaHookStackFiltersStackNamesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudformationLambdaHookStackFiltersStackNames | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudformationLambdaHookStackFiltersStackNames | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._include = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._include = value.include;
    }
  }

  // exclude - computed: true, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return cdktn.Fn.tolist(this.getListAttribute('exclude'));
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: true, optional: true, required: false
  private _include?: string[]; 
  public get include() {
    return cdktn.Fn.tolist(this.getListAttribute('include'));
  }
  public set include(value: string[]) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}
export interface CloudformationLambdaHookStackFiltersStackRoles {
  /**
  * List of stack roles that the hook is going to be excluded from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudformation_lambda_hook#exclude CloudformationLambdaHook#exclude}
  */
  readonly exclude?: string[];
  /**
  * List of stack roles that the hook is going to target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudformation_lambda_hook#include CloudformationLambdaHook#include}
  */
  readonly include?: string[];
}

export function cloudformationLambdaHookStackFiltersStackRolesToTerraform(struct?: CloudformationLambdaHookStackFiltersStackRoles | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exclude: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclude),
    include: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.include),
  }
}


export function cloudformationLambdaHookStackFiltersStackRolesToHclTerraform(struct?: CloudformationLambdaHookStackFiltersStackRoles | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exclude: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    include: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudformationLambdaHookStackFiltersStackRolesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudformationLambdaHookStackFiltersStackRoles | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudformationLambdaHookStackFiltersStackRoles | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._include = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._include = value.include;
    }
  }

  // exclude - computed: true, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return cdktn.Fn.tolist(this.getListAttribute('exclude'));
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: true, optional: true, required: false
  private _include?: string[]; 
  public get include() {
    return cdktn.Fn.tolist(this.getListAttribute('include'));
  }
  public set include(value: string[]) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}
export interface CloudformationLambdaHookStackFilters {
  /**
  * Attribute to specify the filtering behavior. ANY will make the Hook pass if one filter matches. ALL will make the Hook pass if all filters match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudformation_lambda_hook#filtering_criteria CloudformationLambdaHook#filtering_criteria}
  */
  readonly filteringCriteria?: string;
  /**
  * List of stack names as filters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudformation_lambda_hook#stack_names CloudformationLambdaHook#stack_names}
  */
  readonly stackNames?: CloudformationLambdaHookStackFiltersStackNames;
  /**
  * List of stack roles that are performing the stack operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudformation_lambda_hook#stack_roles CloudformationLambdaHook#stack_roles}
  */
  readonly stackRoles?: CloudformationLambdaHookStackFiltersStackRoles;
}

export function cloudformationLambdaHookStackFiltersToTerraform(struct?: CloudformationLambdaHookStackFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filtering_criteria: cdktn.stringToTerraform(struct!.filteringCriteria),
    stack_names: cloudformationLambdaHookStackFiltersStackNamesToTerraform(struct!.stackNames),
    stack_roles: cloudformationLambdaHookStackFiltersStackRolesToTerraform(struct!.stackRoles),
  }
}


export function cloudformationLambdaHookStackFiltersToHclTerraform(struct?: CloudformationLambdaHookStackFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filtering_criteria: {
      value: cdktn.stringToHclTerraform(struct!.filteringCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stack_names: {
      value: cloudformationLambdaHookStackFiltersStackNamesToHclTerraform(struct!.stackNames),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudformationLambdaHookStackFiltersStackNames",
    },
    stack_roles: {
      value: cloudformationLambdaHookStackFiltersStackRolesToHclTerraform(struct!.stackRoles),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudformationLambdaHookStackFiltersStackRoles",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudformationLambdaHookStackFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudformationLambdaHookStackFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filteringCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.filteringCriteria = this._filteringCriteria;
    }
    if (this._stackNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackNames = this._stackNames?.internalValue;
    }
    if (this._stackRoles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackRoles = this._stackRoles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudformationLambdaHookStackFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filteringCriteria = undefined;
      this._stackNames.internalValue = undefined;
      this._stackRoles.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filteringCriteria = value.filteringCriteria;
      this._stackNames.internalValue = value.stackNames;
      this._stackRoles.internalValue = value.stackRoles;
    }
  }

  // filtering_criteria - computed: true, optional: true, required: false
  private _filteringCriteria?: string; 
  public get filteringCriteria() {
    return this.getStringAttribute('filtering_criteria');
  }
  public set filteringCriteria(value: string) {
    this._filteringCriteria = value;
  }
  public resetFilteringCriteria() {
    this._filteringCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filteringCriteriaInput() {
    return this._filteringCriteria;
  }

  // stack_names - computed: true, optional: true, required: false
  private _stackNames = new CloudformationLambdaHookStackFiltersStackNamesOutputReference(this, "stack_names");
  public get stackNames() {
    return this._stackNames;
  }
  public putStackNames(value: CloudformationLambdaHookStackFiltersStackNames) {
    this._stackNames.internalValue = value;
  }
  public resetStackNames() {
    this._stackNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackNamesInput() {
    return this._stackNames.internalValue;
  }

  // stack_roles - computed: true, optional: true, required: false
  private _stackRoles = new CloudformationLambdaHookStackFiltersStackRolesOutputReference(this, "stack_roles");
  public get stackRoles() {
    return this._stackRoles;
  }
  public putStackRoles(value: CloudformationLambdaHookStackFiltersStackRoles) {
    this._stackRoles.internalValue = value;
  }
  public resetStackRoles() {
    this._stackRoles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackRolesInput() {
    return this._stackRoles.internalValue;
  }
}
export interface CloudformationLambdaHookTargetFiltersTargets {
  /**
  * Target actions are the type of operation hooks will be executed at.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudformation_lambda_hook#action CloudformationLambdaHook#action}
  */
  readonly action?: string;
  /**
  * Invocation points are the point in provisioning workflow where hooks will be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudformation_lambda_hook#invocation_point CloudformationLambdaHook#invocation_point}
  */
  readonly invocationPoint?: string;
  /**
  * Type name of hook target. Hook targets are the destination where hooks will be invoked against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudformation_lambda_hook#target_name CloudformationLambdaHook#target_name}
  */
  readonly targetName?: string;
}

export function cloudformationLambdaHookTargetFiltersTargetsToTerraform(struct?: CloudformationLambdaHookTargetFiltersTargets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    invocation_point: cdktn.stringToTerraform(struct!.invocationPoint),
    target_name: cdktn.stringToTerraform(struct!.targetName),
  }
}


export function cloudformationLambdaHookTargetFiltersTargetsToHclTerraform(struct?: CloudformationLambdaHookTargetFiltersTargets | cdktn.IResolvable): any {
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
    invocation_point: {
      value: cdktn.stringToHclTerraform(struct!.invocationPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_name: {
      value: cdktn.stringToHclTerraform(struct!.targetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudformationLambdaHookTargetFiltersTargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudformationLambdaHookTargetFiltersTargets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._invocationPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationPoint = this._invocationPoint;
    }
    if (this._targetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetName = this._targetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudformationLambdaHookTargetFiltersTargets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._invocationPoint = undefined;
      this._targetName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._invocationPoint = value.invocationPoint;
      this._targetName = value.targetName;
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

  // invocation_point - computed: true, optional: true, required: false
  private _invocationPoint?: string; 
  public get invocationPoint() {
    return this.getStringAttribute('invocation_point');
  }
  public set invocationPoint(value: string) {
    this._invocationPoint = value;
  }
  public resetInvocationPoint() {
    this._invocationPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationPointInput() {
    return this._invocationPoint;
  }

  // target_name - computed: true, optional: true, required: false
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  public resetTargetName() {
    this._targetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }
}

export class CloudformationLambdaHookTargetFiltersTargetsList extends cdktn.ComplexList {
  public internalValue? : CloudformationLambdaHookTargetFiltersTargets[] | cdktn.IResolvable

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
  public get(index: number): CloudformationLambdaHookTargetFiltersTargetsOutputReference {
    return new CloudformationLambdaHookTargetFiltersTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudformationLambdaHookTargetFilters {
  /**
  * List of actions that the hook is going to target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudformation_lambda_hook#actions CloudformationLambdaHook#actions}
  */
  readonly actions?: string[];
  /**
  * List of invocation points that the hook is going to target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudformation_lambda_hook#invocation_points CloudformationLambdaHook#invocation_points}
  */
  readonly invocationPoints?: string[];
  /**
  * List of type names that the hook is going to target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudformation_lambda_hook#target_names CloudformationLambdaHook#target_names}
  */
  readonly targetNames?: string[];
  /**
  * List of hook targets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudformation_lambda_hook#targets CloudformationLambdaHook#targets}
  */
  readonly targets?: CloudformationLambdaHookTargetFiltersTargets[] | cdktn.IResolvable;
}

export function cloudformationLambdaHookTargetFiltersToTerraform(struct?: CloudformationLambdaHookTargetFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
    invocation_points: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.invocationPoints),
    target_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.targetNames),
    targets: cdktn.listMapper(cloudformationLambdaHookTargetFiltersTargetsToTerraform, false)(struct!.targets),
  }
}


export function cloudformationLambdaHookTargetFiltersToHclTerraform(struct?: CloudformationLambdaHookTargetFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    invocation_points: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.invocationPoints),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    target_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.targetNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    targets: {
      value: cdktn.listMapperHcl(cloudformationLambdaHookTargetFiltersTargetsToHclTerraform, false)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "CloudformationLambdaHookTargetFiltersTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudformationLambdaHookTargetFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudformationLambdaHookTargetFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._invocationPoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationPoints = this._invocationPoints;
    }
    if (this._targetNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetNames = this._targetNames;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudformationLambdaHookTargetFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._invocationPoints = undefined;
      this._targetNames = undefined;
      this._targets.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._invocationPoints = value.invocationPoints;
      this._targetNames = value.targetNames;
      this._targets.internalValue = value.targets;
    }
  }

  // actions - computed: true, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return cdktn.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // invocation_points - computed: true, optional: true, required: false
  private _invocationPoints?: string[]; 
  public get invocationPoints() {
    return cdktn.Fn.tolist(this.getListAttribute('invocation_points'));
  }
  public set invocationPoints(value: string[]) {
    this._invocationPoints = value;
  }
  public resetInvocationPoints() {
    this._invocationPoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationPointsInput() {
    return this._invocationPoints;
  }

  // target_names - computed: true, optional: true, required: false
  private _targetNames?: string[]; 
  public get targetNames() {
    return cdktn.Fn.tolist(this.getListAttribute('target_names'));
  }
  public set targetNames(value: string[]) {
    this._targetNames = value;
  }
  public resetTargetNames() {
    this._targetNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNamesInput() {
    return this._targetNames;
  }

  // targets - computed: true, optional: true, required: false
  private _targets = new CloudformationLambdaHookTargetFiltersTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: CloudformationLambdaHookTargetFiltersTargets[] | cdktn.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudformation_lambda_hook awscc_cloudformation_lambda_hook}
*/
export class CloudformationLambdaHook extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cloudformation_lambda_hook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudformationLambdaHook resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudformationLambdaHook to import
  * @param importFromId The id of the existing CloudformationLambdaHook that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudformation_lambda_hook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudformationLambdaHook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudformation_lambda_hook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudformation_lambda_hook awscc_cloudformation_lambda_hook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudformationLambdaHookConfig
  */
  public constructor(scope: Construct, id: string, config: CloudformationLambdaHookConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudformation_lambda_hook',
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
    this._alias = config.alias;
    this._executionRole = config.executionRole;
    this._failureMode = config.failureMode;
    this._hookStatus = config.hookStatus;
    this._lambdaFunction = config.lambdaFunction;
    this._stackFilters.internalValue = config.stackFilters;
    this._targetFilters.internalValue = config.targetFilters;
    this._targetOperations = config.targetOperations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // execution_role - computed: false, optional: false, required: true
  private _executionRole?: string; 
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }
  public set executionRole(value: string) {
    this._executionRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleInput() {
    return this._executionRole;
  }

  // failure_mode - computed: false, optional: false, required: true
  private _failureMode?: string; 
  public get failureMode() {
    return this.getStringAttribute('failure_mode');
  }
  public set failureMode(value: string) {
    this._failureMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failureModeInput() {
    return this._failureMode;
  }

  // hook_arn - computed: true, optional: false, required: false
  public get hookArn() {
    return this.getStringAttribute('hook_arn');
  }

  // hook_status - computed: true, optional: true, required: false
  private _hookStatus?: string; 
  public get hookStatus() {
    return this.getStringAttribute('hook_status');
  }
  public set hookStatus(value: string) {
    this._hookStatus = value;
  }
  public resetHookStatus() {
    this._hookStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hookStatusInput() {
    return this._hookStatus;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lambda_function - computed: false, optional: false, required: true
  private _lambdaFunction?: string; 
  public get lambdaFunction() {
    return this.getStringAttribute('lambda_function');
  }
  public set lambdaFunction(value: string) {
    this._lambdaFunction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionInput() {
    return this._lambdaFunction;
  }

  // stack_filters - computed: true, optional: true, required: false
  private _stackFilters = new CloudformationLambdaHookStackFiltersOutputReference(this, "stack_filters");
  public get stackFilters() {
    return this._stackFilters;
  }
  public putStackFilters(value: CloudformationLambdaHookStackFilters) {
    this._stackFilters.internalValue = value;
  }
  public resetStackFilters() {
    this._stackFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackFiltersInput() {
    return this._stackFilters.internalValue;
  }

  // target_filters - computed: true, optional: true, required: false
  private _targetFilters = new CloudformationLambdaHookTargetFiltersOutputReference(this, "target_filters");
  public get targetFilters() {
    return this._targetFilters;
  }
  public putTargetFilters(value: CloudformationLambdaHookTargetFilters) {
    this._targetFilters.internalValue = value;
  }
  public resetTargetFilters() {
    this._targetFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFiltersInput() {
    return this._targetFilters.internalValue;
  }

  // target_operations - computed: false, optional: false, required: true
  private _targetOperations?: string[]; 
  public get targetOperations() {
    return this.getListAttribute('target_operations');
  }
  public set targetOperations(value: string[]) {
    this._targetOperations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetOperationsInput() {
    return this._targetOperations;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktn.stringToTerraform(this._alias),
      execution_role: cdktn.stringToTerraform(this._executionRole),
      failure_mode: cdktn.stringToTerraform(this._failureMode),
      hook_status: cdktn.stringToTerraform(this._hookStatus),
      lambda_function: cdktn.stringToTerraform(this._lambdaFunction),
      stack_filters: cloudformationLambdaHookStackFiltersToTerraform(this._stackFilters.internalValue),
      target_filters: cloudformationLambdaHookTargetFiltersToTerraform(this._targetFilters.internalValue),
      target_operations: cdktn.listMapper(cdktn.stringToTerraform, false)(this._targetOperations),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktn.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_role: {
        value: cdktn.stringToHclTerraform(this._executionRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failure_mode: {
        value: cdktn.stringToHclTerraform(this._failureMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hook_status: {
        value: cdktn.stringToHclTerraform(this._hookStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lambda_function: {
        value: cdktn.stringToHclTerraform(this._lambdaFunction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_filters: {
        value: cloudformationLambdaHookStackFiltersToHclTerraform(this._stackFilters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudformationLambdaHookStackFilters",
      },
      target_filters: {
        value: cloudformationLambdaHookTargetFiltersToHclTerraform(this._targetFilters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudformationLambdaHookTargetFilters",
      },
      target_operations: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._targetOperations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
