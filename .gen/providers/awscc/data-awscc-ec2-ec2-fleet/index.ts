// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_ec2_fleet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEc2Ec2FleetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_ec2_fleet#id DataAwsccEc2Ec2Fleet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification {
}

export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationToHclTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecification | undefined) {
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

  // launch_template_specification_user_data - computed: true, optional: false, required: false
  public get launchTemplateSpecificationUserData() {
    return this.getStringAttribute('launch_template_specification_user_data');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs {
}

export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsToHclTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbs | undefined) {
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

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
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
export interface DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings {
}

export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsToHclTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappings | undefined) {
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
  private _ebs = new DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsEbsOutputReference(this, "ebs");
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

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference {
    return new DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile {
}

export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileToHclTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfile | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount {
}

export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountToHclTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCount | undefined) {
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
export interface DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB {
}

export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBToHclTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiB | undefined) {
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
export interface DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps {
}

export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsToHclTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbps | undefined) {
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
export interface DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences {
}

export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesToHclTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferences | undefined) {
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

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference {
    return new DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu {
}

export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuToHclTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // references - computed: true, optional: false, required: false
  private _references = new DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList(this, "references", false);
  public get references() {
    return this._references;
  }
}
export interface DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors {
}

export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsToHclTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu - computed: true, optional: false, required: false
  private _cpu = new DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
}
export interface DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu {
}

export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuToHclTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpu | undefined) {
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
export interface DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB {
}

export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBToHclTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiB | undefined) {
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
export interface DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps {
}

export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsToHclTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbps | undefined) {
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
export interface DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount {
}

export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountToHclTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCount | undefined) {
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
export interface DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb {
}

export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbToHclTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGb | undefined) {
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
export interface DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount {
}

export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountToHclTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount | undefined) {
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
export interface DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements {
}

export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsToHclTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accelerator_count - computed: true, optional: false, required: false
  private _acceleratorCount = new DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorCountOutputReference(this, "accelerator_count");
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
  private _acceleratorTotalMemoryMiB = new DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference(this, "accelerator_total_memory_mi_b");
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
  private _baselineEbsBandwidthMbps = new DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference(this, "baseline_ebs_bandwidth_mbps");
  public get baselineEbsBandwidthMbps() {
    return this._baselineEbsBandwidthMbps;
  }

  // baseline_performance_factors - computed: true, optional: false, required: false
  private _baselinePerformanceFactors = new DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsBaselinePerformanceFactorsOutputReference(this, "baseline_performance_factors");
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
  private _memoryGiBPerVCpu = new DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryGiBPerVCpuOutputReference(this, "memory_gi_b_per_v_cpu");
  public get memoryGiBPerVCpu() {
    return this._memoryGiBPerVCpu;
  }

  // memory_mi_b - computed: true, optional: false, required: false
  private _memoryMiB = new DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsMemoryMiBOutputReference(this, "memory_mi_b");
  public get memoryMiB() {
    return this._memoryMiB;
  }

  // network_bandwidth_gbps - computed: true, optional: false, required: false
  private _networkBandwidthGbps = new DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference(this, "network_bandwidth_gbps");
  public get networkBandwidthGbps() {
    return this._networkBandwidthGbps;
  }

  // network_interface_count - computed: true, optional: false, required: false
  private _networkInterfaceCount = new DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsNetworkInterfaceCountOutputReference(this, "network_interface_count");
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
  private _totalLocalStorageGb = new DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsTotalLocalStorageGbOutputReference(this, "total_local_storage_gb");
  public get totalLocalStorageGb() {
    return this._totalLocalStorageGb;
  }

  // v_cpu_count - computed: true, optional: false, required: false
  private _vCpuCount = new DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCountOutputReference(this, "v_cpu_count");
  public get vCpuCount() {
    return this._vCpuCount;
  }
}
export interface DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions {
}

export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsToHclTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http_endpoint - computed: true, optional: false, required: false
  public get httpEndpoint() {
    return this.getStringAttribute('http_endpoint');
  }

  // http_put_response_hop_limit - computed: true, optional: false, required: false
  public get httpPutResponseHopLimit() {
    return this.getNumberAttribute('http_put_response_hop_limit');
  }

  // http_tokens - computed: true, optional: false, required: false
  public get httpTokens() {
    return this.getStringAttribute('http_tokens');
  }
}
export interface DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses {
}

export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesToHclTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6Addresses | undefined) {
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

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference {
    return new DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses {
}

export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesToHclTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddresses | undefined) {
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

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference {
    return new DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces {
}

export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesToHclTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfaces | undefined) {
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

  // interface_type - computed: true, optional: false, required: false
  public get interfaceType() {
    return this.getStringAttribute('interface_type');
  }

  // ipv_6_address_count - computed: true, optional: false, required: false
  public get ipv6AddressCount() {
    return this.getNumberAttribute('ipv_6_address_count');
  }

  // ipv_6_addresses - computed: true, optional: false, required: false
  private _ipv6Addresses = new DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesIpv6AddressesList(this, "ipv_6_addresses", false);
  public get ipv6Addresses() {
    return this._ipv6Addresses;
  }

  // network_card_index - computed: true, optional: false, required: false
  public get networkCardIndex() {
    return this.getNumberAttribute('network_card_index');
  }

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // private_ip_addresses - computed: true, optional: false, required: false
  private _privateIpAddresses = new DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesPrivateIpAddressesList(this, "private_ip_addresses", false);
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

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference {
    return new DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement {
}

export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementToHclTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // affinity - computed: true, optional: false, required: false
  public get affinity() {
    return this.getStringAttribute('affinity');
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // host_id - computed: true, optional: false, required: false
  public get hostId() {
    return this.getStringAttribute('host_id');
  }

  // host_resource_group_arn - computed: true, optional: false, required: false
  public get hostResourceGroupArn() {
    return this.getStringAttribute('host_resource_group_arn');
  }

  // partition_number - computed: true, optional: false, required: false
  public get partitionNumber() {
    return this.getNumberAttribute('partition_number');
  }

  // spread_domain - computed: true, optional: false, required: false
  public get spreadDomain() {
    return this.getStringAttribute('spread_domain');
  }

  // tenancy - computed: true, optional: false, required: false
  public get tenancy() {
    return this.getStringAttribute('tenancy');
  }
}
export interface DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides {
}

export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesToHclTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverrides | undefined) {
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

  // block_device_mappings - computed: true, optional: false, required: false
  private _blockDeviceMappings = new DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesBlockDeviceMappingsList(this, "block_device_mappings", false);
  public get blockDeviceMappings() {
    return this._blockDeviceMappings;
  }

  // iam_instance_profile - computed: true, optional: false, required: false
  private _iamInstanceProfile = new DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesIamInstanceProfileOutputReference(this, "iam_instance_profile");
  public get iamInstanceProfile() {
    return this._iamInstanceProfile;
  }

  // instance_requirements - computed: true, optional: false, required: false
  private _instanceRequirements = new DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesInstanceRequirementsOutputReference(this, "instance_requirements");
  public get instanceRequirements() {
    return this._instanceRequirements;
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // max_price - computed: true, optional: false, required: false
  public get maxPrice() {
    return this.getStringAttribute('max_price');
  }

  // metadata_options - computed: true, optional: false, required: false
  private _metadataOptions = new DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesMetadataOptionsOutputReference(this, "metadata_options");
  public get metadataOptions() {
    return this._metadataOptions;
  }

  // network_interfaces - computed: true, optional: false, required: false
  private _networkInterfaces = new DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesNetworkInterfacesList(this, "network_interfaces", false);
  public get networkInterfaces() {
    return this._networkInterfaces;
  }

  // placement - computed: true, optional: false, required: false
  private _placement = new DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesPlacementOutputReference(this, "placement");
  public get placement() {
    return this._placement;
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
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

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference {
    return new DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2Ec2FleetLaunchTemplateConfigs {
}

export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsToTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetLaunchTemplateConfigsToHclTerraform(struct?: DataAwsccEc2Ec2FleetLaunchTemplateConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2Ec2FleetLaunchTemplateConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetLaunchTemplateConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // launch_template_specification - computed: true, optional: false, required: false
  private _launchTemplateSpecification = new DataAwsccEc2Ec2FleetLaunchTemplateConfigsLaunchTemplateSpecificationOutputReference(this, "launch_template_specification");
  public get launchTemplateSpecification() {
    return this._launchTemplateSpecification;
  }

  // overrides - computed: true, optional: false, required: false
  private _overrides = new DataAwsccEc2Ec2FleetLaunchTemplateConfigsOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }
}

export class DataAwsccEc2Ec2FleetLaunchTemplateConfigsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference {
    return new DataAwsccEc2Ec2FleetLaunchTemplateConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions {
}

export function dataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsToTerraform(struct?: DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsToHclTerraform(struct?: DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // usage_strategy - computed: true, optional: false, required: false
  public get usageStrategy() {
    return this.getStringAttribute('usage_strategy');
  }
}
export interface DataAwsccEc2Ec2FleetOnDemandOptions {
}

export function dataAwsccEc2Ec2FleetOnDemandOptionsToTerraform(struct?: DataAwsccEc2Ec2FleetOnDemandOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetOnDemandOptionsToHclTerraform(struct?: DataAwsccEc2Ec2FleetOnDemandOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2Ec2FleetOnDemandOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetOnDemandOptions | undefined) {
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

  // capacity_reservation_options - computed: true, optional: false, required: false
  private _capacityReservationOptions = new DataAwsccEc2Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference(this, "capacity_reservation_options");
  public get capacityReservationOptions() {
    return this._capacityReservationOptions;
  }

  // max_total_price - computed: true, optional: false, required: false
  public get maxTotalPrice() {
    return this.getStringAttribute('max_total_price');
  }

  // min_target_capacity - computed: true, optional: false, required: false
  public get minTargetCapacity() {
    return this.getNumberAttribute('min_target_capacity');
  }

  // single_availability_zone - computed: true, optional: false, required: false
  public get singleAvailabilityZone() {
    return this.getBooleanAttribute('single_availability_zone');
  }

  // single_instance_type - computed: true, optional: false, required: false
  public get singleInstanceType() {
    return this.getBooleanAttribute('single_instance_type');
  }
}
export interface DataAwsccEc2Ec2FleetReservedCapacityOptions {
}

export function dataAwsccEc2Ec2FleetReservedCapacityOptionsToTerraform(struct?: DataAwsccEc2Ec2FleetReservedCapacityOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetReservedCapacityOptionsToHclTerraform(struct?: DataAwsccEc2Ec2FleetReservedCapacityOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2Ec2FleetReservedCapacityOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetReservedCapacityOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reservation_types - computed: true, optional: false, required: false
  public get reservationTypes() {
    return this.getListAttribute('reservation_types');
  }
}
export interface DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance {
}

export function dataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceToTerraform(struct?: DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceToHclTerraform(struct?: DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance | undefined) {
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
export interface DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategies {
}

export function dataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesToTerraform(struct?: DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesToHclTerraform(struct?: DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_rebalance - computed: true, optional: false, required: false
  private _capacityRebalance = new DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference(this, "capacity_rebalance");
  public get capacityRebalance() {
    return this._capacityRebalance;
  }
}
export interface DataAwsccEc2Ec2FleetSpotOptions {
}

export function dataAwsccEc2Ec2FleetSpotOptionsToTerraform(struct?: DataAwsccEc2Ec2FleetSpotOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetSpotOptionsToHclTerraform(struct?: DataAwsccEc2Ec2FleetSpotOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetSpotOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2Ec2FleetSpotOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetSpotOptions | undefined) {
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

  // instance_interruption_behavior - computed: true, optional: false, required: false
  public get instanceInterruptionBehavior() {
    return this.getStringAttribute('instance_interruption_behavior');
  }

  // instance_pools_to_use_count - computed: true, optional: false, required: false
  public get instancePoolsToUseCount() {
    return this.getNumberAttribute('instance_pools_to_use_count');
  }

  // maintenance_strategies - computed: true, optional: false, required: false
  private _maintenanceStrategies = new DataAwsccEc2Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference(this, "maintenance_strategies");
  public get maintenanceStrategies() {
    return this._maintenanceStrategies;
  }

  // max_total_price - computed: true, optional: false, required: false
  public get maxTotalPrice() {
    return this.getStringAttribute('max_total_price');
  }

  // min_target_capacity - computed: true, optional: false, required: false
  public get minTargetCapacity() {
    return this.getNumberAttribute('min_target_capacity');
  }

  // single_availability_zone - computed: true, optional: false, required: false
  public get singleAvailabilityZone() {
    return this.getBooleanAttribute('single_availability_zone');
  }

  // single_instance_type - computed: true, optional: false, required: false
  public get singleInstanceType() {
    return this.getBooleanAttribute('single_instance_type');
  }
}
export interface DataAwsccEc2Ec2FleetTagSpecificationsTags {
}

export function dataAwsccEc2Ec2FleetTagSpecificationsTagsToTerraform(struct?: DataAwsccEc2Ec2FleetTagSpecificationsTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetTagSpecificationsTagsToHclTerraform(struct?: DataAwsccEc2Ec2FleetTagSpecificationsTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2Ec2FleetTagSpecificationsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetTagSpecificationsTags | undefined) {
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

export class DataAwsccEc2Ec2FleetTagSpecificationsTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference {
    return new DataAwsccEc2Ec2FleetTagSpecificationsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2Ec2FleetTagSpecifications {
}

export function dataAwsccEc2Ec2FleetTagSpecificationsToTerraform(struct?: DataAwsccEc2Ec2FleetTagSpecifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetTagSpecificationsToHclTerraform(struct?: DataAwsccEc2Ec2FleetTagSpecifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetTagSpecificationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2Ec2FleetTagSpecifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetTagSpecifications | undefined) {
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
  private _tags = new DataAwsccEc2Ec2FleetTagSpecificationsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
}

export class DataAwsccEc2Ec2FleetTagSpecificationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2Ec2FleetTagSpecificationsOutputReference {
    return new DataAwsccEc2Ec2FleetTagSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2Ec2FleetTargetCapacitySpecification {
}

export function dataAwsccEc2Ec2FleetTargetCapacitySpecificationToTerraform(struct?: DataAwsccEc2Ec2FleetTargetCapacitySpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2Ec2FleetTargetCapacitySpecificationToHclTerraform(struct?: DataAwsccEc2Ec2FleetTargetCapacitySpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2Ec2FleetTargetCapacitySpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2Ec2FleetTargetCapacitySpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_target_capacity_type - computed: true, optional: false, required: false
  public get defaultTargetCapacityType() {
    return this.getStringAttribute('default_target_capacity_type');
  }

  // on_demand_target_capacity - computed: true, optional: false, required: false
  public get onDemandTargetCapacity() {
    return this.getNumberAttribute('on_demand_target_capacity');
  }

  // spot_target_capacity - computed: true, optional: false, required: false
  public get spotTargetCapacity() {
    return this.getNumberAttribute('spot_target_capacity');
  }

  // target_capacity_unit_type - computed: true, optional: false, required: false
  public get targetCapacityUnitType() {
    return this.getStringAttribute('target_capacity_unit_type');
  }

  // total_target_capacity - computed: true, optional: false, required: false
  public get totalTargetCapacity() {
    return this.getNumberAttribute('total_target_capacity');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_ec2_fleet awscc_ec2_ec2_fleet}
*/
export class DataAwsccEc2Ec2Fleet extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_ec2_fleet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEc2Ec2Fleet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEc2Ec2Fleet to import
  * @param importFromId The id of the existing DataAwsccEc2Ec2Fleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_ec2_fleet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEc2Ec2Fleet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_ec2_fleet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_ec2_fleet awscc_ec2_ec2_fleet} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2Ec2FleetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2Ec2FleetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_ec2_fleet',
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

  // context - computed: true, optional: false, required: false
  public get context() {
    return this.getStringAttribute('context');
  }

  // excess_capacity_termination_policy - computed: true, optional: false, required: false
  public get excessCapacityTerminationPolicy() {
    return this.getStringAttribute('excess_capacity_termination_policy');
  }

  // fleet_id - computed: true, optional: false, required: false
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
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

  // launch_template_configs - computed: true, optional: false, required: false
  private _launchTemplateConfigs = new DataAwsccEc2Ec2FleetLaunchTemplateConfigsList(this, "launch_template_configs", false);
  public get launchTemplateConfigs() {
    return this._launchTemplateConfigs;
  }

  // on_demand_options - computed: true, optional: false, required: false
  private _onDemandOptions = new DataAwsccEc2Ec2FleetOnDemandOptionsOutputReference(this, "on_demand_options");
  public get onDemandOptions() {
    return this._onDemandOptions;
  }

  // replace_unhealthy_instances - computed: true, optional: false, required: false
  public get replaceUnhealthyInstances() {
    return this.getBooleanAttribute('replace_unhealthy_instances');
  }

  // reserved_capacity_options - computed: true, optional: false, required: false
  private _reservedCapacityOptions = new DataAwsccEc2Ec2FleetReservedCapacityOptionsOutputReference(this, "reserved_capacity_options");
  public get reservedCapacityOptions() {
    return this._reservedCapacityOptions;
  }

  // spot_options - computed: true, optional: false, required: false
  private _spotOptions = new DataAwsccEc2Ec2FleetSpotOptionsOutputReference(this, "spot_options");
  public get spotOptions() {
    return this._spotOptions;
  }

  // tag_specifications - computed: true, optional: false, required: false
  private _tagSpecifications = new DataAwsccEc2Ec2FleetTagSpecificationsList(this, "tag_specifications", false);
  public get tagSpecifications() {
    return this._tagSpecifications;
  }

  // target_capacity_specification - computed: true, optional: false, required: false
  private _targetCapacitySpecification = new DataAwsccEc2Ec2FleetTargetCapacitySpecificationOutputReference(this, "target_capacity_specification");
  public get targetCapacitySpecification() {
    return this._targetCapacitySpecification;
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
