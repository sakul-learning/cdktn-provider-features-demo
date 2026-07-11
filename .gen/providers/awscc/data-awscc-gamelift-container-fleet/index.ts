// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/gamelift_container_fleet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccGameliftContainerFleetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/gamelift_container_fleet#id DataAwsccGameliftContainerFleet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccGameliftContainerFleetDeploymentConfiguration {
}

export function dataAwsccGameliftContainerFleetDeploymentConfigurationToTerraform(struct?: DataAwsccGameliftContainerFleetDeploymentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGameliftContainerFleetDeploymentConfigurationToHclTerraform(struct?: DataAwsccGameliftContainerFleetDeploymentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGameliftContainerFleetDeploymentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGameliftContainerFleetDeploymentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // impairment_strategy - computed: true, optional: false, required: false
  public get impairmentStrategy() {
    return this.getStringAttribute('impairment_strategy');
  }

  // minimum_healthy_percentage - computed: true, optional: false, required: false
  public get minimumHealthyPercentage() {
    return this.getNumberAttribute('minimum_healthy_percentage');
  }

  // protection_strategy - computed: true, optional: false, required: false
  public get protectionStrategy() {
    return this.getStringAttribute('protection_strategy');
  }
}
export interface DataAwsccGameliftContainerFleetDeploymentDetails {
}

export function dataAwsccGameliftContainerFleetDeploymentDetailsToTerraform(struct?: DataAwsccGameliftContainerFleetDeploymentDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGameliftContainerFleetDeploymentDetailsToHclTerraform(struct?: DataAwsccGameliftContainerFleetDeploymentDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGameliftContainerFleetDeploymentDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGameliftContainerFleetDeploymentDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // latest_deployment_id - computed: true, optional: false, required: false
  public get latestDeploymentId() {
    return this.getStringAttribute('latest_deployment_id');
  }
}
export interface DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicy {
}

export function dataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyToTerraform(struct?: DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyToHclTerraform(struct?: DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // new_game_sessions_per_creator - computed: true, optional: false, required: false
  public get newGameSessionsPerCreator() {
    return this.getNumberAttribute('new_game_sessions_per_creator');
  }

  // policy_period_in_minutes - computed: true, optional: false, required: false
  public get policyPeriodInMinutes() {
    return this.getNumberAttribute('policy_period_in_minutes');
  }
}
export interface DataAwsccGameliftContainerFleetInstanceConnectionPortRange {
}

export function dataAwsccGameliftContainerFleetInstanceConnectionPortRangeToTerraform(struct?: DataAwsccGameliftContainerFleetInstanceConnectionPortRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGameliftContainerFleetInstanceConnectionPortRangeToHclTerraform(struct?: DataAwsccGameliftContainerFleetInstanceConnectionPortRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGameliftContainerFleetInstanceConnectionPortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGameliftContainerFleetInstanceConnectionPortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from_port - computed: true, optional: false, required: false
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }

  // to_port - computed: true, optional: false, required: false
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
}
export interface DataAwsccGameliftContainerFleetInstanceInboundPermissions {
}

export function dataAwsccGameliftContainerFleetInstanceInboundPermissionsToTerraform(struct?: DataAwsccGameliftContainerFleetInstanceInboundPermissions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGameliftContainerFleetInstanceInboundPermissionsToHclTerraform(struct?: DataAwsccGameliftContainerFleetInstanceInboundPermissions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGameliftContainerFleetInstanceInboundPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGameliftContainerFleetInstanceInboundPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from_port - computed: true, optional: false, required: false
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }

  // ip_range - computed: true, optional: false, required: false
  public get ipRange() {
    return this.getStringAttribute('ip_range');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // to_port - computed: true, optional: false, required: false
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
}

export class DataAwsccGameliftContainerFleetInstanceInboundPermissionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference {
    return new DataAwsccGameliftContainerFleetInstanceInboundPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration {
}

export function dataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationToTerraform(struct?: DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationToHclTerraform(struct?: DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // scale_in_after_inactivity_minutes - computed: true, optional: false, required: false
  public get scaleInAfterInactivityMinutes() {
    return this.getNumberAttribute('scale_in_after_inactivity_minutes');
  }

  // zero_capacity_strategy - computed: true, optional: false, required: false
  public get zeroCapacityStrategy() {
    return this.getStringAttribute('zero_capacity_strategy');
  }
}
export interface DataAwsccGameliftContainerFleetLocationsLocationCapacity {
}

export function dataAwsccGameliftContainerFleetLocationsLocationCapacityToTerraform(struct?: DataAwsccGameliftContainerFleetLocationsLocationCapacity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGameliftContainerFleetLocationsLocationCapacityToHclTerraform(struct?: DataAwsccGameliftContainerFleetLocationsLocationCapacity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGameliftContainerFleetLocationsLocationCapacity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGameliftContainerFleetLocationsLocationCapacity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // desired_ec2_instances - computed: true, optional: false, required: false
  public get desiredEc2Instances() {
    return this.getNumberAttribute('desired_ec2_instances');
  }

  // managed_capacity_configuration - computed: true, optional: false, required: false
  private _managedCapacityConfiguration = new DataAwsccGameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference(this, "managed_capacity_configuration");
  public get managedCapacityConfiguration() {
    return this._managedCapacityConfiguration;
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
}
export interface DataAwsccGameliftContainerFleetLocations {
}

export function dataAwsccGameliftContainerFleetLocationsToTerraform(struct?: DataAwsccGameliftContainerFleetLocations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGameliftContainerFleetLocationsToHclTerraform(struct?: DataAwsccGameliftContainerFleetLocations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGameliftContainerFleetLocationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGameliftContainerFleetLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGameliftContainerFleetLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // location_capacity - computed: true, optional: false, required: false
  private _locationCapacity = new DataAwsccGameliftContainerFleetLocationsLocationCapacityOutputReference(this, "location_capacity");
  public get locationCapacity() {
    return this._locationCapacity;
  }

  // player_gateway_status - computed: true, optional: false, required: false
  public get playerGatewayStatus() {
    return this.getStringAttribute('player_gateway_status');
  }

  // stopped_actions - computed: true, optional: false, required: false
  public get stoppedActions() {
    return this.getListAttribute('stopped_actions');
  }
}

export class DataAwsccGameliftContainerFleetLocationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGameliftContainerFleetLocationsOutputReference {
    return new DataAwsccGameliftContainerFleetLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGameliftContainerFleetLogConfiguration {
}

export function dataAwsccGameliftContainerFleetLogConfigurationToTerraform(struct?: DataAwsccGameliftContainerFleetLogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGameliftContainerFleetLogConfigurationToHclTerraform(struct?: DataAwsccGameliftContainerFleetLogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGameliftContainerFleetLogConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGameliftContainerFleetLogConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGameliftContainerFleetLogConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_destination - computed: true, optional: false, required: false
  public get logDestination() {
    return this.getStringAttribute('log_destination');
  }

  // log_group_arn - computed: true, optional: false, required: false
  public get logGroupArn() {
    return this.getStringAttribute('log_group_arn');
  }

  // s3_bucket_name - computed: true, optional: false, required: false
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
}
export interface DataAwsccGameliftContainerFleetScalingPoliciesTargetConfiguration {
}

export function dataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationToTerraform(struct?: DataAwsccGameliftContainerFleetScalingPoliciesTargetConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationToHclTerraform(struct?: DataAwsccGameliftContainerFleetScalingPoliciesTargetConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGameliftContainerFleetScalingPoliciesTargetConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGameliftContainerFleetScalingPoliciesTargetConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // target_value - computed: true, optional: false, required: false
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
}
export interface DataAwsccGameliftContainerFleetScalingPolicies {
}

export function dataAwsccGameliftContainerFleetScalingPoliciesToTerraform(struct?: DataAwsccGameliftContainerFleetScalingPolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGameliftContainerFleetScalingPoliciesToHclTerraform(struct?: DataAwsccGameliftContainerFleetScalingPolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGameliftContainerFleetScalingPoliciesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGameliftContainerFleetScalingPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGameliftContainerFleetScalingPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison_operator - computed: true, optional: false, required: false
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }

  // evaluation_periods - computed: true, optional: false, required: false
  public get evaluationPeriods() {
    return this.getNumberAttribute('evaluation_periods');
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // policy_type - computed: true, optional: false, required: false
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }

  // scaling_adjustment - computed: true, optional: false, required: false
  public get scalingAdjustment() {
    return this.getNumberAttribute('scaling_adjustment');
  }

  // scaling_adjustment_type - computed: true, optional: false, required: false
  public get scalingAdjustmentType() {
    return this.getStringAttribute('scaling_adjustment_type');
  }

  // target_configuration - computed: true, optional: false, required: false
  private _targetConfiguration = new DataAwsccGameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference(this, "target_configuration");
  public get targetConfiguration() {
    return this._targetConfiguration;
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
}

export class DataAwsccGameliftContainerFleetScalingPoliciesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGameliftContainerFleetScalingPoliciesOutputReference {
    return new DataAwsccGameliftContainerFleetScalingPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGameliftContainerFleetTags {
}

export function dataAwsccGameliftContainerFleetTagsToTerraform(struct?: DataAwsccGameliftContainerFleetTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGameliftContainerFleetTagsToHclTerraform(struct?: DataAwsccGameliftContainerFleetTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGameliftContainerFleetTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGameliftContainerFleetTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGameliftContainerFleetTags | undefined) {
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

export class DataAwsccGameliftContainerFleetTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGameliftContainerFleetTagsOutputReference {
    return new DataAwsccGameliftContainerFleetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/gamelift_container_fleet awscc_gamelift_container_fleet}
*/
export class DataAwsccGameliftContainerFleet extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_gamelift_container_fleet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccGameliftContainerFleet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccGameliftContainerFleet to import
  * @param importFromId The id of the existing DataAwsccGameliftContainerFleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/gamelift_container_fleet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccGameliftContainerFleet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_gamelift_container_fleet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/gamelift_container_fleet awscc_gamelift_container_fleet} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccGameliftContainerFleetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccGameliftContainerFleetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_gamelift_container_fleet',
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

  // billing_type - computed: true, optional: false, required: false
  public get billingType() {
    return this.getStringAttribute('billing_type');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // deployment_configuration - computed: true, optional: false, required: false
  private _deploymentConfiguration = new DataAwsccGameliftContainerFleetDeploymentConfigurationOutputReference(this, "deployment_configuration");
  public get deploymentConfiguration() {
    return this._deploymentConfiguration;
  }

  // deployment_details - computed: true, optional: false, required: false
  private _deploymentDetails = new DataAwsccGameliftContainerFleetDeploymentDetailsOutputReference(this, "deployment_details");
  public get deploymentDetails() {
    return this._deploymentDetails;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // fleet_arn - computed: true, optional: false, required: false
  public get fleetArn() {
    return this.getStringAttribute('fleet_arn');
  }

  // fleet_id - computed: true, optional: false, required: false
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
  }

  // fleet_role_arn - computed: true, optional: false, required: false
  public get fleetRoleArn() {
    return this.getStringAttribute('fleet_role_arn');
  }

  // game_server_container_group_definition_arn - computed: true, optional: false, required: false
  public get gameServerContainerGroupDefinitionArn() {
    return this.getStringAttribute('game_server_container_group_definition_arn');
  }

  // game_server_container_group_definition_name - computed: true, optional: false, required: false
  public get gameServerContainerGroupDefinitionName() {
    return this.getStringAttribute('game_server_container_group_definition_name');
  }

  // game_server_container_groups_per_instance - computed: true, optional: false, required: false
  public get gameServerContainerGroupsPerInstance() {
    return this.getNumberAttribute('game_server_container_groups_per_instance');
  }

  // game_session_creation_limit_policy - computed: true, optional: false, required: false
  private _gameSessionCreationLimitPolicy = new DataAwsccGameliftContainerFleetGameSessionCreationLimitPolicyOutputReference(this, "game_session_creation_limit_policy");
  public get gameSessionCreationLimitPolicy() {
    return this._gameSessionCreationLimitPolicy;
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

  // instance_connection_port_range - computed: true, optional: false, required: false
  private _instanceConnectionPortRange = new DataAwsccGameliftContainerFleetInstanceConnectionPortRangeOutputReference(this, "instance_connection_port_range");
  public get instanceConnectionPortRange() {
    return this._instanceConnectionPortRange;
  }

  // instance_inbound_permissions - computed: true, optional: false, required: false
  private _instanceInboundPermissions = new DataAwsccGameliftContainerFleetInstanceInboundPermissionsList(this, "instance_inbound_permissions", false);
  public get instanceInboundPermissions() {
    return this._instanceInboundPermissions;
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // locations - computed: true, optional: false, required: false
  private _locations = new DataAwsccGameliftContainerFleetLocationsList(this, "locations", false);
  public get locations() {
    return this._locations;
  }

  // log_configuration - computed: true, optional: false, required: false
  private _logConfiguration = new DataAwsccGameliftContainerFleetLogConfigurationOutputReference(this, "log_configuration");
  public get logConfiguration() {
    return this._logConfiguration;
  }

  // maximum_game_server_container_groups_per_instance - computed: true, optional: false, required: false
  public get maximumGameServerContainerGroupsPerInstance() {
    return this.getNumberAttribute('maximum_game_server_container_groups_per_instance');
  }

  // metric_groups - computed: true, optional: false, required: false
  public get metricGroups() {
    return this.getListAttribute('metric_groups');
  }

  // new_game_session_protection_policy - computed: true, optional: false, required: false
  public get newGameSessionProtectionPolicy() {
    return this.getStringAttribute('new_game_session_protection_policy');
  }

  // per_instance_container_group_definition_arn - computed: true, optional: false, required: false
  public get perInstanceContainerGroupDefinitionArn() {
    return this.getStringAttribute('per_instance_container_group_definition_arn');
  }

  // per_instance_container_group_definition_name - computed: true, optional: false, required: false
  public get perInstanceContainerGroupDefinitionName() {
    return this.getStringAttribute('per_instance_container_group_definition_name');
  }

  // player_gateway_mode - computed: true, optional: false, required: false
  public get playerGatewayMode() {
    return this.getStringAttribute('player_gateway_mode');
  }

  // scaling_policies - computed: true, optional: false, required: false
  private _scalingPolicies = new DataAwsccGameliftContainerFleetScalingPoliciesList(this, "scaling_policies", false);
  public get scalingPolicies() {
    return this._scalingPolicies;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccGameliftContainerFleetTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
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
