// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/codedeploy_deployment_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCodedeployDeploymentGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/codedeploy_deployment_group#id DataAwsccCodedeployDeploymentGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarms {
}

export function dataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsToTerraform(struct?: DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsToHclTerraform(struct?: DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarms | undefined) {
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

export class DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference {
    return new DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCodedeployDeploymentGroupAlarmConfiguration {
}

export function dataAwsccCodedeployDeploymentGroupAlarmConfigurationToTerraform(struct?: DataAwsccCodedeployDeploymentGroupAlarmConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentGroupAlarmConfigurationToHclTerraform(struct?: DataAwsccCodedeployDeploymentGroupAlarmConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCodedeployDeploymentGroupAlarmConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentGroupAlarmConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarms - computed: true, optional: false, required: false
  private _alarms = new DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList(this, "alarms", false);
  public get alarms() {
    return this._alarms;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // ignore_poll_alarm_failure - computed: true, optional: false, required: false
  public get ignorePollAlarmFailure() {
    return this.getBooleanAttribute('ignore_poll_alarm_failure');
  }
}
export interface DataAwsccCodedeployDeploymentGroupAutoRollbackConfiguration {
}

export function dataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationToTerraform(struct?: DataAwsccCodedeployDeploymentGroupAutoRollbackConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationToHclTerraform(struct?: DataAwsccCodedeployDeploymentGroupAutoRollbackConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCodedeployDeploymentGroupAutoRollbackConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentGroupAutoRollbackConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // events - computed: true, optional: false, required: false
  public get events() {
    return this.getListAttribute('events');
  }
}
export interface DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption {
}

export function dataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionToTerraform(struct?: DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionToHclTerraform(struct?: DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_on_timeout - computed: true, optional: false, required: false
  public get actionOnTimeout() {
    return this.getStringAttribute('action_on_timeout');
  }

  // wait_time_in_minutes - computed: true, optional: false, required: false
  public get waitTimeInMinutes() {
    return this.getNumberAttribute('wait_time_in_minutes');
  }
}
export interface DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption {
}

export function dataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionToTerraform(struct?: DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionToHclTerraform(struct?: DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption | undefined) {
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
}
export interface DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess {
}

export function dataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessToTerraform(struct?: DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessToHclTerraform(struct?: DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess | undefined) {
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

  // termination_wait_time_in_minutes - computed: true, optional: false, required: false
  public get terminationWaitTimeInMinutes() {
    return this.getNumberAttribute('termination_wait_time_in_minutes');
  }
}
export interface DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfiguration {
}

export function dataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationToTerraform(struct?: DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationToHclTerraform(struct?: DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deployment_ready_option - computed: true, optional: false, required: false
  private _deploymentReadyOption = new DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference(this, "deployment_ready_option");
  public get deploymentReadyOption() {
    return this._deploymentReadyOption;
  }

  // green_fleet_provisioning_option - computed: true, optional: false, required: false
  private _greenFleetProvisioningOption = new DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference(this, "green_fleet_provisioning_option");
  public get greenFleetProvisioningOption() {
    return this._greenFleetProvisioningOption;
  }

  // terminate_blue_instances_on_deployment_success - computed: true, optional: false, required: false
  private _terminateBlueInstancesOnDeploymentSuccess = new DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference(this, "terminate_blue_instances_on_deployment_success");
  public get terminateBlueInstancesOnDeploymentSuccess() {
    return this._terminateBlueInstancesOnDeploymentSuccess;
  }
}
export interface DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocation {
}

export function dataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationToTerraform(struct?: DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationToHclTerraform(struct?: DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // commit_id - computed: true, optional: false, required: false
  public get commitId() {
    return this.getStringAttribute('commit_id');
  }

  // repository - computed: true, optional: false, required: false
  public get repository() {
    return this.getStringAttribute('repository');
  }
}
export interface DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3Location {
}

export function dataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationToTerraform(struct?: DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3Location): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationToHclTerraform(struct?: DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3Location): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3Location | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3Location | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // bundle_type - computed: true, optional: false, required: false
  public get bundleType() {
    return this.getStringAttribute('bundle_type');
  }

  // e_tag - computed: true, optional: false, required: false
  public get eTag() {
    return this.getStringAttribute('e_tag');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataAwsccCodedeployDeploymentGroupDeploymentRevision {
}

export function dataAwsccCodedeployDeploymentGroupDeploymentRevisionToTerraform(struct?: DataAwsccCodedeployDeploymentGroupDeploymentRevision): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentGroupDeploymentRevisionToHclTerraform(struct?: DataAwsccCodedeployDeploymentGroupDeploymentRevision): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCodedeployDeploymentGroupDeploymentRevision | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentGroupDeploymentRevision | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // git_hub_location - computed: true, optional: false, required: false
  private _gitHubLocation = new DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference(this, "git_hub_location");
  public get gitHubLocation() {
    return this._gitHubLocation;
  }

  // revision_type - computed: true, optional: false, required: false
  public get revisionType() {
    return this.getStringAttribute('revision_type');
  }

  // s3_location - computed: true, optional: false, required: false
  private _s3Location = new DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference(this, "s3_location");
  public get s3Location() {
    return this._s3Location;
  }
}
export interface DataAwsccCodedeployDeploymentGroupDeployment {
}

export function dataAwsccCodedeployDeploymentGroupDeploymentToTerraform(struct?: DataAwsccCodedeployDeploymentGroupDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentGroupDeploymentToHclTerraform(struct?: DataAwsccCodedeployDeploymentGroupDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentGroupDeploymentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCodedeployDeploymentGroupDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentGroupDeployment | undefined) {
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

  // ignore_application_stop_failures - computed: true, optional: false, required: false
  public get ignoreApplicationStopFailures() {
    return this.getBooleanAttribute('ignore_application_stop_failures');
  }

  // revision - computed: true, optional: false, required: false
  private _revision = new DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference(this, "revision");
  public get revision() {
    return this._revision;
  }
}
export interface DataAwsccCodedeployDeploymentGroupDeploymentStyle {
}

export function dataAwsccCodedeployDeploymentGroupDeploymentStyleToTerraform(struct?: DataAwsccCodedeployDeploymentGroupDeploymentStyle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentGroupDeploymentStyleToHclTerraform(struct?: DataAwsccCodedeployDeploymentGroupDeploymentStyle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCodedeployDeploymentGroupDeploymentStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentGroupDeploymentStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deployment_option - computed: true, optional: false, required: false
  public get deploymentOption() {
    return this.getStringAttribute('deployment_option');
  }

  // deployment_type - computed: true, optional: false, required: false
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
}
export interface DataAwsccCodedeployDeploymentGroupEc2TagFilters {
}

export function dataAwsccCodedeployDeploymentGroupEc2TagFiltersToTerraform(struct?: DataAwsccCodedeployDeploymentGroupEc2TagFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentGroupEc2TagFiltersToHclTerraform(struct?: DataAwsccCodedeployDeploymentGroupEc2TagFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCodedeployDeploymentGroupEc2TagFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentGroupEc2TagFilters | undefined) {
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccCodedeployDeploymentGroupEc2TagFiltersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference {
    return new DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup {
}

export function dataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupToTerraform(struct?: DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupToHclTerraform(struct?: DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup | undefined) {
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference {
    return new DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct {
}

export function dataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructToTerraform(struct?: DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructToHclTerraform(struct?: DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ec_2_tag_group - computed: true, optional: false, required: false
  private _ec2TagGroup = new DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList(this, "ec_2_tag_group", false);
  public get ec2TagGroup() {
    return this._ec2TagGroup;
  }
}

export class DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference {
    return new DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCodedeployDeploymentGroupEc2TagSet {
}

export function dataAwsccCodedeployDeploymentGroupEc2TagSetToTerraform(struct?: DataAwsccCodedeployDeploymentGroupEc2TagSet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentGroupEc2TagSetToHclTerraform(struct?: DataAwsccCodedeployDeploymentGroupEc2TagSet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCodedeployDeploymentGroupEc2TagSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentGroupEc2TagSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ec_2_tag_set_list - computed: true, optional: false, required: false
  private _ec2TagSetList = new DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList(this, "ec_2_tag_set_list", false);
  public get ec2TagSetList() {
    return this._ec2TagSetList;
  }
}
export interface DataAwsccCodedeployDeploymentGroupEcsServices {
}

export function dataAwsccCodedeployDeploymentGroupEcsServicesToTerraform(struct?: DataAwsccCodedeployDeploymentGroupEcsServices): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentGroupEcsServicesToHclTerraform(struct?: DataAwsccCodedeployDeploymentGroupEcsServices): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCodedeployDeploymentGroupEcsServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentGroupEcsServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
}

export class DataAwsccCodedeployDeploymentGroupEcsServicesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference {
    return new DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct {
}

export function dataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructToTerraform(struct?: DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructToHclTerraform(struct?: DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct | undefined) {
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

export class DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference {
    return new DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct {
}

export function dataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructToTerraform(struct?: DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructToHclTerraform(struct?: DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct | undefined) {
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

export class DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference {
    return new DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute {
}

export function dataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteToTerraform(struct?: DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteToHclTerraform(struct?: DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // listener_arns - computed: true, optional: false, required: false
  public get listenerArns() {
    return this.getListAttribute('listener_arns');
  }
}
export interface DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups {
}

export function dataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsToTerraform(struct?: DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsToHclTerraform(struct?: DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups | undefined) {
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

export class DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference {
    return new DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute {
}

export function dataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteToTerraform(struct?: DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteToHclTerraform(struct?: DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // listener_arns - computed: true, optional: false, required: false
  public get listenerArns() {
    return this.getListAttribute('listener_arns');
  }
}
export interface DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct {
}

export function dataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructToTerraform(struct?: DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructToHclTerraform(struct?: DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prod_traffic_route - computed: true, optional: false, required: false
  private _prodTrafficRoute = new DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference(this, "prod_traffic_route");
  public get prodTrafficRoute() {
    return this._prodTrafficRoute;
  }

  // target_groups - computed: true, optional: false, required: false
  private _targetGroups = new DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList(this, "target_groups", false);
  public get targetGroups() {
    return this._targetGroups;
  }

  // test_traffic_route - computed: true, optional: false, required: false
  private _testTrafficRoute = new DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference(this, "test_traffic_route");
  public get testTrafficRoute() {
    return this._testTrafficRoute;
  }
}

export class DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference {
    return new DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCodedeployDeploymentGroupLoadBalancerInfo {
}

export function dataAwsccCodedeployDeploymentGroupLoadBalancerInfoToTerraform(struct?: DataAwsccCodedeployDeploymentGroupLoadBalancerInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentGroupLoadBalancerInfoToHclTerraform(struct?: DataAwsccCodedeployDeploymentGroupLoadBalancerInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCodedeployDeploymentGroupLoadBalancerInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentGroupLoadBalancerInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // elb_info_list - computed: true, optional: false, required: false
  private _elbInfoList = new DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList(this, "elb_info_list", false);
  public get elbInfoList() {
    return this._elbInfoList;
  }

  // target_group_info_list - computed: true, optional: false, required: false
  private _targetGroupInfoList = new DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList(this, "target_group_info_list", false);
  public get targetGroupInfoList() {
    return this._targetGroupInfoList;
  }

  // target_group_pair_info_list - computed: true, optional: false, required: false
  private _targetGroupPairInfoList = new DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList(this, "target_group_pair_info_list", false);
  public get targetGroupPairInfoList() {
    return this._targetGroupPairInfoList;
  }
}
export interface DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFilters {
}

export function dataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersToTerraform(struct?: DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersToHclTerraform(struct?: DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFilters | undefined) {
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference {
    return new DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup {
}

export function dataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupToTerraform(struct?: DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupToHclTerraform(struct?: DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup | undefined) {
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference {
    return new DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct {
}

export function dataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructToTerraform(struct?: DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructToHclTerraform(struct?: DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // on_premises_tag_group - computed: true, optional: false, required: false
  private _onPremisesTagGroup = new DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList(this, "on_premises_tag_group", false);
  public get onPremisesTagGroup() {
    return this._onPremisesTagGroup;
  }
}

export class DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference {
    return new DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCodedeployDeploymentGroupOnPremisesTagSet {
}

export function dataAwsccCodedeployDeploymentGroupOnPremisesTagSetToTerraform(struct?: DataAwsccCodedeployDeploymentGroupOnPremisesTagSet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentGroupOnPremisesTagSetToHclTerraform(struct?: DataAwsccCodedeployDeploymentGroupOnPremisesTagSet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCodedeployDeploymentGroupOnPremisesTagSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentGroupOnPremisesTagSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // on_premises_tag_set_list - computed: true, optional: false, required: false
  private _onPremisesTagSetList = new DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList(this, "on_premises_tag_set_list", false);
  public get onPremisesTagSetList() {
    return this._onPremisesTagSetList;
  }
}
export interface DataAwsccCodedeployDeploymentGroupTags {
}

export function dataAwsccCodedeployDeploymentGroupTagsToTerraform(struct?: DataAwsccCodedeployDeploymentGroupTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentGroupTagsToHclTerraform(struct?: DataAwsccCodedeployDeploymentGroupTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentGroupTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCodedeployDeploymentGroupTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentGroupTags | undefined) {
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

export class DataAwsccCodedeployDeploymentGroupTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCodedeployDeploymentGroupTagsOutputReference {
    return new DataAwsccCodedeployDeploymentGroupTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCodedeployDeploymentGroupTriggerConfigurations {
}

export function dataAwsccCodedeployDeploymentGroupTriggerConfigurationsToTerraform(struct?: DataAwsccCodedeployDeploymentGroupTriggerConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentGroupTriggerConfigurationsToHclTerraform(struct?: DataAwsccCodedeployDeploymentGroupTriggerConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCodedeployDeploymentGroupTriggerConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentGroupTriggerConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // trigger_events - computed: true, optional: false, required: false
  public get triggerEvents() {
    return this.getListAttribute('trigger_events');
  }

  // trigger_name - computed: true, optional: false, required: false
  public get triggerName() {
    return this.getStringAttribute('trigger_name');
  }

  // trigger_target_arn - computed: true, optional: false, required: false
  public get triggerTargetArn() {
    return this.getStringAttribute('trigger_target_arn');
  }
}

export class DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference {
    return new DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/codedeploy_deployment_group awscc_codedeploy_deployment_group}
*/
export class DataAwsccCodedeployDeploymentGroup extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_codedeploy_deployment_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCodedeployDeploymentGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCodedeployDeploymentGroup to import
  * @param importFromId The id of the existing DataAwsccCodedeployDeploymentGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/codedeploy_deployment_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCodedeployDeploymentGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_codedeploy_deployment_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/codedeploy_deployment_group awscc_codedeploy_deployment_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCodedeployDeploymentGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCodedeployDeploymentGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_codedeploy_deployment_group',
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

  // alarm_configuration - computed: true, optional: false, required: false
  private _alarmConfiguration = new DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference(this, "alarm_configuration");
  public get alarmConfiguration() {
    return this._alarmConfiguration;
  }

  // application_name - computed: true, optional: false, required: false
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }

  // auto_rollback_configuration - computed: true, optional: false, required: false
  private _autoRollbackConfiguration = new DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference(this, "auto_rollback_configuration");
  public get autoRollbackConfiguration() {
    return this._autoRollbackConfiguration;
  }

  // auto_scaling_groups - computed: true, optional: false, required: false
  public get autoScalingGroups() {
    return this.getListAttribute('auto_scaling_groups');
  }

  // blue_green_deployment_configuration - computed: true, optional: false, required: false
  private _blueGreenDeploymentConfiguration = new DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference(this, "blue_green_deployment_configuration");
  public get blueGreenDeploymentConfiguration() {
    return this._blueGreenDeploymentConfiguration;
  }

  // deployment - computed: true, optional: false, required: false
  private _deployment = new DataAwsccCodedeployDeploymentGroupDeploymentOutputReference(this, "deployment");
  public get deployment() {
    return this._deployment;
  }

  // deployment_config_name - computed: true, optional: false, required: false
  public get deploymentConfigName() {
    return this.getStringAttribute('deployment_config_name');
  }

  // deployment_group_name - computed: true, optional: false, required: false
  public get deploymentGroupName() {
    return this.getStringAttribute('deployment_group_name');
  }

  // deployment_style - computed: true, optional: false, required: false
  private _deploymentStyle = new DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference(this, "deployment_style");
  public get deploymentStyle() {
    return this._deploymentStyle;
  }

  // ec_2_tag_filters - computed: true, optional: false, required: false
  private _ec2TagFilters = new DataAwsccCodedeployDeploymentGroupEc2TagFiltersList(this, "ec_2_tag_filters", false);
  public get ec2TagFilters() {
    return this._ec2TagFilters;
  }

  // ec_2_tag_set - computed: true, optional: false, required: false
  private _ec2TagSet = new DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference(this, "ec_2_tag_set");
  public get ec2TagSet() {
    return this._ec2TagSet;
  }

  // ecs_services - computed: true, optional: false, required: false
  private _ecsServices = new DataAwsccCodedeployDeploymentGroupEcsServicesList(this, "ecs_services", false);
  public get ecsServices() {
    return this._ecsServices;
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

  // load_balancer_info - computed: true, optional: false, required: false
  private _loadBalancerInfo = new DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference(this, "load_balancer_info");
  public get loadBalancerInfo() {
    return this._loadBalancerInfo;
  }

  // on_premises_instance_tag_filters - computed: true, optional: false, required: false
  private _onPremisesInstanceTagFilters = new DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList(this, "on_premises_instance_tag_filters", false);
  public get onPremisesInstanceTagFilters() {
    return this._onPremisesInstanceTagFilters;
  }

  // on_premises_tag_set - computed: true, optional: false, required: false
  private _onPremisesTagSet = new DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference(this, "on_premises_tag_set");
  public get onPremisesTagSet() {
    return this._onPremisesTagSet;
  }

  // outdated_instances_strategy - computed: true, optional: false, required: false
  public get outdatedInstancesStrategy() {
    return this.getStringAttribute('outdated_instances_strategy');
  }

  // service_role_arn - computed: true, optional: false, required: false
  public get serviceRoleArn() {
    return this.getStringAttribute('service_role_arn');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccCodedeployDeploymentGroupTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // termination_hook_enabled - computed: true, optional: false, required: false
  public get terminationHookEnabled() {
    return this.getBooleanAttribute('termination_hook_enabled');
  }

  // trigger_configurations - computed: true, optional: false, required: false
  private _triggerConfigurations = new DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList(this, "trigger_configurations", false);
  public get triggerConfigurations() {
    return this._triggerConfigurations;
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
