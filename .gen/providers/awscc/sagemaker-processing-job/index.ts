// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SagemakerProcessingJobConfig extends cdktn.TerraformMetaArguments {
  /**
  * Configures the processing job to run a specified Docker container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#app_specification SagemakerProcessingJob#app_specification}
  */
  readonly appSpecification: SagemakerProcessingJobAppSpecification;
  /**
  * Sets the environment variables in the Docker container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#environment SagemakerProcessingJob#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Associates a SageMaker job as a trial component with an experiment and trial.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#experiment_config SagemakerProcessingJob#experiment_config}
  */
  readonly experimentConfig?: SagemakerProcessingJobExperimentConfig;
  /**
  * Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#network_config SagemakerProcessingJob#network_config}
  */
  readonly networkConfig?: SagemakerProcessingJobNetworkConfig;
  /**
  * An array of inputs configuring the data to download into the processing container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#processing_inputs SagemakerProcessingJob#processing_inputs}
  */
  readonly processingInputs?: SagemakerProcessingJobProcessingInputs[] | cdktn.IResolvable;
  /**
  * The name of the processing job. The name must be unique within an AWS Region in the AWS account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#processing_job_name SagemakerProcessingJob#processing_job_name}
  */
  readonly processingJobName?: string;
  /**
  * Configuration for uploading output from the processing container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#processing_output_config SagemakerProcessingJob#processing_output_config}
  */
  readonly processingOutputConfig?: SagemakerProcessingJobProcessingOutputConfig;
  /**
  * Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. In distributed training, you specify more than one instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#processing_resources SagemakerProcessingJob#processing_resources}
  */
  readonly processingResources: SagemakerProcessingJobProcessingResources;
  /**
  * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#role_arn SagemakerProcessingJob#role_arn}
  */
  readonly roleArn: string;
  /**
  * Configures conditions under which the processing job should be stopped, such as how long the processing job has been running. After the condition is met, the processing job is stopped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#stopping_condition SagemakerProcessingJob#stopping_condition}
  */
  readonly stoppingCondition?: SagemakerProcessingJobStoppingCondition;
  /**
  * (Optional) An array of key-value pairs. For more information, see Using Cost Allocation Tags(https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL) in the AWS Billing and Cost Management User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#tags SagemakerProcessingJob#tags}
  */
  readonly tags?: SagemakerProcessingJobTags[] | cdktn.IResolvable;
}
export interface SagemakerProcessingJobAppSpecification {
  /**
  * The arguments for a container used to run a processing job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#container_arguments SagemakerProcessingJob#container_arguments}
  */
  readonly containerArguments?: string[];
  /**
  * The entrypoint for a container used to run a processing job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#container_entrypoint SagemakerProcessingJob#container_entrypoint}
  */
  readonly containerEntrypoint?: string[];
  /**
  * The container image to be run by the processing job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#image_uri SagemakerProcessingJob#image_uri}
  */
  readonly imageUri: string;
}

export function sagemakerProcessingJobAppSpecificationToTerraform(struct?: SagemakerProcessingJobAppSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_arguments: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.containerArguments),
    container_entrypoint: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.containerEntrypoint),
    image_uri: cdktn.stringToTerraform(struct!.imageUri),
  }
}


export function sagemakerProcessingJobAppSpecificationToHclTerraform(struct?: SagemakerProcessingJobAppSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_arguments: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.containerArguments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container_entrypoint: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.containerEntrypoint),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image_uri: {
      value: cdktn.stringToHclTerraform(struct!.imageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerProcessingJobAppSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerProcessingJobAppSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerArguments = this._containerArguments;
    }
    if (this._containerEntrypoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerEntrypoint = this._containerEntrypoint;
    }
    if (this._imageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerProcessingJobAppSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerArguments = undefined;
      this._containerEntrypoint = undefined;
      this._imageUri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerArguments = value.containerArguments;
      this._containerEntrypoint = value.containerEntrypoint;
      this._imageUri = value.imageUri;
    }
  }

  // container_arguments - computed: true, optional: true, required: false
  private _containerArguments?: string[]; 
  public get containerArguments() {
    return this.getListAttribute('container_arguments');
  }
  public set containerArguments(value: string[]) {
    this._containerArguments = value;
  }
  public resetContainerArguments() {
    this._containerArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerArgumentsInput() {
    return this._containerArguments;
  }

  // container_entrypoint - computed: true, optional: true, required: false
  private _containerEntrypoint?: string[]; 
  public get containerEntrypoint() {
    return this.getListAttribute('container_entrypoint');
  }
  public set containerEntrypoint(value: string[]) {
    this._containerEntrypoint = value;
  }
  public resetContainerEntrypoint() {
    this._containerEntrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerEntrypointInput() {
    return this._containerEntrypoint;
  }

  // image_uri - computed: false, optional: false, required: true
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
  }
}
export interface SagemakerProcessingJobExperimentConfig {
  /**
  * The name of an existing experiment to associate with the trial component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#experiment_name SagemakerProcessingJob#experiment_name}
  */
  readonly experimentName?: string;
  /**
  * The name of the experiment run to associate with the trial component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#run_name SagemakerProcessingJob#run_name}
  */
  readonly runName?: string;
  /**
  * The display name for the trial component. If this key isn't specified, the display name is the trial component name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#trial_component_display_name SagemakerProcessingJob#trial_component_display_name}
  */
  readonly trialComponentDisplayName?: string;
  /**
  * The name of an existing trial to associate the trial component with. If not specified, a new trial is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#trial_name SagemakerProcessingJob#trial_name}
  */
  readonly trialName?: string;
}

export function sagemakerProcessingJobExperimentConfigToTerraform(struct?: SagemakerProcessingJobExperimentConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    experiment_name: cdktn.stringToTerraform(struct!.experimentName),
    run_name: cdktn.stringToTerraform(struct!.runName),
    trial_component_display_name: cdktn.stringToTerraform(struct!.trialComponentDisplayName),
    trial_name: cdktn.stringToTerraform(struct!.trialName),
  }
}


export function sagemakerProcessingJobExperimentConfigToHclTerraform(struct?: SagemakerProcessingJobExperimentConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    experiment_name: {
      value: cdktn.stringToHclTerraform(struct!.experimentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_name: {
      value: cdktn.stringToHclTerraform(struct!.runName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trial_component_display_name: {
      value: cdktn.stringToHclTerraform(struct!.trialComponentDisplayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trial_name: {
      value: cdktn.stringToHclTerraform(struct!.trialName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerProcessingJobExperimentConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerProcessingJobExperimentConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._experimentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.experimentName = this._experimentName;
    }
    if (this._runName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runName = this._runName;
    }
    if (this._trialComponentDisplayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.trialComponentDisplayName = this._trialComponentDisplayName;
    }
    if (this._trialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.trialName = this._trialName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerProcessingJobExperimentConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._experimentName = undefined;
      this._runName = undefined;
      this._trialComponentDisplayName = undefined;
      this._trialName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._experimentName = value.experimentName;
      this._runName = value.runName;
      this._trialComponentDisplayName = value.trialComponentDisplayName;
      this._trialName = value.trialName;
    }
  }

  // experiment_name - computed: true, optional: true, required: false
  private _experimentName?: string; 
  public get experimentName() {
    return this.getStringAttribute('experiment_name');
  }
  public set experimentName(value: string) {
    this._experimentName = value;
  }
  public resetExperimentName() {
    this._experimentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentNameInput() {
    return this._experimentName;
  }

  // run_name - computed: true, optional: true, required: false
  private _runName?: string; 
  public get runName() {
    return this.getStringAttribute('run_name');
  }
  public set runName(value: string) {
    this._runName = value;
  }
  public resetRunName() {
    this._runName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runNameInput() {
    return this._runName;
  }

  // trial_component_display_name - computed: true, optional: true, required: false
  private _trialComponentDisplayName?: string; 
  public get trialComponentDisplayName() {
    return this.getStringAttribute('trial_component_display_name');
  }
  public set trialComponentDisplayName(value: string) {
    this._trialComponentDisplayName = value;
  }
  public resetTrialComponentDisplayName() {
    this._trialComponentDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trialComponentDisplayNameInput() {
    return this._trialComponentDisplayName;
  }

  // trial_name - computed: true, optional: true, required: false
  private _trialName?: string; 
  public get trialName() {
    return this.getStringAttribute('trial_name');
  }
  public set trialName(value: string) {
    this._trialName = value;
  }
  public resetTrialName() {
    this._trialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trialNameInput() {
    return this._trialName;
  }
}
export interface SagemakerProcessingJobNetworkConfigVpcConfig {
  /**
  * The VPC security group IDs, in the form 'sg-xxxxxxxx'. Specify the security groups for the VPC that is specified in the 'Subnets' field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#security_group_ids SagemakerProcessingJob#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * The ID of the subnets in the VPC to which you want to connect your training job or model. For information about the availability of specific instance types, see https://docs.aws.amazon.com/sagemaker/latest/dg/regions-quotas.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#subnets SagemakerProcessingJob#subnets}
  */
  readonly subnets?: string[];
}

export function sagemakerProcessingJobNetworkConfigVpcConfigToTerraform(struct?: SagemakerProcessingJobNetworkConfigVpcConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
  }
}


export function sagemakerProcessingJobNetworkConfigVpcConfigToHclTerraform(struct?: SagemakerProcessingJobNetworkConfigVpcConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerProcessingJobNetworkConfigVpcConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerProcessingJobNetworkConfigVpcConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerProcessingJobNetworkConfigVpcConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIds = undefined;
      this._subnets = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIds = value.securityGroupIds;
      this._subnets = value.subnets;
    }
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnets - computed: true, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}
export interface SagemakerProcessingJobNetworkConfig {
  /**
  * Whether to encrypt all communications between distributed processing jobs. Choose True to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#enable_inter_container_traffic_encryption SagemakerProcessingJob#enable_inter_container_traffic_encryption}
  */
  readonly enableInterContainerTrafficEncryption?: boolean | cdktn.IResolvable;
  /**
  * Whether to allow inbound and outbound network calls to and from the containers used for the processing job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#enable_network_isolation SagemakerProcessingJob#enable_network_isolation}
  */
  readonly enableNetworkIsolation?: boolean | cdktn.IResolvable;
  /**
  * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#vpc_config SagemakerProcessingJob#vpc_config}
  */
  readonly vpcConfig?: SagemakerProcessingJobNetworkConfigVpcConfig;
}

export function sagemakerProcessingJobNetworkConfigToTerraform(struct?: SagemakerProcessingJobNetworkConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_inter_container_traffic_encryption: cdktn.booleanToTerraform(struct!.enableInterContainerTrafficEncryption),
    enable_network_isolation: cdktn.booleanToTerraform(struct!.enableNetworkIsolation),
    vpc_config: sagemakerProcessingJobNetworkConfigVpcConfigToTerraform(struct!.vpcConfig),
  }
}


export function sagemakerProcessingJobNetworkConfigToHclTerraform(struct?: SagemakerProcessingJobNetworkConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_inter_container_traffic_encryption: {
      value: cdktn.booleanToHclTerraform(struct!.enableInterContainerTrafficEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_network_isolation: {
      value: cdktn.booleanToHclTerraform(struct!.enableNetworkIsolation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vpc_config: {
      value: sagemakerProcessingJobNetworkConfigVpcConfigToHclTerraform(struct!.vpcConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerProcessingJobNetworkConfigVpcConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerProcessingJobNetworkConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerProcessingJobNetworkConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableInterContainerTrafficEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInterContainerTrafficEncryption = this._enableInterContainerTrafficEncryption;
    }
    if (this._enableNetworkIsolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNetworkIsolation = this._enableNetworkIsolation;
    }
    if (this._vpcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfig = this._vpcConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerProcessingJobNetworkConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableInterContainerTrafficEncryption = undefined;
      this._enableNetworkIsolation = undefined;
      this._vpcConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableInterContainerTrafficEncryption = value.enableInterContainerTrafficEncryption;
      this._enableNetworkIsolation = value.enableNetworkIsolation;
      this._vpcConfig.internalValue = value.vpcConfig;
    }
  }

  // enable_inter_container_traffic_encryption - computed: true, optional: true, required: false
  private _enableInterContainerTrafficEncryption?: boolean | cdktn.IResolvable; 
  public get enableInterContainerTrafficEncryption() {
    return this.getBooleanAttribute('enable_inter_container_traffic_encryption');
  }
  public set enableInterContainerTrafficEncryption(value: boolean | cdktn.IResolvable) {
    this._enableInterContainerTrafficEncryption = value;
  }
  public resetEnableInterContainerTrafficEncryption() {
    this._enableInterContainerTrafficEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInterContainerTrafficEncryptionInput() {
    return this._enableInterContainerTrafficEncryption;
  }

  // enable_network_isolation - computed: true, optional: true, required: false
  private _enableNetworkIsolation?: boolean | cdktn.IResolvable; 
  public get enableNetworkIsolation() {
    return this.getBooleanAttribute('enable_network_isolation');
  }
  public set enableNetworkIsolation(value: boolean | cdktn.IResolvable) {
    this._enableNetworkIsolation = value;
  }
  public resetEnableNetworkIsolation() {
    this._enableNetworkIsolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNetworkIsolationInput() {
    return this._enableNetworkIsolation;
  }

  // vpc_config - computed: true, optional: true, required: false
  private _vpcConfig = new SagemakerProcessingJobNetworkConfigVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: SagemakerProcessingJobNetworkConfigVpcConfig) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }
}
export interface SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition {
  /**
  * The name of the data catalog used in Athena query execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#catalog SagemakerProcessingJob#catalog}
  */
  readonly catalog?: string;
  /**
  * The name of the database used in the Athena query execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#database SagemakerProcessingJob#database}
  */
  readonly database?: string;
  /**
  * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data generated from an Athena query execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#kms_key_id SagemakerProcessingJob#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * The compression used for Athena query results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#output_compression SagemakerProcessingJob#output_compression}
  */
  readonly outputCompression?: string;
  /**
  * The data storage format for Athena query results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#output_format SagemakerProcessingJob#output_format}
  */
  readonly outputFormat?: string;
  /**
  * The location in Amazon S3 where Athena query results are stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#output_s3_uri SagemakerProcessingJob#output_s3_uri}
  */
  readonly outputS3Uri?: string;
  /**
  * The SQL query statements, to be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#query_string SagemakerProcessingJob#query_string}
  */
  readonly queryString?: string;
  /**
  * The name of the workgroup in which the Athena query is being started.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#work_group SagemakerProcessingJob#work_group}
  */
  readonly workGroup?: string;
}

export function sagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionToTerraform(struct?: SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog: cdktn.stringToTerraform(struct!.catalog),
    database: cdktn.stringToTerraform(struct!.database),
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    output_compression: cdktn.stringToTerraform(struct!.outputCompression),
    output_format: cdktn.stringToTerraform(struct!.outputFormat),
    output_s3_uri: cdktn.stringToTerraform(struct!.outputS3Uri),
    query_string: cdktn.stringToTerraform(struct!.queryString),
    work_group: cdktn.stringToTerraform(struct!.workGroup),
  }
}


export function sagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionToHclTerraform(struct?: SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog: {
      value: cdktn.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_compression: {
      value: cdktn.stringToHclTerraform(struct!.outputCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_format: {
      value: cdktn.stringToHclTerraform(struct!.outputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.outputS3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_string: {
      value: cdktn.stringToHclTerraform(struct!.queryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    work_group: {
      value: cdktn.stringToHclTerraform(struct!.workGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._outputCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputCompression = this._outputCompression;
    }
    if (this._outputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFormat = this._outputFormat;
    }
    if (this._outputS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputS3Uri = this._outputS3Uri;
    }
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    if (this._workGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.workGroup = this._workGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalog = undefined;
      this._database = undefined;
      this._kmsKeyId = undefined;
      this._outputCompression = undefined;
      this._outputFormat = undefined;
      this._outputS3Uri = undefined;
      this._queryString = undefined;
      this._workGroup = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalog = value.catalog;
      this._database = value.database;
      this._kmsKeyId = value.kmsKeyId;
      this._outputCompression = value.outputCompression;
      this._outputFormat = value.outputFormat;
      this._outputS3Uri = value.outputS3Uri;
      this._queryString = value.queryString;
      this._workGroup = value.workGroup;
    }
  }

  // catalog - computed: true, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // output_compression - computed: true, optional: true, required: false
  private _outputCompression?: string; 
  public get outputCompression() {
    return this.getStringAttribute('output_compression');
  }
  public set outputCompression(value: string) {
    this._outputCompression = value;
  }
  public resetOutputCompression() {
    this._outputCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputCompressionInput() {
    return this._outputCompression;
  }

  // output_format - computed: true, optional: true, required: false
  private _outputFormat?: string; 
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  public resetOutputFormat() {
    this._outputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat;
  }

  // output_s3_uri - computed: true, optional: true, required: false
  private _outputS3Uri?: string; 
  public get outputS3Uri() {
    return this.getStringAttribute('output_s3_uri');
  }
  public set outputS3Uri(value: string) {
    this._outputS3Uri = value;
  }
  public resetOutputS3Uri() {
    this._outputS3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputS3UriInput() {
    return this._outputS3Uri;
  }

  // query_string - computed: true, optional: true, required: false
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // work_group - computed: true, optional: true, required: false
  private _workGroup?: string; 
  public get workGroup() {
    return this.getStringAttribute('work_group');
  }
  public set workGroup(value: string) {
    this._workGroup = value;
  }
  public resetWorkGroup() {
    this._workGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workGroupInput() {
    return this._workGroup;
  }
}
export interface SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition {
  /**
  * The Redshift cluster Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#cluster_id SagemakerProcessingJob#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * The IAM role attached to your Redshift cluster that Amazon SageMaker uses to generate datasets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#cluster_role_arn SagemakerProcessingJob#cluster_role_arn}
  */
  readonly clusterRoleArn?: string;
  /**
  * The name of the Redshift database used in Redshift query execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#database SagemakerProcessingJob#database}
  */
  readonly database?: string;
  /**
  * The database user name used in Redshift query execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#db_user SagemakerProcessingJob#db_user}
  */
  readonly dbUser?: string;
  /**
  * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data from a Redshift execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#kms_key_id SagemakerProcessingJob#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * The compression used for Redshift query results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#output_compression SagemakerProcessingJob#output_compression}
  */
  readonly outputCompression?: string;
  /**
  * The data storage format for Redshift query results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#output_format SagemakerProcessingJob#output_format}
  */
  readonly outputFormat?: string;
  /**
  * The location in Amazon S3 where the Redshift query results are stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#output_s3_uri SagemakerProcessingJob#output_s3_uri}
  */
  readonly outputS3Uri?: string;
  /**
  * The SQL query statements to be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#query_string SagemakerProcessingJob#query_string}
  */
  readonly queryString?: string;
}

export function sagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionToTerraform(struct?: SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster_id: cdktn.stringToTerraform(struct!.clusterId),
    cluster_role_arn: cdktn.stringToTerraform(struct!.clusterRoleArn),
    database: cdktn.stringToTerraform(struct!.database),
    db_user: cdktn.stringToTerraform(struct!.dbUser),
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    output_compression: cdktn.stringToTerraform(struct!.outputCompression),
    output_format: cdktn.stringToTerraform(struct!.outputFormat),
    output_s3_uri: cdktn.stringToTerraform(struct!.outputS3Uri),
    query_string: cdktn.stringToTerraform(struct!.queryString),
  }
}


export function sagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionToHclTerraform(struct?: SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster_id: {
      value: cdktn.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.clusterRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_user: {
      value: cdktn.stringToHclTerraform(struct!.dbUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_compression: {
      value: cdktn.stringToHclTerraform(struct!.outputCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_format: {
      value: cdktn.stringToHclTerraform(struct!.outputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.outputS3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_string: {
      value: cdktn.stringToHclTerraform(struct!.queryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._clusterRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRoleArn = this._clusterRoleArn;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._dbUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbUser = this._dbUser;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._outputCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputCompression = this._outputCompression;
    }
    if (this._outputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFormat = this._outputFormat;
    }
    if (this._outputS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputS3Uri = this._outputS3Uri;
    }
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._clusterRoleArn = undefined;
      this._database = undefined;
      this._dbUser = undefined;
      this._kmsKeyId = undefined;
      this._outputCompression = undefined;
      this._outputFormat = undefined;
      this._outputS3Uri = undefined;
      this._queryString = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._clusterRoleArn = value.clusterRoleArn;
      this._database = value.database;
      this._dbUser = value.dbUser;
      this._kmsKeyId = value.kmsKeyId;
      this._outputCompression = value.outputCompression;
      this._outputFormat = value.outputFormat;
      this._outputS3Uri = value.outputS3Uri;
      this._queryString = value.queryString;
    }
  }

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_role_arn - computed: true, optional: true, required: false
  private _clusterRoleArn?: string; 
  public get clusterRoleArn() {
    return this.getStringAttribute('cluster_role_arn');
  }
  public set clusterRoleArn(value: string) {
    this._clusterRoleArn = value;
  }
  public resetClusterRoleArn() {
    this._clusterRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoleArnInput() {
    return this._clusterRoleArn;
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // db_user - computed: true, optional: true, required: false
  private _dbUser?: string; 
  public get dbUser() {
    return this.getStringAttribute('db_user');
  }
  public set dbUser(value: string) {
    this._dbUser = value;
  }
  public resetDbUser() {
    this._dbUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbUserInput() {
    return this._dbUser;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // output_compression - computed: true, optional: true, required: false
  private _outputCompression?: string; 
  public get outputCompression() {
    return this.getStringAttribute('output_compression');
  }
  public set outputCompression(value: string) {
    this._outputCompression = value;
  }
  public resetOutputCompression() {
    this._outputCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputCompressionInput() {
    return this._outputCompression;
  }

  // output_format - computed: true, optional: true, required: false
  private _outputFormat?: string; 
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  public resetOutputFormat() {
    this._outputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat;
  }

  // output_s3_uri - computed: true, optional: true, required: false
  private _outputS3Uri?: string; 
  public get outputS3Uri() {
    return this.getStringAttribute('output_s3_uri');
  }
  public set outputS3Uri(value: string) {
    this._outputS3Uri = value;
  }
  public resetOutputS3Uri() {
    this._outputS3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputS3UriInput() {
    return this._outputS3Uri;
  }

  // query_string - computed: true, optional: true, required: false
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }
}
export interface SagemakerProcessingJobProcessingInputsDatasetDefinition {
  /**
  * Configuration for Athena Dataset Definition input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#athena_dataset_definition SagemakerProcessingJob#athena_dataset_definition}
  */
  readonly athenaDatasetDefinition?: SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition;
  /**
  * Whether the generated dataset is FullyReplicated or ShardedByS3Key (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#data_distribution_type SagemakerProcessingJob#data_distribution_type}
  */
  readonly dataDistributionType?: string;
  /**
  * Whether to use File or Pipe input mode. In File (default) mode, Amazon SageMaker copies the data from the input source onto the local Amazon Elastic Block Store (Amazon EBS) volumes before starting your training algorithm. This is the most commonly used input mode. In Pipe mode, Amazon SageMaker streams input data from the source directly to your algorithm without using the EBS volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#input_mode SagemakerProcessingJob#input_mode}
  */
  readonly inputMode?: string;
  /**
  * The local path where you want Amazon SageMaker to download the Dataset Definition inputs to run a processing job. LocalPath is an absolute path to the input data. This is a required parameter when AppManaged is False (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#local_path SagemakerProcessingJob#local_path}
  */
  readonly localPath?: string;
  /**
  * Configuration for Redshift Dataset Definition input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#redshift_dataset_definition SagemakerProcessingJob#redshift_dataset_definition}
  */
  readonly redshiftDatasetDefinition?: SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition;
}

export function sagemakerProcessingJobProcessingInputsDatasetDefinitionToTerraform(struct?: SagemakerProcessingJobProcessingInputsDatasetDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    athena_dataset_definition: sagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionToTerraform(struct!.athenaDatasetDefinition),
    data_distribution_type: cdktn.stringToTerraform(struct!.dataDistributionType),
    input_mode: cdktn.stringToTerraform(struct!.inputMode),
    local_path: cdktn.stringToTerraform(struct!.localPath),
    redshift_dataset_definition: sagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionToTerraform(struct!.redshiftDatasetDefinition),
  }
}


export function sagemakerProcessingJobProcessingInputsDatasetDefinitionToHclTerraform(struct?: SagemakerProcessingJobProcessingInputsDatasetDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    athena_dataset_definition: {
      value: sagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionToHclTerraform(struct!.athenaDatasetDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition",
    },
    data_distribution_type: {
      value: cdktn.stringToHclTerraform(struct!.dataDistributionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_mode: {
      value: cdktn.stringToHclTerraform(struct!.inputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_path: {
      value: cdktn.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redshift_dataset_definition: {
      value: sagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionToHclTerraform(struct!.redshiftDatasetDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerProcessingJobProcessingInputsDatasetDefinition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._athenaDatasetDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.athenaDatasetDefinition = this._athenaDatasetDefinition?.internalValue;
    }
    if (this._dataDistributionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDistributionType = this._dataDistributionType;
    }
    if (this._inputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputMode = this._inputMode;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._redshiftDatasetDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redshiftDatasetDefinition = this._redshiftDatasetDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerProcessingJobProcessingInputsDatasetDefinition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._athenaDatasetDefinition.internalValue = undefined;
      this._dataDistributionType = undefined;
      this._inputMode = undefined;
      this._localPath = undefined;
      this._redshiftDatasetDefinition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._athenaDatasetDefinition.internalValue = value.athenaDatasetDefinition;
      this._dataDistributionType = value.dataDistributionType;
      this._inputMode = value.inputMode;
      this._localPath = value.localPath;
      this._redshiftDatasetDefinition.internalValue = value.redshiftDatasetDefinition;
    }
  }

  // athena_dataset_definition - computed: true, optional: true, required: false
  private _athenaDatasetDefinition = new SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference(this, "athena_dataset_definition");
  public get athenaDatasetDefinition() {
    return this._athenaDatasetDefinition;
  }
  public putAthenaDatasetDefinition(value: SagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition) {
    this._athenaDatasetDefinition.internalValue = value;
  }
  public resetAthenaDatasetDefinition() {
    this._athenaDatasetDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get athenaDatasetDefinitionInput() {
    return this._athenaDatasetDefinition.internalValue;
  }

  // data_distribution_type - computed: true, optional: true, required: false
  private _dataDistributionType?: string; 
  public get dataDistributionType() {
    return this.getStringAttribute('data_distribution_type');
  }
  public set dataDistributionType(value: string) {
    this._dataDistributionType = value;
  }
  public resetDataDistributionType() {
    this._dataDistributionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDistributionTypeInput() {
    return this._dataDistributionType;
  }

  // input_mode - computed: true, optional: true, required: false
  private _inputMode?: string; 
  public get inputMode() {
    return this.getStringAttribute('input_mode');
  }
  public set inputMode(value: string) {
    this._inputMode = value;
  }
  public resetInputMode() {
    this._inputMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputModeInput() {
    return this._inputMode;
  }

  // local_path - computed: true, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // redshift_dataset_definition - computed: true, optional: true, required: false
  private _redshiftDatasetDefinition = new SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference(this, "redshift_dataset_definition");
  public get redshiftDatasetDefinition() {
    return this._redshiftDatasetDefinition;
  }
  public putRedshiftDatasetDefinition(value: SagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition) {
    this._redshiftDatasetDefinition.internalValue = value;
  }
  public resetRedshiftDatasetDefinition() {
    this._redshiftDatasetDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftDatasetDefinitionInput() {
    return this._redshiftDatasetDefinition.internalValue;
  }
}
export interface SagemakerProcessingJobProcessingInputsS3Input {
  /**
  * The local path in your container where you want Amazon SageMaker to write input data to. `LocalPath` is an absolute path to the input data and must begin with `/opt/ml/processing/`. LocalPath is a required parameter when `AppManaged` is `False` (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#local_path SagemakerProcessingJob#local_path}
  */
  readonly localPath?: string;
  /**
  * Whether to GZIP-decompress the data in Amazon S3 as it is streamed into the processing container. `Gzip` can only be used when `Pipe` mode is specified as the `S3InputMode`. In `Pipe` mode, Amazon SageMaker streams input data from the source directly to your container without using the EBS volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#s3_compression_type SagemakerProcessingJob#s3_compression_type}
  */
  readonly s3CompressionType?: string;
  /**
  * Whether to distribute the data from Amazon S3 to all processing instances with `FullyReplicated`, or whether the data from Amazon S3 is shared by Amazon S3 key, downloading one shard of data to each processing instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#s3_data_distribution_type SagemakerProcessingJob#s3_data_distribution_type}
  */
  readonly s3DataDistributionType?: string;
  /**
  * Whether you use an S3Prefix or a ManifestFile for the data type. If you choose S3Prefix, S3Uri identifies a key name prefix. Amazon SageMaker uses all objects with the specified key name prefix for the processing job. If you choose ManifestFile, S3Uri identifies an object that is a manifest file containing a list of object keys that you want Amazon SageMaker to use for the processing job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#s3_data_type SagemakerProcessingJob#s3_data_type}
  */
  readonly s3DataType?: string;
  /**
  * Whether to use File or Pipe input mode. In File mode, Amazon SageMaker copies the data from the input source onto the local ML storage volume before starting your processing container. This is the most commonly used input mode. In Pipe mode, Amazon SageMaker streams input data from the source directly to your processing container into named pipes without using the ML storage volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#s3_input_mode SagemakerProcessingJob#s3_input_mode}
  */
  readonly s3InputMode?: string;
  /**
  * The URI of the Amazon S3 prefix Amazon SageMaker downloads data required to run a processing job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#s3_uri SagemakerProcessingJob#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerProcessingJobProcessingInputsS3InputToTerraform(struct?: SagemakerProcessingJobProcessingInputsS3Input | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    local_path: cdktn.stringToTerraform(struct!.localPath),
    s3_compression_type: cdktn.stringToTerraform(struct!.s3CompressionType),
    s3_data_distribution_type: cdktn.stringToTerraform(struct!.s3DataDistributionType),
    s3_data_type: cdktn.stringToTerraform(struct!.s3DataType),
    s3_input_mode: cdktn.stringToTerraform(struct!.s3InputMode),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerProcessingJobProcessingInputsS3InputToHclTerraform(struct?: SagemakerProcessingJobProcessingInputsS3Input | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    local_path: {
      value: cdktn.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_compression_type: {
      value: cdktn.stringToHclTerraform(struct!.s3CompressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_data_distribution_type: {
      value: cdktn.stringToHclTerraform(struct!.s3DataDistributionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_data_type: {
      value: cdktn.stringToHclTerraform(struct!.s3DataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_input_mode: {
      value: cdktn.stringToHclTerraform(struct!.s3InputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerProcessingJobProcessingInputsS3InputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerProcessingJobProcessingInputsS3Input | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._s3CompressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3CompressionType = this._s3CompressionType;
    }
    if (this._s3DataDistributionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataDistributionType = this._s3DataDistributionType;
    }
    if (this._s3DataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataType = this._s3DataType;
    }
    if (this._s3InputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3InputMode = this._s3InputMode;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerProcessingJobProcessingInputsS3Input | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localPath = undefined;
      this._s3CompressionType = undefined;
      this._s3DataDistributionType = undefined;
      this._s3DataType = undefined;
      this._s3InputMode = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localPath = value.localPath;
      this._s3CompressionType = value.s3CompressionType;
      this._s3DataDistributionType = value.s3DataDistributionType;
      this._s3DataType = value.s3DataType;
      this._s3InputMode = value.s3InputMode;
      this._s3Uri = value.s3Uri;
    }
  }

  // local_path - computed: true, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // s3_compression_type - computed: true, optional: true, required: false
  private _s3CompressionType?: string; 
  public get s3CompressionType() {
    return this.getStringAttribute('s3_compression_type');
  }
  public set s3CompressionType(value: string) {
    this._s3CompressionType = value;
  }
  public resetS3CompressionType() {
    this._s3CompressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3CompressionTypeInput() {
    return this._s3CompressionType;
  }

  // s3_data_distribution_type - computed: true, optional: true, required: false
  private _s3DataDistributionType?: string; 
  public get s3DataDistributionType() {
    return this.getStringAttribute('s3_data_distribution_type');
  }
  public set s3DataDistributionType(value: string) {
    this._s3DataDistributionType = value;
  }
  public resetS3DataDistributionType() {
    this._s3DataDistributionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataDistributionTypeInput() {
    return this._s3DataDistributionType;
  }

  // s3_data_type - computed: true, optional: true, required: false
  private _s3DataType?: string; 
  public get s3DataType() {
    return this.getStringAttribute('s3_data_type');
  }
  public set s3DataType(value: string) {
    this._s3DataType = value;
  }
  public resetS3DataType() {
    this._s3DataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataTypeInput() {
    return this._s3DataType;
  }

  // s3_input_mode - computed: true, optional: true, required: false
  private _s3InputMode?: string; 
  public get s3InputMode() {
    return this.getStringAttribute('s3_input_mode');
  }
  public set s3InputMode(value: string) {
    this._s3InputMode = value;
  }
  public resetS3InputMode() {
    this._s3InputMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3InputModeInput() {
    return this._s3InputMode;
  }

  // s3_uri - computed: true, optional: true, required: false
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface SagemakerProcessingJobProcessingInputs {
  /**
  * When True, input operations such as data download are managed natively by the processing job application. When False (default), input operations are managed by Amazon SageMaker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#app_managed SagemakerProcessingJob#app_managed}
  */
  readonly appManaged?: boolean | cdktn.IResolvable;
  /**
  * Configuration for Dataset Definition inputs. The Dataset Definition input must specify exactly one of either `AthenaDatasetDefinition` or `RedshiftDatasetDefinition` types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#dataset_definition SagemakerProcessingJob#dataset_definition}
  */
  readonly datasetDefinition?: SagemakerProcessingJobProcessingInputsDatasetDefinition;
  /**
  * The name for the processing job input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#input_name SagemakerProcessingJob#input_name}
  */
  readonly inputName?: string;
  /**
  * Configuration for downloading input data from Amazon S3 into the processing container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#s3_input SagemakerProcessingJob#s3_input}
  */
  readonly s3Input?: SagemakerProcessingJobProcessingInputsS3Input;
}

export function sagemakerProcessingJobProcessingInputsToTerraform(struct?: SagemakerProcessingJobProcessingInputs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    app_managed: cdktn.booleanToTerraform(struct!.appManaged),
    dataset_definition: sagemakerProcessingJobProcessingInputsDatasetDefinitionToTerraform(struct!.datasetDefinition),
    input_name: cdktn.stringToTerraform(struct!.inputName),
    s3_input: sagemakerProcessingJobProcessingInputsS3InputToTerraform(struct!.s3Input),
  }
}


export function sagemakerProcessingJobProcessingInputsToHclTerraform(struct?: SagemakerProcessingJobProcessingInputs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    app_managed: {
      value: cdktn.booleanToHclTerraform(struct!.appManaged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dataset_definition: {
      value: sagemakerProcessingJobProcessingInputsDatasetDefinitionToHclTerraform(struct!.datasetDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerProcessingJobProcessingInputsDatasetDefinition",
    },
    input_name: {
      value: cdktn.stringToHclTerraform(struct!.inputName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_input: {
      value: sagemakerProcessingJobProcessingInputsS3InputToHclTerraform(struct!.s3Input),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerProcessingJobProcessingInputsS3Input",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerProcessingJobProcessingInputsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerProcessingJobProcessingInputs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appManaged !== undefined) {
      hasAnyValues = true;
      internalValueResult.appManaged = this._appManaged;
    }
    if (this._datasetDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetDefinition = this._datasetDefinition?.internalValue;
    }
    if (this._inputName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputName = this._inputName;
    }
    if (this._s3Input?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Input = this._s3Input?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerProcessingJobProcessingInputs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appManaged = undefined;
      this._datasetDefinition.internalValue = undefined;
      this._inputName = undefined;
      this._s3Input.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appManaged = value.appManaged;
      this._datasetDefinition.internalValue = value.datasetDefinition;
      this._inputName = value.inputName;
      this._s3Input.internalValue = value.s3Input;
    }
  }

  // app_managed - computed: true, optional: true, required: false
  private _appManaged?: boolean | cdktn.IResolvable; 
  public get appManaged() {
    return this.getBooleanAttribute('app_managed');
  }
  public set appManaged(value: boolean | cdktn.IResolvable) {
    this._appManaged = value;
  }
  public resetAppManaged() {
    this._appManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appManagedInput() {
    return this._appManaged;
  }

  // dataset_definition - computed: true, optional: true, required: false
  private _datasetDefinition = new SagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference(this, "dataset_definition");
  public get datasetDefinition() {
    return this._datasetDefinition;
  }
  public putDatasetDefinition(value: SagemakerProcessingJobProcessingInputsDatasetDefinition) {
    this._datasetDefinition.internalValue = value;
  }
  public resetDatasetDefinition() {
    this._datasetDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetDefinitionInput() {
    return this._datasetDefinition.internalValue;
  }

  // input_name - computed: true, optional: true, required: false
  private _inputName?: string; 
  public get inputName() {
    return this.getStringAttribute('input_name');
  }
  public set inputName(value: string) {
    this._inputName = value;
  }
  public resetInputName() {
    this._inputName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputNameInput() {
    return this._inputName;
  }

  // s3_input - computed: true, optional: true, required: false
  private _s3Input = new SagemakerProcessingJobProcessingInputsS3InputOutputReference(this, "s3_input");
  public get s3Input() {
    return this._s3Input;
  }
  public putS3Input(value: SagemakerProcessingJobProcessingInputsS3Input) {
    this._s3Input.internalValue = value;
  }
  public resetS3Input() {
    this._s3Input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3InputInput() {
    return this._s3Input.internalValue;
  }
}

export class SagemakerProcessingJobProcessingInputsList extends cdktn.ComplexList {
  public internalValue? : SagemakerProcessingJobProcessingInputs[] | cdktn.IResolvable

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
  public get(index: number): SagemakerProcessingJobProcessingInputsOutputReference {
    return new SagemakerProcessingJobProcessingInputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput {
  /**
  * The name of the Amazon SageMaker FeatureGroup to use as the destination for processing job output. Note that your processing script is responsible for putting records into your Feature Store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#feature_group_name SagemakerProcessingJob#feature_group_name}
  */
  readonly featureGroupName?: string;
}

export function sagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputToTerraform(struct?: SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    feature_group_name: cdktn.stringToTerraform(struct!.featureGroupName),
  }
}


export function sagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputToHclTerraform(struct?: SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    feature_group_name: {
      value: cdktn.stringToHclTerraform(struct!.featureGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._featureGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureGroupName = this._featureGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._featureGroupName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._featureGroupName = value.featureGroupName;
    }
  }

  // feature_group_name - computed: true, optional: true, required: false
  private _featureGroupName?: string; 
  public get featureGroupName() {
    return this.getStringAttribute('feature_group_name');
  }
  public set featureGroupName(value: string) {
    this._featureGroupName = value;
  }
  public resetFeatureGroupName() {
    this._featureGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureGroupNameInput() {
    return this._featureGroupName;
  }
}
export interface SagemakerProcessingJobProcessingOutputConfigOutputsS3Output {
  /**
  * The local path of a directory where you want Amazon SageMaker to upload its contents to Amazon S3. LocalPath is an absolute path to a directory containing output files. This directory will be created by the platform and exist when your container's entrypoint is invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#local_path SagemakerProcessingJob#local_path}
  */
  readonly localPath?: string;
  /**
  * Whether to upload the results of the processing job continuously or after the job completes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#s3_upload_mode SagemakerProcessingJob#s3_upload_mode}
  */
  readonly s3UploadMode?: string;
  /**
  * A URI that identifies the Amazon S3 bucket where you want Amazon SageMaker to save the results of a processing job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#s3_uri SagemakerProcessingJob#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerProcessingJobProcessingOutputConfigOutputsS3OutputToTerraform(struct?: SagemakerProcessingJobProcessingOutputConfigOutputsS3Output | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    local_path: cdktn.stringToTerraform(struct!.localPath),
    s3_upload_mode: cdktn.stringToTerraform(struct!.s3UploadMode),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerProcessingJobProcessingOutputConfigOutputsS3OutputToHclTerraform(struct?: SagemakerProcessingJobProcessingOutputConfigOutputsS3Output | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    local_path: {
      value: cdktn.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_upload_mode: {
      value: cdktn.stringToHclTerraform(struct!.s3UploadMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerProcessingJobProcessingOutputConfigOutputsS3Output | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._s3UploadMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3UploadMode = this._s3UploadMode;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerProcessingJobProcessingOutputConfigOutputsS3Output | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localPath = undefined;
      this._s3UploadMode = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localPath = value.localPath;
      this._s3UploadMode = value.s3UploadMode;
      this._s3Uri = value.s3Uri;
    }
  }

  // local_path - computed: true, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // s3_upload_mode - computed: true, optional: true, required: false
  private _s3UploadMode?: string; 
  public get s3UploadMode() {
    return this.getStringAttribute('s3_upload_mode');
  }
  public set s3UploadMode(value: string) {
    this._s3UploadMode = value;
  }
  public resetS3UploadMode() {
    this._s3UploadMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UploadModeInput() {
    return this._s3UploadMode;
  }

  // s3_uri - computed: true, optional: true, required: false
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface SagemakerProcessingJobProcessingOutputConfigOutputs {
  /**
  * When True, output operations such as data upload are managed natively by the processing job application. When False (default), output operations are managed by Amazon SageMaker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#app_managed SagemakerProcessingJob#app_managed}
  */
  readonly appManaged?: boolean | cdktn.IResolvable;
  /**
  * Configuration for processing job outputs in Amazon SageMaker Feature Store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#feature_store_output SagemakerProcessingJob#feature_store_output}
  */
  readonly featureStoreOutput?: SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput;
  /**
  * The name for the processing job output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#output_name SagemakerProcessingJob#output_name}
  */
  readonly outputName?: string;
  /**
  * Configuration for uploading output data to Amazon S3 from the processing container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#s3_output SagemakerProcessingJob#s3_output}
  */
  readonly s3Output?: SagemakerProcessingJobProcessingOutputConfigOutputsS3Output;
}

export function sagemakerProcessingJobProcessingOutputConfigOutputsToTerraform(struct?: SagemakerProcessingJobProcessingOutputConfigOutputs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    app_managed: cdktn.booleanToTerraform(struct!.appManaged),
    feature_store_output: sagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputToTerraform(struct!.featureStoreOutput),
    output_name: cdktn.stringToTerraform(struct!.outputName),
    s3_output: sagemakerProcessingJobProcessingOutputConfigOutputsS3OutputToTerraform(struct!.s3Output),
  }
}


export function sagemakerProcessingJobProcessingOutputConfigOutputsToHclTerraform(struct?: SagemakerProcessingJobProcessingOutputConfigOutputs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    app_managed: {
      value: cdktn.booleanToHclTerraform(struct!.appManaged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    feature_store_output: {
      value: sagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputToHclTerraform(struct!.featureStoreOutput),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput",
    },
    output_name: {
      value: cdktn.stringToHclTerraform(struct!.outputName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output: {
      value: sagemakerProcessingJobProcessingOutputConfigOutputsS3OutputToHclTerraform(struct!.s3Output),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerProcessingJobProcessingOutputConfigOutputsS3Output",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerProcessingJobProcessingOutputConfigOutputs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appManaged !== undefined) {
      hasAnyValues = true;
      internalValueResult.appManaged = this._appManaged;
    }
    if (this._featureStoreOutput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureStoreOutput = this._featureStoreOutput?.internalValue;
    }
    if (this._outputName !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputName = this._outputName;
    }
    if (this._s3Output?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Output = this._s3Output?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerProcessingJobProcessingOutputConfigOutputs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appManaged = undefined;
      this._featureStoreOutput.internalValue = undefined;
      this._outputName = undefined;
      this._s3Output.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appManaged = value.appManaged;
      this._featureStoreOutput.internalValue = value.featureStoreOutput;
      this._outputName = value.outputName;
      this._s3Output.internalValue = value.s3Output;
    }
  }

  // app_managed - computed: true, optional: true, required: false
  private _appManaged?: boolean | cdktn.IResolvable; 
  public get appManaged() {
    return this.getBooleanAttribute('app_managed');
  }
  public set appManaged(value: boolean | cdktn.IResolvable) {
    this._appManaged = value;
  }
  public resetAppManaged() {
    this._appManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appManagedInput() {
    return this._appManaged;
  }

  // feature_store_output - computed: true, optional: true, required: false
  private _featureStoreOutput = new SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference(this, "feature_store_output");
  public get featureStoreOutput() {
    return this._featureStoreOutput;
  }
  public putFeatureStoreOutput(value: SagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput) {
    this._featureStoreOutput.internalValue = value;
  }
  public resetFeatureStoreOutput() {
    this._featureStoreOutput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureStoreOutputInput() {
    return this._featureStoreOutput.internalValue;
  }

  // output_name - computed: true, optional: true, required: false
  private _outputName?: string; 
  public get outputName() {
    return this.getStringAttribute('output_name');
  }
  public set outputName(value: string) {
    this._outputName = value;
  }
  public resetOutputName() {
    this._outputName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputNameInput() {
    return this._outputName;
  }

  // s3_output - computed: true, optional: true, required: false
  private _s3Output = new SagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference(this, "s3_output");
  public get s3Output() {
    return this._s3Output;
  }
  public putS3Output(value: SagemakerProcessingJobProcessingOutputConfigOutputsS3Output) {
    this._s3Output.internalValue = value;
  }
  public resetS3Output() {
    this._s3Output.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputInput() {
    return this._s3Output.internalValue;
  }
}

export class SagemakerProcessingJobProcessingOutputConfigOutputsList extends cdktn.ComplexList {
  public internalValue? : SagemakerProcessingJobProcessingOutputConfigOutputs[] | cdktn.IResolvable

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
  public get(index: number): SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference {
    return new SagemakerProcessingJobProcessingOutputConfigOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerProcessingJobProcessingOutputConfig {
  /**
  * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the processing job output. KmsKeyId can be an ID of a KMS key, ARN of a KMS key, or alias of a KMS key. The KmsKeyId is applied to all outputs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#kms_key_id SagemakerProcessingJob#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * An array of outputs configuring the data to upload from the processing container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#outputs SagemakerProcessingJob#outputs}
  */
  readonly outputs?: SagemakerProcessingJobProcessingOutputConfigOutputs[] | cdktn.IResolvable;
}

export function sagemakerProcessingJobProcessingOutputConfigToTerraform(struct?: SagemakerProcessingJobProcessingOutputConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    outputs: cdktn.listMapper(sagemakerProcessingJobProcessingOutputConfigOutputsToTerraform, false)(struct!.outputs),
  }
}


export function sagemakerProcessingJobProcessingOutputConfigToHclTerraform(struct?: SagemakerProcessingJobProcessingOutputConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outputs: {
      value: cdktn.listMapperHcl(sagemakerProcessingJobProcessingOutputConfigOutputsToHclTerraform, false)(struct!.outputs),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerProcessingJobProcessingOutputConfigOutputsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerProcessingJobProcessingOutputConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerProcessingJobProcessingOutputConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._outputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputs = this._outputs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerProcessingJobProcessingOutputConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyId = undefined;
      this._outputs.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyId = value.kmsKeyId;
      this._outputs.internalValue = value.outputs;
    }
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // outputs - computed: true, optional: true, required: false
  private _outputs = new SagemakerProcessingJobProcessingOutputConfigOutputsList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }
  public putOutputs(value: SagemakerProcessingJobProcessingOutputConfigOutputs[] | cdktn.IResolvable) {
    this._outputs.internalValue = value;
  }
  public resetOutputs() {
    this._outputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs.internalValue;
  }
}
export interface SagemakerProcessingJobProcessingResourcesClusterConfig {
  /**
  * The number of ML compute instances to use in the processing job. For distributed processing jobs, specify a value greater than 1. The default value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#instance_count SagemakerProcessingJob#instance_count}
  */
  readonly instanceCount: number;
  /**
  * The ML compute instance type for the processing job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#instance_type SagemakerProcessingJob#instance_type}
  */
  readonly instanceType: string;
  /**
  * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the processing job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#volume_kms_key_id SagemakerProcessingJob#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
  /**
  * The size of the ML storage volume in gigabytes that you want to provision. You must specify sufficient ML storage for your scenario.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#volume_size_in_gb SagemakerProcessingJob#volume_size_in_gb}
  */
  readonly volumeSizeInGb: number;
}

export function sagemakerProcessingJobProcessingResourcesClusterConfigToTerraform(struct?: SagemakerProcessingJobProcessingResourcesClusterConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    volume_kms_key_id: cdktn.stringToTerraform(struct!.volumeKmsKeyId),
    volume_size_in_gb: cdktn.numberToTerraform(struct!.volumeSizeInGb),
  }
}


export function sagemakerProcessingJobProcessingResourcesClusterConfigToHclTerraform(struct?: SagemakerProcessingJobProcessingResourcesClusterConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.volumeKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_size_in_gb: {
      value: cdktn.numberToHclTerraform(struct!.volumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerProcessingJobProcessingResourcesClusterConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._volumeKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeKmsKeyId = this._volumeKmsKeyId;
    }
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerProcessingJobProcessingResourcesClusterConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._instanceType = undefined;
      this._volumeKmsKeyId = undefined;
      this._volumeSizeInGb = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceCount = value.instanceCount;
      this._instanceType = value.instanceType;
      this._volumeKmsKeyId = value.volumeKmsKeyId;
      this._volumeSizeInGb = value.volumeSizeInGb;
    }
  }

  // instance_count - computed: false, optional: false, required: true
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // volume_kms_key_id - computed: true, optional: true, required: false
  private _volumeKmsKeyId?: string; 
  public get volumeKmsKeyId() {
    return this.getStringAttribute('volume_kms_key_id');
  }
  public set volumeKmsKeyId(value: string) {
    this._volumeKmsKeyId = value;
  }
  public resetVolumeKmsKeyId() {
    this._volumeKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeKmsKeyIdInput() {
    return this._volumeKmsKeyId;
  }

  // volume_size_in_gb - computed: false, optional: false, required: true
  private _volumeSizeInGb?: number; 
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
  public set volumeSizeInGb(value: number) {
    this._volumeSizeInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInGbInput() {
    return this._volumeSizeInGb;
  }
}
export interface SagemakerProcessingJobProcessingResources {
  /**
  * Configuration for the cluster used to run a processing job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#cluster_config SagemakerProcessingJob#cluster_config}
  */
  readonly clusterConfig: SagemakerProcessingJobProcessingResourcesClusterConfig;
}

export function sagemakerProcessingJobProcessingResourcesToTerraform(struct?: SagemakerProcessingJobProcessingResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster_config: sagemakerProcessingJobProcessingResourcesClusterConfigToTerraform(struct!.clusterConfig),
  }
}


export function sagemakerProcessingJobProcessingResourcesToHclTerraform(struct?: SagemakerProcessingJobProcessingResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster_config: {
      value: sagemakerProcessingJobProcessingResourcesClusterConfigToHclTerraform(struct!.clusterConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerProcessingJobProcessingResourcesClusterConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerProcessingJobProcessingResourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerProcessingJobProcessingResources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterConfig = this._clusterConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerProcessingJobProcessingResources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterConfig.internalValue = value.clusterConfig;
    }
  }

  // cluster_config - computed: false, optional: false, required: true
  private _clusterConfig = new SagemakerProcessingJobProcessingResourcesClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: SagemakerProcessingJobProcessingResourcesClusterConfig) {
    this._clusterConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig.internalValue;
  }
}
export interface SagemakerProcessingJobStoppingCondition {
  /**
  * Specifies the maximum runtime in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#max_runtime_in_seconds SagemakerProcessingJob#max_runtime_in_seconds}
  */
  readonly maxRuntimeInSeconds?: number;
}

export function sagemakerProcessingJobStoppingConditionToTerraform(struct?: SagemakerProcessingJobStoppingCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_runtime_in_seconds: cdktn.numberToTerraform(struct!.maxRuntimeInSeconds),
  }
}


export function sagemakerProcessingJobStoppingConditionToHclTerraform(struct?: SagemakerProcessingJobStoppingCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_runtime_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maxRuntimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerProcessingJobStoppingConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerProcessingJobStoppingCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRuntimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRuntimeInSeconds = this._maxRuntimeInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerProcessingJobStoppingCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxRuntimeInSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxRuntimeInSeconds = value.maxRuntimeInSeconds;
    }
  }

  // max_runtime_in_seconds - computed: true, optional: true, required: false
  private _maxRuntimeInSeconds?: number; 
  public get maxRuntimeInSeconds() {
    return this.getNumberAttribute('max_runtime_in_seconds');
  }
  public set maxRuntimeInSeconds(value: number) {
    this._maxRuntimeInSeconds = value;
  }
  public resetMaxRuntimeInSeconds() {
    this._maxRuntimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRuntimeInSecondsInput() {
    return this._maxRuntimeInSeconds;
  }
}
export interface SagemakerProcessingJobTags {
  /**
  * The tag key. Tag keys must be unique per resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#key SagemakerProcessingJob#key}
  */
  readonly key?: string;
  /**
  * The tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#value SagemakerProcessingJob#value}
  */
  readonly value?: string;
}

export function sagemakerProcessingJobTagsToTerraform(struct?: SagemakerProcessingJobTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function sagemakerProcessingJobTagsToHclTerraform(struct?: SagemakerProcessingJobTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerProcessingJobTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SagemakerProcessingJobTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerProcessingJobTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SagemakerProcessingJobTagsList extends cdktn.ComplexList {
  public internalValue? : SagemakerProcessingJobTags[] | cdktn.IResolvable

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
  public get(index: number): SagemakerProcessingJobTagsOutputReference {
    return new SagemakerProcessingJobTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job awscc_sagemaker_processing_job}
*/
export class SagemakerProcessingJob extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_processing_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SagemakerProcessingJob resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerProcessingJob to import
  * @param importFromId The id of the existing SagemakerProcessingJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerProcessingJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_processing_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/sagemaker_processing_job awscc_sagemaker_processing_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerProcessingJobConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerProcessingJobConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_processing_job',
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
    this._appSpecification.internalValue = config.appSpecification;
    this._environment = config.environment;
    this._experimentConfig.internalValue = config.experimentConfig;
    this._networkConfig.internalValue = config.networkConfig;
    this._processingInputs.internalValue = config.processingInputs;
    this._processingJobName = config.processingJobName;
    this._processingOutputConfig.internalValue = config.processingOutputConfig;
    this._processingResources.internalValue = config.processingResources;
    this._roleArn = config.roleArn;
    this._stoppingCondition.internalValue = config.stoppingCondition;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_specification - computed: false, optional: false, required: true
  private _appSpecification = new SagemakerProcessingJobAppSpecificationOutputReference(this, "app_specification");
  public get appSpecification() {
    return this._appSpecification;
  }
  public putAppSpecification(value: SagemakerProcessingJobAppSpecification) {
    this._appSpecification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appSpecificationInput() {
    return this._appSpecification.internalValue;
  }

  // auto_ml_job_arn - computed: true, optional: false, required: false
  public get autoMlJobArn() {
    return this.getStringAttribute('auto_ml_job_arn');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // environment - computed: true, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // exit_message - computed: true, optional: false, required: false
  public get exitMessage() {
    return this.getStringAttribute('exit_message');
  }

  // experiment_config - computed: true, optional: true, required: false
  private _experimentConfig = new SagemakerProcessingJobExperimentConfigOutputReference(this, "experiment_config");
  public get experimentConfig() {
    return this._experimentConfig;
  }
  public putExperimentConfig(value: SagemakerProcessingJobExperimentConfig) {
    this._experimentConfig.internalValue = value;
  }
  public resetExperimentConfig() {
    this._experimentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentConfigInput() {
    return this._experimentConfig.internalValue;
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // monitoring_schedule_arn - computed: true, optional: false, required: false
  public get monitoringScheduleArn() {
    return this.getStringAttribute('monitoring_schedule_arn');
  }

  // network_config - computed: true, optional: true, required: false
  private _networkConfig = new SagemakerProcessingJobNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: SagemakerProcessingJobNetworkConfig) {
    this._networkConfig.internalValue = value;
  }
  public resetNetworkConfig() {
    this._networkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }

  // processing_end_time - computed: true, optional: false, required: false
  public get processingEndTime() {
    return this.getStringAttribute('processing_end_time');
  }

  // processing_inputs - computed: true, optional: true, required: false
  private _processingInputs = new SagemakerProcessingJobProcessingInputsList(this, "processing_inputs", false);
  public get processingInputs() {
    return this._processingInputs;
  }
  public putProcessingInputs(value: SagemakerProcessingJobProcessingInputs[] | cdktn.IResolvable) {
    this._processingInputs.internalValue = value;
  }
  public resetProcessingInputs() {
    this._processingInputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingInputsInput() {
    return this._processingInputs.internalValue;
  }

  // processing_job_arn - computed: true, optional: false, required: false
  public get processingJobArn() {
    return this.getStringAttribute('processing_job_arn');
  }

  // processing_job_name - computed: true, optional: true, required: false
  private _processingJobName?: string; 
  public get processingJobName() {
    return this.getStringAttribute('processing_job_name');
  }
  public set processingJobName(value: string) {
    this._processingJobName = value;
  }
  public resetProcessingJobName() {
    this._processingJobName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingJobNameInput() {
    return this._processingJobName;
  }

  // processing_job_status - computed: true, optional: false, required: false
  public get processingJobStatus() {
    return this.getStringAttribute('processing_job_status');
  }

  // processing_output_config - computed: true, optional: true, required: false
  private _processingOutputConfig = new SagemakerProcessingJobProcessingOutputConfigOutputReference(this, "processing_output_config");
  public get processingOutputConfig() {
    return this._processingOutputConfig;
  }
  public putProcessingOutputConfig(value: SagemakerProcessingJobProcessingOutputConfig) {
    this._processingOutputConfig.internalValue = value;
  }
  public resetProcessingOutputConfig() {
    this._processingOutputConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingOutputConfigInput() {
    return this._processingOutputConfig.internalValue;
  }

  // processing_resources - computed: false, optional: false, required: true
  private _processingResources = new SagemakerProcessingJobProcessingResourcesOutputReference(this, "processing_resources");
  public get processingResources() {
    return this._processingResources;
  }
  public putProcessingResources(value: SagemakerProcessingJobProcessingResources) {
    this._processingResources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processingResourcesInput() {
    return this._processingResources.internalValue;
  }

  // processing_start_time - computed: true, optional: false, required: false
  public get processingStartTime() {
    return this.getStringAttribute('processing_start_time');
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // stopping_condition - computed: true, optional: true, required: false
  private _stoppingCondition = new SagemakerProcessingJobStoppingConditionOutputReference(this, "stopping_condition");
  public get stoppingCondition() {
    return this._stoppingCondition;
  }
  public putStoppingCondition(value: SagemakerProcessingJobStoppingCondition) {
    this._stoppingCondition.internalValue = value;
  }
  public resetStoppingCondition() {
    this._stoppingCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stoppingConditionInput() {
    return this._stoppingCondition.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SagemakerProcessingJobTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SagemakerProcessingJobTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // training_job_arn - computed: true, optional: false, required: false
  public get trainingJobArn() {
    return this.getStringAttribute('training_job_arn');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_specification: sagemakerProcessingJobAppSpecificationToTerraform(this._appSpecification.internalValue),
      environment: cdktn.hashMapper(cdktn.stringToTerraform)(this._environment),
      experiment_config: sagemakerProcessingJobExperimentConfigToTerraform(this._experimentConfig.internalValue),
      network_config: sagemakerProcessingJobNetworkConfigToTerraform(this._networkConfig.internalValue),
      processing_inputs: cdktn.listMapper(sagemakerProcessingJobProcessingInputsToTerraform, false)(this._processingInputs.internalValue),
      processing_job_name: cdktn.stringToTerraform(this._processingJobName),
      processing_output_config: sagemakerProcessingJobProcessingOutputConfigToTerraform(this._processingOutputConfig.internalValue),
      processing_resources: sagemakerProcessingJobProcessingResourcesToTerraform(this._processingResources.internalValue),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      stopping_condition: sagemakerProcessingJobStoppingConditionToTerraform(this._stoppingCondition.internalValue),
      tags: cdktn.listMapper(sagemakerProcessingJobTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_specification: {
        value: sagemakerProcessingJobAppSpecificationToHclTerraform(this._appSpecification.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerProcessingJobAppSpecification",
      },
      environment: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._environment),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      experiment_config: {
        value: sagemakerProcessingJobExperimentConfigToHclTerraform(this._experimentConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerProcessingJobExperimentConfig",
      },
      network_config: {
        value: sagemakerProcessingJobNetworkConfigToHclTerraform(this._networkConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerProcessingJobNetworkConfig",
      },
      processing_inputs: {
        value: cdktn.listMapperHcl(sagemakerProcessingJobProcessingInputsToHclTerraform, false)(this._processingInputs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerProcessingJobProcessingInputsList",
      },
      processing_job_name: {
        value: cdktn.stringToHclTerraform(this._processingJobName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      processing_output_config: {
        value: sagemakerProcessingJobProcessingOutputConfigToHclTerraform(this._processingOutputConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerProcessingJobProcessingOutputConfig",
      },
      processing_resources: {
        value: sagemakerProcessingJobProcessingResourcesToHclTerraform(this._processingResources.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerProcessingJobProcessingResources",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stopping_condition: {
        value: sagemakerProcessingJobStoppingConditionToHclTerraform(this._stoppingCondition.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerProcessingJobStoppingCondition",
      },
      tags: {
        value: cdktn.listMapperHcl(sagemakerProcessingJobTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerProcessingJobTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
