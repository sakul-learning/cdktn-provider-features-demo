// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_algorithm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSagemakerAlgorithmConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_algorithm#id DataAwsccSagemakerAlgorithm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput {
}

export function dataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputToTerraform(struct?: DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputToHclTerraform(struct?: DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInput | undefined) {
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
export interface DataAwsccSagemakerAlgorithmInferenceSpecificationContainers {
}

export function dataAwsccSagemakerAlgorithmInferenceSpecificationContainersToTerraform(struct?: DataAwsccSagemakerAlgorithmInferenceSpecificationContainers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerAlgorithmInferenceSpecificationContainersToHclTerraform(struct?: DataAwsccSagemakerAlgorithmInferenceSpecificationContainers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerAlgorithmInferenceSpecificationContainers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerAlgorithmInferenceSpecificationContainers | undefined) {
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

  // is_checkpoint - computed: true, optional: false, required: false
  public get isCheckpoint() {
    return this.getBooleanAttribute('is_checkpoint');
  }

  // model_input - computed: true, optional: false, required: false
  private _modelInput = new DataAwsccSagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference(this, "model_input");
  public get modelInput() {
    return this._modelInput;
  }

  // nearest_model_name - computed: true, optional: false, required: false
  public get nearestModelName() {
    return this.getStringAttribute('nearest_model_name');
  }
}

export class DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference {
    return new DataAwsccSagemakerAlgorithmInferenceSpecificationContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerAlgorithmInferenceSpecification {
}

export function dataAwsccSagemakerAlgorithmInferenceSpecificationToTerraform(struct?: DataAwsccSagemakerAlgorithmInferenceSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerAlgorithmInferenceSpecificationToHclTerraform(struct?: DataAwsccSagemakerAlgorithmInferenceSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerAlgorithmInferenceSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerAlgorithmInferenceSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // containers - computed: true, optional: false, required: false
  private _containers = new DataAwsccSagemakerAlgorithmInferenceSpecificationContainersList(this, "containers", false);
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
export interface DataAwsccSagemakerAlgorithmTags {
}

export function dataAwsccSagemakerAlgorithmTagsToTerraform(struct?: DataAwsccSagemakerAlgorithmTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerAlgorithmTagsToHclTerraform(struct?: DataAwsccSagemakerAlgorithmTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerAlgorithmTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerAlgorithmTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerAlgorithmTags | undefined) {
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

export class DataAwsccSagemakerAlgorithmTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerAlgorithmTagsOutputReference {
    return new DataAwsccSagemakerAlgorithmTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions {
}

export function dataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsToTerraform(struct?: DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsToHclTerraform(struct?: DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitions | undefined) {
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

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }
}

export class DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference {
    return new DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification {
}

export function dataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationToTerraform(struct?: DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationToHclTerraform(struct?: DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification {
}

export function dataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationToTerraform(struct?: DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationToHclTerraform(struct?: DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_value - computed: true, optional: false, required: false
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }

  // min_value - computed: true, optional: false, required: false
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
}
export interface DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification {
}

export function dataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationToTerraform(struct?: DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationToHclTerraform(struct?: DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_value - computed: true, optional: false, required: false
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }

  // min_value - computed: true, optional: false, required: false
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
}
export interface DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange {
}

export function dataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeToTerraform(struct?: DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeToHclTerraform(struct?: DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // categorical_parameter_range_specification - computed: true, optional: false, required: false
  private _categoricalParameterRangeSpecification = new DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference(this, "categorical_parameter_range_specification");
  public get categoricalParameterRangeSpecification() {
    return this._categoricalParameterRangeSpecification;
  }

  // continuous_parameter_range_specification - computed: true, optional: false, required: false
  private _continuousParameterRangeSpecification = new DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference(this, "continuous_parameter_range_specification");
  public get continuousParameterRangeSpecification() {
    return this._continuousParameterRangeSpecification;
  }

  // integer_parameter_range_specification - computed: true, optional: false, required: false
  private _integerParameterRangeSpecification = new DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference(this, "integer_parameter_range_specification");
  public get integerParameterRangeSpecification() {
    return this._integerParameterRangeSpecification;
  }
}
export interface DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters {
}

export function dataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersToTerraform(struct?: DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersToHclTerraform(struct?: DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // is_required - computed: true, optional: false, required: false
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }

  // is_tunable - computed: true, optional: false, required: false
  public get isTunable() {
    return this.getBooleanAttribute('is_tunable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // range - computed: true, optional: false, required: false
  private _range = new DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference {
    return new DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics {
}

export function dataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsToTerraform(struct?: DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsToHclTerraform(struct?: DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference {
    return new DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels {
}

export function dataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsToTerraform(struct?: DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsToHclTerraform(struct?: DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // is_required - computed: true, optional: false, required: false
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // supported_compression_types - computed: true, optional: false, required: false
  public get supportedCompressionTypes() {
    return this.getListAttribute('supported_compression_types');
  }

  // supported_content_types - computed: true, optional: false, required: false
  public get supportedContentTypes() {
    return this.getListAttribute('supported_content_types');
  }

  // supported_input_modes - computed: true, optional: false, required: false
  public get supportedInputModes() {
    return this.getListAttribute('supported_input_modes');
  }
}

export class DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference {
    return new DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerAlgorithmTrainingSpecification {
}

export function dataAwsccSagemakerAlgorithmTrainingSpecificationToTerraform(struct?: DataAwsccSagemakerAlgorithmTrainingSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerAlgorithmTrainingSpecificationToHclTerraform(struct?: DataAwsccSagemakerAlgorithmTrainingSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerAlgorithmTrainingSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerAlgorithmTrainingSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric_definitions - computed: true, optional: false, required: false
  private _metricDefinitions = new DataAwsccSagemakerAlgorithmTrainingSpecificationMetricDefinitionsList(this, "metric_definitions", false);
  public get metricDefinitions() {
    return this._metricDefinitions;
  }

  // supported_hyper_parameters - computed: true, optional: false, required: false
  private _supportedHyperParameters = new DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList(this, "supported_hyper_parameters", false);
  public get supportedHyperParameters() {
    return this._supportedHyperParameters;
  }

  // supported_training_instance_types - computed: true, optional: false, required: false
  public get supportedTrainingInstanceTypes() {
    return this.getListAttribute('supported_training_instance_types');
  }

  // supported_tuning_job_objective_metrics - computed: true, optional: false, required: false
  private _supportedTuningJobObjectiveMetrics = new DataAwsccSagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList(this, "supported_tuning_job_objective_metrics", false);
  public get supportedTuningJobObjectiveMetrics() {
    return this._supportedTuningJobObjectiveMetrics;
  }

  // supports_distributed_training - computed: true, optional: false, required: false
  public get supportsDistributedTraining() {
    return this.getBooleanAttribute('supports_distributed_training');
  }

  // training_channels - computed: true, optional: false, required: false
  private _trainingChannels = new DataAwsccSagemakerAlgorithmTrainingSpecificationTrainingChannelsList(this, "training_channels", false);
  public get trainingChannels() {
    return this._trainingChannels;
  }

  // training_image - computed: true, optional: false, required: false
  public get trainingImage() {
    return this.getStringAttribute('training_image');
  }

  // training_image_digest - computed: true, optional: false, required: false
  public get trainingImageDigest() {
    return this.getStringAttribute('training_image_digest');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_algorithm awscc_sagemaker_algorithm}
*/
export class DataAwsccSagemakerAlgorithm extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_algorithm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSagemakerAlgorithm resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSagemakerAlgorithm to import
  * @param importFromId The id of the existing DataAwsccSagemakerAlgorithm that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_algorithm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSagemakerAlgorithm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_algorithm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_algorithm awscc_sagemaker_algorithm} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSagemakerAlgorithmConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSagemakerAlgorithmConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_algorithm',
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

  // algorithm_arn - computed: true, optional: false, required: false
  public get algorithmArn() {
    return this.getStringAttribute('algorithm_arn');
  }

  // algorithm_description - computed: true, optional: false, required: false
  public get algorithmDescription() {
    return this.getStringAttribute('algorithm_description');
  }

  // algorithm_name - computed: true, optional: false, required: false
  public get algorithmName() {
    return this.getStringAttribute('algorithm_name');
  }

  // certify_for_marketplace - computed: true, optional: false, required: false
  public get certifyForMarketplace() {
    return this.getBooleanAttribute('certify_for_marketplace');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
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
  private _inferenceSpecification = new DataAwsccSagemakerAlgorithmInferenceSpecificationOutputReference(this, "inference_specification");
  public get inferenceSpecification() {
    return this._inferenceSpecification;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccSagemakerAlgorithmTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // training_specification - computed: true, optional: false, required: false
  private _trainingSpecification = new DataAwsccSagemakerAlgorithmTrainingSpecificationOutputReference(this, "training_specification");
  public get trainingSpecification() {
    return this._trainingSpecification;
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
