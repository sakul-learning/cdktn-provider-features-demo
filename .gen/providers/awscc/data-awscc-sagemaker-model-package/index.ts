// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/sagemaker_model_package
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSagemakerModelPackageConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/sagemaker_model_package#id DataAwsccSagemakerModelPackage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceModelAccessConfig {
}

export function dataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceModelAccessConfigToTerraform(struct?: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceModelAccessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceModelAccessConfigToHclTerraform(struct?: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceModelAccessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceModelAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceModelAccessConfig | undefined) {
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
export interface DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSource {
}

export function dataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceToTerraform(struct?: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceToHclTerraform(struct?: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSource | undefined) {
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

  // model_access_config - computed: true, optional: false, required: false
  private _modelAccessConfig = new DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference(this, "model_access_config");
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
export interface DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSource {
}

export function dataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceToTerraform(struct?: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceToHclTerraform(struct?: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_data_source - computed: true, optional: false, required: false
  private _s3DataSource = new DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceOutputReference(this, "s3_data_source");
  public get s3DataSource() {
    return this._s3DataSource;
  }
}
export interface DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelInput {
}

export function dataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelInputToTerraform(struct?: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelInputToHclTerraform(struct?: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_input_config - computed: true, optional: false, required: false
  public get dataInputConfig() {
    return this.getStringAttribute('data_input_config');
  }
}
export interface DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainers {
}

export function dataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersToTerraform(struct?: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersToHclTerraform(struct?: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainers | undefined) {
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
  private _environment = new cdktn.StringMap(this, "environment");
  public get environment() {
    return this._environment;
  }

  // framework - computed: true, optional: false, required: false
  public get framework() {
    return this.getStringAttribute('framework');
  }

  // framework_version - computed: true, optional: false, required: false
  public get frameworkVersion() {
    return this.getStringAttribute('framework_version');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // image_digest - computed: true, optional: false, required: false
  public get imageDigest() {
    return this.getStringAttribute('image_digest');
  }

  // model_data_source - computed: true, optional: false, required: false
  private _modelDataSource = new DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceOutputReference(this, "model_data_source");
  public get modelDataSource() {
    return this._modelDataSource;
  }

  // model_data_url - computed: true, optional: false, required: false
  public get modelDataUrl() {
    return this.getStringAttribute('model_data_url');
  }

  // model_input - computed: true, optional: false, required: false
  private _modelInput = new DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersModelInputOutputReference(this, "model_input");
  public get modelInput() {
    return this._modelInput;
  }

  // nearest_model_name - computed: true, optional: false, required: false
  public get nearestModelName() {
    return this.getStringAttribute('nearest_model_name');
  }
}

export class DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersOutputReference {
    return new DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerModelPackageAdditionalInferenceSpecifications {
}

export function dataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToTerraform(struct?: DataAwsccSagemakerModelPackageAdditionalInferenceSpecifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToHclTerraform(struct?: DataAwsccSagemakerModelPackageAdditionalInferenceSpecifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerModelPackageAdditionalInferenceSpecifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageAdditionalInferenceSpecifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // containers - computed: true, optional: false, required: false
  private _containers = new DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // supported_content_types - computed: true, optional: false, required: false
  public get supportedContentTypes() {
    return this.getListAttribute('supported_content_types');
  }

  // supported_realtime_inference_instance_types - computed: true, optional: false, required: false
  public get supportedRealtimeInferenceInstanceTypes() {
    return this.getListAttribute('supported_realtime_inference_instance_types');
  }

  // supported_response_mime_types - computed: true, optional: false, required: false
  public get supportedResponseMimeTypes() {
    return this.getListAttribute('supported_response_mime_types');
  }

  // supported_transform_instance_types - computed: true, optional: false, required: false
  public get supportedTransformInstanceTypes() {
    return this.getListAttribute('supported_transform_instance_types');
  }
}

export class DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsOutputReference {
    return new DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfig {
}

export function dataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfigToTerraform(struct?: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfigToHclTerraform(struct?: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfig | undefined) {
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
export interface DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSource {
}

export function dataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceToTerraform(struct?: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceToHclTerraform(struct?: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSource | undefined) {
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

  // model_access_config - computed: true, optional: false, required: false
  private _modelAccessConfig = new DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference(this, "model_access_config");
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
export interface DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSource {
}

export function dataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceToTerraform(struct?: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceToHclTerraform(struct?: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_data_source - computed: true, optional: false, required: false
  private _s3DataSource = new DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceOutputReference(this, "s3_data_source");
  public get s3DataSource() {
    return this._s3DataSource;
  }
}
export interface DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelInput {
}

export function dataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelInputToTerraform(struct?: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelInputToHclTerraform(struct?: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_input_config - computed: true, optional: false, required: false
  public get dataInputConfig() {
    return this.getStringAttribute('data_input_config');
  }
}
export interface DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainers {
}

export function dataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersToTerraform(struct?: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersToHclTerraform(struct?: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainers | undefined) {
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
  private _environment = new cdktn.StringMap(this, "environment");
  public get environment() {
    return this._environment;
  }

  // framework - computed: true, optional: false, required: false
  public get framework() {
    return this.getStringAttribute('framework');
  }

  // framework_version - computed: true, optional: false, required: false
  public get frameworkVersion() {
    return this.getStringAttribute('framework_version');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // image_digest - computed: true, optional: false, required: false
  public get imageDigest() {
    return this.getStringAttribute('image_digest');
  }

  // model_data_source - computed: true, optional: false, required: false
  private _modelDataSource = new DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceOutputReference(this, "model_data_source");
  public get modelDataSource() {
    return this._modelDataSource;
  }

  // model_data_url - computed: true, optional: false, required: false
  public get modelDataUrl() {
    return this.getStringAttribute('model_data_url');
  }

  // model_input - computed: true, optional: false, required: false
  private _modelInput = new DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelInputOutputReference(this, "model_input");
  public get modelInput() {
    return this._modelInput;
  }

  // nearest_model_name - computed: true, optional: false, required: false
  public get nearestModelName() {
    return this.getStringAttribute('nearest_model_name');
  }
}

export class DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersOutputReference {
    return new DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAdd {
}

export function dataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddToTerraform(struct?: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAdd): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddToHclTerraform(struct?: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAdd): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAdd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAdd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // containers - computed: true, optional: false, required: false
  private _containers = new DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // supported_content_types - computed: true, optional: false, required: false
  public get supportedContentTypes() {
    return this.getListAttribute('supported_content_types');
  }

  // supported_realtime_inference_instance_types - computed: true, optional: false, required: false
  public get supportedRealtimeInferenceInstanceTypes() {
    return this.getListAttribute('supported_realtime_inference_instance_types');
  }

  // supported_response_mime_types - computed: true, optional: false, required: false
  public get supportedResponseMimeTypes() {
    return this.getListAttribute('supported_response_mime_types');
  }

  // supported_transform_instance_types - computed: true, optional: false, required: false
  public get supportedTransformInstanceTypes() {
    return this.getListAttribute('supported_transform_instance_types');
  }
}

export class DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddOutputReference {
    return new DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerModelPackageDriftCheckBaselinesBiasConfigFile {
}

export function dataAwsccSagemakerModelPackageDriftCheckBaselinesBiasConfigFileToTerraform(struct?: DataAwsccSagemakerModelPackageDriftCheckBaselinesBiasConfigFile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageDriftCheckBaselinesBiasConfigFileToHclTerraform(struct?: DataAwsccSagemakerModelPackageDriftCheckBaselinesBiasConfigFile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageDriftCheckBaselinesBiasConfigFileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageDriftCheckBaselinesBiasConfigFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageDriftCheckBaselinesBiasConfigFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_digest - computed: true, optional: false, required: false
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}
export interface DataAwsccSagemakerModelPackageDriftCheckBaselinesBiasPostTrainingConstraints {
}

export function dataAwsccSagemakerModelPackageDriftCheckBaselinesBiasPostTrainingConstraintsToTerraform(struct?: DataAwsccSagemakerModelPackageDriftCheckBaselinesBiasPostTrainingConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageDriftCheckBaselinesBiasPostTrainingConstraintsToHclTerraform(struct?: DataAwsccSagemakerModelPackageDriftCheckBaselinesBiasPostTrainingConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageDriftCheckBaselinesBiasPostTrainingConstraintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageDriftCheckBaselinesBiasPostTrainingConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageDriftCheckBaselinesBiasPostTrainingConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_digest - computed: true, optional: false, required: false
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}
export interface DataAwsccSagemakerModelPackageDriftCheckBaselinesBiasPreTrainingConstraints {
}

export function dataAwsccSagemakerModelPackageDriftCheckBaselinesBiasPreTrainingConstraintsToTerraform(struct?: DataAwsccSagemakerModelPackageDriftCheckBaselinesBiasPreTrainingConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageDriftCheckBaselinesBiasPreTrainingConstraintsToHclTerraform(struct?: DataAwsccSagemakerModelPackageDriftCheckBaselinesBiasPreTrainingConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageDriftCheckBaselinesBiasPreTrainingConstraintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageDriftCheckBaselinesBiasPreTrainingConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageDriftCheckBaselinesBiasPreTrainingConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_digest - computed: true, optional: false, required: false
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}
export interface DataAwsccSagemakerModelPackageDriftCheckBaselinesBias {
}

export function dataAwsccSagemakerModelPackageDriftCheckBaselinesBiasToTerraform(struct?: DataAwsccSagemakerModelPackageDriftCheckBaselinesBias): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageDriftCheckBaselinesBiasToHclTerraform(struct?: DataAwsccSagemakerModelPackageDriftCheckBaselinesBias): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageDriftCheckBaselinesBiasOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageDriftCheckBaselinesBias | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageDriftCheckBaselinesBias | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_file - computed: true, optional: false, required: false
  private _configFile = new DataAwsccSagemakerModelPackageDriftCheckBaselinesBiasConfigFileOutputReference(this, "config_file");
  public get configFile() {
    return this._configFile;
  }

  // post_training_constraints - computed: true, optional: false, required: false
  private _postTrainingConstraints = new DataAwsccSagemakerModelPackageDriftCheckBaselinesBiasPostTrainingConstraintsOutputReference(this, "post_training_constraints");
  public get postTrainingConstraints() {
    return this._postTrainingConstraints;
  }

  // pre_training_constraints - computed: true, optional: false, required: false
  private _preTrainingConstraints = new DataAwsccSagemakerModelPackageDriftCheckBaselinesBiasPreTrainingConstraintsOutputReference(this, "pre_training_constraints");
  public get preTrainingConstraints() {
    return this._preTrainingConstraints;
  }
}
export interface DataAwsccSagemakerModelPackageDriftCheckBaselinesExplainabilityConfigFile {
}

export function dataAwsccSagemakerModelPackageDriftCheckBaselinesExplainabilityConfigFileToTerraform(struct?: DataAwsccSagemakerModelPackageDriftCheckBaselinesExplainabilityConfigFile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageDriftCheckBaselinesExplainabilityConfigFileToHclTerraform(struct?: DataAwsccSagemakerModelPackageDriftCheckBaselinesExplainabilityConfigFile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageDriftCheckBaselinesExplainabilityConfigFileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageDriftCheckBaselinesExplainabilityConfigFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageDriftCheckBaselinesExplainabilityConfigFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_digest - computed: true, optional: false, required: false
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}
export interface DataAwsccSagemakerModelPackageDriftCheckBaselinesExplainabilityConstraints {
}

export function dataAwsccSagemakerModelPackageDriftCheckBaselinesExplainabilityConstraintsToTerraform(struct?: DataAwsccSagemakerModelPackageDriftCheckBaselinesExplainabilityConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageDriftCheckBaselinesExplainabilityConstraintsToHclTerraform(struct?: DataAwsccSagemakerModelPackageDriftCheckBaselinesExplainabilityConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageDriftCheckBaselinesExplainabilityConstraintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageDriftCheckBaselinesExplainabilityConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageDriftCheckBaselinesExplainabilityConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_digest - computed: true, optional: false, required: false
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}
export interface DataAwsccSagemakerModelPackageDriftCheckBaselinesExplainability {
}

export function dataAwsccSagemakerModelPackageDriftCheckBaselinesExplainabilityToTerraform(struct?: DataAwsccSagemakerModelPackageDriftCheckBaselinesExplainability): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageDriftCheckBaselinesExplainabilityToHclTerraform(struct?: DataAwsccSagemakerModelPackageDriftCheckBaselinesExplainability): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageDriftCheckBaselinesExplainabilityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageDriftCheckBaselinesExplainability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageDriftCheckBaselinesExplainability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_file - computed: true, optional: false, required: false
  private _configFile = new DataAwsccSagemakerModelPackageDriftCheckBaselinesExplainabilityConfigFileOutputReference(this, "config_file");
  public get configFile() {
    return this._configFile;
  }

  // constraints - computed: true, optional: false, required: false
  private _constraints = new DataAwsccSagemakerModelPackageDriftCheckBaselinesExplainabilityConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }
}
export interface DataAwsccSagemakerModelPackageDriftCheckBaselinesModelDataQualityConstraints {
}

export function dataAwsccSagemakerModelPackageDriftCheckBaselinesModelDataQualityConstraintsToTerraform(struct?: DataAwsccSagemakerModelPackageDriftCheckBaselinesModelDataQualityConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageDriftCheckBaselinesModelDataQualityConstraintsToHclTerraform(struct?: DataAwsccSagemakerModelPackageDriftCheckBaselinesModelDataQualityConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageDriftCheckBaselinesModelDataQualityConstraintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageDriftCheckBaselinesModelDataQualityConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageDriftCheckBaselinesModelDataQualityConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_digest - computed: true, optional: false, required: false
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}
export interface DataAwsccSagemakerModelPackageDriftCheckBaselinesModelDataQualityStatistics {
}

export function dataAwsccSagemakerModelPackageDriftCheckBaselinesModelDataQualityStatisticsToTerraform(struct?: DataAwsccSagemakerModelPackageDriftCheckBaselinesModelDataQualityStatistics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageDriftCheckBaselinesModelDataQualityStatisticsToHclTerraform(struct?: DataAwsccSagemakerModelPackageDriftCheckBaselinesModelDataQualityStatistics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageDriftCheckBaselinesModelDataQualityStatisticsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageDriftCheckBaselinesModelDataQualityStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageDriftCheckBaselinesModelDataQualityStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_digest - computed: true, optional: false, required: false
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}
export interface DataAwsccSagemakerModelPackageDriftCheckBaselinesModelDataQuality {
}

export function dataAwsccSagemakerModelPackageDriftCheckBaselinesModelDataQualityToTerraform(struct?: DataAwsccSagemakerModelPackageDriftCheckBaselinesModelDataQuality): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageDriftCheckBaselinesModelDataQualityToHclTerraform(struct?: DataAwsccSagemakerModelPackageDriftCheckBaselinesModelDataQuality): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageDriftCheckBaselinesModelDataQualityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageDriftCheckBaselinesModelDataQuality | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageDriftCheckBaselinesModelDataQuality | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // constraints - computed: true, optional: false, required: false
  private _constraints = new DataAwsccSagemakerModelPackageDriftCheckBaselinesModelDataQualityConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }

  // statistics - computed: true, optional: false, required: false
  private _statistics = new DataAwsccSagemakerModelPackageDriftCheckBaselinesModelDataQualityStatisticsOutputReference(this, "statistics");
  public get statistics() {
    return this._statistics;
  }
}
export interface DataAwsccSagemakerModelPackageDriftCheckBaselinesModelQualityConstraints {
}

export function dataAwsccSagemakerModelPackageDriftCheckBaselinesModelQualityConstraintsToTerraform(struct?: DataAwsccSagemakerModelPackageDriftCheckBaselinesModelQualityConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageDriftCheckBaselinesModelQualityConstraintsToHclTerraform(struct?: DataAwsccSagemakerModelPackageDriftCheckBaselinesModelQualityConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageDriftCheckBaselinesModelQualityConstraintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageDriftCheckBaselinesModelQualityConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageDriftCheckBaselinesModelQualityConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_digest - computed: true, optional: false, required: false
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}
export interface DataAwsccSagemakerModelPackageDriftCheckBaselinesModelQualityStatistics {
}

export function dataAwsccSagemakerModelPackageDriftCheckBaselinesModelQualityStatisticsToTerraform(struct?: DataAwsccSagemakerModelPackageDriftCheckBaselinesModelQualityStatistics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageDriftCheckBaselinesModelQualityStatisticsToHclTerraform(struct?: DataAwsccSagemakerModelPackageDriftCheckBaselinesModelQualityStatistics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageDriftCheckBaselinesModelQualityStatisticsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageDriftCheckBaselinesModelQualityStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageDriftCheckBaselinesModelQualityStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_digest - computed: true, optional: false, required: false
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}
export interface DataAwsccSagemakerModelPackageDriftCheckBaselinesModelQuality {
}

export function dataAwsccSagemakerModelPackageDriftCheckBaselinesModelQualityToTerraform(struct?: DataAwsccSagemakerModelPackageDriftCheckBaselinesModelQuality): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageDriftCheckBaselinesModelQualityToHclTerraform(struct?: DataAwsccSagemakerModelPackageDriftCheckBaselinesModelQuality): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageDriftCheckBaselinesModelQualityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageDriftCheckBaselinesModelQuality | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageDriftCheckBaselinesModelQuality | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // constraints - computed: true, optional: false, required: false
  private _constraints = new DataAwsccSagemakerModelPackageDriftCheckBaselinesModelQualityConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }

  // statistics - computed: true, optional: false, required: false
  private _statistics = new DataAwsccSagemakerModelPackageDriftCheckBaselinesModelQualityStatisticsOutputReference(this, "statistics");
  public get statistics() {
    return this._statistics;
  }
}
export interface DataAwsccSagemakerModelPackageDriftCheckBaselines {
}

export function dataAwsccSagemakerModelPackageDriftCheckBaselinesToTerraform(struct?: DataAwsccSagemakerModelPackageDriftCheckBaselines): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageDriftCheckBaselinesToHclTerraform(struct?: DataAwsccSagemakerModelPackageDriftCheckBaselines): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageDriftCheckBaselinesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageDriftCheckBaselines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageDriftCheckBaselines | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bias - computed: true, optional: false, required: false
  private _bias = new DataAwsccSagemakerModelPackageDriftCheckBaselinesBiasOutputReference(this, "bias");
  public get bias() {
    return this._bias;
  }

  // explainability - computed: true, optional: false, required: false
  private _explainability = new DataAwsccSagemakerModelPackageDriftCheckBaselinesExplainabilityOutputReference(this, "explainability");
  public get explainability() {
    return this._explainability;
  }

  // model_data_quality - computed: true, optional: false, required: false
  private _modelDataQuality = new DataAwsccSagemakerModelPackageDriftCheckBaselinesModelDataQualityOutputReference(this, "model_data_quality");
  public get modelDataQuality() {
    return this._modelDataQuality;
  }

  // model_quality - computed: true, optional: false, required: false
  private _modelQuality = new DataAwsccSagemakerModelPackageDriftCheckBaselinesModelQualityOutputReference(this, "model_quality");
  public get modelQuality() {
    return this._modelQuality;
  }
}
export interface DataAwsccSagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfig {
}

export function dataAwsccSagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigToTerraform(struct?: DataAwsccSagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigToHclTerraform(struct?: DataAwsccSagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfig | undefined) {
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
export interface DataAwsccSagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSource {
}

export function dataAwsccSagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceToTerraform(struct?: DataAwsccSagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceToHclTerraform(struct?: DataAwsccSagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSource | undefined) {
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

  // model_access_config - computed: true, optional: false, required: false
  private _modelAccessConfig = new DataAwsccSagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference(this, "model_access_config");
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
export interface DataAwsccSagemakerModelPackageInferenceSpecificationContainersModelDataSource {
}

export function dataAwsccSagemakerModelPackageInferenceSpecificationContainersModelDataSourceToTerraform(struct?: DataAwsccSagemakerModelPackageInferenceSpecificationContainersModelDataSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageInferenceSpecificationContainersModelDataSourceToHclTerraform(struct?: DataAwsccSagemakerModelPackageInferenceSpecificationContainersModelDataSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageInferenceSpecificationContainersModelDataSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageInferenceSpecificationContainersModelDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageInferenceSpecificationContainersModelDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_data_source - computed: true, optional: false, required: false
  private _s3DataSource = new DataAwsccSagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceOutputReference(this, "s3_data_source");
  public get s3DataSource() {
    return this._s3DataSource;
  }
}
export interface DataAwsccSagemakerModelPackageInferenceSpecificationContainersModelInput {
}

export function dataAwsccSagemakerModelPackageInferenceSpecificationContainersModelInputToTerraform(struct?: DataAwsccSagemakerModelPackageInferenceSpecificationContainersModelInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageInferenceSpecificationContainersModelInputToHclTerraform(struct?: DataAwsccSagemakerModelPackageInferenceSpecificationContainersModelInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageInferenceSpecificationContainersModelInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageInferenceSpecificationContainersModelInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageInferenceSpecificationContainersModelInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_input_config - computed: true, optional: false, required: false
  public get dataInputConfig() {
    return this.getStringAttribute('data_input_config');
  }
}
export interface DataAwsccSagemakerModelPackageInferenceSpecificationContainers {
}

export function dataAwsccSagemakerModelPackageInferenceSpecificationContainersToTerraform(struct?: DataAwsccSagemakerModelPackageInferenceSpecificationContainers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageInferenceSpecificationContainersToHclTerraform(struct?: DataAwsccSagemakerModelPackageInferenceSpecificationContainers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageInferenceSpecificationContainersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerModelPackageInferenceSpecificationContainers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageInferenceSpecificationContainers | undefined) {
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
  private _environment = new cdktn.StringMap(this, "environment");
  public get environment() {
    return this._environment;
  }

  // framework - computed: true, optional: false, required: false
  public get framework() {
    return this.getStringAttribute('framework');
  }

  // framework_version - computed: true, optional: false, required: false
  public get frameworkVersion() {
    return this.getStringAttribute('framework_version');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // image_digest - computed: true, optional: false, required: false
  public get imageDigest() {
    return this.getStringAttribute('image_digest');
  }

  // model_data_source - computed: true, optional: false, required: false
  private _modelDataSource = new DataAwsccSagemakerModelPackageInferenceSpecificationContainersModelDataSourceOutputReference(this, "model_data_source");
  public get modelDataSource() {
    return this._modelDataSource;
  }

  // model_data_url - computed: true, optional: false, required: false
  public get modelDataUrl() {
    return this.getStringAttribute('model_data_url');
  }

  // model_input - computed: true, optional: false, required: false
  private _modelInput = new DataAwsccSagemakerModelPackageInferenceSpecificationContainersModelInputOutputReference(this, "model_input");
  public get modelInput() {
    return this._modelInput;
  }

  // nearest_model_name - computed: true, optional: false, required: false
  public get nearestModelName() {
    return this.getStringAttribute('nearest_model_name');
  }
}

export class DataAwsccSagemakerModelPackageInferenceSpecificationContainersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerModelPackageInferenceSpecificationContainersOutputReference {
    return new DataAwsccSagemakerModelPackageInferenceSpecificationContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerModelPackageInferenceSpecification {
}

export function dataAwsccSagemakerModelPackageInferenceSpecificationToTerraform(struct?: DataAwsccSagemakerModelPackageInferenceSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageInferenceSpecificationToHclTerraform(struct?: DataAwsccSagemakerModelPackageInferenceSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageInferenceSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageInferenceSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageInferenceSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // containers - computed: true, optional: false, required: false
  private _containers = new DataAwsccSagemakerModelPackageInferenceSpecificationContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }

  // supported_content_types - computed: true, optional: false, required: false
  public get supportedContentTypes() {
    return this.getListAttribute('supported_content_types');
  }

  // supported_realtime_inference_instance_types - computed: true, optional: false, required: false
  public get supportedRealtimeInferenceInstanceTypes() {
    return this.getListAttribute('supported_realtime_inference_instance_types');
  }

  // supported_response_mime_types - computed: true, optional: false, required: false
  public get supportedResponseMimeTypes() {
    return this.getListAttribute('supported_response_mime_types');
  }

  // supported_transform_instance_types - computed: true, optional: false, required: false
  public get supportedTransformInstanceTypes() {
    return this.getListAttribute('supported_transform_instance_types');
  }
}
export interface DataAwsccSagemakerModelPackageMetadataProperties {
}

export function dataAwsccSagemakerModelPackageMetadataPropertiesToTerraform(struct?: DataAwsccSagemakerModelPackageMetadataProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageMetadataPropertiesToHclTerraform(struct?: DataAwsccSagemakerModelPackageMetadataProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageMetadataPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageMetadataProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageMetadataProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // commit_id - computed: true, optional: false, required: false
  public get commitId() {
    return this.getStringAttribute('commit_id');
  }

  // generated_by - computed: true, optional: false, required: false
  public get generatedBy() {
    return this.getStringAttribute('generated_by');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // repository - computed: true, optional: false, required: false
  public get repository() {
    return this.getStringAttribute('repository');
  }
}
export interface DataAwsccSagemakerModelPackageModelCard {
}

export function dataAwsccSagemakerModelPackageModelCardToTerraform(struct?: DataAwsccSagemakerModelPackageModelCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageModelCardToHclTerraform(struct?: DataAwsccSagemakerModelPackageModelCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageModelCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageModelCard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageModelCard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // model_card_content - computed: true, optional: false, required: false
  public get modelCardContent() {
    return this.getStringAttribute('model_card_content');
  }

  // model_card_status - computed: true, optional: false, required: false
  public get modelCardStatus() {
    return this.getStringAttribute('model_card_status');
  }
}
export interface DataAwsccSagemakerModelPackageModelMetricsBiasPostTrainingReport {
}

export function dataAwsccSagemakerModelPackageModelMetricsBiasPostTrainingReportToTerraform(struct?: DataAwsccSagemakerModelPackageModelMetricsBiasPostTrainingReport): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageModelMetricsBiasPostTrainingReportToHclTerraform(struct?: DataAwsccSagemakerModelPackageModelMetricsBiasPostTrainingReport): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageModelMetricsBiasPostTrainingReportOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageModelMetricsBiasPostTrainingReport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageModelMetricsBiasPostTrainingReport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_digest - computed: true, optional: false, required: false
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}
export interface DataAwsccSagemakerModelPackageModelMetricsBiasPreTrainingReport {
}

export function dataAwsccSagemakerModelPackageModelMetricsBiasPreTrainingReportToTerraform(struct?: DataAwsccSagemakerModelPackageModelMetricsBiasPreTrainingReport): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageModelMetricsBiasPreTrainingReportToHclTerraform(struct?: DataAwsccSagemakerModelPackageModelMetricsBiasPreTrainingReport): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageModelMetricsBiasPreTrainingReportOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageModelMetricsBiasPreTrainingReport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageModelMetricsBiasPreTrainingReport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_digest - computed: true, optional: false, required: false
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}
export interface DataAwsccSagemakerModelPackageModelMetricsBiasReport {
}

export function dataAwsccSagemakerModelPackageModelMetricsBiasReportToTerraform(struct?: DataAwsccSagemakerModelPackageModelMetricsBiasReport): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageModelMetricsBiasReportToHclTerraform(struct?: DataAwsccSagemakerModelPackageModelMetricsBiasReport): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageModelMetricsBiasReportOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageModelMetricsBiasReport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageModelMetricsBiasReport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_digest - computed: true, optional: false, required: false
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}
export interface DataAwsccSagemakerModelPackageModelMetricsBias {
}

export function dataAwsccSagemakerModelPackageModelMetricsBiasToTerraform(struct?: DataAwsccSagemakerModelPackageModelMetricsBias): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageModelMetricsBiasToHclTerraform(struct?: DataAwsccSagemakerModelPackageModelMetricsBias): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageModelMetricsBiasOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageModelMetricsBias | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageModelMetricsBias | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // post_training_report - computed: true, optional: false, required: false
  private _postTrainingReport = new DataAwsccSagemakerModelPackageModelMetricsBiasPostTrainingReportOutputReference(this, "post_training_report");
  public get postTrainingReport() {
    return this._postTrainingReport;
  }

  // pre_training_report - computed: true, optional: false, required: false
  private _preTrainingReport = new DataAwsccSagemakerModelPackageModelMetricsBiasPreTrainingReportOutputReference(this, "pre_training_report");
  public get preTrainingReport() {
    return this._preTrainingReport;
  }

  // report - computed: true, optional: false, required: false
  private _report = new DataAwsccSagemakerModelPackageModelMetricsBiasReportOutputReference(this, "report");
  public get report() {
    return this._report;
  }
}
export interface DataAwsccSagemakerModelPackageModelMetricsExplainabilityReport {
}

export function dataAwsccSagemakerModelPackageModelMetricsExplainabilityReportToTerraform(struct?: DataAwsccSagemakerModelPackageModelMetricsExplainabilityReport): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageModelMetricsExplainabilityReportToHclTerraform(struct?: DataAwsccSagemakerModelPackageModelMetricsExplainabilityReport): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageModelMetricsExplainabilityReportOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageModelMetricsExplainabilityReport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageModelMetricsExplainabilityReport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_digest - computed: true, optional: false, required: false
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}
export interface DataAwsccSagemakerModelPackageModelMetricsExplainability {
}

export function dataAwsccSagemakerModelPackageModelMetricsExplainabilityToTerraform(struct?: DataAwsccSagemakerModelPackageModelMetricsExplainability): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageModelMetricsExplainabilityToHclTerraform(struct?: DataAwsccSagemakerModelPackageModelMetricsExplainability): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageModelMetricsExplainabilityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageModelMetricsExplainability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageModelMetricsExplainability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // report - computed: true, optional: false, required: false
  private _report = new DataAwsccSagemakerModelPackageModelMetricsExplainabilityReportOutputReference(this, "report");
  public get report() {
    return this._report;
  }
}
export interface DataAwsccSagemakerModelPackageModelMetricsModelDataQualityConstraints {
}

export function dataAwsccSagemakerModelPackageModelMetricsModelDataQualityConstraintsToTerraform(struct?: DataAwsccSagemakerModelPackageModelMetricsModelDataQualityConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageModelMetricsModelDataQualityConstraintsToHclTerraform(struct?: DataAwsccSagemakerModelPackageModelMetricsModelDataQualityConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageModelMetricsModelDataQualityConstraintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageModelMetricsModelDataQualityConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageModelMetricsModelDataQualityConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_digest - computed: true, optional: false, required: false
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}
export interface DataAwsccSagemakerModelPackageModelMetricsModelDataQualityStatistics {
}

export function dataAwsccSagemakerModelPackageModelMetricsModelDataQualityStatisticsToTerraform(struct?: DataAwsccSagemakerModelPackageModelMetricsModelDataQualityStatistics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageModelMetricsModelDataQualityStatisticsToHclTerraform(struct?: DataAwsccSagemakerModelPackageModelMetricsModelDataQualityStatistics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageModelMetricsModelDataQualityStatisticsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageModelMetricsModelDataQualityStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageModelMetricsModelDataQualityStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_digest - computed: true, optional: false, required: false
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}
export interface DataAwsccSagemakerModelPackageModelMetricsModelDataQuality {
}

export function dataAwsccSagemakerModelPackageModelMetricsModelDataQualityToTerraform(struct?: DataAwsccSagemakerModelPackageModelMetricsModelDataQuality): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageModelMetricsModelDataQualityToHclTerraform(struct?: DataAwsccSagemakerModelPackageModelMetricsModelDataQuality): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageModelMetricsModelDataQualityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageModelMetricsModelDataQuality | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageModelMetricsModelDataQuality | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // constraints - computed: true, optional: false, required: false
  private _constraints = new DataAwsccSagemakerModelPackageModelMetricsModelDataQualityConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }

  // statistics - computed: true, optional: false, required: false
  private _statistics = new DataAwsccSagemakerModelPackageModelMetricsModelDataQualityStatisticsOutputReference(this, "statistics");
  public get statistics() {
    return this._statistics;
  }
}
export interface DataAwsccSagemakerModelPackageModelMetricsModelQualityConstraints {
}

export function dataAwsccSagemakerModelPackageModelMetricsModelQualityConstraintsToTerraform(struct?: DataAwsccSagemakerModelPackageModelMetricsModelQualityConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageModelMetricsModelQualityConstraintsToHclTerraform(struct?: DataAwsccSagemakerModelPackageModelMetricsModelQualityConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageModelMetricsModelQualityConstraintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageModelMetricsModelQualityConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageModelMetricsModelQualityConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_digest - computed: true, optional: false, required: false
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}
export interface DataAwsccSagemakerModelPackageModelMetricsModelQualityStatistics {
}

export function dataAwsccSagemakerModelPackageModelMetricsModelQualityStatisticsToTerraform(struct?: DataAwsccSagemakerModelPackageModelMetricsModelQualityStatistics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageModelMetricsModelQualityStatisticsToHclTerraform(struct?: DataAwsccSagemakerModelPackageModelMetricsModelQualityStatistics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageModelMetricsModelQualityStatisticsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageModelMetricsModelQualityStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageModelMetricsModelQualityStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_digest - computed: true, optional: false, required: false
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // s3_uri - computed: true, optional: false, required: false
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
}
export interface DataAwsccSagemakerModelPackageModelMetricsModelQuality {
}

export function dataAwsccSagemakerModelPackageModelMetricsModelQualityToTerraform(struct?: DataAwsccSagemakerModelPackageModelMetricsModelQuality): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageModelMetricsModelQualityToHclTerraform(struct?: DataAwsccSagemakerModelPackageModelMetricsModelQuality): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageModelMetricsModelQualityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageModelMetricsModelQuality | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageModelMetricsModelQuality | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // constraints - computed: true, optional: false, required: false
  private _constraints = new DataAwsccSagemakerModelPackageModelMetricsModelQualityConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }

  // statistics - computed: true, optional: false, required: false
  private _statistics = new DataAwsccSagemakerModelPackageModelMetricsModelQualityStatisticsOutputReference(this, "statistics");
  public get statistics() {
    return this._statistics;
  }
}
export interface DataAwsccSagemakerModelPackageModelMetrics {
}

export function dataAwsccSagemakerModelPackageModelMetricsToTerraform(struct?: DataAwsccSagemakerModelPackageModelMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageModelMetricsToHclTerraform(struct?: DataAwsccSagemakerModelPackageModelMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageModelMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageModelMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageModelMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bias - computed: true, optional: false, required: false
  private _bias = new DataAwsccSagemakerModelPackageModelMetricsBiasOutputReference(this, "bias");
  public get bias() {
    return this._bias;
  }

  // explainability - computed: true, optional: false, required: false
  private _explainability = new DataAwsccSagemakerModelPackageModelMetricsExplainabilityOutputReference(this, "explainability");
  public get explainability() {
    return this._explainability;
  }

  // model_data_quality - computed: true, optional: false, required: false
  private _modelDataQuality = new DataAwsccSagemakerModelPackageModelMetricsModelDataQualityOutputReference(this, "model_data_quality");
  public get modelDataQuality() {
    return this._modelDataQuality;
  }

  // model_quality - computed: true, optional: false, required: false
  private _modelQuality = new DataAwsccSagemakerModelPackageModelMetricsModelQualityOutputReference(this, "model_quality");
  public get modelQuality() {
    return this._modelQuality;
  }
}
export interface DataAwsccSagemakerModelPackageModelPackageStatusDetailsValidationStatuses {
}

export function dataAwsccSagemakerModelPackageModelPackageStatusDetailsValidationStatusesToTerraform(struct?: DataAwsccSagemakerModelPackageModelPackageStatusDetailsValidationStatuses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageModelPackageStatusDetailsValidationStatusesToHclTerraform(struct?: DataAwsccSagemakerModelPackageModelPackageStatusDetailsValidationStatuses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageModelPackageStatusDetailsValidationStatusesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerModelPackageModelPackageStatusDetailsValidationStatuses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageModelPackageStatusDetailsValidationStatuses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAwsccSagemakerModelPackageModelPackageStatusDetailsValidationStatusesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerModelPackageModelPackageStatusDetailsValidationStatusesOutputReference {
    return new DataAwsccSagemakerModelPackageModelPackageStatusDetailsValidationStatusesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerModelPackageModelPackageStatusDetails {
}

export function dataAwsccSagemakerModelPackageModelPackageStatusDetailsToTerraform(struct?: DataAwsccSagemakerModelPackageModelPackageStatusDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageModelPackageStatusDetailsToHclTerraform(struct?: DataAwsccSagemakerModelPackageModelPackageStatusDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageModelPackageStatusDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageModelPackageStatusDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageModelPackageStatusDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // validation_statuses - computed: true, optional: false, required: false
  private _validationStatuses = new DataAwsccSagemakerModelPackageModelPackageStatusDetailsValidationStatusesList(this, "validation_statuses", false);
  public get validationStatuses() {
    return this._validationStatuses;
  }
}
export interface DataAwsccSagemakerModelPackageSecurityConfig {
}

export function dataAwsccSagemakerModelPackageSecurityConfigToTerraform(struct?: DataAwsccSagemakerModelPackageSecurityConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageSecurityConfigToHclTerraform(struct?: DataAwsccSagemakerModelPackageSecurityConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageSecurityConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageSecurityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageSecurityConfig | undefined) {
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
}
export interface DataAwsccSagemakerModelPackageSourceAlgorithmSpecificationSourceAlgorithms {
}

export function dataAwsccSagemakerModelPackageSourceAlgorithmSpecificationSourceAlgorithmsToTerraform(struct?: DataAwsccSagemakerModelPackageSourceAlgorithmSpecificationSourceAlgorithms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageSourceAlgorithmSpecificationSourceAlgorithmsToHclTerraform(struct?: DataAwsccSagemakerModelPackageSourceAlgorithmSpecificationSourceAlgorithms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageSourceAlgorithmSpecificationSourceAlgorithmsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerModelPackageSourceAlgorithmSpecificationSourceAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageSourceAlgorithmSpecificationSourceAlgorithms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm_name - computed: true, optional: false, required: false
  public get algorithmName() {
    return this.getStringAttribute('algorithm_name');
  }

  // model_data_url - computed: true, optional: false, required: false
  public get modelDataUrl() {
    return this.getStringAttribute('model_data_url');
  }
}

export class DataAwsccSagemakerModelPackageSourceAlgorithmSpecificationSourceAlgorithmsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerModelPackageSourceAlgorithmSpecificationSourceAlgorithmsOutputReference {
    return new DataAwsccSagemakerModelPackageSourceAlgorithmSpecificationSourceAlgorithmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerModelPackageSourceAlgorithmSpecification {
}

export function dataAwsccSagemakerModelPackageSourceAlgorithmSpecificationToTerraform(struct?: DataAwsccSagemakerModelPackageSourceAlgorithmSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageSourceAlgorithmSpecificationToHclTerraform(struct?: DataAwsccSagemakerModelPackageSourceAlgorithmSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageSourceAlgorithmSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageSourceAlgorithmSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageSourceAlgorithmSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_algorithms - computed: true, optional: false, required: false
  private _sourceAlgorithms = new DataAwsccSagemakerModelPackageSourceAlgorithmSpecificationSourceAlgorithmsList(this, "source_algorithms", false);
  public get sourceAlgorithms() {
    return this._sourceAlgorithms;
  }
}
export interface DataAwsccSagemakerModelPackageTags {
}

export function dataAwsccSagemakerModelPackageTagsToTerraform(struct?: DataAwsccSagemakerModelPackageTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageTagsToHclTerraform(struct?: DataAwsccSagemakerModelPackageTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerModelPackageTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageTags | undefined) {
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

export class DataAwsccSagemakerModelPackageTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerModelPackageTagsOutputReference {
    return new DataAwsccSagemakerModelPackageTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSource {
}

export function dataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSourceToTerraform(struct?: DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSourceToHclTerraform(struct?: DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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
export interface DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSource {
}

export function dataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceToTerraform(struct?: DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceToHclTerraform(struct?: DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_data_source - computed: true, optional: false, required: false
  private _s3DataSource = new DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSourceOutputReference(this, "s3_data_source");
  public get s3DataSource() {
    return this._s3DataSource;
  }
}
export interface DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInput {
}

export function dataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputToTerraform(struct?: DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputToHclTerraform(struct?: DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInput | undefined) {
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

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // data_source - computed: true, optional: false, required: false
  private _dataSource = new DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }

  // split_type - computed: true, optional: false, required: false
  public get splitType() {
    return this.getStringAttribute('split_type');
  }
}
export interface DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutput {
}

export function dataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutputToTerraform(struct?: DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutputToHclTerraform(struct?: DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accept - computed: true, optional: false, required: false
  public get accept() {
    return this.getStringAttribute('accept');
  }

  // assemble_with - computed: true, optional: false, required: false
  public get assembleWith() {
    return this.getStringAttribute('assemble_with');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // s3_output_path - computed: true, optional: false, required: false
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
}
export interface DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformResources {
}

export function dataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformResourcesToTerraform(struct?: DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformResourcesToHclTerraform(struct?: DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformResourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformResources | undefined) {
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
}
export interface DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinition {
}

export function dataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionToTerraform(struct?: DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionToHclTerraform(struct?: DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_strategy - computed: true, optional: false, required: false
  public get batchStrategy() {
    return this.getStringAttribute('batch_strategy');
  }

  // environment - computed: true, optional: false, required: false
  private _environment = new cdktn.StringMap(this, "environment");
  public get environment() {
    return this._environment;
  }

  // max_concurrent_transforms - computed: true, optional: false, required: false
  public get maxConcurrentTransforms() {
    return this.getNumberAttribute('max_concurrent_transforms');
  }

  // max_payload_in_mb - computed: true, optional: false, required: false
  public get maxPayloadInMb() {
    return this.getNumberAttribute('max_payload_in_mb');
  }

  // transform_input - computed: true, optional: false, required: false
  private _transformInput = new DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputOutputReference(this, "transform_input");
  public get transformInput() {
    return this._transformInput;
  }

  // transform_output - computed: true, optional: false, required: false
  private _transformOutput = new DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutputOutputReference(this, "transform_output");
  public get transformOutput() {
    return this._transformOutput;
  }

  // transform_resources - computed: true, optional: false, required: false
  private _transformResources = new DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformResourcesOutputReference(this, "transform_resources");
  public get transformResources() {
    return this._transformResources;
  }
}
export interface DataAwsccSagemakerModelPackageValidationSpecificationValidationProfiles {
}

export function dataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesToTerraform(struct?: DataAwsccSagemakerModelPackageValidationSpecificationValidationProfiles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesToHclTerraform(struct?: DataAwsccSagemakerModelPackageValidationSpecificationValidationProfiles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerModelPackageValidationSpecificationValidationProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageValidationSpecificationValidationProfiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // profile_name - computed: true, optional: false, required: false
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }

  // transform_job_definition - computed: true, optional: false, required: false
  private _transformJobDefinition = new DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionOutputReference(this, "transform_job_definition");
  public get transformJobDefinition() {
    return this._transformJobDefinition;
  }
}

export class DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesOutputReference {
    return new DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerModelPackageValidationSpecification {
}

export function dataAwsccSagemakerModelPackageValidationSpecificationToTerraform(struct?: DataAwsccSagemakerModelPackageValidationSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerModelPackageValidationSpecificationToHclTerraform(struct?: DataAwsccSagemakerModelPackageValidationSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerModelPackageValidationSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerModelPackageValidationSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerModelPackageValidationSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // validation_profiles - computed: true, optional: false, required: false
  private _validationProfiles = new DataAwsccSagemakerModelPackageValidationSpecificationValidationProfilesList(this, "validation_profiles", false);
  public get validationProfiles() {
    return this._validationProfiles;
  }

  // validation_role - computed: true, optional: false, required: false
  public get validationRole() {
    return this.getStringAttribute('validation_role');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/sagemaker_model_package awscc_sagemaker_model_package}
*/
export class DataAwsccSagemakerModelPackage extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_model_package";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSagemakerModelPackage resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSagemakerModelPackage to import
  * @param importFromId The id of the existing DataAwsccSagemakerModelPackage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/sagemaker_model_package#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSagemakerModelPackage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_model_package", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/sagemaker_model_package awscc_sagemaker_model_package} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSagemakerModelPackageConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSagemakerModelPackageConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_model_package',
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

  // additional_inference_specifications - computed: true, optional: false, required: false
  private _additionalInferenceSpecifications = new DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsList(this, "additional_inference_specifications", false);
  public get additionalInferenceSpecifications() {
    return this._additionalInferenceSpecifications;
  }

  // additional_inference_specifications_to_add - computed: true, optional: false, required: false
  private _additionalInferenceSpecificationsToAdd = new DataAwsccSagemakerModelPackageAdditionalInferenceSpecificationsToAddList(this, "additional_inference_specifications_to_add", false);
  public get additionalInferenceSpecificationsToAdd() {
    return this._additionalInferenceSpecificationsToAdd;
  }

  // approval_description - computed: true, optional: false, required: false
  public get approvalDescription() {
    return this.getStringAttribute('approval_description');
  }

  // certify_for_marketplace - computed: true, optional: false, required: false
  public get certifyForMarketplace() {
    return this.getBooleanAttribute('certify_for_marketplace');
  }

  // client_token - computed: true, optional: false, required: false
  public get clientToken() {
    return this.getStringAttribute('client_token');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // customer_metadata_properties - computed: true, optional: false, required: false
  private _customerMetadataProperties = new cdktn.StringMap(this, "customer_metadata_properties");
  public get customerMetadataProperties() {
    return this._customerMetadataProperties;
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // drift_check_baselines - computed: true, optional: false, required: false
  private _driftCheckBaselines = new DataAwsccSagemakerModelPackageDriftCheckBaselinesOutputReference(this, "drift_check_baselines");
  public get driftCheckBaselines() {
    return this._driftCheckBaselines;
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

  // inference_specification - computed: true, optional: false, required: false
  private _inferenceSpecification = new DataAwsccSagemakerModelPackageInferenceSpecificationOutputReference(this, "inference_specification");
  public get inferenceSpecification() {
    return this._inferenceSpecification;
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // metadata_properties - computed: true, optional: false, required: false
  private _metadataProperties = new DataAwsccSagemakerModelPackageMetadataPropertiesOutputReference(this, "metadata_properties");
  public get metadataProperties() {
    return this._metadataProperties;
  }

  // model_approval_status - computed: true, optional: false, required: false
  public get modelApprovalStatus() {
    return this.getStringAttribute('model_approval_status');
  }

  // model_card - computed: true, optional: false, required: false
  private _modelCard = new DataAwsccSagemakerModelPackageModelCardOutputReference(this, "model_card");
  public get modelCard() {
    return this._modelCard;
  }

  // model_metrics - computed: true, optional: false, required: false
  private _modelMetrics = new DataAwsccSagemakerModelPackageModelMetricsOutputReference(this, "model_metrics");
  public get modelMetrics() {
    return this._modelMetrics;
  }

  // model_package_arn - computed: true, optional: false, required: false
  public get modelPackageArn() {
    return this.getStringAttribute('model_package_arn');
  }

  // model_package_description - computed: true, optional: false, required: false
  public get modelPackageDescription() {
    return this.getStringAttribute('model_package_description');
  }

  // model_package_group_name - computed: true, optional: false, required: false
  public get modelPackageGroupName() {
    return this.getStringAttribute('model_package_group_name');
  }

  // model_package_name - computed: true, optional: false, required: false
  public get modelPackageName() {
    return this.getStringAttribute('model_package_name');
  }

  // model_package_status - computed: true, optional: false, required: false
  public get modelPackageStatus() {
    return this.getStringAttribute('model_package_status');
  }

  // model_package_status_details - computed: true, optional: false, required: false
  private _modelPackageStatusDetails = new DataAwsccSagemakerModelPackageModelPackageStatusDetailsOutputReference(this, "model_package_status_details");
  public get modelPackageStatusDetails() {
    return this._modelPackageStatusDetails;
  }

  // model_package_version - computed: true, optional: false, required: false
  public get modelPackageVersion() {
    return this.getNumberAttribute('model_package_version');
  }

  // sample_payload_url - computed: true, optional: false, required: false
  public get samplePayloadUrl() {
    return this.getStringAttribute('sample_payload_url');
  }

  // security_config - computed: true, optional: false, required: false
  private _securityConfig = new DataAwsccSagemakerModelPackageSecurityConfigOutputReference(this, "security_config");
  public get securityConfig() {
    return this._securityConfig;
  }

  // skip_model_validation - computed: true, optional: false, required: false
  public get skipModelValidation() {
    return this.getStringAttribute('skip_model_validation');
  }

  // source_algorithm_specification - computed: true, optional: false, required: false
  private _sourceAlgorithmSpecification = new DataAwsccSagemakerModelPackageSourceAlgorithmSpecificationOutputReference(this, "source_algorithm_specification");
  public get sourceAlgorithmSpecification() {
    return this._sourceAlgorithmSpecification;
  }

  // source_uri - computed: true, optional: false, required: false
  public get sourceUri() {
    return this.getStringAttribute('source_uri');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccSagemakerModelPackageTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // task - computed: true, optional: false, required: false
  public get task() {
    return this.getStringAttribute('task');
  }

  // validation_specification - computed: true, optional: false, required: false
  private _validationSpecification = new DataAwsccSagemakerModelPackageValidationSpecificationOutputReference(this, "validation_specification");
  public get validationSpecification() {
    return this._validationSpecification;
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
