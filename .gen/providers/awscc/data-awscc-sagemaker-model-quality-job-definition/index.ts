// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_model_quality_job_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSagemakerModelQualityJobDefinitionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_model_quality_job_definition#id DataAwsccSagemakerModelQualityJobDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfig {
}

export function dataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigToHclTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_count - computed: true, optional: false, required: false
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
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
export interface DataAwsccSagemakerModelQualityJobDefinitionJobResources {
}

export function dataAwsccSagemakerModelQualityJobDefinitionJobResourcesToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionJobResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelQualityJobDefinitionJobResourcesToHclTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionJobResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelQualityJobDefinitionJobResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelQualityJobDefinitionJobResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_config - computed: true, optional: false, required: false
  private _clusterConfig = new DataAwsccSagemakerModelQualityJobDefinitionJobResourcesClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
}
export interface DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecification {
}

export function dataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationToHclTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_arguments - computed: true, optional: false, required: false
  public get containerArguments() {
    return this.getListAttribute('container_arguments');
  }

  // container_entrypoint - computed: true, optional: false, required: false
  public get containerEntrypoint() {
    return this.getListAttribute('container_entrypoint');
  }

  // environment - computed: true, optional: false, required: false
  private _environment = new cdktn.StringMap(this, "environment");
  public get environment() {
    return this._environment;
  }

  // image_uri - computed: true, optional: false, required: false
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }

  // post_analytics_processor_source_uri - computed: true, optional: false, required: false
  public get postAnalyticsProcessorSourceUri() {
    return this.getStringAttribute('post_analytics_processor_source_uri');
  }

  // problem_type - computed: true, optional: false, required: false
  public get problemType() {
    return this.getStringAttribute('problem_type');
  }

  // record_preprocessor_source_uri - computed: true, optional: false, required: false
  public get recordPreprocessorSourceUri() {
    return this.getStringAttribute('record_preprocessor_source_uri');
  }
}
export interface DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource {
}

export function dataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceToHclTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}
export interface DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfig {
}

export function dataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigToHclTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // baselining_job_name - computed: true, optional: false, required: false
  public get baseliningJobName() {
    return this.getStringAttribute('baselining_job_name');
  }

  // constraints_resource - computed: true, optional: false, required: false
  private _constraintsResource = new DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceOutputReference(this, "constraints_resource");
  public get constraintsResource() {
    return this._constraintsResource;
  }
}
export interface DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv {
}

export function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvToHclTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsv | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // header - computed: true, optional: false, required: false
  public get header() {
    return this.getBooleanAttribute('header');
  }
}
export interface DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson {
}

export function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonToHclTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJson | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // line - computed: true, optional: false, required: false
  public get line() {
    return this.getBooleanAttribute('line');
  }
}
export interface DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat {
}

export function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatToHclTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // csv - computed: true, optional: false, required: false
  private _csv = new DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference(this, "csv");
  public get csv() {
    return this._csv;
  }

  // json - computed: true, optional: false, required: false
  private _json = new DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference(this, "json");
  public get json() {
    return this._json;
  }

  // parquet - computed: true, optional: false, required: false
  public get parquet() {
    return this.getBooleanAttribute('parquet');
  }
}
export interface DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput {
}

export function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputToHclTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_captured_destination_s3_uri - computed: true, optional: false, required: false
  public get dataCapturedDestinationS3Uri() {
    return this.getStringAttribute('data_captured_destination_s3_uri');
  }

  // dataset_format - computed: true, optional: false, required: false
  private _datasetFormat = new DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputDatasetFormatOutputReference(this, "dataset_format");
  public get datasetFormat() {
    return this._datasetFormat;
  }

  // end_time_offset - computed: true, optional: false, required: false
  public get endTimeOffset() {
    return this.getStringAttribute('end_time_offset');
  }

  // inference_attribute - computed: true, optional: false, required: false
  public get inferenceAttribute() {
    return this.getStringAttribute('inference_attribute');
  }

  // local_path - computed: true, optional: false, required: false
  public get localPath() {
    return this.getStringAttribute('local_path');
  }

  // probability_attribute - computed: true, optional: false, required: false
  public get probabilityAttribute() {
    return this.getStringAttribute('probability_attribute');
  }

  // probability_threshold_attribute - computed: true, optional: false, required: false
  public get probabilityThresholdAttribute() {
    return this.getNumberAttribute('probability_threshold_attribute');
  }

  // s3_data_distribution_type - computed: true, optional: false, required: false
  public get s3DataDistributionType() {
    return this.getStringAttribute('s3_data_distribution_type');
  }

  // s3_input_mode - computed: true, optional: false, required: false
  public get s3InputMode() {
    return this.getStringAttribute('s3_input_mode');
  }

  // start_time_offset - computed: true, optional: false, required: false
  public get startTimeOffset() {
    return this.getStringAttribute('start_time_offset');
  }
}
export interface DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput {
}

export function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputToHclTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time_offset - computed: true, optional: false, required: false
  public get endTimeOffset() {
    return this.getStringAttribute('end_time_offset');
  }

  // endpoint_name - computed: true, optional: false, required: false
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }

  // inference_attribute - computed: true, optional: false, required: false
  public get inferenceAttribute() {
    return this.getStringAttribute('inference_attribute');
  }

  // local_path - computed: true, optional: false, required: false
  public get localPath() {
    return this.getStringAttribute('local_path');
  }

  // probability_attribute - computed: true, optional: false, required: false
  public get probabilityAttribute() {
    return this.getStringAttribute('probability_attribute');
  }

  // probability_threshold_attribute - computed: true, optional: false, required: false
  public get probabilityThresholdAttribute() {
    return this.getNumberAttribute('probability_threshold_attribute');
  }

  // s3_data_distribution_type - computed: true, optional: false, required: false
  public get s3DataDistributionType() {
    return this.getStringAttribute('s3_data_distribution_type');
  }

  // s3_input_mode - computed: true, optional: false, required: false
  public get s3InputMode() {
    return this.getStringAttribute('s3_input_mode');
  }

  // start_time_offset - computed: true, optional: false, required: false
  public get startTimeOffset() {
    return this.getStringAttribute('start_time_offset');
  }
}
export interface DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input {
}

export function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputToHclTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}
export interface DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInput {
}

export function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputToHclTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_transform_input - computed: true, optional: false, required: false
  private _batchTransformInput = new DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputBatchTransformInputOutputReference(this, "batch_transform_input");
  public get batchTransformInput() {
    return this._batchTransformInput;
  }

  // endpoint_input - computed: true, optional: false, required: false
  private _endpointInput = new DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputOutputReference(this, "endpoint_input");
  public get endpointInput() {
    return this._endpointInput;
  }

  // ground_truth_s3_input - computed: true, optional: false, required: false
  private _groundTruthS3Input = new DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputOutputReference(this, "ground_truth_s3_input");
  public get groundTruthS3Input() {
    return this._groundTruthS3Input;
  }
}
export interface DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output {
}

export function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputToHclTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // local_path - computed: true, optional: false, required: false
  public get localPath() {
    return this.getStringAttribute('local_path');
  }

  // s3_upload_mode - computed: true, optional: false, required: false
  public get s3UploadMode() {
    return this.getStringAttribute('s3_upload_mode');
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}
export interface DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs {
}

export function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsToHclTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_output - computed: true, optional: false, required: false
  private _s3Output = new DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference(this, "s3_output");
  public get s3Output() {
    return this._s3Output;
  }
}

export class DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference {
    return new DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfig {
}

export function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigToHclTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // monitoring_outputs - computed: true, optional: false, required: false
  private _monitoringOutputs = new DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsList(this, "monitoring_outputs", false);
  public get monitoringOutputs() {
    return this._monitoringOutputs;
  }
}
export interface DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfig {
}

export function dataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigToHclTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfig | undefined) {
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
export interface DataAwsccSagemakerModelQualityJobDefinitionNetworkConfig {
}

export function dataAwsccSagemakerModelQualityJobDefinitionNetworkConfigToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionNetworkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelQualityJobDefinitionNetworkConfigToHclTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionNetworkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelQualityJobDefinitionNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelQualityJobDefinitionNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_inter_container_traffic_encryption - computed: true, optional: false, required: false
  public get enableInterContainerTrafficEncryption() {
    return this.getBooleanAttribute('enable_inter_container_traffic_encryption');
  }

  // enable_network_isolation - computed: true, optional: false, required: false
  public get enableNetworkIsolation() {
    return this.getBooleanAttribute('enable_network_isolation');
  }

  // vpc_config - computed: true, optional: false, required: false
  private _vpcConfig = new DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
}
export interface DataAwsccSagemakerModelQualityJobDefinitionStoppingCondition {
}

export function dataAwsccSagemakerModelQualityJobDefinitionStoppingConditionToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionStoppingCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelQualityJobDefinitionStoppingConditionToHclTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionStoppingCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelQualityJobDefinitionStoppingCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelQualityJobDefinitionStoppingCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_runtime_in_seconds - computed: true, optional: false, required: false
  public get maxRuntimeInSeconds() {
    return this.getNumberAttribute('max_runtime_in_seconds');
  }
}
export interface DataAwsccSagemakerModelQualityJobDefinitionTags {
}

export function dataAwsccSagemakerModelQualityJobDefinitionTagsToTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelQualityJobDefinitionTagsToHclTerraform(struct?: DataAwsccSagemakerModelQualityJobDefinitionTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerModelQualityJobDefinitionTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelQualityJobDefinitionTags | undefined) {
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

export class DataAwsccSagemakerModelQualityJobDefinitionTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference {
    return new DataAwsccSagemakerModelQualityJobDefinitionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_model_quality_job_definition awscc_sagemaker_model_quality_job_definition}
*/
export class DataAwsccSagemakerModelQualityJobDefinition extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_model_quality_job_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSagemakerModelQualityJobDefinition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSagemakerModelQualityJobDefinition to import
  * @param importFromId The id of the existing DataAwsccSagemakerModelQualityJobDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_model_quality_job_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSagemakerModelQualityJobDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_model_quality_job_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_model_quality_job_definition awscc_sagemaker_model_quality_job_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSagemakerModelQualityJobDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSagemakerModelQualityJobDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_model_quality_job_definition',
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

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // endpoint_name - computed: true, optional: false, required: false
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
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

  // job_definition_arn - computed: true, optional: false, required: false
  public get jobDefinitionArn() {
    return this.getStringAttribute('job_definition_arn');
  }

  // job_definition_name - computed: true, optional: false, required: false
  public get jobDefinitionName() {
    return this.getStringAttribute('job_definition_name');
  }

  // job_resources - computed: true, optional: false, required: false
  private _jobResources = new DataAwsccSagemakerModelQualityJobDefinitionJobResourcesOutputReference(this, "job_resources");
  public get jobResources() {
    return this._jobResources;
  }

  // model_quality_app_specification - computed: true, optional: false, required: false
  private _modelQualityAppSpecification = new DataAwsccSagemakerModelQualityJobDefinitionModelQualityAppSpecificationOutputReference(this, "model_quality_app_specification");
  public get modelQualityAppSpecification() {
    return this._modelQualityAppSpecification;
  }

  // model_quality_baseline_config - computed: true, optional: false, required: false
  private _modelQualityBaselineConfig = new DataAwsccSagemakerModelQualityJobDefinitionModelQualityBaselineConfigOutputReference(this, "model_quality_baseline_config");
  public get modelQualityBaselineConfig() {
    return this._modelQualityBaselineConfig;
  }

  // model_quality_job_input - computed: true, optional: false, required: false
  private _modelQualityJobInput = new DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobInputOutputReference(this, "model_quality_job_input");
  public get modelQualityJobInput() {
    return this._modelQualityJobInput;
  }

  // model_quality_job_output_config - computed: true, optional: false, required: false
  private _modelQualityJobOutputConfig = new DataAwsccSagemakerModelQualityJobDefinitionModelQualityJobOutputConfigOutputReference(this, "model_quality_job_output_config");
  public get modelQualityJobOutputConfig() {
    return this._modelQualityJobOutputConfig;
  }

  // network_config - computed: true, optional: false, required: false
  private _networkConfig = new DataAwsccSagemakerModelQualityJobDefinitionNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // stopping_condition - computed: true, optional: false, required: false
  private _stoppingCondition = new DataAwsccSagemakerModelQualityJobDefinitionStoppingConditionOutputReference(this, "stopping_condition");
  public get stoppingCondition() {
    return this._stoppingCondition;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccSagemakerModelQualityJobDefinitionTagsList(this, "tags", false);
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
