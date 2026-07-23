// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/cloudformation_stack_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCloudformationStackSetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/cloudformation_stack_set#id DataAwsccCloudformationStackSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCloudformationStackSetAutoDeployment {
}

export function dataAwsccCloudformationStackSetAutoDeploymentToTerraform(struct?: DataAwsccCloudformationStackSetAutoDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudformationStackSetAutoDeploymentToHclTerraform(struct?: DataAwsccCloudformationStackSetAutoDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudformationStackSetAutoDeploymentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudformationStackSetAutoDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudformationStackSetAutoDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // depends_on - computed: true, optional: false, required: false
  public get dependsOn() {
    return cdktn.Fn.tolist(this.getListAttribute('depends_on'));
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // retain_stacks_on_account_removal - computed: true, optional: false, required: false
  public get retainStacksOnAccountRemoval() {
    return this.getBooleanAttribute('retain_stacks_on_account_removal');
  }
}
export interface DataAwsccCloudformationStackSetManagedExecution {
}

export function dataAwsccCloudformationStackSetManagedExecutionToTerraform(struct?: DataAwsccCloudformationStackSetManagedExecution): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudformationStackSetManagedExecutionToHclTerraform(struct?: DataAwsccCloudformationStackSetManagedExecution): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudformationStackSetManagedExecutionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudformationStackSetManagedExecution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudformationStackSetManagedExecution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }
}
export interface DataAwsccCloudformationStackSetOperationPreferences {
}

export function dataAwsccCloudformationStackSetOperationPreferencesToTerraform(struct?: DataAwsccCloudformationStackSetOperationPreferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudformationStackSetOperationPreferencesToHclTerraform(struct?: DataAwsccCloudformationStackSetOperationPreferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudformationStackSetOperationPreferencesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudformationStackSetOperationPreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudformationStackSetOperationPreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // concurrency_mode - computed: true, optional: false, required: false
  public get concurrencyMode() {
    return this.getStringAttribute('concurrency_mode');
  }

  // failure_tolerance_count - computed: true, optional: false, required: false
  public get failureToleranceCount() {
    return this.getNumberAttribute('failure_tolerance_count');
  }

  // failure_tolerance_percentage - computed: true, optional: false, required: false
  public get failureTolerancePercentage() {
    return this.getNumberAttribute('failure_tolerance_percentage');
  }

  // max_concurrent_count - computed: true, optional: false, required: false
  public get maxConcurrentCount() {
    return this.getNumberAttribute('max_concurrent_count');
  }

  // max_concurrent_percentage - computed: true, optional: false, required: false
  public get maxConcurrentPercentage() {
    return this.getNumberAttribute('max_concurrent_percentage');
  }

  // region_concurrency_type - computed: true, optional: false, required: false
  public get regionConcurrencyType() {
    return this.getStringAttribute('region_concurrency_type');
  }

  // region_order - computed: true, optional: false, required: false
  public get regionOrder() {
    return this.getListAttribute('region_order');
  }
}
export interface DataAwsccCloudformationStackSetParameters {
}

export function dataAwsccCloudformationStackSetParametersToTerraform(struct?: DataAwsccCloudformationStackSetParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudformationStackSetParametersToHclTerraform(struct?: DataAwsccCloudformationStackSetParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudformationStackSetParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCloudformationStackSetParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudformationStackSetParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameter_key - computed: true, optional: false, required: false
  public get parameterKey() {
    return this.getStringAttribute('parameter_key');
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
}

export class DataAwsccCloudformationStackSetParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCloudformationStackSetParametersOutputReference {
    return new DataAwsccCloudformationStackSetParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargets {
}

export function dataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsToTerraform(struct?: DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsToHclTerraform(struct?: DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_filter_type - computed: true, optional: false, required: false
  public get accountFilterType() {
    return this.getStringAttribute('account_filter_type');
  }

  // accounts - computed: true, optional: false, required: false
  public get accounts() {
    return cdktn.Fn.tolist(this.getListAttribute('accounts'));
  }

  // accounts_url - computed: true, optional: false, required: false
  public get accountsUrl() {
    return this.getStringAttribute('accounts_url');
  }

  // organizational_unit_ids - computed: true, optional: false, required: false
  public get organizationalUnitIds() {
    return cdktn.Fn.tolist(this.getListAttribute('organizational_unit_ids'));
  }
}
export interface DataAwsccCloudformationStackSetStackInstancesGroupParameterOverrides {
}

export function dataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesToTerraform(struct?: DataAwsccCloudformationStackSetStackInstancesGroupParameterOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesToHclTerraform(struct?: DataAwsccCloudformationStackSetStackInstancesGroupParameterOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCloudformationStackSetStackInstancesGroupParameterOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudformationStackSetStackInstancesGroupParameterOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameter_key - computed: true, optional: false, required: false
  public get parameterKey() {
    return this.getStringAttribute('parameter_key');
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
}

export class DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference {
    return new DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCloudformationStackSetStackInstancesGroup {
}

export function dataAwsccCloudformationStackSetStackInstancesGroupToTerraform(struct?: DataAwsccCloudformationStackSetStackInstancesGroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudformationStackSetStackInstancesGroupToHclTerraform(struct?: DataAwsccCloudformationStackSetStackInstancesGroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudformationStackSetStackInstancesGroupOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCloudformationStackSetStackInstancesGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudformationStackSetStackInstancesGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deployment_targets - computed: true, optional: false, required: false
  private _deploymentTargets = new DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference(this, "deployment_targets");
  public get deploymentTargets() {
    return this._deploymentTargets;
  }

  // parameter_overrides - computed: true, optional: false, required: false
  private _parameterOverrides = new DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList(this, "parameter_overrides", true);
  public get parameterOverrides() {
    return this._parameterOverrides;
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return cdktn.Fn.tolist(this.getListAttribute('regions'));
  }
}

export class DataAwsccCloudformationStackSetStackInstancesGroupList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCloudformationStackSetStackInstancesGroupOutputReference {
    return new DataAwsccCloudformationStackSetStackInstancesGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCloudformationStackSetTags {
}

export function dataAwsccCloudformationStackSetTagsToTerraform(struct?: DataAwsccCloudformationStackSetTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudformationStackSetTagsToHclTerraform(struct?: DataAwsccCloudformationStackSetTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudformationStackSetTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCloudformationStackSetTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudformationStackSetTags | undefined) {
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

export class DataAwsccCloudformationStackSetTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCloudformationStackSetTagsOutputReference {
    return new DataAwsccCloudformationStackSetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/cloudformation_stack_set awscc_cloudformation_stack_set}
*/
export class DataAwsccCloudformationStackSet extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cloudformation_stack_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCloudformationStackSet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCloudformationStackSet to import
  * @param importFromId The id of the existing DataAwsccCloudformationStackSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/cloudformation_stack_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCloudformationStackSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudformation_stack_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/cloudformation_stack_set awscc_cloudformation_stack_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCloudformationStackSetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCloudformationStackSetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudformation_stack_set',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administration_role_arn - computed: true, optional: false, required: false
  public get administrationRoleArn() {
    return this.getStringAttribute('administration_role_arn');
  }

  // auto_deployment - computed: true, optional: false, required: false
  private _autoDeployment = new DataAwsccCloudformationStackSetAutoDeploymentOutputReference(this, "auto_deployment");
  public get autoDeployment() {
    return this._autoDeployment;
  }

  // call_as - computed: true, optional: false, required: false
  public get callAs() {
    return this.getStringAttribute('call_as');
  }

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    return cdktn.Fn.tolist(this.getListAttribute('capabilities'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // execution_role_name - computed: true, optional: false, required: false
  public get executionRoleName() {
    return this.getStringAttribute('execution_role_name');
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

  // managed_execution - computed: true, optional: false, required: false
  private _managedExecution = new DataAwsccCloudformationStackSetManagedExecutionOutputReference(this, "managed_execution");
  public get managedExecution() {
    return this._managedExecution;
  }

  // operation_preferences - computed: true, optional: false, required: false
  private _operationPreferences = new DataAwsccCloudformationStackSetOperationPreferencesOutputReference(this, "operation_preferences");
  public get operationPreferences() {
    return this._operationPreferences;
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataAwsccCloudformationStackSetParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }

  // permission_model - computed: true, optional: false, required: false
  public get permissionModel() {
    return this.getStringAttribute('permission_model');
  }

  // stack_instances_group - computed: true, optional: false, required: false
  private _stackInstancesGroup = new DataAwsccCloudformationStackSetStackInstancesGroupList(this, "stack_instances_group", true);
  public get stackInstancesGroup() {
    return this._stackInstancesGroup;
  }

  // stack_set_id - computed: true, optional: false, required: false
  public get stackSetId() {
    return this.getStringAttribute('stack_set_id');
  }

  // stack_set_name - computed: true, optional: false, required: false
  public get stackSetName() {
    return this.getStringAttribute('stack_set_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccCloudformationStackSetTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // template_body - computed: true, optional: false, required: false
  public get templateBody() {
    return this.getStringAttribute('template_body');
  }

  // template_url - computed: true, optional: false, required: false
  public get templateUrl() {
    return this.getStringAttribute('template_url');
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
