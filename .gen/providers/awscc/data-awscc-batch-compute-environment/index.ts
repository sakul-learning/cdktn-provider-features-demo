// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/batch_compute_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccBatchComputeEnvironmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/batch_compute_environment#id DataAwsccBatchComputeEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccBatchComputeEnvironmentComputeResourcesEc2Configuration {
}

export function dataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationToTerraform(struct?: DataAwsccBatchComputeEnvironmentComputeResourcesEc2Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationToHclTerraform(struct?: DataAwsccBatchComputeEnvironmentComputeResourcesEc2Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchComputeEnvironmentComputeResourcesEc2Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchComputeEnvironmentComputeResourcesEc2Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_image_status - computed: true, optional: false, required: false
  public get batchImageStatus() {
    return this.getStringAttribute('batch_image_status');
  }

  // image_id_override - computed: true, optional: false, required: false
  public get imageIdOverride() {
    return this.getStringAttribute('image_id_override');
  }

  // image_kubernetes_version - computed: true, optional: false, required: false
  public get imageKubernetesVersion() {
    return this.getStringAttribute('image_kubernetes_version');
  }

  // image_type - computed: true, optional: false, required: false
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
}

export class DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference {
    return new DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides {
}

export function dataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesToTerraform(struct?: DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesToHclTerraform(struct?: DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides | undefined) {
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

  // target_instance_types - computed: true, optional: false, required: false
  public get targetInstanceTypes() {
    return this.getListAttribute('target_instance_types');
  }

  // userdata_type - computed: true, optional: false, required: false
  public get userdataType() {
    return this.getStringAttribute('userdata_type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference {
    return new DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplate {
}

export function dataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateToTerraform(struct?: DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateToHclTerraform(struct?: DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplate | undefined) {
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

  // overrides - computed: true, optional: false, required: false
  private _overrides = new DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }

  // userdata_type - computed: true, optional: false, required: false
  public get userdataType() {
    return this.getStringAttribute('userdata_type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicy {
}

export function dataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyToTerraform(struct?: DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyToHclTerraform(struct?: DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // min_scale_down_delay_minutes - computed: true, optional: false, required: false
  public get minScaleDownDelayMinutes() {
    return this.getNumberAttribute('min_scale_down_delay_minutes');
  }
}
export interface DataAwsccBatchComputeEnvironmentComputeResources {
}

export function dataAwsccBatchComputeEnvironmentComputeResourcesToTerraform(struct?: DataAwsccBatchComputeEnvironmentComputeResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchComputeEnvironmentComputeResourcesToHclTerraform(struct?: DataAwsccBatchComputeEnvironmentComputeResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchComputeEnvironmentComputeResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchComputeEnvironmentComputeResources | undefined) {
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

  // bid_percentage - computed: true, optional: false, required: false
  public get bidPercentage() {
    return this.getNumberAttribute('bid_percentage');
  }

  // desiredv_cpus - computed: true, optional: false, required: false
  public get desiredvCpus() {
    return this.getNumberAttribute('desiredv_cpus');
  }

  // ec_2_configuration - computed: true, optional: false, required: false
  private _ec2Configuration = new DataAwsccBatchComputeEnvironmentComputeResourcesEc2ConfigurationList(this, "ec_2_configuration", false);
  public get ec2Configuration() {
    return this._ec2Configuration;
  }

  // ec_2_key_pair - computed: true, optional: false, required: false
  public get ec2KeyPair() {
    return this.getStringAttribute('ec_2_key_pair');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // instance_role - computed: true, optional: false, required: false
  public get instanceRole() {
    return this.getStringAttribute('instance_role');
  }

  // instance_types - computed: true, optional: false, required: false
  public get instanceTypes() {
    return this.getListAttribute('instance_types');
  }

  // launch_template - computed: true, optional: false, required: false
  private _launchTemplate = new DataAwsccBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference(this, "launch_template");
  public get launchTemplate() {
    return this._launchTemplate;
  }

  // maxv_cpus - computed: true, optional: false, required: false
  public get maxvCpus() {
    return this.getNumberAttribute('maxv_cpus');
  }

  // minv_cpus - computed: true, optional: false, required: false
  public get minvCpus() {
    return this.getNumberAttribute('minv_cpus');
  }

  // placement_group - computed: true, optional: false, required: false
  public get placementGroup() {
    return this.getStringAttribute('placement_group');
  }

  // scaling_policy - computed: true, optional: false, required: false
  private _scalingPolicy = new DataAwsccBatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference(this, "scaling_policy");
  public get scalingPolicy() {
    return this._scalingPolicy;
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // spot_iam_fleet_role - computed: true, optional: false, required: false
  public get spotIamFleetRole() {
    return this.getStringAttribute('spot_iam_fleet_role');
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // update_to_latest_image_version - computed: true, optional: false, required: false
  public get updateToLatestImageVersion() {
    return this.getBooleanAttribute('update_to_latest_image_version');
  }
}
export interface DataAwsccBatchComputeEnvironmentEksConfiguration {
}

export function dataAwsccBatchComputeEnvironmentEksConfigurationToTerraform(struct?: DataAwsccBatchComputeEnvironmentEksConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchComputeEnvironmentEksConfigurationToHclTerraform(struct?: DataAwsccBatchComputeEnvironmentEksConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchComputeEnvironmentEksConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchComputeEnvironmentEksConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // eks_cluster_arn - computed: true, optional: false, required: false
  public get eksClusterArn() {
    return this.getStringAttribute('eks_cluster_arn');
  }

  // kubernetes_namespace - computed: true, optional: false, required: false
  public get kubernetesNamespace() {
    return this.getStringAttribute('kubernetes_namespace');
  }
}
export interface DataAwsccBatchComputeEnvironmentUpdatePolicy {
}

export function dataAwsccBatchComputeEnvironmentUpdatePolicyToTerraform(struct?: DataAwsccBatchComputeEnvironmentUpdatePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchComputeEnvironmentUpdatePolicyToHclTerraform(struct?: DataAwsccBatchComputeEnvironmentUpdatePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchComputeEnvironmentUpdatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchComputeEnvironmentUpdatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // job_execution_timeout_minutes - computed: true, optional: false, required: false
  public get jobExecutionTimeoutMinutes() {
    return this.getNumberAttribute('job_execution_timeout_minutes');
  }

  // terminate_jobs_on_update - computed: true, optional: false, required: false
  public get terminateJobsOnUpdate() {
    return this.getBooleanAttribute('terminate_jobs_on_update');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/batch_compute_environment awscc_batch_compute_environment}
*/
export class DataAwsccBatchComputeEnvironment extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_batch_compute_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccBatchComputeEnvironment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccBatchComputeEnvironment to import
  * @param importFromId The id of the existing DataAwsccBatchComputeEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/batch_compute_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccBatchComputeEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_batch_compute_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/batch_compute_environment awscc_batch_compute_environment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccBatchComputeEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccBatchComputeEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_batch_compute_environment',
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

  // compute_environment_arn - computed: true, optional: false, required: false
  public get computeEnvironmentArn() {
    return this.getStringAttribute('compute_environment_arn');
  }

  // compute_environment_name - computed: true, optional: false, required: false
  public get computeEnvironmentName() {
    return this.getStringAttribute('compute_environment_name');
  }

  // compute_resources - computed: true, optional: false, required: false
  private _computeResources = new DataAwsccBatchComputeEnvironmentComputeResourcesOutputReference(this, "compute_resources");
  public get computeResources() {
    return this._computeResources;
  }

  // context - computed: true, optional: false, required: false
  public get context() {
    return this.getStringAttribute('context');
  }

  // eks_configuration - computed: true, optional: false, required: false
  private _eksConfiguration = new DataAwsccBatchComputeEnvironmentEksConfigurationOutputReference(this, "eks_configuration");
  public get eksConfiguration() {
    return this._eksConfiguration;
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

  // replace_compute_environment - computed: true, optional: false, required: false
  public get replaceComputeEnvironment() {
    return this.getBooleanAttribute('replace_compute_environment');
  }

  // service_role - computed: true, optional: false, required: false
  public get serviceRole() {
    return this.getStringAttribute('service_role');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unmanagedv_cpus - computed: true, optional: false, required: false
  public get unmanagedvCpus() {
    return this.getNumberAttribute('unmanagedv_cpus');
  }

  // update_policy - computed: true, optional: false, required: false
  private _updatePolicy = new DataAwsccBatchComputeEnvironmentUpdatePolicyOutputReference(this, "update_policy");
  public get updatePolicy() {
    return this._updatePolicy;
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
