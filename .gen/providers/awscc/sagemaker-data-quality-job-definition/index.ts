// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SagemakerDataQualityJobDefinitionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Container image configuration object for the monitoring job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_app_specification SagemakerDataQualityJobDefinition#data_quality_app_specification}
  */
  readonly dataQualityAppSpecification: SagemakerDataQualityJobDefinitionDataQualityAppSpecification;
  /**
  * Baseline configuration used to validate that the data conforms to the specified constraints and statistics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_baseline_config SagemakerDataQualityJobDefinition#data_quality_baseline_config}
  */
  readonly dataQualityBaselineConfig?: SagemakerDataQualityJobDefinitionDataQualityBaselineConfig;
  /**
  * The inputs for a monitoring job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_job_input SagemakerDataQualityJobDefinition#data_quality_job_input}
  */
  readonly dataQualityJobInput: SagemakerDataQualityJobDefinitionDataQualityJobInput;
  /**
  * The output configuration for monitoring jobs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_job_output_config SagemakerDataQualityJobDefinition#data_quality_job_output_config}
  */
  readonly dataQualityJobOutputConfig: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig;
  /**
  * The name of the endpoint used to run the monitoring job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#endpoint_name SagemakerDataQualityJobDefinition#endpoint_name}
  */
  readonly endpointName?: string;
  /**
  * The name of the job definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#job_definition_name SagemakerDataQualityJobDefinition#job_definition_name}
  */
  readonly jobDefinitionName?: string;
  /**
  * Identifies the resources to deploy for a monitoring job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#job_resources SagemakerDataQualityJobDefinition#job_resources}
  */
  readonly jobResources: SagemakerDataQualityJobDefinitionJobResources;
  /**
  * Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#network_config SagemakerDataQualityJobDefinition#network_config}
  */
  readonly networkConfig?: SagemakerDataQualityJobDefinitionNetworkConfig;
  /**
  * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#role_arn SagemakerDataQualityJobDefinition#role_arn}
  */
  readonly roleArn: string;
  /**
  * Specifies a time limit for how long the monitoring job is allowed to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#stopping_condition SagemakerDataQualityJobDefinition#stopping_condition}
  */
  readonly stoppingCondition?: SagemakerDataQualityJobDefinitionStoppingCondition;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#tags SagemakerDataQualityJobDefinition#tags}
  */
  readonly tags?: SagemakerDataQualityJobDefinitionTags[] | cdktn.IResolvable;
}
export interface SagemakerDataQualityJobDefinitionDataQualityAppSpecification {
  /**
  * An array of arguments for the container used to run the monitoring job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#container_arguments SagemakerDataQualityJobDefinition#container_arguments}
  */
  readonly containerArguments?: string[];
  /**
  * Specifies the entrypoint for a container used to run the monitoring job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#container_entrypoint SagemakerDataQualityJobDefinition#container_entrypoint}
  */
  readonly containerEntrypoint?: string[];
  /**
  * Sets the environment variables in the Docker container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#environment SagemakerDataQualityJobDefinition#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * The container image to be run by the monitoring job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#image_uri SagemakerDataQualityJobDefinition#image_uri}
  */
  readonly imageUri: string;
  /**
  * An Amazon S3 URI to a script that is called after analysis has been performed. Applicable only for the built-in (first party) containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#post_analytics_processor_source_uri SagemakerDataQualityJobDefinition#post_analytics_processor_source_uri}
  */
  readonly postAnalyticsProcessorSourceUri?: string;
  /**
  * An Amazon S3 URI to a script that is called per row prior to running analysis. It can base64 decode the payload and convert it into a flatted json so that the built-in container can use the converted data. Applicable only for the built-in (first party) containers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#record_preprocessor_source_uri SagemakerDataQualityJobDefinition#record_preprocessor_source_uri}
  */
  readonly recordPreprocessorSourceUri?: string;
}

export function sagemakerDataQualityJobDefinitionDataQualityAppSpecificationToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityAppSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_arguments: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.containerArguments),
    container_entrypoint: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.containerEntrypoint),
    environment: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environment),
    image_uri: cdktn.stringToTerraform(struct!.imageUri),
    post_analytics_processor_source_uri: cdktn.stringToTerraform(struct!.postAnalyticsProcessorSourceUri),
    record_preprocessor_source_uri: cdktn.stringToTerraform(struct!.recordPreprocessorSourceUri),
  }
}


export function sagemakerDataQualityJobDefinitionDataQualityAppSpecificationToHclTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityAppSpecification | cdktn.IResolvable): any {
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
    environment: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image_uri: {
      value: cdktn.stringToHclTerraform(struct!.imageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_analytics_processor_source_uri: {
      value: cdktn.stringToHclTerraform(struct!.postAnalyticsProcessorSourceUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_preprocessor_source_uri: {
      value: cdktn.stringToHclTerraform(struct!.recordPreprocessorSourceUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDataQualityJobDefinitionDataQualityAppSpecification | cdktn.IResolvable | undefined {
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
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._imageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    if (this._postAnalyticsProcessorSourceUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.postAnalyticsProcessorSourceUri = this._postAnalyticsProcessorSourceUri;
    }
    if (this._recordPreprocessorSourceUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordPreprocessorSourceUri = this._recordPreprocessorSourceUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDataQualityJobDefinitionDataQualityAppSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerArguments = undefined;
      this._containerEntrypoint = undefined;
      this._environment = undefined;
      this._imageUri = undefined;
      this._postAnalyticsProcessorSourceUri = undefined;
      this._recordPreprocessorSourceUri = undefined;
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
      this._environment = value.environment;
      this._imageUri = value.imageUri;
      this._postAnalyticsProcessorSourceUri = value.postAnalyticsProcessorSourceUri;
      this._recordPreprocessorSourceUri = value.recordPreprocessorSourceUri;
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

  // post_analytics_processor_source_uri - computed: true, optional: true, required: false
  private _postAnalyticsProcessorSourceUri?: string;
  public get postAnalyticsProcessorSourceUri() {
    return this.getStringAttribute('post_analytics_processor_source_uri');
  }
  public set postAnalyticsProcessorSourceUri(value: string) {
    this._postAnalyticsProcessorSourceUri = value;
  }
  public resetPostAnalyticsProcessorSourceUri() {
    this._postAnalyticsProcessorSourceUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postAnalyticsProcessorSourceUriInput() {
    return this._postAnalyticsProcessorSourceUri;
  }

  // record_preprocessor_source_uri - computed: true, optional: true, required: false
  private _recordPreprocessorSourceUri?: string;
  public get recordPreprocessorSourceUri() {
    return this.getStringAttribute('record_preprocessor_source_uri');
  }
  public set recordPreprocessorSourceUri(value: string) {
    this._recordPreprocessorSourceUri = value;
  }
  public resetRecordPreprocessorSourceUri() {
    this._recordPreprocessorSourceUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordPreprocessorSourceUriInput() {
    return this._recordPreprocessorSourceUri;
  }
}
export interface SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource {
  /**
  * The Amazon S3 URI for baseline constraint file in Amazon S3 that the current monitoring job should validated against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#s3_uri SagemakerDataQualityJobDefinition#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceToHclTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Uri = value.s3Uri;
    }
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
export interface SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource {
  /**
  * The Amazon S3 URI for the baseline statistics file in Amazon S3 that the current monitoring job should be validated against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#s3_uri SagemakerDataQualityJobDefinition#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceToHclTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Uri = value.s3Uri;
    }
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
export interface SagemakerDataQualityJobDefinitionDataQualityBaselineConfig {
  /**
  * The name of a processing job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#baselining_job_name SagemakerDataQualityJobDefinition#baselining_job_name}
  */
  readonly baseliningJobName?: string;
  /**
  * The baseline constraints resource for a monitoring job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#constraints_resource SagemakerDataQualityJobDefinition#constraints_resource}
  */
  readonly constraintsResource?: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource;
  /**
  * The baseline statistics resource for a monitoring job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#statistics_resource SagemakerDataQualityJobDefinition#statistics_resource}
  */
  readonly statisticsResource?: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource;
}

export function sagemakerDataQualityJobDefinitionDataQualityBaselineConfigToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityBaselineConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    baselining_job_name: cdktn.stringToTerraform(struct!.baseliningJobName),
    constraints_resource: sagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceToTerraform(struct!.constraintsResource),
    statistics_resource: sagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceToTerraform(struct!.statisticsResource),
  }
}


export function sagemakerDataQualityJobDefinitionDataQualityBaselineConfigToHclTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityBaselineConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    baselining_job_name: {
      value: cdktn.stringToHclTerraform(struct!.baseliningJobName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    constraints_resource: {
      value: sagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceToHclTerraform(struct!.constraintsResource),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource",
    },
    statistics_resource: {
      value: sagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceToHclTerraform(struct!.statisticsResource),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDataQualityJobDefinitionDataQualityBaselineConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseliningJobName !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseliningJobName = this._baseliningJobName;
    }
    if (this._constraintsResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraintsResource = this._constraintsResource?.internalValue;
    }
    if (this._statisticsResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statisticsResource = this._statisticsResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDataQualityJobDefinitionDataQualityBaselineConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseliningJobName = undefined;
      this._constraintsResource.internalValue = undefined;
      this._statisticsResource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseliningJobName = value.baseliningJobName;
      this._constraintsResource.internalValue = value.constraintsResource;
      this._statisticsResource.internalValue = value.statisticsResource;
    }
  }

  // baselining_job_name - computed: true, optional: true, required: false
  private _baseliningJobName?: string;
  public get baseliningJobName() {
    return this.getStringAttribute('baselining_job_name');
  }
  public set baseliningJobName(value: string) {
    this._baseliningJobName = value;
  }
  public resetBaseliningJobName() {
    this._baseliningJobName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseliningJobNameInput() {
    return this._baseliningJobName;
  }

  // constraints_resource - computed: true, optional: true, required: false
  private _constraintsResource = new SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference(this, "constraints_resource");
  public get constraintsResource() {
    return this._constraintsResource;
  }
  public putConstraintsResource(value: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource) {
    this._constraintsResource.internalValue = value;
  }
  public resetConstraintsResource() {
    this._constraintsResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsResourceInput() {
    return this._constraintsResource.internalValue;
  }

  // statistics_resource - computed: true, optional: true, required: false
  private _statisticsResource = new SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference(this, "statistics_resource");
  public get statisticsResource() {
    return this._statisticsResource;
  }
  public putStatisticsResource(value: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource) {
    this._statisticsResource.internalValue = value;
  }
  public resetStatisticsResource() {
    this._statisticsResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsResourceInput() {
    return this._statisticsResource.internalValue;
  }
}
export interface SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv {
  /**
  * A boolean flag indicating if given CSV has header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#header SagemakerDataQualityJobDefinition#header}
  */
  readonly header?: boolean | cdktn.IResolvable;
}

export function sagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header: cdktn.booleanToTerraform(struct!.header),
  }
}


export function sagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvToHclTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header: {
      value: cdktn.booleanToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header = value.header;
    }
  }

  // header - computed: true, optional: true, required: false
  private _header?: boolean | cdktn.IResolvable;
  public get header() {
    return this.getBooleanAttribute('header');
  }
  public set header(value: boolean | cdktn.IResolvable) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }
}
export interface SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson {
  /**
  * A boolean flag indicating if it is JSON line format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#line SagemakerDataQualityJobDefinition#line}
  */
  readonly line?: boolean | cdktn.IResolvable;
}

export function sagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    line: cdktn.booleanToTerraform(struct!.line),
  }
}


export function sagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonToHclTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    line: {
      value: cdktn.booleanToHclTerraform(struct!.line),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._line !== undefined) {
      hasAnyValues = true;
      internalValueResult.line = this._line;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._line = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._line = value.line;
    }
  }

  // line - computed: true, optional: true, required: false
  private _line?: boolean | cdktn.IResolvable;
  public get line() {
    return this.getBooleanAttribute('line');
  }
  public set line(value: boolean | cdktn.IResolvable) {
    this._line = value;
  }
  public resetLine() {
    this._line = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineInput() {
    return this._line;
  }
}
export interface SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat {
  /**
  * The CSV format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#csv SagemakerDataQualityJobDefinition#csv}
  */
  readonly csv?: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv;
  /**
  * The Json format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#json SagemakerDataQualityJobDefinition#json}
  */
  readonly json?: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson;
  /**
  * A flag indicate if the dataset format is Parquet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#parquet SagemakerDataQualityJobDefinition#parquet}
  */
  readonly parquet?: boolean | cdktn.IResolvable;
}

export function sagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    csv: sagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvToTerraform(struct!.csv),
    json: sagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonToTerraform(struct!.json),
    parquet: cdktn.booleanToTerraform(struct!.parquet),
  }
}


export function sagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatToHclTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    csv: {
      value: sagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvToHclTerraform(struct!.csv),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv",
    },
    json: {
      value: sagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonToHclTerraform(struct!.json),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson",
    },
    parquet: {
      value: cdktn.booleanToHclTerraform(struct!.parquet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._csv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csv = this._csv?.internalValue;
    }
    if (this._json?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json?.internalValue;
    }
    if (this._parquet !== undefined) {
      hasAnyValues = true;
      internalValueResult.parquet = this._parquet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._csv.internalValue = undefined;
      this._json.internalValue = undefined;
      this._parquet = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._csv.internalValue = value.csv;
      this._json.internalValue = value.json;
      this._parquet = value.parquet;
    }
  }

  // csv - computed: true, optional: true, required: false
  private _csv = new SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference(this, "csv");
  public get csv() {
    return this._csv;
  }
  public putCsv(value: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv) {
    this._csv.internalValue = value;
  }
  public resetCsv() {
    this._csv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvInput() {
    return this._csv.internalValue;
  }

  // json - computed: true, optional: true, required: false
  private _json = new SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference(this, "json");
  public get json() {
    return this._json;
  }
  public putJson(value: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson) {
    this._json.internalValue = value;
  }
  public resetJson() {
    this._json.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json.internalValue;
  }

  // parquet - computed: true, optional: true, required: false
  private _parquet?: boolean | cdktn.IResolvable;
  public get parquet() {
    return this.getBooleanAttribute('parquet');
  }
  public set parquet(value: boolean | cdktn.IResolvable) {
    this._parquet = value;
  }
  public resetParquet() {
    this._parquet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parquetInput() {
    return this._parquet;
  }
}
export interface SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput {
  /**
  * A URI that identifies the Amazon S3 storage location where Batch Transform Job captures data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#data_captured_destination_s3_uri SagemakerDataQualityJobDefinition#data_captured_destination_s3_uri}
  */
  readonly dataCapturedDestinationS3Uri?: string;
  /**
  * The dataset format of the data to monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#dataset_format SagemakerDataQualityJobDefinition#dataset_format}
  */
  readonly datasetFormat?: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat;
  /**
  * Indexes or names of the features to be excluded from analysis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#exclude_features_attribute SagemakerDataQualityJobDefinition#exclude_features_attribute}
  */
  readonly excludeFeaturesAttribute?: string;
  /**
  * Path to the filesystem where the endpoint data is available to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#local_path SagemakerDataQualityJobDefinition#local_path}
  */
  readonly localPath?: string;
  /**
  * Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#s3_data_distribution_type SagemakerDataQualityJobDefinition#s3_data_distribution_type}
  */
  readonly s3DataDistributionType?: string;
  /**
  * Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#s3_input_mode SagemakerDataQualityJobDefinition#s3_input_mode}
  */
  readonly s3InputMode?: string;
}

export function sagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_captured_destination_s3_uri: cdktn.stringToTerraform(struct!.dataCapturedDestinationS3Uri),
    dataset_format: sagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatToTerraform(struct!.datasetFormat),
    exclude_features_attribute: cdktn.stringToTerraform(struct!.excludeFeaturesAttribute),
    local_path: cdktn.stringToTerraform(struct!.localPath),
    s3_data_distribution_type: cdktn.stringToTerraform(struct!.s3DataDistributionType),
    s3_input_mode: cdktn.stringToTerraform(struct!.s3InputMode),
  }
}


export function sagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputToHclTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_captured_destination_s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.dataCapturedDestinationS3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset_format: {
      value: sagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatToHclTerraform(struct!.datasetFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat",
    },
    exclude_features_attribute: {
      value: cdktn.stringToHclTerraform(struct!.excludeFeaturesAttribute),
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
    s3_data_distribution_type: {
      value: cdktn.stringToHclTerraform(struct!.s3DataDistributionType),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataCapturedDestinationS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCapturedDestinationS3Uri = this._dataCapturedDestinationS3Uri;
    }
    if (this._datasetFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetFormat = this._datasetFormat?.internalValue;
    }
    if (this._excludeFeaturesAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeFeaturesAttribute = this._excludeFeaturesAttribute;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._s3DataDistributionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataDistributionType = this._s3DataDistributionType;
    }
    if (this._s3InputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3InputMode = this._s3InputMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataCapturedDestinationS3Uri = undefined;
      this._datasetFormat.internalValue = undefined;
      this._excludeFeaturesAttribute = undefined;
      this._localPath = undefined;
      this._s3DataDistributionType = undefined;
      this._s3InputMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataCapturedDestinationS3Uri = value.dataCapturedDestinationS3Uri;
      this._datasetFormat.internalValue = value.datasetFormat;
      this._excludeFeaturesAttribute = value.excludeFeaturesAttribute;
      this._localPath = value.localPath;
      this._s3DataDistributionType = value.s3DataDistributionType;
      this._s3InputMode = value.s3InputMode;
    }
  }

  // data_captured_destination_s3_uri - computed: true, optional: true, required: false
  private _dataCapturedDestinationS3Uri?: string;
  public get dataCapturedDestinationS3Uri() {
    return this.getStringAttribute('data_captured_destination_s3_uri');
  }
  public set dataCapturedDestinationS3Uri(value: string) {
    this._dataCapturedDestinationS3Uri = value;
  }
  public resetDataCapturedDestinationS3Uri() {
    this._dataCapturedDestinationS3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCapturedDestinationS3UriInput() {
    return this._dataCapturedDestinationS3Uri;
  }

  // dataset_format - computed: true, optional: true, required: false
  private _datasetFormat = new SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference(this, "dataset_format");
  public get datasetFormat() {
    return this._datasetFormat;
  }
  public putDatasetFormat(value: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat) {
    this._datasetFormat.internalValue = value;
  }
  public resetDatasetFormat() {
    this._datasetFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetFormatInput() {
    return this._datasetFormat.internalValue;
  }

  // exclude_features_attribute - computed: true, optional: true, required: false
  private _excludeFeaturesAttribute?: string;
  public get excludeFeaturesAttribute() {
    return this.getStringAttribute('exclude_features_attribute');
  }
  public set excludeFeaturesAttribute(value: string) {
    this._excludeFeaturesAttribute = value;
  }
  public resetExcludeFeaturesAttribute() {
    this._excludeFeaturesAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFeaturesAttributeInput() {
    return this._excludeFeaturesAttribute;
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
}
export interface SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput {
  /**
  * The name of the endpoint used to run the monitoring job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#endpoint_name SagemakerDataQualityJobDefinition#endpoint_name}
  */
  readonly endpointName?: string;
  /**
  * Indexes or names of the features to be excluded from analysis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#exclude_features_attribute SagemakerDataQualityJobDefinition#exclude_features_attribute}
  */
  readonly excludeFeaturesAttribute?: string;
  /**
  * Path to the filesystem where the endpoint data is available to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#local_path SagemakerDataQualityJobDefinition#local_path}
  */
  readonly localPath?: string;
  /**
  * Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#s3_data_distribution_type SagemakerDataQualityJobDefinition#s3_data_distribution_type}
  */
  readonly s3DataDistributionType?: string;
  /**
  * Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#s3_input_mode SagemakerDataQualityJobDefinition#s3_input_mode}
  */
  readonly s3InputMode?: string;
}

export function sagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint_name: cdktn.stringToTerraform(struct!.endpointName),
    exclude_features_attribute: cdktn.stringToTerraform(struct!.excludeFeaturesAttribute),
    local_path: cdktn.stringToTerraform(struct!.localPath),
    s3_data_distribution_type: cdktn.stringToTerraform(struct!.s3DataDistributionType),
    s3_input_mode: cdktn.stringToTerraform(struct!.s3InputMode),
  }
}


export function sagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputToHclTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint_name: {
      value: cdktn.stringToHclTerraform(struct!.endpointName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_features_attribute: {
      value: cdktn.stringToHclTerraform(struct!.excludeFeaturesAttribute),
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
    s3_data_distribution_type: {
      value: cdktn.stringToHclTerraform(struct!.s3DataDistributionType),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointName !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointName = this._endpointName;
    }
    if (this._excludeFeaturesAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeFeaturesAttribute = this._excludeFeaturesAttribute;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._s3DataDistributionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataDistributionType = this._s3DataDistributionType;
    }
    if (this._s3InputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3InputMode = this._s3InputMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointName = undefined;
      this._excludeFeaturesAttribute = undefined;
      this._localPath = undefined;
      this._s3DataDistributionType = undefined;
      this._s3InputMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointName = value.endpointName;
      this._excludeFeaturesAttribute = value.excludeFeaturesAttribute;
      this._localPath = value.localPath;
      this._s3DataDistributionType = value.s3DataDistributionType;
      this._s3InputMode = value.s3InputMode;
    }
  }

  // endpoint_name - computed: true, optional: true, required: false
  private _endpointName?: string;
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }
  public set endpointName(value: string) {
    this._endpointName = value;
  }
  public resetEndpointName() {
    this._endpointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNameInput() {
    return this._endpointName;
  }

  // exclude_features_attribute - computed: true, optional: true, required: false
  private _excludeFeaturesAttribute?: string;
  public get excludeFeaturesAttribute() {
    return this.getStringAttribute('exclude_features_attribute');
  }
  public set excludeFeaturesAttribute(value: string) {
    this._excludeFeaturesAttribute = value;
  }
  public resetExcludeFeaturesAttribute() {
    this._excludeFeaturesAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFeaturesAttributeInput() {
    return this._excludeFeaturesAttribute;
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
}
export interface SagemakerDataQualityJobDefinitionDataQualityJobInput {
  /**
  * The batch transform input for a monitoring job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#batch_transform_input SagemakerDataQualityJobDefinition#batch_transform_input}
  */
  readonly batchTransformInput?: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput;
  /**
  * The endpoint for a monitoring job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#endpoint_input SagemakerDataQualityJobDefinition#endpoint_input}
  */
  readonly endpointInput?: SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput;
}

export function sagemakerDataQualityJobDefinitionDataQualityJobInputToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_transform_input: sagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputToTerraform(struct!.batchTransformInput),
    endpoint_input: sagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputToTerraform(struct!.endpointInput),
  }
}


export function sagemakerDataQualityJobDefinitionDataQualityJobInputToHclTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch_transform_input: {
      value: sagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputToHclTerraform(struct!.batchTransformInput),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput",
    },
    endpoint_input: {
      value: sagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputToHclTerraform(struct!.endpointInput),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDataQualityJobDefinitionDataQualityJobInput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchTransformInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchTransformInput = this._batchTransformInput?.internalValue;
    }
    if (this._endpointInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointInput = this._endpointInput?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDataQualityJobDefinitionDataQualityJobInput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchTransformInput.internalValue = undefined;
      this._endpointInput.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchTransformInput.internalValue = value.batchTransformInput;
      this._endpointInput.internalValue = value.endpointInput;
    }
  }

  // batch_transform_input - computed: true, optional: true, required: false
  private _batchTransformInput = new SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference(this, "batch_transform_input");
  public get batchTransformInput() {
    return this._batchTransformInput;
  }
  public putBatchTransformInput(value: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput) {
    this._batchTransformInput.internalValue = value;
  }
  public resetBatchTransformInput() {
    this._batchTransformInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchTransformInputInput() {
    return this._batchTransformInput.internalValue;
  }

  // endpoint_input - computed: true, optional: true, required: false
  private _endpointInput = new SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference(this, "endpoint_input");
  public get endpointInput() {
    return this._endpointInput;
  }
  public putEndpointInput(value: SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput) {
    this._endpointInput.internalValue = value;
  }
  public resetEndpointInput() {
    this._endpointInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInputInput() {
    return this._endpointInput.internalValue;
  }
}
export interface SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output {
  /**
  * The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. LocalPath is an absolute path for the output data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#local_path SagemakerDataQualityJobDefinition#local_path}
  */
  readonly localPath: string;
  /**
  * Whether to upload the results of the monitoring job continuously or after the job completes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#s3_upload_mode SagemakerDataQualityJobDefinition#s3_upload_mode}
  */
  readonly s3UploadMode?: string;
  /**
  * A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#s3_uri SagemakerDataQualityJobDefinition#s3_uri}
  */
  readonly s3Uri: string;
}

export function sagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output | cdktn.IResolvable): any {
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


export function sagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputToHclTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output | cdktn.IResolvable): any {
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

export class SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output | cdktn.IResolvable | undefined) {
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

  // local_path - computed: false, optional: false, required: true
  private _localPath?: string;
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
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

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string;
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs {
  /**
  * Information about where and how to store the results of a monitoring job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#s3_output SagemakerDataQualityJobDefinition#s3_output}
  */
  readonly s3Output: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output;
}

export function sagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_output: sagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct!.s3Output),
  }
}


export function sagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsToHclTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_output: {
      value: sagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputToHclTerraform(struct!.s3Output),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Output?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Output = this._s3Output?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Output.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Output.internalValue = value.s3Output;
    }
  }

  // s3_output - computed: false, optional: false, required: true
  private _s3Output = new SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference(this, "s3_output");
  public get s3Output() {
    return this._s3Output;
  }
  public putS3Output(value: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output) {
    this._s3Output.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputInput() {
    return this._s3Output.internalValue;
  }
}

export class SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList extends cdktn.ComplexList {
  public internalValue? : SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs[] | cdktn.IResolvable

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
  public get(index: number): SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference {
    return new SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig {
  /**
  * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#kms_key_id SagemakerDataQualityJobDefinition#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#monitoring_outputs SagemakerDataQualityJobDefinition#monitoring_outputs}
  */
  readonly monitoringOutputs: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs[] | cdktn.IResolvable;
}

export function sagemakerDataQualityJobDefinitionDataQualityJobOutputConfigToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    monitoring_outputs: cdktn.listMapper(sagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsToTerraform, false)(struct!.monitoringOutputs),
  }
}


export function sagemakerDataQualityJobDefinitionDataQualityJobOutputConfigToHclTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig | cdktn.IResolvable): any {
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
    monitoring_outputs: {
      value: cdktn.listMapperHcl(sagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsToHclTerraform, false)(struct!.monitoringOutputs),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._monitoringOutputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringOutputs = this._monitoringOutputs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyId = undefined;
      this._monitoringOutputs.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyId = value.kmsKeyId;
      this._monitoringOutputs.internalValue = value.monitoringOutputs;
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

  // monitoring_outputs - computed: false, optional: false, required: true
  private _monitoringOutputs = new SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList(this, "monitoring_outputs", false);
  public get monitoringOutputs() {
    return this._monitoringOutputs;
  }
  public putMonitoringOutputs(value: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs[] | cdktn.IResolvable) {
    this._monitoringOutputs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringOutputsInput() {
    return this._monitoringOutputs.internalValue;
  }
}
export interface SagemakerDataQualityJobDefinitionJobResourcesClusterConfig {
  /**
  * The number of ML compute instances to use in the model monitoring job. For distributed processing jobs, specify a value greater than 1. The default value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#instance_count SagemakerDataQualityJobDefinition#instance_count}
  */
  readonly instanceCount: number;
  /**
  * The ML compute instance type for the processing job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#instance_type SagemakerDataQualityJobDefinition#instance_type}
  */
  readonly instanceType: string;
  /**
  * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#volume_kms_key_id SagemakerDataQualityJobDefinition#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
  /**
  * The size of the ML storage volume, in gigabytes, that you want to provision. You must specify sufficient ML storage for your scenario.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#volume_size_in_gb SagemakerDataQualityJobDefinition#volume_size_in_gb}
  */
  readonly volumeSizeInGb: number;
}

export function sagemakerDataQualityJobDefinitionJobResourcesClusterConfigToTerraform(struct?: SagemakerDataQualityJobDefinitionJobResourcesClusterConfig | cdktn.IResolvable): any {
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


export function sagemakerDataQualityJobDefinitionJobResourcesClusterConfigToHclTerraform(struct?: SagemakerDataQualityJobDefinitionJobResourcesClusterConfig | cdktn.IResolvable): any {
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

export class SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDataQualityJobDefinitionJobResourcesClusterConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDataQualityJobDefinitionJobResourcesClusterConfig | cdktn.IResolvable | undefined) {
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
export interface SagemakerDataQualityJobDefinitionJobResources {
  /**
  * Configuration for the cluster used to run model monitoring jobs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#cluster_config SagemakerDataQualityJobDefinition#cluster_config}
  */
  readonly clusterConfig: SagemakerDataQualityJobDefinitionJobResourcesClusterConfig;
}

export function sagemakerDataQualityJobDefinitionJobResourcesToTerraform(struct?: SagemakerDataQualityJobDefinitionJobResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster_config: sagemakerDataQualityJobDefinitionJobResourcesClusterConfigToTerraform(struct!.clusterConfig),
  }
}


export function sagemakerDataQualityJobDefinitionJobResourcesToHclTerraform(struct?: SagemakerDataQualityJobDefinitionJobResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster_config: {
      value: sagemakerDataQualityJobDefinitionJobResourcesClusterConfigToHclTerraform(struct!.clusterConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDataQualityJobDefinitionJobResourcesClusterConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDataQualityJobDefinitionJobResourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDataQualityJobDefinitionJobResources | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDataQualityJobDefinitionJobResources | cdktn.IResolvable | undefined) {
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
  private _clusterConfig = new SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: SagemakerDataQualityJobDefinitionJobResourcesClusterConfig) {
    this._clusterConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig.internalValue;
  }
}
export interface SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig {
  /**
  * The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the Subnets field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#security_group_ids SagemakerDataQualityJobDefinition#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * The ID of the subnets in the VPC to which you want to connect to your monitoring jobs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#subnets SagemakerDataQualityJobDefinition#subnets}
  */
  readonly subnets?: string[];
}

export function sagemakerDataQualityJobDefinitionNetworkConfigVpcConfigToTerraform(struct?: SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
  }
}


export function sagemakerDataQualityJobDefinitionNetworkConfigVpcConfigToHclTerraform(struct?: SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig | cdktn.IResolvable): any {
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

export class SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig | cdktn.IResolvable | undefined) {
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
export interface SagemakerDataQualityJobDefinitionNetworkConfig {
  /**
  * Whether to encrypt all communications between distributed processing jobs. Choose True to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#enable_inter_container_traffic_encryption SagemakerDataQualityJobDefinition#enable_inter_container_traffic_encryption}
  */
  readonly enableInterContainerTrafficEncryption?: boolean | cdktn.IResolvable;
  /**
  * Whether to allow inbound and outbound network calls to and from the containers used for the processing job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#enable_network_isolation SagemakerDataQualityJobDefinition#enable_network_isolation}
  */
  readonly enableNetworkIsolation?: boolean | cdktn.IResolvable;
  /**
  * Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#vpc_config SagemakerDataQualityJobDefinition#vpc_config}
  */
  readonly vpcConfig?: SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig;
}

export function sagemakerDataQualityJobDefinitionNetworkConfigToTerraform(struct?: SagemakerDataQualityJobDefinitionNetworkConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_inter_container_traffic_encryption: cdktn.booleanToTerraform(struct!.enableInterContainerTrafficEncryption),
    enable_network_isolation: cdktn.booleanToTerraform(struct!.enableNetworkIsolation),
    vpc_config: sagemakerDataQualityJobDefinitionNetworkConfigVpcConfigToTerraform(struct!.vpcConfig),
  }
}


export function sagemakerDataQualityJobDefinitionNetworkConfigToHclTerraform(struct?: SagemakerDataQualityJobDefinitionNetworkConfig | cdktn.IResolvable): any {
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
      value: sagemakerDataQualityJobDefinitionNetworkConfigVpcConfigToHclTerraform(struct!.vpcConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDataQualityJobDefinitionNetworkConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDataQualityJobDefinitionNetworkConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDataQualityJobDefinitionNetworkConfig | cdktn.IResolvable | undefined) {
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
  private _vpcConfig = new SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig) {
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
export interface SagemakerDataQualityJobDefinitionStoppingCondition {
  /**
  * The maximum runtime allowed in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#max_runtime_in_seconds SagemakerDataQualityJobDefinition#max_runtime_in_seconds}
  */
  readonly maxRuntimeInSeconds?: number;
}

export function sagemakerDataQualityJobDefinitionStoppingConditionToTerraform(struct?: SagemakerDataQualityJobDefinitionStoppingCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_runtime_in_seconds: cdktn.numberToTerraform(struct!.maxRuntimeInSeconds),
  }
}


export function sagemakerDataQualityJobDefinitionStoppingConditionToHclTerraform(struct?: SagemakerDataQualityJobDefinitionStoppingCondition | cdktn.IResolvable): any {
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

export class SagemakerDataQualityJobDefinitionStoppingConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerDataQualityJobDefinitionStoppingCondition | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDataQualityJobDefinitionStoppingCondition | cdktn.IResolvable | undefined) {
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
export interface SagemakerDataQualityJobDefinitionTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#key SagemakerDataQualityJobDefinition#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#value SagemakerDataQualityJobDefinition#value}
  */
  readonly value?: string;
}

export function sagemakerDataQualityJobDefinitionTagsToTerraform(struct?: SagemakerDataQualityJobDefinitionTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function sagemakerDataQualityJobDefinitionTagsToHclTerraform(struct?: SagemakerDataQualityJobDefinitionTags | cdktn.IResolvable): any {
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

export class SagemakerDataQualityJobDefinitionTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerDataQualityJobDefinitionTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerDataQualityJobDefinitionTags | cdktn.IResolvable | undefined) {
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

export class SagemakerDataQualityJobDefinitionTagsList extends cdktn.ComplexList {
  public internalValue? : SagemakerDataQualityJobDefinitionTags[] | cdktn.IResolvable

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
  public get(index: number): SagemakerDataQualityJobDefinitionTagsOutputReference {
    return new SagemakerDataQualityJobDefinitionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition awscc_sagemaker_data_quality_job_definition}
*/
export class SagemakerDataQualityJobDefinition extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_data_quality_job_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SagemakerDataQualityJobDefinition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerDataQualityJobDefinition to import
  * @param importFromId The id of the existing SagemakerDataQualityJobDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerDataQualityJobDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_data_quality_job_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_data_quality_job_definition awscc_sagemaker_data_quality_job_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerDataQualityJobDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerDataQualityJobDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_data_quality_job_definition',
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
    this._dataQualityAppSpecification.internalValue = config.dataQualityAppSpecification;
    this._dataQualityBaselineConfig.internalValue = config.dataQualityBaselineConfig;
    this._dataQualityJobInput.internalValue = config.dataQualityJobInput;
    this._dataQualityJobOutputConfig.internalValue = config.dataQualityJobOutputConfig;
    this._endpointName = config.endpointName;
    this._jobDefinitionName = config.jobDefinitionName;
    this._jobResources.internalValue = config.jobResources;
    this._networkConfig.internalValue = config.networkConfig;
    this._roleArn = config.roleArn;
    this._stoppingCondition.internalValue = config.stoppingCondition;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // data_quality_app_specification - computed: false, optional: false, required: true
  private _dataQualityAppSpecification = new SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference(this, "data_quality_app_specification");
  public get dataQualityAppSpecification() {
    return this._dataQualityAppSpecification;
  }
  public putDataQualityAppSpecification(value: SagemakerDataQualityJobDefinitionDataQualityAppSpecification) {
    this._dataQualityAppSpecification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataQualityAppSpecificationInput() {
    return this._dataQualityAppSpecification.internalValue;
  }

  // data_quality_baseline_config - computed: true, optional: true, required: false
  private _dataQualityBaselineConfig = new SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference(this, "data_quality_baseline_config");
  public get dataQualityBaselineConfig() {
    return this._dataQualityBaselineConfig;
  }
  public putDataQualityBaselineConfig(value: SagemakerDataQualityJobDefinitionDataQualityBaselineConfig) {
    this._dataQualityBaselineConfig.internalValue = value;
  }
  public resetDataQualityBaselineConfig() {
    this._dataQualityBaselineConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataQualityBaselineConfigInput() {
    return this._dataQualityBaselineConfig.internalValue;
  }

  // data_quality_job_input - computed: false, optional: false, required: true
  private _dataQualityJobInput = new SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference(this, "data_quality_job_input");
  public get dataQualityJobInput() {
    return this._dataQualityJobInput;
  }
  public putDataQualityJobInput(value: SagemakerDataQualityJobDefinitionDataQualityJobInput) {
    this._dataQualityJobInput.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataQualityJobInputInput() {
    return this._dataQualityJobInput.internalValue;
  }

  // data_quality_job_output_config - computed: false, optional: false, required: true
  private _dataQualityJobOutputConfig = new SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference(this, "data_quality_job_output_config");
  public get dataQualityJobOutputConfig() {
    return this._dataQualityJobOutputConfig;
  }
  public putDataQualityJobOutputConfig(value: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig) {
    this._dataQualityJobOutputConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataQualityJobOutputConfigInput() {
    return this._dataQualityJobOutputConfig.internalValue;
  }

  // endpoint_name - computed: true, optional: true, required: false
  private _endpointName?: string;
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }
  public set endpointName(value: string) {
    this._endpointName = value;
  }
  public resetEndpointName() {
    this._endpointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNameInput() {
    return this._endpointName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_definition_arn - computed: true, optional: false, required: false
  public get jobDefinitionArn() {
    return this.getStringAttribute('job_definition_arn');
  }

  // job_definition_name - computed: true, optional: true, required: false
  private _jobDefinitionName?: string;
  public get jobDefinitionName() {
    return this.getStringAttribute('job_definition_name');
  }
  public set jobDefinitionName(value: string) {
    this._jobDefinitionName = value;
  }
  public resetJobDefinitionName() {
    this._jobDefinitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobDefinitionNameInput() {
    return this._jobDefinitionName;
  }

  // job_resources - computed: false, optional: false, required: true
  private _jobResources = new SagemakerDataQualityJobDefinitionJobResourcesOutputReference(this, "job_resources");
  public get jobResources() {
    return this._jobResources;
  }
  public putJobResources(value: SagemakerDataQualityJobDefinitionJobResources) {
    this._jobResources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobResourcesInput() {
    return this._jobResources.internalValue;
  }

  // network_config - computed: true, optional: true, required: false
  private _networkConfig = new SagemakerDataQualityJobDefinitionNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: SagemakerDataQualityJobDefinitionNetworkConfig) {
    this._networkConfig.internalValue = value;
  }
  public resetNetworkConfig() {
    this._networkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
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
  private _stoppingCondition = new SagemakerDataQualityJobDefinitionStoppingConditionOutputReference(this, "stopping_condition");
  public get stoppingCondition() {
    return this._stoppingCondition;
  }
  public putStoppingCondition(value: SagemakerDataQualityJobDefinitionStoppingCondition) {
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
  private _tags = new SagemakerDataQualityJobDefinitionTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SagemakerDataQualityJobDefinitionTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_quality_app_specification: sagemakerDataQualityJobDefinitionDataQualityAppSpecificationToTerraform(this._dataQualityAppSpecification.internalValue),
      data_quality_baseline_config: sagemakerDataQualityJobDefinitionDataQualityBaselineConfigToTerraform(this._dataQualityBaselineConfig.internalValue),
      data_quality_job_input: sagemakerDataQualityJobDefinitionDataQualityJobInputToTerraform(this._dataQualityJobInput.internalValue),
      data_quality_job_output_config: sagemakerDataQualityJobDefinitionDataQualityJobOutputConfigToTerraform(this._dataQualityJobOutputConfig.internalValue),
      endpoint_name: cdktn.stringToTerraform(this._endpointName),
      job_definition_name: cdktn.stringToTerraform(this._jobDefinitionName),
      job_resources: sagemakerDataQualityJobDefinitionJobResourcesToTerraform(this._jobResources.internalValue),
      network_config: sagemakerDataQualityJobDefinitionNetworkConfigToTerraform(this._networkConfig.internalValue),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      stopping_condition: sagemakerDataQualityJobDefinitionStoppingConditionToTerraform(this._stoppingCondition.internalValue),
      tags: cdktn.listMapper(sagemakerDataQualityJobDefinitionTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_quality_app_specification: {
        value: sagemakerDataQualityJobDefinitionDataQualityAppSpecificationToHclTerraform(this._dataQualityAppSpecification.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerDataQualityJobDefinitionDataQualityAppSpecification",
      },
      data_quality_baseline_config: {
        value: sagemakerDataQualityJobDefinitionDataQualityBaselineConfigToHclTerraform(this._dataQualityBaselineConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerDataQualityJobDefinitionDataQualityBaselineConfig",
      },
      data_quality_job_input: {
        value: sagemakerDataQualityJobDefinitionDataQualityJobInputToHclTerraform(this._dataQualityJobInput.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerDataQualityJobDefinitionDataQualityJobInput",
      },
      data_quality_job_output_config: {
        value: sagemakerDataQualityJobDefinitionDataQualityJobOutputConfigToHclTerraform(this._dataQualityJobOutputConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig",
      },
      endpoint_name: {
        value: cdktn.stringToHclTerraform(this._endpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_definition_name: {
        value: cdktn.stringToHclTerraform(this._jobDefinitionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_resources: {
        value: sagemakerDataQualityJobDefinitionJobResourcesToHclTerraform(this._jobResources.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerDataQualityJobDefinitionJobResources",
      },
      network_config: {
        value: sagemakerDataQualityJobDefinitionNetworkConfigToHclTerraform(this._networkConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerDataQualityJobDefinitionNetworkConfig",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stopping_condition: {
        value: sagemakerDataQualityJobDefinitionStoppingConditionToHclTerraform(this._stoppingCondition.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerDataQualityJobDefinitionStoppingCondition",
      },
      tags: {
        value: cdktn.listMapperHcl(sagemakerDataQualityJobDefinitionTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerDataQualityJobDefinitionTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
