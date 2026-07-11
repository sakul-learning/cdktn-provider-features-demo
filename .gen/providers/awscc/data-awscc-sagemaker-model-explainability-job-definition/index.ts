// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_model_explainability_job_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSagemakerModelExplainabilityJobDefinitionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_model_explainability_job_definition#id DataAwsccSagemakerModelExplainabilityJobDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig {
}

export function dataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigToHclTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig | undefined) {
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
export interface DataAwsccSagemakerModelExplainabilityJobDefinitionJobResources {
}

export function dataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionJobResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesToHclTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionJobResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelExplainabilityJobDefinitionJobResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelExplainabilityJobDefinitionJobResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_config - computed: true, optional: false, required: false
  private _clusterConfig = new DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
}
export interface DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification {
}

export function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationToHclTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification | undefined) {
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
export interface DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource {
}

export function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceToHclTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource | undefined) {
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
export interface DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig {
}

export function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigToHclTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig | undefined) {
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
  private _constraintsResource = new DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceOutputReference(this, "constraints_resource");
  public get constraintsResource() {
    return this._constraintsResource;
  }
}
export interface DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv {
}

export function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvToHclTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsv | undefined) {
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
export interface DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson {
}

export function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonToHclTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJson | undefined) {
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
export interface DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat {
}

export function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatToHclTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // csv - computed: true, optional: false, required: false
  private _csv = new DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatCsvOutputReference(this, "csv");
  public get csv() {
    return this._csv;
  }

  // json - computed: true, optional: false, required: false
  private _json = new DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatJsonOutputReference(this, "json");
  public get json() {
    return this._json;
  }

  // parquet - computed: true, optional: false, required: false
  public get parquet() {
    return this.getBooleanAttribute('parquet');
  }
}
export interface DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput {
}

export function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputToHclTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInput | undefined) {
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
  private _datasetFormat = new DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputDatasetFormatOutputReference(this, "dataset_format");
  public get datasetFormat() {
    return this._datasetFormat;
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

  // s3_data_distribution_type - computed: true, optional: false, required: false
  public get s3DataDistributionType() {
    return this.getStringAttribute('s3_data_distribution_type');
  }

  // s3_input_mode - computed: true, optional: false, required: false
  public get s3InputMode() {
    return this.getStringAttribute('s3_input_mode');
  }
}
export interface DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput {
}

export function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputToHclTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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

  // s3_data_distribution_type - computed: true, optional: false, required: false
  public get s3DataDistributionType() {
    return this.getStringAttribute('s3_data_distribution_type');
  }

  // s3_input_mode - computed: true, optional: false, required: false
  public get s3InputMode() {
    return this.getStringAttribute('s3_input_mode');
  }
}
export interface DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput {
}

export function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputToHclTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_transform_input - computed: true, optional: false, required: false
  private _batchTransformInput = new DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputBatchTransformInputOutputReference(this, "batch_transform_input");
  public get batchTransformInput() {
    return this._batchTransformInput;
  }

  // endpoint_input - computed: true, optional: false, required: false
  private _endpointInput = new DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputOutputReference(this, "endpoint_input");
  public get endpointInput() {
    return this._endpointInput;
  }
}
export interface DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output {
}

export function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputToHclTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output | undefined) {
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
export interface DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs {
}

export function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsToHclTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_output - computed: true, optional: false, required: false
  private _s3Output = new DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputOutputReference(this, "s3_output");
  public get s3Output() {
    return this._s3Output;
  }
}

export class DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference {
    return new DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig {
}

export function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigToHclTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig | undefined) {
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
  private _monitoringOutputs = new DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsList(this, "monitoring_outputs", false);
  public get monitoringOutputs() {
    return this._monitoringOutputs;
  }
}
export interface DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig {
}

export function dataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigToHclTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig | undefined) {
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
export interface DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig {
}

export function dataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigToHclTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfig | undefined) {
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
  private _vpcConfig = new DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
}
export interface DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition {
}

export function dataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionToHclTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingCondition | undefined) {
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
export interface DataAwsccSagemakerModelExplainabilityJobDefinitionTags {
}

export function dataAwsccSagemakerModelExplainabilityJobDefinitionTagsToTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelExplainabilityJobDefinitionTagsToHclTerraform(struct?: DataAwsccSagemakerModelExplainabilityJobDefinitionTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerModelExplainabilityJobDefinitionTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelExplainabilityJobDefinitionTags | undefined) {
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

export class DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference {
    return new DataAwsccSagemakerModelExplainabilityJobDefinitionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_model_explainability_job_definition awscc_sagemaker_model_explainability_job_definition}
*/
export class DataAwsccSagemakerModelExplainabilityJobDefinition extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_model_explainability_job_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSagemakerModelExplainabilityJobDefinition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSagemakerModelExplainabilityJobDefinition to import
  * @param importFromId The id of the existing DataAwsccSagemakerModelExplainabilityJobDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_model_explainability_job_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSagemakerModelExplainabilityJobDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_model_explainability_job_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_model_explainability_job_definition awscc_sagemaker_model_explainability_job_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSagemakerModelExplainabilityJobDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSagemakerModelExplainabilityJobDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_model_explainability_job_definition',
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
  private _jobResources = new DataAwsccSagemakerModelExplainabilityJobDefinitionJobResourcesOutputReference(this, "job_resources");
  public get jobResources() {
    return this._jobResources;
  }

  // model_explainability_app_specification - computed: true, optional: false, required: false
  private _modelExplainabilityAppSpecification = new DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationOutputReference(this, "model_explainability_app_specification");
  public get modelExplainabilityAppSpecification() {
    return this._modelExplainabilityAppSpecification;
  }

  // model_explainability_baseline_config - computed: true, optional: false, required: false
  private _modelExplainabilityBaselineConfig = new DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigOutputReference(this, "model_explainability_baseline_config");
  public get modelExplainabilityBaselineConfig() {
    return this._modelExplainabilityBaselineConfig;
  }

  // model_explainability_job_input - computed: true, optional: false, required: false
  private _modelExplainabilityJobInput = new DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputOutputReference(this, "model_explainability_job_input");
  public get modelExplainabilityJobInput() {
    return this._modelExplainabilityJobInput;
  }

  // model_explainability_job_output_config - computed: true, optional: false, required: false
  private _modelExplainabilityJobOutputConfig = new DataAwsccSagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigOutputReference(this, "model_explainability_job_output_config");
  public get modelExplainabilityJobOutputConfig() {
    return this._modelExplainabilityJobOutputConfig;
  }

  // network_config - computed: true, optional: false, required: false
  private _networkConfig = new DataAwsccSagemakerModelExplainabilityJobDefinitionNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // stopping_condition - computed: true, optional: false, required: false
  private _stoppingCondition = new DataAwsccSagemakerModelExplainabilityJobDefinitionStoppingConditionOutputReference(this, "stopping_condition");
  public get stoppingCondition() {
    return this._stoppingCondition;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccSagemakerModelExplainabilityJobDefinitionTagsList(this, "tags", false);
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
