// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SagemakerInferenceExperimentConfig extends cdktn.TerraformMetaArguments {
  /**
  * The Amazon S3 location and configuration for storing inference request and response data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#data_storage_config SagemakerInferenceExperiment#data_storage_config}
  */
  readonly dataStorageConfig?: SagemakerInferenceExperimentDataStorageConfig;
  /**
  * The description of the inference experiment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#description SagemakerInferenceExperiment#description}
  */
  readonly description?: string;
  /**
  * The desired state of the experiment after starting or stopping operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#desired_state SagemakerInferenceExperiment#desired_state}
  */
  readonly desiredState?: string;
  /**
  * The name of the endpoint used to run the inference experiment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#endpoint_name SagemakerInferenceExperiment#endpoint_name}
  */
  readonly endpointName: string;
  /**
  * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#kms_key SagemakerInferenceExperiment#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * An array of ModelVariantConfig objects. Each ModelVariantConfig object in the array describes the infrastructure configuration for the corresponding variant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#model_variants SagemakerInferenceExperiment#model_variants}
  */
  readonly modelVariants: SagemakerInferenceExperimentModelVariants[] | cdktn.IResolvable;
  /**
  * The name for the inference experiment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#name SagemakerInferenceExperiment#name}
  */
  readonly name: string;
  /**
  * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage Amazon SageMaker Inference endpoints for model deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#role_arn SagemakerInferenceExperiment#role_arn}
  */
  readonly roleArn: string;
  /**
  * The duration for which you want the inference experiment to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#schedule SagemakerInferenceExperiment#schedule}
  */
  readonly schedule?: SagemakerInferenceExperimentSchedule;
  /**
  * The configuration of ShadowMode inference experiment type. Use this field to specify a production variant which takes all the inference requests, and a shadow variant to which Amazon SageMaker replicates a percentage of the inference requests. For the shadow variant also specify the percentage of requests that Amazon SageMaker replicates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#shadow_mode_config SagemakerInferenceExperiment#shadow_mode_config}
  */
  readonly shadowModeConfig?: SagemakerInferenceExperimentShadowModeConfig;
  /**
  * The error message or client-specified reason from the StopInferenceExperiment API, that explains the status of the inference experiment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#status_reason SagemakerInferenceExperiment#status_reason}
  */
  readonly statusReason?: string;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#tags SagemakerInferenceExperiment#tags}
  */
  readonly tags?: SagemakerInferenceExperimentTags[] | cdktn.IResolvable;
  /**
  * The type of the inference experiment that you want to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#type SagemakerInferenceExperiment#type}
  */
  readonly type: string;
}
export interface SagemakerInferenceExperimentDataStorageConfigContentType {
  /**
  * The list of all content type headers that SageMaker will treat as CSV and capture accordingly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#csv_content_types SagemakerInferenceExperiment#csv_content_types}
  */
  readonly csvContentTypes?: string[];
  /**
  * The list of all content type headers that SageMaker will treat as JSON and capture accordingly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#json_content_types SagemakerInferenceExperiment#json_content_types}
  */
  readonly jsonContentTypes?: string[];
}

export function sagemakerInferenceExperimentDataStorageConfigContentTypeToTerraform(struct?: SagemakerInferenceExperimentDataStorageConfigContentType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    csv_content_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.csvContentTypes),
    json_content_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.jsonContentTypes),
  }
}


export function sagemakerInferenceExperimentDataStorageConfigContentTypeToHclTerraform(struct?: SagemakerInferenceExperimentDataStorageConfigContentType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    csv_content_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.csvContentTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    json_content_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.jsonContentTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceExperimentDataStorageConfigContentType | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._csvContentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.csvContentTypes = this._csvContentTypes;
    }
    if (this._jsonContentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonContentTypes = this._jsonContentTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceExperimentDataStorageConfigContentType | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._csvContentTypes = undefined;
      this._jsonContentTypes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._csvContentTypes = value.csvContentTypes;
      this._jsonContentTypes = value.jsonContentTypes;
    }
  }

  // csv_content_types - computed: true, optional: true, required: false
  private _csvContentTypes?: string[];
  public get csvContentTypes() {
    return this.getListAttribute('csv_content_types');
  }
  public set csvContentTypes(value: string[]) {
    this._csvContentTypes = value;
  }
  public resetCsvContentTypes() {
    this._csvContentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvContentTypesInput() {
    return this._csvContentTypes;
  }

  // json_content_types - computed: true, optional: true, required: false
  private _jsonContentTypes?: string[];
  public get jsonContentTypes() {
    return this.getListAttribute('json_content_types');
  }
  public set jsonContentTypes(value: string[]) {
    this._jsonContentTypes = value;
  }
  public resetJsonContentTypes() {
    this._jsonContentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonContentTypesInput() {
    return this._jsonContentTypes;
  }
}
export interface SagemakerInferenceExperimentDataStorageConfig {
  /**
  * Configuration specifying how to treat different headers. If no headers are specified SageMaker will by default base64 encode when capturing the data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#content_type SagemakerInferenceExperiment#content_type}
  */
  readonly contentType?: SagemakerInferenceExperimentDataStorageConfigContentType;
  /**
  * The Amazon S3 bucket where the inference request and response data is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#destination SagemakerInferenceExperiment#destination}
  */
  readonly destination?: string;
  /**
  * The AWS Key Management Service key that Amazon SageMaker uses to encrypt captured data at rest using Amazon S3 server-side encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#kms_key SagemakerInferenceExperiment#kms_key}
  */
  readonly kmsKey?: string;
}

export function sagemakerInferenceExperimentDataStorageConfigToTerraform(struct?: SagemakerInferenceExperimentDataStorageConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_type: sagemakerInferenceExperimentDataStorageConfigContentTypeToTerraform(struct!.contentType),
    destination: cdktn.stringToTerraform(struct!.destination),
    kms_key: cdktn.stringToTerraform(struct!.kmsKey),
  }
}


export function sagemakerInferenceExperimentDataStorageConfigToHclTerraform(struct?: SagemakerInferenceExperimentDataStorageConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_type: {
      value: sagemakerInferenceExperimentDataStorageConfigContentTypeToHclTerraform(struct!.contentType),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceExperimentDataStorageConfigContentType",
    },
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key: {
      value: cdktn.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceExperimentDataStorageConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceExperimentDataStorageConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType?.internalValue;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceExperimentDataStorageConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType.internalValue = undefined;
      this._destination = undefined;
      this._kmsKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType.internalValue = value.contentType;
      this._destination = value.destination;
      this._kmsKey = value.kmsKey;
    }
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType = new SagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference(this, "content_type");
  public get contentType() {
    return this._contentType;
  }
  public putContentType(value: SagemakerInferenceExperimentDataStorageConfigContentType) {
    this._contentType.internalValue = value;
  }
  public resetContentType() {
    this._contentType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType.internalValue;
  }

  // destination - computed: true, optional: true, required: false
  private _destination?: string;
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // kms_key - computed: true, optional: true, required: false
  private _kmsKey?: string;
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }
}
export interface SagemakerInferenceExperimentEndpointMetadata {
}

export function sagemakerInferenceExperimentEndpointMetadataToTerraform(struct?: SagemakerInferenceExperimentEndpointMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function sagemakerInferenceExperimentEndpointMetadataToHclTerraform(struct?: SagemakerInferenceExperimentEndpointMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class SagemakerInferenceExperimentEndpointMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceExperimentEndpointMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceExperimentEndpointMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint_config_name - computed: true, optional: false, required: false
  public get endpointConfigName() {
    return this.getStringAttribute('endpoint_config_name');
  }

  // endpoint_name - computed: true, optional: false, required: false
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }

  // endpoint_status - computed: true, optional: false, required: false
  public get endpointStatus() {
    return this.getStringAttribute('endpoint_status');
  }
}
export interface SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig {
  /**
  * The number of instances of the type specified by InstanceType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#instance_count SagemakerInferenceExperiment#instance_count}
  */
  readonly instanceCount: number;
  /**
  * The instance type the model is deployed to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#instance_type SagemakerInferenceExperiment#instance_type}
  */
  readonly instanceType: string;
}

export function sagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigToTerraform(struct?: SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
  }
}


export function sagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigToHclTerraform(struct?: SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._instanceType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceCount = value.instanceCount;
      this._instanceType = value.instanceType;
    }
  }

  // instance_count - computed: false, optional: false, required: true
  private _instanceCount?: number;
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string;
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }
}
export interface SagemakerInferenceExperimentModelVariantsInfrastructureConfig {
  /**
  * The type of the inference experiment that you want to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#infrastructure_type SagemakerInferenceExperiment#infrastructure_type}
  */
  readonly infrastructureType: string;
  /**
  * The infrastructure configuration for deploying the model to a real-time inference endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#real_time_inference_config SagemakerInferenceExperiment#real_time_inference_config}
  */
  readonly realTimeInferenceConfig: SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig;
}

export function sagemakerInferenceExperimentModelVariantsInfrastructureConfigToTerraform(struct?: SagemakerInferenceExperimentModelVariantsInfrastructureConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    infrastructure_type: cdktn.stringToTerraform(struct!.infrastructureType),
    real_time_inference_config: sagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigToTerraform(struct!.realTimeInferenceConfig),
  }
}


export function sagemakerInferenceExperimentModelVariantsInfrastructureConfigToHclTerraform(struct?: SagemakerInferenceExperimentModelVariantsInfrastructureConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    infrastructure_type: {
      value: cdktn.stringToHclTerraform(struct!.infrastructureType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    real_time_inference_config: {
      value: sagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigToHclTerraform(struct!.realTimeInferenceConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceExperimentModelVariantsInfrastructureConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._infrastructureType !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructureType = this._infrastructureType;
    }
    if (this._realTimeInferenceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.realTimeInferenceConfig = this._realTimeInferenceConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceExperimentModelVariantsInfrastructureConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._infrastructureType = undefined;
      this._realTimeInferenceConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._infrastructureType = value.infrastructureType;
      this._realTimeInferenceConfig.internalValue = value.realTimeInferenceConfig;
    }
  }

  // infrastructure_type - computed: false, optional: false, required: true
  private _infrastructureType?: string;
  public get infrastructureType() {
    return this.getStringAttribute('infrastructure_type');
  }
  public set infrastructureType(value: string) {
    this._infrastructureType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureTypeInput() {
    return this._infrastructureType;
  }

  // real_time_inference_config - computed: false, optional: false, required: true
  private _realTimeInferenceConfig = new SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference(this, "real_time_inference_config");
  public get realTimeInferenceConfig() {
    return this._realTimeInferenceConfig;
  }
  public putRealTimeInferenceConfig(value: SagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig) {
    this._realTimeInferenceConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realTimeInferenceConfigInput() {
    return this._realTimeInferenceConfig.internalValue;
  }
}
export interface SagemakerInferenceExperimentModelVariants {
  /**
  * The configuration for the infrastructure that the model will be deployed to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#infrastructure_config SagemakerInferenceExperiment#infrastructure_config}
  */
  readonly infrastructureConfig: SagemakerInferenceExperimentModelVariantsInfrastructureConfig;
  /**
  * The name of the Amazon SageMaker Model entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#model_name SagemakerInferenceExperiment#model_name}
  */
  readonly modelName: string;
  /**
  * The name of the variant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#variant_name SagemakerInferenceExperiment#variant_name}
  */
  readonly variantName: string;
}

export function sagemakerInferenceExperimentModelVariantsToTerraform(struct?: SagemakerInferenceExperimentModelVariants | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    infrastructure_config: sagemakerInferenceExperimentModelVariantsInfrastructureConfigToTerraform(struct!.infrastructureConfig),
    model_name: cdktn.stringToTerraform(struct!.modelName),
    variant_name: cdktn.stringToTerraform(struct!.variantName),
  }
}


export function sagemakerInferenceExperimentModelVariantsToHclTerraform(struct?: SagemakerInferenceExperimentModelVariants | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    infrastructure_config: {
      value: sagemakerInferenceExperimentModelVariantsInfrastructureConfigToHclTerraform(struct!.infrastructureConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceExperimentModelVariantsInfrastructureConfig",
    },
    model_name: {
      value: cdktn.stringToHclTerraform(struct!.modelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variant_name: {
      value: cdktn.stringToHclTerraform(struct!.variantName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceExperimentModelVariantsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerInferenceExperimentModelVariants | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._infrastructureConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructureConfig = this._infrastructureConfig?.internalValue;
    }
    if (this._modelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelName = this._modelName;
    }
    if (this._variantName !== undefined) {
      hasAnyValues = true;
      internalValueResult.variantName = this._variantName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceExperimentModelVariants | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._infrastructureConfig.internalValue = undefined;
      this._modelName = undefined;
      this._variantName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._infrastructureConfig.internalValue = value.infrastructureConfig;
      this._modelName = value.modelName;
      this._variantName = value.variantName;
    }
  }

  // infrastructure_config - computed: false, optional: false, required: true
  private _infrastructureConfig = new SagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference(this, "infrastructure_config");
  public get infrastructureConfig() {
    return this._infrastructureConfig;
  }
  public putInfrastructureConfig(value: SagemakerInferenceExperimentModelVariantsInfrastructureConfig) {
    this._infrastructureConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureConfigInput() {
    return this._infrastructureConfig.internalValue;
  }

  // model_name - computed: false, optional: false, required: true
  private _modelName?: string;
  public get modelName() {
    return this.getStringAttribute('model_name');
  }
  public set modelName(value: string) {
    this._modelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelNameInput() {
    return this._modelName;
  }

  // variant_name - computed: false, optional: false, required: true
  private _variantName?: string;
  public get variantName() {
    return this.getStringAttribute('variant_name');
  }
  public set variantName(value: string) {
    this._variantName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variantNameInput() {
    return this._variantName;
  }
}

export class SagemakerInferenceExperimentModelVariantsList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceExperimentModelVariants[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceExperimentModelVariantsOutputReference {
    return new SagemakerInferenceExperimentModelVariantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceExperimentSchedule {
  /**
  * The timestamp at which the inference experiment ended or will end.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#end_time SagemakerInferenceExperiment#end_time}
  */
  readonly endTime?: string;
  /**
  * The timestamp at which the inference experiment started or will start.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#start_time SagemakerInferenceExperiment#start_time}
  */
  readonly startTime?: string;
}

export function sagemakerInferenceExperimentScheduleToTerraform(struct?: SagemakerInferenceExperimentSchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_time: cdktn.stringToTerraform(struct!.endTime),
    start_time: cdktn.stringToTerraform(struct!.startTime),
  }
}


export function sagemakerInferenceExperimentScheduleToHclTerraform(struct?: SagemakerInferenceExperimentSchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_time: {
      value: cdktn.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktn.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceExperimentScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceExperimentSchedule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceExperimentSchedule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string;
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string;
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface SagemakerInferenceExperimentShadowModeConfigShadowModelVariants {
  /**
  * The percentage of inference requests that Amazon SageMaker replicates from the production variant to the shadow variant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#sampling_percentage SagemakerInferenceExperiment#sampling_percentage}
  */
  readonly samplingPercentage?: number;
  /**
  * The name of the shadow variant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#shadow_model_variant_name SagemakerInferenceExperiment#shadow_model_variant_name}
  */
  readonly shadowModelVariantName?: string;
}

export function sagemakerInferenceExperimentShadowModeConfigShadowModelVariantsToTerraform(struct?: SagemakerInferenceExperimentShadowModeConfigShadowModelVariants | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sampling_percentage: cdktn.numberToTerraform(struct!.samplingPercentage),
    shadow_model_variant_name: cdktn.stringToTerraform(struct!.shadowModelVariantName),
  }
}


export function sagemakerInferenceExperimentShadowModeConfigShadowModelVariantsToHclTerraform(struct?: SagemakerInferenceExperimentShadowModeConfigShadowModelVariants | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sampling_percentage: {
      value: cdktn.numberToHclTerraform(struct!.samplingPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shadow_model_variant_name: {
      value: cdktn.stringToHclTerraform(struct!.shadowModelVariantName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerInferenceExperimentShadowModeConfigShadowModelVariants | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._samplingPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingPercentage = this._samplingPercentage;
    }
    if (this._shadowModelVariantName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shadowModelVariantName = this._shadowModelVariantName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceExperimentShadowModeConfigShadowModelVariants | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._samplingPercentage = undefined;
      this._shadowModelVariantName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._samplingPercentage = value.samplingPercentage;
      this._shadowModelVariantName = value.shadowModelVariantName;
    }
  }

  // sampling_percentage - computed: true, optional: true, required: false
  private _samplingPercentage?: number;
  public get samplingPercentage() {
    return this.getNumberAttribute('sampling_percentage');
  }
  public set samplingPercentage(value: number) {
    this._samplingPercentage = value;
  }
  public resetSamplingPercentage() {
    this._samplingPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingPercentageInput() {
    return this._samplingPercentage;
  }

  // shadow_model_variant_name - computed: true, optional: true, required: false
  private _shadowModelVariantName?: string;
  public get shadowModelVariantName() {
    return this.getStringAttribute('shadow_model_variant_name');
  }
  public set shadowModelVariantName(value: string) {
    this._shadowModelVariantName = value;
  }
  public resetShadowModelVariantName() {
    this._shadowModelVariantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shadowModelVariantNameInput() {
    return this._shadowModelVariantName;
  }
}

export class SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceExperimentShadowModeConfigShadowModelVariants[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference {
    return new SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceExperimentShadowModeConfig {
  /**
  * List of shadow variant configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#shadow_model_variants SagemakerInferenceExperiment#shadow_model_variants}
  */
  readonly shadowModelVariants?: SagemakerInferenceExperimentShadowModeConfigShadowModelVariants[] | cdktn.IResolvable;
  /**
  * The name of the production variant, which takes all the inference requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#source_model_variant_name SagemakerInferenceExperiment#source_model_variant_name}
  */
  readonly sourceModelVariantName?: string;
}

export function sagemakerInferenceExperimentShadowModeConfigToTerraform(struct?: SagemakerInferenceExperimentShadowModeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    shadow_model_variants: cdktn.listMapper(sagemakerInferenceExperimentShadowModeConfigShadowModelVariantsToTerraform, false)(struct!.shadowModelVariants),
    source_model_variant_name: cdktn.stringToTerraform(struct!.sourceModelVariantName),
  }
}


export function sagemakerInferenceExperimentShadowModeConfigToHclTerraform(struct?: SagemakerInferenceExperimentShadowModeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    shadow_model_variants: {
      value: cdktn.listMapperHcl(sagemakerInferenceExperimentShadowModeConfigShadowModelVariantsToHclTerraform, false)(struct!.shadowModelVariants),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList",
    },
    source_model_variant_name: {
      value: cdktn.stringToHclTerraform(struct!.sourceModelVariantName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceExperimentShadowModeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceExperimentShadowModeConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shadowModelVariants?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shadowModelVariants = this._shadowModelVariants?.internalValue;
    }
    if (this._sourceModelVariantName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceModelVariantName = this._sourceModelVariantName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceExperimentShadowModeConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shadowModelVariants.internalValue = undefined;
      this._sourceModelVariantName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shadowModelVariants.internalValue = value.shadowModelVariants;
      this._sourceModelVariantName = value.sourceModelVariantName;
    }
  }

  // shadow_model_variants - computed: true, optional: true, required: false
  private _shadowModelVariants = new SagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList(this, "shadow_model_variants", false);
  public get shadowModelVariants() {
    return this._shadowModelVariants;
  }
  public putShadowModelVariants(value: SagemakerInferenceExperimentShadowModeConfigShadowModelVariants[] | cdktn.IResolvable) {
    this._shadowModelVariants.internalValue = value;
  }
  public resetShadowModelVariants() {
    this._shadowModelVariants.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shadowModelVariantsInput() {
    return this._shadowModelVariants.internalValue;
  }

  // source_model_variant_name - computed: true, optional: true, required: false
  private _sourceModelVariantName?: string;
  public get sourceModelVariantName() {
    return this.getStringAttribute('source_model_variant_name');
  }
  public set sourceModelVariantName(value: string) {
    this._sourceModelVariantName = value;
  }
  public resetSourceModelVariantName() {
    this._sourceModelVariantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceModelVariantNameInput() {
    return this._sourceModelVariantName;
  }
}
export interface SagemakerInferenceExperimentTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#key SagemakerInferenceExperiment#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#value SagemakerInferenceExperiment#value}
  */
  readonly value?: string;
}

export function sagemakerInferenceExperimentTagsToTerraform(struct?: SagemakerInferenceExperimentTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function sagemakerInferenceExperimentTagsToHclTerraform(struct?: SagemakerInferenceExperimentTags | cdktn.IResolvable): any {
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

export class SagemakerInferenceExperimentTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerInferenceExperimentTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerInferenceExperimentTags | cdktn.IResolvable | undefined) {
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

export class SagemakerInferenceExperimentTagsList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceExperimentTags[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceExperimentTagsOutputReference {
    return new SagemakerInferenceExperimentTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment awscc_sagemaker_inference_experiment}
*/
export class SagemakerInferenceExperiment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_inference_experiment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SagemakerInferenceExperiment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerInferenceExperiment to import
  * @param importFromId The id of the existing SagemakerInferenceExperiment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerInferenceExperiment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_inference_experiment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_experiment awscc_sagemaker_inference_experiment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerInferenceExperimentConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerInferenceExperimentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_inference_experiment',
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
    this._dataStorageConfig.internalValue = config.dataStorageConfig;
    this._description = config.description;
    this._desiredState = config.desiredState;
    this._endpointName = config.endpointName;
    this._kmsKey = config.kmsKey;
    this._modelVariants.internalValue = config.modelVariants;
    this._name = config.name;
    this._roleArn = config.roleArn;
    this._schedule.internalValue = config.schedule;
    this._shadowModeConfig.internalValue = config.shadowModeConfig;
    this._statusReason = config.statusReason;
    this._tags.internalValue = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // data_storage_config - computed: true, optional: true, required: false
  private _dataStorageConfig = new SagemakerInferenceExperimentDataStorageConfigOutputReference(this, "data_storage_config");
  public get dataStorageConfig() {
    return this._dataStorageConfig;
  }
  public putDataStorageConfig(value: SagemakerInferenceExperimentDataStorageConfig) {
    this._dataStorageConfig.internalValue = value;
  }
  public resetDataStorageConfig() {
    this._dataStorageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStorageConfigInput() {
    return this._dataStorageConfig.internalValue;
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

  // desired_state - computed: true, optional: true, required: false
  private _desiredState?: string;
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  public resetDesiredState() {
    this._desiredState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState;
  }

  // endpoint_metadata - computed: true, optional: false, required: false
  private _endpointMetadata = new SagemakerInferenceExperimentEndpointMetadataOutputReference(this, "endpoint_metadata");
  public get endpointMetadata() {
    return this._endpointMetadata;
  }

  // endpoint_name - computed: false, optional: false, required: true
  private _endpointName?: string;
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }
  public set endpointName(value: string) {
    this._endpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNameInput() {
    return this._endpointName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key - computed: true, optional: true, required: false
  private _kmsKey?: string;
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // model_variants - computed: false, optional: false, required: true
  private _modelVariants = new SagemakerInferenceExperimentModelVariantsList(this, "model_variants", false);
  public get modelVariants() {
    return this._modelVariants;
  }
  public putModelVariants(value: SagemakerInferenceExperimentModelVariants[] | cdktn.IResolvable) {
    this._modelVariants.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelVariantsInput() {
    return this._modelVariants.internalValue;
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // schedule - computed: true, optional: true, required: false
  private _schedule = new SagemakerInferenceExperimentScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: SagemakerInferenceExperimentSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // shadow_mode_config - computed: true, optional: true, required: false
  private _shadowModeConfig = new SagemakerInferenceExperimentShadowModeConfigOutputReference(this, "shadow_mode_config");
  public get shadowModeConfig() {
    return this._shadowModeConfig;
  }
  public putShadowModeConfig(value: SagemakerInferenceExperimentShadowModeConfig) {
    this._shadowModeConfig.internalValue = value;
  }
  public resetShadowModeConfig() {
    this._shadowModeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shadowModeConfigInput() {
    return this._shadowModeConfig.internalValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: true, required: false
  private _statusReason?: string;
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }
  public set statusReason(value: string) {
    this._statusReason = value;
  }
  public resetStatusReason() {
    this._statusReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusReasonInput() {
    return this._statusReason;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SagemakerInferenceExperimentTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SagemakerInferenceExperimentTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_storage_config: sagemakerInferenceExperimentDataStorageConfigToTerraform(this._dataStorageConfig.internalValue),
      description: cdktn.stringToTerraform(this._description),
      desired_state: cdktn.stringToTerraform(this._desiredState),
      endpoint_name: cdktn.stringToTerraform(this._endpointName),
      kms_key: cdktn.stringToTerraform(this._kmsKey),
      model_variants: cdktn.listMapper(sagemakerInferenceExperimentModelVariantsToTerraform, false)(this._modelVariants.internalValue),
      name: cdktn.stringToTerraform(this._name),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      schedule: sagemakerInferenceExperimentScheduleToTerraform(this._schedule.internalValue),
      shadow_mode_config: sagemakerInferenceExperimentShadowModeConfigToTerraform(this._shadowModeConfig.internalValue),
      status_reason: cdktn.stringToTerraform(this._statusReason),
      tags: cdktn.listMapper(sagemakerInferenceExperimentTagsToTerraform, false)(this._tags.internalValue),
      type: cdktn.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_storage_config: {
        value: sagemakerInferenceExperimentDataStorageConfigToHclTerraform(this._dataStorageConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerInferenceExperimentDataStorageConfig",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desired_state: {
        value: cdktn.stringToHclTerraform(this._desiredState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_name: {
        value: cdktn.stringToHclTerraform(this._endpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key: {
        value: cdktn.stringToHclTerraform(this._kmsKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_variants: {
        value: cdktn.listMapperHcl(sagemakerInferenceExperimentModelVariantsToHclTerraform, false)(this._modelVariants.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerInferenceExperimentModelVariantsList",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: sagemakerInferenceExperimentScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerInferenceExperimentSchedule",
      },
      shadow_mode_config: {
        value: sagemakerInferenceExperimentShadowModeConfigToHclTerraform(this._shadowModeConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerInferenceExperimentShadowModeConfig",
      },
      status_reason: {
        value: cdktn.stringToHclTerraform(this._statusReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(sagemakerInferenceExperimentTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerInferenceExperimentTagsList",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
