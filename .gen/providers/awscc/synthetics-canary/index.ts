// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SyntheticsCanaryConfig extends cdktn.TerraformMetaArguments {
  /**
  * Provide artifact configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#artifact_config SyntheticsCanary#artifact_config}
  */
  readonly artifactConfig?: SyntheticsCanaryArtifactConfig;
  /**
  * Provide the s3 bucket output location for test results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#artifact_s3_location SyntheticsCanary#artifact_s3_location}
  */
  readonly artifactS3Location: string;
  /**
  * List of browser configurations for the canary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#browser_configs SyntheticsCanary#browser_configs}
  */
  readonly browserConfigs?: SyntheticsCanaryBrowserConfigs[] | cdktn.IResolvable;
  /**
  * Provide the canary script source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#code SyntheticsCanary#code}
  */
  readonly code: SyntheticsCanaryCode;
  /**
  * Deletes associated lambda resources created by Synthetics if set to True. Default is False
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#delete_lambda_resources_on_canary_deletion SyntheticsCanary#delete_lambda_resources_on_canary_deletion}
  */
  readonly deleteLambdaResourcesOnCanaryDeletion?: boolean | cdktn.IResolvable;
  /**
  * Setting to control if UpdateCanary will perform a DryRun and validate it is PASSING before performing the Update. Default is FALSE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#dry_run_and_update SyntheticsCanary#dry_run_and_update}
  */
  readonly dryRunAndUpdate?: boolean | cdktn.IResolvable;
  /**
  * Lambda Execution role used to run your canaries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#execution_role_arn SyntheticsCanary#execution_role_arn}
  */
  readonly executionRoleArn: string;
  /**
  * Retention period of failed canary runs represented in number of days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#failure_retention_period SyntheticsCanary#failure_retention_period}
  */
  readonly failureRetentionPeriod?: number;
  /**
  * Name of the canary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#name SyntheticsCanary#name}
  */
  readonly name: string;
  /**
  * Setting to control if provisioned resources created by Synthetics are deleted alongside the canary. Default is AUTOMATIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#provisioned_resource_cleanup SyntheticsCanary#provisioned_resource_cleanup}
  */
  readonly provisionedResourceCleanup?: string;
  /**
  * List of resources which canary tags should be replicated to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#resources_to_replicate_tags SyntheticsCanary#resources_to_replicate_tags}
  */
  readonly resourcesToReplicateTags?: string[];
  /**
  * Provide canary run configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#run_config SyntheticsCanary#run_config}
  */
  readonly runConfig?: SyntheticsCanaryRunConfig;
  /**
  * Runtime version of Synthetics Library
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#runtime_version SyntheticsCanary#runtime_version}
  */
  readonly runtimeVersion: string;
  /**
  * Frequency to run your canaries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#schedule SyntheticsCanary#schedule}
  */
  readonly schedule: SyntheticsCanarySchedule;
  /**
  * Runs canary if set to True. Default is False
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#start_canary_after_creation SyntheticsCanary#start_canary_after_creation}
  */
  readonly startCanaryAfterCreation?: boolean | cdktn.IResolvable;
  /**
  * Retention period of successful canary runs represented in number of days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#success_retention_period SyntheticsCanary#success_retention_period}
  */
  readonly successRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#tags SyntheticsCanary#tags}
  */
  readonly tags?: SyntheticsCanaryTags[] | cdktn.IResolvable;
  /**
  * Visual reference configuration for visual testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#visual_reference SyntheticsCanary#visual_reference}
  */
  readonly visualReference?: SyntheticsCanaryVisualReference;
  /**
  * List of visual references for the canary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#visual_references SyntheticsCanary#visual_references}
  */
  readonly visualReferences?: SyntheticsCanaryVisualReferences[] | cdktn.IResolvable;
  /**
  * Provide VPC Configuration if enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#vpc_config SyntheticsCanary#vpc_config}
  */
  readonly vpcConfig?: SyntheticsCanaryVpcConfig;
}
export interface SyntheticsCanaryArtifactConfigS3Encryption {
  /**
  * Encryption mode for encrypting artifacts when uploading to S3. Valid values: SSE_S3 and SSE_KMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#encryption_mode SyntheticsCanary#encryption_mode}
  */
  readonly encryptionMode?: string;
  /**
  * KMS key Arn for encrypting artifacts when uploading to S3. You must specify KMS key Arn for SSE_KMS encryption mode only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#kms_key_arn SyntheticsCanary#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}

export function syntheticsCanaryArtifactConfigS3EncryptionToTerraform(struct?: SyntheticsCanaryArtifactConfigS3Encryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_mode: cdktn.stringToTerraform(struct!.encryptionMode),
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
  }
}


export function syntheticsCanaryArtifactConfigS3EncryptionToHclTerraform(struct?: SyntheticsCanaryArtifactConfigS3Encryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_mode: {
      value: cdktn.stringToHclTerraform(struct!.encryptionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsCanaryArtifactConfigS3EncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SyntheticsCanaryArtifactConfigS3Encryption | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionMode = this._encryptionMode;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsCanaryArtifactConfigS3Encryption | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionMode = undefined;
      this._kmsKeyArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionMode = value.encryptionMode;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // encryption_mode - computed: true, optional: true, required: false
  private _encryptionMode?: string;
  public get encryptionMode() {
    return this.getStringAttribute('encryption_mode');
  }
  public set encryptionMode(value: string) {
    this._encryptionMode = value;
  }
  public resetEncryptionMode() {
    this._encryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionModeInput() {
    return this._encryptionMode;
  }

  // kms_key_arn - computed: true, optional: true, required: false
  private _kmsKeyArn?: string;
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }
}
export interface SyntheticsCanaryArtifactConfig {
  /**
  * Encryption configuration for uploading artifacts to S3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#s3_encryption SyntheticsCanary#s3_encryption}
  */
  readonly s3Encryption?: SyntheticsCanaryArtifactConfigS3Encryption;
}

export function syntheticsCanaryArtifactConfigToTerraform(struct?: SyntheticsCanaryArtifactConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_encryption: syntheticsCanaryArtifactConfigS3EncryptionToTerraform(struct!.s3Encryption),
  }
}


export function syntheticsCanaryArtifactConfigToHclTerraform(struct?: SyntheticsCanaryArtifactConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_encryption: {
      value: syntheticsCanaryArtifactConfigS3EncryptionToHclTerraform(struct!.s3Encryption),
      isBlock: true,
      type: "struct",
      storageClassType: "SyntheticsCanaryArtifactConfigS3Encryption",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsCanaryArtifactConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SyntheticsCanaryArtifactConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Encryption = this._s3Encryption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsCanaryArtifactConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Encryption.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Encryption.internalValue = value.s3Encryption;
    }
  }

  // s3_encryption - computed: true, optional: true, required: false
  private _s3Encryption = new SyntheticsCanaryArtifactConfigS3EncryptionOutputReference(this, "s3_encryption");
  public get s3Encryption() {
    return this._s3Encryption;
  }
  public putS3Encryption(value: SyntheticsCanaryArtifactConfigS3Encryption) {
    this._s3Encryption.internalValue = value;
  }
  public resetS3Encryption() {
    this._s3Encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3EncryptionInput() {
    return this._s3Encryption.internalValue;
  }
}
export interface SyntheticsCanaryBrowserConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}
  */
  readonly browserType?: string;
}

export function syntheticsCanaryBrowserConfigsToTerraform(struct?: SyntheticsCanaryBrowserConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    browser_type: cdktn.stringToTerraform(struct!.browserType),
  }
}


export function syntheticsCanaryBrowserConfigsToHclTerraform(struct?: SyntheticsCanaryBrowserConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    browser_type: {
      value: cdktn.stringToHclTerraform(struct!.browserType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsCanaryBrowserConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SyntheticsCanaryBrowserConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._browserType !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserType = this._browserType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsCanaryBrowserConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._browserType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._browserType = value.browserType;
    }
  }

  // browser_type - computed: true, optional: true, required: false
  private _browserType?: string;
  public get browserType() {
    return this.getStringAttribute('browser_type');
  }
  public set browserType(value: string) {
    this._browserType = value;
  }
  public resetBrowserType() {
    this._browserType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserTypeInput() {
    return this._browserType;
  }
}

export class SyntheticsCanaryBrowserConfigsList extends cdktn.ComplexList {
  public internalValue? : SyntheticsCanaryBrowserConfigs[] | cdktn.IResolvable

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
  public get(index: number): SyntheticsCanaryBrowserConfigsOutputReference {
    return new SyntheticsCanaryBrowserConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticsCanaryCodeDependencies {
  /**
  * ARN of the Lambda layer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#reference SyntheticsCanary#reference}
  */
  readonly reference?: string;
  /**
  * Type of dependency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#type SyntheticsCanary#type}
  */
  readonly type?: string;
}

export function syntheticsCanaryCodeDependenciesToTerraform(struct?: SyntheticsCanaryCodeDependencies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    reference: cdktn.stringToTerraform(struct!.reference),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function syntheticsCanaryCodeDependenciesToHclTerraform(struct?: SyntheticsCanaryCodeDependencies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    reference: {
      value: cdktn.stringToHclTerraform(struct!.reference),
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

export class SyntheticsCanaryCodeDependenciesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SyntheticsCanaryCodeDependencies | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsCanaryCodeDependencies | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reference = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reference = value.reference;
      this._type = value.type;
    }
  }

  // reference - computed: true, optional: true, required: false
  private _reference?: string;
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
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

export class SyntheticsCanaryCodeDependenciesList extends cdktn.ComplexList {
  public internalValue? : SyntheticsCanaryCodeDependencies[] | cdktn.IResolvable

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
  public get(index: number): SyntheticsCanaryCodeDependenciesOutputReference {
    return new SyntheticsCanaryCodeDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticsCanaryCode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#blueprint_types SyntheticsCanary#blueprint_types}
  */
  readonly blueprintTypes?: string[];
  /**
  * List of Lambda layers to attach to the canary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#dependencies SyntheticsCanary#dependencies}
  */
  readonly dependencies?: SyntheticsCanaryCodeDependencies[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#handler SyntheticsCanary#handler}
  */
  readonly handler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#s3_bucket SyntheticsCanary#s3_bucket}
  */
  readonly s3Bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#s3_key SyntheticsCanary#s3_key}
  */
  readonly s3Key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#s3_object_version SyntheticsCanary#s3_object_version}
  */
  readonly s3ObjectVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#script SyntheticsCanary#script}
  */
  readonly script?: string;
}

export function syntheticsCanaryCodeToTerraform(struct?: SyntheticsCanaryCode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    blueprint_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.blueprintTypes),
    dependencies: cdktn.listMapper(syntheticsCanaryCodeDependenciesToTerraform, false)(struct!.dependencies),
    handler: cdktn.stringToTerraform(struct!.handler),
    s3_bucket: cdktn.stringToTerraform(struct!.s3Bucket),
    s3_key: cdktn.stringToTerraform(struct!.s3Key),
    s3_object_version: cdktn.stringToTerraform(struct!.s3ObjectVersion),
    script: cdktn.stringToTerraform(struct!.script),
  }
}


export function syntheticsCanaryCodeToHclTerraform(struct?: SyntheticsCanaryCode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    blueprint_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.blueprintTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dependencies: {
      value: cdktn.listMapperHcl(syntheticsCanaryCodeDependenciesToHclTerraform, false)(struct!.dependencies),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsCanaryCodeDependenciesList",
    },
    handler: {
      value: cdktn.stringToHclTerraform(struct!.handler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket: {
      value: cdktn.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_key: {
      value: cdktn.stringToHclTerraform(struct!.s3Key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_object_version: {
      value: cdktn.stringToHclTerraform(struct!.s3ObjectVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script: {
      value: cdktn.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsCanaryCodeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SyntheticsCanaryCode | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blueprintTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprintTypes = this._blueprintTypes;
    }
    if (this._dependencies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencies = this._dependencies?.internalValue;
    }
    if (this._handler !== undefined) {
      hasAnyValues = true;
      internalValueResult.handler = this._handler;
    }
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3Key !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Key = this._s3Key;
    }
    if (this._s3ObjectVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ObjectVersion = this._s3ObjectVersion;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsCanaryCode | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blueprintTypes = undefined;
      this._dependencies.internalValue = undefined;
      this._handler = undefined;
      this._s3Bucket = undefined;
      this._s3Key = undefined;
      this._s3ObjectVersion = undefined;
      this._script = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blueprintTypes = value.blueprintTypes;
      this._dependencies.internalValue = value.dependencies;
      this._handler = value.handler;
      this._s3Bucket = value.s3Bucket;
      this._s3Key = value.s3Key;
      this._s3ObjectVersion = value.s3ObjectVersion;
      this._script = value.script;
    }
  }

  // blueprint_types - computed: true, optional: true, required: false
  private _blueprintTypes?: string[];
  public get blueprintTypes() {
    return this.getListAttribute('blueprint_types');
  }
  public set blueprintTypes(value: string[]) {
    this._blueprintTypes = value;
  }
  public resetBlueprintTypes() {
    this._blueprintTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintTypesInput() {
    return this._blueprintTypes;
  }

  // dependencies - computed: true, optional: true, required: false
  private _dependencies = new SyntheticsCanaryCodeDependenciesList(this, "dependencies", false);
  public get dependencies() {
    return this._dependencies;
  }
  public putDependencies(value: SyntheticsCanaryCodeDependencies[] | cdktn.IResolvable) {
    this._dependencies.internalValue = value;
  }
  public resetDependencies() {
    this._dependencies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies.internalValue;
  }

  // handler - computed: true, optional: true, required: false
  private _handler?: string;
  public get handler() {
    return this.getStringAttribute('handler');
  }
  public set handler(value: string) {
    this._handler = value;
  }
  public resetHandler() {
    this._handler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerInput() {
    return this._handler;
  }

  // s3_bucket - computed: true, optional: true, required: false
  private _s3Bucket?: string;
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  public resetS3Bucket() {
    this._s3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_key - computed: true, optional: true, required: false
  private _s3Key?: string;
  public get s3Key() {
    return this.getStringAttribute('s3_key');
  }
  public set s3Key(value: string) {
    this._s3Key = value;
  }
  public resetS3Key() {
    this._s3Key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyInput() {
    return this._s3Key;
  }

  // s3_object_version - computed: true, optional: true, required: false
  private _s3ObjectVersion?: string;
  public get s3ObjectVersion() {
    return this.getStringAttribute('s3_object_version');
  }
  public set s3ObjectVersion(value: string) {
    this._s3ObjectVersion = value;
  }
  public resetS3ObjectVersion() {
    this._s3ObjectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ObjectVersionInput() {
    return this._s3ObjectVersion;
  }

  // script - computed: true, optional: true, required: false
  private _script?: string;
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // source_location_arn - computed: true, optional: false, required: false
  public get sourceLocationArn() {
    return this.getStringAttribute('source_location_arn');
  }
}
export interface SyntheticsCanaryRunConfig {
  /**
  * Enable active tracing if set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#active_tracing SyntheticsCanary#active_tracing}
  */
  readonly activeTracing?: boolean | cdktn.IResolvable;
  /**
  * Environment variable key-value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#environment_variables SyntheticsCanary#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Provide ephemeralStorage available for canary in MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#ephemeral_storage SyntheticsCanary#ephemeral_storage}
  */
  readonly ephemeralStorage?: number;
  /**
  * Provide maximum memory available for canary in MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#memory_in_mb SyntheticsCanary#memory_in_mb}
  */
  readonly memoryInMb?: number;
  /**
  * Provide maximum canary timeout per run in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#timeout_in_seconds SyntheticsCanary#timeout_in_seconds}
  */
  readonly timeoutInSeconds?: number;
}

export function syntheticsCanaryRunConfigToTerraform(struct?: SyntheticsCanaryRunConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    active_tracing: cdktn.booleanToTerraform(struct!.activeTracing),
    environment_variables: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environmentVariables),
    ephemeral_storage: cdktn.numberToTerraform(struct!.ephemeralStorage),
    memory_in_mb: cdktn.numberToTerraform(struct!.memoryInMb),
    timeout_in_seconds: cdktn.numberToTerraform(struct!.timeoutInSeconds),
  }
}


export function syntheticsCanaryRunConfigToHclTerraform(struct?: SyntheticsCanaryRunConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    active_tracing: {
      value: cdktn.booleanToHclTerraform(struct!.activeTracing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    environment_variables: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environmentVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ephemeral_storage: {
      value: cdktn.numberToHclTerraform(struct!.ephemeralStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_in_mb: {
      value: cdktn.numberToHclTerraform(struct!.memoryInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.timeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsCanaryRunConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SyntheticsCanaryRunConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeTracing !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeTracing = this._activeTracing;
    }
    if (this._environmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariables = this._environmentVariables;
    }
    if (this._ephemeralStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralStorage = this._ephemeralStorage;
    }
    if (this._memoryInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInMb = this._memoryInMb;
    }
    if (this._timeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutInSeconds = this._timeoutInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsCanaryRunConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeTracing = undefined;
      this._environmentVariables = undefined;
      this._ephemeralStorage = undefined;
      this._memoryInMb = undefined;
      this._timeoutInSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeTracing = value.activeTracing;
      this._environmentVariables = value.environmentVariables;
      this._ephemeralStorage = value.ephemeralStorage;
      this._memoryInMb = value.memoryInMb;
      this._timeoutInSeconds = value.timeoutInSeconds;
    }
  }

  // active_tracing - computed: true, optional: true, required: false
  private _activeTracing?: boolean | cdktn.IResolvable;
  public get activeTracing() {
    return this.getBooleanAttribute('active_tracing');
  }
  public set activeTracing(value: boolean | cdktn.IResolvable) {
    this._activeTracing = value;
  }
  public resetActiveTracing() {
    this._activeTracing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeTracingInput() {
    return this._activeTracing;
  }

  // environment_variables - computed: true, optional: true, required: false
  private _environmentVariables?: { [key: string]: string };
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // ephemeral_storage - computed: true, optional: true, required: false
  private _ephemeralStorage?: number;
  public get ephemeralStorage() {
    return this.getNumberAttribute('ephemeral_storage');
  }
  public set ephemeralStorage(value: number) {
    this._ephemeralStorage = value;
  }
  public resetEphemeralStorage() {
    this._ephemeralStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageInput() {
    return this._ephemeralStorage;
  }

  // memory_in_mb - computed: true, optional: true, required: false
  private _memoryInMb?: number;
  public get memoryInMb() {
    return this.getNumberAttribute('memory_in_mb');
  }
  public set memoryInMb(value: number) {
    this._memoryInMb = value;
  }
  public resetMemoryInMb() {
    this._memoryInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInMbInput() {
    return this._memoryInMb;
  }

  // timeout_in_seconds - computed: true, optional: true, required: false
  private _timeoutInSeconds?: number;
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
  public set timeoutInSeconds(value: number) {
    this._timeoutInSeconds = value;
  }
  public resetTimeoutInSeconds() {
    this._timeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInSecondsInput() {
    return this._timeoutInSeconds;
  }
}
export interface SyntheticsCanaryScheduleRetryConfig {
  /**
  * maximum times the canary will be retried upon the scheduled run failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#max_retries SyntheticsCanary#max_retries}
  */
  readonly maxRetries?: number;
}

export function syntheticsCanaryScheduleRetryConfigToTerraform(struct?: SyntheticsCanaryScheduleRetryConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_retries: cdktn.numberToTerraform(struct!.maxRetries),
  }
}


export function syntheticsCanaryScheduleRetryConfigToHclTerraform(struct?: SyntheticsCanaryScheduleRetryConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_retries: {
      value: cdktn.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsCanaryScheduleRetryConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SyntheticsCanaryScheduleRetryConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsCanaryScheduleRetryConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxRetries = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxRetries = value.maxRetries;
    }
  }

  // max_retries - computed: true, optional: true, required: false
  private _maxRetries?: number;
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }
}
export interface SyntheticsCanarySchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#duration_in_seconds SyntheticsCanary#duration_in_seconds}
  */
  readonly durationInSeconds?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#expression SyntheticsCanary#expression}
  */
  readonly expression: string;
  /**
  * Provide canary auto retry configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#retry_config SyntheticsCanary#retry_config}
  */
  readonly retryConfig?: SyntheticsCanaryScheduleRetryConfig;
}

export function syntheticsCanaryScheduleToTerraform(struct?: SyntheticsCanarySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration_in_seconds: cdktn.stringToTerraform(struct!.durationInSeconds),
    expression: cdktn.stringToTerraform(struct!.expression),
    retry_config: syntheticsCanaryScheduleRetryConfigToTerraform(struct!.retryConfig),
  }
}


export function syntheticsCanaryScheduleToHclTerraform(struct?: SyntheticsCanarySchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration_in_seconds: {
      value: cdktn.stringToHclTerraform(struct!.durationInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_config: {
      value: syntheticsCanaryScheduleRetryConfigToHclTerraform(struct!.retryConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SyntheticsCanaryScheduleRetryConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsCanaryScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SyntheticsCanarySchedule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationInSeconds = this._durationInSeconds;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._retryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryConfig = this._retryConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsCanarySchedule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._durationInSeconds = undefined;
      this._expression = undefined;
      this._retryConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._durationInSeconds = value.durationInSeconds;
      this._expression = value.expression;
      this._retryConfig.internalValue = value.retryConfig;
    }
  }

  // duration_in_seconds - computed: true, optional: true, required: false
  private _durationInSeconds?: string;
  public get durationInSeconds() {
    return this.getStringAttribute('duration_in_seconds');
  }
  public set durationInSeconds(value: string) {
    this._durationInSeconds = value;
  }
  public resetDurationInSeconds() {
    this._durationInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInSecondsInput() {
    return this._durationInSeconds;
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string;
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // retry_config - computed: true, optional: true, required: false
  private _retryConfig = new SyntheticsCanaryScheduleRetryConfigOutputReference(this, "retry_config");
  public get retryConfig() {
    return this._retryConfig;
  }
  public putRetryConfig(value: SyntheticsCanaryScheduleRetryConfig) {
    this._retryConfig.internalValue = value;
  }
  public resetRetryConfig() {
    this._retryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryConfigInput() {
    return this._retryConfig.internalValue;
  }
}
export interface SyntheticsCanaryTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#key SyntheticsCanary#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#value SyntheticsCanary#value}
  */
  readonly value?: string;
}

export function syntheticsCanaryTagsToTerraform(struct?: SyntheticsCanaryTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function syntheticsCanaryTagsToHclTerraform(struct?: SyntheticsCanaryTags | cdktn.IResolvable): any {
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

export class SyntheticsCanaryTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SyntheticsCanaryTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SyntheticsCanaryTags | cdktn.IResolvable | undefined) {
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

export class SyntheticsCanaryTagsList extends cdktn.ComplexList {
  public internalValue? : SyntheticsCanaryTags[] | cdktn.IResolvable

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
  public get(index: number): SyntheticsCanaryTagsOutputReference {
    return new SyntheticsCanaryTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticsCanaryVisualReferenceBaseScreenshots {
  /**
  * List of coordinates of rectangles to be ignored during visual testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#ignore_coordinates SyntheticsCanary#ignore_coordinates}
  */
  readonly ignoreCoordinates?: string[];
  /**
  * Name of the screenshot to be used as base reference for visual testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#screenshot_name SyntheticsCanary#screenshot_name}
  */
  readonly screenshotName?: string;
}

export function syntheticsCanaryVisualReferenceBaseScreenshotsToTerraform(struct?: SyntheticsCanaryVisualReferenceBaseScreenshots | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ignore_coordinates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ignoreCoordinates),
    screenshot_name: cdktn.stringToTerraform(struct!.screenshotName),
  }
}


export function syntheticsCanaryVisualReferenceBaseScreenshotsToHclTerraform(struct?: SyntheticsCanaryVisualReferenceBaseScreenshots | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ignore_coordinates: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.ignoreCoordinates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    screenshot_name: {
      value: cdktn.stringToHclTerraform(struct!.screenshotName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SyntheticsCanaryVisualReferenceBaseScreenshots | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreCoordinates !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCoordinates = this._ignoreCoordinates;
    }
    if (this._screenshotName !== undefined) {
      hasAnyValues = true;
      internalValueResult.screenshotName = this._screenshotName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsCanaryVisualReferenceBaseScreenshots | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreCoordinates = undefined;
      this._screenshotName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreCoordinates = value.ignoreCoordinates;
      this._screenshotName = value.screenshotName;
    }
  }

  // ignore_coordinates - computed: true, optional: true, required: false
  private _ignoreCoordinates?: string[];
  public get ignoreCoordinates() {
    return this.getListAttribute('ignore_coordinates');
  }
  public set ignoreCoordinates(value: string[]) {
    this._ignoreCoordinates = value;
  }
  public resetIgnoreCoordinates() {
    this._ignoreCoordinates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCoordinatesInput() {
    return this._ignoreCoordinates;
  }

  // screenshot_name - computed: true, optional: true, required: false
  private _screenshotName?: string;
  public get screenshotName() {
    return this.getStringAttribute('screenshot_name');
  }
  public set screenshotName(value: string) {
    this._screenshotName = value;
  }
  public resetScreenshotName() {
    this._screenshotName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get screenshotNameInput() {
    return this._screenshotName;
  }
}

export class SyntheticsCanaryVisualReferenceBaseScreenshotsList extends cdktn.ComplexList {
  public internalValue? : SyntheticsCanaryVisualReferenceBaseScreenshots[] | cdktn.IResolvable

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
  public get(index: number): SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference {
    return new SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticsCanaryVisualReference {
  /**
  * Canary run id to be used as base reference for visual testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#base_canary_run_id SyntheticsCanary#base_canary_run_id}
  */
  readonly baseCanaryRunId?: string;
  /**
  * List of screenshots used as base reference for visual testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#base_screenshots SyntheticsCanary#base_screenshots}
  */
  readonly baseScreenshots?: SyntheticsCanaryVisualReferenceBaseScreenshots[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}
  */
  readonly browserType?: string;
}

export function syntheticsCanaryVisualReferenceToTerraform(struct?: SyntheticsCanaryVisualReference | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base_canary_run_id: cdktn.stringToTerraform(struct!.baseCanaryRunId),
    base_screenshots: cdktn.listMapper(syntheticsCanaryVisualReferenceBaseScreenshotsToTerraform, false)(struct!.baseScreenshots),
    browser_type: cdktn.stringToTerraform(struct!.browserType),
  }
}


export function syntheticsCanaryVisualReferenceToHclTerraform(struct?: SyntheticsCanaryVisualReference | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base_canary_run_id: {
      value: cdktn.stringToHclTerraform(struct!.baseCanaryRunId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_screenshots: {
      value: cdktn.listMapperHcl(syntheticsCanaryVisualReferenceBaseScreenshotsToHclTerraform, false)(struct!.baseScreenshots),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsCanaryVisualReferenceBaseScreenshotsList",
    },
    browser_type: {
      value: cdktn.stringToHclTerraform(struct!.browserType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsCanaryVisualReferenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SyntheticsCanaryVisualReference | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseCanaryRunId !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseCanaryRunId = this._baseCanaryRunId;
    }
    if (this._baseScreenshots?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseScreenshots = this._baseScreenshots?.internalValue;
    }
    if (this._browserType !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserType = this._browserType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsCanaryVisualReference | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseCanaryRunId = undefined;
      this._baseScreenshots.internalValue = undefined;
      this._browserType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseCanaryRunId = value.baseCanaryRunId;
      this._baseScreenshots.internalValue = value.baseScreenshots;
      this._browserType = value.browserType;
    }
  }

  // base_canary_run_id - computed: true, optional: true, required: false
  private _baseCanaryRunId?: string;
  public get baseCanaryRunId() {
    return this.getStringAttribute('base_canary_run_id');
  }
  public set baseCanaryRunId(value: string) {
    this._baseCanaryRunId = value;
  }
  public resetBaseCanaryRunId() {
    this._baseCanaryRunId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseCanaryRunIdInput() {
    return this._baseCanaryRunId;
  }

  // base_screenshots - computed: true, optional: true, required: false
  private _baseScreenshots = new SyntheticsCanaryVisualReferenceBaseScreenshotsList(this, "base_screenshots", false);
  public get baseScreenshots() {
    return this._baseScreenshots;
  }
  public putBaseScreenshots(value: SyntheticsCanaryVisualReferenceBaseScreenshots[] | cdktn.IResolvable) {
    this._baseScreenshots.internalValue = value;
  }
  public resetBaseScreenshots() {
    this._baseScreenshots.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseScreenshotsInput() {
    return this._baseScreenshots.internalValue;
  }

  // browser_type - computed: true, optional: true, required: false
  private _browserType?: string;
  public get browserType() {
    return this.getStringAttribute('browser_type');
  }
  public set browserType(value: string) {
    this._browserType = value;
  }
  public resetBrowserType() {
    this._browserType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserTypeInput() {
    return this._browserType;
  }
}
export interface SyntheticsCanaryVisualReferencesBaseScreenshots {
  /**
  * List of coordinates of rectangles to be ignored during visual testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#ignore_coordinates SyntheticsCanary#ignore_coordinates}
  */
  readonly ignoreCoordinates?: string[];
  /**
  * Name of the screenshot to be used as base reference for visual testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#screenshot_name SyntheticsCanary#screenshot_name}
  */
  readonly screenshotName?: string;
}

export function syntheticsCanaryVisualReferencesBaseScreenshotsToTerraform(struct?: SyntheticsCanaryVisualReferencesBaseScreenshots | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ignore_coordinates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ignoreCoordinates),
    screenshot_name: cdktn.stringToTerraform(struct!.screenshotName),
  }
}


export function syntheticsCanaryVisualReferencesBaseScreenshotsToHclTerraform(struct?: SyntheticsCanaryVisualReferencesBaseScreenshots | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ignore_coordinates: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.ignoreCoordinates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    screenshot_name: {
      value: cdktn.stringToHclTerraform(struct!.screenshotName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SyntheticsCanaryVisualReferencesBaseScreenshots | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreCoordinates !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCoordinates = this._ignoreCoordinates;
    }
    if (this._screenshotName !== undefined) {
      hasAnyValues = true;
      internalValueResult.screenshotName = this._screenshotName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsCanaryVisualReferencesBaseScreenshots | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreCoordinates = undefined;
      this._screenshotName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreCoordinates = value.ignoreCoordinates;
      this._screenshotName = value.screenshotName;
    }
  }

  // ignore_coordinates - computed: true, optional: true, required: false
  private _ignoreCoordinates?: string[];
  public get ignoreCoordinates() {
    return this.getListAttribute('ignore_coordinates');
  }
  public set ignoreCoordinates(value: string[]) {
    this._ignoreCoordinates = value;
  }
  public resetIgnoreCoordinates() {
    this._ignoreCoordinates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCoordinatesInput() {
    return this._ignoreCoordinates;
  }

  // screenshot_name - computed: true, optional: true, required: false
  private _screenshotName?: string;
  public get screenshotName() {
    return this.getStringAttribute('screenshot_name');
  }
  public set screenshotName(value: string) {
    this._screenshotName = value;
  }
  public resetScreenshotName() {
    this._screenshotName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get screenshotNameInput() {
    return this._screenshotName;
  }
}

export class SyntheticsCanaryVisualReferencesBaseScreenshotsList extends cdktn.ComplexList {
  public internalValue? : SyntheticsCanaryVisualReferencesBaseScreenshots[] | cdktn.IResolvable

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
  public get(index: number): SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference {
    return new SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticsCanaryVisualReferences {
  /**
  * Canary run id to be used as base reference for visual testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#base_canary_run_id SyntheticsCanary#base_canary_run_id}
  */
  readonly baseCanaryRunId?: string;
  /**
  * List of screenshots used as base reference for visual testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#base_screenshots SyntheticsCanary#base_screenshots}
  */
  readonly baseScreenshots?: SyntheticsCanaryVisualReferencesBaseScreenshots[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}
  */
  readonly browserType?: string;
}

export function syntheticsCanaryVisualReferencesToTerraform(struct?: SyntheticsCanaryVisualReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base_canary_run_id: cdktn.stringToTerraform(struct!.baseCanaryRunId),
    base_screenshots: cdktn.listMapper(syntheticsCanaryVisualReferencesBaseScreenshotsToTerraform, false)(struct!.baseScreenshots),
    browser_type: cdktn.stringToTerraform(struct!.browserType),
  }
}


export function syntheticsCanaryVisualReferencesToHclTerraform(struct?: SyntheticsCanaryVisualReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base_canary_run_id: {
      value: cdktn.stringToHclTerraform(struct!.baseCanaryRunId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_screenshots: {
      value: cdktn.listMapperHcl(syntheticsCanaryVisualReferencesBaseScreenshotsToHclTerraform, false)(struct!.baseScreenshots),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsCanaryVisualReferencesBaseScreenshotsList",
    },
    browser_type: {
      value: cdktn.stringToHclTerraform(struct!.browserType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsCanaryVisualReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SyntheticsCanaryVisualReferences | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseCanaryRunId !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseCanaryRunId = this._baseCanaryRunId;
    }
    if (this._baseScreenshots?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseScreenshots = this._baseScreenshots?.internalValue;
    }
    if (this._browserType !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserType = this._browserType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsCanaryVisualReferences | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseCanaryRunId = undefined;
      this._baseScreenshots.internalValue = undefined;
      this._browserType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseCanaryRunId = value.baseCanaryRunId;
      this._baseScreenshots.internalValue = value.baseScreenshots;
      this._browserType = value.browserType;
    }
  }

  // base_canary_run_id - computed: true, optional: true, required: false
  private _baseCanaryRunId?: string;
  public get baseCanaryRunId() {
    return this.getStringAttribute('base_canary_run_id');
  }
  public set baseCanaryRunId(value: string) {
    this._baseCanaryRunId = value;
  }
  public resetBaseCanaryRunId() {
    this._baseCanaryRunId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseCanaryRunIdInput() {
    return this._baseCanaryRunId;
  }

  // base_screenshots - computed: true, optional: true, required: false
  private _baseScreenshots = new SyntheticsCanaryVisualReferencesBaseScreenshotsList(this, "base_screenshots", false);
  public get baseScreenshots() {
    return this._baseScreenshots;
  }
  public putBaseScreenshots(value: SyntheticsCanaryVisualReferencesBaseScreenshots[] | cdktn.IResolvable) {
    this._baseScreenshots.internalValue = value;
  }
  public resetBaseScreenshots() {
    this._baseScreenshots.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseScreenshotsInput() {
    return this._baseScreenshots.internalValue;
  }

  // browser_type - computed: true, optional: true, required: false
  private _browserType?: string;
  public get browserType() {
    return this.getStringAttribute('browser_type');
  }
  public set browserType(value: string) {
    this._browserType = value;
  }
  public resetBrowserType() {
    this._browserType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserTypeInput() {
    return this._browserType;
  }
}

export class SyntheticsCanaryVisualReferencesList extends cdktn.ComplexList {
  public internalValue? : SyntheticsCanaryVisualReferences[] | cdktn.IResolvable

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
  public get(index: number): SyntheticsCanaryVisualReferencesOutputReference {
    return new SyntheticsCanaryVisualReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticsCanaryVpcConfig {
  /**
  * Allow outbound IPv6 traffic on VPC canaries that are connected to dual-stack subnets if set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#ipv_6_allowed_for_dual_stack SyntheticsCanary#ipv_6_allowed_for_dual_stack}
  */
  readonly ipv6AllowedForDualStack?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#security_group_ids SyntheticsCanary#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#subnet_ids SyntheticsCanary#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#vpc_id SyntheticsCanary#vpc_id}
  */
  readonly vpcId?: string;
}

export function syntheticsCanaryVpcConfigToTerraform(struct?: SyntheticsCanaryVpcConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ipv_6_allowed_for_dual_stack: cdktn.booleanToTerraform(struct!.ipv6AllowedForDualStack),
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    vpc_id: cdktn.stringToTerraform(struct!.vpcId),
  }
}


export function syntheticsCanaryVpcConfigToHclTerraform(struct?: SyntheticsCanaryVpcConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ipv_6_allowed_for_dual_stack: {
      value: cdktn.booleanToHclTerraform(struct!.ipv6AllowedForDualStack),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vpc_id: {
      value: cdktn.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsCanaryVpcConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SyntheticsCanaryVpcConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6AllowedForDualStack !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AllowedForDualStack = this._ipv6AllowedForDualStack;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsCanaryVpcConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6AllowedForDualStack = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
      this._vpcId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6AllowedForDualStack = value.ipv6AllowedForDualStack;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
      this._vpcId = value.vpcId;
    }
  }

  // ipv_6_allowed_for_dual_stack - computed: true, optional: true, required: false
  private _ipv6AllowedForDualStack?: boolean | cdktn.IResolvable;
  public get ipv6AllowedForDualStack() {
    return this.getBooleanAttribute('ipv_6_allowed_for_dual_stack');
  }
  public set ipv6AllowedForDualStack(value: boolean | cdktn.IResolvable) {
    this._ipv6AllowedForDualStack = value;
  }
  public resetIpv6AllowedForDualStack() {
    this._ipv6AllowedForDualStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AllowedForDualStackInput() {
    return this._ipv6AllowedForDualStack;
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[];
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[];
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string;
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary awscc_synthetics_canary}
*/
export class SyntheticsCanary extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_synthetics_canary";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SyntheticsCanary resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SyntheticsCanary to import
  * @param importFromId The id of the existing SyntheticsCanary that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SyntheticsCanary to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_synthetics_canary", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/synthetics_canary awscc_synthetics_canary} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyntheticsCanaryConfig
  */
  public constructor(scope: Construct, id: string, config: SyntheticsCanaryConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_synthetics_canary',
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
    this._artifactConfig.internalValue = config.artifactConfig;
    this._artifactS3Location = config.artifactS3Location;
    this._browserConfigs.internalValue = config.browserConfigs;
    this._code.internalValue = config.code;
    this._deleteLambdaResourcesOnCanaryDeletion = config.deleteLambdaResourcesOnCanaryDeletion;
    this._dryRunAndUpdate = config.dryRunAndUpdate;
    this._executionRoleArn = config.executionRoleArn;
    this._failureRetentionPeriod = config.failureRetentionPeriod;
    this._name = config.name;
    this._provisionedResourceCleanup = config.provisionedResourceCleanup;
    this._resourcesToReplicateTags = config.resourcesToReplicateTags;
    this._runConfig.internalValue = config.runConfig;
    this._runtimeVersion = config.runtimeVersion;
    this._schedule.internalValue = config.schedule;
    this._startCanaryAfterCreation = config.startCanaryAfterCreation;
    this._successRetentionPeriod = config.successRetentionPeriod;
    this._tags.internalValue = config.tags;
    this._visualReference.internalValue = config.visualReference;
    this._visualReferences.internalValue = config.visualReferences;
    this._vpcConfig.internalValue = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // artifact_config - computed: true, optional: true, required: false
  private _artifactConfig = new SyntheticsCanaryArtifactConfigOutputReference(this, "artifact_config");
  public get artifactConfig() {
    return this._artifactConfig;
  }
  public putArtifactConfig(value: SyntheticsCanaryArtifactConfig) {
    this._artifactConfig.internalValue = value;
  }
  public resetArtifactConfig() {
    this._artifactConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactConfigInput() {
    return this._artifactConfig.internalValue;
  }

  // artifact_s3_location - computed: false, optional: false, required: true
  private _artifactS3Location?: string;
  public get artifactS3Location() {
    return this.getStringAttribute('artifact_s3_location');
  }
  public set artifactS3Location(value: string) {
    this._artifactS3Location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactS3LocationInput() {
    return this._artifactS3Location;
  }

  // browser_configs - computed: true, optional: true, required: false
  private _browserConfigs = new SyntheticsCanaryBrowserConfigsList(this, "browser_configs", false);
  public get browserConfigs() {
    return this._browserConfigs;
  }
  public putBrowserConfigs(value: SyntheticsCanaryBrowserConfigs[] | cdktn.IResolvable) {
    this._browserConfigs.internalValue = value;
  }
  public resetBrowserConfigs() {
    this._browserConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserConfigsInput() {
    return this._browserConfigs.internalValue;
  }

  // canary_id - computed: true, optional: false, required: false
  public get canaryId() {
    return this.getStringAttribute('canary_id');
  }

  // code - computed: false, optional: false, required: true
  private _code = new SyntheticsCanaryCodeOutputReference(this, "code");
  public get code() {
    return this._code;
  }
  public putCode(value: SyntheticsCanaryCode) {
    this._code.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code.internalValue;
  }

  // delete_lambda_resources_on_canary_deletion - computed: true, optional: true, required: false
  private _deleteLambdaResourcesOnCanaryDeletion?: boolean | cdktn.IResolvable;
  public get deleteLambdaResourcesOnCanaryDeletion() {
    return this.getBooleanAttribute('delete_lambda_resources_on_canary_deletion');
  }
  public set deleteLambdaResourcesOnCanaryDeletion(value: boolean | cdktn.IResolvable) {
    this._deleteLambdaResourcesOnCanaryDeletion = value;
  }
  public resetDeleteLambdaResourcesOnCanaryDeletion() {
    this._deleteLambdaResourcesOnCanaryDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteLambdaResourcesOnCanaryDeletionInput() {
    return this._deleteLambdaResourcesOnCanaryDeletion;
  }

  // dry_run_and_update - computed: true, optional: true, required: false
  private _dryRunAndUpdate?: boolean | cdktn.IResolvable;
  public get dryRunAndUpdate() {
    return this.getBooleanAttribute('dry_run_and_update');
  }
  public set dryRunAndUpdate(value: boolean | cdktn.IResolvable) {
    this._dryRunAndUpdate = value;
  }
  public resetDryRunAndUpdate() {
    this._dryRunAndUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunAndUpdateInput() {
    return this._dryRunAndUpdate;
  }

  // execution_role_arn - computed: false, optional: false, required: true
  private _executionRoleArn?: string;
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
  }

  // failure_retention_period - computed: true, optional: true, required: false
  private _failureRetentionPeriod?: number;
  public get failureRetentionPeriod() {
    return this.getNumberAttribute('failure_retention_period');
  }
  public set failureRetentionPeriod(value: number) {
    this._failureRetentionPeriod = value;
  }
  public resetFailureRetentionPeriod() {
    this._failureRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureRetentionPeriodInput() {
    return this._failureRetentionPeriod;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // provisioned_resource_cleanup - computed: true, optional: true, required: false
  private _provisionedResourceCleanup?: string;
  public get provisionedResourceCleanup() {
    return this.getStringAttribute('provisioned_resource_cleanup');
  }
  public set provisionedResourceCleanup(value: string) {
    this._provisionedResourceCleanup = value;
  }
  public resetProvisionedResourceCleanup() {
    this._provisionedResourceCleanup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedResourceCleanupInput() {
    return this._provisionedResourceCleanup;
  }

  // resources_to_replicate_tags - computed: true, optional: true, required: false
  private _resourcesToReplicateTags?: string[];
  public get resourcesToReplicateTags() {
    return this.getListAttribute('resources_to_replicate_tags');
  }
  public set resourcesToReplicateTags(value: string[]) {
    this._resourcesToReplicateTags = value;
  }
  public resetResourcesToReplicateTags() {
    this._resourcesToReplicateTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesToReplicateTagsInput() {
    return this._resourcesToReplicateTags;
  }

  // run_config - computed: true, optional: true, required: false
  private _runConfig = new SyntheticsCanaryRunConfigOutputReference(this, "run_config");
  public get runConfig() {
    return this._runConfig;
  }
  public putRunConfig(value: SyntheticsCanaryRunConfig) {
    this._runConfig.internalValue = value;
  }
  public resetRunConfig() {
    this._runConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runConfigInput() {
    return this._runConfig.internalValue;
  }

  // runtime_version - computed: false, optional: false, required: true
  private _runtimeVersion?: string;
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }
  public set runtimeVersion(value: string) {
    this._runtimeVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeVersionInput() {
    return this._runtimeVersion;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new SyntheticsCanaryScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: SyntheticsCanarySchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // start_canary_after_creation - computed: true, optional: true, required: false
  private _startCanaryAfterCreation?: boolean | cdktn.IResolvable;
  public get startCanaryAfterCreation() {
    return this.getBooleanAttribute('start_canary_after_creation');
  }
  public set startCanaryAfterCreation(value: boolean | cdktn.IResolvable) {
    this._startCanaryAfterCreation = value;
  }
  public resetStartCanaryAfterCreation() {
    this._startCanaryAfterCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startCanaryAfterCreationInput() {
    return this._startCanaryAfterCreation;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // success_retention_period - computed: true, optional: true, required: false
  private _successRetentionPeriod?: number;
  public get successRetentionPeriod() {
    return this.getNumberAttribute('success_retention_period');
  }
  public set successRetentionPeriod(value: number) {
    this._successRetentionPeriod = value;
  }
  public resetSuccessRetentionPeriod() {
    this._successRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successRetentionPeriodInput() {
    return this._successRetentionPeriod;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SyntheticsCanaryTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SyntheticsCanaryTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // visual_reference - computed: true, optional: true, required: false
  private _visualReference = new SyntheticsCanaryVisualReferenceOutputReference(this, "visual_reference");
  public get visualReference() {
    return this._visualReference;
  }
  public putVisualReference(value: SyntheticsCanaryVisualReference) {
    this._visualReference.internalValue = value;
  }
  public resetVisualReference() {
    this._visualReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualReferenceInput() {
    return this._visualReference.internalValue;
  }

  // visual_references - computed: true, optional: true, required: false
  private _visualReferences = new SyntheticsCanaryVisualReferencesList(this, "visual_references", false);
  public get visualReferences() {
    return this._visualReferences;
  }
  public putVisualReferences(value: SyntheticsCanaryVisualReferences[] | cdktn.IResolvable) {
    this._visualReferences.internalValue = value;
  }
  public resetVisualReferences() {
    this._visualReferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualReferencesInput() {
    return this._visualReferences.internalValue;
  }

  // vpc_config - computed: true, optional: true, required: false
  private _vpcConfig = new SyntheticsCanaryVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: SyntheticsCanaryVpcConfig) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      artifact_config: syntheticsCanaryArtifactConfigToTerraform(this._artifactConfig.internalValue),
      artifact_s3_location: cdktn.stringToTerraform(this._artifactS3Location),
      browser_configs: cdktn.listMapper(syntheticsCanaryBrowserConfigsToTerraform, false)(this._browserConfigs.internalValue),
      code: syntheticsCanaryCodeToTerraform(this._code.internalValue),
      delete_lambda_resources_on_canary_deletion: cdktn.booleanToTerraform(this._deleteLambdaResourcesOnCanaryDeletion),
      dry_run_and_update: cdktn.booleanToTerraform(this._dryRunAndUpdate),
      execution_role_arn: cdktn.stringToTerraform(this._executionRoleArn),
      failure_retention_period: cdktn.numberToTerraform(this._failureRetentionPeriod),
      name: cdktn.stringToTerraform(this._name),
      provisioned_resource_cleanup: cdktn.stringToTerraform(this._provisionedResourceCleanup),
      resources_to_replicate_tags: cdktn.listMapper(cdktn.stringToTerraform, false)(this._resourcesToReplicateTags),
      run_config: syntheticsCanaryRunConfigToTerraform(this._runConfig.internalValue),
      runtime_version: cdktn.stringToTerraform(this._runtimeVersion),
      schedule: syntheticsCanaryScheduleToTerraform(this._schedule.internalValue),
      start_canary_after_creation: cdktn.booleanToTerraform(this._startCanaryAfterCreation),
      success_retention_period: cdktn.numberToTerraform(this._successRetentionPeriod),
      tags: cdktn.listMapper(syntheticsCanaryTagsToTerraform, false)(this._tags.internalValue),
      visual_reference: syntheticsCanaryVisualReferenceToTerraform(this._visualReference.internalValue),
      visual_references: cdktn.listMapper(syntheticsCanaryVisualReferencesToTerraform, false)(this._visualReferences.internalValue),
      vpc_config: syntheticsCanaryVpcConfigToTerraform(this._vpcConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      artifact_config: {
        value: syntheticsCanaryArtifactConfigToHclTerraform(this._artifactConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SyntheticsCanaryArtifactConfig",
      },
      artifact_s3_location: {
        value: cdktn.stringToHclTerraform(this._artifactS3Location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      browser_configs: {
        value: cdktn.listMapperHcl(syntheticsCanaryBrowserConfigsToHclTerraform, false)(this._browserConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SyntheticsCanaryBrowserConfigsList",
      },
      code: {
        value: syntheticsCanaryCodeToHclTerraform(this._code.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SyntheticsCanaryCode",
      },
      delete_lambda_resources_on_canary_deletion: {
        value: cdktn.booleanToHclTerraform(this._deleteLambdaResourcesOnCanaryDeletion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dry_run_and_update: {
        value: cdktn.booleanToHclTerraform(this._dryRunAndUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      execution_role_arn: {
        value: cdktn.stringToHclTerraform(this._executionRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failure_retention_period: {
        value: cdktn.numberToHclTerraform(this._failureRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioned_resource_cleanup: {
        value: cdktn.stringToHclTerraform(this._provisionedResourceCleanup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resources_to_replicate_tags: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._resourcesToReplicateTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      run_config: {
        value: syntheticsCanaryRunConfigToHclTerraform(this._runConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SyntheticsCanaryRunConfig",
      },
      runtime_version: {
        value: cdktn.stringToHclTerraform(this._runtimeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: syntheticsCanaryScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SyntheticsCanarySchedule",
      },
      start_canary_after_creation: {
        value: cdktn.booleanToHclTerraform(this._startCanaryAfterCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      success_retention_period: {
        value: cdktn.numberToHclTerraform(this._successRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktn.listMapperHcl(syntheticsCanaryTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SyntheticsCanaryTagsList",
      },
      visual_reference: {
        value: syntheticsCanaryVisualReferenceToHclTerraform(this._visualReference.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SyntheticsCanaryVisualReference",
      },
      visual_references: {
        value: cdktn.listMapperHcl(syntheticsCanaryVisualReferencesToHclTerraform, false)(this._visualReferences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SyntheticsCanaryVisualReferencesList",
      },
      vpc_config: {
        value: syntheticsCanaryVpcConfigToHclTerraform(this._vpcConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SyntheticsCanaryVpcConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
