// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ecs_capacity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEcsCapacityProviderConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ecs_capacity_provider#id DataAwsccEcsCapacityProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEcsCapacityProviderAutoScalingGroupProviderManagedScaling {
}

export function dataAwsccEcsCapacityProviderAutoScalingGroupProviderManagedScalingToTerraform(struct?: DataAwsccEcsCapacityProviderAutoScalingGroupProviderManagedScaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsCapacityProviderAutoScalingGroupProviderManagedScalingToHclTerraform(struct?: DataAwsccEcsCapacityProviderAutoScalingGroupProviderManagedScaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsCapacityProviderAutoScalingGroupProviderManagedScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsCapacityProviderAutoScalingGroupProviderManagedScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_warmup_period - computed: true, optional: false, required: false
  public get instanceWarmupPeriod() {
    return this.getNumberAttribute('instance_warmup_period');
  }

  // maximum_scaling_step_size - computed: true, optional: false, required: false
  public get maximumScalingStepSize() {
    return this.getNumberAttribute('maximum_scaling_step_size');
  }

  // minimum_scaling_step_size - computed: true, optional: false, required: false
  public get minimumScalingStepSize() {
    return this.getNumberAttribute('minimum_scaling_step_size');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target_capacity - computed: true, optional: false, required: false
  public get targetCapacity() {
    return this.getNumberAttribute('target_capacity');
  }
}
export interface DataAwsccEcsCapacityProviderAutoScalingGroupProvider {
}

export function dataAwsccEcsCapacityProviderAutoScalingGroupProviderToTerraform(struct?: DataAwsccEcsCapacityProviderAutoScalingGroupProvider): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsCapacityProviderAutoScalingGroupProviderToHclTerraform(struct?: DataAwsccEcsCapacityProviderAutoScalingGroupProvider): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsCapacityProviderAutoScalingGroupProviderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsCapacityProviderAutoScalingGroupProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsCapacityProviderAutoScalingGroupProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_scaling_group_arn - computed: true, optional: false, required: false
  public get autoScalingGroupArn() {
    return this.getStringAttribute('auto_scaling_group_arn');
  }

  // managed_draining - computed: true, optional: false, required: false
  public get managedDraining() {
    return this.getStringAttribute('managed_draining');
  }

  // managed_scaling - computed: true, optional: false, required: false
  private _managedScaling = new DataAwsccEcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference(this, "managed_scaling");
  public get managedScaling() {
    return this._managedScaling;
  }

  // managed_termination_protection - computed: true, optional: false, required: false
  public get managedTerminationProtection() {
    return this.getStringAttribute('managed_termination_protection');
  }
}
export interface DataAwsccEcsCapacityProviderManagedInstancesProviderAutoRepairConfiguration {
}

export function dataAwsccEcsCapacityProviderManagedInstancesProviderAutoRepairConfigurationToTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderAutoRepairConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsCapacityProviderManagedInstancesProviderAutoRepairConfigurationToHclTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderAutoRepairConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsCapacityProviderManagedInstancesProviderAutoRepairConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsCapacityProviderManagedInstancesProviderAutoRepairConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsCapacityProviderManagedInstancesProviderAutoRepairConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions_status - computed: true, optional: false, required: false
  public get actionsStatus() {
    return this.getStringAttribute('actions_status');
  }
}
export interface DataAwsccEcsCapacityProviderManagedInstancesProviderInfrastructureOptimization {
}

export function dataAwsccEcsCapacityProviderManagedInstancesProviderInfrastructureOptimizationToTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInfrastructureOptimization): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsCapacityProviderManagedInstancesProviderInfrastructureOptimizationToHclTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInfrastructureOptimization): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsCapacityProviderManagedInstancesProviderInfrastructureOptimizationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsCapacityProviderManagedInstancesProviderInfrastructureOptimization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsCapacityProviderManagedInstancesProviderInfrastructureOptimization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // scale_in_after - computed: true, optional: false, required: false
  public get scaleInAfter() {
    return this.getNumberAttribute('scale_in_after');
  }
}
export interface DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateCapacityReservations {
}

export function dataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsToTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateCapacityReservations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsToHclTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateCapacityReservations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateCapacityReservations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateCapacityReservations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reservation_group_arn - computed: true, optional: false, required: false
  public get reservationGroupArn() {
    return this.getStringAttribute('reservation_group_arn');
  }

  // reservation_preference - computed: true, optional: false, required: false
  public get reservationPreference() {
    return this.getStringAttribute('reservation_preference');
  }
}
export interface DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorCount {
}

export function dataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorCountToTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorCountToHclTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorCount | undefined) {
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
export interface DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMiB {
}

export function dataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMiBToTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMiB): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMiBToHclTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMiB): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMiB | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMiB | undefined) {
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
export interface DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps {
}

export function dataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsToTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsToHclTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps | undefined) {
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
export interface DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryGiBPerVCpu {
}

export function dataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryGiBPerVCpuToTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryGiBPerVCpu): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryGiBPerVCpuToHclTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryGiBPerVCpu): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryGiBPerVCpuOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryGiBPerVCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryGiBPerVCpu | undefined) {
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
export interface DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryMiB {
}

export function dataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryMiBToTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryMiB): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryMiBToHclTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryMiB): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryMiBOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryMiB | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryMiB | undefined) {
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
export interface DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkBandwidthGbps {
}

export function dataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsToTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkBandwidthGbps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsToHclTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkBandwidthGbps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkBandwidthGbps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkBandwidthGbps | undefined) {
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
export interface DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkInterfaceCount {
}

export function dataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkInterfaceCountToTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkInterfaceCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkInterfaceCountToHclTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkInterfaceCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkInterfaceCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkInterfaceCount | undefined) {
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
export interface DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsTotalLocalStorageGb {
}

export function dataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsTotalLocalStorageGbToTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsTotalLocalStorageGb): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsTotalLocalStorageGbToHclTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsTotalLocalStorageGb): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsTotalLocalStorageGb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsTotalLocalStorageGb | undefined) {
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
export interface DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsVCpuCount {
}

export function dataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsVCpuCountToTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsVCpuCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsVCpuCountToHclTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsVCpuCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsVCpuCountOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsVCpuCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsVCpuCount | undefined) {
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
export interface DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements {
}

export function dataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsToTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsToHclTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accelerator_count - computed: true, optional: false, required: false
  private _acceleratorCount = new DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference(this, "accelerator_count");
  public get acceleratorCount() {
    return this._acceleratorCount;
  }

  // accelerator_manufacturers - computed: true, optional: false, required: false
  public get acceleratorManufacturers() {
    return this.getListAttribute('accelerator_manufacturers');
  }

  // accelerator_names - computed: true, optional: false, required: false
  public get acceleratorNames() {
    return this.getListAttribute('accelerator_names');
  }

  // accelerator_total_memory_mi_b - computed: true, optional: false, required: false
  private _acceleratorTotalMemoryMiB = new DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference(this, "accelerator_total_memory_mi_b");
  public get acceleratorTotalMemoryMiB() {
    return this._acceleratorTotalMemoryMiB;
  }

  // accelerator_types - computed: true, optional: false, required: false
  public get acceleratorTypes() {
    return this.getListAttribute('accelerator_types');
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
  private _baselineEbsBandwidthMbps = new DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference(this, "baseline_ebs_bandwidth_mbps");
  public get baselineEbsBandwidthMbps() {
    return this._baselineEbsBandwidthMbps;
  }

  // burstable_performance - computed: true, optional: false, required: false
  public get burstablePerformance() {
    return this.getStringAttribute('burstable_performance');
  }

  // cpu_manufacturers - computed: true, optional: false, required: false
  public get cpuManufacturers() {
    return this.getListAttribute('cpu_manufacturers');
  }

  // excluded_instance_types - computed: true, optional: false, required: false
  public get excludedInstanceTypes() {
    return this.getListAttribute('excluded_instance_types');
  }

  // instance_generations - computed: true, optional: false, required: false
  public get instanceGenerations() {
    return this.getListAttribute('instance_generations');
  }

  // local_storage - computed: true, optional: false, required: false
  public get localStorage() {
    return this.getStringAttribute('local_storage');
  }

  // local_storage_types - computed: true, optional: false, required: false
  public get localStorageTypes() {
    return this.getListAttribute('local_storage_types');
  }

  // max_spot_price_as_percentage_of_optimal_on_demand_price - computed: true, optional: false, required: false
  public get maxSpotPriceAsPercentageOfOptimalOnDemandPrice() {
    return this.getNumberAttribute('max_spot_price_as_percentage_of_optimal_on_demand_price');
  }

  // memory_gi_b_per_v_cpu - computed: true, optional: false, required: false
  private _memoryGiBPerVCpu = new DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryGiBPerVCpuOutputReference(this, "memory_gi_b_per_v_cpu");
  public get memoryGiBPerVCpu() {
    return this._memoryGiBPerVCpu;
  }

  // memory_mi_b - computed: true, optional: false, required: false
  private _memoryMiB = new DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsMemoryMiBOutputReference(this, "memory_mi_b");
  public get memoryMiB() {
    return this._memoryMiB;
  }

  // network_bandwidth_gbps - computed: true, optional: false, required: false
  private _networkBandwidthGbps = new DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference(this, "network_bandwidth_gbps");
  public get networkBandwidthGbps() {
    return this._networkBandwidthGbps;
  }

  // network_interface_count - computed: true, optional: false, required: false
  private _networkInterfaceCount = new DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference(this, "network_interface_count");
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
  private _totalLocalStorageGb = new DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference(this, "total_local_storage_gb");
  public get totalLocalStorageGb() {
    return this._totalLocalStorageGb;
  }

  // v_cpu_count - computed: true, optional: false, required: false
  private _vCpuCount = new DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsVCpuCountOutputReference(this, "v_cpu_count");
  public get vCpuCount() {
    return this._vCpuCount;
  }
}
export interface DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration {
}

export function dataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationToTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationToHclTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // use_local_storage - computed: true, optional: false, required: false
  public get useLocalStorage() {
    return this.getBooleanAttribute('use_local_storage');
  }
}
export interface DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration {
}

export function dataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationToTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationToHclTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }
}
export interface DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration {
}

export function dataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationToTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationToHclTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateStorageConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // storage_size_gi_b - computed: true, optional: false, required: false
  public get storageSizeGiB() {
    return this.getNumberAttribute('storage_size_gi_b');
  }
}
export interface DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplate {
}

export function dataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateToTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateToHclTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_option_type - computed: true, optional: false, required: false
  public get capacityOptionType() {
    return this.getStringAttribute('capacity_option_type');
  }

  // capacity_reservations - computed: true, optional: false, required: false
  private _capacityReservations = new DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateCapacityReservationsOutputReference(this, "capacity_reservations");
  public get capacityReservations() {
    return this._capacityReservations;
  }

  // ec_2_instance_profile_arn - computed: true, optional: false, required: false
  public get ec2InstanceProfileArn() {
    return this.getStringAttribute('ec_2_instance_profile_arn');
  }

  // fips_enabled - computed: true, optional: false, required: false
  public get fipsEnabled() {
    return this.getBooleanAttribute('fips_enabled');
  }

  // instance_metadata_tags_propagation - computed: true, optional: false, required: false
  public get instanceMetadataTagsPropagation() {
    return this.getBooleanAttribute('instance_metadata_tags_propagation');
  }

  // instance_requirements - computed: true, optional: false, required: false
  private _instanceRequirements = new DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateInstanceRequirementsOutputReference(this, "instance_requirements");
  public get instanceRequirements() {
    return this._instanceRequirements;
  }

  // local_storage_configuration - computed: true, optional: false, required: false
  private _localStorageConfiguration = new DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateLocalStorageConfigurationOutputReference(this, "local_storage_configuration");
  public get localStorageConfiguration() {
    return this._localStorageConfiguration;
  }

  // monitoring - computed: true, optional: false, required: false
  public get monitoring() {
    return this.getStringAttribute('monitoring');
  }

  // network_configuration - computed: true, optional: false, required: false
  private _networkConfiguration = new DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }

  // storage_configuration - computed: true, optional: false, required: false
  private _storageConfiguration = new DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateStorageConfigurationOutputReference(this, "storage_configuration");
  public get storageConfiguration() {
    return this._storageConfiguration;
  }
}
export interface DataAwsccEcsCapacityProviderManagedInstancesProvider {
}

export function dataAwsccEcsCapacityProviderManagedInstancesProviderToTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProvider): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsCapacityProviderManagedInstancesProviderToHclTerraform(struct?: DataAwsccEcsCapacityProviderManagedInstancesProvider): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsCapacityProviderManagedInstancesProviderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsCapacityProviderManagedInstancesProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsCapacityProviderManagedInstancesProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_repair_configuration - computed: true, optional: false, required: false
  private _autoRepairConfiguration = new DataAwsccEcsCapacityProviderManagedInstancesProviderAutoRepairConfigurationOutputReference(this, "auto_repair_configuration");
  public get autoRepairConfiguration() {
    return this._autoRepairConfiguration;
  }

  // infrastructure_optimization - computed: true, optional: false, required: false
  private _infrastructureOptimization = new DataAwsccEcsCapacityProviderManagedInstancesProviderInfrastructureOptimizationOutputReference(this, "infrastructure_optimization");
  public get infrastructureOptimization() {
    return this._infrastructureOptimization;
  }

  // infrastructure_role_arn - computed: true, optional: false, required: false
  public get infrastructureRoleArn() {
    return this.getStringAttribute('infrastructure_role_arn');
  }

  // instance_launch_template - computed: true, optional: false, required: false
  private _instanceLaunchTemplate = new DataAwsccEcsCapacityProviderManagedInstancesProviderInstanceLaunchTemplateOutputReference(this, "instance_launch_template");
  public get instanceLaunchTemplate() {
    return this._instanceLaunchTemplate;
  }

  // propagate_tags - computed: true, optional: false, required: false
  public get propagateTags() {
    return this.getStringAttribute('propagate_tags');
  }
}
export interface DataAwsccEcsCapacityProviderTags {
}

export function dataAwsccEcsCapacityProviderTagsToTerraform(struct?: DataAwsccEcsCapacityProviderTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsCapacityProviderTagsToHclTerraform(struct?: DataAwsccEcsCapacityProviderTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsCapacityProviderTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEcsCapacityProviderTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsCapacityProviderTags | undefined) {
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

export class DataAwsccEcsCapacityProviderTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEcsCapacityProviderTagsOutputReference {
    return new DataAwsccEcsCapacityProviderTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ecs_capacity_provider awscc_ecs_capacity_provider}
*/
export class DataAwsccEcsCapacityProvider extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ecs_capacity_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEcsCapacityProvider resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEcsCapacityProvider to import
  * @param importFromId The id of the existing DataAwsccEcsCapacityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ecs_capacity_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEcsCapacityProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecs_capacity_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ecs_capacity_provider awscc_ecs_capacity_provider} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEcsCapacityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEcsCapacityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ecs_capacity_provider',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.91.0'
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

  // auto_scaling_group_provider - computed: true, optional: false, required: false
  private _autoScalingGroupProvider = new DataAwsccEcsCapacityProviderAutoScalingGroupProviderOutputReference(this, "auto_scaling_group_provider");
  public get autoScalingGroupProvider() {
    return this._autoScalingGroupProvider;
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
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

  // managed_instances_provider - computed: true, optional: false, required: false
  private _managedInstancesProvider = new DataAwsccEcsCapacityProviderManagedInstancesProviderOutputReference(this, "managed_instances_provider");
  public get managedInstancesProvider() {
    return this._managedInstancesProvider;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEcsCapacityProviderTagsList(this, "tags", false);
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
