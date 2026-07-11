// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/greengrassv2_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccGreengrassv2DeploymentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/greengrassv2_deployment#id DataAwsccGreengrassv2Deployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdate {
}

export function dataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateToTerraform(struct?: DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateToHclTerraform(struct?: DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // merge - computed: true, optional: false, required: false
  public get merge() {
    return this.getStringAttribute('merge');
  }

  // reset - computed: true, optional: false, required: false
  public get reset() {
    return this.getListAttribute('reset');
  }
}
export interface DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimits {
}

export function dataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsToTerraform(struct?: DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsToHclTerraform(struct?: DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpus - computed: true, optional: false, required: false
  public get cpus() {
    return this.getNumberAttribute('cpus');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }
}
export interface DataAwsccGreengrassv2DeploymentComponentsRunWith {
}

export function dataAwsccGreengrassv2DeploymentComponentsRunWithToTerraform(struct?: DataAwsccGreengrassv2DeploymentComponentsRunWith): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGreengrassv2DeploymentComponentsRunWithToHclTerraform(struct?: DataAwsccGreengrassv2DeploymentComponentsRunWith): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGreengrassv2DeploymentComponentsRunWith | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGreengrassv2DeploymentComponentsRunWith | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // posix_user - computed: true, optional: false, required: false
  public get posixUser() {
    return this.getStringAttribute('posix_user');
  }

  // system_resource_limits - computed: true, optional: false, required: false
  private _systemResourceLimits = new DataAwsccGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference(this, "system_resource_limits");
  public get systemResourceLimits() {
    return this._systemResourceLimits;
  }

  // windows_user - computed: true, optional: false, required: false
  public get windowsUser() {
    return this.getStringAttribute('windows_user');
  }
}
export interface DataAwsccGreengrassv2DeploymentComponents {
}

export function dataAwsccGreengrassv2DeploymentComponentsToTerraform(struct?: DataAwsccGreengrassv2DeploymentComponents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGreengrassv2DeploymentComponentsToHclTerraform(struct?: DataAwsccGreengrassv2DeploymentComponents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGreengrassv2DeploymentComponentsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccGreengrassv2DeploymentComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGreengrassv2DeploymentComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component_version - computed: true, optional: false, required: false
  public get componentVersion() {
    return this.getStringAttribute('component_version');
  }

  // configuration_update - computed: true, optional: false, required: false
  private _configurationUpdate = new DataAwsccGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference(this, "configuration_update");
  public get configurationUpdate() {
    return this._configurationUpdate;
  }

  // run_with - computed: true, optional: false, required: false
  private _runWith = new DataAwsccGreengrassv2DeploymentComponentsRunWithOutputReference(this, "run_with");
  public get runWith() {
    return this._runWith;
  }
}

export class DataAwsccGreengrassv2DeploymentComponentsMap extends cdktn.ComplexMap {

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
  public get(key: string): DataAwsccGreengrassv2DeploymentComponentsOutputReference {
    return new DataAwsccGreengrassv2DeploymentComponentsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy {
}

export function dataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyToTerraform(struct?: DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyToHclTerraform(struct?: DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy | undefined) {
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

  // timeout_in_seconds - computed: true, optional: false, required: false
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
}
export interface DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy {
}

export function dataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyToTerraform(struct?: DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyToHclTerraform(struct?: DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timeout_in_seconds - computed: true, optional: false, required: false
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
}
export interface DataAwsccGreengrassv2DeploymentDeploymentPolicies {
}

export function dataAwsccGreengrassv2DeploymentDeploymentPoliciesToTerraform(struct?: DataAwsccGreengrassv2DeploymentDeploymentPolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGreengrassv2DeploymentDeploymentPoliciesToHclTerraform(struct?: DataAwsccGreengrassv2DeploymentDeploymentPolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGreengrassv2DeploymentDeploymentPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGreengrassv2DeploymentDeploymentPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component_update_policy - computed: true, optional: false, required: false
  private _componentUpdatePolicy = new DataAwsccGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference(this, "component_update_policy");
  public get componentUpdatePolicy() {
    return this._componentUpdatePolicy;
  }

  // configuration_validation_policy - computed: true, optional: false, required: false
  private _configurationValidationPolicy = new DataAwsccGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference(this, "configuration_validation_policy");
  public get configurationValidationPolicy() {
    return this._configurationValidationPolicy;
  }

  // failure_handling_policy - computed: true, optional: false, required: false
  public get failureHandlingPolicy() {
    return this.getStringAttribute('failure_handling_policy');
  }
}
export interface DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct {
}

export function dataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructToTerraform(struct?: DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructToHclTerraform(struct?: DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct | undefined) {
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

  // failure_type - computed: true, optional: false, required: false
  public get failureType() {
    return this.getStringAttribute('failure_type');
  }

  // min_number_of_executed_things - computed: true, optional: false, required: false
  public get minNumberOfExecutedThings() {
    return this.getNumberAttribute('min_number_of_executed_things');
  }

  // threshold_percentage - computed: true, optional: false, required: false
  public get thresholdPercentage() {
    return this.getNumberAttribute('threshold_percentage');
  }
}

export class DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference {
    return new DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfig {
}

export function dataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigToTerraform(struct?: DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigToHclTerraform(struct?: DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria_list - computed: true, optional: false, required: false
  private _criteriaList = new DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList(this, "criteria_list", false);
  public get criteriaList() {
    return this._criteriaList;
  }
}
export interface DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria {
}

export function dataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaToTerraform(struct?: DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaToHclTerraform(struct?: DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number_of_notified_things - computed: true, optional: false, required: false
  public get numberOfNotifiedThings() {
    return this.getNumberAttribute('number_of_notified_things');
  }

  // number_of_succeeded_things - computed: true, optional: false, required: false
  public get numberOfSucceededThings() {
    return this.getNumberAttribute('number_of_succeeded_things');
  }
}
export interface DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate {
}

export function dataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateToTerraform(struct?: DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateToHclTerraform(struct?: DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_rate_per_minute - computed: true, optional: false, required: false
  public get baseRatePerMinute() {
    return this.getNumberAttribute('base_rate_per_minute');
  }

  // increment_factor - computed: true, optional: false, required: false
  public get incrementFactor() {
    return this.getNumberAttribute('increment_factor');
  }

  // rate_increase_criteria - computed: true, optional: false, required: false
  private _rateIncreaseCriteria = new DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference(this, "rate_increase_criteria");
  public get rateIncreaseCriteria() {
    return this._rateIncreaseCriteria;
  }
}
export interface DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig {
}

export function dataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigToTerraform(struct?: DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigToHclTerraform(struct?: DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exponential_rate - computed: true, optional: false, required: false
  private _exponentialRate = new DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference(this, "exponential_rate");
  public get exponentialRate() {
    return this._exponentialRate;
  }

  // maximum_per_minute - computed: true, optional: false, required: false
  public get maximumPerMinute() {
    return this.getNumberAttribute('maximum_per_minute');
  }
}
export interface DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfig {
}

export function dataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigToTerraform(struct?: DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigToHclTerraform(struct?: DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // in_progress_timeout_in_minutes - computed: true, optional: false, required: false
  public get inProgressTimeoutInMinutes() {
    return this.getNumberAttribute('in_progress_timeout_in_minutes');
  }
}
export interface DataAwsccGreengrassv2DeploymentIotJobConfiguration {
}

export function dataAwsccGreengrassv2DeploymentIotJobConfigurationToTerraform(struct?: DataAwsccGreengrassv2DeploymentIotJobConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGreengrassv2DeploymentIotJobConfigurationToHclTerraform(struct?: DataAwsccGreengrassv2DeploymentIotJobConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGreengrassv2DeploymentIotJobConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGreengrassv2DeploymentIotJobConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abort_config - computed: true, optional: false, required: false
  private _abortConfig = new DataAwsccGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference(this, "abort_config");
  public get abortConfig() {
    return this._abortConfig;
  }

  // job_executions_rollout_config - computed: true, optional: false, required: false
  private _jobExecutionsRolloutConfig = new DataAwsccGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference(this, "job_executions_rollout_config");
  public get jobExecutionsRolloutConfig() {
    return this._jobExecutionsRolloutConfig;
  }

  // timeout_config - computed: true, optional: false, required: false
  private _timeoutConfig = new DataAwsccGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference(this, "timeout_config");
  public get timeoutConfig() {
    return this._timeoutConfig;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/greengrassv2_deployment awscc_greengrassv2_deployment}
*/
export class DataAwsccGreengrassv2Deployment extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_greengrassv2_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccGreengrassv2Deployment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccGreengrassv2Deployment to import
  * @param importFromId The id of the existing DataAwsccGreengrassv2Deployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/greengrassv2_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccGreengrassv2Deployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_greengrassv2_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/greengrassv2_deployment awscc_greengrassv2_deployment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccGreengrassv2DeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccGreengrassv2DeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_greengrassv2_deployment',
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

  // components - computed: true, optional: false, required: false
  private _components = new DataAwsccGreengrassv2DeploymentComponentsMap(this, "components");
  public get components() {
    return this._components;
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // deployment_name - computed: true, optional: false, required: false
  public get deploymentName() {
    return this.getStringAttribute('deployment_name');
  }

  // deployment_policies - computed: true, optional: false, required: false
  private _deploymentPolicies = new DataAwsccGreengrassv2DeploymentDeploymentPoliciesOutputReference(this, "deployment_policies");
  public get deploymentPolicies() {
    return this._deploymentPolicies;
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

  // iot_job_configuration - computed: true, optional: false, required: false
  private _iotJobConfiguration = new DataAwsccGreengrassv2DeploymentIotJobConfigurationOutputReference(this, "iot_job_configuration");
  public get iotJobConfiguration() {
    return this._iotJobConfiguration;
  }

  // parent_target_arn - computed: true, optional: false, required: false
  public get parentTargetArn() {
    return this.getStringAttribute('parent_target_arn');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // target_arn - computed: true, optional: false, required: false
  public get targetArn() {
    return this.getStringAttribute('target_arn');
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
