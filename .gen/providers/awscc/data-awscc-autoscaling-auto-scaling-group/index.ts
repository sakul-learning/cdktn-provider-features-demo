// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/autoscaling_auto_scaling_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccAutoscalingAutoScalingGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/autoscaling_auto_scaling_group#id DataAwsccAutoscalingAutoScalingGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistribution {
}

export function dataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistribution): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistribution): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistribution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistribution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_distribution_strategy - computed: true, optional: false, required: false
  public get capacityDistributionStrategy() {
    return this.getStringAttribute('capacity_distribution_strategy');
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicy {
}

export function dataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // impaired_zone_health_check_behavior - computed: true, optional: false, required: false
  public get impairedZoneHealthCheckBehavior() {
    return this.getStringAttribute('impaired_zone_health_check_behavior');
  }

  // zonal_shift_enabled - computed: true, optional: false, required: false
  public get zonalShiftEnabled() {
    return this.getBooleanAttribute('zonal_shift_enabled');
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTarget {
}

export function dataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_reservation_ids - computed: true, optional: false, required: false
  public get capacityReservationIds() {
    return this.getListAttribute('capacity_reservation_ids');
  }

  // capacity_reservation_resource_group_arns - computed: true, optional: false, required: false
  public get capacityReservationResourceGroupArns() {
    return this.getListAttribute('capacity_reservation_resource_group_arns');
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecification {
}

export function dataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_reservation_preference - computed: true, optional: false, required: false
  public get capacityReservationPreference() {
    return this.getStringAttribute('capacity_reservation_preference');
  }

  // capacity_reservation_target - computed: true, optional: false, required: false
  private _capacityReservationTarget = new DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference(this, "capacity_reservation_target");
  public get capacityReservationTarget() {
    return this._capacityReservationTarget;
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggers {
}

export function dataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // terminate_hook_abandon - computed: true, optional: false, required: false
  public get terminateHookAbandon() {
    return this.getStringAttribute('terminate_hook_abandon');
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicy {
}

export function dataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // retention_triggers - computed: true, optional: false, required: false
  private _retentionTriggers = new DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyRetentionTriggersOutputReference(this, "retention_triggers");
  public get retentionTriggers() {
    return this._retentionTriggers;
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicy {
}

export function dataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_healthy_percentage - computed: true, optional: false, required: false
  public get maxHealthyPercentage() {
    return this.getNumberAttribute('max_healthy_percentage');
  }

  // min_healthy_percentage - computed: true, optional: false, required: false
  public get minHealthyPercentage() {
    return this.getNumberAttribute('min_healthy_percentage');
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupLaunchTemplate {
}

export function dataAwsccAutoscalingAutoScalingGroupLaunchTemplateToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupLaunchTemplate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupLaunchTemplateToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupLaunchTemplate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupLaunchTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupLaunchTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // launch_template_id - computed: true, optional: false, required: false
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }

  // launch_template_name - computed: true, optional: false, required: false
  public get launchTemplateName() {
    return this.getStringAttribute('launch_template_name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStruct {
}

export function dataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_result - computed: true, optional: false, required: false
  public get defaultResult() {
    return this.getStringAttribute('default_result');
  }

  // heartbeat_timeout - computed: true, optional: false, required: false
  public get heartbeatTimeout() {
    return this.getNumberAttribute('heartbeat_timeout');
  }

  // lifecycle_hook_name - computed: true, optional: false, required: false
  public get lifecycleHookName() {
    return this.getStringAttribute('lifecycle_hook_name');
  }

  // lifecycle_transition - computed: true, optional: false, required: false
  public get lifecycleTransition() {
    return this.getStringAttribute('lifecycle_transition');
  }

  // notification_metadata - computed: true, optional: false, required: false
  public get notificationMetadata() {
    return this.getStringAttribute('notification_metadata');
  }

  // notification_target_arn - computed: true, optional: false, required: false
  public get notificationTargetArn() {
    return this.getStringAttribute('notification_target_arn');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export class DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference {
    return new DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupMetricsCollection {
}

export function dataAwsccAutoscalingAutoScalingGroupMetricsCollectionToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMetricsCollection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupMetricsCollectionToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMetricsCollection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupMetricsCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupMetricsCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // granularity - computed: true, optional: false, required: false
  public get granularity() {
    return this.getStringAttribute('granularity');
  }

  // metrics - computed: true, optional: false, required: false
  public get metrics() {
    return this.getListAttribute('metrics');
  }
}

export class DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference {
    return new DataAwsccAutoscalingAutoScalingGroupMetricsCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistribution {
}

export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistribution): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistribution): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistribution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistribution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // on_demand_allocation_strategy - computed: true, optional: false, required: false
  public get onDemandAllocationStrategy() {
    return this.getStringAttribute('on_demand_allocation_strategy');
  }

  // on_demand_base_capacity - computed: true, optional: false, required: false
  public get onDemandBaseCapacity() {
    return this.getNumberAttribute('on_demand_base_capacity');
  }

  // on_demand_percentage_above_base_capacity - computed: true, optional: false, required: false
  public get onDemandPercentageAboveBaseCapacity() {
    return this.getNumberAttribute('on_demand_percentage_above_base_capacity');
  }

  // spot_allocation_strategy - computed: true, optional: false, required: false
  public get spotAllocationStrategy() {
    return this.getStringAttribute('spot_allocation_strategy');
  }

  // spot_instance_pools - computed: true, optional: false, required: false
  public get spotInstancePools() {
    return this.getNumberAttribute('spot_instance_pools');
  }

  // spot_max_price - computed: true, optional: false, required: false
  public get spotMaxPrice() {
    return this.getStringAttribute('spot_max_price');
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification {
}

export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // launch_template_id - computed: true, optional: false, required: false
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }

  // launch_template_name - computed: true, optional: false, required: false
  public get launchTemplateName() {
    return this.getStringAttribute('launch_template_name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCount {
}

export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiB {
}

export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiB): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiB): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiB | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiB | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbps {
}

export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences {
}

export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_family - computed: true, optional: false, required: false
  public get instanceFamily() {
    return this.getStringAttribute('instance_family');
  }
}

export class DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference {
    return new DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpu {
}

export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpu): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpu): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // references - computed: true, optional: false, required: false
  private _references = new DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList(this, "references", false);
  public get references() {
    return this._references;
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactors {
}

export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu - computed: true, optional: false, required: false
  private _cpu = new DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpu {
}

export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpu): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpu): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiB {
}

export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiB): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiB): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiB | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiB | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbps {
}

export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCount {
}

export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGb {
}

export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGb): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGb): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCount {
}

export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirements {
}

export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accelerator_count - computed: true, optional: false, required: false
  private _acceleratorCount = new DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorCountOutputReference(this, "accelerator_count");
  public get acceleratorCount() {
    return this._acceleratorCount;
  }

  // accelerator_manufacturers - computed: true, optional: false, required: false
  public get acceleratorManufacturers() {
    return cdktn.Fn.tolist(this.getListAttribute('accelerator_manufacturers'));
  }

  // accelerator_names - computed: true, optional: false, required: false
  public get acceleratorNames() {
    return cdktn.Fn.tolist(this.getListAttribute('accelerator_names'));
  }

  // accelerator_total_memory_mi_b - computed: true, optional: false, required: false
  private _acceleratorTotalMemoryMiB = new DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference(this, "accelerator_total_memory_mi_b");
  public get acceleratorTotalMemoryMiB() {
    return this._acceleratorTotalMemoryMiB;
  }

  // accelerator_types - computed: true, optional: false, required: false
  public get acceleratorTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('accelerator_types'));
  }

  // allowed_instance_types - computed: true, optional: false, required: false
  public get allowedInstanceTypes() {
    return this.getListAttribute('allowed_instance_types');
  }

  // bare_metal - computed: true, optional: false, required: false
  public get bareMetal() {
    return this.getStringAttribute('bare_metal');
  }

  // baseline_ebs_bandwidth_mbps - computed: true, optional: false, required: false
  private _baselineEbsBandwidthMbps = new DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference(this, "baseline_ebs_bandwidth_mbps");
  public get baselineEbsBandwidthMbps() {
    return this._baselineEbsBandwidthMbps;
  }

  // baseline_performance_factors - computed: true, optional: false, required: false
  private _baselinePerformanceFactors = new DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference(this, "baseline_performance_factors");
  public get baselinePerformanceFactors() {
    return this._baselinePerformanceFactors;
  }

  // burstable_performance - computed: true, optional: false, required: false
  public get burstablePerformance() {
    return this.getStringAttribute('burstable_performance');
  }

  // cpu_manufacturers - computed: true, optional: false, required: false
  public get cpuManufacturers() {
    return cdktn.Fn.tolist(this.getListAttribute('cpu_manufacturers'));
  }

  // excluded_instance_types - computed: true, optional: false, required: false
  public get excludedInstanceTypes() {
    return this.getListAttribute('excluded_instance_types');
  }

  // instance_generations - computed: true, optional: false, required: false
  public get instanceGenerations() {
    return cdktn.Fn.tolist(this.getListAttribute('instance_generations'));
  }

  // local_storage - computed: true, optional: false, required: false
  public get localStorage() {
    return this.getStringAttribute('local_storage');
  }

  // local_storage_types - computed: true, optional: false, required: false
  public get localStorageTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('local_storage_types'));
  }

  // max_spot_price_as_percentage_of_optimal_on_demand_price - computed: true, optional: false, required: false
  public get maxSpotPriceAsPercentageOfOptimalOnDemandPrice() {
    return this.getNumberAttribute('max_spot_price_as_percentage_of_optimal_on_demand_price');
  }

  // memory_gi_b_per_v_cpu - computed: true, optional: false, required: false
  private _memoryGiBPerVCpu = new DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference(this, "memory_gi_b_per_v_cpu");
  public get memoryGiBPerVCpu() {
    return this._memoryGiBPerVCpu;
  }

  // memory_mi_b - computed: true, optional: false, required: false
  private _memoryMiB = new DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsMemoryMiBOutputReference(this, "memory_mi_b");
  public get memoryMiB() {
    return this._memoryMiB;
  }

  // network_bandwidth_gbps - computed: true, optional: false, required: false
  private _networkBandwidthGbps = new DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference(this, "network_bandwidth_gbps");
  public get networkBandwidthGbps() {
    return this._networkBandwidthGbps;
  }

  // network_interface_count - computed: true, optional: false, required: false
  private _networkInterfaceCount = new DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsNetworkInterfaceCountOutputReference(this, "network_interface_count");
  public get networkInterfaceCount() {
    return this._networkInterfaceCount;
  }

  // on_demand_max_price_percentage_over_lowest_price - computed: true, optional: false, required: false
  public get onDemandMaxPricePercentageOverLowestPrice() {
    return this.getNumberAttribute('on_demand_max_price_percentage_over_lowest_price');
  }

  // require_hibernate_support - computed: true, optional: false, required: false
  public get requireHibernateSupport() {
    return this.getBooleanAttribute('require_hibernate_support');
  }

  // spot_max_price_percentage_over_lowest_price - computed: true, optional: false, required: false
  public get spotMaxPricePercentageOverLowestPrice() {
    return this.getNumberAttribute('spot_max_price_percentage_over_lowest_price');
  }

  // total_local_storage_gb - computed: true, optional: false, required: false
  private _totalLocalStorageGb = new DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsTotalLocalStorageGbOutputReference(this, "total_local_storage_gb");
  public get totalLocalStorageGb() {
    return this._totalLocalStorageGb;
  }

  // v_cpu_count - computed: true, optional: false, required: false
  private _vCpuCount = new DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsVCpuCountOutputReference(this, "v_cpu_count");
  public get vCpuCount() {
    return this._vCpuCount;
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecification {
}

export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // launch_template_id - computed: true, optional: false, required: false
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }

  // launch_template_name - computed: true, optional: false, required: false
  public get launchTemplateName() {
    return this.getStringAttribute('launch_template_name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverrides {
}

export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // instance_requirements - computed: true, optional: false, required: false
  private _instanceRequirements = new DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesInstanceRequirementsOutputReference(this, "instance_requirements");
  public get instanceRequirements() {
    return this._instanceRequirements;
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // launch_template_specification - computed: true, optional: false, required: false
  private _launchTemplateSpecification = new DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesLaunchTemplateSpecificationOutputReference(this, "launch_template_specification");
  public get launchTemplateSpecification() {
    return this._launchTemplateSpecification;
  }

  // weighted_capacity - computed: true, optional: false, required: false
  public get weightedCapacity() {
    return this.getStringAttribute('weighted_capacity');
  }
}

export class DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference {
    return new DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplate {
}

export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // launch_template_specification - computed: true, optional: false, required: false
  private _launchTemplateSpecification = new DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference(this, "launch_template_specification");
  public get launchTemplateSpecification() {
    return this._launchTemplateSpecification;
  }

  // overrides - computed: true, optional: false, required: false
  private _overrides = new DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicy {
}

export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instances_distribution - computed: true, optional: false, required: false
  private _instancesDistribution = new DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionOutputReference(this, "instances_distribution");
  public get instancesDistribution() {
    return this._instancesDistribution;
  }

  // launch_template - computed: true, optional: false, required: false
  private _launchTemplate = new DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOutputReference(this, "launch_template");
  public get launchTemplate() {
    return this._launchTemplate;
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupNotificationConfiguration {
}

export function dataAwsccAutoscalingAutoScalingGroupNotificationConfigurationToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupNotificationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupNotificationConfigurationToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupNotificationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupNotificationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupNotificationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // notification_types - computed: true, optional: false, required: false
  public get notificationTypes() {
    return this.getListAttribute('notification_types');
  }

  // topic_arn - computed: true, optional: false, required: false
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupNotificationConfigurations {
}

export function dataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupNotificationConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupNotificationConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupNotificationConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupNotificationConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // notification_types - computed: true, optional: false, required: false
  public get notificationTypes() {
    return this.getListAttribute('notification_types');
  }

  // topic_arn - computed: true, optional: false, required: false
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
}

export class DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference {
    return new DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupTags {
}

export function dataAwsccAutoscalingAutoScalingGroupTagsToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupTagsToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupTags | undefined) {
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

  // propagate_at_launch - computed: true, optional: false, required: false
  public get propagateAtLaunch() {
    return this.getBooleanAttribute('propagate_at_launch');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccAutoscalingAutoScalingGroupTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAutoscalingAutoScalingGroupTagsOutputReference {
    return new DataAwsccAutoscalingAutoScalingGroupTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAutoscalingAutoScalingGroupTrafficSources {
}

export function dataAwsccAutoscalingAutoScalingGroupTrafficSourcesToTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupTrafficSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingAutoScalingGroupTrafficSourcesToHclTerraform(struct?: DataAwsccAutoscalingAutoScalingGroupTrafficSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAutoscalingAutoScalingGroupTrafficSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingAutoScalingGroupTrafficSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference {
    return new DataAwsccAutoscalingAutoScalingGroupTrafficSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/autoscaling_auto_scaling_group awscc_autoscaling_auto_scaling_group}
*/
export class DataAwsccAutoscalingAutoScalingGroup extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_autoscaling_auto_scaling_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccAutoscalingAutoScalingGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccAutoscalingAutoScalingGroup to import
  * @param importFromId The id of the existing DataAwsccAutoscalingAutoScalingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/autoscaling_auto_scaling_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccAutoscalingAutoScalingGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_autoscaling_auto_scaling_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/autoscaling_auto_scaling_group awscc_autoscaling_auto_scaling_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccAutoscalingAutoScalingGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccAutoscalingAutoScalingGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_autoscaling_auto_scaling_group',
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

  // auto_scaling_group_arn - computed: true, optional: false, required: false
  public get autoScalingGroupArn() {
    return this.getStringAttribute('auto_scaling_group_arn');
  }

  // auto_scaling_group_name - computed: true, optional: false, required: false
  public get autoScalingGroupName() {
    return this.getStringAttribute('auto_scaling_group_name');
  }

  // availability_zone_distribution - computed: true, optional: false, required: false
  private _availabilityZoneDistribution = new DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneDistributionOutputReference(this, "availability_zone_distribution");
  public get availabilityZoneDistribution() {
    return this._availabilityZoneDistribution;
  }

  // availability_zone_ids - computed: true, optional: false, required: false
  public get availabilityZoneIds() {
    return cdktn.Fn.tolist(this.getListAttribute('availability_zone_ids'));
  }

  // availability_zone_impairment_policy - computed: true, optional: false, required: false
  private _availabilityZoneImpairmentPolicy = new DataAwsccAutoscalingAutoScalingGroupAvailabilityZoneImpairmentPolicyOutputReference(this, "availability_zone_impairment_policy");
  public get availabilityZoneImpairmentPolicy() {
    return this._availabilityZoneImpairmentPolicy;
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // capacity_rebalance - computed: true, optional: false, required: false
  public get capacityRebalance() {
    return this.getBooleanAttribute('capacity_rebalance');
  }

  // capacity_reservation_specification - computed: true, optional: false, required: false
  private _capacityReservationSpecification = new DataAwsccAutoscalingAutoScalingGroupCapacityReservationSpecificationOutputReference(this, "capacity_reservation_specification");
  public get capacityReservationSpecification() {
    return this._capacityReservationSpecification;
  }

  // context - computed: true, optional: false, required: false
  public get context() {
    return this.getStringAttribute('context');
  }

  // cooldown - computed: true, optional: false, required: false
  public get cooldown() {
    return this.getStringAttribute('cooldown');
  }

  // default_instance_warmup - computed: true, optional: false, required: false
  public get defaultInstanceWarmup() {
    return this.getNumberAttribute('default_instance_warmup');
  }

  // deletion_protection - computed: true, optional: false, required: false
  public get deletionProtection() {
    return this.getStringAttribute('deletion_protection');
  }

  // desired_capacity - computed: true, optional: false, required: false
  public get desiredCapacity() {
    return this.getStringAttribute('desired_capacity');
  }

  // desired_capacity_type - computed: true, optional: false, required: false
  public get desiredCapacityType() {
    return this.getStringAttribute('desired_capacity_type');
  }

  // health_check_grace_period - computed: true, optional: false, required: false
  public get healthCheckGracePeriod() {
    return this.getNumberAttribute('health_check_grace_period');
  }

  // health_check_type - computed: true, optional: false, required: false
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
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

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_lifecycle_policy - computed: true, optional: false, required: false
  private _instanceLifecyclePolicy = new DataAwsccAutoscalingAutoScalingGroupInstanceLifecyclePolicyOutputReference(this, "instance_lifecycle_policy");
  public get instanceLifecyclePolicy() {
    return this._instanceLifecyclePolicy;
  }

  // instance_maintenance_policy - computed: true, optional: false, required: false
  private _instanceMaintenancePolicy = new DataAwsccAutoscalingAutoScalingGroupInstanceMaintenancePolicyOutputReference(this, "instance_maintenance_policy");
  public get instanceMaintenancePolicy() {
    return this._instanceMaintenancePolicy;
  }

  // launch_configuration_name - computed: true, optional: false, required: false
  public get launchConfigurationName() {
    return this.getStringAttribute('launch_configuration_name');
  }

  // launch_template - computed: true, optional: false, required: false
  private _launchTemplate = new DataAwsccAutoscalingAutoScalingGroupLaunchTemplateOutputReference(this, "launch_template");
  public get launchTemplate() {
    return this._launchTemplate;
  }

  // lifecycle_hook_specification_list - computed: true, optional: false, required: false
  private _lifecycleHookSpecificationList = new DataAwsccAutoscalingAutoScalingGroupLifecycleHookSpecificationListStructList(this, "lifecycle_hook_specification_list", false);
  public get lifecycleHookSpecificationList() {
    return this._lifecycleHookSpecificationList;
  }

  // load_balancer_names - computed: true, optional: false, required: false
  public get loadBalancerNames() {
    return this.getListAttribute('load_balancer_names');
  }

  // max_instance_lifetime - computed: true, optional: false, required: false
  public get maxInstanceLifetime() {
    return this.getNumberAttribute('max_instance_lifetime');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getStringAttribute('max_size');
  }

  // metrics_collection - computed: true, optional: false, required: false
  private _metricsCollection = new DataAwsccAutoscalingAutoScalingGroupMetricsCollectionList(this, "metrics_collection", false);
  public get metricsCollection() {
    return this._metricsCollection;
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getStringAttribute('min_size');
  }

  // mixed_instances_policy - computed: true, optional: false, required: false
  private _mixedInstancesPolicy = new DataAwsccAutoscalingAutoScalingGroupMixedInstancesPolicyOutputReference(this, "mixed_instances_policy");
  public get mixedInstancesPolicy() {
    return this._mixedInstancesPolicy;
  }

  // new_instances_protected_from_scale_in - computed: true, optional: false, required: false
  public get newInstancesProtectedFromScaleIn() {
    return this.getBooleanAttribute('new_instances_protected_from_scale_in');
  }

  // notification_configuration - computed: true, optional: false, required: false
  private _notificationConfiguration = new DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationOutputReference(this, "notification_configuration");
  public get notificationConfiguration() {
    return this._notificationConfiguration;
  }

  // notification_configurations - computed: true, optional: false, required: false
  private _notificationConfigurations = new DataAwsccAutoscalingAutoScalingGroupNotificationConfigurationsList(this, "notification_configurations", false);
  public get notificationConfigurations() {
    return this._notificationConfigurations;
  }

  // placement_group - computed: true, optional: false, required: false
  public get placementGroup() {
    return this.getStringAttribute('placement_group');
  }

  // service_linked_role_arn - computed: true, optional: false, required: false
  public get serviceLinkedRoleArn() {
    return this.getStringAttribute('service_linked_role_arn');
  }

  // skip_zonal_shift_validation - computed: true, optional: false, required: false
  public get skipZonalShiftValidation() {
    return this.getBooleanAttribute('skip_zonal_shift_validation');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccAutoscalingAutoScalingGroupTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // target_group_ar_ns - computed: true, optional: false, required: false
  public get targetGroupArNs() {
    return this.getListAttribute('target_group_ar_ns');
  }

  // termination_policies - computed: true, optional: false, required: false
  public get terminationPolicies() {
    return this.getListAttribute('termination_policies');
  }

  // traffic_sources - computed: true, optional: false, required: false
  private _trafficSources = new DataAwsccAutoscalingAutoScalingGroupTrafficSourcesList(this, "traffic_sources", true);
  public get trafficSources() {
    return this._trafficSources;
  }

  // vpc_zone_identifier - computed: true, optional: false, required: false
  public get vpcZoneIdentifier() {
    return this.getListAttribute('vpc_zone_identifier');
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
