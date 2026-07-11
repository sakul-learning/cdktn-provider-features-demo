// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudformation_guard_hook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudformationGuardHookConfig extends cdktn.TerraformMetaArguments {
  /**
  * The typename alias for the hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudformation_guard_hook#alias CloudformationGuardHook#alias}
  */
  readonly alias: string;
  /**
  * The execution role ARN assumed by hooks to read Guard rules from S3 and write Guard outputs to S3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudformation_guard_hook#execution_role CloudformationGuardHook#execution_role}
  */
  readonly executionRole: string;
  /**
  * Attribute to specify CloudFormation behavior on hook failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudformation_guard_hook#failure_mode CloudformationGuardHook#failure_mode}
  */
  readonly failureMode?: string;
  /**
  * Attribute to specify which stacks this hook applies to or should get invoked for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudformation_guard_hook#hook_status CloudformationGuardHook#hook_status}
  */
  readonly hookStatus?: string;
  /**
  * S3 Bucket where the guard validate report will be uploaded to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudformation_guard_hook#log_bucket CloudformationGuardHook#log_bucket}
  */
  readonly logBucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudformation_guard_hook#options CloudformationGuardHook#options}
  */
  readonly options?: CloudformationGuardHookOptions;
  /**
  * S3 Source Location for the Guard files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudformation_guard_hook#rule_location CloudformationGuardHook#rule_location}
  */
  readonly ruleLocation: CloudformationGuardHookRuleLocation;
  /**
  * Filters to allow hooks to target specific stack attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudformation_guard_hook#stack_filters CloudformationGuardHook#stack_filters}
  */
  readonly stackFilters?: CloudformationGuardHookStackFilters;
  /**
  * Attribute to specify which targets should invoke the hook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudformation_guard_hook#target_filters CloudformationGuardHook#target_filters}
  */
  readonly targetFilters?: CloudformationGuardHookTargetFilters;
  /**
  * Which operations should this Hook run against? Resource changes, stacks or change sets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudformation_guard_hook#target_operations CloudformationGuardHook#target_operations}
  */
  readonly targetOperations: string[];
}
export interface CloudformationGuardHookOptions {
  /**
  * Specifies the S3 location of input parameter files for your Guard rules. You can specify either a single S3 location or an array of up to 10 S3 locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudformation_guard_hook#input_params CloudformationGuardHook#input_params}
  */
  readonly inputParams?: string;
}

export function cloudformationGuardHookOptionsToTerraform(struct?: CloudformationGuardHookOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input_params: cdktn.stringToTerraform(struct!.inputParams),
  }
}


export function cloudformationGuardHookOptionsToHclTerraform(struct?: CloudformationGuardHookOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input_params: {
      value: cdktn.stringToHclTerraform(struct!.inputParams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudformationGuardHookOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudformationGuardHookOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputParams = this._inputParams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudformationGuardHookOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputParams = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputParams = value.inputParams;
    }
  }

  // input_params - computed: true, optional: true, required: false
  private _inputParams?: string;
  public get inputParams() {
    return this.getStringAttribute('input_params');
  }
  public set inputParams(value: string) {
    this._inputParams = value;
  }
  public resetInputParams() {
    this._inputParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputParamsInput() {
    return this._inputParams;
  }
}
export interface CloudformationGuardHookRuleLocation {
  /**
  * S3 uri of Guard files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudformation_guard_hook#uri CloudformationGuardHook#uri}
  */
  readonly uri: string;
  /**
  * S3 object version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudformation_guard_hook#version_id CloudformationGuardHook#version_id}
  */
  readonly versionId?: string;
}

export function cloudformationGuardHookRuleLocationToTerraform(struct?: CloudformationGuardHookRuleLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    uri: cdktn.stringToTerraform(struct!.uri),
    version_id: cdktn.stringToTerraform(struct!.versionId),
  }
}


export function cloudformationGuardHookRuleLocationToHclTerraform(struct?: CloudformationGuardHookRuleLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    uri: {
      value: cdktn.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudformationGuardHookRuleLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudformationGuardHookRuleLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudformationGuardHookRuleLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uri = undefined;
      this._versionId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uri = value.uri;
      this._versionId = value.versionId;
    }
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string;
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // version_id - computed: true, optional: true, required: false
  private _versionId?: string;
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }
}
export interface CloudformationGuardHookStackFiltersStackNames {
  /**
  * List of stack names that the hook is going to be excluded from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudformation_guard_hook#exclude CloudformationGuardHook#exclude}
  */
  readonly exclude?: string[];
  /**
  * List of stack names that the hook is going to target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudformation_guard_hook#include CloudformationGuardHook#include}
  */
  readonly include?: string[];
}

export function cloudformationGuardHookStackFiltersStackNamesToTerraform(struct?: CloudformationGuardHookStackFiltersStackNames | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exclude: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclude),
    include: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.include),
  }
}


export function cloudformationGuardHookStackFiltersStackNamesToHclTerraform(struct?: CloudformationGuardHookStackFiltersStackNames | cdktn.IResolvable): any {
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

export class CloudformationGuardHookStackFiltersStackNamesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudformationGuardHookStackFiltersStackNames | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CloudformationGuardHookStackFiltersStackNames | cdktn.IResolvable | undefined) {
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
export interface CloudformationGuardHookStackFiltersStackRoles {
  /**
  * List of stack roles that the hook is going to be excluded from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudformation_guard_hook#exclude CloudformationGuardHook#exclude}
  */
  readonly exclude?: string[];
  /**
  * List of stack roles that the hook is going to target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudformation_guard_hook#include CloudformationGuardHook#include}
  */
  readonly include?: string[];
}

export function cloudformationGuardHookStackFiltersStackRolesToTerraform(struct?: CloudformationGuardHookStackFiltersStackRoles | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exclude: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclude),
    include: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.include),
  }
}


export function cloudformationGuardHookStackFiltersStackRolesToHclTerraform(struct?: CloudformationGuardHookStackFiltersStackRoles | cdktn.IResolvable): any {
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

export class CloudformationGuardHookStackFiltersStackRolesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudformationGuardHookStackFiltersStackRoles | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CloudformationGuardHookStackFiltersStackRoles | cdktn.IResolvable | undefined) {
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
export interface CloudformationGuardHookStackFilters {
  /**
  * Attribute to specify the filtering behavior. ANY will make the Hook pass if one filter matches. ALL will make the Hook pass if all filters match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudformation_guard_hook#filtering_criteria CloudformationGuardHook#filtering_criteria}
  */
  readonly filteringCriteria?: string;
  /**
  * List of stack names as filters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudformation_guard_hook#stack_names CloudformationGuardHook#stack_names}
  */
  readonly stackNames?: CloudformationGuardHookStackFiltersStackNames;
  /**
  * List of stack roles that are performing the stack operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudformation_guard_hook#stack_roles CloudformationGuardHook#stack_roles}
  */
  readonly stackRoles?: CloudformationGuardHookStackFiltersStackRoles;
}

export function cloudformationGuardHookStackFiltersToTerraform(struct?: CloudformationGuardHookStackFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filtering_criteria: cdktn.stringToTerraform(struct!.filteringCriteria),
    stack_names: cloudformationGuardHookStackFiltersStackNamesToTerraform(struct!.stackNames),
    stack_roles: cloudformationGuardHookStackFiltersStackRolesToTerraform(struct!.stackRoles),
  }
}


export function cloudformationGuardHookStackFiltersToHclTerraform(struct?: CloudformationGuardHookStackFilters | cdktn.IResolvable): any {
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
      value: cloudformationGuardHookStackFiltersStackNamesToHclTerraform(struct!.stackNames),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudformationGuardHookStackFiltersStackNames",
    },
    stack_roles: {
      value: cloudformationGuardHookStackFiltersStackRolesToHclTerraform(struct!.stackRoles),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudformationGuardHookStackFiltersStackRoles",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudformationGuardHookStackFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudformationGuardHookStackFilters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CloudformationGuardHookStackFilters | cdktn.IResolvable | undefined) {
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
  private _stackNames = new CloudformationGuardHookStackFiltersStackNamesOutputReference(this, "stack_names");
  public get stackNames() {
    return this._stackNames;
  }
  public putStackNames(value: CloudformationGuardHookStackFiltersStackNames) {
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
  private _stackRoles = new CloudformationGuardHookStackFiltersStackRolesOutputReference(this, "stack_roles");
  public get stackRoles() {
    return this._stackRoles;
  }
  public putStackRoles(value: CloudformationGuardHookStackFiltersStackRoles) {
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
export interface CloudformationGuardHookTargetFiltersTargets {
  /**
  * Target actions are the type of operation hooks will be executed at.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudformation_guard_hook#action CloudformationGuardHook#action}
  */
  readonly action?: string;
  /**
  * Invocation points are the point in provisioning workflow where hooks will be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudformation_guard_hook#invocation_point CloudformationGuardHook#invocation_point}
  */
  readonly invocationPoint?: string;
  /**
  * Type name of hook target. Hook targets are the destination where hooks will be invoked against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudformation_guard_hook#target_name CloudformationGuardHook#target_name}
  */
  readonly targetName?: string;
}

export function cloudformationGuardHookTargetFiltersTargetsToTerraform(struct?: CloudformationGuardHookTargetFiltersTargets | cdktn.IResolvable): any {
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


export function cloudformationGuardHookTargetFiltersTargetsToHclTerraform(struct?: CloudformationGuardHookTargetFiltersTargets | cdktn.IResolvable): any {
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

export class CloudformationGuardHookTargetFiltersTargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudformationGuardHookTargetFiltersTargets | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CloudformationGuardHookTargetFiltersTargets | cdktn.IResolvable | undefined) {
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

export class CloudformationGuardHookTargetFiltersTargetsList extends cdktn.ComplexList {
  public internalValue? : CloudformationGuardHookTargetFiltersTargets[] | cdktn.IResolvable

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
  public get(index: number): CloudformationGuardHookTargetFiltersTargetsOutputReference {
    return new CloudformationGuardHookTargetFiltersTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudformationGuardHookTargetFilters {
  /**
  * List of actions that the hook is going to target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudformation_guard_hook#actions CloudformationGuardHook#actions}
  */
  readonly actions?: string[];
  /**
  * List of invocation points that the hook is going to target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudformation_guard_hook#invocation_points CloudformationGuardHook#invocation_points}
  */
  readonly invocationPoints?: string[];
  /**
  * List of type names that the hook is going to target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudformation_guard_hook#target_names CloudformationGuardHook#target_names}
  */
  readonly targetNames?: string[];
  /**
  * List of hook targets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudformation_guard_hook#targets CloudformationGuardHook#targets}
  */
  readonly targets?: CloudformationGuardHookTargetFiltersTargets[] | cdktn.IResolvable;
}

export function cloudformationGuardHookTargetFiltersToTerraform(struct?: CloudformationGuardHookTargetFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
    invocation_points: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.invocationPoints),
    target_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.targetNames),
    targets: cdktn.listMapper(cloudformationGuardHookTargetFiltersTargetsToTerraform, false)(struct!.targets),
  }
}


export function cloudformationGuardHookTargetFiltersToHclTerraform(struct?: CloudformationGuardHookTargetFilters | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(cloudformationGuardHookTargetFiltersTargetsToHclTerraform, false)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "CloudformationGuardHookTargetFiltersTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudformationGuardHookTargetFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudformationGuardHookTargetFilters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CloudformationGuardHookTargetFilters | cdktn.IResolvable | undefined) {
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
  private _targets = new CloudformationGuardHookTargetFiltersTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: CloudformationGuardHookTargetFiltersTargets[] | cdktn.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudformation_guard_hook awscc_cloudformation_guard_hook}
*/
export class CloudformationGuardHook extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cloudformation_guard_hook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudformationGuardHook resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudformationGuardHook to import
  * @param importFromId The id of the existing CloudformationGuardHook that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudformation_guard_hook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudformationGuardHook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudformation_guard_hook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudformation_guard_hook awscc_cloudformation_guard_hook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudformationGuardHookConfig
  */
  public constructor(scope: Construct, id: string, config: CloudformationGuardHookConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudformation_guard_hook',
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
    this._alias = config.alias;
    this._executionRole = config.executionRole;
    this._failureMode = config.failureMode;
    this._hookStatus = config.hookStatus;
    this._logBucket = config.logBucket;
    this._options.internalValue = config.options;
    this._ruleLocation.internalValue = config.ruleLocation;
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

  // failure_mode - computed: true, optional: true, required: false
  private _failureMode?: string;
  public get failureMode() {
    return this.getStringAttribute('failure_mode');
  }
  public set failureMode(value: string) {
    this._failureMode = value;
  }
  public resetFailureMode() {
    this._failureMode = undefined;
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

  // log_bucket - computed: true, optional: true, required: false
  private _logBucket?: string;
  public get logBucket() {
    return this.getStringAttribute('log_bucket');
  }
  public set logBucket(value: string) {
    this._logBucket = value;
  }
  public resetLogBucket() {
    this._logBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logBucketInput() {
    return this._logBucket;
  }

  // options - computed: true, optional: true, required: false
  private _options = new CloudformationGuardHookOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: CloudformationGuardHookOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // rule_location - computed: false, optional: false, required: true
  private _ruleLocation = new CloudformationGuardHookRuleLocationOutputReference(this, "rule_location");
  public get ruleLocation() {
    return this._ruleLocation;
  }
  public putRuleLocation(value: CloudformationGuardHookRuleLocation) {
    this._ruleLocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleLocationInput() {
    return this._ruleLocation.internalValue;
  }

  // stack_filters - computed: true, optional: true, required: false
  private _stackFilters = new CloudformationGuardHookStackFiltersOutputReference(this, "stack_filters");
  public get stackFilters() {
    return this._stackFilters;
  }
  public putStackFilters(value: CloudformationGuardHookStackFilters) {
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
  private _targetFilters = new CloudformationGuardHookTargetFiltersOutputReference(this, "target_filters");
  public get targetFilters() {
    return this._targetFilters;
  }
  public putTargetFilters(value: CloudformationGuardHookTargetFilters) {
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
      log_bucket: cdktn.stringToTerraform(this._logBucket),
      options: cloudformationGuardHookOptionsToTerraform(this._options.internalValue),
      rule_location: cloudformationGuardHookRuleLocationToTerraform(this._ruleLocation.internalValue),
      stack_filters: cloudformationGuardHookStackFiltersToTerraform(this._stackFilters.internalValue),
      target_filters: cloudformationGuardHookTargetFiltersToTerraform(this._targetFilters.internalValue),
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
      log_bucket: {
        value: cdktn.stringToHclTerraform(this._logBucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: cloudformationGuardHookOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudformationGuardHookOptions",
      },
      rule_location: {
        value: cloudformationGuardHookRuleLocationToHclTerraform(this._ruleLocation.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudformationGuardHookRuleLocation",
      },
      stack_filters: {
        value: cloudformationGuardHookStackFiltersToHclTerraform(this._stackFilters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudformationGuardHookStackFilters",
      },
      target_filters: {
        value: cloudformationGuardHookTargetFiltersToHclTerraform(this._targetFilters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudformationGuardHookTargetFilters",
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
