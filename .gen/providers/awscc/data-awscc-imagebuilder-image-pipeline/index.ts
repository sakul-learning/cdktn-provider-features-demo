// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/imagebuilder_image_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccImagebuilderImagePipelineConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/imagebuilder_image_pipeline#id DataAwsccImagebuilderImagePipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration {
}

export function dataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationToTerraform(struct?: DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationToHclTerraform(struct?: DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_tags - computed: true, optional: false, required: false
  public get containerTags() {
    return this.getListAttribute('container_tags');
  }

  // repository_name - computed: true, optional: false, required: false
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
}
export interface DataAwsccImagebuilderImagePipelineImageScanningConfiguration {
}

export function dataAwsccImagebuilderImagePipelineImageScanningConfigurationToTerraform(struct?: DataAwsccImagebuilderImagePipelineImageScanningConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderImagePipelineImageScanningConfigurationToHclTerraform(struct?: DataAwsccImagebuilderImagePipelineImageScanningConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccImagebuilderImagePipelineImageScanningConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderImagePipelineImageScanningConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ecr_configuration - computed: true, optional: false, required: false
  private _ecrConfiguration = new DataAwsccImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference(this, "ecr_configuration");
  public get ecrConfiguration() {
    return this._ecrConfiguration;
  }

  // image_scanning_enabled - computed: true, optional: false, required: false
  public get imageScanningEnabled() {
    return this.getBooleanAttribute('image_scanning_enabled');
  }
}
export interface DataAwsccImagebuilderImagePipelineImageTestsConfiguration {
}

export function dataAwsccImagebuilderImagePipelineImageTestsConfigurationToTerraform(struct?: DataAwsccImagebuilderImagePipelineImageTestsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderImagePipelineImageTestsConfigurationToHclTerraform(struct?: DataAwsccImagebuilderImagePipelineImageTestsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccImagebuilderImagePipelineImageTestsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderImagePipelineImageTestsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image_tests_enabled - computed: true, optional: false, required: false
  public get imageTestsEnabled() {
    return this.getBooleanAttribute('image_tests_enabled');
  }

  // timeout_minutes - computed: true, optional: false, required: false
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
}
export interface DataAwsccImagebuilderImagePipelineLoggingConfiguration {
}

export function dataAwsccImagebuilderImagePipelineLoggingConfigurationToTerraform(struct?: DataAwsccImagebuilderImagePipelineLoggingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderImagePipelineLoggingConfigurationToHclTerraform(struct?: DataAwsccImagebuilderImagePipelineLoggingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccImagebuilderImagePipelineLoggingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderImagePipelineLoggingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image_log_group_name - computed: true, optional: false, required: false
  public get imageLogGroupName() {
    return this.getStringAttribute('image_log_group_name');
  }

  // pipeline_log_group_name - computed: true, optional: false, required: false
  public get pipelineLogGroupName() {
    return this.getStringAttribute('pipeline_log_group_name');
  }
}
export interface DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicy {
}

export function dataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyToTerraform(struct?: DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyToHclTerraform(struct?: DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failure_count - computed: true, optional: false, required: false
  public get failureCount() {
    return this.getNumberAttribute('failure_count');
  }
}
export interface DataAwsccImagebuilderImagePipelineSchedule {
}

export function dataAwsccImagebuilderImagePipelineScheduleToTerraform(struct?: DataAwsccImagebuilderImagePipelineSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderImagePipelineScheduleToHclTerraform(struct?: DataAwsccImagebuilderImagePipelineSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderImagePipelineScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccImagebuilderImagePipelineSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderImagePipelineSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_disable_policy - computed: true, optional: false, required: false
  private _autoDisablePolicy = new DataAwsccImagebuilderImagePipelineScheduleAutoDisablePolicyOutputReference(this, "auto_disable_policy");
  public get autoDisablePolicy() {
    return this._autoDisablePolicy;
  }

  // pipeline_execution_start_condition - computed: true, optional: false, required: false
  public get pipelineExecutionStartCondition() {
    return this.getStringAttribute('pipeline_execution_start_condition');
  }

  // schedule_expression - computed: true, optional: false, required: false
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
}
export interface DataAwsccImagebuilderImagePipelineWorkflowsParameters {
}

export function dataAwsccImagebuilderImagePipelineWorkflowsParametersToTerraform(struct?: DataAwsccImagebuilderImagePipelineWorkflowsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderImagePipelineWorkflowsParametersToHclTerraform(struct?: DataAwsccImagebuilderImagePipelineWorkflowsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccImagebuilderImagePipelineWorkflowsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderImagePipelineWorkflowsParameters | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getListAttribute('value');
  }
}

export class DataAwsccImagebuilderImagePipelineWorkflowsParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference {
    return new DataAwsccImagebuilderImagePipelineWorkflowsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccImagebuilderImagePipelineWorkflows {
}

export function dataAwsccImagebuilderImagePipelineWorkflowsToTerraform(struct?: DataAwsccImagebuilderImagePipelineWorkflows): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderImagePipelineWorkflowsToHclTerraform(struct?: DataAwsccImagebuilderImagePipelineWorkflows): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderImagePipelineWorkflowsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccImagebuilderImagePipelineWorkflows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderImagePipelineWorkflows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // on_failure - computed: true, optional: false, required: false
  public get onFailure() {
    return this.getStringAttribute('on_failure');
  }

  // parallel_group - computed: true, optional: false, required: false
  public get parallelGroup() {
    return this.getStringAttribute('parallel_group');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataAwsccImagebuilderImagePipelineWorkflowsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // workflow_arn - computed: true, optional: false, required: false
  public get workflowArn() {
    return this.getStringAttribute('workflow_arn');
  }
}

export class DataAwsccImagebuilderImagePipelineWorkflowsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccImagebuilderImagePipelineWorkflowsOutputReference {
    return new DataAwsccImagebuilderImagePipelineWorkflowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/imagebuilder_image_pipeline awscc_imagebuilder_image_pipeline}
*/
export class DataAwsccImagebuilderImagePipeline extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_imagebuilder_image_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccImagebuilderImagePipeline resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccImagebuilderImagePipeline to import
  * @param importFromId The id of the existing DataAwsccImagebuilderImagePipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/imagebuilder_image_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccImagebuilderImagePipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_imagebuilder_image_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/imagebuilder_image_pipeline awscc_imagebuilder_image_pipeline} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccImagebuilderImagePipelineConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccImagebuilderImagePipelineConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // container_recipe_arn - computed: true, optional: false, required: false
  public get containerRecipeArn() {
    return this.getStringAttribute('container_recipe_arn');
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // distribution_configuration_arn - computed: true, optional: false, required: false
  public get distributionConfigurationArn() {
    return this.getStringAttribute('distribution_configuration_arn');
  }

  // enhanced_image_metadata_enabled - computed: true, optional: false, required: false
  public get enhancedImageMetadataEnabled() {
    return this.getBooleanAttribute('enhanced_image_metadata_enabled');
  }

  // execution_role - computed: true, optional: false, required: false
  public get executionRole() {
    return this.getStringAttribute('execution_role');
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

  // image_recipe_arn - computed: true, optional: false, required: false
  public get imageRecipeArn() {
    return this.getStringAttribute('image_recipe_arn');
  }

  // image_scanning_configuration - computed: true, optional: false, required: false
  private _imageScanningConfiguration = new DataAwsccImagebuilderImagePipelineImageScanningConfigurationOutputReference(this, "image_scanning_configuration");
  public get imageScanningConfiguration() {
    return this._imageScanningConfiguration;
  }

  // image_tags - computed: true, optional: false, required: false
  private _imageTags = new cdktn.StringMap(this, "image_tags");
  public get imageTags() {
    return this._imageTags;
  }

  // image_tests_configuration - computed: true, optional: false, required: false
  private _imageTestsConfiguration = new DataAwsccImagebuilderImagePipelineImageTestsConfigurationOutputReference(this, "image_tests_configuration");
  public get imageTestsConfiguration() {
    return this._imageTestsConfiguration;
  }

  // infrastructure_configuration_arn - computed: true, optional: false, required: false
  public get infrastructureConfigurationArn() {
    return this.getStringAttribute('infrastructure_configuration_arn');
  }

  // logging_configuration - computed: true, optional: false, required: false
  private _loggingConfiguration = new DataAwsccImagebuilderImagePipelineLoggingConfigurationOutputReference(this, "logging_configuration");
  public get loggingConfiguration() {
    return this._loggingConfiguration;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataAwsccImagebuilderImagePipelineScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // workflows - computed: true, optional: false, required: false
  private _workflows = new DataAwsccImagebuilderImagePipelineWorkflowsList(this, "workflows", false);
  public get workflows() {
    return this._workflows;
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
