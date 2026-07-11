// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SagemakerModelPackageConfig extends cdktn.TerraformMetaArguments {
  /**
  * An array of additional Inference Specification objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#additional_inference_specifications SagemakerModelPackage#additional_inference_specifications}
  */
  readonly additionalInferenceSpecifications?: SagemakerModelPackageAdditionalInferenceSpecifications[] | cdktn.IResolvable;
  /**
  * An array of additional Inference Specification objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#additional_inference_specifications_to_add SagemakerModelPackage#additional_inference_specifications_to_add}
  */
  readonly additionalInferenceSpecificationsToAdd?: SagemakerModelPackageAdditionalInferenceSpecificationsToAdd[] | cdktn.IResolvable;
  /**
  * A description provided for the model approval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#approval_description SagemakerModelPackage#approval_description}
  */
  readonly approvalDescription?: string;
  /**
  * Whether to certify the model package for listing on AWS Marketplace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#certify_for_marketplace SagemakerModelPackage#certify_for_marketplace}
  */
  readonly certifyForMarketplace?: boolean | cdktn.IResolvable;
  /**
  * A unique token that guarantees that the call to this API is idempotent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#client_token SagemakerModelPackage#client_token}
  */
  readonly clientToken?: string;
  /**
  * The metadata properties associated with the model package versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#customer_metadata_properties SagemakerModelPackage#customer_metadata_properties}
  */
  readonly customerMetadataProperties?: { [key: string]: string };
  /**
  * The machine learning domain of the model package you specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#domain SagemakerModelPackage#domain}
  */
  readonly domain?: string;
  /**
  * Represents the drift check baselines that can be used when the model monitor is set using the model package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#drift_check_baselines SagemakerModelPackage#drift_check_baselines}
  */
  readonly driftCheckBaselines?: SagemakerModelPackageDriftCheckBaselines;
  /**
  * Details about inference jobs that can be run with models based on this model package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#inference_specification SagemakerModelPackage#inference_specification}
  */
  readonly inferenceSpecification?: SagemakerModelPackageInferenceSpecification;
  /**
  * Metadata properties of the tracking entity, trial, or trial component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#metadata_properties SagemakerModelPackage#metadata_properties}
  */
  readonly metadataProperties?: SagemakerModelPackageMetadataProperties;
  /**
  * The approval status of the model package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#model_approval_status SagemakerModelPackage#model_approval_status}
  */
  readonly modelApprovalStatus?: string;
  /**
  * The model card associated with the model package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#model_card SagemakerModelPackage#model_card}
  */
  readonly modelCard?: SagemakerModelPackageModelCard;
  /**
  * A structure that contains model metrics reports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#model_metrics SagemakerModelPackage#model_metrics}
  */
  readonly modelMetrics?: SagemakerModelPackageModelMetrics;
  /**
  * The description of the model package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#model_package_description SagemakerModelPackage#model_package_description}
  */
  readonly modelPackageDescription?: string;
  /**
  * The name of the model package group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#model_package_group_name SagemakerModelPackage#model_package_group_name}
  */
  readonly modelPackageGroupName?: string;
  /**
  * The name or arn of the model package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#model_package_name SagemakerModelPackage#model_package_name}
  */
  readonly modelPackageName?: string;
  /**
  * Details about the current status of the model package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#model_package_status_details SagemakerModelPackage#model_package_status_details}
  */
  readonly modelPackageStatusDetails?: SagemakerModelPackageModelPackageStatusDetails;
  /**
  * The version of the model package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#model_package_version SagemakerModelPackage#model_package_version}
  */
  readonly modelPackageVersion?: number;
  /**
  * The Amazon Simple Storage Service (Amazon S3) path where the sample payload are stored pointing to single gzip compressed tar archive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#sample_payload_url SagemakerModelPackage#sample_payload_url}
  */
  readonly samplePayloadUrl?: string;
  /**
  * An optional AWS Key Management Service key to encrypt, decrypt, and re-encrypt model package information for regulated workloads with highly sensitive data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#security_config SagemakerModelPackage#security_config}
  */
  readonly securityConfig?: SagemakerModelPackageSecurityConfig;
  /**
  * Indicates if you want to skip model validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#skip_model_validation SagemakerModelPackage#skip_model_validation}
  */
  readonly skipModelValidation?: string;
  /**
  * Details about the algorithm that was used to create the model package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#source_algorithm_specification SagemakerModelPackage#source_algorithm_specification}
  */
  readonly sourceAlgorithmSpecification?: SagemakerModelPackageSourceAlgorithmSpecification;
  /**
  * The URI of the source for the model package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#source_uri SagemakerModelPackage#source_uri}
  */
  readonly sourceUri?: string;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#tags SagemakerModelPackage#tags}
  */
  readonly tags?: SagemakerModelPackageTags[] | cdktn.IResolvable;
  /**
  * The machine learning task your model package accomplishes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#task SagemakerModelPackage#task}
  */
  readonly task?: string;
  /**
  * Specifies configurations for one or more transform jobs that Amazon SageMaker runs to test the model package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#validation_specification SagemakerModelPackage#validation_specification}
  */
  readonly validationSpecification?: SagemakerModelPackageValidationSpecification;
}
export interface SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceModelAccessConfig {
  /**
  * Specifies agreement to the model end-user license agreement (EULA).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#accept_eula SagemakerModelPackage#accept_eula}
  */
  readonly acceptEula?: boolean | cdktn.IResolvable;
}

export function sagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceModelAccessConfigToTerraform(struct?: SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accept_eula: cdktn.booleanToTerraform(struct!.acceptEula),
  }
}


export function sagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceModelAccessConfigToHclTerraform(struct?: SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accept_eula: {
      value: cdktn.booleanToHclTerraform(struct!.acceptEula),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptEula !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptEula = this._acceptEula;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptEula = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptEula = value.acceptEula;
    }
  }

  // accept_eula - computed: true, optional: true, required: false
  private _acceptEula?: boolean | cdktn.IResolvable;
  public get acceptEula() {
    return this.getBooleanAttribute('accept_eula');
  }
  public set acceptEula(value: boolean | cdktn.IResolvable) {
    this._acceptEula = value;
  }
  public resetAcceptEula() {
    this._acceptEula = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptEulaInput() {
    return this._acceptEula;
  }
}
export interface SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSource {
  /**
  * Specifies how the ML model data is prepared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#compression_type SagemakerModelPackage#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Specifies the access configuration file for the ML model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#model_access_config SagemakerModelPackage#model_access_config}
  */
  readonly modelAccessConfig?: SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceModelAccessConfig;
  /**
  * Specifies the type of ML model data to deploy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#s3_data_type SagemakerModelPackage#s3_data_type}
  */
  readonly s3DataType?: string;
  /**
  * Specifies the S3 path of ML model data to deploy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#s3_uri SagemakerModelPackage#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceToTerraform(struct?: SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compression_type: cdktn.stringToTerraform(struct!.compressionType),
    model_access_config: sagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceModelAccessConfigToTerraform(struct!.modelAccessConfig),
    s3_data_type: cdktn.stringToTerraform(struct!.s3DataType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceToHclTerraform(struct?: SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compression_type: {
      value: cdktn.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_access_config: {
      value: sagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceModelAccessConfigToHclTerraform(struct!.modelAccessConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceModelAccessConfig",
    },
    s3_data_type: {
      value: cdktn.stringToHclTerraform(struct!.s3DataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._modelAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelAccessConfig = this._modelAccessConfig?.internalValue;
    }
    if (this._s3DataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataType = this._s3DataType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionType = undefined;
      this._modelAccessConfig.internalValue = undefined;
      this._s3DataType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionType = value.compressionType;
      this._modelAccessConfig.internalValue = value.modelAccessConfig;
      this._s3DataType = value.s3DataType;
      this._s3Uri = value.s3Uri;
    }
  }

  // compression_type - computed: true, optional: true, required: false
  private _compressionType?: string;
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // model_access_config - computed: true, optional: true, required: false
  private _modelAccessConfig = new SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference(this, "model_access_config");
  public get modelAccessConfig() {
    return this._modelAccessConfig;
  }
  public putModelAccessConfig(value: SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceModelAccessConfig) {
    this._modelAccessConfig.internalValue = value;
  }
  public resetModelAccessConfig() {
    this._modelAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelAccessConfigInput() {
    return this._modelAccessConfig.internalValue;
  }

  // s3_data_type - computed: true, optional: true, required: false
  private _s3DataType?: string;
  public get s3DataType() {
    return this.getStringAttribute('s3_data_type');
  }
  public set s3DataType(value: string) {
    this._s3DataType = value;
  }
  public resetS3DataType() {
    this._s3DataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataTypeInput() {
    return this._s3DataType;
  }

  // s3_uri - computed: true, optional: true, required: false
  private _s3Uri?: string;
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSource {
  /**
  * Specifies the S3 location of ML model data to deploy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#s3_data_source SagemakerModelPackage#s3_data_source}
  */
  readonly s3DataSource?: SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSource;
}

export function sagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceToTerraform(struct?: SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_data_source: sagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceToTerraform(struct!.s3DataSource),
  }
}


export function sagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceToHclTerraform(struct?: SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_data_source: {
      value: sagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceToHclTerraform(struct!.s3DataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3DataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataSource = this._s3DataSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3DataSource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3DataSource.internalValue = value.s3DataSource;
    }
  }

  // s3_data_source - computed: true, optional: true, required: false
  private _s3DataSource = new SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSourceOutputReference(this, "s3_data_source");
  public get s3DataSource() {
    return this._s3DataSource;
  }
  public putS3DataSource(value: SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceS3DataSource) {
    this._s3DataSource.internalValue = value;
  }
  public resetS3DataSource() {
    this._s3DataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataSourceInput() {
    return this._s3DataSource.internalValue;
  }
}
export interface SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelInput {
  /**
  * The input configuration object for the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#data_input_config SagemakerModelPackage#data_input_config}
  */
  readonly dataInputConfig?: string;
}

export function sagemakerModelPackageAdditionalInferenceSpecificationsContainersModelInputToTerraform(struct?: SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_input_config: cdktn.stringToTerraform(struct!.dataInputConfig),
  }
}


export function sagemakerModelPackageAdditionalInferenceSpecificationsContainersModelInputToHclTerraform(struct?: SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelInput | cdktn.IResolvable): any {
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

export class SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelInput | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelInput | cdktn.IResolvable | undefined) {
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
export interface SagemakerModelPackageAdditionalInferenceSpecificationsContainers {
  /**
  * The DNS host name for the Docker container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#container_hostname SagemakerModelPackage#container_hostname}
  */
  readonly containerHostname?: string;
  /**
  * Sets the environment variables in the Docker container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#environment SagemakerModelPackage#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * The machine learning framework of the model package container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#framework SagemakerModelPackage#framework}
  */
  readonly framework?: string;
  /**
  * The framework version of the Model Package Container Image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#framework_version SagemakerModelPackage#framework_version}
  */
  readonly frameworkVersion?: string;
  /**
  * The Amazon EC2 Container Registry (Amazon ECR) path where inference code is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#image SagemakerModelPackage#image}
  */
  readonly image?: string;
  /**
  * An MD5 hash of the training algorithm that identifies the Docker image used for training.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#image_digest SagemakerModelPackage#image_digest}
  */
  readonly imageDigest?: string;
  /**
  * Specifies the location of ML model data to deploy during endpoint creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#model_data_source SagemakerModelPackage#model_data_source}
  */
  readonly modelDataSource?: SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSource;
  /**
  * A structure with Model Input details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#model_data_url SagemakerModelPackage#model_data_url}
  */
  readonly modelDataUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#model_input SagemakerModelPackage#model_input}
  */
  readonly modelInput?: SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelInput;
  /**
  * The name of a pre-trained machine learning benchmarked by Amazon SageMaker Inference Recommender model that matches your model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#nearest_model_name SagemakerModelPackage#nearest_model_name}
  */
  readonly nearestModelName?: string;
}

export function sagemakerModelPackageAdditionalInferenceSpecificationsContainersToTerraform(struct?: SagemakerModelPackageAdditionalInferenceSpecificationsContainers | cdktn.IResolvable): any {
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
    model_data_source: sagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceToTerraform(struct!.modelDataSource),
    model_data_url: cdktn.stringToTerraform(struct!.modelDataUrl),
    model_input: sagemakerModelPackageAdditionalInferenceSpecificationsContainersModelInputToTerraform(struct!.modelInput),
    nearest_model_name: cdktn.stringToTerraform(struct!.nearestModelName),
  }
}


export function sagemakerModelPackageAdditionalInferenceSpecificationsContainersToHclTerraform(struct?: SagemakerModelPackageAdditionalInferenceSpecificationsContainers | cdktn.IResolvable): any {
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
    model_data_source: {
      value: sagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceToHclTerraform(struct!.modelDataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSource",
    },
    model_data_url: {
      value: cdktn.stringToHclTerraform(struct!.modelDataUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_input: {
      value: sagemakerModelPackageAdditionalInferenceSpecificationsContainersModelInputToHclTerraform(struct!.modelInput),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelInput",
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

export class SagemakerModelPackageAdditionalInferenceSpecificationsContainersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerModelPackageAdditionalInferenceSpecificationsContainers | cdktn.IResolvable | undefined {
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
    if (this._modelDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataSource = this._modelDataSource?.internalValue;
    }
    if (this._modelDataUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataUrl = this._modelDataUrl;
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

  public set internalValue(value: SagemakerModelPackageAdditionalInferenceSpecificationsContainers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerHostname = undefined;
      this._environment = undefined;
      this._framework = undefined;
      this._frameworkVersion = undefined;
      this._image = undefined;
      this._imageDigest = undefined;
      this._modelDataSource.internalValue = undefined;
      this._modelDataUrl = undefined;
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
      this._modelDataSource.internalValue = value.modelDataSource;
      this._modelDataUrl = value.modelDataUrl;
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

  // model_data_source - computed: true, optional: true, required: false
  private _modelDataSource = new SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSourceOutputReference(this, "model_data_source");
  public get modelDataSource() {
    return this._modelDataSource;
  }
  public putModelDataSource(value: SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelDataSource) {
    this._modelDataSource.internalValue = value;
  }
  public resetModelDataSource() {
    this._modelDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataSourceInput() {
    return this._modelDataSource.internalValue;
  }

  // model_data_url - computed: true, optional: true, required: false
  private _modelDataUrl?: string;
  public get modelDataUrl() {
    return this.getStringAttribute('model_data_url');
  }
  public set modelDataUrl(value: string) {
    this._modelDataUrl = value;
  }
  public resetModelDataUrl() {
    this._modelDataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataUrlInput() {
    return this._modelDataUrl;
  }

  // model_input - computed: true, optional: true, required: false
  private _modelInput = new SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelInputOutputReference(this, "model_input");
  public get modelInput() {
    return this._modelInput;
  }
  public putModelInput(value: SagemakerModelPackageAdditionalInferenceSpecificationsContainersModelInput) {
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

export class SagemakerModelPackageAdditionalInferenceSpecificationsContainersList extends cdktn.ComplexList {
  public internalValue? : SagemakerModelPackageAdditionalInferenceSpecificationsContainers[] | cdktn.IResolvable

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
  public get(index: number): SagemakerModelPackageAdditionalInferenceSpecificationsContainersOutputReference {
    return new SagemakerModelPackageAdditionalInferenceSpecificationsContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerModelPackageAdditionalInferenceSpecifications {
  /**
  * The Amazon ECR registry path of the Docker image that contains the inference code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#containers SagemakerModelPackage#containers}
  */
  readonly containers?: SagemakerModelPackageAdditionalInferenceSpecificationsContainers[] | cdktn.IResolvable;
  /**
  * A description of the additional Inference specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#description SagemakerModelPackage#description}
  */
  readonly description?: string;
  /**
  * A unique name to identify the additional inference specification. The name must be unique within the list of your additional inference specifications for a particular model package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#name SagemakerModelPackage#name}
  */
  readonly name?: string;
  /**
  * The supported MIME types for the input data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#supported_content_types SagemakerModelPackage#supported_content_types}
  */
  readonly supportedContentTypes?: string[];
  /**
  * A list of the instance types that are used to generate inferences in real-time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#supported_realtime_inference_instance_types SagemakerModelPackage#supported_realtime_inference_instance_types}
  */
  readonly supportedRealtimeInferenceInstanceTypes?: string[];
  /**
  * The supported MIME types for the output data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#supported_response_mime_types SagemakerModelPackage#supported_response_mime_types}
  */
  readonly supportedResponseMimeTypes?: string[];
  /**
  * A list of the instance types on which a transformation job can be run or on which an endpoint can be deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#supported_transform_instance_types SagemakerModelPackage#supported_transform_instance_types}
  */
  readonly supportedTransformInstanceTypes?: string[];
}

export function sagemakerModelPackageAdditionalInferenceSpecificationsToTerraform(struct?: SagemakerModelPackageAdditionalInferenceSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    containers: cdktn.listMapper(sagemakerModelPackageAdditionalInferenceSpecificationsContainersToTerraform, false)(struct!.containers),
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    supported_content_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedContentTypes),
    supported_realtime_inference_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedRealtimeInferenceInstanceTypes),
    supported_response_mime_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedResponseMimeTypes),
    supported_transform_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedTransformInstanceTypes),
  }
}


export function sagemakerModelPackageAdditionalInferenceSpecificationsToHclTerraform(struct?: SagemakerModelPackageAdditionalInferenceSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    containers: {
      value: cdktn.listMapperHcl(sagemakerModelPackageAdditionalInferenceSpecificationsContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerModelPackageAdditionalInferenceSpecificationsContainersList",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class SagemakerModelPackageAdditionalInferenceSpecificationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerModelPackageAdditionalInferenceSpecifications | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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

  public set internalValue(value: SagemakerModelPackageAdditionalInferenceSpecifications | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers.internalValue = undefined;
      this._description = undefined;
      this._name = undefined;
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
      this._description = value.description;
      this._name = value.name;
      this._supportedContentTypes = value.supportedContentTypes;
      this._supportedRealtimeInferenceInstanceTypes = value.supportedRealtimeInferenceInstanceTypes;
      this._supportedResponseMimeTypes = value.supportedResponseMimeTypes;
      this._supportedTransformInstanceTypes = value.supportedTransformInstanceTypes;
    }
  }

  // containers - computed: true, optional: true, required: false
  private _containers = new SagemakerModelPackageAdditionalInferenceSpecificationsContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: SagemakerModelPackageAdditionalInferenceSpecificationsContainers[] | cdktn.IResolvable) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
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

export class SagemakerModelPackageAdditionalInferenceSpecificationsList extends cdktn.ComplexList {
  public internalValue? : SagemakerModelPackageAdditionalInferenceSpecifications[] | cdktn.IResolvable

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
  public get(index: number): SagemakerModelPackageAdditionalInferenceSpecificationsOutputReference {
    return new SagemakerModelPackageAdditionalInferenceSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfig {
  /**
  * Specifies agreement to the model end-user license agreement (EULA).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#accept_eula SagemakerModelPackage#accept_eula}
  */
  readonly acceptEula?: boolean | cdktn.IResolvable;
}

export function sagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfigToTerraform(struct?: SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accept_eula: cdktn.booleanToTerraform(struct!.acceptEula),
  }
}


export function sagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfigToHclTerraform(struct?: SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accept_eula: {
      value: cdktn.booleanToHclTerraform(struct!.acceptEula),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptEula !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptEula = this._acceptEula;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptEula = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptEula = value.acceptEula;
    }
  }

  // accept_eula - computed: true, optional: true, required: false
  private _acceptEula?: boolean | cdktn.IResolvable;
  public get acceptEula() {
    return this.getBooleanAttribute('accept_eula');
  }
  public set acceptEula(value: boolean | cdktn.IResolvable) {
    this._acceptEula = value;
  }
  public resetAcceptEula() {
    this._acceptEula = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptEulaInput() {
    return this._acceptEula;
  }
}
export interface SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSource {
  /**
  * Specifies how the ML model data is prepared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#compression_type SagemakerModelPackage#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Specifies the access configuration file for the ML model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#model_access_config SagemakerModelPackage#model_access_config}
  */
  readonly modelAccessConfig?: SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfig;
  /**
  * Specifies the type of ML model data to deploy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#s3_data_type SagemakerModelPackage#s3_data_type}
  */
  readonly s3DataType?: string;
  /**
  * Specifies the S3 path of ML model data to deploy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#s3_uri SagemakerModelPackage#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceToTerraform(struct?: SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compression_type: cdktn.stringToTerraform(struct!.compressionType),
    model_access_config: sagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfigToTerraform(struct!.modelAccessConfig),
    s3_data_type: cdktn.stringToTerraform(struct!.s3DataType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceToHclTerraform(struct?: SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compression_type: {
      value: cdktn.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_access_config: {
      value: sagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfigToHclTerraform(struct!.modelAccessConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfig",
    },
    s3_data_type: {
      value: cdktn.stringToHclTerraform(struct!.s3DataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._modelAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelAccessConfig = this._modelAccessConfig?.internalValue;
    }
    if (this._s3DataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataType = this._s3DataType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionType = undefined;
      this._modelAccessConfig.internalValue = undefined;
      this._s3DataType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionType = value.compressionType;
      this._modelAccessConfig.internalValue = value.modelAccessConfig;
      this._s3DataType = value.s3DataType;
      this._s3Uri = value.s3Uri;
    }
  }

  // compression_type - computed: true, optional: true, required: false
  private _compressionType?: string;
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // model_access_config - computed: true, optional: true, required: false
  private _modelAccessConfig = new SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference(this, "model_access_config");
  public get modelAccessConfig() {
    return this._modelAccessConfig;
  }
  public putModelAccessConfig(value: SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfig) {
    this._modelAccessConfig.internalValue = value;
  }
  public resetModelAccessConfig() {
    this._modelAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelAccessConfigInput() {
    return this._modelAccessConfig.internalValue;
  }

  // s3_data_type - computed: true, optional: true, required: false
  private _s3DataType?: string;
  public get s3DataType() {
    return this.getStringAttribute('s3_data_type');
  }
  public set s3DataType(value: string) {
    this._s3DataType = value;
  }
  public resetS3DataType() {
    this._s3DataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataTypeInput() {
    return this._s3DataType;
  }

  // s3_uri - computed: true, optional: true, required: false
  private _s3Uri?: string;
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSource {
  /**
  * Specifies the S3 location of ML model data to deploy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#s3_data_source SagemakerModelPackage#s3_data_source}
  */
  readonly s3DataSource?: SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSource;
}

export function sagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceToTerraform(struct?: SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_data_source: sagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceToTerraform(struct!.s3DataSource),
  }
}


export function sagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceToHclTerraform(struct?: SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_data_source: {
      value: sagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceToHclTerraform(struct!.s3DataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3DataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataSource = this._s3DataSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3DataSource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3DataSource.internalValue = value.s3DataSource;
    }
  }

  // s3_data_source - computed: true, optional: true, required: false
  private _s3DataSource = new SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceOutputReference(this, "s3_data_source");
  public get s3DataSource() {
    return this._s3DataSource;
  }
  public putS3DataSource(value: SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSource) {
    this._s3DataSource.internalValue = value;
  }
  public resetS3DataSource() {
    this._s3DataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataSourceInput() {
    return this._s3DataSource.internalValue;
  }
}
export interface SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelInput {
  /**
  * The input configuration object for the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#data_input_config SagemakerModelPackage#data_input_config}
  */
  readonly dataInputConfig?: string;
}

export function sagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelInputToTerraform(struct?: SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_input_config: cdktn.stringToTerraform(struct!.dataInputConfig),
  }
}


export function sagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelInputToHclTerraform(struct?: SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelInput | cdktn.IResolvable): any {
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

export class SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelInput | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelInput | cdktn.IResolvable | undefined) {
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
export interface SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainers {
  /**
  * The DNS host name for the Docker container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#container_hostname SagemakerModelPackage#container_hostname}
  */
  readonly containerHostname?: string;
  /**
  * Sets the environment variables in the Docker container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#environment SagemakerModelPackage#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * The machine learning framework of the model package container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#framework SagemakerModelPackage#framework}
  */
  readonly framework?: string;
  /**
  * The framework version of the Model Package Container Image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#framework_version SagemakerModelPackage#framework_version}
  */
  readonly frameworkVersion?: string;
  /**
  * The Amazon EC2 Container Registry (Amazon ECR) path where inference code is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#image SagemakerModelPackage#image}
  */
  readonly image?: string;
  /**
  * An MD5 hash of the training algorithm that identifies the Docker image used for training.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#image_digest SagemakerModelPackage#image_digest}
  */
  readonly imageDigest?: string;
  /**
  * Specifies the location of ML model data to deploy during endpoint creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#model_data_source SagemakerModelPackage#model_data_source}
  */
  readonly modelDataSource?: SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSource;
  /**
  * A structure with Model Input details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#model_data_url SagemakerModelPackage#model_data_url}
  */
  readonly modelDataUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#model_input SagemakerModelPackage#model_input}
  */
  readonly modelInput?: SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelInput;
  /**
  * The name of a pre-trained machine learning benchmarked by Amazon SageMaker Inference Recommender model that matches your model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#nearest_model_name SagemakerModelPackage#nearest_model_name}
  */
  readonly nearestModelName?: string;
}

export function sagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersToTerraform(struct?: SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainers | cdktn.IResolvable): any {
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
    model_data_source: sagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceToTerraform(struct!.modelDataSource),
    model_data_url: cdktn.stringToTerraform(struct!.modelDataUrl),
    model_input: sagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelInputToTerraform(struct!.modelInput),
    nearest_model_name: cdktn.stringToTerraform(struct!.nearestModelName),
  }
}


export function sagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersToHclTerraform(struct?: SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainers | cdktn.IResolvable): any {
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
    model_data_source: {
      value: sagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceToHclTerraform(struct!.modelDataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSource",
    },
    model_data_url: {
      value: cdktn.stringToHclTerraform(struct!.modelDataUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_input: {
      value: sagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelInputToHclTerraform(struct!.modelInput),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelInput",
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

export class SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainers | cdktn.IResolvable | undefined {
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
    if (this._modelDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataSource = this._modelDataSource?.internalValue;
    }
    if (this._modelDataUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataUrl = this._modelDataUrl;
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

  public set internalValue(value: SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerHostname = undefined;
      this._environment = undefined;
      this._framework = undefined;
      this._frameworkVersion = undefined;
      this._image = undefined;
      this._imageDigest = undefined;
      this._modelDataSource.internalValue = undefined;
      this._modelDataUrl = undefined;
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
      this._modelDataSource.internalValue = value.modelDataSource;
      this._modelDataUrl = value.modelDataUrl;
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

  // model_data_source - computed: true, optional: true, required: false
  private _modelDataSource = new SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceOutputReference(this, "model_data_source");
  public get modelDataSource() {
    return this._modelDataSource;
  }
  public putModelDataSource(value: SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSource) {
    this._modelDataSource.internalValue = value;
  }
  public resetModelDataSource() {
    this._modelDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataSourceInput() {
    return this._modelDataSource.internalValue;
  }

  // model_data_url - computed: true, optional: true, required: false
  private _modelDataUrl?: string;
  public get modelDataUrl() {
    return this.getStringAttribute('model_data_url');
  }
  public set modelDataUrl(value: string) {
    this._modelDataUrl = value;
  }
  public resetModelDataUrl() {
    this._modelDataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataUrlInput() {
    return this._modelDataUrl;
  }

  // model_input - computed: true, optional: true, required: false
  private _modelInput = new SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelInputOutputReference(this, "model_input");
  public get modelInput() {
    return this._modelInput;
  }
  public putModelInput(value: SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersModelInput) {
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

export class SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersList extends cdktn.ComplexList {
  public internalValue? : SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainers[] | cdktn.IResolvable

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
  public get(index: number): SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersOutputReference {
    return new SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerModelPackageAdditionalInferenceSpecificationsToAdd {
  /**
  * The Amazon ECR registry path of the Docker image that contains the inference code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#containers SagemakerModelPackage#containers}
  */
  readonly containers?: SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainers[] | cdktn.IResolvable;
  /**
  * A description of the additional Inference specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#description SagemakerModelPackage#description}
  */
  readonly description?: string;
  /**
  * A unique name to identify the additional inference specification. The name must be unique within the list of your additional inference specifications for a particular model package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#name SagemakerModelPackage#name}
  */
  readonly name?: string;
  /**
  * The supported MIME types for the input data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#supported_content_types SagemakerModelPackage#supported_content_types}
  */
  readonly supportedContentTypes?: string[];
  /**
  * A list of the instance types that are used to generate inferences in real-time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#supported_realtime_inference_instance_types SagemakerModelPackage#supported_realtime_inference_instance_types}
  */
  readonly supportedRealtimeInferenceInstanceTypes?: string[];
  /**
  * The supported MIME types for the output data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#supported_response_mime_types SagemakerModelPackage#supported_response_mime_types}
  */
  readonly supportedResponseMimeTypes?: string[];
  /**
  * A list of the instance types on which a transformation job can be run or on which an endpoint can be deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#supported_transform_instance_types SagemakerModelPackage#supported_transform_instance_types}
  */
  readonly supportedTransformInstanceTypes?: string[];
}

export function sagemakerModelPackageAdditionalInferenceSpecificationsToAddToTerraform(struct?: SagemakerModelPackageAdditionalInferenceSpecificationsToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    containers: cdktn.listMapper(sagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersToTerraform, false)(struct!.containers),
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    supported_content_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedContentTypes),
    supported_realtime_inference_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedRealtimeInferenceInstanceTypes),
    supported_response_mime_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedResponseMimeTypes),
    supported_transform_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedTransformInstanceTypes),
  }
}


export function sagemakerModelPackageAdditionalInferenceSpecificationsToAddToHclTerraform(struct?: SagemakerModelPackageAdditionalInferenceSpecificationsToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    containers: {
      value: cdktn.listMapperHcl(sagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersList",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class SagemakerModelPackageAdditionalInferenceSpecificationsToAddOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerModelPackageAdditionalInferenceSpecificationsToAdd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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

  public set internalValue(value: SagemakerModelPackageAdditionalInferenceSpecificationsToAdd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers.internalValue = undefined;
      this._description = undefined;
      this._name = undefined;
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
      this._description = value.description;
      this._name = value.name;
      this._supportedContentTypes = value.supportedContentTypes;
      this._supportedRealtimeInferenceInstanceTypes = value.supportedRealtimeInferenceInstanceTypes;
      this._supportedResponseMimeTypes = value.supportedResponseMimeTypes;
      this._supportedTransformInstanceTypes = value.supportedTransformInstanceTypes;
    }
  }

  // containers - computed: true, optional: true, required: false
  private _containers = new SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: SagemakerModelPackageAdditionalInferenceSpecificationsToAddContainers[] | cdktn.IResolvable) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
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

export class SagemakerModelPackageAdditionalInferenceSpecificationsToAddList extends cdktn.ComplexList {
  public internalValue? : SagemakerModelPackageAdditionalInferenceSpecificationsToAdd[] | cdktn.IResolvable

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
  public get(index: number): SagemakerModelPackageAdditionalInferenceSpecificationsToAddOutputReference {
    return new SagemakerModelPackageAdditionalInferenceSpecificationsToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerModelPackageDriftCheckBaselinesBiasConfigFile {
  /**
  * The digest of the file source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_digest SagemakerModelPackage#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * The type of content stored in the file source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_type SagemakerModelPackage#content_type}
  */
  readonly contentType?: string;
  /**
  * The Amazon S3 URI for the file source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#s3_uri SagemakerModelPackage#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerModelPackageDriftCheckBaselinesBiasConfigFileToTerraform(struct?: SagemakerModelPackageDriftCheckBaselinesBiasConfigFile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_digest: cdktn.stringToTerraform(struct!.contentDigest),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerModelPackageDriftCheckBaselinesBiasConfigFileToHclTerraform(struct?: SagemakerModelPackageDriftCheckBaselinesBiasConfigFile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_digest: {
      value: cdktn.stringToHclTerraform(struct!.contentDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageDriftCheckBaselinesBiasConfigFileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageDriftCheckBaselinesBiasConfigFile | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageDriftCheckBaselinesBiasConfigFile | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: true, optional: true, required: false
  private _contentDigest?: string;
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // s3_uri - computed: true, optional: true, required: false
  private _s3Uri?: string;
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface SagemakerModelPackageDriftCheckBaselinesBiasPostTrainingConstraints {
  /**
  * The digest of the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_digest SagemakerModelPackage#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * The type of content stored in the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_type SagemakerModelPackage#content_type}
  */
  readonly contentType?: string;
  /**
  * The Amazon S3 URI for the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#s3_uri SagemakerModelPackage#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerModelPackageDriftCheckBaselinesBiasPostTrainingConstraintsToTerraform(struct?: SagemakerModelPackageDriftCheckBaselinesBiasPostTrainingConstraints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_digest: cdktn.stringToTerraform(struct!.contentDigest),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerModelPackageDriftCheckBaselinesBiasPostTrainingConstraintsToHclTerraform(struct?: SagemakerModelPackageDriftCheckBaselinesBiasPostTrainingConstraints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_digest: {
      value: cdktn.stringToHclTerraform(struct!.contentDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageDriftCheckBaselinesBiasPostTrainingConstraintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageDriftCheckBaselinesBiasPostTrainingConstraints | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageDriftCheckBaselinesBiasPostTrainingConstraints | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: true, optional: true, required: false
  private _contentDigest?: string;
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // s3_uri - computed: true, optional: true, required: false
  private _s3Uri?: string;
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface SagemakerModelPackageDriftCheckBaselinesBiasPreTrainingConstraints {
  /**
  * The digest of the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_digest SagemakerModelPackage#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * The type of content stored in the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_type SagemakerModelPackage#content_type}
  */
  readonly contentType?: string;
  /**
  * The Amazon S3 URI for the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#s3_uri SagemakerModelPackage#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerModelPackageDriftCheckBaselinesBiasPreTrainingConstraintsToTerraform(struct?: SagemakerModelPackageDriftCheckBaselinesBiasPreTrainingConstraints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_digest: cdktn.stringToTerraform(struct!.contentDigest),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerModelPackageDriftCheckBaselinesBiasPreTrainingConstraintsToHclTerraform(struct?: SagemakerModelPackageDriftCheckBaselinesBiasPreTrainingConstraints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_digest: {
      value: cdktn.stringToHclTerraform(struct!.contentDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageDriftCheckBaselinesBiasPreTrainingConstraintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageDriftCheckBaselinesBiasPreTrainingConstraints | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageDriftCheckBaselinesBiasPreTrainingConstraints | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: true, optional: true, required: false
  private _contentDigest?: string;
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // s3_uri - computed: true, optional: true, required: false
  private _s3Uri?: string;
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface SagemakerModelPackageDriftCheckBaselinesBias {
  /**
  * Represents a File Source Object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#config_file SagemakerModelPackage#config_file}
  */
  readonly configFile?: SagemakerModelPackageDriftCheckBaselinesBiasConfigFile;
  /**
  * Represents a Metric Source Object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#post_training_constraints SagemakerModelPackage#post_training_constraints}
  */
  readonly postTrainingConstraints?: SagemakerModelPackageDriftCheckBaselinesBiasPostTrainingConstraints;
  /**
  * Represents a Metric Source Object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#pre_training_constraints SagemakerModelPackage#pre_training_constraints}
  */
  readonly preTrainingConstraints?: SagemakerModelPackageDriftCheckBaselinesBiasPreTrainingConstraints;
}

export function sagemakerModelPackageDriftCheckBaselinesBiasToTerraform(struct?: SagemakerModelPackageDriftCheckBaselinesBias | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    config_file: sagemakerModelPackageDriftCheckBaselinesBiasConfigFileToTerraform(struct!.configFile),
    post_training_constraints: sagemakerModelPackageDriftCheckBaselinesBiasPostTrainingConstraintsToTerraform(struct!.postTrainingConstraints),
    pre_training_constraints: sagemakerModelPackageDriftCheckBaselinesBiasPreTrainingConstraintsToTerraform(struct!.preTrainingConstraints),
  }
}


export function sagemakerModelPackageDriftCheckBaselinesBiasToHclTerraform(struct?: SagemakerModelPackageDriftCheckBaselinesBias | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    config_file: {
      value: sagemakerModelPackageDriftCheckBaselinesBiasConfigFileToHclTerraform(struct!.configFile),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageDriftCheckBaselinesBiasConfigFile",
    },
    post_training_constraints: {
      value: sagemakerModelPackageDriftCheckBaselinesBiasPostTrainingConstraintsToHclTerraform(struct!.postTrainingConstraints),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageDriftCheckBaselinesBiasPostTrainingConstraints",
    },
    pre_training_constraints: {
      value: sagemakerModelPackageDriftCheckBaselinesBiasPreTrainingConstraintsToHclTerraform(struct!.preTrainingConstraints),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageDriftCheckBaselinesBiasPreTrainingConstraints",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageDriftCheckBaselinesBiasOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageDriftCheckBaselinesBias | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configFile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configFile = this._configFile?.internalValue;
    }
    if (this._postTrainingConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postTrainingConstraints = this._postTrainingConstraints?.internalValue;
    }
    if (this._preTrainingConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preTrainingConstraints = this._preTrainingConstraints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageDriftCheckBaselinesBias | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configFile.internalValue = undefined;
      this._postTrainingConstraints.internalValue = undefined;
      this._preTrainingConstraints.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configFile.internalValue = value.configFile;
      this._postTrainingConstraints.internalValue = value.postTrainingConstraints;
      this._preTrainingConstraints.internalValue = value.preTrainingConstraints;
    }
  }

  // config_file - computed: true, optional: true, required: false
  private _configFile = new SagemakerModelPackageDriftCheckBaselinesBiasConfigFileOutputReference(this, "config_file");
  public get configFile() {
    return this._configFile;
  }
  public putConfigFile(value: SagemakerModelPackageDriftCheckBaselinesBiasConfigFile) {
    this._configFile.internalValue = value;
  }
  public resetConfigFile() {
    this._configFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFileInput() {
    return this._configFile.internalValue;
  }

  // post_training_constraints - computed: true, optional: true, required: false
  private _postTrainingConstraints = new SagemakerModelPackageDriftCheckBaselinesBiasPostTrainingConstraintsOutputReference(this, "post_training_constraints");
  public get postTrainingConstraints() {
    return this._postTrainingConstraints;
  }
  public putPostTrainingConstraints(value: SagemakerModelPackageDriftCheckBaselinesBiasPostTrainingConstraints) {
    this._postTrainingConstraints.internalValue = value;
  }
  public resetPostTrainingConstraints() {
    this._postTrainingConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postTrainingConstraintsInput() {
    return this._postTrainingConstraints.internalValue;
  }

  // pre_training_constraints - computed: true, optional: true, required: false
  private _preTrainingConstraints = new SagemakerModelPackageDriftCheckBaselinesBiasPreTrainingConstraintsOutputReference(this, "pre_training_constraints");
  public get preTrainingConstraints() {
    return this._preTrainingConstraints;
  }
  public putPreTrainingConstraints(value: SagemakerModelPackageDriftCheckBaselinesBiasPreTrainingConstraints) {
    this._preTrainingConstraints.internalValue = value;
  }
  public resetPreTrainingConstraints() {
    this._preTrainingConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preTrainingConstraintsInput() {
    return this._preTrainingConstraints.internalValue;
  }
}
export interface SagemakerModelPackageDriftCheckBaselinesExplainabilityConfigFile {
  /**
  * The digest of the file source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_digest SagemakerModelPackage#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * The type of content stored in the file source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_type SagemakerModelPackage#content_type}
  */
  readonly contentType?: string;
  /**
  * The Amazon S3 URI for the file source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#s3_uri SagemakerModelPackage#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerModelPackageDriftCheckBaselinesExplainabilityConfigFileToTerraform(struct?: SagemakerModelPackageDriftCheckBaselinesExplainabilityConfigFile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_digest: cdktn.stringToTerraform(struct!.contentDigest),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerModelPackageDriftCheckBaselinesExplainabilityConfigFileToHclTerraform(struct?: SagemakerModelPackageDriftCheckBaselinesExplainabilityConfigFile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_digest: {
      value: cdktn.stringToHclTerraform(struct!.contentDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageDriftCheckBaselinesExplainabilityConfigFileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageDriftCheckBaselinesExplainabilityConfigFile | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageDriftCheckBaselinesExplainabilityConfigFile | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: true, optional: true, required: false
  private _contentDigest?: string;
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // s3_uri - computed: true, optional: true, required: false
  private _s3Uri?: string;
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface SagemakerModelPackageDriftCheckBaselinesExplainabilityConstraints {
  /**
  * The digest of the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_digest SagemakerModelPackage#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * The type of content stored in the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_type SagemakerModelPackage#content_type}
  */
  readonly contentType?: string;
  /**
  * The Amazon S3 URI for the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#s3_uri SagemakerModelPackage#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerModelPackageDriftCheckBaselinesExplainabilityConstraintsToTerraform(struct?: SagemakerModelPackageDriftCheckBaselinesExplainabilityConstraints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_digest: cdktn.stringToTerraform(struct!.contentDigest),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerModelPackageDriftCheckBaselinesExplainabilityConstraintsToHclTerraform(struct?: SagemakerModelPackageDriftCheckBaselinesExplainabilityConstraints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_digest: {
      value: cdktn.stringToHclTerraform(struct!.contentDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageDriftCheckBaselinesExplainabilityConstraintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageDriftCheckBaselinesExplainabilityConstraints | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageDriftCheckBaselinesExplainabilityConstraints | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: true, optional: true, required: false
  private _contentDigest?: string;
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // s3_uri - computed: true, optional: true, required: false
  private _s3Uri?: string;
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface SagemakerModelPackageDriftCheckBaselinesExplainability {
  /**
  * Represents a File Source Object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#config_file SagemakerModelPackage#config_file}
  */
  readonly configFile?: SagemakerModelPackageDriftCheckBaselinesExplainabilityConfigFile;
  /**
  * Represents a Metric Source Object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#constraints SagemakerModelPackage#constraints}
  */
  readonly constraints?: SagemakerModelPackageDriftCheckBaselinesExplainabilityConstraints;
}

export function sagemakerModelPackageDriftCheckBaselinesExplainabilityToTerraform(struct?: SagemakerModelPackageDriftCheckBaselinesExplainability | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    config_file: sagemakerModelPackageDriftCheckBaselinesExplainabilityConfigFileToTerraform(struct!.configFile),
    constraints: sagemakerModelPackageDriftCheckBaselinesExplainabilityConstraintsToTerraform(struct!.constraints),
  }
}


export function sagemakerModelPackageDriftCheckBaselinesExplainabilityToHclTerraform(struct?: SagemakerModelPackageDriftCheckBaselinesExplainability | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    config_file: {
      value: sagemakerModelPackageDriftCheckBaselinesExplainabilityConfigFileToHclTerraform(struct!.configFile),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageDriftCheckBaselinesExplainabilityConfigFile",
    },
    constraints: {
      value: sagemakerModelPackageDriftCheckBaselinesExplainabilityConstraintsToHclTerraform(struct!.constraints),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageDriftCheckBaselinesExplainabilityConstraints",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageDriftCheckBaselinesExplainabilityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageDriftCheckBaselinesExplainability | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configFile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configFile = this._configFile?.internalValue;
    }
    if (this._constraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraints = this._constraints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageDriftCheckBaselinesExplainability | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configFile.internalValue = undefined;
      this._constraints.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configFile.internalValue = value.configFile;
      this._constraints.internalValue = value.constraints;
    }
  }

  // config_file - computed: true, optional: true, required: false
  private _configFile = new SagemakerModelPackageDriftCheckBaselinesExplainabilityConfigFileOutputReference(this, "config_file");
  public get configFile() {
    return this._configFile;
  }
  public putConfigFile(value: SagemakerModelPackageDriftCheckBaselinesExplainabilityConfigFile) {
    this._configFile.internalValue = value;
  }
  public resetConfigFile() {
    this._configFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFileInput() {
    return this._configFile.internalValue;
  }

  // constraints - computed: true, optional: true, required: false
  private _constraints = new SagemakerModelPackageDriftCheckBaselinesExplainabilityConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }
  public putConstraints(value: SagemakerModelPackageDriftCheckBaselinesExplainabilityConstraints) {
    this._constraints.internalValue = value;
  }
  public resetConstraints() {
    this._constraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints.internalValue;
  }
}
export interface SagemakerModelPackageDriftCheckBaselinesModelDataQualityConstraints {
  /**
  * The digest of the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_digest SagemakerModelPackage#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * The type of content stored in the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_type SagemakerModelPackage#content_type}
  */
  readonly contentType?: string;
  /**
  * The Amazon S3 URI for the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#s3_uri SagemakerModelPackage#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerModelPackageDriftCheckBaselinesModelDataQualityConstraintsToTerraform(struct?: SagemakerModelPackageDriftCheckBaselinesModelDataQualityConstraints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_digest: cdktn.stringToTerraform(struct!.contentDigest),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerModelPackageDriftCheckBaselinesModelDataQualityConstraintsToHclTerraform(struct?: SagemakerModelPackageDriftCheckBaselinesModelDataQualityConstraints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_digest: {
      value: cdktn.stringToHclTerraform(struct!.contentDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageDriftCheckBaselinesModelDataQualityConstraintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageDriftCheckBaselinesModelDataQualityConstraints | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageDriftCheckBaselinesModelDataQualityConstraints | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: true, optional: true, required: false
  private _contentDigest?: string;
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // s3_uri - computed: true, optional: true, required: false
  private _s3Uri?: string;
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface SagemakerModelPackageDriftCheckBaselinesModelDataQualityStatistics {
  /**
  * The digest of the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_digest SagemakerModelPackage#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * The type of content stored in the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_type SagemakerModelPackage#content_type}
  */
  readonly contentType?: string;
  /**
  * The Amazon S3 URI for the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#s3_uri SagemakerModelPackage#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerModelPackageDriftCheckBaselinesModelDataQualityStatisticsToTerraform(struct?: SagemakerModelPackageDriftCheckBaselinesModelDataQualityStatistics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_digest: cdktn.stringToTerraform(struct!.contentDigest),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerModelPackageDriftCheckBaselinesModelDataQualityStatisticsToHclTerraform(struct?: SagemakerModelPackageDriftCheckBaselinesModelDataQualityStatistics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_digest: {
      value: cdktn.stringToHclTerraform(struct!.contentDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageDriftCheckBaselinesModelDataQualityStatisticsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageDriftCheckBaselinesModelDataQualityStatistics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageDriftCheckBaselinesModelDataQualityStatistics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: true, optional: true, required: false
  private _contentDigest?: string;
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // s3_uri - computed: true, optional: true, required: false
  private _s3Uri?: string;
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface SagemakerModelPackageDriftCheckBaselinesModelDataQuality {
  /**
  * Represents a Metric Source Object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#constraints SagemakerModelPackage#constraints}
  */
  readonly constraints?: SagemakerModelPackageDriftCheckBaselinesModelDataQualityConstraints;
  /**
  * Represents a Metric Source Object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#statistics SagemakerModelPackage#statistics}
  */
  readonly statistics?: SagemakerModelPackageDriftCheckBaselinesModelDataQualityStatistics;
}

export function sagemakerModelPackageDriftCheckBaselinesModelDataQualityToTerraform(struct?: SagemakerModelPackageDriftCheckBaselinesModelDataQuality | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    constraints: sagemakerModelPackageDriftCheckBaselinesModelDataQualityConstraintsToTerraform(struct!.constraints),
    statistics: sagemakerModelPackageDriftCheckBaselinesModelDataQualityStatisticsToTerraform(struct!.statistics),
  }
}


export function sagemakerModelPackageDriftCheckBaselinesModelDataQualityToHclTerraform(struct?: SagemakerModelPackageDriftCheckBaselinesModelDataQuality | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    constraints: {
      value: sagemakerModelPackageDriftCheckBaselinesModelDataQualityConstraintsToHclTerraform(struct!.constraints),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageDriftCheckBaselinesModelDataQualityConstraints",
    },
    statistics: {
      value: sagemakerModelPackageDriftCheckBaselinesModelDataQualityStatisticsToHclTerraform(struct!.statistics),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageDriftCheckBaselinesModelDataQualityStatistics",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageDriftCheckBaselinesModelDataQualityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageDriftCheckBaselinesModelDataQuality | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraints = this._constraints?.internalValue;
    }
    if (this._statistics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistics = this._statistics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageDriftCheckBaselinesModelDataQuality | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constraints.internalValue = undefined;
      this._statistics.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constraints.internalValue = value.constraints;
      this._statistics.internalValue = value.statistics;
    }
  }

  // constraints - computed: true, optional: true, required: false
  private _constraints = new SagemakerModelPackageDriftCheckBaselinesModelDataQualityConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }
  public putConstraints(value: SagemakerModelPackageDriftCheckBaselinesModelDataQualityConstraints) {
    this._constraints.internalValue = value;
  }
  public resetConstraints() {
    this._constraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints.internalValue;
  }

  // statistics - computed: true, optional: true, required: false
  private _statistics = new SagemakerModelPackageDriftCheckBaselinesModelDataQualityStatisticsOutputReference(this, "statistics");
  public get statistics() {
    return this._statistics;
  }
  public putStatistics(value: SagemakerModelPackageDriftCheckBaselinesModelDataQualityStatistics) {
    this._statistics.internalValue = value;
  }
  public resetStatistics() {
    this._statistics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsInput() {
    return this._statistics.internalValue;
  }
}
export interface SagemakerModelPackageDriftCheckBaselinesModelQualityConstraints {
  /**
  * The digest of the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_digest SagemakerModelPackage#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * The type of content stored in the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_type SagemakerModelPackage#content_type}
  */
  readonly contentType?: string;
  /**
  * The Amazon S3 URI for the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#s3_uri SagemakerModelPackage#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerModelPackageDriftCheckBaselinesModelQualityConstraintsToTerraform(struct?: SagemakerModelPackageDriftCheckBaselinesModelQualityConstraints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_digest: cdktn.stringToTerraform(struct!.contentDigest),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerModelPackageDriftCheckBaselinesModelQualityConstraintsToHclTerraform(struct?: SagemakerModelPackageDriftCheckBaselinesModelQualityConstraints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_digest: {
      value: cdktn.stringToHclTerraform(struct!.contentDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageDriftCheckBaselinesModelQualityConstraintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageDriftCheckBaselinesModelQualityConstraints | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageDriftCheckBaselinesModelQualityConstraints | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: true, optional: true, required: false
  private _contentDigest?: string;
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // s3_uri - computed: true, optional: true, required: false
  private _s3Uri?: string;
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface SagemakerModelPackageDriftCheckBaselinesModelQualityStatistics {
  /**
  * The digest of the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_digest SagemakerModelPackage#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * The type of content stored in the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_type SagemakerModelPackage#content_type}
  */
  readonly contentType?: string;
  /**
  * The Amazon S3 URI for the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#s3_uri SagemakerModelPackage#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerModelPackageDriftCheckBaselinesModelQualityStatisticsToTerraform(struct?: SagemakerModelPackageDriftCheckBaselinesModelQualityStatistics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_digest: cdktn.stringToTerraform(struct!.contentDigest),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerModelPackageDriftCheckBaselinesModelQualityStatisticsToHclTerraform(struct?: SagemakerModelPackageDriftCheckBaselinesModelQualityStatistics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_digest: {
      value: cdktn.stringToHclTerraform(struct!.contentDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageDriftCheckBaselinesModelQualityStatisticsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageDriftCheckBaselinesModelQualityStatistics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageDriftCheckBaselinesModelQualityStatistics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: true, optional: true, required: false
  private _contentDigest?: string;
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // s3_uri - computed: true, optional: true, required: false
  private _s3Uri?: string;
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface SagemakerModelPackageDriftCheckBaselinesModelQuality {
  /**
  * Represents a Metric Source Object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#constraints SagemakerModelPackage#constraints}
  */
  readonly constraints?: SagemakerModelPackageDriftCheckBaselinesModelQualityConstraints;
  /**
  * Represents a Metric Source Object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#statistics SagemakerModelPackage#statistics}
  */
  readonly statistics?: SagemakerModelPackageDriftCheckBaselinesModelQualityStatistics;
}

export function sagemakerModelPackageDriftCheckBaselinesModelQualityToTerraform(struct?: SagemakerModelPackageDriftCheckBaselinesModelQuality | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    constraints: sagemakerModelPackageDriftCheckBaselinesModelQualityConstraintsToTerraform(struct!.constraints),
    statistics: sagemakerModelPackageDriftCheckBaselinesModelQualityStatisticsToTerraform(struct!.statistics),
  }
}


export function sagemakerModelPackageDriftCheckBaselinesModelQualityToHclTerraform(struct?: SagemakerModelPackageDriftCheckBaselinesModelQuality | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    constraints: {
      value: sagemakerModelPackageDriftCheckBaselinesModelQualityConstraintsToHclTerraform(struct!.constraints),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageDriftCheckBaselinesModelQualityConstraints",
    },
    statistics: {
      value: sagemakerModelPackageDriftCheckBaselinesModelQualityStatisticsToHclTerraform(struct!.statistics),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageDriftCheckBaselinesModelQualityStatistics",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageDriftCheckBaselinesModelQualityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageDriftCheckBaselinesModelQuality | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraints = this._constraints?.internalValue;
    }
    if (this._statistics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistics = this._statistics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageDriftCheckBaselinesModelQuality | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constraints.internalValue = undefined;
      this._statistics.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constraints.internalValue = value.constraints;
      this._statistics.internalValue = value.statistics;
    }
  }

  // constraints - computed: true, optional: true, required: false
  private _constraints = new SagemakerModelPackageDriftCheckBaselinesModelQualityConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }
  public putConstraints(value: SagemakerModelPackageDriftCheckBaselinesModelQualityConstraints) {
    this._constraints.internalValue = value;
  }
  public resetConstraints() {
    this._constraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints.internalValue;
  }

  // statistics - computed: true, optional: true, required: false
  private _statistics = new SagemakerModelPackageDriftCheckBaselinesModelQualityStatisticsOutputReference(this, "statistics");
  public get statistics() {
    return this._statistics;
  }
  public putStatistics(value: SagemakerModelPackageDriftCheckBaselinesModelQualityStatistics) {
    this._statistics.internalValue = value;
  }
  public resetStatistics() {
    this._statistics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsInput() {
    return this._statistics.internalValue;
  }
}
export interface SagemakerModelPackageDriftCheckBaselines {
  /**
  * Represents the drift check bias baselines that can be used when the model monitor is set using the model package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#bias SagemakerModelPackage#bias}
  */
  readonly bias?: SagemakerModelPackageDriftCheckBaselinesBias;
  /**
  * Contains explainability metrics for a model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#explainability SagemakerModelPackage#explainability}
  */
  readonly explainability?: SagemakerModelPackageDriftCheckBaselinesExplainability;
  /**
  * Represents the drift check data quality baselines that can be used when the model monitor is set using the model package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#model_data_quality SagemakerModelPackage#model_data_quality}
  */
  readonly modelDataQuality?: SagemakerModelPackageDriftCheckBaselinesModelDataQuality;
  /**
  * Represents the drift check model quality baselines that can be used when the model monitor is set using the model package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#model_quality SagemakerModelPackage#model_quality}
  */
  readonly modelQuality?: SagemakerModelPackageDriftCheckBaselinesModelQuality;
}

export function sagemakerModelPackageDriftCheckBaselinesToTerraform(struct?: SagemakerModelPackageDriftCheckBaselines | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bias: sagemakerModelPackageDriftCheckBaselinesBiasToTerraform(struct!.bias),
    explainability: sagemakerModelPackageDriftCheckBaselinesExplainabilityToTerraform(struct!.explainability),
    model_data_quality: sagemakerModelPackageDriftCheckBaselinesModelDataQualityToTerraform(struct!.modelDataQuality),
    model_quality: sagemakerModelPackageDriftCheckBaselinesModelQualityToTerraform(struct!.modelQuality),
  }
}


export function sagemakerModelPackageDriftCheckBaselinesToHclTerraform(struct?: SagemakerModelPackageDriftCheckBaselines | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bias: {
      value: sagemakerModelPackageDriftCheckBaselinesBiasToHclTerraform(struct!.bias),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageDriftCheckBaselinesBias",
    },
    explainability: {
      value: sagemakerModelPackageDriftCheckBaselinesExplainabilityToHclTerraform(struct!.explainability),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageDriftCheckBaselinesExplainability",
    },
    model_data_quality: {
      value: sagemakerModelPackageDriftCheckBaselinesModelDataQualityToHclTerraform(struct!.modelDataQuality),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageDriftCheckBaselinesModelDataQuality",
    },
    model_quality: {
      value: sagemakerModelPackageDriftCheckBaselinesModelQualityToHclTerraform(struct!.modelQuality),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageDriftCheckBaselinesModelQuality",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageDriftCheckBaselinesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageDriftCheckBaselines | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bias?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bias = this._bias?.internalValue;
    }
    if (this._explainability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.explainability = this._explainability?.internalValue;
    }
    if (this._modelDataQuality?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataQuality = this._modelDataQuality?.internalValue;
    }
    if (this._modelQuality?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelQuality = this._modelQuality?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageDriftCheckBaselines | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bias.internalValue = undefined;
      this._explainability.internalValue = undefined;
      this._modelDataQuality.internalValue = undefined;
      this._modelQuality.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bias.internalValue = value.bias;
      this._explainability.internalValue = value.explainability;
      this._modelDataQuality.internalValue = value.modelDataQuality;
      this._modelQuality.internalValue = value.modelQuality;
    }
  }

  // bias - computed: true, optional: true, required: false
  private _bias = new SagemakerModelPackageDriftCheckBaselinesBiasOutputReference(this, "bias");
  public get bias() {
    return this._bias;
  }
  public putBias(value: SagemakerModelPackageDriftCheckBaselinesBias) {
    this._bias.internalValue = value;
  }
  public resetBias() {
    this._bias.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biasInput() {
    return this._bias.internalValue;
  }

  // explainability - computed: true, optional: true, required: false
  private _explainability = new SagemakerModelPackageDriftCheckBaselinesExplainabilityOutputReference(this, "explainability");
  public get explainability() {
    return this._explainability;
  }
  public putExplainability(value: SagemakerModelPackageDriftCheckBaselinesExplainability) {
    this._explainability.internalValue = value;
  }
  public resetExplainability() {
    this._explainability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explainabilityInput() {
    return this._explainability.internalValue;
  }

  // model_data_quality - computed: true, optional: true, required: false
  private _modelDataQuality = new SagemakerModelPackageDriftCheckBaselinesModelDataQualityOutputReference(this, "model_data_quality");
  public get modelDataQuality() {
    return this._modelDataQuality;
  }
  public putModelDataQuality(value: SagemakerModelPackageDriftCheckBaselinesModelDataQuality) {
    this._modelDataQuality.internalValue = value;
  }
  public resetModelDataQuality() {
    this._modelDataQuality.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataQualityInput() {
    return this._modelDataQuality.internalValue;
  }

  // model_quality - computed: true, optional: true, required: false
  private _modelQuality = new SagemakerModelPackageDriftCheckBaselinesModelQualityOutputReference(this, "model_quality");
  public get modelQuality() {
    return this._modelQuality;
  }
  public putModelQuality(value: SagemakerModelPackageDriftCheckBaselinesModelQuality) {
    this._modelQuality.internalValue = value;
  }
  public resetModelQuality() {
    this._modelQuality.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelQualityInput() {
    return this._modelQuality.internalValue;
  }
}
export interface SagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfig {
  /**
  * Specifies agreement to the model end-user license agreement (EULA).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#accept_eula SagemakerModelPackage#accept_eula}
  */
  readonly acceptEula?: boolean | cdktn.IResolvable;
}

export function sagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigToTerraform(struct?: SagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accept_eula: cdktn.booleanToTerraform(struct!.acceptEula),
  }
}


export function sagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigToHclTerraform(struct?: SagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accept_eula: {
      value: cdktn.booleanToHclTerraform(struct!.acceptEula),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptEula !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptEula = this._acceptEula;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptEula = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptEula = value.acceptEula;
    }
  }

  // accept_eula - computed: true, optional: true, required: false
  private _acceptEula?: boolean | cdktn.IResolvable;
  public get acceptEula() {
    return this.getBooleanAttribute('accept_eula');
  }
  public set acceptEula(value: boolean | cdktn.IResolvable) {
    this._acceptEula = value;
  }
  public resetAcceptEula() {
    this._acceptEula = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptEulaInput() {
    return this._acceptEula;
  }
}
export interface SagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSource {
  /**
  * Specifies how the ML model data is prepared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#compression_type SagemakerModelPackage#compression_type}
  */
  readonly compressionType?: string;
  /**
  * Specifies the access configuration file for the ML model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#model_access_config SagemakerModelPackage#model_access_config}
  */
  readonly modelAccessConfig?: SagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfig;
  /**
  * Specifies the type of ML model data to deploy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#s3_data_type SagemakerModelPackage#s3_data_type}
  */
  readonly s3DataType?: string;
  /**
  * Specifies the S3 path of ML model data to deploy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#s3_uri SagemakerModelPackage#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceToTerraform(struct?: SagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compression_type: cdktn.stringToTerraform(struct!.compressionType),
    model_access_config: sagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigToTerraform(struct!.modelAccessConfig),
    s3_data_type: cdktn.stringToTerraform(struct!.s3DataType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceToHclTerraform(struct?: SagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compression_type: {
      value: cdktn.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_access_config: {
      value: sagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigToHclTerraform(struct!.modelAccessConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfig",
    },
    s3_data_type: {
      value: cdktn.stringToHclTerraform(struct!.s3DataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._modelAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelAccessConfig = this._modelAccessConfig?.internalValue;
    }
    if (this._s3DataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataType = this._s3DataType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionType = undefined;
      this._modelAccessConfig.internalValue = undefined;
      this._s3DataType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionType = value.compressionType;
      this._modelAccessConfig.internalValue = value.modelAccessConfig;
      this._s3DataType = value.s3DataType;
      this._s3Uri = value.s3Uri;
    }
  }

  // compression_type - computed: true, optional: true, required: false
  private _compressionType?: string;
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // model_access_config - computed: true, optional: true, required: false
  private _modelAccessConfig = new SagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference(this, "model_access_config");
  public get modelAccessConfig() {
    return this._modelAccessConfig;
  }
  public putModelAccessConfig(value: SagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfig) {
    this._modelAccessConfig.internalValue = value;
  }
  public resetModelAccessConfig() {
    this._modelAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelAccessConfigInput() {
    return this._modelAccessConfig.internalValue;
  }

  // s3_data_type - computed: true, optional: true, required: false
  private _s3DataType?: string;
  public get s3DataType() {
    return this.getStringAttribute('s3_data_type');
  }
  public set s3DataType(value: string) {
    this._s3DataType = value;
  }
  public resetS3DataType() {
    this._s3DataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataTypeInput() {
    return this._s3DataType;
  }

  // s3_uri - computed: true, optional: true, required: false
  private _s3Uri?: string;
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface SagemakerModelPackageInferenceSpecificationContainersModelDataSource {
  /**
  * Specifies the S3 location of ML model data to deploy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#s3_data_source SagemakerModelPackage#s3_data_source}
  */
  readonly s3DataSource?: SagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSource;
}

export function sagemakerModelPackageInferenceSpecificationContainersModelDataSourceToTerraform(struct?: SagemakerModelPackageInferenceSpecificationContainersModelDataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_data_source: sagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceToTerraform(struct!.s3DataSource),
  }
}


export function sagemakerModelPackageInferenceSpecificationContainersModelDataSourceToHclTerraform(struct?: SagemakerModelPackageInferenceSpecificationContainersModelDataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_data_source: {
      value: sagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceToHclTerraform(struct!.s3DataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageInferenceSpecificationContainersModelDataSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageInferenceSpecificationContainersModelDataSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3DataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataSource = this._s3DataSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageInferenceSpecificationContainersModelDataSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3DataSource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3DataSource.internalValue = value.s3DataSource;
    }
  }

  // s3_data_source - computed: true, optional: true, required: false
  private _s3DataSource = new SagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceOutputReference(this, "s3_data_source");
  public get s3DataSource() {
    return this._s3DataSource;
  }
  public putS3DataSource(value: SagemakerModelPackageInferenceSpecificationContainersModelDataSourceS3DataSource) {
    this._s3DataSource.internalValue = value;
  }
  public resetS3DataSource() {
    this._s3DataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataSourceInput() {
    return this._s3DataSource.internalValue;
  }
}
export interface SagemakerModelPackageInferenceSpecificationContainersModelInput {
  /**
  * The input configuration object for the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#data_input_config SagemakerModelPackage#data_input_config}
  */
  readonly dataInputConfig?: string;
}

export function sagemakerModelPackageInferenceSpecificationContainersModelInputToTerraform(struct?: SagemakerModelPackageInferenceSpecificationContainersModelInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_input_config: cdktn.stringToTerraform(struct!.dataInputConfig),
  }
}


export function sagemakerModelPackageInferenceSpecificationContainersModelInputToHclTerraform(struct?: SagemakerModelPackageInferenceSpecificationContainersModelInput | cdktn.IResolvable): any {
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

export class SagemakerModelPackageInferenceSpecificationContainersModelInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageInferenceSpecificationContainersModelInput | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerModelPackageInferenceSpecificationContainersModelInput | cdktn.IResolvable | undefined) {
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
export interface SagemakerModelPackageInferenceSpecificationContainers {
  /**
  * The DNS host name for the Docker container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#container_hostname SagemakerModelPackage#container_hostname}
  */
  readonly containerHostname?: string;
  /**
  * Sets the environment variables in the Docker container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#environment SagemakerModelPackage#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * The machine learning framework of the model package container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#framework SagemakerModelPackage#framework}
  */
  readonly framework?: string;
  /**
  * The framework version of the Model Package Container Image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#framework_version SagemakerModelPackage#framework_version}
  */
  readonly frameworkVersion?: string;
  /**
  * The Amazon EC2 Container Registry (Amazon ECR) path where inference code is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#image SagemakerModelPackage#image}
  */
  readonly image?: string;
  /**
  * An MD5 hash of the training algorithm that identifies the Docker image used for training.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#image_digest SagemakerModelPackage#image_digest}
  */
  readonly imageDigest?: string;
  /**
  * Specifies the location of ML model data to deploy during endpoint creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#model_data_source SagemakerModelPackage#model_data_source}
  */
  readonly modelDataSource?: SagemakerModelPackageInferenceSpecificationContainersModelDataSource;
  /**
  * A structure with Model Input details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#model_data_url SagemakerModelPackage#model_data_url}
  */
  readonly modelDataUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#model_input SagemakerModelPackage#model_input}
  */
  readonly modelInput?: SagemakerModelPackageInferenceSpecificationContainersModelInput;
  /**
  * The name of a pre-trained machine learning benchmarked by Amazon SageMaker Inference Recommender model that matches your model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#nearest_model_name SagemakerModelPackage#nearest_model_name}
  */
  readonly nearestModelName?: string;
}

export function sagemakerModelPackageInferenceSpecificationContainersToTerraform(struct?: SagemakerModelPackageInferenceSpecificationContainers | cdktn.IResolvable): any {
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
    model_data_source: sagemakerModelPackageInferenceSpecificationContainersModelDataSourceToTerraform(struct!.modelDataSource),
    model_data_url: cdktn.stringToTerraform(struct!.modelDataUrl),
    model_input: sagemakerModelPackageInferenceSpecificationContainersModelInputToTerraform(struct!.modelInput),
    nearest_model_name: cdktn.stringToTerraform(struct!.nearestModelName),
  }
}


export function sagemakerModelPackageInferenceSpecificationContainersToHclTerraform(struct?: SagemakerModelPackageInferenceSpecificationContainers | cdktn.IResolvable): any {
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
    model_data_source: {
      value: sagemakerModelPackageInferenceSpecificationContainersModelDataSourceToHclTerraform(struct!.modelDataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageInferenceSpecificationContainersModelDataSource",
    },
    model_data_url: {
      value: cdktn.stringToHclTerraform(struct!.modelDataUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_input: {
      value: sagemakerModelPackageInferenceSpecificationContainersModelInputToHclTerraform(struct!.modelInput),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageInferenceSpecificationContainersModelInput",
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

export class SagemakerModelPackageInferenceSpecificationContainersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerModelPackageInferenceSpecificationContainers | cdktn.IResolvable | undefined {
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
    if (this._modelDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataSource = this._modelDataSource?.internalValue;
    }
    if (this._modelDataUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataUrl = this._modelDataUrl;
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

  public set internalValue(value: SagemakerModelPackageInferenceSpecificationContainers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerHostname = undefined;
      this._environment = undefined;
      this._framework = undefined;
      this._frameworkVersion = undefined;
      this._image = undefined;
      this._imageDigest = undefined;
      this._modelDataSource.internalValue = undefined;
      this._modelDataUrl = undefined;
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
      this._modelDataSource.internalValue = value.modelDataSource;
      this._modelDataUrl = value.modelDataUrl;
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

  // model_data_source - computed: true, optional: true, required: false
  private _modelDataSource = new SagemakerModelPackageInferenceSpecificationContainersModelDataSourceOutputReference(this, "model_data_source");
  public get modelDataSource() {
    return this._modelDataSource;
  }
  public putModelDataSource(value: SagemakerModelPackageInferenceSpecificationContainersModelDataSource) {
    this._modelDataSource.internalValue = value;
  }
  public resetModelDataSource() {
    this._modelDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataSourceInput() {
    return this._modelDataSource.internalValue;
  }

  // model_data_url - computed: true, optional: true, required: false
  private _modelDataUrl?: string;
  public get modelDataUrl() {
    return this.getStringAttribute('model_data_url');
  }
  public set modelDataUrl(value: string) {
    this._modelDataUrl = value;
  }
  public resetModelDataUrl() {
    this._modelDataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataUrlInput() {
    return this._modelDataUrl;
  }

  // model_input - computed: true, optional: true, required: false
  private _modelInput = new SagemakerModelPackageInferenceSpecificationContainersModelInputOutputReference(this, "model_input");
  public get modelInput() {
    return this._modelInput;
  }
  public putModelInput(value: SagemakerModelPackageInferenceSpecificationContainersModelInput) {
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

export class SagemakerModelPackageInferenceSpecificationContainersList extends cdktn.ComplexList {
  public internalValue? : SagemakerModelPackageInferenceSpecificationContainers[] | cdktn.IResolvable

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
  public get(index: number): SagemakerModelPackageInferenceSpecificationContainersOutputReference {
    return new SagemakerModelPackageInferenceSpecificationContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerModelPackageInferenceSpecification {
  /**
  * The Amazon ECR registry path of the Docker image that contains the inference code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#containers SagemakerModelPackage#containers}
  */
  readonly containers?: SagemakerModelPackageInferenceSpecificationContainers[] | cdktn.IResolvable;
  /**
  * The supported MIME types for the input data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#supported_content_types SagemakerModelPackage#supported_content_types}
  */
  readonly supportedContentTypes?: string[];
  /**
  * A list of the instance types that are used to generate inferences in real-time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#supported_realtime_inference_instance_types SagemakerModelPackage#supported_realtime_inference_instance_types}
  */
  readonly supportedRealtimeInferenceInstanceTypes?: string[];
  /**
  * The supported MIME types for the output data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#supported_response_mime_types SagemakerModelPackage#supported_response_mime_types}
  */
  readonly supportedResponseMimeTypes?: string[];
  /**
  * A list of the instance types on which a transformation job can be run or on which an endpoint can be deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#supported_transform_instance_types SagemakerModelPackage#supported_transform_instance_types}
  */
  readonly supportedTransformInstanceTypes?: string[];
}

export function sagemakerModelPackageInferenceSpecificationToTerraform(struct?: SagemakerModelPackageInferenceSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    containers: cdktn.listMapper(sagemakerModelPackageInferenceSpecificationContainersToTerraform, false)(struct!.containers),
    supported_content_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedContentTypes),
    supported_realtime_inference_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedRealtimeInferenceInstanceTypes),
    supported_response_mime_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedResponseMimeTypes),
    supported_transform_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedTransformInstanceTypes),
  }
}


export function sagemakerModelPackageInferenceSpecificationToHclTerraform(struct?: SagemakerModelPackageInferenceSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    containers: {
      value: cdktn.listMapperHcl(sagemakerModelPackageInferenceSpecificationContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerModelPackageInferenceSpecificationContainersList",
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

export class SagemakerModelPackageInferenceSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageInferenceSpecification | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerModelPackageInferenceSpecification | cdktn.IResolvable | undefined) {
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
  private _containers = new SagemakerModelPackageInferenceSpecificationContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: SagemakerModelPackageInferenceSpecificationContainers[] | cdktn.IResolvable) {
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
export interface SagemakerModelPackageMetadataProperties {
  /**
  * The commit ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#commit_id SagemakerModelPackage#commit_id}
  */
  readonly commitId?: string;
  /**
  * The entity this entity was generated by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#generated_by SagemakerModelPackage#generated_by}
  */
  readonly generatedBy?: string;
  /**
  * The project ID metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#project_id SagemakerModelPackage#project_id}
  */
  readonly projectId?: string;
  /**
  * The repository metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#repository SagemakerModelPackage#repository}
  */
  readonly repository?: string;
}

export function sagemakerModelPackageMetadataPropertiesToTerraform(struct?: SagemakerModelPackageMetadataProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    commit_id: cdktn.stringToTerraform(struct!.commitId),
    generated_by: cdktn.stringToTerraform(struct!.generatedBy),
    project_id: cdktn.stringToTerraform(struct!.projectId),
    repository: cdktn.stringToTerraform(struct!.repository),
  }
}


export function sagemakerModelPackageMetadataPropertiesToHclTerraform(struct?: SagemakerModelPackageMetadataProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    commit_id: {
      value: cdktn.stringToHclTerraform(struct!.commitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generated_by: {
      value: cdktn.stringToHclTerraform(struct!.generatedBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository: {
      value: cdktn.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageMetadataPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageMetadataProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitId = this._commitId;
    }
    if (this._generatedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.generatedBy = this._generatedBy;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageMetadataProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commitId = undefined;
      this._generatedBy = undefined;
      this._projectId = undefined;
      this._repository = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commitId = value.commitId;
      this._generatedBy = value.generatedBy;
      this._projectId = value.projectId;
      this._repository = value.repository;
    }
  }

  // commit_id - computed: true, optional: true, required: false
  private _commitId?: string;
  public get commitId() {
    return this.getStringAttribute('commit_id');
  }
  public set commitId(value: string) {
    this._commitId = value;
  }
  public resetCommitId() {
    this._commitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitIdInput() {
    return this._commitId;
  }

  // generated_by - computed: true, optional: true, required: false
  private _generatedBy?: string;
  public get generatedBy() {
    return this.getStringAttribute('generated_by');
  }
  public set generatedBy(value: string) {
    this._generatedBy = value;
  }
  public resetGeneratedBy() {
    this._generatedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedByInput() {
    return this._generatedBy;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string;
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // repository - computed: true, optional: true, required: false
  private _repository?: string;
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }
}
export interface SagemakerModelPackageModelCard {
  /**
  * The content of the model card.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#model_card_content SagemakerModelPackage#model_card_content}
  */
  readonly modelCardContent?: string;
  /**
  * The approval status of the model card within your organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#model_card_status SagemakerModelPackage#model_card_status}
  */
  readonly modelCardStatus?: string;
}

export function sagemakerModelPackageModelCardToTerraform(struct?: SagemakerModelPackageModelCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model_card_content: cdktn.stringToTerraform(struct!.modelCardContent),
    model_card_status: cdktn.stringToTerraform(struct!.modelCardStatus),
  }
}


export function sagemakerModelPackageModelCardToHclTerraform(struct?: SagemakerModelPackageModelCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model_card_content: {
      value: cdktn.stringToHclTerraform(struct!.modelCardContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_card_status: {
      value: cdktn.stringToHclTerraform(struct!.modelCardStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageModelCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageModelCard | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modelCardContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelCardContent = this._modelCardContent;
    }
    if (this._modelCardStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelCardStatus = this._modelCardStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageModelCard | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modelCardContent = undefined;
      this._modelCardStatus = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modelCardContent = value.modelCardContent;
      this._modelCardStatus = value.modelCardStatus;
    }
  }

  // model_card_content - computed: true, optional: true, required: false
  private _modelCardContent?: string;
  public get modelCardContent() {
    return this.getStringAttribute('model_card_content');
  }
  public set modelCardContent(value: string) {
    this._modelCardContent = value;
  }
  public resetModelCardContent() {
    this._modelCardContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelCardContentInput() {
    return this._modelCardContent;
  }

  // model_card_status - computed: true, optional: true, required: false
  private _modelCardStatus?: string;
  public get modelCardStatus() {
    return this.getStringAttribute('model_card_status');
  }
  public set modelCardStatus(value: string) {
    this._modelCardStatus = value;
  }
  public resetModelCardStatus() {
    this._modelCardStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelCardStatusInput() {
    return this._modelCardStatus;
  }
}
export interface SagemakerModelPackageModelMetricsBiasPostTrainingReport {
  /**
  * The digest of the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_digest SagemakerModelPackage#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * The type of content stored in the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_type SagemakerModelPackage#content_type}
  */
  readonly contentType?: string;
  /**
  * The Amazon S3 URI for the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#s3_uri SagemakerModelPackage#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerModelPackageModelMetricsBiasPostTrainingReportToTerraform(struct?: SagemakerModelPackageModelMetricsBiasPostTrainingReport | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_digest: cdktn.stringToTerraform(struct!.contentDigest),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerModelPackageModelMetricsBiasPostTrainingReportToHclTerraform(struct?: SagemakerModelPackageModelMetricsBiasPostTrainingReport | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_digest: {
      value: cdktn.stringToHclTerraform(struct!.contentDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageModelMetricsBiasPostTrainingReportOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageModelMetricsBiasPostTrainingReport | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageModelMetricsBiasPostTrainingReport | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: true, optional: true, required: false
  private _contentDigest?: string;
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // s3_uri - computed: true, optional: true, required: false
  private _s3Uri?: string;
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface SagemakerModelPackageModelMetricsBiasPreTrainingReport {
  /**
  * The digest of the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_digest SagemakerModelPackage#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * The type of content stored in the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_type SagemakerModelPackage#content_type}
  */
  readonly contentType?: string;
  /**
  * The Amazon S3 URI for the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#s3_uri SagemakerModelPackage#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerModelPackageModelMetricsBiasPreTrainingReportToTerraform(struct?: SagemakerModelPackageModelMetricsBiasPreTrainingReport | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_digest: cdktn.stringToTerraform(struct!.contentDigest),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerModelPackageModelMetricsBiasPreTrainingReportToHclTerraform(struct?: SagemakerModelPackageModelMetricsBiasPreTrainingReport | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_digest: {
      value: cdktn.stringToHclTerraform(struct!.contentDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageModelMetricsBiasPreTrainingReportOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageModelMetricsBiasPreTrainingReport | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageModelMetricsBiasPreTrainingReport | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: true, optional: true, required: false
  private _contentDigest?: string;
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // s3_uri - computed: true, optional: true, required: false
  private _s3Uri?: string;
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface SagemakerModelPackageModelMetricsBiasReport {
  /**
  * The digest of the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_digest SagemakerModelPackage#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * The type of content stored in the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_type SagemakerModelPackage#content_type}
  */
  readonly contentType?: string;
  /**
  * The Amazon S3 URI for the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#s3_uri SagemakerModelPackage#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerModelPackageModelMetricsBiasReportToTerraform(struct?: SagemakerModelPackageModelMetricsBiasReport | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_digest: cdktn.stringToTerraform(struct!.contentDigest),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerModelPackageModelMetricsBiasReportToHclTerraform(struct?: SagemakerModelPackageModelMetricsBiasReport | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_digest: {
      value: cdktn.stringToHclTerraform(struct!.contentDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageModelMetricsBiasReportOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageModelMetricsBiasReport | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageModelMetricsBiasReport | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: true, optional: true, required: false
  private _contentDigest?: string;
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // s3_uri - computed: true, optional: true, required: false
  private _s3Uri?: string;
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface SagemakerModelPackageModelMetricsBias {
  /**
  * Represents a Metric Source Object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#post_training_report SagemakerModelPackage#post_training_report}
  */
  readonly postTrainingReport?: SagemakerModelPackageModelMetricsBiasPostTrainingReport;
  /**
  * Represents a Metric Source Object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#pre_training_report SagemakerModelPackage#pre_training_report}
  */
  readonly preTrainingReport?: SagemakerModelPackageModelMetricsBiasPreTrainingReport;
  /**
  * Represents a Metric Source Object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#report SagemakerModelPackage#report}
  */
  readonly report?: SagemakerModelPackageModelMetricsBiasReport;
}

export function sagemakerModelPackageModelMetricsBiasToTerraform(struct?: SagemakerModelPackageModelMetricsBias | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    post_training_report: sagemakerModelPackageModelMetricsBiasPostTrainingReportToTerraform(struct!.postTrainingReport),
    pre_training_report: sagemakerModelPackageModelMetricsBiasPreTrainingReportToTerraform(struct!.preTrainingReport),
    report: sagemakerModelPackageModelMetricsBiasReportToTerraform(struct!.report),
  }
}


export function sagemakerModelPackageModelMetricsBiasToHclTerraform(struct?: SagemakerModelPackageModelMetricsBias | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    post_training_report: {
      value: sagemakerModelPackageModelMetricsBiasPostTrainingReportToHclTerraform(struct!.postTrainingReport),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageModelMetricsBiasPostTrainingReport",
    },
    pre_training_report: {
      value: sagemakerModelPackageModelMetricsBiasPreTrainingReportToHclTerraform(struct!.preTrainingReport),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageModelMetricsBiasPreTrainingReport",
    },
    report: {
      value: sagemakerModelPackageModelMetricsBiasReportToHclTerraform(struct!.report),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageModelMetricsBiasReport",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageModelMetricsBiasOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageModelMetricsBias | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postTrainingReport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postTrainingReport = this._postTrainingReport?.internalValue;
    }
    if (this._preTrainingReport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preTrainingReport = this._preTrainingReport?.internalValue;
    }
    if (this._report?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.report = this._report?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageModelMetricsBias | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._postTrainingReport.internalValue = undefined;
      this._preTrainingReport.internalValue = undefined;
      this._report.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._postTrainingReport.internalValue = value.postTrainingReport;
      this._preTrainingReport.internalValue = value.preTrainingReport;
      this._report.internalValue = value.report;
    }
  }

  // post_training_report - computed: true, optional: true, required: false
  private _postTrainingReport = new SagemakerModelPackageModelMetricsBiasPostTrainingReportOutputReference(this, "post_training_report");
  public get postTrainingReport() {
    return this._postTrainingReport;
  }
  public putPostTrainingReport(value: SagemakerModelPackageModelMetricsBiasPostTrainingReport) {
    this._postTrainingReport.internalValue = value;
  }
  public resetPostTrainingReport() {
    this._postTrainingReport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postTrainingReportInput() {
    return this._postTrainingReport.internalValue;
  }

  // pre_training_report - computed: true, optional: true, required: false
  private _preTrainingReport = new SagemakerModelPackageModelMetricsBiasPreTrainingReportOutputReference(this, "pre_training_report");
  public get preTrainingReport() {
    return this._preTrainingReport;
  }
  public putPreTrainingReport(value: SagemakerModelPackageModelMetricsBiasPreTrainingReport) {
    this._preTrainingReport.internalValue = value;
  }
  public resetPreTrainingReport() {
    this._preTrainingReport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preTrainingReportInput() {
    return this._preTrainingReport.internalValue;
  }

  // report - computed: true, optional: true, required: false
  private _report = new SagemakerModelPackageModelMetricsBiasReportOutputReference(this, "report");
  public get report() {
    return this._report;
  }
  public putReport(value: SagemakerModelPackageModelMetricsBiasReport) {
    this._report.internalValue = value;
  }
  public resetReport() {
    this._report.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportInput() {
    return this._report.internalValue;
  }
}
export interface SagemakerModelPackageModelMetricsExplainabilityReport {
  /**
  * The digest of the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_digest SagemakerModelPackage#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * The type of content stored in the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_type SagemakerModelPackage#content_type}
  */
  readonly contentType?: string;
  /**
  * The Amazon S3 URI for the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#s3_uri SagemakerModelPackage#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerModelPackageModelMetricsExplainabilityReportToTerraform(struct?: SagemakerModelPackageModelMetricsExplainabilityReport | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_digest: cdktn.stringToTerraform(struct!.contentDigest),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerModelPackageModelMetricsExplainabilityReportToHclTerraform(struct?: SagemakerModelPackageModelMetricsExplainabilityReport | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_digest: {
      value: cdktn.stringToHclTerraform(struct!.contentDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageModelMetricsExplainabilityReportOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageModelMetricsExplainabilityReport | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageModelMetricsExplainabilityReport | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: true, optional: true, required: false
  private _contentDigest?: string;
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // s3_uri - computed: true, optional: true, required: false
  private _s3Uri?: string;
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface SagemakerModelPackageModelMetricsExplainability {
  /**
  * Represents a Metric Source Object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#report SagemakerModelPackage#report}
  */
  readonly report?: SagemakerModelPackageModelMetricsExplainabilityReport;
}

export function sagemakerModelPackageModelMetricsExplainabilityToTerraform(struct?: SagemakerModelPackageModelMetricsExplainability | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    report: sagemakerModelPackageModelMetricsExplainabilityReportToTerraform(struct!.report),
  }
}


export function sagemakerModelPackageModelMetricsExplainabilityToHclTerraform(struct?: SagemakerModelPackageModelMetricsExplainability | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    report: {
      value: sagemakerModelPackageModelMetricsExplainabilityReportToHclTerraform(struct!.report),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageModelMetricsExplainabilityReport",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageModelMetricsExplainabilityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageModelMetricsExplainability | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._report?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.report = this._report?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageModelMetricsExplainability | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._report.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._report.internalValue = value.report;
    }
  }

  // report - computed: true, optional: true, required: false
  private _report = new SagemakerModelPackageModelMetricsExplainabilityReportOutputReference(this, "report");
  public get report() {
    return this._report;
  }
  public putReport(value: SagemakerModelPackageModelMetricsExplainabilityReport) {
    this._report.internalValue = value;
  }
  public resetReport() {
    this._report.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportInput() {
    return this._report.internalValue;
  }
}
export interface SagemakerModelPackageModelMetricsModelDataQualityConstraints {
  /**
  * The digest of the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_digest SagemakerModelPackage#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * The type of content stored in the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_type SagemakerModelPackage#content_type}
  */
  readonly contentType?: string;
  /**
  * The Amazon S3 URI for the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#s3_uri SagemakerModelPackage#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerModelPackageModelMetricsModelDataQualityConstraintsToTerraform(struct?: SagemakerModelPackageModelMetricsModelDataQualityConstraints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_digest: cdktn.stringToTerraform(struct!.contentDigest),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerModelPackageModelMetricsModelDataQualityConstraintsToHclTerraform(struct?: SagemakerModelPackageModelMetricsModelDataQualityConstraints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_digest: {
      value: cdktn.stringToHclTerraform(struct!.contentDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageModelMetricsModelDataQualityConstraintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageModelMetricsModelDataQualityConstraints | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageModelMetricsModelDataQualityConstraints | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: true, optional: true, required: false
  private _contentDigest?: string;
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // s3_uri - computed: true, optional: true, required: false
  private _s3Uri?: string;
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface SagemakerModelPackageModelMetricsModelDataQualityStatistics {
  /**
  * The digest of the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_digest SagemakerModelPackage#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * The type of content stored in the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_type SagemakerModelPackage#content_type}
  */
  readonly contentType?: string;
  /**
  * The Amazon S3 URI for the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#s3_uri SagemakerModelPackage#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerModelPackageModelMetricsModelDataQualityStatisticsToTerraform(struct?: SagemakerModelPackageModelMetricsModelDataQualityStatistics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_digest: cdktn.stringToTerraform(struct!.contentDigest),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerModelPackageModelMetricsModelDataQualityStatisticsToHclTerraform(struct?: SagemakerModelPackageModelMetricsModelDataQualityStatistics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_digest: {
      value: cdktn.stringToHclTerraform(struct!.contentDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageModelMetricsModelDataQualityStatisticsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageModelMetricsModelDataQualityStatistics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageModelMetricsModelDataQualityStatistics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: true, optional: true, required: false
  private _contentDigest?: string;
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // s3_uri - computed: true, optional: true, required: false
  private _s3Uri?: string;
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface SagemakerModelPackageModelMetricsModelDataQuality {
  /**
  * Represents a Metric Source Object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#constraints SagemakerModelPackage#constraints}
  */
  readonly constraints?: SagemakerModelPackageModelMetricsModelDataQualityConstraints;
  /**
  * Represents a Metric Source Object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#statistics SagemakerModelPackage#statistics}
  */
  readonly statistics?: SagemakerModelPackageModelMetricsModelDataQualityStatistics;
}

export function sagemakerModelPackageModelMetricsModelDataQualityToTerraform(struct?: SagemakerModelPackageModelMetricsModelDataQuality | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    constraints: sagemakerModelPackageModelMetricsModelDataQualityConstraintsToTerraform(struct!.constraints),
    statistics: sagemakerModelPackageModelMetricsModelDataQualityStatisticsToTerraform(struct!.statistics),
  }
}


export function sagemakerModelPackageModelMetricsModelDataQualityToHclTerraform(struct?: SagemakerModelPackageModelMetricsModelDataQuality | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    constraints: {
      value: sagemakerModelPackageModelMetricsModelDataQualityConstraintsToHclTerraform(struct!.constraints),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageModelMetricsModelDataQualityConstraints",
    },
    statistics: {
      value: sagemakerModelPackageModelMetricsModelDataQualityStatisticsToHclTerraform(struct!.statistics),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageModelMetricsModelDataQualityStatistics",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageModelMetricsModelDataQualityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageModelMetricsModelDataQuality | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraints = this._constraints?.internalValue;
    }
    if (this._statistics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistics = this._statistics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageModelMetricsModelDataQuality | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constraints.internalValue = undefined;
      this._statistics.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constraints.internalValue = value.constraints;
      this._statistics.internalValue = value.statistics;
    }
  }

  // constraints - computed: true, optional: true, required: false
  private _constraints = new SagemakerModelPackageModelMetricsModelDataQualityConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }
  public putConstraints(value: SagemakerModelPackageModelMetricsModelDataQualityConstraints) {
    this._constraints.internalValue = value;
  }
  public resetConstraints() {
    this._constraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints.internalValue;
  }

  // statistics - computed: true, optional: true, required: false
  private _statistics = new SagemakerModelPackageModelMetricsModelDataQualityStatisticsOutputReference(this, "statistics");
  public get statistics() {
    return this._statistics;
  }
  public putStatistics(value: SagemakerModelPackageModelMetricsModelDataQualityStatistics) {
    this._statistics.internalValue = value;
  }
  public resetStatistics() {
    this._statistics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsInput() {
    return this._statistics.internalValue;
  }
}
export interface SagemakerModelPackageModelMetricsModelQualityConstraints {
  /**
  * The digest of the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_digest SagemakerModelPackage#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * The type of content stored in the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_type SagemakerModelPackage#content_type}
  */
  readonly contentType?: string;
  /**
  * The Amazon S3 URI for the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#s3_uri SagemakerModelPackage#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerModelPackageModelMetricsModelQualityConstraintsToTerraform(struct?: SagemakerModelPackageModelMetricsModelQualityConstraints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_digest: cdktn.stringToTerraform(struct!.contentDigest),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerModelPackageModelMetricsModelQualityConstraintsToHclTerraform(struct?: SagemakerModelPackageModelMetricsModelQualityConstraints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_digest: {
      value: cdktn.stringToHclTerraform(struct!.contentDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageModelMetricsModelQualityConstraintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageModelMetricsModelQualityConstraints | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageModelMetricsModelQualityConstraints | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: true, optional: true, required: false
  private _contentDigest?: string;
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // s3_uri - computed: true, optional: true, required: false
  private _s3Uri?: string;
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface SagemakerModelPackageModelMetricsModelQualityStatistics {
  /**
  * The digest of the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_digest SagemakerModelPackage#content_digest}
  */
  readonly contentDigest?: string;
  /**
  * The type of content stored in the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_type SagemakerModelPackage#content_type}
  */
  readonly contentType?: string;
  /**
  * The Amazon S3 URI for the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#s3_uri SagemakerModelPackage#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerModelPackageModelMetricsModelQualityStatisticsToTerraform(struct?: SagemakerModelPackageModelMetricsModelQualityStatistics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_digest: cdktn.stringToTerraform(struct!.contentDigest),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerModelPackageModelMetricsModelQualityStatisticsToHclTerraform(struct?: SagemakerModelPackageModelMetricsModelQualityStatistics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_digest: {
      value: cdktn.stringToHclTerraform(struct!.contentDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageModelMetricsModelQualityStatisticsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageModelMetricsModelQualityStatistics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDigest = this._contentDigest;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageModelMetricsModelQualityStatistics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentDigest = undefined;
      this._contentType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentDigest = value.contentDigest;
      this._contentType = value.contentType;
      this._s3Uri = value.s3Uri;
    }
  }

  // content_digest - computed: true, optional: true, required: false
  private _contentDigest?: string;
  public get contentDigest() {
    return this.getStringAttribute('content_digest');
  }
  public set contentDigest(value: string) {
    this._contentDigest = value;
  }
  public resetContentDigest() {
    this._contentDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDigestInput() {
    return this._contentDigest;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // s3_uri - computed: true, optional: true, required: false
  private _s3Uri?: string;
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface SagemakerModelPackageModelMetricsModelQuality {
  /**
  * Represents a Metric Source Object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#constraints SagemakerModelPackage#constraints}
  */
  readonly constraints?: SagemakerModelPackageModelMetricsModelQualityConstraints;
  /**
  * Represents a Metric Source Object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#statistics SagemakerModelPackage#statistics}
  */
  readonly statistics?: SagemakerModelPackageModelMetricsModelQualityStatistics;
}

export function sagemakerModelPackageModelMetricsModelQualityToTerraform(struct?: SagemakerModelPackageModelMetricsModelQuality | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    constraints: sagemakerModelPackageModelMetricsModelQualityConstraintsToTerraform(struct!.constraints),
    statistics: sagemakerModelPackageModelMetricsModelQualityStatisticsToTerraform(struct!.statistics),
  }
}


export function sagemakerModelPackageModelMetricsModelQualityToHclTerraform(struct?: SagemakerModelPackageModelMetricsModelQuality | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    constraints: {
      value: sagemakerModelPackageModelMetricsModelQualityConstraintsToHclTerraform(struct!.constraints),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageModelMetricsModelQualityConstraints",
    },
    statistics: {
      value: sagemakerModelPackageModelMetricsModelQualityStatisticsToHclTerraform(struct!.statistics),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageModelMetricsModelQualityStatistics",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageModelMetricsModelQualityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageModelMetricsModelQuality | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraints = this._constraints?.internalValue;
    }
    if (this._statistics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistics = this._statistics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageModelMetricsModelQuality | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constraints.internalValue = undefined;
      this._statistics.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constraints.internalValue = value.constraints;
      this._statistics.internalValue = value.statistics;
    }
  }

  // constraints - computed: true, optional: true, required: false
  private _constraints = new SagemakerModelPackageModelMetricsModelQualityConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }
  public putConstraints(value: SagemakerModelPackageModelMetricsModelQualityConstraints) {
    this._constraints.internalValue = value;
  }
  public resetConstraints() {
    this._constraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints.internalValue;
  }

  // statistics - computed: true, optional: true, required: false
  private _statistics = new SagemakerModelPackageModelMetricsModelQualityStatisticsOutputReference(this, "statistics");
  public get statistics() {
    return this._statistics;
  }
  public putStatistics(value: SagemakerModelPackageModelMetricsModelQualityStatistics) {
    this._statistics.internalValue = value;
  }
  public resetStatistics() {
    this._statistics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsInput() {
    return this._statistics.internalValue;
  }
}
export interface SagemakerModelPackageModelMetrics {
  /**
  * Contains bias metrics for a model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#bias SagemakerModelPackage#bias}
  */
  readonly bias?: SagemakerModelPackageModelMetricsBias;
  /**
  * Contains explainability metrics for a model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#explainability SagemakerModelPackage#explainability}
  */
  readonly explainability?: SagemakerModelPackageModelMetricsExplainability;
  /**
  * Metrics that measure the quality of the input data for a model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#model_data_quality SagemakerModelPackage#model_data_quality}
  */
  readonly modelDataQuality?: SagemakerModelPackageModelMetricsModelDataQuality;
  /**
  * Metrics that measure the quality of a model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#model_quality SagemakerModelPackage#model_quality}
  */
  readonly modelQuality?: SagemakerModelPackageModelMetricsModelQuality;
}

export function sagemakerModelPackageModelMetricsToTerraform(struct?: SagemakerModelPackageModelMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bias: sagemakerModelPackageModelMetricsBiasToTerraform(struct!.bias),
    explainability: sagemakerModelPackageModelMetricsExplainabilityToTerraform(struct!.explainability),
    model_data_quality: sagemakerModelPackageModelMetricsModelDataQualityToTerraform(struct!.modelDataQuality),
    model_quality: sagemakerModelPackageModelMetricsModelQualityToTerraform(struct!.modelQuality),
  }
}


export function sagemakerModelPackageModelMetricsToHclTerraform(struct?: SagemakerModelPackageModelMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bias: {
      value: sagemakerModelPackageModelMetricsBiasToHclTerraform(struct!.bias),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageModelMetricsBias",
    },
    explainability: {
      value: sagemakerModelPackageModelMetricsExplainabilityToHclTerraform(struct!.explainability),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageModelMetricsExplainability",
    },
    model_data_quality: {
      value: sagemakerModelPackageModelMetricsModelDataQualityToHclTerraform(struct!.modelDataQuality),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageModelMetricsModelDataQuality",
    },
    model_quality: {
      value: sagemakerModelPackageModelMetricsModelQualityToHclTerraform(struct!.modelQuality),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageModelMetricsModelQuality",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageModelMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageModelMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bias?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bias = this._bias?.internalValue;
    }
    if (this._explainability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.explainability = this._explainability?.internalValue;
    }
    if (this._modelDataQuality?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataQuality = this._modelDataQuality?.internalValue;
    }
    if (this._modelQuality?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelQuality = this._modelQuality?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageModelMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bias.internalValue = undefined;
      this._explainability.internalValue = undefined;
      this._modelDataQuality.internalValue = undefined;
      this._modelQuality.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bias.internalValue = value.bias;
      this._explainability.internalValue = value.explainability;
      this._modelDataQuality.internalValue = value.modelDataQuality;
      this._modelQuality.internalValue = value.modelQuality;
    }
  }

  // bias - computed: true, optional: true, required: false
  private _bias = new SagemakerModelPackageModelMetricsBiasOutputReference(this, "bias");
  public get bias() {
    return this._bias;
  }
  public putBias(value: SagemakerModelPackageModelMetricsBias) {
    this._bias.internalValue = value;
  }
  public resetBias() {
    this._bias.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biasInput() {
    return this._bias.internalValue;
  }

  // explainability - computed: true, optional: true, required: false
  private _explainability = new SagemakerModelPackageModelMetricsExplainabilityOutputReference(this, "explainability");
  public get explainability() {
    return this._explainability;
  }
  public putExplainability(value: SagemakerModelPackageModelMetricsExplainability) {
    this._explainability.internalValue = value;
  }
  public resetExplainability() {
    this._explainability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explainabilityInput() {
    return this._explainability.internalValue;
  }

  // model_data_quality - computed: true, optional: true, required: false
  private _modelDataQuality = new SagemakerModelPackageModelMetricsModelDataQualityOutputReference(this, "model_data_quality");
  public get modelDataQuality() {
    return this._modelDataQuality;
  }
  public putModelDataQuality(value: SagemakerModelPackageModelMetricsModelDataQuality) {
    this._modelDataQuality.internalValue = value;
  }
  public resetModelDataQuality() {
    this._modelDataQuality.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataQualityInput() {
    return this._modelDataQuality.internalValue;
  }

  // model_quality - computed: true, optional: true, required: false
  private _modelQuality = new SagemakerModelPackageModelMetricsModelQualityOutputReference(this, "model_quality");
  public get modelQuality() {
    return this._modelQuality;
  }
  public putModelQuality(value: SagemakerModelPackageModelMetricsModelQuality) {
    this._modelQuality.internalValue = value;
  }
  public resetModelQuality() {
    this._modelQuality.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelQualityInput() {
    return this._modelQuality.internalValue;
  }
}
export interface SagemakerModelPackageModelPackageStatusDetailsValidationStatuses {
  /**
  * If the overall status is Failed, the reason for the failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#failure_reason SagemakerModelPackage#failure_reason}
  */
  readonly failureReason?: string;
  /**
  * The name of the model package for which the overall status is being reported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#name SagemakerModelPackage#name}
  */
  readonly name?: string;
  /**
  * The current status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#status SagemakerModelPackage#status}
  */
  readonly status?: string;
}

export function sagemakerModelPackageModelPackageStatusDetailsValidationStatusesToTerraform(struct?: SagemakerModelPackageModelPackageStatusDetailsValidationStatuses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    failure_reason: cdktn.stringToTerraform(struct!.failureReason),
    name: cdktn.stringToTerraform(struct!.name),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function sagemakerModelPackageModelPackageStatusDetailsValidationStatusesToHclTerraform(struct?: SagemakerModelPackageModelPackageStatusDetailsValidationStatuses | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    failure_reason: {
      value: cdktn.stringToHclTerraform(struct!.failureReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageModelPackageStatusDetailsValidationStatusesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerModelPackageModelPackageStatusDetailsValidationStatuses | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureReason = this._failureReason;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageModelPackageStatusDetailsValidationStatuses | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureReason = undefined;
      this._name = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureReason = value.failureReason;
      this._name = value.name;
      this._status = value.status;
    }
  }

  // failure_reason - computed: true, optional: true, required: false
  private _failureReason?: string;
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }
  public set failureReason(value: string) {
    this._failureReason = value;
  }
  public resetFailureReason() {
    this._failureReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureReasonInput() {
    return this._failureReason;
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

  // status - computed: true, optional: true, required: false
  private _status?: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class SagemakerModelPackageModelPackageStatusDetailsValidationStatusesList extends cdktn.ComplexList {
  public internalValue? : SagemakerModelPackageModelPackageStatusDetailsValidationStatuses[] | cdktn.IResolvable

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
  public get(index: number): SagemakerModelPackageModelPackageStatusDetailsValidationStatusesOutputReference {
    return new SagemakerModelPackageModelPackageStatusDetailsValidationStatusesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerModelPackageModelPackageStatusDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#validation_statuses SagemakerModelPackage#validation_statuses}
  */
  readonly validationStatuses?: SagemakerModelPackageModelPackageStatusDetailsValidationStatuses[] | cdktn.IResolvable;
}

export function sagemakerModelPackageModelPackageStatusDetailsToTerraform(struct?: SagemakerModelPackageModelPackageStatusDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    validation_statuses: cdktn.listMapper(sagemakerModelPackageModelPackageStatusDetailsValidationStatusesToTerraform, false)(struct!.validationStatuses),
  }
}


export function sagemakerModelPackageModelPackageStatusDetailsToHclTerraform(struct?: SagemakerModelPackageModelPackageStatusDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    validation_statuses: {
      value: cdktn.listMapperHcl(sagemakerModelPackageModelPackageStatusDetailsValidationStatusesToHclTerraform, false)(struct!.validationStatuses),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerModelPackageModelPackageStatusDetailsValidationStatusesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageModelPackageStatusDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageModelPackageStatusDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._validationStatuses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationStatuses = this._validationStatuses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageModelPackageStatusDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._validationStatuses.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._validationStatuses.internalValue = value.validationStatuses;
    }
  }

  // validation_statuses - computed: true, optional: true, required: false
  private _validationStatuses = new SagemakerModelPackageModelPackageStatusDetailsValidationStatusesList(this, "validation_statuses", false);
  public get validationStatuses() {
    return this._validationStatuses;
  }
  public putValidationStatuses(value: SagemakerModelPackageModelPackageStatusDetailsValidationStatuses[] | cdktn.IResolvable) {
    this._validationStatuses.internalValue = value;
  }
  public resetValidationStatuses() {
    this._validationStatuses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationStatusesInput() {
    return this._validationStatuses.internalValue;
  }
}
export interface SagemakerModelPackageSecurityConfig {
  /**
  * The AWS KMS Key ID (KMSKeyId) used for encryption of model package information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#kms_key_id SagemakerModelPackage#kms_key_id}
  */
  readonly kmsKeyId?: string;
}

export function sagemakerModelPackageSecurityConfigToTerraform(struct?: SagemakerModelPackageSecurityConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
  }
}


export function sagemakerModelPackageSecurityConfigToHclTerraform(struct?: SagemakerModelPackageSecurityConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageSecurityConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageSecurityConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageSecurityConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyId = value.kmsKeyId;
    }
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }
}
export interface SagemakerModelPackageSourceAlgorithmSpecificationSourceAlgorithms {
  /**
  * The name of an algorithm that was used to create the model package. The algorithm must be either an algorithm resource in your Amazon SageMaker account or an algorithm in AWS Marketplace that you are subscribed to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#algorithm_name SagemakerModelPackage#algorithm_name}
  */
  readonly algorithmName?: string;
  /**
  * The Amazon S3 path where the model artifacts, which result from model training, are stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#model_data_url SagemakerModelPackage#model_data_url}
  */
  readonly modelDataUrl?: string;
}

export function sagemakerModelPackageSourceAlgorithmSpecificationSourceAlgorithmsToTerraform(struct?: SagemakerModelPackageSourceAlgorithmSpecificationSourceAlgorithms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    algorithm_name: cdktn.stringToTerraform(struct!.algorithmName),
    model_data_url: cdktn.stringToTerraform(struct!.modelDataUrl),
  }
}


export function sagemakerModelPackageSourceAlgorithmSpecificationSourceAlgorithmsToHclTerraform(struct?: SagemakerModelPackageSourceAlgorithmSpecificationSourceAlgorithms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    algorithm_name: {
      value: cdktn.stringToHclTerraform(struct!.algorithmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_data_url: {
      value: cdktn.stringToHclTerraform(struct!.modelDataUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageSourceAlgorithmSpecificationSourceAlgorithmsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerModelPackageSourceAlgorithmSpecificationSourceAlgorithms | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithmName = this._algorithmName;
    }
    if (this._modelDataUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataUrl = this._modelDataUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageSourceAlgorithmSpecificationSourceAlgorithms | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithmName = undefined;
      this._modelDataUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithmName = value.algorithmName;
      this._modelDataUrl = value.modelDataUrl;
    }
  }

  // algorithm_name - computed: true, optional: true, required: false
  private _algorithmName?: string;
  public get algorithmName() {
    return this.getStringAttribute('algorithm_name');
  }
  public set algorithmName(value: string) {
    this._algorithmName = value;
  }
  public resetAlgorithmName() {
    this._algorithmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmNameInput() {
    return this._algorithmName;
  }

  // model_data_url - computed: true, optional: true, required: false
  private _modelDataUrl?: string;
  public get modelDataUrl() {
    return this.getStringAttribute('model_data_url');
  }
  public set modelDataUrl(value: string) {
    this._modelDataUrl = value;
  }
  public resetModelDataUrl() {
    this._modelDataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataUrlInput() {
    return this._modelDataUrl;
  }
}

export class SagemakerModelPackageSourceAlgorithmSpecificationSourceAlgorithmsList extends cdktn.ComplexList {
  public internalValue? : SagemakerModelPackageSourceAlgorithmSpecificationSourceAlgorithms[] | cdktn.IResolvable

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
  public get(index: number): SagemakerModelPackageSourceAlgorithmSpecificationSourceAlgorithmsOutputReference {
    return new SagemakerModelPackageSourceAlgorithmSpecificationSourceAlgorithmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerModelPackageSourceAlgorithmSpecification {
  /**
  * A list of algorithms that were used to create a model package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#source_algorithms SagemakerModelPackage#source_algorithms}
  */
  readonly sourceAlgorithms?: SagemakerModelPackageSourceAlgorithmSpecificationSourceAlgorithms[] | cdktn.IResolvable;
}

export function sagemakerModelPackageSourceAlgorithmSpecificationToTerraform(struct?: SagemakerModelPackageSourceAlgorithmSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_algorithms: cdktn.listMapper(sagemakerModelPackageSourceAlgorithmSpecificationSourceAlgorithmsToTerraform, false)(struct!.sourceAlgorithms),
  }
}


export function sagemakerModelPackageSourceAlgorithmSpecificationToHclTerraform(struct?: SagemakerModelPackageSourceAlgorithmSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_algorithms: {
      value: cdktn.listMapperHcl(sagemakerModelPackageSourceAlgorithmSpecificationSourceAlgorithmsToHclTerraform, false)(struct!.sourceAlgorithms),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerModelPackageSourceAlgorithmSpecificationSourceAlgorithmsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageSourceAlgorithmSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageSourceAlgorithmSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceAlgorithms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAlgorithms = this._sourceAlgorithms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageSourceAlgorithmSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceAlgorithms.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceAlgorithms.internalValue = value.sourceAlgorithms;
    }
  }

  // source_algorithms - computed: true, optional: true, required: false
  private _sourceAlgorithms = new SagemakerModelPackageSourceAlgorithmSpecificationSourceAlgorithmsList(this, "source_algorithms", false);
  public get sourceAlgorithms() {
    return this._sourceAlgorithms;
  }
  public putSourceAlgorithms(value: SagemakerModelPackageSourceAlgorithmSpecificationSourceAlgorithms[] | cdktn.IResolvable) {
    this._sourceAlgorithms.internalValue = value;
  }
  public resetSourceAlgorithms() {
    this._sourceAlgorithms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAlgorithmsInput() {
    return this._sourceAlgorithms.internalValue;
  }
}
export interface SagemakerModelPackageTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#key SagemakerModelPackage#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#value SagemakerModelPackage#value}
  */
  readonly value?: string;
}

export function sagemakerModelPackageTagsToTerraform(struct?: SagemakerModelPackageTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function sagemakerModelPackageTagsToHclTerraform(struct?: SagemakerModelPackageTags | cdktn.IResolvable): any {
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

export class SagemakerModelPackageTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerModelPackageTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerModelPackageTags | cdktn.IResolvable | undefined) {
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

export class SagemakerModelPackageTagsList extends cdktn.ComplexList {
  public internalValue? : SagemakerModelPackageTags[] | cdktn.IResolvable

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
  public get(index: number): SagemakerModelPackageTagsOutputReference {
    return new SagemakerModelPackageTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSource {
  /**
  * The S3 Data Source Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#s3_data_type SagemakerModelPackage#s3_data_type}
  */
  readonly s3DataType?: string;
  /**
  * Depending on the value specified for the S3DataType, identifies either a key name prefix or a manifest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#s3_uri SagemakerModelPackage#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSourceToTerraform(struct?: SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_data_type: cdktn.stringToTerraform(struct!.s3DataType),
    s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSourceToHclTerraform(struct?: SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_data_type: {
      value: cdktn.stringToHclTerraform(struct!.s3DataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktn.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3DataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataType = this._s3DataType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3DataType = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3DataType = value.s3DataType;
      this._s3Uri = value.s3Uri;
    }
  }

  // s3_data_type - computed: true, optional: true, required: false
  private _s3DataType?: string;
  public get s3DataType() {
    return this.getStringAttribute('s3_data_type');
  }
  public set s3DataType(value: string) {
    this._s3DataType = value;
  }
  public resetS3DataType() {
    this._s3DataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataTypeInput() {
    return this._s3DataType;
  }

  // s3_uri - computed: true, optional: true, required: false
  private _s3Uri?: string;
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSource {
  /**
  * Describes the S3 data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#s3_data_source SagemakerModelPackage#s3_data_source}
  */
  readonly s3DataSource?: SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSource;
}

export function sagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceToTerraform(struct?: SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_data_source: sagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSourceToTerraform(struct!.s3DataSource),
  }
}


export function sagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceToHclTerraform(struct?: SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_data_source: {
      value: sagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSourceToHclTerraform(struct!.s3DataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3DataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataSource = this._s3DataSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3DataSource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3DataSource.internalValue = value.s3DataSource;
    }
  }

  // s3_data_source - computed: true, optional: true, required: false
  private _s3DataSource = new SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSourceOutputReference(this, "s3_data_source");
  public get s3DataSource() {
    return this._s3DataSource;
  }
  public putS3DataSource(value: SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceS3DataSource) {
    this._s3DataSource.internalValue = value;
  }
  public resetS3DataSource() {
    this._s3DataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataSourceInput() {
    return this._s3DataSource.internalValue;
  }
}
export interface SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInput {
  /**
  * If your transform data is compressed, specify the compression type. Amazon SageMaker automatically decompresses the data for the transform job accordingly. The default value is None.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#compression_type SagemakerModelPackage#compression_type}
  */
  readonly compressionType?: string;
  /**
  * The multipurpose internet mail extension (MIME) type of the data. Amazon SageMaker uses the MIME type with each http call to transfer data to the transform job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#content_type SagemakerModelPackage#content_type}
  */
  readonly contentType?: string;
  /**
  * Describes the input source of a transform job and the way the transform job consumes it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#data_source SagemakerModelPackage#data_source}
  */
  readonly dataSource?: SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSource;
  /**
  * The method to use to split the transform job's data files into smaller batches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#split_type SagemakerModelPackage#split_type}
  */
  readonly splitType?: string;
}

export function sagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputToTerraform(struct?: SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compression_type: cdktn.stringToTerraform(struct!.compressionType),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    data_source: sagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceToTerraform(struct!.dataSource),
    split_type: cdktn.stringToTerraform(struct!.splitType),
  }
}


export function sagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputToHclTerraform(struct?: SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compression_type: {
      value: cdktn.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_source: {
      value: sagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSource",
    },
    split_type: {
      value: cdktn.stringToHclTerraform(struct!.splitType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._splitType !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitType = this._splitType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionType = undefined;
      this._contentType = undefined;
      this._dataSource.internalValue = undefined;
      this._splitType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionType = value.compressionType;
      this._contentType = value.contentType;
      this._dataSource.internalValue = value.dataSource;
      this._splitType = value.splitType;
    }
  }

  // compression_type - computed: true, optional: true, required: false
  private _compressionType?: string;
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // data_source - computed: true, optional: true, required: false
  private _dataSource = new SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputDataSource) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // split_type - computed: true, optional: true, required: false
  private _splitType?: string;
  public get splitType() {
    return this.getStringAttribute('split_type');
  }
  public set splitType(value: string) {
    this._splitType = value;
  }
  public resetSplitType() {
    this._splitType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitTypeInput() {
    return this._splitType;
  }
}
export interface SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutput {
  /**
  * The MIME type used to specify the output data. Amazon SageMaker uses the MIME type with each http call to transfer data from the transform job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#accept SagemakerModelPackage#accept}
  */
  readonly accept?: string;
  /**
  * Defines how to assemble the results of the transform job as a single S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#assemble_with SagemakerModelPackage#assemble_with}
  */
  readonly assembleWith?: string;
  /**
  * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#kms_key_id SagemakerModelPackage#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * The Amazon S3 path where you want Amazon SageMaker to store the results of the transform job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#s3_output_path SagemakerModelPackage#s3_output_path}
  */
  readonly s3OutputPath?: string;
}

export function sagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutputToTerraform(struct?: SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accept: cdktn.stringToTerraform(struct!.accept),
    assemble_with: cdktn.stringToTerraform(struct!.assembleWith),
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    s3_output_path: cdktn.stringToTerraform(struct!.s3OutputPath),
  }
}


export function sagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutputToHclTerraform(struct?: SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accept: {
      value: cdktn.stringToHclTerraform(struct!.accept),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assemble_with: {
      value: cdktn.stringToHclTerraform(struct!.assembleWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output_path: {
      value: cdktn.stringToHclTerraform(struct!.s3OutputPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accept !== undefined) {
      hasAnyValues = true;
      internalValueResult.accept = this._accept;
    }
    if (this._assembleWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.assembleWith = this._assembleWith;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accept = undefined;
      this._assembleWith = undefined;
      this._kmsKeyId = undefined;
      this._s3OutputPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accept = value.accept;
      this._assembleWith = value.assembleWith;
      this._kmsKeyId = value.kmsKeyId;
      this._s3OutputPath = value.s3OutputPath;
    }
  }

  // accept - computed: true, optional: true, required: false
  private _accept?: string;
  public get accept() {
    return this.getStringAttribute('accept');
  }
  public set accept(value: string) {
    this._accept = value;
  }
  public resetAccept() {
    this._accept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptInput() {
    return this._accept;
  }

  // assemble_with - computed: true, optional: true, required: false
  private _assembleWith?: string;
  public get assembleWith() {
    return this.getStringAttribute('assemble_with');
  }
  public set assembleWith(value: string) {
    this._assembleWith = value;
  }
  public resetAssembleWith() {
    this._assembleWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assembleWithInput() {
    return this._assembleWith;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // s3_output_path - computed: true, optional: true, required: false
  private _s3OutputPath?: string;
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  public resetS3OutputPath() {
    this._s3OutputPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath;
  }
}
export interface SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformResources {
  /**
  * The number of ML compute instances to use in the transform job. For distributed transform jobs, specify a value greater than 1. The default value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#instance_count SagemakerModelPackage#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * The ML compute instance type for the transform job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#instance_type SagemakerModelPackage#instance_type}
  */
  readonly instanceType?: string;
  /**
  * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt model data on the storage volume attached to the ML compute instance(s) that run the batch transform job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#volume_kms_key_id SagemakerModelPackage#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
}

export function sagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformResourcesToTerraform(struct?: SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    volume_kms_key_id: cdktn.stringToTerraform(struct!.volumeKmsKeyId),
  }
}


export function sagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformResourcesToHclTerraform(struct?: SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformResources | cdktn.IResolvable): any {
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
    volume_kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.volumeKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformResourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformResources | cdktn.IResolvable | undefined {
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
    if (this._volumeKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeKmsKeyId = this._volumeKmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformResources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._instanceType = undefined;
      this._volumeKmsKeyId = undefined;
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
      this._volumeKmsKeyId = value.volumeKmsKeyId;
    }
  }

  // instance_count - computed: true, optional: true, required: false
  private _instanceCount?: number;
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_type - computed: true, optional: true, required: false
  private _instanceType?: string;
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // volume_kms_key_id - computed: true, optional: true, required: false
  private _volumeKmsKeyId?: string;
  public get volumeKmsKeyId() {
    return this.getStringAttribute('volume_kms_key_id');
  }
  public set volumeKmsKeyId(value: string) {
    this._volumeKmsKeyId = value;
  }
  public resetVolumeKmsKeyId() {
    this._volumeKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeKmsKeyIdInput() {
    return this._volumeKmsKeyId;
  }
}
export interface SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinition {
  /**
  * A string that determines the number of records included in a single mini-batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#batch_strategy SagemakerModelPackage#batch_strategy}
  */
  readonly batchStrategy?: string;
  /**
  * Sets the environment variables in the Docker container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#environment SagemakerModelPackage#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * The maximum number of parallel requests that can be sent to each instance in a transform job. The default value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#max_concurrent_transforms SagemakerModelPackage#max_concurrent_transforms}
  */
  readonly maxConcurrentTransforms?: number;
  /**
  * The maximum payload size allowed, in MB. A payload is the data portion of a record (without metadata).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#max_payload_in_mb SagemakerModelPackage#max_payload_in_mb}
  */
  readonly maxPayloadInMb?: number;
  /**
  * Describes the input source of a transform job and the way the transform job consumes it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#transform_input SagemakerModelPackage#transform_input}
  */
  readonly transformInput?: SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInput;
  /**
  * Describes the results of a transform job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#transform_output SagemakerModelPackage#transform_output}
  */
  readonly transformOutput?: SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutput;
  /**
  * Describes the resources, including ML instance types and ML instance count, to use for transform job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#transform_resources SagemakerModelPackage#transform_resources}
  */
  readonly transformResources?: SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformResources;
}

export function sagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionToTerraform(struct?: SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_strategy: cdktn.stringToTerraform(struct!.batchStrategy),
    environment: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environment),
    max_concurrent_transforms: cdktn.numberToTerraform(struct!.maxConcurrentTransforms),
    max_payload_in_mb: cdktn.numberToTerraform(struct!.maxPayloadInMb),
    transform_input: sagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputToTerraform(struct!.transformInput),
    transform_output: sagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutputToTerraform(struct!.transformOutput),
    transform_resources: sagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformResourcesToTerraform(struct!.transformResources),
  }
}


export function sagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionToHclTerraform(struct?: SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch_strategy: {
      value: cdktn.stringToHclTerraform(struct!.batchStrategy),
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
    max_concurrent_transforms: {
      value: cdktn.numberToHclTerraform(struct!.maxConcurrentTransforms),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_payload_in_mb: {
      value: cdktn.numberToHclTerraform(struct!.maxPayloadInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transform_input: {
      value: sagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputToHclTerraform(struct!.transformInput),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInput",
    },
    transform_output: {
      value: sagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutputToHclTerraform(struct!.transformOutput),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutput",
    },
    transform_resources: {
      value: sagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformResourcesToHclTerraform(struct!.transformResources),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchStrategy = this._batchStrategy;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._maxConcurrentTransforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentTransforms = this._maxConcurrentTransforms;
    }
    if (this._maxPayloadInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPayloadInMb = this._maxPayloadInMb;
    }
    if (this._transformInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformInput = this._transformInput?.internalValue;
    }
    if (this._transformOutput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformOutput = this._transformOutput?.internalValue;
    }
    if (this._transformResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformResources = this._transformResources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchStrategy = undefined;
      this._environment = undefined;
      this._maxConcurrentTransforms = undefined;
      this._maxPayloadInMb = undefined;
      this._transformInput.internalValue = undefined;
      this._transformOutput.internalValue = undefined;
      this._transformResources.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchStrategy = value.batchStrategy;
      this._environment = value.environment;
      this._maxConcurrentTransforms = value.maxConcurrentTransforms;
      this._maxPayloadInMb = value.maxPayloadInMb;
      this._transformInput.internalValue = value.transformInput;
      this._transformOutput.internalValue = value.transformOutput;
      this._transformResources.internalValue = value.transformResources;
    }
  }

  // batch_strategy - computed: true, optional: true, required: false
  private _batchStrategy?: string;
  public get batchStrategy() {
    return this.getStringAttribute('batch_strategy');
  }
  public set batchStrategy(value: string) {
    this._batchStrategy = value;
  }
  public resetBatchStrategy() {
    this._batchStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchStrategyInput() {
    return this._batchStrategy;
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

  // max_concurrent_transforms - computed: true, optional: true, required: false
  private _maxConcurrentTransforms?: number;
  public get maxConcurrentTransforms() {
    return this.getNumberAttribute('max_concurrent_transforms');
  }
  public set maxConcurrentTransforms(value: number) {
    this._maxConcurrentTransforms = value;
  }
  public resetMaxConcurrentTransforms() {
    this._maxConcurrentTransforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentTransformsInput() {
    return this._maxConcurrentTransforms;
  }

  // max_payload_in_mb - computed: true, optional: true, required: false
  private _maxPayloadInMb?: number;
  public get maxPayloadInMb() {
    return this.getNumberAttribute('max_payload_in_mb');
  }
  public set maxPayloadInMb(value: number) {
    this._maxPayloadInMb = value;
  }
  public resetMaxPayloadInMb() {
    this._maxPayloadInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPayloadInMbInput() {
    return this._maxPayloadInMb;
  }

  // transform_input - computed: true, optional: true, required: false
  private _transformInput = new SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInputOutputReference(this, "transform_input");
  public get transformInput() {
    return this._transformInput;
  }
  public putTransformInput(value: SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformInput) {
    this._transformInput.internalValue = value;
  }
  public resetTransformInput() {
    this._transformInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformInputInput() {
    return this._transformInput.internalValue;
  }

  // transform_output - computed: true, optional: true, required: false
  private _transformOutput = new SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutputOutputReference(this, "transform_output");
  public get transformOutput() {
    return this._transformOutput;
  }
  public putTransformOutput(value: SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformOutput) {
    this._transformOutput.internalValue = value;
  }
  public resetTransformOutput() {
    this._transformOutput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformOutputInput() {
    return this._transformOutput.internalValue;
  }

  // transform_resources - computed: true, optional: true, required: false
  private _transformResources = new SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformResourcesOutputReference(this, "transform_resources");
  public get transformResources() {
    return this._transformResources;
  }
  public putTransformResources(value: SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionTransformResources) {
    this._transformResources.internalValue = value;
  }
  public resetTransformResources() {
    this._transformResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformResourcesInput() {
    return this._transformResources.internalValue;
  }
}
export interface SagemakerModelPackageValidationSpecificationValidationProfiles {
  /**
  * The name of the profile for the model package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#profile_name SagemakerModelPackage#profile_name}
  */
  readonly profileName?: string;
  /**
  * Defines the input needed to run a transform job using the inference specification specified in the algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#transform_job_definition SagemakerModelPackage#transform_job_definition}
  */
  readonly transformJobDefinition?: SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinition;
}

export function sagemakerModelPackageValidationSpecificationValidationProfilesToTerraform(struct?: SagemakerModelPackageValidationSpecificationValidationProfiles | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    profile_name: cdktn.stringToTerraform(struct!.profileName),
    transform_job_definition: sagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionToTerraform(struct!.transformJobDefinition),
  }
}


export function sagemakerModelPackageValidationSpecificationValidationProfilesToHclTerraform(struct?: SagemakerModelPackageValidationSpecificationValidationProfiles | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    profile_name: {
      value: cdktn.stringToHclTerraform(struct!.profileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transform_job_definition: {
      value: sagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionToHclTerraform(struct!.transformJobDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageValidationSpecificationValidationProfilesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerModelPackageValidationSpecificationValidationProfiles | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileName = this._profileName;
    }
    if (this._transformJobDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformJobDefinition = this._transformJobDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageValidationSpecificationValidationProfiles | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profileName = undefined;
      this._transformJobDefinition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profileName = value.profileName;
      this._transformJobDefinition.internalValue = value.transformJobDefinition;
    }
  }

  // profile_name - computed: true, optional: true, required: false
  private _profileName?: string;
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  public resetProfileName() {
    this._profileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // transform_job_definition - computed: true, optional: true, required: false
  private _transformJobDefinition = new SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinitionOutputReference(this, "transform_job_definition");
  public get transformJobDefinition() {
    return this._transformJobDefinition;
  }
  public putTransformJobDefinition(value: SagemakerModelPackageValidationSpecificationValidationProfilesTransformJobDefinition) {
    this._transformJobDefinition.internalValue = value;
  }
  public resetTransformJobDefinition() {
    this._transformJobDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformJobDefinitionInput() {
    return this._transformJobDefinition.internalValue;
  }
}

export class SagemakerModelPackageValidationSpecificationValidationProfilesList extends cdktn.ComplexList {
  public internalValue? : SagemakerModelPackageValidationSpecificationValidationProfiles[] | cdktn.IResolvable

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
  public get(index: number): SagemakerModelPackageValidationSpecificationValidationProfilesOutputReference {
    return new SagemakerModelPackageValidationSpecificationValidationProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerModelPackageValidationSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#validation_profiles SagemakerModelPackage#validation_profiles}
  */
  readonly validationProfiles?: SagemakerModelPackageValidationSpecificationValidationProfiles[] | cdktn.IResolvable;
  /**
  * The IAM roles to be used for the validation of the model package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#validation_role SagemakerModelPackage#validation_role}
  */
  readonly validationRole?: string;
}

export function sagemakerModelPackageValidationSpecificationToTerraform(struct?: SagemakerModelPackageValidationSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    validation_profiles: cdktn.listMapper(sagemakerModelPackageValidationSpecificationValidationProfilesToTerraform, false)(struct!.validationProfiles),
    validation_role: cdktn.stringToTerraform(struct!.validationRole),
  }
}


export function sagemakerModelPackageValidationSpecificationToHclTerraform(struct?: SagemakerModelPackageValidationSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    validation_profiles: {
      value: cdktn.listMapperHcl(sagemakerModelPackageValidationSpecificationValidationProfilesToHclTerraform, false)(struct!.validationProfiles),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerModelPackageValidationSpecificationValidationProfilesList",
    },
    validation_role: {
      value: cdktn.stringToHclTerraform(struct!.validationRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPackageValidationSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerModelPackageValidationSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._validationProfiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationProfiles = this._validationProfiles?.internalValue;
    }
    if (this._validationRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationRole = this._validationRole;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPackageValidationSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._validationProfiles.internalValue = undefined;
      this._validationRole = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._validationProfiles.internalValue = value.validationProfiles;
      this._validationRole = value.validationRole;
    }
  }

  // validation_profiles - computed: true, optional: true, required: false
  private _validationProfiles = new SagemakerModelPackageValidationSpecificationValidationProfilesList(this, "validation_profiles", false);
  public get validationProfiles() {
    return this._validationProfiles;
  }
  public putValidationProfiles(value: SagemakerModelPackageValidationSpecificationValidationProfiles[] | cdktn.IResolvable) {
    this._validationProfiles.internalValue = value;
  }
  public resetValidationProfiles() {
    this._validationProfiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationProfilesInput() {
    return this._validationProfiles.internalValue;
  }

  // validation_role - computed: true, optional: true, required: false
  private _validationRole?: string;
  public get validationRole() {
    return this.getStringAttribute('validation_role');
  }
  public set validationRole(value: string) {
    this._validationRole = value;
  }
  public resetValidationRole() {
    this._validationRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationRoleInput() {
    return this._validationRole;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package awscc_sagemaker_model_package}
*/
export class SagemakerModelPackage extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_model_package";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SagemakerModelPackage resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerModelPackage to import
  * @param importFromId The id of the existing SagemakerModelPackage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerModelPackage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_model_package", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_model_package awscc_sagemaker_model_package} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerModelPackageConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SagemakerModelPackageConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_model_package',
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
    this._additionalInferenceSpecifications.internalValue = config.additionalInferenceSpecifications;
    this._additionalInferenceSpecificationsToAdd.internalValue = config.additionalInferenceSpecificationsToAdd;
    this._approvalDescription = config.approvalDescription;
    this._certifyForMarketplace = config.certifyForMarketplace;
    this._clientToken = config.clientToken;
    this._customerMetadataProperties = config.customerMetadataProperties;
    this._domain = config.domain;
    this._driftCheckBaselines.internalValue = config.driftCheckBaselines;
    this._inferenceSpecification.internalValue = config.inferenceSpecification;
    this._metadataProperties.internalValue = config.metadataProperties;
    this._modelApprovalStatus = config.modelApprovalStatus;
    this._modelCard.internalValue = config.modelCard;
    this._modelMetrics.internalValue = config.modelMetrics;
    this._modelPackageDescription = config.modelPackageDescription;
    this._modelPackageGroupName = config.modelPackageGroupName;
    this._modelPackageName = config.modelPackageName;
    this._modelPackageStatusDetails.internalValue = config.modelPackageStatusDetails;
    this._modelPackageVersion = config.modelPackageVersion;
    this._samplePayloadUrl = config.samplePayloadUrl;
    this._securityConfig.internalValue = config.securityConfig;
    this._skipModelValidation = config.skipModelValidation;
    this._sourceAlgorithmSpecification.internalValue = config.sourceAlgorithmSpecification;
    this._sourceUri = config.sourceUri;
    this._tags.internalValue = config.tags;
    this._task = config.task;
    this._validationSpecification.internalValue = config.validationSpecification;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_inference_specifications - computed: true, optional: true, required: false
  private _additionalInferenceSpecifications = new SagemakerModelPackageAdditionalInferenceSpecificationsList(this, "additional_inference_specifications", false);
  public get additionalInferenceSpecifications() {
    return this._additionalInferenceSpecifications;
  }
  public putAdditionalInferenceSpecifications(value: SagemakerModelPackageAdditionalInferenceSpecifications[] | cdktn.IResolvable) {
    this._additionalInferenceSpecifications.internalValue = value;
  }
  public resetAdditionalInferenceSpecifications() {
    this._additionalInferenceSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInferenceSpecificationsInput() {
    return this._additionalInferenceSpecifications.internalValue;
  }

  // additional_inference_specifications_to_add - computed: true, optional: true, required: false
  private _additionalInferenceSpecificationsToAdd = new SagemakerModelPackageAdditionalInferenceSpecificationsToAddList(this, "additional_inference_specifications_to_add", false);
  public get additionalInferenceSpecificationsToAdd() {
    return this._additionalInferenceSpecificationsToAdd;
  }
  public putAdditionalInferenceSpecificationsToAdd(value: SagemakerModelPackageAdditionalInferenceSpecificationsToAdd[] | cdktn.IResolvable) {
    this._additionalInferenceSpecificationsToAdd.internalValue = value;
  }
  public resetAdditionalInferenceSpecificationsToAdd() {
    this._additionalInferenceSpecificationsToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInferenceSpecificationsToAddInput() {
    return this._additionalInferenceSpecificationsToAdd.internalValue;
  }

  // approval_description - computed: true, optional: true, required: false
  private _approvalDescription?: string;
  public get approvalDescription() {
    return this.getStringAttribute('approval_description');
  }
  public set approvalDescription(value: string) {
    this._approvalDescription = value;
  }
  public resetApprovalDescription() {
    this._approvalDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalDescriptionInput() {
    return this._approvalDescription;
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

  // client_token - computed: true, optional: true, required: false
  private _clientToken?: string;
  public get clientToken() {
    return this.getStringAttribute('client_token');
  }
  public set clientToken(value: string) {
    this._clientToken = value;
  }
  public resetClientToken() {
    this._clientToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTokenInput() {
    return this._clientToken;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // customer_metadata_properties - computed: true, optional: true, required: false
  private _customerMetadataProperties?: { [key: string]: string };
  public get customerMetadataProperties() {
    return this.getStringMapAttribute('customer_metadata_properties');
  }
  public set customerMetadataProperties(value: { [key: string]: string }) {
    this._customerMetadataProperties = value;
  }
  public resetCustomerMetadataProperties() {
    this._customerMetadataProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerMetadataPropertiesInput() {
    return this._customerMetadataProperties;
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string;
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // drift_check_baselines - computed: true, optional: true, required: false
  private _driftCheckBaselines = new SagemakerModelPackageDriftCheckBaselinesOutputReference(this, "drift_check_baselines");
  public get driftCheckBaselines() {
    return this._driftCheckBaselines;
  }
  public putDriftCheckBaselines(value: SagemakerModelPackageDriftCheckBaselines) {
    this._driftCheckBaselines.internalValue = value;
  }
  public resetDriftCheckBaselines() {
    this._driftCheckBaselines.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driftCheckBaselinesInput() {
    return this._driftCheckBaselines.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inference_specification - computed: true, optional: true, required: false
  private _inferenceSpecification = new SagemakerModelPackageInferenceSpecificationOutputReference(this, "inference_specification");
  public get inferenceSpecification() {
    return this._inferenceSpecification;
  }
  public putInferenceSpecification(value: SagemakerModelPackageInferenceSpecification) {
    this._inferenceSpecification.internalValue = value;
  }
  public resetInferenceSpecification() {
    this._inferenceSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceSpecificationInput() {
    return this._inferenceSpecification.internalValue;
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // metadata_properties - computed: true, optional: true, required: false
  private _metadataProperties = new SagemakerModelPackageMetadataPropertiesOutputReference(this, "metadata_properties");
  public get metadataProperties() {
    return this._metadataProperties;
  }
  public putMetadataProperties(value: SagemakerModelPackageMetadataProperties) {
    this._metadataProperties.internalValue = value;
  }
  public resetMetadataProperties() {
    this._metadataProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataPropertiesInput() {
    return this._metadataProperties.internalValue;
  }

  // model_approval_status - computed: true, optional: true, required: false
  private _modelApprovalStatus?: string;
  public get modelApprovalStatus() {
    return this.getStringAttribute('model_approval_status');
  }
  public set modelApprovalStatus(value: string) {
    this._modelApprovalStatus = value;
  }
  public resetModelApprovalStatus() {
    this._modelApprovalStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelApprovalStatusInput() {
    return this._modelApprovalStatus;
  }

  // model_card - computed: true, optional: true, required: false
  private _modelCard = new SagemakerModelPackageModelCardOutputReference(this, "model_card");
  public get modelCard() {
    return this._modelCard;
  }
  public putModelCard(value: SagemakerModelPackageModelCard) {
    this._modelCard.internalValue = value;
  }
  public resetModelCard() {
    this._modelCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelCardInput() {
    return this._modelCard.internalValue;
  }

  // model_metrics - computed: true, optional: true, required: false
  private _modelMetrics = new SagemakerModelPackageModelMetricsOutputReference(this, "model_metrics");
  public get modelMetrics() {
    return this._modelMetrics;
  }
  public putModelMetrics(value: SagemakerModelPackageModelMetrics) {
    this._modelMetrics.internalValue = value;
  }
  public resetModelMetrics() {
    this._modelMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelMetricsInput() {
    return this._modelMetrics.internalValue;
  }

  // model_package_arn - computed: true, optional: false, required: false
  public get modelPackageArn() {
    return this.getStringAttribute('model_package_arn');
  }

  // model_package_description - computed: true, optional: true, required: false
  private _modelPackageDescription?: string;
  public get modelPackageDescription() {
    return this.getStringAttribute('model_package_description');
  }
  public set modelPackageDescription(value: string) {
    this._modelPackageDescription = value;
  }
  public resetModelPackageDescription() {
    this._modelPackageDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPackageDescriptionInput() {
    return this._modelPackageDescription;
  }

  // model_package_group_name - computed: true, optional: true, required: false
  private _modelPackageGroupName?: string;
  public get modelPackageGroupName() {
    return this.getStringAttribute('model_package_group_name');
  }
  public set modelPackageGroupName(value: string) {
    this._modelPackageGroupName = value;
  }
  public resetModelPackageGroupName() {
    this._modelPackageGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPackageGroupNameInput() {
    return this._modelPackageGroupName;
  }

  // model_package_name - computed: true, optional: true, required: false
  private _modelPackageName?: string;
  public get modelPackageName() {
    return this.getStringAttribute('model_package_name');
  }
  public set modelPackageName(value: string) {
    this._modelPackageName = value;
  }
  public resetModelPackageName() {
    this._modelPackageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPackageNameInput() {
    return this._modelPackageName;
  }

  // model_package_status - computed: true, optional: false, required: false
  public get modelPackageStatus() {
    return this.getStringAttribute('model_package_status');
  }

  // model_package_status_details - computed: true, optional: true, required: false
  private _modelPackageStatusDetails = new SagemakerModelPackageModelPackageStatusDetailsOutputReference(this, "model_package_status_details");
  public get modelPackageStatusDetails() {
    return this._modelPackageStatusDetails;
  }
  public putModelPackageStatusDetails(value: SagemakerModelPackageModelPackageStatusDetails) {
    this._modelPackageStatusDetails.internalValue = value;
  }
  public resetModelPackageStatusDetails() {
    this._modelPackageStatusDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPackageStatusDetailsInput() {
    return this._modelPackageStatusDetails.internalValue;
  }

  // model_package_version - computed: true, optional: true, required: false
  private _modelPackageVersion?: number;
  public get modelPackageVersion() {
    return this.getNumberAttribute('model_package_version');
  }
  public set modelPackageVersion(value: number) {
    this._modelPackageVersion = value;
  }
  public resetModelPackageVersion() {
    this._modelPackageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPackageVersionInput() {
    return this._modelPackageVersion;
  }

  // sample_payload_url - computed: true, optional: true, required: false
  private _samplePayloadUrl?: string;
  public get samplePayloadUrl() {
    return this.getStringAttribute('sample_payload_url');
  }
  public set samplePayloadUrl(value: string) {
    this._samplePayloadUrl = value;
  }
  public resetSamplePayloadUrl() {
    this._samplePayloadUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplePayloadUrlInput() {
    return this._samplePayloadUrl;
  }

  // security_config - computed: true, optional: true, required: false
  private _securityConfig = new SagemakerModelPackageSecurityConfigOutputReference(this, "security_config");
  public get securityConfig() {
    return this._securityConfig;
  }
  public putSecurityConfig(value: SagemakerModelPackageSecurityConfig) {
    this._securityConfig.internalValue = value;
  }
  public resetSecurityConfig() {
    this._securityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityConfigInput() {
    return this._securityConfig.internalValue;
  }

  // skip_model_validation - computed: true, optional: true, required: false
  private _skipModelValidation?: string;
  public get skipModelValidation() {
    return this.getStringAttribute('skip_model_validation');
  }
  public set skipModelValidation(value: string) {
    this._skipModelValidation = value;
  }
  public resetSkipModelValidation() {
    this._skipModelValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipModelValidationInput() {
    return this._skipModelValidation;
  }

  // source_algorithm_specification - computed: true, optional: true, required: false
  private _sourceAlgorithmSpecification = new SagemakerModelPackageSourceAlgorithmSpecificationOutputReference(this, "source_algorithm_specification");
  public get sourceAlgorithmSpecification() {
    return this._sourceAlgorithmSpecification;
  }
  public putSourceAlgorithmSpecification(value: SagemakerModelPackageSourceAlgorithmSpecification) {
    this._sourceAlgorithmSpecification.internalValue = value;
  }
  public resetSourceAlgorithmSpecification() {
    this._sourceAlgorithmSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAlgorithmSpecificationInput() {
    return this._sourceAlgorithmSpecification.internalValue;
  }

  // source_uri - computed: true, optional: true, required: false
  private _sourceUri?: string;
  public get sourceUri() {
    return this.getStringAttribute('source_uri');
  }
  public set sourceUri(value: string) {
    this._sourceUri = value;
  }
  public resetSourceUri() {
    this._sourceUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUriInput() {
    return this._sourceUri;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SagemakerModelPackageTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SagemakerModelPackageTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // task - computed: true, optional: true, required: false
  private _task?: string;
  public get task() {
    return this.getStringAttribute('task');
  }
  public set task(value: string) {
    this._task = value;
  }
  public resetTask() {
    this._task = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskInput() {
    return this._task;
  }

  // validation_specification - computed: true, optional: true, required: false
  private _validationSpecification = new SagemakerModelPackageValidationSpecificationOutputReference(this, "validation_specification");
  public get validationSpecification() {
    return this._validationSpecification;
  }
  public putValidationSpecification(value: SagemakerModelPackageValidationSpecification) {
    this._validationSpecification.internalValue = value;
  }
  public resetValidationSpecification() {
    this._validationSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationSpecificationInput() {
    return this._validationSpecification.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_inference_specifications: cdktn.listMapper(sagemakerModelPackageAdditionalInferenceSpecificationsToTerraform, false)(this._additionalInferenceSpecifications.internalValue),
      additional_inference_specifications_to_add: cdktn.listMapper(sagemakerModelPackageAdditionalInferenceSpecificationsToAddToTerraform, false)(this._additionalInferenceSpecificationsToAdd.internalValue),
      approval_description: cdktn.stringToTerraform(this._approvalDescription),
      certify_for_marketplace: cdktn.booleanToTerraform(this._certifyForMarketplace),
      client_token: cdktn.stringToTerraform(this._clientToken),
      customer_metadata_properties: cdktn.hashMapper(cdktn.stringToTerraform)(this._customerMetadataProperties),
      domain: cdktn.stringToTerraform(this._domain),
      drift_check_baselines: sagemakerModelPackageDriftCheckBaselinesToTerraform(this._driftCheckBaselines.internalValue),
      inference_specification: sagemakerModelPackageInferenceSpecificationToTerraform(this._inferenceSpecification.internalValue),
      metadata_properties: sagemakerModelPackageMetadataPropertiesToTerraform(this._metadataProperties.internalValue),
      model_approval_status: cdktn.stringToTerraform(this._modelApprovalStatus),
      model_card: sagemakerModelPackageModelCardToTerraform(this._modelCard.internalValue),
      model_metrics: sagemakerModelPackageModelMetricsToTerraform(this._modelMetrics.internalValue),
      model_package_description: cdktn.stringToTerraform(this._modelPackageDescription),
      model_package_group_name: cdktn.stringToTerraform(this._modelPackageGroupName),
      model_package_name: cdktn.stringToTerraform(this._modelPackageName),
      model_package_status_details: sagemakerModelPackageModelPackageStatusDetailsToTerraform(this._modelPackageStatusDetails.internalValue),
      model_package_version: cdktn.numberToTerraform(this._modelPackageVersion),
      sample_payload_url: cdktn.stringToTerraform(this._samplePayloadUrl),
      security_config: sagemakerModelPackageSecurityConfigToTerraform(this._securityConfig.internalValue),
      skip_model_validation: cdktn.stringToTerraform(this._skipModelValidation),
      source_algorithm_specification: sagemakerModelPackageSourceAlgorithmSpecificationToTerraform(this._sourceAlgorithmSpecification.internalValue),
      source_uri: cdktn.stringToTerraform(this._sourceUri),
      tags: cdktn.listMapper(sagemakerModelPackageTagsToTerraform, false)(this._tags.internalValue),
      task: cdktn.stringToTerraform(this._task),
      validation_specification: sagemakerModelPackageValidationSpecificationToTerraform(this._validationSpecification.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_inference_specifications: {
        value: cdktn.listMapperHcl(sagemakerModelPackageAdditionalInferenceSpecificationsToHclTerraform, false)(this._additionalInferenceSpecifications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerModelPackageAdditionalInferenceSpecificationsList",
      },
      additional_inference_specifications_to_add: {
        value: cdktn.listMapperHcl(sagemakerModelPackageAdditionalInferenceSpecificationsToAddToHclTerraform, false)(this._additionalInferenceSpecificationsToAdd.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerModelPackageAdditionalInferenceSpecificationsToAddList",
      },
      approval_description: {
        value: cdktn.stringToHclTerraform(this._approvalDescription),
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
      client_token: {
        value: cdktn.stringToHclTerraform(this._clientToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_metadata_properties: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._customerMetadataProperties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      domain: {
        value: cdktn.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drift_check_baselines: {
        value: sagemakerModelPackageDriftCheckBaselinesToHclTerraform(this._driftCheckBaselines.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerModelPackageDriftCheckBaselines",
      },
      inference_specification: {
        value: sagemakerModelPackageInferenceSpecificationToHclTerraform(this._inferenceSpecification.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerModelPackageInferenceSpecification",
      },
      metadata_properties: {
        value: sagemakerModelPackageMetadataPropertiesToHclTerraform(this._metadataProperties.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerModelPackageMetadataProperties",
      },
      model_approval_status: {
        value: cdktn.stringToHclTerraform(this._modelApprovalStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_card: {
        value: sagemakerModelPackageModelCardToHclTerraform(this._modelCard.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerModelPackageModelCard",
      },
      model_metrics: {
        value: sagemakerModelPackageModelMetricsToHclTerraform(this._modelMetrics.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerModelPackageModelMetrics",
      },
      model_package_description: {
        value: cdktn.stringToHclTerraform(this._modelPackageDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_package_group_name: {
        value: cdktn.stringToHclTerraform(this._modelPackageGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_package_name: {
        value: cdktn.stringToHclTerraform(this._modelPackageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_package_status_details: {
        value: sagemakerModelPackageModelPackageStatusDetailsToHclTerraform(this._modelPackageStatusDetails.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerModelPackageModelPackageStatusDetails",
      },
      model_package_version: {
        value: cdktn.numberToHclTerraform(this._modelPackageVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sample_payload_url: {
        value: cdktn.stringToHclTerraform(this._samplePayloadUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_config: {
        value: sagemakerModelPackageSecurityConfigToHclTerraform(this._securityConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerModelPackageSecurityConfig",
      },
      skip_model_validation: {
        value: cdktn.stringToHclTerraform(this._skipModelValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_algorithm_specification: {
        value: sagemakerModelPackageSourceAlgorithmSpecificationToHclTerraform(this._sourceAlgorithmSpecification.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerModelPackageSourceAlgorithmSpecification",
      },
      source_uri: {
        value: cdktn.stringToHclTerraform(this._sourceUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(sagemakerModelPackageTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerModelPackageTagsList",
      },
      task: {
        value: cdktn.stringToHclTerraform(this._task),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validation_specification: {
        value: sagemakerModelPackageValidationSpecificationToHclTerraform(this._validationSpecification.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerModelPackageValidationSpecification",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
