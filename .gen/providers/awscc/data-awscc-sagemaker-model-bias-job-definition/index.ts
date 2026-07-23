// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/sagemaker_model_bias_job_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSagemakerModelBiasJobDefinitionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/sagemaker_model_bias_job_definition#id DataAwsccSagemakerModelBiasJobDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig {
}

export function dataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigToHclTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig | undefined) {
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
export interface DataAwsccSagemakerModelBiasJobDefinitionJobResources {
}

export function dataAwsccSagemakerModelBiasJobDefinitionJobResourcesToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionJobResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelBiasJobDefinitionJobResourcesToHclTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionJobResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelBiasJobDefinitionJobResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelBiasJobDefinitionJobResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_config - computed: true, optional: false, required: false
  private _clusterConfig = new DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
}
export interface DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification {
}

export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationToHclTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_uri - computed: true, optional: false, required: false
  public get configUri() {
    return this.getStringAttribute('config_uri');
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
}
export interface DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource {
}

export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceToHclTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource | undefined) {
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
export interface DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig {
}

export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigToHclTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig | undefined) {
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
  private _constraintsResource = new DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference(this, "constraints_resource");
  public get constraintsResource() {
    return this._constraintsResource;
  }
}
export interface DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv {
}

export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvToHclTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv | undefined) {
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
export interface DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson {
}

export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonToHclTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson | undefined) {
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
export interface DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat {
}

export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatToHclTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // csv - computed: true, optional: false, required: false
  private _csv = new DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference(this, "csv");
  public get csv() {
    return this._csv;
  }

  // json - computed: true, optional: false, required: false
  private _json = new DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference(this, "json");
  public get json() {
    return this._json;
  }

  // parquet - computed: true, optional: false, required: false
  public get parquet() {
    return this.getBooleanAttribute('parquet');
  }
}
export interface DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput {
}

export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputToHclTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput | undefined) {
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
  private _datasetFormat = new DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference(this, "dataset_format");
  public get datasetFormat() {
    return this._datasetFormat;
  }

  // end_time_offset - computed: true, optional: false, required: false
  public get endTimeOffset() {
    return this.getStringAttribute('end_time_offset');
  }

  // features_attribute - computed: true, optional: false, required: false
  public get featuresAttribute() {
    return this.getStringAttribute('features_attribute');
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
export interface DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput {
}

export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputToHclTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput | undefined) {
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

  // features_attribute - computed: true, optional: false, required: false
  public get featuresAttribute() {
    return this.getStringAttribute('features_attribute');
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
export interface DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input {
}

export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputToHclTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input | undefined) {
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
export interface DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput {
}

export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputToHclTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_transform_input - computed: true, optional: false, required: false
  private _batchTransformInput = new DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference(this, "batch_transform_input");
  public get batchTransformInput() {
    return this._batchTransformInput;
  }

  // endpoint_input - computed: true, optional: false, required: false
  private _endpointInput = new DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference(this, "endpoint_input");
  public get endpointInput() {
    return this._endpointInput;
  }

  // ground_truth_s3_input - computed: true, optional: false, required: false
  private _groundTruthS3Input = new DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference(this, "ground_truth_s3_input");
  public get groundTruthS3Input() {
    return this._groundTruthS3Input;
  }
}
export interface DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output {
}

export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputToHclTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output | undefined) {
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
export interface DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs {
}

export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsToHclTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_output - computed: true, optional: false, required: false
  private _s3Output = new DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference(this, "s3_output");
  public get s3Output() {
    return this._s3Output;
  }
}

export class DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference {
    return new DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig {
}

export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigToHclTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig | undefined) {
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
  private _monitoringOutputs = new DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList(this, "monitoring_outputs", false);
  public get monitoringOutputs() {
    return this._monitoringOutputs;
  }
}
export interface DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig {
}

export function dataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigToHclTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig | undefined) {
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
export interface DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig {
}

export function dataAwsccSagemakerModelBiasJobDefinitionNetworkConfigToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelBiasJobDefinitionNetworkConfigToHclTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig | undefined) {
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
  private _vpcConfig = new DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
}
export interface DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition {
}

export function dataAwsccSagemakerModelBiasJobDefinitionStoppingConditionToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelBiasJobDefinitionStoppingConditionToHclTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition | undefined) {
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
export interface DataAwsccSagemakerModelBiasJobDefinitionTags {
}

export function dataAwsccSagemakerModelBiasJobDefinitionTagsToTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelBiasJobDefinitionTagsToHclTerraform(struct?: DataAwsccSagemakerModelBiasJobDefinitionTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerModelBiasJobDefinitionTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelBiasJobDefinitionTags | undefined) {
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

export class DataAwsccSagemakerModelBiasJobDefinitionTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference {
    return new DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/sagemaker_model_bias_job_definition awscc_sagemaker_model_bias_job_definition}
*/
export class DataAwsccSagemakerModelBiasJobDefinition extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_model_bias_job_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSagemakerModelBiasJobDefinition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSagemakerModelBiasJobDefinition to import
  * @param importFromId The id of the existing DataAwsccSagemakerModelBiasJobDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/sagemaker_model_bias_job_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSagemakerModelBiasJobDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_model_bias_job_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/sagemaker_model_bias_job_definition awscc_sagemaker_model_bias_job_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSagemakerModelBiasJobDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSagemakerModelBiasJobDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_model_bias_job_definition',
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
  private _jobResources = new DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference(this, "job_resources");
  public get jobResources() {
    return this._jobResources;
  }

  // model_bias_app_specification - computed: true, optional: false, required: false
  private _modelBiasAppSpecification = new DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference(this, "model_bias_app_specification");
  public get modelBiasAppSpecification() {
    return this._modelBiasAppSpecification;
  }

  // model_bias_baseline_config - computed: true, optional: false, required: false
  private _modelBiasBaselineConfig = new DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference(this, "model_bias_baseline_config");
  public get modelBiasBaselineConfig() {
    return this._modelBiasBaselineConfig;
  }

  // model_bias_job_input - computed: true, optional: false, required: false
  private _modelBiasJobInput = new DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference(this, "model_bias_job_input");
  public get modelBiasJobInput() {
    return this._modelBiasJobInput;
  }

  // model_bias_job_output_config - computed: true, optional: false, required: false
  private _modelBiasJobOutputConfig = new DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference(this, "model_bias_job_output_config");
  public get modelBiasJobOutputConfig() {
    return this._modelBiasJobOutputConfig;
  }

  // network_config - computed: true, optional: false, required: false
  private _networkConfig = new DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // stopping_condition - computed: true, optional: false, required: false
  private _stoppingCondition = new DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference(this, "stopping_condition");
  public get stoppingCondition() {
    return this._stoppingCondition;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccSagemakerModelBiasJobDefinitionTagsList(this, "tags", false);
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
