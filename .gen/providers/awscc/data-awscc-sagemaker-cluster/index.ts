// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSagemakerClusterConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_cluster#id DataAwsccSagemakerCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSagemakerClusterAutoScaling {
}

export function dataAwsccSagemakerClusterAutoScalingToTerraform(struct?: DataAwsccSagemakerClusterAutoScaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerClusterAutoScalingToHclTerraform(struct?: DataAwsccSagemakerClusterAutoScaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerClusterAutoScalingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerClusterAutoScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerClusterAutoScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_scaler_type - computed: true, optional: false, required: false
  public get autoScalerType() {
    return this.getStringAttribute('auto_scaler_type');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}
export interface DataAwsccSagemakerClusterInstanceGroupsCapacityRequirements {
}

export function dataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsToTerraform(struct?: DataAwsccSagemakerClusterInstanceGroupsCapacityRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsToHclTerraform(struct?: DataAwsccSagemakerClusterInstanceGroupsCapacityRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerClusterInstanceGroupsCapacityRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerClusterInstanceGroupsCapacityRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // on_demand - computed: true, optional: false, required: false
  public get onDemand() {
    return this.getStringAttribute('on_demand');
  }

  // spot - computed: true, optional: false, required: false
  public get spot() {
    return this.getStringAttribute('spot');
  }
}
export interface DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig {
}

export function dataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigToTerraform(struct?: DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigToHclTerraform(struct?: DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // root_volume - computed: true, optional: false, required: false
  public get rootVolume() {
    return this.getBooleanAttribute('root_volume');
  }

  // volume_kms_key_id - computed: true, optional: false, required: false
  public get volumeKmsKeyId() {
    return this.getStringAttribute('volume_kms_key_id');
  }

  // volume_size_in_gb - computed: true, optional: false, required: false
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
}
export interface DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigs {
}

export function dataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsToTerraform(struct?: DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsToHclTerraform(struct?: DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ebs_volume_config - computed: true, optional: false, required: false
  private _ebsVolumeConfig = new DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference(this, "ebs_volume_config");
  public get ebsVolumeConfig() {
    return this._ebsVolumeConfig;
  }
}

export class DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference {
    return new DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaints {
}

export function dataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsToTerraform(struct?: DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsToHclTerraform(struct?: DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
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

export class DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference {
    return new DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerClusterInstanceGroupsKubernetesConfig {
}

export function dataAwsccSagemakerClusterInstanceGroupsKubernetesConfigToTerraform(struct?: DataAwsccSagemakerClusterInstanceGroupsKubernetesConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerClusterInstanceGroupsKubernetesConfigToHclTerraform(struct?: DataAwsccSagemakerClusterInstanceGroupsKubernetesConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerClusterInstanceGroupsKubernetesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerClusterInstanceGroupsKubernetesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktn.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // taints - computed: true, optional: false, required: false
  private _taints = new DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
}
export interface DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfig {
}

export function dataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigToTerraform(struct?: DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigToHclTerraform(struct?: DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // on_create - computed: true, optional: false, required: false
  public get onCreate() {
    return this.getStringAttribute('on_create');
  }

  // source_s3_uri - computed: true, optional: false, required: false
  public get sourceS3Uri() {
    return this.getStringAttribute('source_s3_uri');
  }
}
export interface DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfig {
}

export function dataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigToTerraform(struct?: DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigToHclTerraform(struct?: DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }
}
export interface DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration {
}

export function dataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationToTerraform(struct?: DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationToHclTerraform(struct?: DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_name - computed: true, optional: false, required: false
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }
}

export class DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference {
    return new DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize {
}

export function dataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeToTerraform(struct?: DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeToHclTerraform(struct?: DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize {
}

export function dataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeToTerraform(struct?: DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeToHclTerraform(struct?: DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy {
}

export function dataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyToTerraform(struct?: DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyToHclTerraform(struct?: DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // maximum_batch_size - computed: true, optional: false, required: false
  private _maximumBatchSize = new DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference(this, "maximum_batch_size");
  public get maximumBatchSize() {
    return this._maximumBatchSize;
  }

  // rollback_maximum_batch_size - computed: true, optional: false, required: false
  private _rollbackMaximumBatchSize = new DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference(this, "rollback_maximum_batch_size");
  public get rollbackMaximumBatchSize() {
    return this._rollbackMaximumBatchSize;
  }
}
export interface DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig {
}

export function dataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigToTerraform(struct?: DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigToHclTerraform(struct?: DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_rollback_configuration - computed: true, optional: false, required: false
  private _autoRollbackConfiguration = new DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigAutoRollbackConfigurationList(this, "auto_rollback_configuration", false);
  public get autoRollbackConfiguration() {
    return this._autoRollbackConfiguration;
  }

  // rolling_update_policy - computed: true, optional: false, required: false
  private _rollingUpdatePolicy = new DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigRollingUpdatePolicyOutputReference(this, "rolling_update_policy");
  public get rollingUpdatePolicy() {
    return this._rollingUpdatePolicy;
  }

  // wait_interval_in_seconds - computed: true, optional: false, required: false
  public get waitIntervalInSeconds() {
    return this.getNumberAttribute('wait_interval_in_seconds');
  }
}
export interface DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfig {
}

export function dataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigToTerraform(struct?: DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigToHclTerraform(struct?: DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deployment_config - computed: true, optional: false, required: false
  private _deploymentConfig = new DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigDeploymentConfigOutputReference(this, "deployment_config");
  public get deploymentConfig() {
    return this._deploymentConfig;
  }

  // schedule_expression - computed: true, optional: false, required: false
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
}
export interface DataAwsccSagemakerClusterInstanceGroups {
}

export function dataAwsccSagemakerClusterInstanceGroupsToTerraform(struct?: DataAwsccSagemakerClusterInstanceGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerClusterInstanceGroupsToHclTerraform(struct?: DataAwsccSagemakerClusterInstanceGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerClusterInstanceGroupsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerClusterInstanceGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerClusterInstanceGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_requirements - computed: true, optional: false, required: false
  private _capacityRequirements = new DataAwsccSagemakerClusterInstanceGroupsCapacityRequirementsOutputReference(this, "capacity_requirements");
  public get capacityRequirements() {
    return this._capacityRequirements;
  }

  // current_count - computed: true, optional: false, required: false
  public get currentCount() {
    return this.getNumberAttribute('current_count');
  }

  // execution_role - computed: true, optional: false, required: false
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // instance_count - computed: true, optional: false, required: false
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }

  // instance_group_name - computed: true, optional: false, required: false
  public get instanceGroupName() {
    return this.getStringAttribute('instance_group_name');
  }

  // instance_storage_configs - computed: true, optional: false, required: false
  private _instanceStorageConfigs = new DataAwsccSagemakerClusterInstanceGroupsInstanceStorageConfigsList(this, "instance_storage_configs", false);
  public get instanceStorageConfigs() {
    return this._instanceStorageConfigs;
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // kubernetes_config - computed: true, optional: false, required: false
  private _kubernetesConfig = new DataAwsccSagemakerClusterInstanceGroupsKubernetesConfigOutputReference(this, "kubernetes_config");
  public get kubernetesConfig() {
    return this._kubernetesConfig;
  }

  // life_cycle_config - computed: true, optional: false, required: false
  private _lifeCycleConfig = new DataAwsccSagemakerClusterInstanceGroupsLifeCycleConfigOutputReference(this, "life_cycle_config");
  public get lifeCycleConfig() {
    return this._lifeCycleConfig;
  }

  // min_instance_count - computed: true, optional: false, required: false
  public get minInstanceCount() {
    return this.getNumberAttribute('min_instance_count');
  }

  // on_start_deep_health_checks - computed: true, optional: false, required: false
  public get onStartDeepHealthChecks() {
    return this.getListAttribute('on_start_deep_health_checks');
  }

  // override_vpc_config - computed: true, optional: false, required: false
  private _overrideVpcConfig = new DataAwsccSagemakerClusterInstanceGroupsOverrideVpcConfigOutputReference(this, "override_vpc_config");
  public get overrideVpcConfig() {
    return this._overrideVpcConfig;
  }

  // scheduled_update_config - computed: true, optional: false, required: false
  private _scheduledUpdateConfig = new DataAwsccSagemakerClusterInstanceGroupsScheduledUpdateConfigOutputReference(this, "scheduled_update_config");
  public get scheduledUpdateConfig() {
    return this._scheduledUpdateConfig;
  }

  // threads_per_core - computed: true, optional: false, required: false
  public get threadsPerCore() {
    return this.getNumberAttribute('threads_per_core');
  }

  // training_plan_arn - computed: true, optional: false, required: false
  public get trainingPlanArn() {
    return this.getStringAttribute('training_plan_arn');
  }
}

export class DataAwsccSagemakerClusterInstanceGroupsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerClusterInstanceGroupsOutputReference {
    return new DataAwsccSagemakerClusterInstanceGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerClusterOrchestratorEks {
}

export function dataAwsccSagemakerClusterOrchestratorEksToTerraform(struct?: DataAwsccSagemakerClusterOrchestratorEks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerClusterOrchestratorEksToHclTerraform(struct?: DataAwsccSagemakerClusterOrchestratorEks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerClusterOrchestratorEksOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerClusterOrchestratorEks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerClusterOrchestratorEks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_arn - computed: true, optional: false, required: false
  public get clusterArn() {
    return this.getStringAttribute('cluster_arn');
  }
}
export interface DataAwsccSagemakerClusterOrchestrator {
}

export function dataAwsccSagemakerClusterOrchestratorToTerraform(struct?: DataAwsccSagemakerClusterOrchestrator): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerClusterOrchestratorToHclTerraform(struct?: DataAwsccSagemakerClusterOrchestrator): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerClusterOrchestratorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerClusterOrchestrator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerClusterOrchestrator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // eks - computed: true, optional: false, required: false
  private _eks = new DataAwsccSagemakerClusterOrchestratorEksOutputReference(this, "eks");
  public get eks() {
    return this._eks;
  }
}
export interface DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig {
}

export function dataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigToTerraform(struct?: DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigToHclTerraform(struct?: DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // per_unit_storage_throughput - computed: true, optional: false, required: false
  public get perUnitStorageThroughput() {
    return this.getNumberAttribute('per_unit_storage_throughput');
  }

  // size_in_gi_b - computed: true, optional: false, required: false
  public get sizeInGiB() {
    return this.getNumberAttribute('size_in_gi_b');
  }
}
export interface DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfig {
}

export function dataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigToTerraform(struct?: DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigToHclTerraform(struct?: DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fsx_lustre_config - computed: true, optional: false, required: false
  private _fsxLustreConfig = new DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigFsxLustreConfigOutputReference(this, "fsx_lustre_config");
  public get fsxLustreConfig() {
    return this._fsxLustreConfig;
  }
}
export interface DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig {
}

export function dataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigToTerraform(struct?: DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigToHclTerraform(struct?: DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // root_volume - computed: true, optional: false, required: false
  public get rootVolume() {
    return this.getBooleanAttribute('root_volume');
  }

  // volume_kms_key_id - computed: true, optional: false, required: false
  public get volumeKmsKeyId() {
    return this.getStringAttribute('volume_kms_key_id');
  }

  // volume_size_in_gb - computed: true, optional: false, required: false
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
}
export interface DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs {
}

export function dataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsToTerraform(struct?: DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsToHclTerraform(struct?: DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ebs_volume_config - computed: true, optional: false, required: false
  private _ebsVolumeConfig = new DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsEbsVolumeConfigOutputReference(this, "ebs_volume_config");
  public get ebsVolumeConfig() {
    return this._ebsVolumeConfig;
  }
}

export class DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference {
    return new DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig {
}

export function dataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigToTerraform(struct?: DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigToHclTerraform(struct?: DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }
}
export interface DataAwsccSagemakerClusterRestrictedInstanceGroups {
}

export function dataAwsccSagemakerClusterRestrictedInstanceGroupsToTerraform(struct?: DataAwsccSagemakerClusterRestrictedInstanceGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerClusterRestrictedInstanceGroupsToHclTerraform(struct?: DataAwsccSagemakerClusterRestrictedInstanceGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerClusterRestrictedInstanceGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerClusterRestrictedInstanceGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_count - computed: true, optional: false, required: false
  public get currentCount() {
    return this.getNumberAttribute('current_count');
  }

  // environment_config - computed: true, optional: false, required: false
  private _environmentConfig = new DataAwsccSagemakerClusterRestrictedInstanceGroupsEnvironmentConfigOutputReference(this, "environment_config");
  public get environmentConfig() {
    return this._environmentConfig;
  }

  // execution_role - computed: true, optional: false, required: false
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }

  // instance_count - computed: true, optional: false, required: false
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }

  // instance_group_name - computed: true, optional: false, required: false
  public get instanceGroupName() {
    return this.getStringAttribute('instance_group_name');
  }

  // instance_storage_configs - computed: true, optional: false, required: false
  private _instanceStorageConfigs = new DataAwsccSagemakerClusterRestrictedInstanceGroupsInstanceStorageConfigsList(this, "instance_storage_configs", false);
  public get instanceStorageConfigs() {
    return this._instanceStorageConfigs;
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // on_start_deep_health_checks - computed: true, optional: false, required: false
  public get onStartDeepHealthChecks() {
    return this.getListAttribute('on_start_deep_health_checks');
  }

  // override_vpc_config - computed: true, optional: false, required: false
  private _overrideVpcConfig = new DataAwsccSagemakerClusterRestrictedInstanceGroupsOverrideVpcConfigOutputReference(this, "override_vpc_config");
  public get overrideVpcConfig() {
    return this._overrideVpcConfig;
  }

  // threads_per_core - computed: true, optional: false, required: false
  public get threadsPerCore() {
    return this.getNumberAttribute('threads_per_core');
  }

  // training_plan_arn - computed: true, optional: false, required: false
  public get trainingPlanArn() {
    return this.getStringAttribute('training_plan_arn');
  }
}

export class DataAwsccSagemakerClusterRestrictedInstanceGroupsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference {
    return new DataAwsccSagemakerClusterRestrictedInstanceGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerClusterTags {
}

export function dataAwsccSagemakerClusterTagsToTerraform(struct?: DataAwsccSagemakerClusterTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerClusterTagsToHclTerraform(struct?: DataAwsccSagemakerClusterTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerClusterTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerClusterTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerClusterTags | undefined) {
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

export class DataAwsccSagemakerClusterTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerClusterTagsOutputReference {
    return new DataAwsccSagemakerClusterTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerClusterTieredStorageConfig {
}

export function dataAwsccSagemakerClusterTieredStorageConfigToTerraform(struct?: DataAwsccSagemakerClusterTieredStorageConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerClusterTieredStorageConfigToHclTerraform(struct?: DataAwsccSagemakerClusterTieredStorageConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerClusterTieredStorageConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerClusterTieredStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerClusterTieredStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_memory_allocation_percentage - computed: true, optional: false, required: false
  public get instanceMemoryAllocationPercentage() {
    return this.getNumberAttribute('instance_memory_allocation_percentage');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}
export interface DataAwsccSagemakerClusterVpcConfig {
}

export function dataAwsccSagemakerClusterVpcConfigToTerraform(struct?: DataAwsccSagemakerClusterVpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerClusterVpcConfigToHclTerraform(struct?: DataAwsccSagemakerClusterVpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerClusterVpcConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerClusterVpcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerClusterVpcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_cluster awscc_sagemaker_cluster}
*/
export class DataAwsccSagemakerCluster extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSagemakerCluster resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSagemakerCluster to import
  * @param importFromId The id of the existing DataAwsccSagemakerCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSagemakerCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_cluster awscc_sagemaker_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSagemakerClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSagemakerClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_cluster',
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

  // auto_scaling - computed: true, optional: false, required: false
  private _autoScaling = new DataAwsccSagemakerClusterAutoScalingOutputReference(this, "auto_scaling");
  public get autoScaling() {
    return this._autoScaling;
  }

  // cluster_arn - computed: true, optional: false, required: false
  public get clusterArn() {
    return this.getStringAttribute('cluster_arn');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // cluster_role - computed: true, optional: false, required: false
  public get clusterRole() {
    return this.getStringAttribute('cluster_role');
  }

  // cluster_status - computed: true, optional: false, required: false
  public get clusterStatus() {
    return this.getStringAttribute('cluster_status');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // failure_message - computed: true, optional: false, required: false
  public get failureMessage() {
    return this.getStringAttribute('failure_message');
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

  // instance_groups - computed: true, optional: false, required: false
  private _instanceGroups = new DataAwsccSagemakerClusterInstanceGroupsList(this, "instance_groups", false);
  public get instanceGroups() {
    return this._instanceGroups;
  }

  // node_provisioning_mode - computed: true, optional: false, required: false
  public get nodeProvisioningMode() {
    return this.getStringAttribute('node_provisioning_mode');
  }

  // node_recovery - computed: true, optional: false, required: false
  public get nodeRecovery() {
    return this.getStringAttribute('node_recovery');
  }

  // orchestrator - computed: true, optional: false, required: false
  private _orchestrator = new DataAwsccSagemakerClusterOrchestratorOutputReference(this, "orchestrator");
  public get orchestrator() {
    return this._orchestrator;
  }

  // restricted_instance_groups - computed: true, optional: false, required: false
  private _restrictedInstanceGroups = new DataAwsccSagemakerClusterRestrictedInstanceGroupsList(this, "restricted_instance_groups", false);
  public get restrictedInstanceGroups() {
    return this._restrictedInstanceGroups;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccSagemakerClusterTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // tiered_storage_config - computed: true, optional: false, required: false
  private _tieredStorageConfig = new DataAwsccSagemakerClusterTieredStorageConfigOutputReference(this, "tiered_storage_config");
  public get tieredStorageConfig() {
    return this._tieredStorageConfig;
  }

  // vpc_config - computed: true, optional: false, required: false
  private _vpcConfig = new DataAwsccSagemakerClusterVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
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
