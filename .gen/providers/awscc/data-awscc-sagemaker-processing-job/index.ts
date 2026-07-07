// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/sagemaker_processing_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSagemakerProcessingJobConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/sagemaker_processing_job#id DataAwsccSagemakerProcessingJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSagemakerProcessingJobAppSpecification {
}

export function dataAwsccSagemakerProcessingJobAppSpecificationToTerraform(struct?: DataAwsccSagemakerProcessingJobAppSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerProcessingJobAppSpecificationToHclTerraform(struct?: DataAwsccSagemakerProcessingJobAppSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerProcessingJobAppSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerProcessingJobAppSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerProcessingJobAppSpecification | undefined) {
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

  // image_uri - computed: true, optional: false, required: false
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
}
export interface DataAwsccSagemakerProcessingJobExperimentConfig {
}

export function dataAwsccSagemakerProcessingJobExperimentConfigToTerraform(struct?: DataAwsccSagemakerProcessingJobExperimentConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerProcessingJobExperimentConfigToHclTerraform(struct?: DataAwsccSagemakerProcessingJobExperimentConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerProcessingJobExperimentConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerProcessingJobExperimentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerProcessingJobExperimentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // experiment_name - computed: true, optional: false, required: false
  public get experimentName() {
    return this.getStringAttribute('experiment_name');
  }

  // run_name - computed: true, optional: false, required: false
  public get runName() {
    return this.getStringAttribute('run_name');
  }

  // trial_component_display_name - computed: true, optional: false, required: false
  public get trialComponentDisplayName() {
    return this.getStringAttribute('trial_component_display_name');
  }

  // trial_name - computed: true, optional: false, required: false
  public get trialName() {
    return this.getStringAttribute('trial_name');
  }
}
export interface DataAwsccSagemakerProcessingJobNetworkConfigVpcConfig {
}

export function dataAwsccSagemakerProcessingJobNetworkConfigVpcConfigToTerraform(struct?: DataAwsccSagemakerProcessingJobNetworkConfigVpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerProcessingJobNetworkConfigVpcConfigToHclTerraform(struct?: DataAwsccSagemakerProcessingJobNetworkConfigVpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerProcessingJobNetworkConfigVpcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerProcessingJobNetworkConfigVpcConfig | undefined) {
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
export interface DataAwsccSagemakerProcessingJobNetworkConfig {
}

export function dataAwsccSagemakerProcessingJobNetworkConfigToTerraform(struct?: DataAwsccSagemakerProcessingJobNetworkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerProcessingJobNetworkConfigToHclTerraform(struct?: DataAwsccSagemakerProcessingJobNetworkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerProcessingJobNetworkConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerProcessingJobNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerProcessingJobNetworkConfig | undefined) {
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
  private _vpcConfig = new DataAwsccSagemakerProcessingJobNetworkConfigVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
}
export interface DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition {
}

export function dataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionToTerraform(struct?: DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionToHclTerraform(struct?: DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog - computed: true, optional: false, required: false
  public get catalog() {
    return this.getStringAttribute('catalog');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // output_compression - computed: true, optional: false, required: false
  public get outputCompression() {
    return this.getStringAttribute('output_compression');
  }

  // output_format - computed: true, optional: false, required: false
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }

  // output_s3_uri - computed: true, optional: false, required: false
  public get outputS3Uri() {
    return this.getStringAttribute('output_s3_uri');
  }

  // query_string - computed: true, optional: false, required: false
  public get queryString() {
    return this.getStringAttribute('query_string');
  }

  // work_group - computed: true, optional: false, required: false
  public get workGroup() {
    return this.getStringAttribute('work_group');
  }
}
export interface DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition {
}

export function dataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionToTerraform(struct?: DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionToHclTerraform(struct?: DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_role_arn - computed: true, optional: false, required: false
  public get clusterRoleArn() {
    return this.getStringAttribute('cluster_role_arn');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // db_user - computed: true, optional: false, required: false
  public get dbUser() {
    return this.getStringAttribute('db_user');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // output_compression - computed: true, optional: false, required: false
  public get outputCompression() {
    return this.getStringAttribute('output_compression');
  }

  // output_format - computed: true, optional: false, required: false
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }

  // output_s3_uri - computed: true, optional: false, required: false
  public get outputS3Uri() {
    return this.getStringAttribute('output_s3_uri');
  }

  // query_string - computed: true, optional: false, required: false
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
}
export interface DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinition {
}

export function dataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionToTerraform(struct?: DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionToHclTerraform(struct?: DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // athena_dataset_definition - computed: true, optional: false, required: false
  private _athenaDatasetDefinition = new DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionAthenaDatasetDefinitionOutputReference(this, "athena_dataset_definition");
  public get athenaDatasetDefinition() {
    return this._athenaDatasetDefinition;
  }

  // data_distribution_type - computed: true, optional: false, required: false
  public get dataDistributionType() {
    return this.getStringAttribute('data_distribution_type');
  }

  // input_mode - computed: true, optional: false, required: false
  public get inputMode() {
    return this.getStringAttribute('input_mode');
  }

  // local_path - computed: true, optional: false, required: false
  public get localPath() {
    return this.getStringAttribute('local_path');
  }

  // redshift_dataset_definition - computed: true, optional: false, required: false
  private _redshiftDatasetDefinition = new DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionRedshiftDatasetDefinitionOutputReference(this, "redshift_dataset_definition");
  public get redshiftDatasetDefinition() {
    return this._redshiftDatasetDefinition;
  }
}
export interface DataAwsccSagemakerProcessingJobProcessingInputsS3Input {
}

export function dataAwsccSagemakerProcessingJobProcessingInputsS3InputToTerraform(struct?: DataAwsccSagemakerProcessingJobProcessingInputsS3Input): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerProcessingJobProcessingInputsS3InputToHclTerraform(struct?: DataAwsccSagemakerProcessingJobProcessingInputsS3Input): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerProcessingJobProcessingInputsS3Input | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerProcessingJobProcessingInputsS3Input | undefined) {
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

  // s3_compression_type - computed: true, optional: false, required: false
  public get s3CompressionType() {
    return this.getStringAttribute('s3_compression_type');
  }

  // s3_data_distribution_type - computed: true, optional: false, required: false
  public get s3DataDistributionType() {
    return this.getStringAttribute('s3_data_distribution_type');
  }

  // s3_data_type - computed: true, optional: false, required: false
  public get s3DataType() {
    return this.getStringAttribute('s3_data_type');
  }

  // s3_input_mode - computed: true, optional: false, required: false
  public get s3InputMode() {
    return this.getStringAttribute('s3_input_mode');
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}
export interface DataAwsccSagemakerProcessingJobProcessingInputs {
}

export function dataAwsccSagemakerProcessingJobProcessingInputsToTerraform(struct?: DataAwsccSagemakerProcessingJobProcessingInputs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerProcessingJobProcessingInputsToHclTerraform(struct?: DataAwsccSagemakerProcessingJobProcessingInputs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerProcessingJobProcessingInputsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerProcessingJobProcessingInputs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerProcessingJobProcessingInputs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_managed - computed: true, optional: false, required: false
  public get appManaged() {
    return this.getBooleanAttribute('app_managed');
  }

  // dataset_definition - computed: true, optional: false, required: false
  private _datasetDefinition = new DataAwsccSagemakerProcessingJobProcessingInputsDatasetDefinitionOutputReference(this, "dataset_definition");
  public get datasetDefinition() {
    return this._datasetDefinition;
  }

  // input_name - computed: true, optional: false, required: false
  public get inputName() {
    return this.getStringAttribute('input_name');
  }

  // s3_input - computed: true, optional: false, required: false
  private _s3Input = new DataAwsccSagemakerProcessingJobProcessingInputsS3InputOutputReference(this, "s3_input");
  public get s3Input() {
    return this._s3Input;
  }
}

export class DataAwsccSagemakerProcessingJobProcessingInputsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerProcessingJobProcessingInputsOutputReference {
    return new DataAwsccSagemakerProcessingJobProcessingInputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput {
}

export function dataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputToTerraform(struct?: DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputToHclTerraform(struct?: DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // feature_group_name - computed: true, optional: false, required: false
  public get featureGroupName() {
    return this.getStringAttribute('feature_group_name');
  }
}
export interface DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3Output {
}

export function dataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputToTerraform(struct?: DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3Output): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputToHclTerraform(struct?: DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3Output): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3Output | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3Output | undefined) {
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
export interface DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputs {
}

export function dataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsToTerraform(struct?: DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsToHclTerraform(struct?: DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_managed - computed: true, optional: false, required: false
  public get appManaged() {
    return this.getBooleanAttribute('app_managed');
  }

  // feature_store_output - computed: true, optional: false, required: false
  private _featureStoreOutput = new DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsFeatureStoreOutputOutputReference(this, "feature_store_output");
  public get featureStoreOutput() {
    return this._featureStoreOutput;
  }

  // output_name - computed: true, optional: false, required: false
  public get outputName() {
    return this.getStringAttribute('output_name');
  }

  // s3_output - computed: true, optional: false, required: false
  private _s3Output = new DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsS3OutputOutputReference(this, "s3_output");
  public get s3Output() {
    return this._s3Output;
  }
}

export class DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference {
    return new DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerProcessingJobProcessingOutputConfig {
}

export function dataAwsccSagemakerProcessingJobProcessingOutputConfigToTerraform(struct?: DataAwsccSagemakerProcessingJobProcessingOutputConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerProcessingJobProcessingOutputConfigToHclTerraform(struct?: DataAwsccSagemakerProcessingJobProcessingOutputConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerProcessingJobProcessingOutputConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerProcessingJobProcessingOutputConfig | undefined) {
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

  // outputs - computed: true, optional: false, required: false
  private _outputs = new DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputsList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }
}
export interface DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfig {
}

export function dataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigToTerraform(struct?: DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigToHclTerraform(struct?: DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfig | undefined) {
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
export interface DataAwsccSagemakerProcessingJobProcessingResources {
}

export function dataAwsccSagemakerProcessingJobProcessingResourcesToTerraform(struct?: DataAwsccSagemakerProcessingJobProcessingResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerProcessingJobProcessingResourcesToHclTerraform(struct?: DataAwsccSagemakerProcessingJobProcessingResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerProcessingJobProcessingResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerProcessingJobProcessingResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_config - computed: true, optional: false, required: false
  private _clusterConfig = new DataAwsccSagemakerProcessingJobProcessingResourcesClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
}
export interface DataAwsccSagemakerProcessingJobStoppingCondition {
}

export function dataAwsccSagemakerProcessingJobStoppingConditionToTerraform(struct?: DataAwsccSagemakerProcessingJobStoppingCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerProcessingJobStoppingConditionToHclTerraform(struct?: DataAwsccSagemakerProcessingJobStoppingCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerProcessingJobStoppingConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerProcessingJobStoppingCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerProcessingJobStoppingCondition | undefined) {
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
export interface DataAwsccSagemakerProcessingJobTags {
}

export function dataAwsccSagemakerProcessingJobTagsToTerraform(struct?: DataAwsccSagemakerProcessingJobTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerProcessingJobTagsToHclTerraform(struct?: DataAwsccSagemakerProcessingJobTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerProcessingJobTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerProcessingJobTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerProcessingJobTags | undefined) {
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

export class DataAwsccSagemakerProcessingJobTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerProcessingJobTagsOutputReference {
    return new DataAwsccSagemakerProcessingJobTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/sagemaker_processing_job awscc_sagemaker_processing_job}
*/
export class DataAwsccSagemakerProcessingJob extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_processing_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSagemakerProcessingJob resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSagemakerProcessingJob to import
  * @param importFromId The id of the existing DataAwsccSagemakerProcessingJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/sagemaker_processing_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSagemakerProcessingJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_processing_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/sagemaker_processing_job awscc_sagemaker_processing_job} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSagemakerProcessingJobConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSagemakerProcessingJobConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_specification - computed: true, optional: false, required: false
  private _appSpecification = new DataAwsccSagemakerProcessingJobAppSpecificationOutputReference(this, "app_specification");
  public get appSpecification() {
    return this._appSpecification;
  }

  // auto_ml_job_arn - computed: true, optional: false, required: false
  public get autoMlJobArn() {
    return this.getStringAttribute('auto_ml_job_arn');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // environment - computed: true, optional: false, required: false
  private _environment = new cdktn.StringMap(this, "environment");
  public get environment() {
    return this._environment;
  }

  // exit_message - computed: true, optional: false, required: false
  public get exitMessage() {
    return this.getStringAttribute('exit_message');
  }

  // experiment_config - computed: true, optional: false, required: false
  private _experimentConfig = new DataAwsccSagemakerProcessingJobExperimentConfigOutputReference(this, "experiment_config");
  public get experimentConfig() {
    return this._experimentConfig;
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
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

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // monitoring_schedule_arn - computed: true, optional: false, required: false
  public get monitoringScheduleArn() {
    return this.getStringAttribute('monitoring_schedule_arn');
  }

  // network_config - computed: true, optional: false, required: false
  private _networkConfig = new DataAwsccSagemakerProcessingJobNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }

  // processing_end_time - computed: true, optional: false, required: false
  public get processingEndTime() {
    return this.getStringAttribute('processing_end_time');
  }

  // processing_inputs - computed: true, optional: false, required: false
  private _processingInputs = new DataAwsccSagemakerProcessingJobProcessingInputsList(this, "processing_inputs", false);
  public get processingInputs() {
    return this._processingInputs;
  }

  // processing_job_arn - computed: true, optional: false, required: false
  public get processingJobArn() {
    return this.getStringAttribute('processing_job_arn');
  }

  // processing_job_name - computed: true, optional: false, required: false
  public get processingJobName() {
    return this.getStringAttribute('processing_job_name');
  }

  // processing_job_status - computed: true, optional: false, required: false
  public get processingJobStatus() {
    return this.getStringAttribute('processing_job_status');
  }

  // processing_output_config - computed: true, optional: false, required: false
  private _processingOutputConfig = new DataAwsccSagemakerProcessingJobProcessingOutputConfigOutputReference(this, "processing_output_config");
  public get processingOutputConfig() {
    return this._processingOutputConfig;
  }

  // processing_resources - computed: true, optional: false, required: false
  private _processingResources = new DataAwsccSagemakerProcessingJobProcessingResourcesOutputReference(this, "processing_resources");
  public get processingResources() {
    return this._processingResources;
  }

  // processing_start_time - computed: true, optional: false, required: false
  public get processingStartTime() {
    return this.getStringAttribute('processing_start_time');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // stopping_condition - computed: true, optional: false, required: false
  private _stoppingCondition = new DataAwsccSagemakerProcessingJobStoppingConditionOutputReference(this, "stopping_condition");
  public get stoppingCondition() {
    return this._stoppingCondition;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccSagemakerProcessingJobTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
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
