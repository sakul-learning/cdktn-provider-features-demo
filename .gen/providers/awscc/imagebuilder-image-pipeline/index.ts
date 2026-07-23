// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ImagebuilderImagePipelineConfig extends cdktn.TerraformMetaArguments {
  /**
  * The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#container_recipe_arn ImagebuilderImagePipeline#container_recipe_arn}
  */
  readonly containerRecipeArn?: string;
  /**
  * The description of the image pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#description ImagebuilderImagePipeline#description}
  */
  readonly description?: string;
  /**
  * The Amazon Resource Name (ARN) of the distribution configuration associated with this image pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#distribution_configuration_arn ImagebuilderImagePipeline#distribution_configuration_arn}
  */
  readonly distributionConfigurationArn?: string;
  /**
  * Collects additional information about the image being created, including the operating system (OS) version and package list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#enhanced_image_metadata_enabled ImagebuilderImagePipeline#enhanced_image_metadata_enabled}
  */
  readonly enhancedImageMetadataEnabled?: boolean | cdktn.IResolvable;
  /**
  * The execution role name/ARN for the image build, if provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#execution_role ImagebuilderImagePipeline#execution_role}
  */
  readonly executionRole?: string;
  /**
  * The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#image_recipe_arn ImagebuilderImagePipeline#image_recipe_arn}
  */
  readonly imageRecipeArn?: string;
  /**
  * Contains settings for vulnerability scans.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#image_scanning_configuration ImagebuilderImagePipeline#image_scanning_configuration}
  */
  readonly imageScanningConfiguration?: ImagebuilderImagePipelineImageScanningConfiguration;
  /**
  * The tags to be applied to images created by this pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#image_tags ImagebuilderImagePipeline#image_tags}
  */
  readonly imageTags?: { [key: string]: string };
  /**
  * The image tests configuration of the image pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#image_tests_configuration ImagebuilderImagePipeline#image_tests_configuration}
  */
  readonly imageTestsConfiguration?: ImagebuilderImagePipelineImageTestsConfiguration;
  /**
  * The Amazon Resource Name (ARN) of the infrastructure configuration associated with this image pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#infrastructure_configuration_arn ImagebuilderImagePipeline#infrastructure_configuration_arn}
  */
  readonly infrastructureConfigurationArn?: string;
  /**
  * The logging configuration settings for the image pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#logging_configuration ImagebuilderImagePipeline#logging_configuration}
  */
  readonly loggingConfiguration?: ImagebuilderImagePipelineLoggingConfiguration;
  /**
  * The name of the image pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#name ImagebuilderImagePipeline#name}
  */
  readonly name?: string;
  /**
  * The schedule of the image pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#schedule ImagebuilderImagePipeline#schedule}
  */
  readonly schedule?: ImagebuilderImagePipelineSchedule;
  /**
  * The status of the image pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#status ImagebuilderImagePipeline#status}
  */
  readonly status?: string;
  /**
  * The tags of this image pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#tags ImagebuilderImagePipeline#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Workflows to define the image build process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#workflows ImagebuilderImagePipeline#workflows}
  */
  readonly workflows?: ImagebuilderImagePipelineWorkflows[] | cdktn.IResolvable;
}
export interface ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration {
  /**
  * Tags for Image Builder to apply the output container image that is scanned. Tags can help you identify and manage your scanned images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#container_tags ImagebuilderImagePipeline#container_tags}
  */
  readonly containerTags?: string[];
  /**
  * The name of the container repository that Amazon Inspector scans to identify findings for your container images. The name includes the path for the repository location. If you don't provide this information, Image Builder creates a repository in your account named image-builder-image-scanning-repository to use for vulnerability scans for your output container images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#repository_name ImagebuilderImagePipeline#repository_name}
  */
  readonly repositoryName?: string;
}

export function imagebuilderImagePipelineImageScanningConfigurationEcrConfigurationToTerraform(struct?: ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.containerTags),
    repository_name: cdktn.stringToTerraform(struct!.repositoryName),
  }
}


export function imagebuilderImagePipelineImageScanningConfigurationEcrConfigurationToHclTerraform(struct?: ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.containerTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    repository_name: {
      value: cdktn.stringToHclTerraform(struct!.repositoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerTags = this._containerTags;
    }
    if (this._repositoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryName = this._repositoryName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerTags = undefined;
      this._repositoryName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerTags = value.containerTags;
      this._repositoryName = value.repositoryName;
    }
  }

  // container_tags - computed: true, optional: true, required: false
  private _containerTags?: string[]; 
  public get containerTags() {
    return this.getListAttribute('container_tags');
  }
  public set containerTags(value: string[]) {
    this._containerTags = value;
  }
  public resetContainerTags() {
    this._containerTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerTagsInput() {
    return this._containerTags;
  }

  // repository_name - computed: true, optional: true, required: false
  private _repositoryName?: string; 
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  public resetRepositoryName() {
    this._repositoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName;
  }
}
export interface ImagebuilderImagePipelineImageScanningConfiguration {
  /**
  * Contains ECR settings for vulnerability scans.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#ecr_configuration ImagebuilderImagePipeline#ecr_configuration}
  */
  readonly ecrConfiguration?: ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration;
  /**
  * This sets whether Image Builder keeps a snapshot of the vulnerability scans that Amazon Inspector runs against the build instance when you create a new image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#image_scanning_enabled ImagebuilderImagePipeline#image_scanning_enabled}
  */
  readonly imageScanningEnabled?: boolean | cdktn.IResolvable;
}

export function imagebuilderImagePipelineImageScanningConfigurationToTerraform(struct?: ImagebuilderImagePipelineImageScanningConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ecr_configuration: imagebuilderImagePipelineImageScanningConfigurationEcrConfigurationToTerraform(struct!.ecrConfiguration),
    image_scanning_enabled: cdktn.booleanToTerraform(struct!.imageScanningEnabled),
  }
}


export function imagebuilderImagePipelineImageScanningConfigurationToHclTerraform(struct?: ImagebuilderImagePipelineImageScanningConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ecr_configuration: {
      value: imagebuilderImagePipelineImageScanningConfigurationEcrConfigurationToHclTerraform(struct!.ecrConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration",
    },
    image_scanning_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.imageScanningEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagebuilderImagePipelineImageScanningConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImagebuilderImagePipelineImageScanningConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ecrConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecrConfiguration = this._ecrConfiguration?.internalValue;
    }
    if (this._imageScanningEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageScanningEnabled = this._imageScanningEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderImagePipelineImageScanningConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ecrConfiguration.internalValue = undefined;
      this._imageScanningEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ecrConfiguration.internalValue = value.ecrConfiguration;
      this._imageScanningEnabled = value.imageScanningEnabled;
    }
  }

  // ecr_configuration - computed: true, optional: true, required: false
  private _ecrConfiguration = new ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference(this, "ecr_configuration");
  public get ecrConfiguration() {
    return this._ecrConfiguration;
  }
  public putEcrConfiguration(value: ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration) {
    this._ecrConfiguration.internalValue = value;
  }
  public resetEcrConfiguration() {
    this._ecrConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrConfigurationInput() {
    return this._ecrConfiguration.internalValue;
  }

  // image_scanning_enabled - computed: true, optional: true, required: false
  private _imageScanningEnabled?: boolean | cdktn.IResolvable; 
  public get imageScanningEnabled() {
    return this.getBooleanAttribute('image_scanning_enabled');
  }
  public set imageScanningEnabled(value: boolean | cdktn.IResolvable) {
    this._imageScanningEnabled = value;
  }
  public resetImageScanningEnabled() {
    this._imageScanningEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageScanningEnabledInput() {
    return this._imageScanningEnabled;
  }
}
export interface ImagebuilderImagePipelineImageTestsConfiguration {
  /**
  * Defines if tests should be executed when building this image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#image_tests_enabled ImagebuilderImagePipeline#image_tests_enabled}
  */
  readonly imageTestsEnabled?: boolean | cdktn.IResolvable;
  /**
  * The maximum time in minutes that tests are permitted to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#timeout_minutes ImagebuilderImagePipeline#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
}

export function imagebuilderImagePipelineImageTestsConfigurationToTerraform(struct?: ImagebuilderImagePipelineImageTestsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    image_tests_enabled: cdktn.booleanToTerraform(struct!.imageTestsEnabled),
    timeout_minutes: cdktn.numberToTerraform(struct!.timeoutMinutes),
  }
}


export function imagebuilderImagePipelineImageTestsConfigurationToHclTerraform(struct?: ImagebuilderImagePipelineImageTestsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    image_tests_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.imageTestsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagebuilderImagePipelineImageTestsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImagebuilderImagePipelineImageTestsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageTestsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageTestsEnabled = this._imageTestsEnabled;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderImagePipelineImageTestsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageTestsEnabled = undefined;
      this._timeoutMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageTestsEnabled = value.imageTestsEnabled;
      this._timeoutMinutes = value.timeoutMinutes;
    }
  }

  // image_tests_enabled - computed: true, optional: true, required: false
  private _imageTestsEnabled?: boolean | cdktn.IResolvable; 
  public get imageTestsEnabled() {
    return this.getBooleanAttribute('image_tests_enabled');
  }
  public set imageTestsEnabled(value: boolean | cdktn.IResolvable) {
    this._imageTestsEnabled = value;
  }
  public resetImageTestsEnabled() {
    this._imageTestsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTestsEnabledInput() {
    return this._imageTestsEnabled;
  }

  // timeout_minutes - computed: true, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }
}
export interface ImagebuilderImagePipelineLoggingConfiguration {
  /**
  * The name of the log group for image build logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#image_log_group_name ImagebuilderImagePipeline#image_log_group_name}
  */
  readonly imageLogGroupName?: string;
  /**
  * The name of the log group for pipeline execution logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#pipeline_log_group_name ImagebuilderImagePipeline#pipeline_log_group_name}
  */
  readonly pipelineLogGroupName?: string;
}

export function imagebuilderImagePipelineLoggingConfigurationToTerraform(struct?: ImagebuilderImagePipelineLoggingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    image_log_group_name: cdktn.stringToTerraform(struct!.imageLogGroupName),
    pipeline_log_group_name: cdktn.stringToTerraform(struct!.pipelineLogGroupName),
  }
}


export function imagebuilderImagePipelineLoggingConfigurationToHclTerraform(struct?: ImagebuilderImagePipelineLoggingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    image_log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.imageLogGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline_log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.pipelineLogGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagebuilderImagePipelineLoggingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImagebuilderImagePipelineLoggingConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageLogGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageLogGroupName = this._imageLogGroupName;
    }
    if (this._pipelineLogGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineLogGroupName = this._pipelineLogGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderImagePipelineLoggingConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageLogGroupName = undefined;
      this._pipelineLogGroupName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageLogGroupName = value.imageLogGroupName;
      this._pipelineLogGroupName = value.pipelineLogGroupName;
    }
  }

  // image_log_group_name - computed: true, optional: true, required: false
  private _imageLogGroupName?: string; 
  public get imageLogGroupName() {
    return this.getStringAttribute('image_log_group_name');
  }
  public set imageLogGroupName(value: string) {
    this._imageLogGroupName = value;
  }
  public resetImageLogGroupName() {
    this._imageLogGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageLogGroupNameInput() {
    return this._imageLogGroupName;
  }

  // pipeline_log_group_name - computed: true, optional: true, required: false
  private _pipelineLogGroupName?: string; 
  public get pipelineLogGroupName() {
    return this.getStringAttribute('pipeline_log_group_name');
  }
  public set pipelineLogGroupName(value: string) {
    this._pipelineLogGroupName = value;
  }
  public resetPipelineLogGroupName() {
    this._pipelineLogGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineLogGroupNameInput() {
    return this._pipelineLogGroupName;
  }
}
export interface ImagebuilderImagePipelineScheduleAutoDisablePolicy {
  /**
  * The number of consecutive failures after which the pipeline should be automatically disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#failure_count ImagebuilderImagePipeline#failure_count}
  */
  readonly failureCount?: number;
}

export function imagebuilderImagePipelineScheduleAutoDisablePolicyToTerraform(struct?: ImagebuilderImagePipelineScheduleAutoDisablePolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    failure_count: cdktn.numberToTerraform(struct!.failureCount),
  }
}


export function imagebuilderImagePipelineScheduleAutoDisablePolicyToHclTerraform(struct?: ImagebuilderImagePipelineScheduleAutoDisablePolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    failure_count: {
      value: cdktn.numberToHclTerraform(struct!.failureCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImagebuilderImagePipelineScheduleAutoDisablePolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureCount = this._failureCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderImagePipelineScheduleAutoDisablePolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureCount = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureCount = value.failureCount;
    }
  }

  // failure_count - computed: true, optional: true, required: false
  private _failureCount?: number; 
  public get failureCount() {
    return this.getNumberAttribute('failure_count');
  }
  public set failureCount(value: number) {
    this._failureCount = value;
  }
  public resetFailureCount() {
    this._failureCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureCountInput() {
    return this._failureCount;
  }
}
export interface ImagebuilderImagePipelineSchedule {
  /**
  * The auto-disable policy for the image pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#auto_disable_policy ImagebuilderImagePipeline#auto_disable_policy}
  */
  readonly autoDisablePolicy?: ImagebuilderImagePipelineScheduleAutoDisablePolicy;
  /**
  * The condition configures when the pipeline should trigger a new image build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#pipeline_execution_start_condition ImagebuilderImagePipeline#pipeline_execution_start_condition}
  */
  readonly pipelineExecutionStartCondition?: string;
  /**
  * The expression determines how often EC2 Image Builder evaluates your pipelineExecutionStartCondition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#schedule_expression ImagebuilderImagePipeline#schedule_expression}
  */
  readonly scheduleExpression?: string;
}

export function imagebuilderImagePipelineScheduleToTerraform(struct?: ImagebuilderImagePipelineSchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_disable_policy: imagebuilderImagePipelineScheduleAutoDisablePolicyToTerraform(struct!.autoDisablePolicy),
    pipeline_execution_start_condition: cdktn.stringToTerraform(struct!.pipelineExecutionStartCondition),
    schedule_expression: cdktn.stringToTerraform(struct!.scheduleExpression),
  }
}


export function imagebuilderImagePipelineScheduleToHclTerraform(struct?: ImagebuilderImagePipelineSchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_disable_policy: {
      value: imagebuilderImagePipelineScheduleAutoDisablePolicyToHclTerraform(struct!.autoDisablePolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "ImagebuilderImagePipelineScheduleAutoDisablePolicy",
    },
    pipeline_execution_start_condition: {
      value: cdktn.stringToHclTerraform(struct!.pipelineExecutionStartCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_expression: {
      value: cdktn.stringToHclTerraform(struct!.scheduleExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagebuilderImagePipelineScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImagebuilderImagePipelineSchedule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDisablePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDisablePolicy = this._autoDisablePolicy?.internalValue;
    }
    if (this._pipelineExecutionStartCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineExecutionStartCondition = this._pipelineExecutionStartCondition;
    }
    if (this._scheduleExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleExpression = this._scheduleExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderImagePipelineSchedule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoDisablePolicy.internalValue = undefined;
      this._pipelineExecutionStartCondition = undefined;
      this._scheduleExpression = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoDisablePolicy.internalValue = value.autoDisablePolicy;
      this._pipelineExecutionStartCondition = value.pipelineExecutionStartCondition;
      this._scheduleExpression = value.scheduleExpression;
    }
  }

  // auto_disable_policy - computed: true, optional: true, required: false
  private _autoDisablePolicy = new ImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference(this, "auto_disable_policy");
  public get autoDisablePolicy() {
    return this._autoDisablePolicy;
  }
  public putAutoDisablePolicy(value: ImagebuilderImagePipelineScheduleAutoDisablePolicy) {
    this._autoDisablePolicy.internalValue = value;
  }
  public resetAutoDisablePolicy() {
    this._autoDisablePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDisablePolicyInput() {
    return this._autoDisablePolicy.internalValue;
  }

  // pipeline_execution_start_condition - computed: true, optional: true, required: false
  private _pipelineExecutionStartCondition?: string; 
  public get pipelineExecutionStartCondition() {
    return this.getStringAttribute('pipeline_execution_start_condition');
  }
  public set pipelineExecutionStartCondition(value: string) {
    this._pipelineExecutionStartCondition = value;
  }
  public resetPipelineExecutionStartCondition() {
    this._pipelineExecutionStartCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineExecutionStartConditionInput() {
    return this._pipelineExecutionStartCondition;
  }

  // schedule_expression - computed: true, optional: true, required: false
  private _scheduleExpression?: string; 
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
  public set scheduleExpression(value: string) {
    this._scheduleExpression = value;
  }
  public resetScheduleExpression() {
    this._scheduleExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionInput() {
    return this._scheduleExpression;
  }
}
export interface ImagebuilderImagePipelineWorkflowsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#name ImagebuilderImagePipeline#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#value ImagebuilderImagePipeline#value}
  */
  readonly value?: string[];
}

export function imagebuilderImagePipelineWorkflowsParametersToTerraform(struct?: ImagebuilderImagePipelineWorkflowsParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.value),
  }
}


export function imagebuilderImagePipelineWorkflowsParametersToHclTerraform(struct?: ImagebuilderImagePipelineWorkflowsParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagebuilderImagePipelineWorkflowsParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ImagebuilderImagePipelineWorkflowsParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderImagePipelineWorkflowsParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
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

export class ImagebuilderImagePipelineWorkflowsParametersList extends cdktn.ComplexList {
  public internalValue? : ImagebuilderImagePipelineWorkflowsParameters[] | cdktn.IResolvable

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
  public get(index: number): ImagebuilderImagePipelineWorkflowsParametersOutputReference {
    return new ImagebuilderImagePipelineWorkflowsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImagebuilderImagePipelineWorkflows {
  /**
  * Define execution decision in case of workflow failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#on_failure ImagebuilderImagePipeline#on_failure}
  */
  readonly onFailure?: string;
  /**
  * The parallel group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#parallel_group ImagebuilderImagePipeline#parallel_group}
  */
  readonly parallelGroup?: string;
  /**
  * The parameters associated with the workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#parameters ImagebuilderImagePipeline#parameters}
  */
  readonly parameters?: ImagebuilderImagePipelineWorkflowsParameters[] | cdktn.IResolvable;
  /**
  * The Amazon Resource Name (ARN) of the workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#workflow_arn ImagebuilderImagePipeline#workflow_arn}
  */
  readonly workflowArn?: string;
}

export function imagebuilderImagePipelineWorkflowsToTerraform(struct?: ImagebuilderImagePipelineWorkflows | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    on_failure: cdktn.stringToTerraform(struct!.onFailure),
    parallel_group: cdktn.stringToTerraform(struct!.parallelGroup),
    parameters: cdktn.listMapper(imagebuilderImagePipelineWorkflowsParametersToTerraform, false)(struct!.parameters),
    workflow_arn: cdktn.stringToTerraform(struct!.workflowArn),
  }
}


export function imagebuilderImagePipelineWorkflowsToHclTerraform(struct?: ImagebuilderImagePipelineWorkflows | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    on_failure: {
      value: cdktn.stringToHclTerraform(struct!.onFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parallel_group: {
      value: cdktn.stringToHclTerraform(struct!.parallelGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktn.listMapperHcl(imagebuilderImagePipelineWorkflowsParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "ImagebuilderImagePipelineWorkflowsParametersList",
    },
    workflow_arn: {
      value: cdktn.stringToHclTerraform(struct!.workflowArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagebuilderImagePipelineWorkflowsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ImagebuilderImagePipelineWorkflows | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.onFailure = this._onFailure;
    }
    if (this._parallelGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelGroup = this._parallelGroup;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._workflowArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowArn = this._workflowArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderImagePipelineWorkflows | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._onFailure = undefined;
      this._parallelGroup = undefined;
      this._parameters.internalValue = undefined;
      this._workflowArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._onFailure = value.onFailure;
      this._parallelGroup = value.parallelGroup;
      this._parameters.internalValue = value.parameters;
      this._workflowArn = value.workflowArn;
    }
  }

  // on_failure - computed: true, optional: true, required: false
  private _onFailure?: string; 
  public get onFailure() {
    return this.getStringAttribute('on_failure');
  }
  public set onFailure(value: string) {
    this._onFailure = value;
  }
  public resetOnFailure() {
    this._onFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure;
  }

  // parallel_group - computed: true, optional: true, required: false
  private _parallelGroup?: string; 
  public get parallelGroup() {
    return this.getStringAttribute('parallel_group');
  }
  public set parallelGroup(value: string) {
    this._parallelGroup = value;
  }
  public resetParallelGroup() {
    this._parallelGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelGroupInput() {
    return this._parallelGroup;
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters = new ImagebuilderImagePipelineWorkflowsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ImagebuilderImagePipelineWorkflowsParameters[] | cdktn.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // workflow_arn - computed: true, optional: true, required: false
  private _workflowArn?: string; 
  public get workflowArn() {
    return this.getStringAttribute('workflow_arn');
  }
  public set workflowArn(value: string) {
    this._workflowArn = value;
  }
  public resetWorkflowArn() {
    this._workflowArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowArnInput() {
    return this._workflowArn;
  }
}

export class ImagebuilderImagePipelineWorkflowsList extends cdktn.ComplexList {
  public internalValue? : ImagebuilderImagePipelineWorkflows[] | cdktn.IResolvable

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
  public get(index: number): ImagebuilderImagePipelineWorkflowsOutputReference {
    return new ImagebuilderImagePipelineWorkflowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline awscc_imagebuilder_image_pipeline}
*/
export class ImagebuilderImagePipeline extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_imagebuilder_image_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ImagebuilderImagePipeline resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImagebuilderImagePipeline to import
  * @param importFromId The id of the existing ImagebuilderImagePipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImagebuilderImagePipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_imagebuilder_image_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/imagebuilder_image_pipeline awscc_imagebuilder_image_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImagebuilderImagePipelineConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ImagebuilderImagePipelineConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_imagebuilder_image_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.93.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._containerRecipeArn = config.containerRecipeArn;
    this._description = config.description;
    this._distributionConfigurationArn = config.distributionConfigurationArn;
    this._enhancedImageMetadataEnabled = config.enhancedImageMetadataEnabled;
    this._executionRole = config.executionRole;
    this._imageRecipeArn = config.imageRecipeArn;
    this._imageScanningConfiguration.internalValue = config.imageScanningConfiguration;
    this._imageTags = config.imageTags;
    this._imageTestsConfiguration.internalValue = config.imageTestsConfiguration;
    this._infrastructureConfigurationArn = config.infrastructureConfigurationArn;
    this._loggingConfiguration.internalValue = config.loggingConfiguration;
    this._name = config.name;
    this._schedule.internalValue = config.schedule;
    this._status = config.status;
    this._tags = config.tags;
    this._workflows.internalValue = config.workflows;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // container_recipe_arn - computed: true, optional: true, required: false
  private _containerRecipeArn?: string; 
  public get containerRecipeArn() {
    return this.getStringAttribute('container_recipe_arn');
  }
  public set containerRecipeArn(value: string) {
    this._containerRecipeArn = value;
  }
  public resetContainerRecipeArn() {
    this._containerRecipeArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRecipeArnInput() {
    return this._containerRecipeArn;
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // distribution_configuration_arn - computed: true, optional: true, required: false
  private _distributionConfigurationArn?: string; 
  public get distributionConfigurationArn() {
    return this.getStringAttribute('distribution_configuration_arn');
  }
  public set distributionConfigurationArn(value: string) {
    this._distributionConfigurationArn = value;
  }
  public resetDistributionConfigurationArn() {
    this._distributionConfigurationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionConfigurationArnInput() {
    return this._distributionConfigurationArn;
  }

  // enhanced_image_metadata_enabled - computed: true, optional: true, required: false
  private _enhancedImageMetadataEnabled?: boolean | cdktn.IResolvable; 
  public get enhancedImageMetadataEnabled() {
    return this.getBooleanAttribute('enhanced_image_metadata_enabled');
  }
  public set enhancedImageMetadataEnabled(value: boolean | cdktn.IResolvable) {
    this._enhancedImageMetadataEnabled = value;
  }
  public resetEnhancedImageMetadataEnabled() {
    this._enhancedImageMetadataEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedImageMetadataEnabledInput() {
    return this._enhancedImageMetadataEnabled;
  }

  // execution_role - computed: true, optional: true, required: false
  private _executionRole?: string; 
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }
  public set executionRole(value: string) {
    this._executionRole = value;
  }
  public resetExecutionRole() {
    this._executionRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleInput() {
    return this._executionRole;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_recipe_arn - computed: true, optional: true, required: false
  private _imageRecipeArn?: string; 
  public get imageRecipeArn() {
    return this.getStringAttribute('image_recipe_arn');
  }
  public set imageRecipeArn(value: string) {
    this._imageRecipeArn = value;
  }
  public resetImageRecipeArn() {
    this._imageRecipeArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRecipeArnInput() {
    return this._imageRecipeArn;
  }

  // image_scanning_configuration - computed: true, optional: true, required: false
  private _imageScanningConfiguration = new ImagebuilderImagePipelineImageScanningConfigurationOutputReference(this, "image_scanning_configuration");
  public get imageScanningConfiguration() {
    return this._imageScanningConfiguration;
  }
  public putImageScanningConfiguration(value: ImagebuilderImagePipelineImageScanningConfiguration) {
    this._imageScanningConfiguration.internalValue = value;
  }
  public resetImageScanningConfiguration() {
    this._imageScanningConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageScanningConfigurationInput() {
    return this._imageScanningConfiguration.internalValue;
  }

  // image_tags - computed: true, optional: true, required: false
  private _imageTags?: { [key: string]: string }; 
  public get imageTags() {
    return this.getStringMapAttribute('image_tags');
  }
  public set imageTags(value: { [key: string]: string }) {
    this._imageTags = value;
  }
  public resetImageTags() {
    this._imageTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTagsInput() {
    return this._imageTags;
  }

  // image_tests_configuration - computed: true, optional: true, required: false
  private _imageTestsConfiguration = new ImagebuilderImagePipelineImageTestsConfigurationOutputReference(this, "image_tests_configuration");
  public get imageTestsConfiguration() {
    return this._imageTestsConfiguration;
  }
  public putImageTestsConfiguration(value: ImagebuilderImagePipelineImageTestsConfiguration) {
    this._imageTestsConfiguration.internalValue = value;
  }
  public resetImageTestsConfiguration() {
    this._imageTestsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTestsConfigurationInput() {
    return this._imageTestsConfiguration.internalValue;
  }

  // infrastructure_configuration_arn - computed: true, optional: true, required: false
  private _infrastructureConfigurationArn?: string; 
  public get infrastructureConfigurationArn() {
    return this.getStringAttribute('infrastructure_configuration_arn');
  }
  public set infrastructureConfigurationArn(value: string) {
    this._infrastructureConfigurationArn = value;
  }
  public resetInfrastructureConfigurationArn() {
    this._infrastructureConfigurationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureConfigurationArnInput() {
    return this._infrastructureConfigurationArn;
  }

  // logging_configuration - computed: true, optional: true, required: false
  private _loggingConfiguration = new ImagebuilderImagePipelineLoggingConfigurationOutputReference(this, "logging_configuration");
  public get loggingConfiguration() {
    return this._loggingConfiguration;
  }
  public putLoggingConfiguration(value: ImagebuilderImagePipelineLoggingConfiguration) {
    this._loggingConfiguration.internalValue = value;
  }
  public resetLoggingConfiguration() {
    this._loggingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigurationInput() {
    return this._loggingConfiguration.internalValue;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // schedule - computed: true, optional: true, required: false
  private _schedule = new ImagebuilderImagePipelineScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: ImagebuilderImagePipelineSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // workflows - computed: true, optional: true, required: false
  private _workflows = new ImagebuilderImagePipelineWorkflowsList(this, "workflows", false);
  public get workflows() {
    return this._workflows;
  }
  public putWorkflows(value: ImagebuilderImagePipelineWorkflows[] | cdktn.IResolvable) {
    this._workflows.internalValue = value;
  }
  public resetWorkflows() {
    this._workflows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowsInput() {
    return this._workflows.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      container_recipe_arn: cdktn.stringToTerraform(this._containerRecipeArn),
      description: cdktn.stringToTerraform(this._description),
      distribution_configuration_arn: cdktn.stringToTerraform(this._distributionConfigurationArn),
      enhanced_image_metadata_enabled: cdktn.booleanToTerraform(this._enhancedImageMetadataEnabled),
      execution_role: cdktn.stringToTerraform(this._executionRole),
      image_recipe_arn: cdktn.stringToTerraform(this._imageRecipeArn),
      image_scanning_configuration: imagebuilderImagePipelineImageScanningConfigurationToTerraform(this._imageScanningConfiguration.internalValue),
      image_tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._imageTags),
      image_tests_configuration: imagebuilderImagePipelineImageTestsConfigurationToTerraform(this._imageTestsConfiguration.internalValue),
      infrastructure_configuration_arn: cdktn.stringToTerraform(this._infrastructureConfigurationArn),
      logging_configuration: imagebuilderImagePipelineLoggingConfigurationToTerraform(this._loggingConfiguration.internalValue),
      name: cdktn.stringToTerraform(this._name),
      schedule: imagebuilderImagePipelineScheduleToTerraform(this._schedule.internalValue),
      status: cdktn.stringToTerraform(this._status),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      workflows: cdktn.listMapper(imagebuilderImagePipelineWorkflowsToTerraform, false)(this._workflows.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      container_recipe_arn: {
        value: cdktn.stringToHclTerraform(this._containerRecipeArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribution_configuration_arn: {
        value: cdktn.stringToHclTerraform(this._distributionConfigurationArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enhanced_image_metadata_enabled: {
        value: cdktn.booleanToHclTerraform(this._enhancedImageMetadataEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      execution_role: {
        value: cdktn.stringToHclTerraform(this._executionRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_recipe_arn: {
        value: cdktn.stringToHclTerraform(this._imageRecipeArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_scanning_configuration: {
        value: imagebuilderImagePipelineImageScanningConfigurationToHclTerraform(this._imageScanningConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ImagebuilderImagePipelineImageScanningConfiguration",
      },
      image_tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._imageTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      image_tests_configuration: {
        value: imagebuilderImagePipelineImageTestsConfigurationToHclTerraform(this._imageTestsConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ImagebuilderImagePipelineImageTestsConfiguration",
      },
      infrastructure_configuration_arn: {
        value: cdktn.stringToHclTerraform(this._infrastructureConfigurationArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging_configuration: {
        value: imagebuilderImagePipelineLoggingConfigurationToHclTerraform(this._loggingConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ImagebuilderImagePipelineLoggingConfiguration",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: imagebuilderImagePipelineScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ImagebuilderImagePipelineSchedule",
      },
      status: {
        value: cdktn.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      workflows: {
        value: cdktn.listMapperHcl(imagebuilderImagePipelineWorkflowsToHclTerraform, false)(this._workflows.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ImagebuilderImagePipelineWorkflowsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
