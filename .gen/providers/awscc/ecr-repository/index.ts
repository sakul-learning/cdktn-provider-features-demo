// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EcrRepositoryConfig extends cdktn.TerraformMetaArguments {
  /**
  * If true, deleting the repository force deletes the contents of the repository. If false, the repository must be empty before attempting to delete it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_repository#empty_on_delete EcrRepository#empty_on_delete}
  */
  readonly emptyOnDelete?: boolean | cdktn.IResolvable;
  /**
  * The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_repository#encryption_configuration EcrRepository#encryption_configuration}
  */
  readonly encryptionConfiguration?: EcrRepositoryEncryptionConfiguration;
  /**
  * The ``imageScanningConfiguration`` parameter is being deprecated, in favor of specifying the image scanning configuration at the registry level. For more information, see ``PutRegistryScanningConfiguration``.
  *   The image scanning configuration for the repository. This determines whether images are scanned for known vulnerabilities after being pushed to the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_repository#image_scanning_configuration EcrRepository#image_scanning_configuration}
  */
  readonly imageScanningConfiguration?: EcrRepositoryImageScanningConfiguration;
  /**
  * The tag mutability setting for the repository. If this parameter is omitted, the default setting of ``MUTABLE`` will be used which will allow image tags to be overwritten. If ``IMMUTABLE`` is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_repository#image_tag_mutability EcrRepository#image_tag_mutability}
  */
  readonly imageTagMutability?: string;
  /**
  * A list of filters that specify which image tags are excluded from the repository's image tag mutability setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_repository#image_tag_mutability_exclusion_filters EcrRepository#image_tag_mutability_exclusion_filters}
  */
  readonly imageTagMutabilityExclusionFilters?: EcrRepositoryImageTagMutabilityExclusionFilters[] | cdktn.IResolvable;
  /**
  * Creates or updates a lifecycle policy. For information about lifecycle policy syntax, see [Lifecycle policy template](https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_repository#lifecycle_policy EcrRepository#lifecycle_policy}
  */
  readonly lifecyclePolicy?: EcrRepositoryLifecyclePolicy;
  /**
  * The name to use for the repository. The repository name may be specified on its own (such as ``nginx-web-app``) or it can be prepended with a namespace to group the repository into a category (such as ``project-a/nginx-web-app``). If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the repository name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
  *  The repository name must start with a letter and can only contain lowercase letters, numbers, hyphens, underscores, and forward slashes.
  *   If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_repository#repository_name EcrRepository#repository_name}
  */
  readonly repositoryName?: string;
  /**
  * The JSON repository policy text to apply to the repository. For more information, see [Amazon ECR repository policies](https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policy-examples.html) in the *Amazon Elastic Container Registry User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_repository#repository_policy_text EcrRepository#repository_policy_text}
  */
  readonly repositoryPolicyText?: string;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_repository#tags EcrRepository#tags}
  */
  readonly tags?: EcrRepositoryTags[] | cdktn.IResolvable;
}
export interface EcrRepositoryEncryptionConfiguration {
  /**
  * The encryption type to use.
  *  If you use the ``KMS`` encryption type, the contents of the repository will be encrypted using server-side encryption with KMSlong key stored in KMS. When you use KMS to encrypt your data, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you already created.
  *  If you use the ``KMS_DSSE`` encryption type, the contents of the repository will be encrypted with two layers of encryption using server-side encryption with the KMS Management Service key stored in KMS. Similar to the ``KMS`` encryption type, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you've already created. 
  *  If you use the ``AES256`` encryption type, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts the images in the repository using an AES256 encryption algorithm.
  *  For more information, see [Amazon ECR encryption at rest](https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html) in the *Amazon Elastic Container Registry User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_repository#encryption_type EcrRepository#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * If you use the ``KMS`` encryption type, specify the KMS key to use for encryption. The alias, key ID, or full ARN of the KMS key can be specified. The key must exist in the same Region as the repository. If no key is specified, the default AWS managed KMS key for Amazon ECR will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_repository#kms_key EcrRepository#kms_key}
  */
  readonly kmsKey?: string;
}

export function ecrRepositoryEncryptionConfigurationToTerraform(struct?: EcrRepositoryEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_type: cdktn.stringToTerraform(struct!.encryptionType),
    kms_key: cdktn.stringToTerraform(struct!.kmsKey),
  }
}


export function ecrRepositoryEncryptionConfigurationToHclTerraform(struct?: EcrRepositoryEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_type: {
      value: cdktn.stringToHclTerraform(struct!.encryptionType),
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

export class EcrRepositoryEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcrRepositoryEncryptionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcrRepositoryEncryptionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionType = undefined;
      this._kmsKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionType = value.encryptionType;
      this._kmsKey = value.kmsKey;
    }
  }

  // encryption_type - computed: true, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
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
export interface EcrRepositoryImageScanningConfiguration {
  /**
  * The setting that determines whether images are scanned after being pushed to a repository. If set to ``true``, images will be scanned after being pushed. If this parameter is not specified, it will default to ``false`` and images will not be scanned unless a scan is manually started.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_repository#scan_on_push EcrRepository#scan_on_push}
  */
  readonly scanOnPush?: boolean | cdktn.IResolvable;
}

export function ecrRepositoryImageScanningConfigurationToTerraform(struct?: EcrRepositoryImageScanningConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    scan_on_push: cdktn.booleanToTerraform(struct!.scanOnPush),
  }
}


export function ecrRepositoryImageScanningConfigurationToHclTerraform(struct?: EcrRepositoryImageScanningConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    scan_on_push: {
      value: cdktn.booleanToHclTerraform(struct!.scanOnPush),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcrRepositoryImageScanningConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcrRepositoryImageScanningConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scanOnPush !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanOnPush = this._scanOnPush;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcrRepositoryImageScanningConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scanOnPush = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scanOnPush = value.scanOnPush;
    }
  }

  // scan_on_push - computed: true, optional: true, required: false
  private _scanOnPush?: boolean | cdktn.IResolvable; 
  public get scanOnPush() {
    return this.getBooleanAttribute('scan_on_push');
  }
  public set scanOnPush(value: boolean | cdktn.IResolvable) {
    this._scanOnPush = value;
  }
  public resetScanOnPush() {
    this._scanOnPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanOnPushInput() {
    return this._scanOnPush;
  }
}
export interface EcrRepositoryImageTagMutabilityExclusionFilters {
  /**
  * Specifies the type of filter to use for excluding image tags from the repository's mutability setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_repository#image_tag_mutability_exclusion_filter_type EcrRepository#image_tag_mutability_exclusion_filter_type}
  */
  readonly imageTagMutabilityExclusionFilterType?: string;
  /**
  * The value to use when filtering image tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_repository#image_tag_mutability_exclusion_filter_value EcrRepository#image_tag_mutability_exclusion_filter_value}
  */
  readonly imageTagMutabilityExclusionFilterValue?: string;
}

export function ecrRepositoryImageTagMutabilityExclusionFiltersToTerraform(struct?: EcrRepositoryImageTagMutabilityExclusionFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    image_tag_mutability_exclusion_filter_type: cdktn.stringToTerraform(struct!.imageTagMutabilityExclusionFilterType),
    image_tag_mutability_exclusion_filter_value: cdktn.stringToTerraform(struct!.imageTagMutabilityExclusionFilterValue),
  }
}


export function ecrRepositoryImageTagMutabilityExclusionFiltersToHclTerraform(struct?: EcrRepositoryImageTagMutabilityExclusionFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    image_tag_mutability_exclusion_filter_type: {
      value: cdktn.stringToHclTerraform(struct!.imageTagMutabilityExclusionFilterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_tag_mutability_exclusion_filter_value: {
      value: cdktn.stringToHclTerraform(struct!.imageTagMutabilityExclusionFilterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EcrRepositoryImageTagMutabilityExclusionFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageTagMutabilityExclusionFilterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageTagMutabilityExclusionFilterType = this._imageTagMutabilityExclusionFilterType;
    }
    if (this._imageTagMutabilityExclusionFilterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageTagMutabilityExclusionFilterValue = this._imageTagMutabilityExclusionFilterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcrRepositoryImageTagMutabilityExclusionFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageTagMutabilityExclusionFilterType = undefined;
      this._imageTagMutabilityExclusionFilterValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageTagMutabilityExclusionFilterType = value.imageTagMutabilityExclusionFilterType;
      this._imageTagMutabilityExclusionFilterValue = value.imageTagMutabilityExclusionFilterValue;
    }
  }

  // image_tag_mutability_exclusion_filter_type - computed: true, optional: true, required: false
  private _imageTagMutabilityExclusionFilterType?: string; 
  public get imageTagMutabilityExclusionFilterType() {
    return this.getStringAttribute('image_tag_mutability_exclusion_filter_type');
  }
  public set imageTagMutabilityExclusionFilterType(value: string) {
    this._imageTagMutabilityExclusionFilterType = value;
  }
  public resetImageTagMutabilityExclusionFilterType() {
    this._imageTagMutabilityExclusionFilterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTagMutabilityExclusionFilterTypeInput() {
    return this._imageTagMutabilityExclusionFilterType;
  }

  // image_tag_mutability_exclusion_filter_value - computed: true, optional: true, required: false
  private _imageTagMutabilityExclusionFilterValue?: string; 
  public get imageTagMutabilityExclusionFilterValue() {
    return this.getStringAttribute('image_tag_mutability_exclusion_filter_value');
  }
  public set imageTagMutabilityExclusionFilterValue(value: string) {
    this._imageTagMutabilityExclusionFilterValue = value;
  }
  public resetImageTagMutabilityExclusionFilterValue() {
    this._imageTagMutabilityExclusionFilterValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTagMutabilityExclusionFilterValueInput() {
    return this._imageTagMutabilityExclusionFilterValue;
  }
}

export class EcrRepositoryImageTagMutabilityExclusionFiltersList extends cdktn.ComplexList {
  public internalValue? : EcrRepositoryImageTagMutabilityExclusionFilters[] | cdktn.IResolvable

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
  public get(index: number): EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference {
    return new EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcrRepositoryLifecyclePolicy {
  /**
  * The JSON repository policy text to apply to the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_repository#lifecycle_policy_text EcrRepository#lifecycle_policy_text}
  */
  readonly lifecyclePolicyText?: string;
  /**
  * The AWS account ID associated with the registry that contains the repository. If you do? not specify a registry, the default registry is assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_repository#registry_id EcrRepository#registry_id}
  */
  readonly registryId?: string;
}

export function ecrRepositoryLifecyclePolicyToTerraform(struct?: EcrRepositoryLifecyclePolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lifecycle_policy_text: cdktn.stringToTerraform(struct!.lifecyclePolicyText),
    registry_id: cdktn.stringToTerraform(struct!.registryId),
  }
}


export function ecrRepositoryLifecyclePolicyToHclTerraform(struct?: EcrRepositoryLifecyclePolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lifecycle_policy_text: {
      value: cdktn.stringToHclTerraform(struct!.lifecyclePolicyText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_id: {
      value: cdktn.stringToHclTerraform(struct!.registryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcrRepositoryLifecyclePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcrRepositoryLifecyclePolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifecyclePolicyText !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecyclePolicyText = this._lifecyclePolicyText;
    }
    if (this._registryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryId = this._registryId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcrRepositoryLifecyclePolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lifecyclePolicyText = undefined;
      this._registryId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lifecyclePolicyText = value.lifecyclePolicyText;
      this._registryId = value.registryId;
    }
  }

  // lifecycle_policy_text - computed: true, optional: true, required: false
  private _lifecyclePolicyText?: string; 
  public get lifecyclePolicyText() {
    return this.getStringAttribute('lifecycle_policy_text');
  }
  public set lifecyclePolicyText(value: string) {
    this._lifecyclePolicyText = value;
  }
  public resetLifecyclePolicyText() {
    this._lifecyclePolicyText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecyclePolicyTextInput() {
    return this._lifecyclePolicyText;
  }

  // registry_id - computed: true, optional: true, required: false
  private _registryId?: string; 
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }
  public set registryId(value: string) {
    this._registryId = value;
  }
  public resetRegistryId() {
    this._registryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryIdInput() {
    return this._registryId;
  }
}
export interface EcrRepositoryTags {
  /**
  * One part of a key-value pair that make up a tag. A ``key`` is a general label that acts like a category for more specific tag values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_repository#key EcrRepository#key}
  */
  readonly key?: string;
  /**
  * A ``value`` acts as a descriptor within a tag category (key).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_repository#value EcrRepository#value}
  */
  readonly value?: string;
}

export function ecrRepositoryTagsToTerraform(struct?: EcrRepositoryTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ecrRepositoryTagsToHclTerraform(struct?: EcrRepositoryTags | cdktn.IResolvable): any {
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

export class EcrRepositoryTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EcrRepositoryTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: EcrRepositoryTags | cdktn.IResolvable | undefined) {
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

export class EcrRepositoryTagsList extends cdktn.ComplexList {
  public internalValue? : EcrRepositoryTags[] | cdktn.IResolvable

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
  public get(index: number): EcrRepositoryTagsOutputReference {
    return new EcrRepositoryTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_repository awscc_ecr_repository}
*/
export class EcrRepository extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ecr_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a EcrRepository resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcrRepository to import
  * @param importFromId The id of the existing EcrRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcrRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecr_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_repository awscc_ecr_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcrRepositoryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EcrRepositoryConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_ecr_repository',
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
    this._emptyOnDelete = config.emptyOnDelete;
    this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
    this._imageScanningConfiguration.internalValue = config.imageScanningConfiguration;
    this._imageTagMutability = config.imageTagMutability;
    this._imageTagMutabilityExclusionFilters.internalValue = config.imageTagMutabilityExclusionFilters;
    this._lifecyclePolicy.internalValue = config.lifecyclePolicy;
    this._repositoryName = config.repositoryName;
    this._repositoryPolicyText = config.repositoryPolicyText;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // empty_on_delete - computed: true, optional: true, required: false
  private _emptyOnDelete?: boolean | cdktn.IResolvable; 
  public get emptyOnDelete() {
    return this.getBooleanAttribute('empty_on_delete');
  }
  public set emptyOnDelete(value: boolean | cdktn.IResolvable) {
    this._emptyOnDelete = value;
  }
  public resetEmptyOnDelete() {
    this._emptyOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyOnDeleteInput() {
    return this._emptyOnDelete;
  }

  // encryption_configuration - computed: true, optional: true, required: false
  private _encryptionConfiguration = new EcrRepositoryEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: EcrRepositoryEncryptionConfiguration) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_scanning_configuration - computed: true, optional: true, required: false
  private _imageScanningConfiguration = new EcrRepositoryImageScanningConfigurationOutputReference(this, "image_scanning_configuration");
  public get imageScanningConfiguration() {
    return this._imageScanningConfiguration;
  }
  public putImageScanningConfiguration(value: EcrRepositoryImageScanningConfiguration) {
    this._imageScanningConfiguration.internalValue = value;
  }
  public resetImageScanningConfiguration() {
    this._imageScanningConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageScanningConfigurationInput() {
    return this._imageScanningConfiguration.internalValue;
  }

  // image_tag_mutability - computed: true, optional: true, required: false
  private _imageTagMutability?: string; 
  public get imageTagMutability() {
    return this.getStringAttribute('image_tag_mutability');
  }
  public set imageTagMutability(value: string) {
    this._imageTagMutability = value;
  }
  public resetImageTagMutability() {
    this._imageTagMutability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTagMutabilityInput() {
    return this._imageTagMutability;
  }

  // image_tag_mutability_exclusion_filters - computed: true, optional: true, required: false
  private _imageTagMutabilityExclusionFilters = new EcrRepositoryImageTagMutabilityExclusionFiltersList(this, "image_tag_mutability_exclusion_filters", false);
  public get imageTagMutabilityExclusionFilters() {
    return this._imageTagMutabilityExclusionFilters;
  }
  public putImageTagMutabilityExclusionFilters(value: EcrRepositoryImageTagMutabilityExclusionFilters[] | cdktn.IResolvable) {
    this._imageTagMutabilityExclusionFilters.internalValue = value;
  }
  public resetImageTagMutabilityExclusionFilters() {
    this._imageTagMutabilityExclusionFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTagMutabilityExclusionFiltersInput() {
    return this._imageTagMutabilityExclusionFilters.internalValue;
  }

  // lifecycle_policy - computed: true, optional: true, required: false
  private _lifecyclePolicy = new EcrRepositoryLifecyclePolicyOutputReference(this, "lifecycle_policy");
  public get lifecyclePolicy() {
    return this._lifecyclePolicy;
  }
  public putLifecyclePolicy(value: EcrRepositoryLifecyclePolicy) {
    this._lifecyclePolicy.internalValue = value;
  }
  public resetLifecyclePolicy() {
    this._lifecyclePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecyclePolicyInput() {
    return this._lifecyclePolicy.internalValue;
  }

  // repository_name - computed: true, optional: true, required: false
  private _repositoryName?: string; 
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  public resetRepositoryName() {
    this._repositoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName;
  }

  // repository_policy_text - computed: true, optional: true, required: false
  private _repositoryPolicyText?: string; 
  public get repositoryPolicyText() {
    return this.getStringAttribute('repository_policy_text');
  }
  public set repositoryPolicyText(value: string) {
    this._repositoryPolicyText = value;
  }
  public resetRepositoryPolicyText() {
    this._repositoryPolicyText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryPolicyTextInput() {
    return this._repositoryPolicyText;
  }

  // repository_uri - computed: true, optional: false, required: false
  public get repositoryUri() {
    return this.getStringAttribute('repository_uri');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new EcrRepositoryTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: EcrRepositoryTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      empty_on_delete: cdktn.booleanToTerraform(this._emptyOnDelete),
      encryption_configuration: ecrRepositoryEncryptionConfigurationToTerraform(this._encryptionConfiguration.internalValue),
      image_scanning_configuration: ecrRepositoryImageScanningConfigurationToTerraform(this._imageScanningConfiguration.internalValue),
      image_tag_mutability: cdktn.stringToTerraform(this._imageTagMutability),
      image_tag_mutability_exclusion_filters: cdktn.listMapper(ecrRepositoryImageTagMutabilityExclusionFiltersToTerraform, false)(this._imageTagMutabilityExclusionFilters.internalValue),
      lifecycle_policy: ecrRepositoryLifecyclePolicyToTerraform(this._lifecyclePolicy.internalValue),
      repository_name: cdktn.stringToTerraform(this._repositoryName),
      repository_policy_text: cdktn.stringToTerraform(this._repositoryPolicyText),
      tags: cdktn.listMapper(ecrRepositoryTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      empty_on_delete: {
        value: cdktn.booleanToHclTerraform(this._emptyOnDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption_configuration: {
        value: ecrRepositoryEncryptionConfigurationToHclTerraform(this._encryptionConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EcrRepositoryEncryptionConfiguration",
      },
      image_scanning_configuration: {
        value: ecrRepositoryImageScanningConfigurationToHclTerraform(this._imageScanningConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EcrRepositoryImageScanningConfiguration",
      },
      image_tag_mutability: {
        value: cdktn.stringToHclTerraform(this._imageTagMutability),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_tag_mutability_exclusion_filters: {
        value: cdktn.listMapperHcl(ecrRepositoryImageTagMutabilityExclusionFiltersToHclTerraform, false)(this._imageTagMutabilityExclusionFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcrRepositoryImageTagMutabilityExclusionFiltersList",
      },
      lifecycle_policy: {
        value: ecrRepositoryLifecyclePolicyToHclTerraform(this._lifecyclePolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EcrRepositoryLifecyclePolicy",
      },
      repository_name: {
        value: cdktn.stringToHclTerraform(this._repositoryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_policy_text: {
        value: cdktn.stringToHclTerraform(this._repositoryPolicyText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(ecrRepositoryTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EcrRepositoryTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
