// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_spot_fleet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEc2SpotFleetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_spot_fleet#id DataAwsccEc2SpotFleet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbsToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete_on_termination - computed: true, optional: false, required: false
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // volume_size - computed: true, optional: false, required: false
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }

  // volume_type - computed: true, optional: false, required: false
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // ebs - computed: true, optional: false, required: false
  private _ebs = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbsOutputReference(this, "ebs");
  public get ebs() {
    return this._ebs;
  }

  // no_device - computed: true, optional: false, required: false
  public get noDevice() {
    return this.getStringAttribute('no_device');
  }

  // virtual_name - computed: true, optional: false, required: false
  public get virtualName() {
    return this.getStringAttribute('virtual_name');
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsOutputReference {
    return new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfileToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfileToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsAcceleratorCount {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsAcceleratorCountToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsAcceleratorCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsAcceleratorCountToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsAcceleratorCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsAcceleratorCountOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsAcceleratorCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsAcceleratorCount | undefined) {
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
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsAcceleratorTotalMemoryMiB {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsAcceleratorTotalMemoryMiBToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsAcceleratorTotalMemoryMiB): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsAcceleratorTotalMemoryMiBToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsAcceleratorTotalMemoryMiB): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsAcceleratorTotalMemoryMiB | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsAcceleratorTotalMemoryMiB | undefined) {
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
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselineEbsBandwidthMbps {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselineEbsBandwidthMbpsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselineEbsBandwidthMbps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselineEbsBandwidthMbpsToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselineEbsBandwidthMbps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselineEbsBandwidthMbps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselineEbsBandwidthMbps | undefined) {
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
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselinePerformanceFactorsCpuReferences {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselinePerformanceFactorsCpuReferencesToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselinePerformanceFactorsCpuReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselinePerformanceFactorsCpuReferencesToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselinePerformanceFactorsCpuReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselinePerformanceFactorsCpuReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselinePerformanceFactorsCpuReferences | undefined) {
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

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference {
    return new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselinePerformanceFactorsCpu {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselinePerformanceFactorsCpuToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselinePerformanceFactorsCpu): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselinePerformanceFactorsCpuToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselinePerformanceFactorsCpu): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselinePerformanceFactorsCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselinePerformanceFactorsCpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // references - computed: true, optional: false, required: false
  private _references = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList(this, "references", false);
  public get references() {
    return this._references;
  }
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselinePerformanceFactors {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselinePerformanceFactorsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselinePerformanceFactors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselinePerformanceFactorsToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselinePerformanceFactors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselinePerformanceFactorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselinePerformanceFactors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselinePerformanceFactors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu - computed: true, optional: false, required: false
  private _cpu = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsMemoryGiBPerVCpu {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsMemoryGiBPerVCpuToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsMemoryGiBPerVCpu): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsMemoryGiBPerVCpuToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsMemoryGiBPerVCpu): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsMemoryGiBPerVCpuOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsMemoryGiBPerVCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsMemoryGiBPerVCpu | undefined) {
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
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsMemoryMiB {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsMemoryMiBToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsMemoryMiB): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsMemoryMiBToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsMemoryMiB): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsMemoryMiBOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsMemoryMiB | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsMemoryMiB | undefined) {
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
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsNetworkBandwidthGbps {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsNetworkBandwidthGbpsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsNetworkBandwidthGbps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsNetworkBandwidthGbpsToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsNetworkBandwidthGbps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsNetworkBandwidthGbpsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsNetworkBandwidthGbps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsNetworkBandwidthGbps | undefined) {
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
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsNetworkInterfaceCount {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsNetworkInterfaceCountToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsNetworkInterfaceCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsNetworkInterfaceCountToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsNetworkInterfaceCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsNetworkInterfaceCountOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsNetworkInterfaceCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsNetworkInterfaceCount | undefined) {
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
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsTotalLocalStorageGb {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsTotalLocalStorageGbToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsTotalLocalStorageGb): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsTotalLocalStorageGbToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsTotalLocalStorageGb): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsTotalLocalStorageGbOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsTotalLocalStorageGb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsTotalLocalStorageGb | undefined) {
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
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsVCpuCount {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsVCpuCountToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsVCpuCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsVCpuCountToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsVCpuCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsVCpuCountOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsVCpuCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsVCpuCount | undefined) {
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
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirements {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accelerator_count - computed: true, optional: false, required: false
  private _acceleratorCount = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsAcceleratorCountOutputReference(this, "accelerator_count");
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
  private _acceleratorTotalMemoryMiB = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference(this, "accelerator_total_memory_mi_b");
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
  private _baselineEbsBandwidthMbps = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference(this, "baseline_ebs_bandwidth_mbps");
  public get baselineEbsBandwidthMbps() {
    return this._baselineEbsBandwidthMbps;
  }

  // baseline_performance_factors - computed: true, optional: false, required: false
  private _baselinePerformanceFactors = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsBaselinePerformanceFactorsOutputReference(this, "baseline_performance_factors");
  public get baselinePerformanceFactors() {
    return this._baselinePerformanceFactors;
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
  private _memoryGiBPerVCpu = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsMemoryGiBPerVCpuOutputReference(this, "memory_gi_b_per_v_cpu");
  public get memoryGiBPerVCpu() {
    return this._memoryGiBPerVCpu;
  }

  // memory_mi_b - computed: true, optional: false, required: false
  private _memoryMiB = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsMemoryMiBOutputReference(this, "memory_mi_b");
  public get memoryMiB() {
    return this._memoryMiB;
  }

  // network_bandwidth_gbps - computed: true, optional: false, required: false
  private _networkBandwidthGbps = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsNetworkBandwidthGbpsOutputReference(this, "network_bandwidth_gbps");
  public get networkBandwidthGbps() {
    return this._networkBandwidthGbps;
  }

  // network_interface_count - computed: true, optional: false, required: false
  private _networkInterfaceCount = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsNetworkInterfaceCountOutputReference(this, "network_interface_count");
  public get networkInterfaceCount() {
    return this._networkInterfaceCount;
  }

  // on_demand_max_price_percentage_over_lowest_price - computed: true, optional: false, required: false
  public get onDemandMaxPricePercentageOverLowestPrice() {
    return this.getNumberAttribute('on_demand_max_price_percentage_over_lowest_price');
  }

  // require_encryption_in_transit - computed: true, optional: false, required: false
  public get requireEncryptionInTransit() {
    return this.getBooleanAttribute('require_encryption_in_transit');
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
  private _totalLocalStorageGb = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsTotalLocalStorageGbOutputReference(this, "total_local_storage_gb");
  public get totalLocalStorageGb() {
    return this._totalLocalStorageGb;
  }

  // v_cpu_count - computed: true, optional: false, required: false
  private _vCpuCount = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsVCpuCountOutputReference(this, "v_cpu_count");
  public get vCpuCount() {
    return this._vCpuCount;
  }
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoringToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoringToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoringOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring | undefined) {
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
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6Addresses {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6AddressesToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6Addresses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6AddressesToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6Addresses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6AddressesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6Addresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6Addresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv_6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv_6_address');
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6AddressesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6AddressesOutputReference {
    return new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddressesToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddressesToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddressesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getBooleanAttribute('primary');
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddressesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddressesOutputReference {
    return new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // associate_public_ip_address - computed: true, optional: false, required: false
  public get associatePublicIpAddress() {
    return this.getBooleanAttribute('associate_public_ip_address');
  }

  // delete_on_termination - computed: true, optional: false, required: false
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_index - computed: true, optional: false, required: false
  public get deviceIndex() {
    return this.getNumberAttribute('device_index');
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return this.getListAttribute('groups');
  }

  // ipv_6_address_count - computed: true, optional: false, required: false
  public get ipv6AddressCount() {
    return this.getNumberAttribute('ipv_6_address_count');
  }

  // ipv_6_addresses - computed: true, optional: false, required: false
  private _ipv6Addresses = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesIpv6AddressesList(this, "ipv_6_addresses", false);
  public get ipv6Addresses() {
    return this._ipv6Addresses;
  }

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // private_ip_addresses - computed: true, optional: false, required: false
  private _privateIpAddresses = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddressesList(this, "private_ip_addresses", false);
  public get privateIpAddresses() {
    return this._privateIpAddresses;
  }

  // secondary_private_ip_address_count - computed: true, optional: false, required: false
  public get secondaryPrivateIpAddressCount() {
    return this.getNumberAttribute('secondary_private_ip_address_count');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesOutputReference {
    return new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacementToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacementToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // availability_zone_id - computed: true, optional: false, required: false
  public get availabilityZoneId() {
    return this.getStringAttribute('availability_zone_id');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // tenancy - computed: true, optional: false, required: false
  public get tenancy() {
    return this.getStringAttribute('tenancy');
  }
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroupsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroupsToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroupsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroupsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroupsOutputReference {
    return new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTags {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTagsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTagsToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTags | undefined) {
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

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTagsOutputReference {
    return new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecifications {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsOutputReference {
    return new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecifications {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_device_mappings - computed: true, optional: false, required: false
  private _blockDeviceMappings = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsList(this, "block_device_mappings", false);
  public get blockDeviceMappings() {
    return this._blockDeviceMappings;
  }

  // ebs_optimized - computed: true, optional: false, required: false
  public get ebsOptimized() {
    return this.getBooleanAttribute('ebs_optimized');
  }

  // iam_instance_profile - computed: true, optional: false, required: false
  private _iamInstanceProfile = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfileOutputReference(this, "iam_instance_profile");
  public get iamInstanceProfile() {
    return this._iamInstanceProfile;
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // instance_requirements - computed: true, optional: false, required: false
  private _instanceRequirements = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsInstanceRequirementsOutputReference(this, "instance_requirements");
  public get instanceRequirements() {
    return this._instanceRequirements;
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // kernel_id - computed: true, optional: false, required: false
  public get kernelId() {
    return this.getStringAttribute('kernel_id');
  }

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // monitoring - computed: true, optional: false, required: false
  private _monitoring = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoringOutputReference(this, "monitoring");
  public get monitoring() {
    return this._monitoring;
  }

  // network_interfaces - computed: true, optional: false, required: false
  private _networkInterfaces = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesList(this, "network_interfaces", false);
  public get networkInterfaces() {
    return this._networkInterfaces;
  }

  // placement - computed: true, optional: false, required: false
  private _placement = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacementOutputReference(this, "placement");
  public get placement() {
    return this._placement;
  }

  // ramdisk_id - computed: true, optional: false, required: false
  public get ramdiskId() {
    return this.getStringAttribute('ramdisk_id');
  }

  // security_groups - computed: true, optional: false, required: false
  private _securityGroups = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroupsList(this, "security_groups", false);
  public get securityGroups() {
    return this._securityGroups;
  }

  // spot_price - computed: true, optional: false, required: false
  public get spotPrice() {
    return this.getStringAttribute('spot_price');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // tag_specifications - computed: true, optional: false, required: false
  private _tagSpecifications = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsTagSpecificationsList(this, "tag_specifications", false);
  public get tagSpecifications() {
    return this._tagSpecifications;
  }

  // user_data - computed: true, optional: false, required: false
  public get userData() {
    return this.getStringAttribute('user_data');
  }

  // weighted_capacity - computed: true, optional: false, required: false
  public get weightedCapacity() {
    return this.getNumberAttribute('weighted_capacity');
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsOutputReference {
    return new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsLaunchTemplateSpecification {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsLaunchTemplateSpecificationToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsLaunchTemplateSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsLaunchTemplateSpecificationToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsLaunchTemplateSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsLaunchTemplateSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsLaunchTemplateSpecification | undefined) {
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
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount | undefined) {
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
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB | undefined) {
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
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps | undefined) {
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
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences | undefined) {
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

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference {
    return new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // references - computed: true, optional: false, required: false
  private _references = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList(this, "references", false);
  public get references() {
    return this._references;
  }
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu - computed: true, optional: false, required: false
  private _cpu = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu | undefined) {
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
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB | undefined) {
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
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps | undefined) {
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
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount | undefined) {
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
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb | undefined) {
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
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount | undefined) {
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
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirements {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accelerator_count - computed: true, optional: false, required: false
  private _acceleratorCount = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference(this, "accelerator_count");
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
  private _acceleratorTotalMemoryMiB = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference(this, "accelerator_total_memory_mi_b");
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
  private _baselineEbsBandwidthMbps = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference(this, "baseline_ebs_bandwidth_mbps");
  public get baselineEbsBandwidthMbps() {
    return this._baselineEbsBandwidthMbps;
  }

  // baseline_performance_factors - computed: true, optional: false, required: false
  private _baselinePerformanceFactors = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference(this, "baseline_performance_factors");
  public get baselinePerformanceFactors() {
    return this._baselinePerformanceFactors;
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
  private _memoryGiBPerVCpu = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference(this, "memory_gi_b_per_v_cpu");
  public get memoryGiBPerVCpu() {
    return this._memoryGiBPerVCpu;
  }

  // memory_mi_b - computed: true, optional: false, required: false
  private _memoryMiB = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference(this, "memory_mi_b");
  public get memoryMiB() {
    return this._memoryMiB;
  }

  // network_bandwidth_gbps - computed: true, optional: false, required: false
  private _networkBandwidthGbps = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference(this, "network_bandwidth_gbps");
  public get networkBandwidthGbps() {
    return this._networkBandwidthGbps;
  }

  // network_interface_count - computed: true, optional: false, required: false
  private _networkInterfaceCount = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference(this, "network_interface_count");
  public get networkInterfaceCount() {
    return this._networkInterfaceCount;
  }

  // on_demand_max_price_percentage_over_lowest_price - computed: true, optional: false, required: false
  public get onDemandMaxPricePercentageOverLowestPrice() {
    return this.getNumberAttribute('on_demand_max_price_percentage_over_lowest_price');
  }

  // require_encryption_in_transit - computed: true, optional: false, required: false
  public get requireEncryptionInTransit() {
    return this.getBooleanAttribute('require_encryption_in_transit');
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
  private _totalLocalStorageGb = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference(this, "total_local_storage_gb");
  public get totalLocalStorageGb() {
    return this._totalLocalStorageGb;
  }

  // v_cpu_count - computed: true, optional: false, required: false
  private _vCpuCount = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference(this, "v_cpu_count");
  public get vCpuCount() {
    return this._vCpuCount;
  }
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverrides {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // availability_zone_id - computed: true, optional: false, required: false
  public get availabilityZoneId() {
    return this.getStringAttribute('availability_zone_id');
  }

  // instance_requirements - computed: true, optional: false, required: false
  private _instanceRequirements = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference(this, "instance_requirements");
  public get instanceRequirements() {
    return this._instanceRequirements;
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // spot_price - computed: true, optional: false, required: false
  public get spotPrice() {
    return this.getStringAttribute('spot_price');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // weighted_capacity - computed: true, optional: false, required: false
  public get weightedCapacity() {
    return this.getNumberAttribute('weighted_capacity');
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesOutputReference {
    return new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigs {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // launch_template_specification - computed: true, optional: false, required: false
  private _launchTemplateSpecification = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference(this, "launch_template_specification");
  public get launchTemplateSpecification() {
    return this._launchTemplateSpecification;
  }

  // overrides - computed: true, optional: false, required: false
  private _overrides = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOutputReference {
    return new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancers {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancersToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancersToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancers | undefined) {
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

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancersOutputReference {
    return new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfig {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // classic_load_balancers - computed: true, optional: false, required: false
  private _classicLoadBalancers = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigClassicLoadBalancersList(this, "classic_load_balancers", false);
  public get classicLoadBalancers() {
    return this._classicLoadBalancers;
  }
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroups {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroupsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroupsToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroupsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroupsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroupsOutputReference {
    return new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfig {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // target_groups - computed: true, optional: false, required: false
  private _targetGroups = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigTargetGroupsList(this, "target_groups", false);
  public get targetGroups() {
    return this._targetGroups;
  }
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfig {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // classic_load_balancers_config - computed: true, optional: false, required: false
  private _classicLoadBalancersConfig = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigClassicLoadBalancersConfigOutputReference(this, "classic_load_balancers_config");
  public get classicLoadBalancersConfig() {
    return this._classicLoadBalancersConfig;
  }

  // target_groups_config - computed: true, optional: false, required: false
  private _targetGroupsConfig = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigTargetGroupsConfigOutputReference(this, "target_groups_config");
  public get targetGroupsConfig() {
    return this._targetGroupsConfig;
  }
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesCapacityRebalance {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesCapacityRebalanceToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesCapacityRebalance): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesCapacityRebalanceToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesCapacityRebalance): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesCapacityRebalanceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesCapacityRebalance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesCapacityRebalance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // replacement_strategy - computed: true, optional: false, required: false
  public get replacementStrategy() {
    return this.getStringAttribute('replacement_strategy');
  }

  // termination_delay - computed: true, optional: false, required: false
  public get terminationDelay() {
    return this.getNumberAttribute('termination_delay');
  }
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategies {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_rebalance - computed: true, optional: false, required: false
  private _capacityRebalance = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesCapacityRebalanceOutputReference(this, "capacity_rebalance");
  public get capacityRebalance() {
    return this._capacityRebalance;
  }
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataTagSpecificationsTags {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataTagSpecificationsTagsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataTagSpecificationsTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataTagSpecificationsTagsToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataTagSpecificationsTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataTagSpecificationsTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataTagSpecificationsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataTagSpecificationsTags | undefined) {
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

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataTagSpecificationsTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataTagSpecificationsTagsOutputReference {
    return new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataTagSpecificationsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigDataTagSpecifications {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataTagSpecificationsToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataTagSpecifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataTagSpecificationsToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataTagSpecifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataTagSpecificationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataTagSpecifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigDataTagSpecifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataTagSpecificationsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataTagSpecificationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2SpotFleetSpotFleetRequestConfigDataTagSpecificationsOutputReference {
    return new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataTagSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2SpotFleetSpotFleetRequestConfigData {
}

export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataToTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetSpotFleetRequestConfigDataToHclTerraform(struct?: DataAwsccEc2SpotFleetSpotFleetRequestConfigData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetSpotFleetRequestConfigDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2SpotFleetSpotFleetRequestConfigData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetSpotFleetRequestConfigData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocation_strategy - computed: true, optional: false, required: false
  public get allocationStrategy() {
    return this.getStringAttribute('allocation_strategy');
  }

  // context - computed: true, optional: false, required: false
  public get context() {
    return this.getStringAttribute('context');
  }

  // excess_capacity_termination_policy - computed: true, optional: false, required: false
  public get excessCapacityTerminationPolicy() {
    return this.getStringAttribute('excess_capacity_termination_policy');
  }

  // iam_fleet_role - computed: true, optional: false, required: false
  public get iamFleetRole() {
    return this.getStringAttribute('iam_fleet_role');
  }

  // instance_interruption_behavior - computed: true, optional: false, required: false
  public get instanceInterruptionBehavior() {
    return this.getStringAttribute('instance_interruption_behavior');
  }

  // instance_pools_to_use_count - computed: true, optional: false, required: false
  public get instancePoolsToUseCount() {
    return this.getNumberAttribute('instance_pools_to_use_count');
  }

  // launch_specifications - computed: true, optional: false, required: false
  private _launchSpecifications = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsList(this, "launch_specifications", false);
  public get launchSpecifications() {
    return this._launchSpecifications;
  }

  // launch_template_configs - computed: true, optional: false, required: false
  private _launchTemplateConfigs = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLaunchTemplateConfigsList(this, "launch_template_configs", false);
  public get launchTemplateConfigs() {
    return this._launchTemplateConfigs;
  }

  // load_balancers_config - computed: true, optional: false, required: false
  private _loadBalancersConfig = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataLoadBalancersConfigOutputReference(this, "load_balancers_config");
  public get loadBalancersConfig() {
    return this._loadBalancersConfig;
  }

  // on_demand_allocation_strategy - computed: true, optional: false, required: false
  public get onDemandAllocationStrategy() {
    return this.getStringAttribute('on_demand_allocation_strategy');
  }

  // on_demand_max_total_price - computed: true, optional: false, required: false
  public get onDemandMaxTotalPrice() {
    return this.getStringAttribute('on_demand_max_total_price');
  }

  // on_demand_target_capacity - computed: true, optional: false, required: false
  public get onDemandTargetCapacity() {
    return this.getNumberAttribute('on_demand_target_capacity');
  }

  // replace_unhealthy_instances - computed: true, optional: false, required: false
  public get replaceUnhealthyInstances() {
    return this.getBooleanAttribute('replace_unhealthy_instances');
  }

  // spot_maintenance_strategies - computed: true, optional: false, required: false
  private _spotMaintenanceStrategies = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataSpotMaintenanceStrategiesOutputReference(this, "spot_maintenance_strategies");
  public get spotMaintenanceStrategies() {
    return this._spotMaintenanceStrategies;
  }

  // spot_max_total_price - computed: true, optional: false, required: false
  public get spotMaxTotalPrice() {
    return this.getStringAttribute('spot_max_total_price');
  }

  // spot_price - computed: true, optional: false, required: false
  public get spotPrice() {
    return this.getStringAttribute('spot_price');
  }

  // tag_specifications - computed: true, optional: false, required: false
  private _tagSpecifications = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataTagSpecificationsList(this, "tag_specifications", false);
  public get tagSpecifications() {
    return this._tagSpecifications;
  }

  // target_capacity - computed: true, optional: false, required: false
  public get targetCapacity() {
    return this.getNumberAttribute('target_capacity');
  }

  // target_capacity_unit_type - computed: true, optional: false, required: false
  public get targetCapacityUnitType() {
    return this.getStringAttribute('target_capacity_unit_type');
  }

  // terminate_instances_with_expiration - computed: true, optional: false, required: false
  public get terminateInstancesWithExpiration() {
    return this.getBooleanAttribute('terminate_instances_with_expiration');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // valid_from - computed: true, optional: false, required: false
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }

  // valid_until - computed: true, optional: false, required: false
  public get validUntil() {
    return this.getStringAttribute('valid_until');
  }
}
export interface DataAwsccEc2SpotFleetTags {
}

export function dataAwsccEc2SpotFleetTagsToTerraform(struct?: DataAwsccEc2SpotFleetTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2SpotFleetTagsToHclTerraform(struct?: DataAwsccEc2SpotFleetTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2SpotFleetTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2SpotFleetTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2SpotFleetTags | undefined) {
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

export class DataAwsccEc2SpotFleetTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2SpotFleetTagsOutputReference {
    return new DataAwsccEc2SpotFleetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_spot_fleet awscc_ec2_spot_fleet}
*/
export class DataAwsccEc2SpotFleet extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_spot_fleet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEc2SpotFleet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEc2SpotFleet to import
  * @param importFromId The id of the existing DataAwsccEc2SpotFleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_spot_fleet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEc2SpotFleet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_spot_fleet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_spot_fleet awscc_ec2_spot_fleet} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2SpotFleetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2SpotFleetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_spot_fleet',
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

  // spot_fleet_id - computed: true, optional: false, required: false
  public get spotFleetId() {
    return this.getStringAttribute('spot_fleet_id');
  }

  // spot_fleet_request_config_data - computed: true, optional: false, required: false
  private _spotFleetRequestConfigData = new DataAwsccEc2SpotFleetSpotFleetRequestConfigDataOutputReference(this, "spot_fleet_request_config_data");
  public get spotFleetRequestConfigData() {
    return this._spotFleetRequestConfigData;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEc2SpotFleetTagsList(this, "tags", false);
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
