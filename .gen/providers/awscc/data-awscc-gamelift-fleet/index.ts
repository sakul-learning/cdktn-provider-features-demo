// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/gamelift_fleet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccGameliftFleetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/gamelift_fleet#id DataAwsccGameliftFleet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccGameliftFleetAnywhereConfiguration {
}

export function dataAwsccGameliftFleetAnywhereConfigurationToTerraform(struct?: DataAwsccGameliftFleetAnywhereConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGameliftFleetAnywhereConfigurationToHclTerraform(struct?: DataAwsccGameliftFleetAnywhereConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGameliftFleetAnywhereConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGameliftFleetAnywhereConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGameliftFleetAnywhereConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cost - computed: true, optional: false, required: false
  public get cost() {
    return this.getStringAttribute('cost');
  }
}
export interface DataAwsccGameliftFleetCertificateConfiguration {
}

export function dataAwsccGameliftFleetCertificateConfigurationToTerraform(struct?: DataAwsccGameliftFleetCertificateConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGameliftFleetCertificateConfigurationToHclTerraform(struct?: DataAwsccGameliftFleetCertificateConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGameliftFleetCertificateConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGameliftFleetCertificateConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGameliftFleetCertificateConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_type - computed: true, optional: false, required: false
  public get certificateType() {
    return this.getStringAttribute('certificate_type');
  }
}
export interface DataAwsccGameliftFleetEc2InboundPermissions {
}

export function dataAwsccGameliftFleetEc2InboundPermissionsToTerraform(struct?: DataAwsccGameliftFleetEc2InboundPermissions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGameliftFleetEc2InboundPermissionsToHclTerraform(struct?: DataAwsccGameliftFleetEc2InboundPermissions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGameliftFleetEc2InboundPermissionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGameliftFleetEc2InboundPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGameliftFleetEc2InboundPermissions | undefined) {
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

export class DataAwsccGameliftFleetEc2InboundPermissionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGameliftFleetEc2InboundPermissionsOutputReference {
    return new DataAwsccGameliftFleetEc2InboundPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfiguration {
}

export function dataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationToTerraform(struct?: DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationToHclTerraform(struct?: DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfiguration | undefined) {
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
export interface DataAwsccGameliftFleetLocationsLocationCapacity {
}

export function dataAwsccGameliftFleetLocationsLocationCapacityToTerraform(struct?: DataAwsccGameliftFleetLocationsLocationCapacity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGameliftFleetLocationsLocationCapacityToHclTerraform(struct?: DataAwsccGameliftFleetLocationsLocationCapacity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGameliftFleetLocationsLocationCapacityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGameliftFleetLocationsLocationCapacity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGameliftFleetLocationsLocationCapacity | undefined) {
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
  private _managedCapacityConfiguration = new DataAwsccGameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference(this, "managed_capacity_configuration");
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
export interface DataAwsccGameliftFleetLocations {
}

export function dataAwsccGameliftFleetLocationsToTerraform(struct?: DataAwsccGameliftFleetLocations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGameliftFleetLocationsToHclTerraform(struct?: DataAwsccGameliftFleetLocations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGameliftFleetLocationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGameliftFleetLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGameliftFleetLocations | undefined) {
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
  private _locationCapacity = new DataAwsccGameliftFleetLocationsLocationCapacityOutputReference(this, "location_capacity");
  public get locationCapacity() {
    return this._locationCapacity;
  }

  // player_gateway_status - computed: true, optional: false, required: false
  public get playerGatewayStatus() {
    return this.getStringAttribute('player_gateway_status');
  }
}

export class DataAwsccGameliftFleetLocationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGameliftFleetLocationsOutputReference {
    return new DataAwsccGameliftFleetLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGameliftFleetPlayerGatewayConfiguration {
}

export function dataAwsccGameliftFleetPlayerGatewayConfigurationToTerraform(struct?: DataAwsccGameliftFleetPlayerGatewayConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGameliftFleetPlayerGatewayConfigurationToHclTerraform(struct?: DataAwsccGameliftFleetPlayerGatewayConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGameliftFleetPlayerGatewayConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGameliftFleetPlayerGatewayConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // game_server_ip_protocol_supported - computed: true, optional: false, required: false
  public get gameServerIpProtocolSupported() {
    return this.getStringAttribute('game_server_ip_protocol_supported');
  }
}
export interface DataAwsccGameliftFleetResourceCreationLimitPolicy {
}

export function dataAwsccGameliftFleetResourceCreationLimitPolicyToTerraform(struct?: DataAwsccGameliftFleetResourceCreationLimitPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGameliftFleetResourceCreationLimitPolicyToHclTerraform(struct?: DataAwsccGameliftFleetResourceCreationLimitPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGameliftFleetResourceCreationLimitPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGameliftFleetResourceCreationLimitPolicy | undefined) {
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
export interface DataAwsccGameliftFleetRuntimeConfigurationServerProcesses {
}

export function dataAwsccGameliftFleetRuntimeConfigurationServerProcessesToTerraform(struct?: DataAwsccGameliftFleetRuntimeConfigurationServerProcesses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGameliftFleetRuntimeConfigurationServerProcessesToHclTerraform(struct?: DataAwsccGameliftFleetRuntimeConfigurationServerProcesses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGameliftFleetRuntimeConfigurationServerProcesses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGameliftFleetRuntimeConfigurationServerProcesses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // concurrent_executions - computed: true, optional: false, required: false
  public get concurrentExecutions() {
    return this.getNumberAttribute('concurrent_executions');
  }

  // launch_path - computed: true, optional: false, required: false
  public get launchPath() {
    return this.getStringAttribute('launch_path');
  }

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
}

export class DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference {
    return new DataAwsccGameliftFleetRuntimeConfigurationServerProcessesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGameliftFleetRuntimeConfiguration {
}

export function dataAwsccGameliftFleetRuntimeConfigurationToTerraform(struct?: DataAwsccGameliftFleetRuntimeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGameliftFleetRuntimeConfigurationToHclTerraform(struct?: DataAwsccGameliftFleetRuntimeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGameliftFleetRuntimeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGameliftFleetRuntimeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGameliftFleetRuntimeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // game_session_activation_timeout_seconds - computed: true, optional: false, required: false
  public get gameSessionActivationTimeoutSeconds() {
    return this.getNumberAttribute('game_session_activation_timeout_seconds');
  }

  // max_concurrent_game_session_activations - computed: true, optional: false, required: false
  public get maxConcurrentGameSessionActivations() {
    return this.getNumberAttribute('max_concurrent_game_session_activations');
  }

  // server_processes - computed: true, optional: false, required: false
  private _serverProcesses = new DataAwsccGameliftFleetRuntimeConfigurationServerProcessesList(this, "server_processes", false);
  public get serverProcesses() {
    return this._serverProcesses;
  }
}
export interface DataAwsccGameliftFleetScalingPoliciesTargetConfiguration {
}

export function dataAwsccGameliftFleetScalingPoliciesTargetConfigurationToTerraform(struct?: DataAwsccGameliftFleetScalingPoliciesTargetConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGameliftFleetScalingPoliciesTargetConfigurationToHclTerraform(struct?: DataAwsccGameliftFleetScalingPoliciesTargetConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGameliftFleetScalingPoliciesTargetConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGameliftFleetScalingPoliciesTargetConfiguration | undefined) {
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
export interface DataAwsccGameliftFleetScalingPolicies {
}

export function dataAwsccGameliftFleetScalingPoliciesToTerraform(struct?: DataAwsccGameliftFleetScalingPolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGameliftFleetScalingPoliciesToHclTerraform(struct?: DataAwsccGameliftFleetScalingPolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGameliftFleetScalingPoliciesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGameliftFleetScalingPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGameliftFleetScalingPolicies | undefined) {
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

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target_configuration - computed: true, optional: false, required: false
  private _targetConfiguration = new DataAwsccGameliftFleetScalingPoliciesTargetConfigurationOutputReference(this, "target_configuration");
  public get targetConfiguration() {
    return this._targetConfiguration;
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // update_status - computed: true, optional: false, required: false
  public get updateStatus() {
    return this.getStringAttribute('update_status');
  }
}

export class DataAwsccGameliftFleetScalingPoliciesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGameliftFleetScalingPoliciesOutputReference {
    return new DataAwsccGameliftFleetScalingPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGameliftFleetTags {
}

export function dataAwsccGameliftFleetTagsToTerraform(struct?: DataAwsccGameliftFleetTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGameliftFleetTagsToHclTerraform(struct?: DataAwsccGameliftFleetTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGameliftFleetTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGameliftFleetTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGameliftFleetTags | undefined) {
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

export class DataAwsccGameliftFleetTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGameliftFleetTagsOutputReference {
    return new DataAwsccGameliftFleetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/gamelift_fleet awscc_gamelift_fleet}
*/
export class DataAwsccGameliftFleet extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_gamelift_fleet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccGameliftFleet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccGameliftFleet to import
  * @param importFromId The id of the existing DataAwsccGameliftFleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/gamelift_fleet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccGameliftFleet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_gamelift_fleet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/gamelift_fleet awscc_gamelift_fleet} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccGameliftFleetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccGameliftFleetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_gamelift_fleet',
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

  // anywhere_configuration - computed: true, optional: false, required: false
  private _anywhereConfiguration = new DataAwsccGameliftFleetAnywhereConfigurationOutputReference(this, "anywhere_configuration");
  public get anywhereConfiguration() {
    return this._anywhereConfiguration;
  }

  // apply_capacity - computed: true, optional: false, required: false
  public get applyCapacity() {
    return this.getStringAttribute('apply_capacity');
  }

  // build_id - computed: true, optional: false, required: false
  public get buildId() {
    return this.getStringAttribute('build_id');
  }

  // certificate_configuration - computed: true, optional: false, required: false
  private _certificateConfiguration = new DataAwsccGameliftFleetCertificateConfigurationOutputReference(this, "certificate_configuration");
  public get certificateConfiguration() {
    return this._certificateConfiguration;
  }

  // compute_type - computed: true, optional: false, required: false
  public get computeType() {
    return this.getStringAttribute('compute_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // desired_ec2_instances - computed: true, optional: false, required: false
  public get desiredEc2Instances() {
    return this.getNumberAttribute('desired_ec2_instances');
  }

  // ec2_inbound_permissions - computed: true, optional: false, required: false
  private _ec2InboundPermissions = new DataAwsccGameliftFleetEc2InboundPermissionsList(this, "ec2_inbound_permissions", false);
  public get ec2InboundPermissions() {
    return this._ec2InboundPermissions;
  }

  // ec2_instance_type - computed: true, optional: false, required: false
  public get ec2InstanceType() {
    return this.getStringAttribute('ec2_instance_type');
  }

  // fleet_arn - computed: true, optional: false, required: false
  public get fleetArn() {
    return this.getStringAttribute('fleet_arn');
  }

  // fleet_id - computed: true, optional: false, required: false
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
  }

  // fleet_type - computed: true, optional: false, required: false
  public get fleetType() {
    return this.getStringAttribute('fleet_type');
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

  // instance_role_arn - computed: true, optional: false, required: false
  public get instanceRoleArn() {
    return this.getStringAttribute('instance_role_arn');
  }

  // instance_role_credentials_provider - computed: true, optional: false, required: false
  public get instanceRoleCredentialsProvider() {
    return this.getStringAttribute('instance_role_credentials_provider');
  }

  // locations - computed: true, optional: false, required: false
  private _locations = new DataAwsccGameliftFleetLocationsList(this, "locations", false);
  public get locations() {
    return this._locations;
  }

  // log_paths - computed: true, optional: false, required: false
  public get logPaths() {
    return this.getListAttribute('log_paths');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }

  // metric_groups - computed: true, optional: false, required: false
  public get metricGroups() {
    return this.getListAttribute('metric_groups');
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // new_game_session_protection_policy - computed: true, optional: false, required: false
  public get newGameSessionProtectionPolicy() {
    return this.getStringAttribute('new_game_session_protection_policy');
  }

  // peer_vpc_aws_account_id - computed: true, optional: false, required: false
  public get peerVpcAwsAccountId() {
    return this.getStringAttribute('peer_vpc_aws_account_id');
  }

  // peer_vpc_id - computed: true, optional: false, required: false
  public get peerVpcId() {
    return this.getStringAttribute('peer_vpc_id');
  }

  // player_gateway_configuration - computed: true, optional: false, required: false
  private _playerGatewayConfiguration = new DataAwsccGameliftFleetPlayerGatewayConfigurationOutputReference(this, "player_gateway_configuration");
  public get playerGatewayConfiguration() {
    return this._playerGatewayConfiguration;
  }

  // player_gateway_mode - computed: true, optional: false, required: false
  public get playerGatewayMode() {
    return this.getStringAttribute('player_gateway_mode');
  }

  // resource_creation_limit_policy - computed: true, optional: false, required: false
  private _resourceCreationLimitPolicy = new DataAwsccGameliftFleetResourceCreationLimitPolicyOutputReference(this, "resource_creation_limit_policy");
  public get resourceCreationLimitPolicy() {
    return this._resourceCreationLimitPolicy;
  }

  // runtime_configuration - computed: true, optional: false, required: false
  private _runtimeConfiguration = new DataAwsccGameliftFleetRuntimeConfigurationOutputReference(this, "runtime_configuration");
  public get runtimeConfiguration() {
    return this._runtimeConfiguration;
  }

  // scaling_policies - computed: true, optional: false, required: false
  private _scalingPolicies = new DataAwsccGameliftFleetScalingPoliciesList(this, "scaling_policies", false);
  public get scalingPolicies() {
    return this._scalingPolicies;
  }

  // script_id - computed: true, optional: false, required: false
  public get scriptId() {
    return this.getStringAttribute('script_id');
  }

  // server_launch_parameters - computed: true, optional: false, required: false
  public get serverLaunchParameters() {
    return this.getStringAttribute('server_launch_parameters');
  }

  // server_launch_path - computed: true, optional: false, required: false
  public get serverLaunchPath() {
    return this.getStringAttribute('server_launch_path');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccGameliftFleetTagsList(this, "tags", true);
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
