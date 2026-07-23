// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SagemakerAlgorithmConfig extends cdktn.TerraformMetaArguments {
  /**
  * A description of the algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#algorithm_description SagemakerAlgorithm#algorithm_description}
  */
  readonly algorithmDescription?: string;
  /**
  * The name of the algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#algorithm_name SagemakerAlgorithm#algorithm_name}
  */
  readonly algorithmName: string;
  /**
  * Whether to certify the algorithm so that it can be listed in AWS Marketplace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#certify_for_marketplace SagemakerAlgorithm#certify_for_marketplace}
  */
  readonly certifyForMarketplace?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#inference_specification SagemakerAlgorithm#inference_specification}
  */
  readonly inferenceSpecification?: SagemakerAlgorithmInferenceSpecification;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#tags SagemakerAlgorithm#tags}
  */
  readonly tags?: SagemakerAlgorithmTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#training_specification SagemakerAlgorithm#training_specification}
  */
  readonly trainingSpecification: SagemakerAlgorithmTrainingSpecification;
}
export interface SagemakerAlgorithmInferenceSpecificationContainersModelInput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#data_input_config SagemakerAlgorithm#data_input_config}
  */
  readonly dataInputConfig?: string;
}

export function sagemakerAlgorithmInferenceSpecificationContainersModelInputToTerraform(struct?: SagemakerAlgorithmInferenceSpecificationContainersModelInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_input_config: cdktn.stringToTerraform(struct!.dataInputConfig),
  }
}


export function sagemakerAlgorithmInferenceSpecificationContainersModelInputToHclTerraform(struct?: SagemakerAlgorithmInferenceSpecificationContainersModelInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_input_config: {
      value: cdktn.stringToHclTerraform(struct!.dataInputConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerAlgorithmInferenceSpecificationContainersModelInput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataInputConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataInputConfig = this._dataInputConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmInferenceSpecificationContainersModelInput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataInputConfig = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataInputConfig = value.dataInputConfig;
    }
  }

  // data_input_config - computed: true, optional: true, required: false
  private _dataInputConfig?: string; 
  public get dataInputConfig() {
    return this.getStringAttribute('data_input_config');
  }
  public set dataInputConfig(value: string) {
    this._dataInputConfig = value;
  }
  public resetDataInputConfig() {
    this._dataInputConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInputConfigInput() {
    return this._dataInputConfig;
  }
}
export interface SagemakerAlgorithmInferenceSpecificationContainers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#container_hostname SagemakerAlgorithm#container_hostname}
  */
  readonly containerHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#environment SagemakerAlgorithm#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#framework SagemakerAlgorithm#framework}
  */
  readonly framework?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#framework_version SagemakerAlgorithm#framework_version}
  */
  readonly frameworkVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#image SagemakerAlgorithm#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#image_digest SagemakerAlgorithm#image_digest}
  */
  readonly imageDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#is_checkpoint SagemakerAlgorithm#is_checkpoint}
  */
  readonly isCheckpoint?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#model_input SagemakerAlgorithm#model_input}
  */
  readonly modelInput?: SagemakerAlgorithmInferenceSpecificationContainersModelInput;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#nearest_model_name SagemakerAlgorithm#nearest_model_name}
  */
  readonly nearestModelName?: string;
}

export function sagemakerAlgorithmInferenceSpecificationContainersToTerraform(struct?: SagemakerAlgorithmInferenceSpecificationContainers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_hostname: cdktn.stringToTerraform(struct!.containerHostname),
    environment: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environment),
    framework: cdktn.stringToTerraform(struct!.framework),
    framework_version: cdktn.stringToTerraform(struct!.frameworkVersion),
    image: cdktn.stringToTerraform(struct!.image),
    image_digest: cdktn.stringToTerraform(struct!.imageDigest),
    is_checkpoint: cdktn.booleanToTerraform(struct!.isCheckpoint),
    model_input: sagemakerAlgorithmInferenceSpecificationContainersModelInputToTerraform(struct!.modelInput),
    nearest_model_name: cdktn.stringToTerraform(struct!.nearestModelName),
  }
}


export function sagemakerAlgorithmInferenceSpecificationContainersToHclTerraform(struct?: SagemakerAlgorithmInferenceSpecificationContainers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_hostname: {
      value: cdktn.stringToHclTerraform(struct!.containerHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    framework: {
      value: cdktn.stringToHclTerraform(struct!.framework),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    framework_version: {
      value: cdktn.stringToHclTerraform(struct!.frameworkVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_digest: {
      value: cdktn.stringToHclTerraform(struct!.imageDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_checkpoint: {
      value: cdktn.booleanToHclTerraform(struct!.isCheckpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    model_input: {
      value: sagemakerAlgorithmInferenceSpecificationContainersModelInputToHclTerraform(struct!.modelInput),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerAlgorithmInferenceSpecificationContainersModelInput",
    },
    nearest_model_name: {
      value: cdktn.stringToHclTerraform(struct!.nearestModelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmInferenceSpecificationContainersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmInferenceSpecificationContainers | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerHostname = this._containerHostname;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._framework !== undefined) {
      hasAnyValues = true;
      internalValueResult.framework = this._framework;
    }
    if (this._frameworkVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameworkVersion = this._frameworkVersion;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imageDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageDigest = this._imageDigest;
    }
    if (this._isCheckpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCheckpoint = this._isCheckpoint;
    }
    if (this._modelInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelInput = this._modelInput?.internalValue;
    }
    if (this._nearestModelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nearestModelName = this._nearestModelName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmInferenceSpecificationContainers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerHostname = undefined;
      this._environment = undefined;
      this._framework = undefined;
      this._frameworkVersion = undefined;
      this._image = undefined;
      this._imageDigest = undefined;
      this._isCheckpoint = undefined;
      this._modelInput.internalValue = undefined;
      this._nearestModelName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerHostname = value.containerHostname;
      this._environment = value.environment;
      this._framework = value.framework;
      this._frameworkVersion = value.frameworkVersion;
      this._image = value.image;
      this._imageDigest = value.imageDigest;
      this._isCheckpoint = value.isCheckpoint;
      this._modelInput.internalValue = value.modelInput;
      this._nearestModelName = value.nearestModelName;
    }
  }

  // container_hostname - computed: true, optional: true, required: false
  private _containerHostname?: string; 
  public get containerHostname() {
    return this.getStringAttribute('container_hostname');
  }
  public set containerHostname(value: string) {
    this._containerHostname = value;
  }
  public resetContainerHostname() {
    this._containerHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerHostnameInput() {
    return this._containerHostname;
  }

  // environment - computed: true, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // framework - computed: true, optional: true, required: false
  private _framework?: string; 
  public get framework() {
    return this.getStringAttribute('framework');
  }
  public set framework(value: string) {
    this._framework = value;
  }
  public resetFramework() {
    this._framework = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkInput() {
    return this._framework;
  }

  // framework_version - computed: true, optional: true, required: false
  private _frameworkVersion?: string; 
  public get frameworkVersion() {
    return this.getStringAttribute('framework_version');
  }
  public set frameworkVersion(value: string) {
    this._frameworkVersion = value;
  }
  public resetFrameworkVersion() {
    this._frameworkVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkVersionInput() {
    return this._frameworkVersion;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_digest - computed: true, optional: true, required: false
  private _imageDigest?: string; 
  public get imageDigest() {
    return this.getStringAttribute('image_digest');
  }
  public set imageDigest(value: string) {
    this._imageDigest = value;
  }
  public resetImageDigest() {
    this._imageDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDigestInput() {
    return this._imageDigest;
  }

  // is_checkpoint - computed: true, optional: true, required: false
  private _isCheckpoint?: boolean | cdktn.IResolvable; 
  public get isCheckpoint() {
    return this.getBooleanAttribute('is_checkpoint');
  }
  public set isCheckpoint(value: boolean | cdktn.IResolvable) {
    this._isCheckpoint = value;
  }
  public resetIsCheckpoint() {
    this._isCheckpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCheckpointInput() {
    return this._isCheckpoint;
  }

  // model_input - computed: true, optional: true, required: false
  private _modelInput = new SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference(this, "model_input");
  public get modelInput() {
    return this._modelInput;
  }
  public putModelInput(value: SagemakerAlgorithmInferenceSpecificationContainersModelInput) {
    this._modelInput.internalValue = value;
  }
  public resetModelInput() {
    this._modelInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInputInput() {
    return this._modelInput.internalValue;
  }

  // nearest_model_name - computed: true, optional: true, required: false
  private _nearestModelName?: string; 
  public get nearestModelName() {
    return this.getStringAttribute('nearest_model_name');
  }
  public set nearestModelName(value: string) {
    this._nearestModelName = value;
  }
  public resetNearestModelName() {
    this._nearestModelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nearestModelNameInput() {
    return this._nearestModelName;
  }
}

export class SagemakerAlgorithmInferenceSpecificationContainersList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmInferenceSpecificationContainers[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmInferenceSpecificationContainersOutputReference {
    return new SagemakerAlgorithmInferenceSpecificationContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmInferenceSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#containers SagemakerAlgorithm#containers}
  */
  readonly containers?: SagemakerAlgorithmInferenceSpecificationContainers[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#supported_content_types SagemakerAlgorithm#supported_content_types}
  */
  readonly supportedContentTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#supported_realtime_inference_instance_types SagemakerAlgorithm#supported_realtime_inference_instance_types}
  */
  readonly supportedRealtimeInferenceInstanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#supported_response_mime_types SagemakerAlgorithm#supported_response_mime_types}
  */
  readonly supportedResponseMimeTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#supported_transform_instance_types SagemakerAlgorithm#supported_transform_instance_types}
  */
  readonly supportedTransformInstanceTypes?: string[];
}

export function sagemakerAlgorithmInferenceSpecificationToTerraform(struct?: SagemakerAlgorithmInferenceSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    containers: cdktn.listMapper(sagemakerAlgorithmInferenceSpecificationContainersToTerraform, false)(struct!.containers),
    supported_content_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedContentTypes),
    supported_realtime_inference_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedRealtimeInferenceInstanceTypes),
    supported_response_mime_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedResponseMimeTypes),
    supported_transform_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedTransformInstanceTypes),
  }
}


export function sagemakerAlgorithmInferenceSpecificationToHclTerraform(struct?: SagemakerAlgorithmInferenceSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    containers: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmInferenceSpecificationContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmInferenceSpecificationContainersList",
    },
    supported_content_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedContentTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    supported_realtime_inference_instance_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedRealtimeInferenceInstanceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    supported_response_mime_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedResponseMimeTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    supported_transform_instance_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedTransformInstanceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmInferenceSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerAlgorithmInferenceSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._supportedContentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedContentTypes = this._supportedContentTypes;
    }
    if (this._supportedRealtimeInferenceInstanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedRealtimeInferenceInstanceTypes = this._supportedRealtimeInferenceInstanceTypes;
    }
    if (this._supportedResponseMimeTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedResponseMimeTypes = this._supportedResponseMimeTypes;
    }
    if (this._supportedTransformInstanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedTransformInstanceTypes = this._supportedTransformInstanceTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmInferenceSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers.internalValue = undefined;
      this._supportedContentTypes = undefined;
      this._supportedRealtimeInferenceInstanceTypes = undefined;
      this._supportedResponseMimeTypes = undefined;
      this._supportedTransformInstanceTypes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containers.internalValue = value.containers;
      this._supportedContentTypes = value.supportedContentTypes;
      this._supportedRealtimeInferenceInstanceTypes = value.supportedRealtimeInferenceInstanceTypes;
      this._supportedResponseMimeTypes = value.supportedResponseMimeTypes;
      this._supportedTransformInstanceTypes = value.supportedTransformInstanceTypes;
    }
  }

  // containers - computed: true, optional: true, required: false
  private _containers = new SagemakerAlgorithmInferenceSpecificationContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: SagemakerAlgorithmInferenceSpecificationContainers[] | cdktn.IResolvable) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // supported_content_types - computed: true, optional: true, required: false
  private _supportedContentTypes?: string[]; 
  public get supportedContentTypes() {
    return this.getListAttribute('supported_content_types');
  }
  public set supportedContentTypes(value: string[]) {
    this._supportedContentTypes = value;
  }
  public resetSupportedContentTypes() {
    this._supportedContentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedContentTypesInput() {
    return this._supportedContentTypes;
  }

  // supported_realtime_inference_instance_types - computed: true, optional: true, required: false
  private _supportedRealtimeInferenceInstanceTypes?: string[]; 
  public get supportedRealtimeInferenceInstanceTypes() {
    return this.getListAttribute('supported_realtime_inference_instance_types');
  }
  public set supportedRealtimeInferenceInstanceTypes(value: string[]) {
    this._supportedRealtimeInferenceInstanceTypes = value;
  }
  public resetSupportedRealtimeInferenceInstanceTypes() {
    this._supportedRealtimeInferenceInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedRealtimeInferenceInstanceTypesInput() {
    return this._supportedRealtimeInferenceInstanceTypes;
  }

  // supported_response_mime_types - computed: true, optional: true, required: false
  private _supportedResponseMimeTypes?: string[]; 
  public get supportedResponseMimeTypes() {
    return this.getListAttribute('supported_response_mime_types');
  }
  public set supportedResponseMimeTypes(value: string[]) {
    this._supportedResponseMimeTypes = value;
  }
  public resetSupportedResponseMimeTypes() {
    this._supportedResponseMimeTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedResponseMimeTypesInput() {
    return this._supportedResponseMimeTypes;
  }

  // supported_transform_instance_types - computed: true, optional: true, required: false
  private _supportedTransformInstanceTypes?: string[]; 
  public get supportedTransformInstanceTypes() {
    return this.getListAttribute('supported_transform_instance_types');
  }
  public set supportedTransformInstanceTypes(value: string[]) {
    this._supportedTransformInstanceTypes = value;
  }
  public resetSupportedTransformInstanceTypes() {
    this._supportedTransformInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedTransformInstanceTypesInput() {
    return this._supportedTransformInstanceTypes;
  }
}
export interface SagemakerAlgorithmTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#key SagemakerAlgorithm#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#value SagemakerAlgorithm#value}
  */
  readonly value?: string;
}

export function sagemakerAlgorithmTagsToTerraform(struct?: SagemakerAlgorithmTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function sagemakerAlgorithmTagsToHclTerraform(struct?: SagemakerAlgorithmTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
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

export class SagemakerAlgorithmTagsList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmTags[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmTagsOutputReference {
    return new SagemakerAlgorithmTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmTrainingSpecificationMetricDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#name SagemakerAlgorithm#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#regex SagemakerAlgorithm#regex}
  */
  readonly regex?: string;
}

export function sagemakerAlgorithmTrainingSpecificationMetricDefinitionsToTerraform(struct?: SagemakerAlgorithmTrainingSpecificationMetricDefinitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    regex: cdktn.stringToTerraform(struct!.regex),
  }
}


export function sagemakerAlgorithmTrainingSpecificationMetricDefinitionsToHclTerraform(struct?: SagemakerAlgorithmTrainingSpecificationMetricDefinitions | cdktn.IResolvable): any {
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
    regex: {
      value: cdktn.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmTrainingSpecificationMetricDefinitions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmTrainingSpecificationMetricDefinitions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
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

  // regex - computed: true, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmTrainingSpecificationMetricDefinitions[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference {
    return new SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#values SagemakerAlgorithm#values}
  */
  readonly values?: string[];
}

export function sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationToTerraform(struct?: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationToHclTerraform(struct?: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._values = value.values;
    }
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#max_value SagemakerAlgorithm#max_value}
  */
  readonly maxValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#min_value SagemakerAlgorithm#min_value}
  */
  readonly minValue?: string;
}

export function sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationToTerraform(struct?: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_value: cdktn.stringToTerraform(struct!.maxValue),
    min_value: cdktn.stringToTerraform(struct!.minValue),
  }
}


export function sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationToHclTerraform(struct?: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_value: {
      value: cdktn.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktn.stringToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
    }
  }

  // max_value - computed: true, optional: true, required: false
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: true, optional: true, required: false
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }
}
export interface SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#max_value SagemakerAlgorithm#max_value}
  */
  readonly maxValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#min_value SagemakerAlgorithm#min_value}
  */
  readonly minValue?: string;
}

export function sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationToTerraform(struct?: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_value: cdktn.stringToTerraform(struct!.maxValue),
    min_value: cdktn.stringToTerraform(struct!.minValue),
  }
}


export function sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationToHclTerraform(struct?: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_value: {
      value: cdktn.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktn.stringToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
    }
  }

  // max_value - computed: true, optional: true, required: false
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: true, optional: true, required: false
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }
}
export interface SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#categorical_parameter_range_specification SagemakerAlgorithm#categorical_parameter_range_specification}
  */
  readonly categoricalParameterRangeSpecification?: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#continuous_parameter_range_specification SagemakerAlgorithm#continuous_parameter_range_specification}
  */
  readonly continuousParameterRangeSpecification?: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#integer_parameter_range_specification SagemakerAlgorithm#integer_parameter_range_specification}
  */
  readonly integerParameterRangeSpecification?: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification;
}

export function sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeToTerraform(struct?: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    categorical_parameter_range_specification: sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationToTerraform(struct!.categoricalParameterRangeSpecification),
    continuous_parameter_range_specification: sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationToTerraform(struct!.continuousParameterRangeSpecification),
    integer_parameter_range_specification: sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationToTerraform(struct!.integerParameterRangeSpecification),
  }
}


export function sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeToHclTerraform(struct?: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    categorical_parameter_range_specification: {
      value: sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationToHclTerraform(struct!.categoricalParameterRangeSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification",
    },
    continuous_parameter_range_specification: {
      value: sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationToHclTerraform(struct!.continuousParameterRangeSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification",
    },
    integer_parameter_range_specification: {
      value: sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationToHclTerraform(struct!.integerParameterRangeSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoricalParameterRangeSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoricalParameterRangeSpecification = this._categoricalParameterRangeSpecification?.internalValue;
    }
    if (this._continuousParameterRangeSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuousParameterRangeSpecification = this._continuousParameterRangeSpecification?.internalValue;
    }
    if (this._integerParameterRangeSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerParameterRangeSpecification = this._integerParameterRangeSpecification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categoricalParameterRangeSpecification.internalValue = undefined;
      this._continuousParameterRangeSpecification.internalValue = undefined;
      this._integerParameterRangeSpecification.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._categoricalParameterRangeSpecification.internalValue = value.categoricalParameterRangeSpecification;
      this._continuousParameterRangeSpecification.internalValue = value.continuousParameterRangeSpecification;
      this._integerParameterRangeSpecification.internalValue = value.integerParameterRangeSpecification;
    }
  }

  // categorical_parameter_range_specification - computed: true, optional: true, required: false
  private _categoricalParameterRangeSpecification = new SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference(this, "categorical_parameter_range_specification");
  public get categoricalParameterRangeSpecification() {
    return this._categoricalParameterRangeSpecification;
  }
  public putCategoricalParameterRangeSpecification(value: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification) {
    this._categoricalParameterRangeSpecification.internalValue = value;
  }
  public resetCategoricalParameterRangeSpecification() {
    this._categoricalParameterRangeSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoricalParameterRangeSpecificationInput() {
    return this._categoricalParameterRangeSpecification.internalValue;
  }

  // continuous_parameter_range_specification - computed: true, optional: true, required: false
  private _continuousParameterRangeSpecification = new SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference(this, "continuous_parameter_range_specification");
  public get continuousParameterRangeSpecification() {
    return this._continuousParameterRangeSpecification;
  }
  public putContinuousParameterRangeSpecification(value: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification) {
    this._continuousParameterRangeSpecification.internalValue = value;
  }
  public resetContinuousParameterRangeSpecification() {
    this._continuousParameterRangeSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousParameterRangeSpecificationInput() {
    return this._continuousParameterRangeSpecification.internalValue;
  }

  // integer_parameter_range_specification - computed: true, optional: true, required: false
  private _integerParameterRangeSpecification = new SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference(this, "integer_parameter_range_specification");
  public get integerParameterRangeSpecification() {
    return this._integerParameterRangeSpecification;
  }
  public putIntegerParameterRangeSpecification(value: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification) {
    this._integerParameterRangeSpecification.internalValue = value;
  }
  public resetIntegerParameterRangeSpecification() {
    this._integerParameterRangeSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerParameterRangeSpecificationInput() {
    return this._integerParameterRangeSpecification.internalValue;
  }
}
export interface SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#default_value SagemakerAlgorithm#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#description SagemakerAlgorithm#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#is_required SagemakerAlgorithm#is_required}
  */
  readonly isRequired?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#is_tunable SagemakerAlgorithm#is_tunable}
  */
  readonly isTunable?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#name SagemakerAlgorithm#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#range SagemakerAlgorithm#range}
  */
  readonly range?: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#type SagemakerAlgorithm#type}
  */
  readonly type?: string;
}

export function sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersToTerraform(struct?: SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    description: cdktn.stringToTerraform(struct!.description),
    is_required: cdktn.booleanToTerraform(struct!.isRequired),
    is_tunable: cdktn.booleanToTerraform(struct!.isTunable),
    name: cdktn.stringToTerraform(struct!.name),
    range: sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeToTerraform(struct!.range),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersToHclTerraform(struct?: SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_required: {
      value: cdktn.booleanToHclTerraform(struct!.isRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_tunable: {
      value: cdktn.booleanToHclTerraform(struct!.isTunable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeToHclTerraform(struct!.range),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._isRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRequired = this._isRequired;
    }
    if (this._isTunable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isTunable = this._isTunable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._description = undefined;
      this._isRequired = undefined;
      this._isTunable = undefined;
      this._name = undefined;
      this._range.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._description = value.description;
      this._isRequired = value.isRequired;
      this._isTunable = value.isTunable;
      this._name = value.name;
      this._range.internalValue = value.range;
      this._type = value.type;
    }
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
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

  // is_required - computed: true, optional: true, required: false
  private _isRequired?: boolean | cdktn.IResolvable; 
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }
  public set isRequired(value: boolean | cdktn.IResolvable) {
    this._isRequired = value;
  }
  public resetIsRequired() {
    this._isRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRequiredInput() {
    return this._isRequired;
  }

  // is_tunable - computed: true, optional: true, required: false
  private _isTunable?: boolean | cdktn.IResolvable; 
  public get isTunable() {
    return this.getBooleanAttribute('is_tunable');
  }
  public set isTunable(value: boolean | cdktn.IResolvable) {
    this._isTunable = value;
  }
  public resetIsTunable() {
    this._isTunable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTunableInput() {
    return this._isTunable;
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

  // range - computed: true, optional: true, required: false
  private _range = new SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference {
    return new SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#metric_name SagemakerAlgorithm#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#type SagemakerAlgorithm#type}
  */
  readonly type?: string;
}

export function sagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsToTerraform(struct?: SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function sagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsToHclTerraform(struct?: SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricName = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricName = value.metricName;
      this._type = value.type;
    }
  }

  // metric_name - computed: true, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference {
    return new SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmTrainingSpecificationTrainingChannels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#description SagemakerAlgorithm#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#is_required SagemakerAlgorithm#is_required}
  */
  readonly isRequired?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#name SagemakerAlgorithm#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#supported_compression_types SagemakerAlgorithm#supported_compression_types}
  */
  readonly supportedCompressionTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#supported_content_types SagemakerAlgorithm#supported_content_types}
  */
  readonly supportedContentTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#supported_input_modes SagemakerAlgorithm#supported_input_modes}
  */
  readonly supportedInputModes: string[];
}

export function sagemakerAlgorithmTrainingSpecificationTrainingChannelsToTerraform(struct?: SagemakerAlgorithmTrainingSpecificationTrainingChannels | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    is_required: cdktn.booleanToTerraform(struct!.isRequired),
    name: cdktn.stringToTerraform(struct!.name),
    supported_compression_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedCompressionTypes),
    supported_content_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedContentTypes),
    supported_input_modes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedInputModes),
  }
}


export function sagemakerAlgorithmTrainingSpecificationTrainingChannelsToHclTerraform(struct?: SagemakerAlgorithmTrainingSpecificationTrainingChannels | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_required: {
      value: cdktn.booleanToHclTerraform(struct!.isRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    supported_compression_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedCompressionTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    supported_content_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedContentTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    supported_input_modes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedInputModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAlgorithmTrainingSpecificationTrainingChannels | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._isRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRequired = this._isRequired;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._supportedCompressionTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedCompressionTypes = this._supportedCompressionTypes;
    }
    if (this._supportedContentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedContentTypes = this._supportedContentTypes;
    }
    if (this._supportedInputModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedInputModes = this._supportedInputModes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmTrainingSpecificationTrainingChannels | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._isRequired = undefined;
      this._name = undefined;
      this._supportedCompressionTypes = undefined;
      this._supportedContentTypes = undefined;
      this._supportedInputModes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._isRequired = value.isRequired;
      this._name = value.name;
      this._supportedCompressionTypes = value.supportedCompressionTypes;
      this._supportedContentTypes = value.supportedContentTypes;
      this._supportedInputModes = value.supportedInputModes;
    }
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

  // is_required - computed: true, optional: true, required: false
  private _isRequired?: boolean | cdktn.IResolvable; 
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }
  public set isRequired(value: boolean | cdktn.IResolvable) {
    this._isRequired = value;
  }
  public resetIsRequired() {
    this._isRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRequiredInput() {
    return this._isRequired;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // supported_compression_types - computed: true, optional: true, required: false
  private _supportedCompressionTypes?: string[]; 
  public get supportedCompressionTypes() {
    return this.getListAttribute('supported_compression_types');
  }
  public set supportedCompressionTypes(value: string[]) {
    this._supportedCompressionTypes = value;
  }
  public resetSupportedCompressionTypes() {
    this._supportedCompressionTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedCompressionTypesInput() {
    return this._supportedCompressionTypes;
  }

  // supported_content_types - computed: false, optional: false, required: true
  private _supportedContentTypes?: string[]; 
  public get supportedContentTypes() {
    return this.getListAttribute('supported_content_types');
  }
  public set supportedContentTypes(value: string[]) {
    this._supportedContentTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedContentTypesInput() {
    return this._supportedContentTypes;
  }

  // supported_input_modes - computed: false, optional: false, required: true
  private _supportedInputModes?: string[]; 
  public get supportedInputModes() {
    return this.getListAttribute('supported_input_modes');
  }
  public set supportedInputModes(value: string[]) {
    this._supportedInputModes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedInputModesInput() {
    return this._supportedInputModes;
  }
}

export class SagemakerAlgorithmTrainingSpecificationTrainingChannelsList extends cdktn.ComplexList {
  public internalValue? : SagemakerAlgorithmTrainingSpecificationTrainingChannels[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference {
    return new SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAlgorithmTrainingSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#metric_definitions SagemakerAlgorithm#metric_definitions}
  */
  readonly metricDefinitions?: SagemakerAlgorithmTrainingSpecificationMetricDefinitions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#supported_hyper_parameters SagemakerAlgorithm#supported_hyper_parameters}
  */
  readonly supportedHyperParameters?: SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#supported_training_instance_types SagemakerAlgorithm#supported_training_instance_types}
  */
  readonly supportedTrainingInstanceTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#supported_tuning_job_objective_metrics SagemakerAlgorithm#supported_tuning_job_objective_metrics}
  */
  readonly supportedTuningJobObjectiveMetrics?: SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#supports_distributed_training SagemakerAlgorithm#supports_distributed_training}
  */
  readonly supportsDistributedTraining?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#training_channels SagemakerAlgorithm#training_channels}
  */
  readonly trainingChannels: SagemakerAlgorithmTrainingSpecificationTrainingChannels[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#training_image SagemakerAlgorithm#training_image}
  */
  readonly trainingImage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#training_image_digest SagemakerAlgorithm#training_image_digest}
  */
  readonly trainingImageDigest?: string;
}

export function sagemakerAlgorithmTrainingSpecificationToTerraform(struct?: SagemakerAlgorithmTrainingSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_definitions: cdktn.listMapper(sagemakerAlgorithmTrainingSpecificationMetricDefinitionsToTerraform, false)(struct!.metricDefinitions),
    supported_hyper_parameters: cdktn.listMapper(sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersToTerraform, false)(struct!.supportedHyperParameters),
    supported_training_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedTrainingInstanceTypes),
    supported_tuning_job_objective_metrics: cdktn.listMapper(sagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsToTerraform, false)(struct!.supportedTuningJobObjectiveMetrics),
    supports_distributed_training: cdktn.booleanToTerraform(struct!.supportsDistributedTraining),
    training_channels: cdktn.listMapper(sagemakerAlgorithmTrainingSpecificationTrainingChannelsToTerraform, false)(struct!.trainingChannels),
    training_image: cdktn.stringToTerraform(struct!.trainingImage),
    training_image_digest: cdktn.stringToTerraform(struct!.trainingImageDigest),
  }
}


export function sagemakerAlgorithmTrainingSpecificationToHclTerraform(struct?: SagemakerAlgorithmTrainingSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_definitions: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmTrainingSpecificationMetricDefinitionsToHclTerraform, false)(struct!.metricDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList",
    },
    supported_hyper_parameters: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersToHclTerraform, false)(struct!.supportedHyperParameters),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList",
    },
    supported_training_instance_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedTrainingInstanceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    supported_tuning_job_objective_metrics: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsToHclTerraform, false)(struct!.supportedTuningJobObjectiveMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList",
    },
    supports_distributed_training: {
      value: cdktn.booleanToHclTerraform(struct!.supportsDistributedTraining),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    training_channels: {
      value: cdktn.listMapperHcl(sagemakerAlgorithmTrainingSpecificationTrainingChannelsToHclTerraform, false)(struct!.trainingChannels),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAlgorithmTrainingSpecificationTrainingChannelsList",
    },
    training_image: {
      value: cdktn.stringToHclTerraform(struct!.trainingImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    training_image_digest: {
      value: cdktn.stringToHclTerraform(struct!.trainingImageDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAlgorithmTrainingSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerAlgorithmTrainingSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDefinitions = this._metricDefinitions?.internalValue;
    }
    if (this._supportedHyperParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedHyperParameters = this._supportedHyperParameters?.internalValue;
    }
    if (this._supportedTrainingInstanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedTrainingInstanceTypes = this._supportedTrainingInstanceTypes;
    }
    if (this._supportedTuningJobObjectiveMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedTuningJobObjectiveMetrics = this._supportedTuningJobObjectiveMetrics?.internalValue;
    }
    if (this._supportsDistributedTraining !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportsDistributedTraining = this._supportsDistributedTraining;
    }
    if (this._trainingChannels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingChannels = this._trainingChannels?.internalValue;
    }
    if (this._trainingImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingImage = this._trainingImage;
    }
    if (this._trainingImageDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingImageDigest = this._trainingImageDigest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAlgorithmTrainingSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricDefinitions.internalValue = undefined;
      this._supportedHyperParameters.internalValue = undefined;
      this._supportedTrainingInstanceTypes = undefined;
      this._supportedTuningJobObjectiveMetrics.internalValue = undefined;
      this._supportsDistributedTraining = undefined;
      this._trainingChannels.internalValue = undefined;
      this._trainingImage = undefined;
      this._trainingImageDigest = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricDefinitions.internalValue = value.metricDefinitions;
      this._supportedHyperParameters.internalValue = value.supportedHyperParameters;
      this._supportedTrainingInstanceTypes = value.supportedTrainingInstanceTypes;
      this._supportedTuningJobObjectiveMetrics.internalValue = value.supportedTuningJobObjectiveMetrics;
      this._supportsDistributedTraining = value.supportsDistributedTraining;
      this._trainingChannels.internalValue = value.trainingChannels;
      this._trainingImage = value.trainingImage;
      this._trainingImageDigest = value.trainingImageDigest;
    }
  }

  // metric_definitions - computed: true, optional: true, required: false
  private _metricDefinitions = new SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList(this, "metric_definitions", false);
  public get metricDefinitions() {
    return this._metricDefinitions;
  }
  public putMetricDefinitions(value: SagemakerAlgorithmTrainingSpecificationMetricDefinitions[] | cdktn.IResolvable) {
    this._metricDefinitions.internalValue = value;
  }
  public resetMetricDefinitions() {
    this._metricDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDefinitionsInput() {
    return this._metricDefinitions.internalValue;
  }

  // supported_hyper_parameters - computed: true, optional: true, required: false
  private _supportedHyperParameters = new SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList(this, "supported_hyper_parameters", false);
  public get supportedHyperParameters() {
    return this._supportedHyperParameters;
  }
  public putSupportedHyperParameters(value: SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters[] | cdktn.IResolvable) {
    this._supportedHyperParameters.internalValue = value;
  }
  public resetSupportedHyperParameters() {
    this._supportedHyperParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedHyperParametersInput() {
    return this._supportedHyperParameters.internalValue;
  }

  // supported_training_instance_types - computed: false, optional: false, required: true
  private _supportedTrainingInstanceTypes?: string[]; 
  public get supportedTrainingInstanceTypes() {
    return this.getListAttribute('supported_training_instance_types');
  }
  public set supportedTrainingInstanceTypes(value: string[]) {
    this._supportedTrainingInstanceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedTrainingInstanceTypesInput() {
    return this._supportedTrainingInstanceTypes;
  }

  // supported_tuning_job_objective_metrics - computed: true, optional: true, required: false
  private _supportedTuningJobObjectiveMetrics = new SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList(this, "supported_tuning_job_objective_metrics", false);
  public get supportedTuningJobObjectiveMetrics() {
    return this._supportedTuningJobObjectiveMetrics;
  }
  public putSupportedTuningJobObjectiveMetrics(value: SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics[] | cdktn.IResolvable) {
    this._supportedTuningJobObjectiveMetrics.internalValue = value;
  }
  public resetSupportedTuningJobObjectiveMetrics() {
    this._supportedTuningJobObjectiveMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedTuningJobObjectiveMetricsInput() {
    return this._supportedTuningJobObjectiveMetrics.internalValue;
  }

  // supports_distributed_training - computed: true, optional: true, required: false
  private _supportsDistributedTraining?: boolean | cdktn.IResolvable; 
  public get supportsDistributedTraining() {
    return this.getBooleanAttribute('supports_distributed_training');
  }
  public set supportsDistributedTraining(value: boolean | cdktn.IResolvable) {
    this._supportsDistributedTraining = value;
  }
  public resetSupportsDistributedTraining() {
    this._supportsDistributedTraining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportsDistributedTrainingInput() {
    return this._supportsDistributedTraining;
  }

  // training_channels - computed: false, optional: false, required: true
  private _trainingChannels = new SagemakerAlgorithmTrainingSpecificationTrainingChannelsList(this, "training_channels", false);
  public get trainingChannels() {
    return this._trainingChannels;
  }
  public putTrainingChannels(value: SagemakerAlgorithmTrainingSpecificationTrainingChannels[] | cdktn.IResolvable) {
    this._trainingChannels.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingChannelsInput() {
    return this._trainingChannels.internalValue;
  }

  // training_image - computed: false, optional: false, required: true
  private _trainingImage?: string; 
  public get trainingImage() {
    return this.getStringAttribute('training_image');
  }
  public set trainingImage(value: string) {
    this._trainingImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingImageInput() {
    return this._trainingImage;
  }

  // training_image_digest - computed: true, optional: true, required: false
  private _trainingImageDigest?: string; 
  public get trainingImageDigest() {
    return this.getStringAttribute('training_image_digest');
  }
  public set trainingImageDigest(value: string) {
    this._trainingImageDigest = value;
  }
  public resetTrainingImageDigest() {
    this._trainingImageDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingImageDigestInput() {
    return this._trainingImageDigest;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm awscc_sagemaker_algorithm}
*/
export class SagemakerAlgorithm extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_algorithm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SagemakerAlgorithm resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerAlgorithm to import
  * @param importFromId The id of the existing SagemakerAlgorithm that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerAlgorithm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_algorithm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_algorithm awscc_sagemaker_algorithm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerAlgorithmConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerAlgorithmConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_algorithm',
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
    this._algorithmDescription = config.algorithmDescription;
    this._algorithmName = config.algorithmName;
    this._certifyForMarketplace = config.certifyForMarketplace;
    this._inferenceSpecification.internalValue = config.inferenceSpecification;
    this._tags.internalValue = config.tags;
    this._trainingSpecification.internalValue = config.trainingSpecification;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm_arn - computed: true, optional: false, required: false
  public get algorithmArn() {
    return this.getStringAttribute('algorithm_arn');
  }

  // algorithm_description - computed: true, optional: true, required: false
  private _algorithmDescription?: string; 
  public get algorithmDescription() {
    return this.getStringAttribute('algorithm_description');
  }
  public set algorithmDescription(value: string) {
    this._algorithmDescription = value;
  }
  public resetAlgorithmDescription() {
    this._algorithmDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmDescriptionInput() {
    return this._algorithmDescription;
  }

  // algorithm_name - computed: false, optional: false, required: true
  private _algorithmName?: string; 
  public get algorithmName() {
    return this.getStringAttribute('algorithm_name');
  }
  public set algorithmName(value: string) {
    this._algorithmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmNameInput() {
    return this._algorithmName;
  }

  // certify_for_marketplace - computed: true, optional: true, required: false
  private _certifyForMarketplace?: boolean | cdktn.IResolvable; 
  public get certifyForMarketplace() {
    return this.getBooleanAttribute('certify_for_marketplace');
  }
  public set certifyForMarketplace(value: boolean | cdktn.IResolvable) {
    this._certifyForMarketplace = value;
  }
  public resetCertifyForMarketplace() {
    this._certifyForMarketplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certifyForMarketplaceInput() {
    return this._certifyForMarketplace;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inference_specification - computed: true, optional: true, required: false
  private _inferenceSpecification = new SagemakerAlgorithmInferenceSpecificationOutputReference(this, "inference_specification");
  public get inferenceSpecification() {
    return this._inferenceSpecification;
  }
  public putInferenceSpecification(value: SagemakerAlgorithmInferenceSpecification) {
    this._inferenceSpecification.internalValue = value;
  }
  public resetInferenceSpecification() {
    this._inferenceSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceSpecificationInput() {
    return this._inferenceSpecification.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SagemakerAlgorithmTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SagemakerAlgorithmTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // training_specification - computed: false, optional: false, required: true
  private _trainingSpecification = new SagemakerAlgorithmTrainingSpecificationOutputReference(this, "training_specification");
  public get trainingSpecification() {
    return this._trainingSpecification;
  }
  public putTrainingSpecification(value: SagemakerAlgorithmTrainingSpecification) {
    this._trainingSpecification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingSpecificationInput() {
    return this._trainingSpecification.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm_description: cdktn.stringToTerraform(this._algorithmDescription),
      algorithm_name: cdktn.stringToTerraform(this._algorithmName),
      certify_for_marketplace: cdktn.booleanToTerraform(this._certifyForMarketplace),
      inference_specification: sagemakerAlgorithmInferenceSpecificationToTerraform(this._inferenceSpecification.internalValue),
      tags: cdktn.listMapper(sagemakerAlgorithmTagsToTerraform, false)(this._tags.internalValue),
      training_specification: sagemakerAlgorithmTrainingSpecificationToTerraform(this._trainingSpecification.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm_description: {
        value: cdktn.stringToHclTerraform(this._algorithmDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      algorithm_name: {
        value: cdktn.stringToHclTerraform(this._algorithmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certify_for_marketplace: {
        value: cdktn.booleanToHclTerraform(this._certifyForMarketplace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      inference_specification: {
        value: sagemakerAlgorithmInferenceSpecificationToHclTerraform(this._inferenceSpecification.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerAlgorithmInferenceSpecification",
      },
      tags: {
        value: cdktn.listMapperHcl(sagemakerAlgorithmTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerAlgorithmTagsList",
      },
      training_specification: {
        value: sagemakerAlgorithmTrainingSpecificationToHclTerraform(this._trainingSpecification.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerAlgorithmTrainingSpecification",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
