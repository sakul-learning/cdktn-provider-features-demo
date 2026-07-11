// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/imagebuilder_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccImagebuilderImageConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/imagebuilder_image#id DataAwsccImagebuilderImage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccImagebuilderImageDeletionSettings {
}

export function dataAwsccImagebuilderImageDeletionSettingsToTerraform(struct?: DataAwsccImagebuilderImageDeletionSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderImageDeletionSettingsToHclTerraform(struct?: DataAwsccImagebuilderImageDeletionSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderImageDeletionSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccImagebuilderImageDeletionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderImageDeletionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execution_role - computed: true, optional: false, required: false
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }
}
export interface DataAwsccImagebuilderImageImagePipelineExecutionSettings {
}

export function dataAwsccImagebuilderImageImagePipelineExecutionSettingsToTerraform(struct?: DataAwsccImagebuilderImageImagePipelineExecutionSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderImageImagePipelineExecutionSettingsToHclTerraform(struct?: DataAwsccImagebuilderImageImagePipelineExecutionSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderImageImagePipelineExecutionSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccImagebuilderImageImagePipelineExecutionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderImageImagePipelineExecutionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // on_update - computed: true, optional: false, required: false
  public get onUpdate() {
    return this.getBooleanAttribute('on_update');
  }
}
export interface DataAwsccImagebuilderImageImageScanningConfigurationEcrConfiguration {
}

export function dataAwsccImagebuilderImageImageScanningConfigurationEcrConfigurationToTerraform(struct?: DataAwsccImagebuilderImageImageScanningConfigurationEcrConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderImageImageScanningConfigurationEcrConfigurationToHclTerraform(struct?: DataAwsccImagebuilderImageImageScanningConfigurationEcrConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccImagebuilderImageImageScanningConfigurationEcrConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderImageImageScanningConfigurationEcrConfiguration | undefined) {
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
export interface DataAwsccImagebuilderImageImageScanningConfiguration {
}

export function dataAwsccImagebuilderImageImageScanningConfigurationToTerraform(struct?: DataAwsccImagebuilderImageImageScanningConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderImageImageScanningConfigurationToHclTerraform(struct?: DataAwsccImagebuilderImageImageScanningConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderImageImageScanningConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccImagebuilderImageImageScanningConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderImageImageScanningConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ecr_configuration - computed: true, optional: false, required: false
  private _ecrConfiguration = new DataAwsccImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference(this, "ecr_configuration");
  public get ecrConfiguration() {
    return this._ecrConfiguration;
  }

  // image_scanning_enabled - computed: true, optional: false, required: false
  public get imageScanningEnabled() {
    return this.getBooleanAttribute('image_scanning_enabled');
  }
}
export interface DataAwsccImagebuilderImageImageTestsConfiguration {
}

export function dataAwsccImagebuilderImageImageTestsConfigurationToTerraform(struct?: DataAwsccImagebuilderImageImageTestsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderImageImageTestsConfigurationToHclTerraform(struct?: DataAwsccImagebuilderImageImageTestsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderImageImageTestsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccImagebuilderImageImageTestsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderImageImageTestsConfiguration | undefined) {
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
export interface DataAwsccImagebuilderImageLatestVersion {
}

export function dataAwsccImagebuilderImageLatestVersionToTerraform(struct?: DataAwsccImagebuilderImageLatestVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderImageLatestVersionToHclTerraform(struct?: DataAwsccImagebuilderImageLatestVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderImageLatestVersionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccImagebuilderImageLatestVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderImageLatestVersion | undefined) {
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

  // major - computed: true, optional: false, required: false
  public get major() {
    return this.getStringAttribute('major');
  }

  // minor - computed: true, optional: false, required: false
  public get minor() {
    return this.getStringAttribute('minor');
  }

  // patch - computed: true, optional: false, required: false
  public get patch() {
    return this.getStringAttribute('patch');
  }
}
export interface DataAwsccImagebuilderImageLoggingConfiguration {
}

export function dataAwsccImagebuilderImageLoggingConfigurationToTerraform(struct?: DataAwsccImagebuilderImageLoggingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderImageLoggingConfigurationToHclTerraform(struct?: DataAwsccImagebuilderImageLoggingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderImageLoggingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccImagebuilderImageLoggingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderImageLoggingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
}
export interface DataAwsccImagebuilderImageWorkflowsParameters {
}

export function dataAwsccImagebuilderImageWorkflowsParametersToTerraform(struct?: DataAwsccImagebuilderImageWorkflowsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderImageWorkflowsParametersToHclTerraform(struct?: DataAwsccImagebuilderImageWorkflowsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderImageWorkflowsParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccImagebuilderImageWorkflowsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderImageWorkflowsParameters | undefined) {
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

export class DataAwsccImagebuilderImageWorkflowsParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccImagebuilderImageWorkflowsParametersOutputReference {
    return new DataAwsccImagebuilderImageWorkflowsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccImagebuilderImageWorkflows {
}

export function dataAwsccImagebuilderImageWorkflowsToTerraform(struct?: DataAwsccImagebuilderImageWorkflows): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccImagebuilderImageWorkflowsToHclTerraform(struct?: DataAwsccImagebuilderImageWorkflows): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccImagebuilderImageWorkflowsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccImagebuilderImageWorkflows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccImagebuilderImageWorkflows | undefined) {
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
  private _parameters = new DataAwsccImagebuilderImageWorkflowsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // workflow_arn - computed: true, optional: false, required: false
  public get workflowArn() {
    return this.getStringAttribute('workflow_arn');
  }
}

export class DataAwsccImagebuilderImageWorkflowsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccImagebuilderImageWorkflowsOutputReference {
    return new DataAwsccImagebuilderImageWorkflowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/imagebuilder_image awscc_imagebuilder_image}
*/
export class DataAwsccImagebuilderImage extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_imagebuilder_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccImagebuilderImage resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccImagebuilderImage to import
  * @param importFromId The id of the existing DataAwsccImagebuilderImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/imagebuilder_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccImagebuilderImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_imagebuilder_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/imagebuilder_image awscc_imagebuilder_image} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccImagebuilderImageConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccImagebuilderImageConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_imagebuilder_image',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // container_recipe_arn - computed: true, optional: false, required: false
  public get containerRecipeArn() {
    return this.getStringAttribute('container_recipe_arn');
  }

  // deletion_settings - computed: true, optional: false, required: false
  private _deletionSettings = new DataAwsccImagebuilderImageDeletionSettingsOutputReference(this, "deletion_settings");
  public get deletionSettings() {
    return this._deletionSettings;
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

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // image_pipeline_execution_settings - computed: true, optional: false, required: false
  private _imagePipelineExecutionSettings = new DataAwsccImagebuilderImageImagePipelineExecutionSettingsOutputReference(this, "image_pipeline_execution_settings");
  public get imagePipelineExecutionSettings() {
    return this._imagePipelineExecutionSettings;
  }

  // image_recipe_arn - computed: true, optional: false, required: false
  public get imageRecipeArn() {
    return this.getStringAttribute('image_recipe_arn');
  }

  // image_scanning_configuration - computed: true, optional: false, required: false
  private _imageScanningConfiguration = new DataAwsccImagebuilderImageImageScanningConfigurationOutputReference(this, "image_scanning_configuration");
  public get imageScanningConfiguration() {
    return this._imageScanningConfiguration;
  }

  // image_tests_configuration - computed: true, optional: false, required: false
  private _imageTestsConfiguration = new DataAwsccImagebuilderImageImageTestsConfigurationOutputReference(this, "image_tests_configuration");
  public get imageTestsConfiguration() {
    return this._imageTestsConfiguration;
  }

  // image_uri - computed: true, optional: false, required: false
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }

  // infrastructure_configuration_arn - computed: true, optional: false, required: false
  public get infrastructureConfigurationArn() {
    return this.getStringAttribute('infrastructure_configuration_arn');
  }

  // latest_version - computed: true, optional: false, required: false
  private _latestVersion = new DataAwsccImagebuilderImageLatestVersionOutputReference(this, "latest_version");
  public get latestVersion() {
    return this._latestVersion;
  }

  // logging_configuration - computed: true, optional: false, required: false
  private _loggingConfiguration = new DataAwsccImagebuilderImageLoggingConfigurationOutputReference(this, "logging_configuration");
  public get loggingConfiguration() {
    return this._loggingConfiguration;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // workflows - computed: true, optional: false, required: false
  private _workflows = new DataAwsccImagebuilderImageWorkflowsList(this, "workflows", false);
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
