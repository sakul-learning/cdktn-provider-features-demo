// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/sagemaker_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSagemakerModelConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/sagemaker_model#id DataAwsccSagemakerModel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfig {
}

export function dataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigToTerraform(struct?: DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigToHclTerraform(struct?: DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // repository_credentials_provider_arn - computed: true, optional: false, required: false
  public get repositoryCredentialsProviderArn() {
    return this.getStringAttribute('repository_credentials_provider_arn');
  }
}
export interface DataAwsccSagemakerModelContainersImageConfig {
}

export function dataAwsccSagemakerModelContainersImageConfigToTerraform(struct?: DataAwsccSagemakerModelContainersImageConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelContainersImageConfigToHclTerraform(struct?: DataAwsccSagemakerModelContainersImageConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelContainersImageConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelContainersImageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelContainersImageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // repository_access_mode - computed: true, optional: false, required: false
  public get repositoryAccessMode() {
    return this.getStringAttribute('repository_access_mode');
  }

  // repository_auth_config - computed: true, optional: false, required: false
  private _repositoryAuthConfig = new DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference(this, "repository_auth_config");
  public get repositoryAuthConfig() {
    return this._repositoryAuthConfig;
  }
}
export interface DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig {
}

export function dataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigToTerraform(struct?: DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigToHclTerraform(struct?: DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hub_content_arn - computed: true, optional: false, required: false
  public get hubContentArn() {
    return this.getStringAttribute('hub_content_arn');
  }
}
export interface DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig {
}

export function dataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigToTerraform(struct?: DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigToHclTerraform(struct?: DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accept_eula - computed: true, optional: false, required: false
  public get acceptEula() {
    return this.getBooleanAttribute('accept_eula');
  }
}
export interface DataAwsccSagemakerModelContainersModelDataSourceS3DataSource {
}

export function dataAwsccSagemakerModelContainersModelDataSourceS3DataSourceToTerraform(struct?: DataAwsccSagemakerModelContainersModelDataSourceS3DataSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelContainersModelDataSourceS3DataSourceToHclTerraform(struct?: DataAwsccSagemakerModelContainersModelDataSourceS3DataSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelContainersModelDataSourceS3DataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelContainersModelDataSourceS3DataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compression_type - computed: true, optional: false, required: false
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }

  // hub_access_config - computed: true, optional: false, required: false
  private _hubAccessConfig = new DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference(this, "hub_access_config");
  public get hubAccessConfig() {
    return this._hubAccessConfig;
  }

  // model_access_config - computed: true, optional: false, required: false
  private _modelAccessConfig = new DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference(this, "model_access_config");
  public get modelAccessConfig() {
    return this._modelAccessConfig;
  }

  // s3_data_type - computed: true, optional: false, required: false
  public get s3DataType() {
    return this.getStringAttribute('s3_data_type');
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}
export interface DataAwsccSagemakerModelContainersModelDataSource {
}

export function dataAwsccSagemakerModelContainersModelDataSourceToTerraform(struct?: DataAwsccSagemakerModelContainersModelDataSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelContainersModelDataSourceToHclTerraform(struct?: DataAwsccSagemakerModelContainersModelDataSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelContainersModelDataSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelContainersModelDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelContainersModelDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_data_source - computed: true, optional: false, required: false
  private _s3DataSource = new DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference(this, "s3_data_source");
  public get s3DataSource() {
    return this._s3DataSource;
  }
}
export interface DataAwsccSagemakerModelContainersMultiModelConfig {
}

export function dataAwsccSagemakerModelContainersMultiModelConfigToTerraform(struct?: DataAwsccSagemakerModelContainersMultiModelConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelContainersMultiModelConfigToHclTerraform(struct?: DataAwsccSagemakerModelContainersMultiModelConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelContainersMultiModelConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelContainersMultiModelConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelContainersMultiModelConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // model_cache_setting - computed: true, optional: false, required: false
  public get modelCacheSetting() {
    return this.getStringAttribute('model_cache_setting');
  }
}
export interface DataAwsccSagemakerModelContainers {
}

export function dataAwsccSagemakerModelContainersToTerraform(struct?: DataAwsccSagemakerModelContainers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelContainersToHclTerraform(struct?: DataAwsccSagemakerModelContainers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelContainersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerModelContainers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelContainers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_hostname - computed: true, optional: false, required: false
  public get containerHostname() {
    return this.getStringAttribute('container_hostname');
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // image_config - computed: true, optional: false, required: false
  private _imageConfig = new DataAwsccSagemakerModelContainersImageConfigOutputReference(this, "image_config");
  public get imageConfig() {
    return this._imageConfig;
  }

  // inference_specification_name - computed: true, optional: false, required: false
  public get inferenceSpecificationName() {
    return this.getStringAttribute('inference_specification_name');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // model_data_source - computed: true, optional: false, required: false
  private _modelDataSource = new DataAwsccSagemakerModelContainersModelDataSourceOutputReference(this, "model_data_source");
  public get modelDataSource() {
    return this._modelDataSource;
  }

  // model_data_url - computed: true, optional: false, required: false
  public get modelDataUrl() {
    return this.getStringAttribute('model_data_url');
  }

  // model_package_name - computed: true, optional: false, required: false
  public get modelPackageName() {
    return this.getStringAttribute('model_package_name');
  }

  // multi_model_config - computed: true, optional: false, required: false
  private _multiModelConfig = new DataAwsccSagemakerModelContainersMultiModelConfigOutputReference(this, "multi_model_config");
  public get multiModelConfig() {
    return this._multiModelConfig;
  }
}

export class DataAwsccSagemakerModelContainersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerModelContainersOutputReference {
    return new DataAwsccSagemakerModelContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerModelInferenceExecutionConfig {
}

export function dataAwsccSagemakerModelInferenceExecutionConfigToTerraform(struct?: DataAwsccSagemakerModelInferenceExecutionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelInferenceExecutionConfigToHclTerraform(struct?: DataAwsccSagemakerModelInferenceExecutionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelInferenceExecutionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelInferenceExecutionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelInferenceExecutionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}
export interface DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig {
}

export function dataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigToTerraform(struct?: DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigToHclTerraform(struct?: DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // repository_credentials_provider_arn - computed: true, optional: false, required: false
  public get repositoryCredentialsProviderArn() {
    return this.getStringAttribute('repository_credentials_provider_arn');
  }
}
export interface DataAwsccSagemakerModelPrimaryContainerImageConfig {
}

export function dataAwsccSagemakerModelPrimaryContainerImageConfigToTerraform(struct?: DataAwsccSagemakerModelPrimaryContainerImageConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPrimaryContainerImageConfigToHclTerraform(struct?: DataAwsccSagemakerModelPrimaryContainerImageConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPrimaryContainerImageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPrimaryContainerImageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // repository_access_mode - computed: true, optional: false, required: false
  public get repositoryAccessMode() {
    return this.getStringAttribute('repository_access_mode');
  }

  // repository_auth_config - computed: true, optional: false, required: false
  private _repositoryAuthConfig = new DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference(this, "repository_auth_config");
  public get repositoryAuthConfig() {
    return this._repositoryAuthConfig;
  }
}
export interface DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig {
}

export function dataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigToTerraform(struct?: DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigToHclTerraform(struct?: DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hub_content_arn - computed: true, optional: false, required: false
  public get hubContentArn() {
    return this.getStringAttribute('hub_content_arn');
  }
}
export interface DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig {
}

export function dataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigToTerraform(struct?: DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigToHclTerraform(struct?: DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accept_eula - computed: true, optional: false, required: false
  public get acceptEula() {
    return this.getBooleanAttribute('accept_eula');
  }
}
export interface DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSource {
}

export function dataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceToTerraform(struct?: DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceToHclTerraform(struct?: DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compression_type - computed: true, optional: false, required: false
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }

  // hub_access_config - computed: true, optional: false, required: false
  private _hubAccessConfig = new DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference(this, "hub_access_config");
  public get hubAccessConfig() {
    return this._hubAccessConfig;
  }

  // model_access_config - computed: true, optional: false, required: false
  private _modelAccessConfig = new DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference(this, "model_access_config");
  public get modelAccessConfig() {
    return this._modelAccessConfig;
  }

  // s3_data_type - computed: true, optional: false, required: false
  public get s3DataType() {
    return this.getStringAttribute('s3_data_type');
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}
export interface DataAwsccSagemakerModelPrimaryContainerModelDataSource {
}

export function dataAwsccSagemakerModelPrimaryContainerModelDataSourceToTerraform(struct?: DataAwsccSagemakerModelPrimaryContainerModelDataSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPrimaryContainerModelDataSourceToHclTerraform(struct?: DataAwsccSagemakerModelPrimaryContainerModelDataSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPrimaryContainerModelDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPrimaryContainerModelDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_data_source - computed: true, optional: false, required: false
  private _s3DataSource = new DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference(this, "s3_data_source");
  public get s3DataSource() {
    return this._s3DataSource;
  }
}
export interface DataAwsccSagemakerModelPrimaryContainerMultiModelConfig {
}

export function dataAwsccSagemakerModelPrimaryContainerMultiModelConfigToTerraform(struct?: DataAwsccSagemakerModelPrimaryContainerMultiModelConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPrimaryContainerMultiModelConfigToHclTerraform(struct?: DataAwsccSagemakerModelPrimaryContainerMultiModelConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPrimaryContainerMultiModelConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPrimaryContainerMultiModelConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // model_cache_setting - computed: true, optional: false, required: false
  public get modelCacheSetting() {
    return this.getStringAttribute('model_cache_setting');
  }
}
export interface DataAwsccSagemakerModelPrimaryContainer {
}

export function dataAwsccSagemakerModelPrimaryContainerToTerraform(struct?: DataAwsccSagemakerModelPrimaryContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPrimaryContainerToHclTerraform(struct?: DataAwsccSagemakerModelPrimaryContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPrimaryContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPrimaryContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPrimaryContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_hostname - computed: true, optional: false, required: false
  public get containerHostname() {
    return this.getStringAttribute('container_hostname');
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // image_config - computed: true, optional: false, required: false
  private _imageConfig = new DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference(this, "image_config");
  public get imageConfig() {
    return this._imageConfig;
  }

  // inference_specification_name - computed: true, optional: false, required: false
  public get inferenceSpecificationName() {
    return this.getStringAttribute('inference_specification_name');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // model_data_source - computed: true, optional: false, required: false
  private _modelDataSource = new DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference(this, "model_data_source");
  public get modelDataSource() {
    return this._modelDataSource;
  }

  // model_data_url - computed: true, optional: false, required: false
  public get modelDataUrl() {
    return this.getStringAttribute('model_data_url');
  }

  // model_package_name - computed: true, optional: false, required: false
  public get modelPackageName() {
    return this.getStringAttribute('model_package_name');
  }

  // multi_model_config - computed: true, optional: false, required: false
  private _multiModelConfig = new DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference(this, "multi_model_config");
  public get multiModelConfig() {
    return this._multiModelConfig;
  }
}
export interface DataAwsccSagemakerModelTags {
}

export function dataAwsccSagemakerModelTagsToTerraform(struct?: DataAwsccSagemakerModelTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelTagsToHclTerraform(struct?: DataAwsccSagemakerModelTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerModelTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelTags | undefined) {
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

export class DataAwsccSagemakerModelTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerModelTagsOutputReference {
    return new DataAwsccSagemakerModelTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerModelVpcConfig {
}

export function dataAwsccSagemakerModelVpcConfigToTerraform(struct?: DataAwsccSagemakerModelVpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelVpcConfigToHclTerraform(struct?: DataAwsccSagemakerModelVpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelVpcConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelVpcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelVpcConfig | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/sagemaker_model awscc_sagemaker_model}
*/
export class DataAwsccSagemakerModel extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSagemakerModel resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSagemakerModel to import
  * @param importFromId The id of the existing DataAwsccSagemakerModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/sagemaker_model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSagemakerModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/sagemaker_model awscc_sagemaker_model} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSagemakerModelConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSagemakerModelConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_model',
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

  // containers - computed: true, optional: false, required: false
  private _containers = new DataAwsccSagemakerModelContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }

  // enable_network_isolation - computed: true, optional: false, required: false
  public get enableNetworkIsolation() {
    return this.getBooleanAttribute('enable_network_isolation');
  }

  // execution_role_arn - computed: true, optional: false, required: false
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
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

  // inference_execution_config - computed: true, optional: false, required: false
  private _inferenceExecutionConfig = new DataAwsccSagemakerModelInferenceExecutionConfigOutputReference(this, "inference_execution_config");
  public get inferenceExecutionConfig() {
    return this._inferenceExecutionConfig;
  }

  // model_arn - computed: true, optional: false, required: false
  public get modelArn() {
    return this.getStringAttribute('model_arn');
  }

  // model_name - computed: true, optional: false, required: false
  public get modelName() {
    return this.getStringAttribute('model_name');
  }

  // primary_container - computed: true, optional: false, required: false
  private _primaryContainer = new DataAwsccSagemakerModelPrimaryContainerOutputReference(this, "primary_container");
  public get primaryContainer() {
    return this._primaryContainer;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccSagemakerModelTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // vpc_config - computed: true, optional: false, required: false
  private _vpcConfig = new DataAwsccSagemakerModelVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
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
