// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface S3ExpressDirectoryBucketConfig extends cdktn.TerraformMetaArguments {
  /**
  * Specifies default encryption for a bucket using server-side encryption with Amazon S3 managed keys (SSE-S3) or AWS KMS keys (SSE-KMS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#bucket_encryption S3ExpressDirectoryBucket#bucket_encryption}
  */
  readonly bucketEncryption?: S3ExpressDirectoryBucketBucketEncryption;
  /**
  * Specifies a name for the bucket. The bucket name must contain only lowercase letters, numbers, and hyphens (-). A directory bucket name must be unique in the chosen Availability Zone or Local Zone. The bucket name must also follow the format 'bucket_base_name--zone_id--x-s3'. The zone_id can be the ID of an Availability Zone or a Local Zone. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#bucket_name S3ExpressDirectoryBucket#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Specifies the number of Availability Zone or Local Zone that's used for redundancy for the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#data_redundancy S3ExpressDirectoryBucket#data_redundancy}
  */
  readonly dataRedundancy: string;
  /**
  * The inventory configuration for an Amazon S3 Express bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#inventory_configurations S3ExpressDirectoryBucket#inventory_configurations}
  */
  readonly inventoryConfigurations?: S3ExpressDirectoryBucketInventoryConfigurations[] | cdktn.IResolvable;
  /**
  * Lifecycle rules that define how Amazon S3 Express manages objects during their lifetime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#lifecycle_configuration S3ExpressDirectoryBucket#lifecycle_configuration}
  */
  readonly lifecycleConfiguration?: S3ExpressDirectoryBucketLifecycleConfiguration;
  /**
  * Specifies the Zone ID of the Availability Zone or Local Zone where the directory bucket will be created. An example Availability Zone ID value is 'use1-az5'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#location_name S3ExpressDirectoryBucket#location_name}
  */
  readonly locationName: string;
  /**
  * Specifies the metrics configurations for the Amazon S3 Express bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#metrics_configurations S3ExpressDirectoryBucket#metrics_configurations}
  */
  readonly metricsConfigurations?: S3ExpressDirectoryBucketMetricsConfigurations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#tags S3ExpressDirectoryBucket#tags}
  */
  readonly tags?: S3ExpressDirectoryBucketTags[] | cdktn.IResolvable;
}
export interface S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault {
  /**
  * AWS Key Management Service (KMS) customer managed key ID to use for the default encryption. This parameter is allowed only if SSEAlgorithm is set to aws:kms. You can specify this parameter with the key ID or the Amazon Resource Name (ARN) of the KMS key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#kms_master_key_id S3ExpressDirectoryBucket#kms_master_key_id}
  */
  readonly kmsMasterKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#sse_algorithm S3ExpressDirectoryBucket#sse_algorithm}
  */
  readonly sseAlgorithm?: string;
}

export function s3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultToTerraform(struct?: S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_master_key_id: cdktn.stringToTerraform(struct!.kmsMasterKeyId),
    sse_algorithm: cdktn.stringToTerraform(struct!.sseAlgorithm),
  }
}


export function s3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultToHclTerraform(struct?: S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_master_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsMasterKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sse_algorithm: {
      value: cdktn.stringToHclTerraform(struct!.sseAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsMasterKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsMasterKeyId = this._kmsMasterKeyId;
    }
    if (this._sseAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseAlgorithm = this._sseAlgorithm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsMasterKeyId = undefined;
      this._sseAlgorithm = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsMasterKeyId = value.kmsMasterKeyId;
      this._sseAlgorithm = value.sseAlgorithm;
    }
  }

  // kms_master_key_id - computed: true, optional: true, required: false
  private _kmsMasterKeyId?: string;
  public get kmsMasterKeyId() {
    return this.getStringAttribute('kms_master_key_id');
  }
  public set kmsMasterKeyId(value: string) {
    this._kmsMasterKeyId = value;
  }
  public resetKmsMasterKeyId() {
    this._kmsMasterKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsMasterKeyIdInput() {
    return this._kmsMasterKeyId;
  }

  // sse_algorithm - computed: true, optional: true, required: false
  private _sseAlgorithm?: string;
  public get sseAlgorithm() {
    return this.getStringAttribute('sse_algorithm');
  }
  public set sseAlgorithm(value: string) {
    this._sseAlgorithm = value;
  }
  public resetSseAlgorithm() {
    this._sseAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseAlgorithmInput() {
    return this._sseAlgorithm;
  }
}
export interface S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration {
  /**
  * Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket. Existing objects are not affected. Amazon S3 Express One Zone uses an S3 Bucket Key with SSE-KMS and S3 Bucket Key cannot be disabled. It's only allowed to set the BucketKeyEnabled element to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#bucket_key_enabled S3ExpressDirectoryBucket#bucket_key_enabled}
  */
  readonly bucketKeyEnabled?: boolean | cdktn.IResolvable;
  /**
  * Specifies the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#server_side_encryption_by_default S3ExpressDirectoryBucket#server_side_encryption_by_default}
  */
  readonly serverSideEncryptionByDefault?: S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault;
}

export function s3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationToTerraform(struct?: S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_key_enabled: cdktn.booleanToTerraform(struct!.bucketKeyEnabled),
    server_side_encryption_by_default: s3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultToTerraform(struct!.serverSideEncryptionByDefault),
  }
}


export function s3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationToHclTerraform(struct?: S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_key_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.bucketKeyEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_side_encryption_by_default: {
      value: s3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultToHclTerraform(struct!.serverSideEncryptionByDefault),
      isBlock: true,
      type: "struct",
      storageClassType: "S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketKeyEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketKeyEnabled = this._bucketKeyEnabled;
    }
    if (this._serverSideEncryptionByDefault?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSideEncryptionByDefault = this._serverSideEncryptionByDefault?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketKeyEnabled = undefined;
      this._serverSideEncryptionByDefault.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketKeyEnabled = value.bucketKeyEnabled;
      this._serverSideEncryptionByDefault.internalValue = value.serverSideEncryptionByDefault;
    }
  }

  // bucket_key_enabled - computed: true, optional: true, required: false
  private _bucketKeyEnabled?: boolean | cdktn.IResolvable;
  public get bucketKeyEnabled() {
    return this.getBooleanAttribute('bucket_key_enabled');
  }
  public set bucketKeyEnabled(value: boolean | cdktn.IResolvable) {
    this._bucketKeyEnabled = value;
  }
  public resetBucketKeyEnabled() {
    this._bucketKeyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketKeyEnabledInput() {
    return this._bucketKeyEnabled;
  }

  // server_side_encryption_by_default - computed: true, optional: true, required: false
  private _serverSideEncryptionByDefault = new S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference(this, "server_side_encryption_by_default");
  public get serverSideEncryptionByDefault() {
    return this._serverSideEncryptionByDefault;
  }
  public putServerSideEncryptionByDefault(value: S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault) {
    this._serverSideEncryptionByDefault.internalValue = value;
  }
  public resetServerSideEncryptionByDefault() {
    this._serverSideEncryptionByDefault.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionByDefaultInput() {
    return this._serverSideEncryptionByDefault.internalValue;
  }
}

export class S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList extends cdktn.ComplexList {
  public internalValue? : S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration[] | cdktn.IResolvable

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
  public get(index: number): S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference {
    return new S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3ExpressDirectoryBucketBucketEncryption {
  /**
  * Specifies the default server-side-encryption configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#server_side_encryption_configuration S3ExpressDirectoryBucket#server_side_encryption_configuration}
  */
  readonly serverSideEncryptionConfiguration?: S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration[] | cdktn.IResolvable;
}

export function s3ExpressDirectoryBucketBucketEncryptionToTerraform(struct?: S3ExpressDirectoryBucketBucketEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    server_side_encryption_configuration: cdktn.listMapper(s3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationToTerraform, false)(struct!.serverSideEncryptionConfiguration),
  }
}


export function s3ExpressDirectoryBucketBucketEncryptionToHclTerraform(struct?: S3ExpressDirectoryBucketBucketEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    server_side_encryption_configuration: {
      value: cdktn.listMapperHcl(s3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationToHclTerraform, false)(struct!.serverSideEncryptionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3ExpressDirectoryBucketBucketEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3ExpressDirectoryBucketBucketEncryption | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverSideEncryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSideEncryptionConfiguration = this._serverSideEncryptionConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ExpressDirectoryBucketBucketEncryption | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serverSideEncryptionConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serverSideEncryptionConfiguration.internalValue = value.serverSideEncryptionConfiguration;
    }
  }

  // server_side_encryption_configuration - computed: true, optional: true, required: false
  private _serverSideEncryptionConfiguration = new S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList(this, "server_side_encryption_configuration", false);
  public get serverSideEncryptionConfiguration() {
    return this._serverSideEncryptionConfiguration;
  }
  public putServerSideEncryptionConfiguration(value: S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration[] | cdktn.IResolvable) {
    this._serverSideEncryptionConfiguration.internalValue = value;
  }
  public resetServerSideEncryptionConfiguration() {
    this._serverSideEncryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionConfigurationInput() {
    return this._serverSideEncryptionConfiguration.internalValue;
  }
}
export interface S3ExpressDirectoryBucketInventoryConfigurationsDestination {
  /**
  * The account ID that owns the destination S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#bucket_account_id S3ExpressDirectoryBucket#bucket_account_id}
  */
  readonly bucketAccountId?: string;
  /**
  * The Amazon Resource Name (ARN) of the destination Amazon S3 bucket to which data is exported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#bucket_arn S3ExpressDirectoryBucket#bucket_arn}
  */
  readonly bucketArn?: string;
  /**
  * Specifies the file format used when exporting data to Amazon S3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#format S3ExpressDirectoryBucket#format}
  */
  readonly format?: string;
  /**
  * The prefix to use when exporting data. The prefix is prepended to all results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#prefix S3ExpressDirectoryBucket#prefix}
  */
  readonly prefix?: string;
}

export function s3ExpressDirectoryBucketInventoryConfigurationsDestinationToTerraform(struct?: S3ExpressDirectoryBucketInventoryConfigurationsDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_account_id: cdktn.stringToTerraform(struct!.bucketAccountId),
    bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
    format: cdktn.stringToTerraform(struct!.format),
    prefix: cdktn.stringToTerraform(struct!.prefix),
  }
}


export function s3ExpressDirectoryBucketInventoryConfigurationsDestinationToHclTerraform(struct?: S3ExpressDirectoryBucketInventoryConfigurationsDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_account_id: {
      value: cdktn.stringToHclTerraform(struct!.bucketAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3ExpressDirectoryBucketInventoryConfigurationsDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketAccountId = this._bucketAccountId;
    }
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ExpressDirectoryBucketInventoryConfigurationsDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketAccountId = undefined;
      this._bucketArn = undefined;
      this._format = undefined;
      this._prefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketAccountId = value.bucketAccountId;
      this._bucketArn = value.bucketArn;
      this._format = value.format;
      this._prefix = value.prefix;
    }
  }

  // bucket_account_id - computed: true, optional: true, required: false
  private _bucketAccountId?: string;
  public get bucketAccountId() {
    return this.getStringAttribute('bucket_account_id');
  }
  public set bucketAccountId(value: string) {
    this._bucketAccountId = value;
  }
  public resetBucketAccountId() {
    this._bucketAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketAccountIdInput() {
    return this._bucketAccountId;
  }

  // bucket_arn - computed: true, optional: true, required: false
  private _bucketArn?: string;
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  public resetBucketArn() {
    this._bucketArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }

  // format - computed: true, optional: true, required: false
  private _format?: string;
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string;
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface S3ExpressDirectoryBucketInventoryConfigurations {
  /**
  * Specifies information about where to publish inventory reports for an Amazon S3 Express bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#destination S3ExpressDirectoryBucket#destination}
  */
  readonly destination?: S3ExpressDirectoryBucketInventoryConfigurationsDestination;
  /**
  * Specifies whether the inventory is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#enabled S3ExpressDirectoryBucket#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * The ID used to identify the inventory configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#id S3ExpressDirectoryBucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object versions to include in the inventory list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#included_object_versions S3ExpressDirectoryBucket#included_object_versions}
  */
  readonly includedObjectVersions?: string;
  /**
  * Contains the optional fields that are included in the inventory results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#optional_fields S3ExpressDirectoryBucket#optional_fields}
  */
  readonly optionalFields?: string[];
  /**
  * The prefix that is prepended to all inventory results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#prefix S3ExpressDirectoryBucket#prefix}
  */
  readonly prefix?: string;
  /**
  * Specifies the schedule for generating inventory results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#schedule_frequency S3ExpressDirectoryBucket#schedule_frequency}
  */
  readonly scheduleFrequency?: string;
}

export function s3ExpressDirectoryBucketInventoryConfigurationsToTerraform(struct?: S3ExpressDirectoryBucketInventoryConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: s3ExpressDirectoryBucketInventoryConfigurationsDestinationToTerraform(struct!.destination),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    id: cdktn.stringToTerraform(struct!.id),
    included_object_versions: cdktn.stringToTerraform(struct!.includedObjectVersions),
    optional_fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.optionalFields),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    schedule_frequency: cdktn.stringToTerraform(struct!.scheduleFrequency),
  }
}


export function s3ExpressDirectoryBucketInventoryConfigurationsToHclTerraform(struct?: S3ExpressDirectoryBucketInventoryConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination: {
      value: s3ExpressDirectoryBucketInventoryConfigurationsDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "S3ExpressDirectoryBucketInventoryConfigurationsDestination",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    included_object_versions: {
      value: cdktn.stringToHclTerraform(struct!.includedObjectVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional_fields: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.optionalFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_frequency: {
      value: cdktn.stringToHclTerraform(struct!.scheduleFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3ExpressDirectoryBucketInventoryConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3ExpressDirectoryBucketInventoryConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._includedObjectVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedObjectVersions = this._includedObjectVersions;
    }
    if (this._optionalFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalFields = this._optionalFields;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._scheduleFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleFrequency = this._scheduleFrequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ExpressDirectoryBucketInventoryConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._includedObjectVersions = undefined;
      this._optionalFields = undefined;
      this._prefix = undefined;
      this._scheduleFrequency = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination.internalValue = value.destination;
      this._enabled = value.enabled;
      this._id = value.id;
      this._includedObjectVersions = value.includedObjectVersions;
      this._optionalFields = value.optionalFields;
      this._prefix = value.prefix;
      this._scheduleFrequency = value.scheduleFrequency;
    }
  }

  // destination - computed: true, optional: true, required: false
  private _destination = new S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: S3ExpressDirectoryBucketInventoryConfigurationsDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // included_object_versions - computed: true, optional: true, required: false
  private _includedObjectVersions?: string;
  public get includedObjectVersions() {
    return this.getStringAttribute('included_object_versions');
  }
  public set includedObjectVersions(value: string) {
    this._includedObjectVersions = value;
  }
  public resetIncludedObjectVersions() {
    this._includedObjectVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedObjectVersionsInput() {
    return this._includedObjectVersions;
  }

  // optional_fields - computed: true, optional: true, required: false
  private _optionalFields?: string[];
  public get optionalFields() {
    return this.getListAttribute('optional_fields');
  }
  public set optionalFields(value: string[]) {
    this._optionalFields = value;
  }
  public resetOptionalFields() {
    this._optionalFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalFieldsInput() {
    return this._optionalFields;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string;
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // schedule_frequency - computed: true, optional: true, required: false
  private _scheduleFrequency?: string;
  public get scheduleFrequency() {
    return this.getStringAttribute('schedule_frequency');
  }
  public set scheduleFrequency(value: string) {
    this._scheduleFrequency = value;
  }
  public resetScheduleFrequency() {
    this._scheduleFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleFrequencyInput() {
    return this._scheduleFrequency;
  }
}

export class S3ExpressDirectoryBucketInventoryConfigurationsList extends cdktn.ComplexList {
  public internalValue? : S3ExpressDirectoryBucketInventoryConfigurations[] | cdktn.IResolvable

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
  public get(index: number): S3ExpressDirectoryBucketInventoryConfigurationsOutputReference {
    return new S3ExpressDirectoryBucketInventoryConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload {
  /**
  * Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#days_after_initiation S3ExpressDirectoryBucket#days_after_initiation}
  */
  readonly daysAfterInitiation?: number;
}

export function s3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadToTerraform(struct?: S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    days_after_initiation: cdktn.numberToTerraform(struct!.daysAfterInitiation),
  }
}


export function s3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadToHclTerraform(struct?: S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    days_after_initiation: {
      value: cdktn.numberToHclTerraform(struct!.daysAfterInitiation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysAfterInitiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysAfterInitiation = this._daysAfterInitiation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daysAfterInitiation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daysAfterInitiation = value.daysAfterInitiation;
    }
  }

  // days_after_initiation - computed: true, optional: true, required: false
  private _daysAfterInitiation?: number;
  public get daysAfterInitiation() {
    return this.getNumberAttribute('days_after_initiation');
  }
  public set daysAfterInitiation(value: number) {
    this._daysAfterInitiation = value;
  }
  public resetDaysAfterInitiation() {
    this._daysAfterInitiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysAfterInitiationInput() {
    return this._daysAfterInitiation;
  }
}
export interface S3ExpressDirectoryBucketLifecycleConfigurationRules {
  /**
  * Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#abort_incomplete_multipart_upload S3ExpressDirectoryBucket#abort_incomplete_multipart_upload}
  */
  readonly abortIncompleteMultipartUpload?: S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#expiration_in_days S3ExpressDirectoryBucket#expiration_in_days}
  */
  readonly expirationInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#id S3ExpressDirectoryBucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#object_size_greater_than S3ExpressDirectoryBucket#object_size_greater_than}
  */
  readonly objectSizeGreaterThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#object_size_less_than S3ExpressDirectoryBucket#object_size_less_than}
  */
  readonly objectSizeLessThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#prefix S3ExpressDirectoryBucket#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#status S3ExpressDirectoryBucket#status}
  */
  readonly status?: string;
}

export function s3ExpressDirectoryBucketLifecycleConfigurationRulesToTerraform(struct?: S3ExpressDirectoryBucketLifecycleConfigurationRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    abort_incomplete_multipart_upload: s3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadToTerraform(struct!.abortIncompleteMultipartUpload),
    expiration_in_days: cdktn.numberToTerraform(struct!.expirationInDays),
    id: cdktn.stringToTerraform(struct!.id),
    object_size_greater_than: cdktn.stringToTerraform(struct!.objectSizeGreaterThan),
    object_size_less_than: cdktn.stringToTerraform(struct!.objectSizeLessThan),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function s3ExpressDirectoryBucketLifecycleConfigurationRulesToHclTerraform(struct?: S3ExpressDirectoryBucketLifecycleConfigurationRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    abort_incomplete_multipart_upload: {
      value: s3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadToHclTerraform(struct!.abortIncompleteMultipartUpload),
      isBlock: true,
      type: "struct",
      storageClassType: "S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload",
    },
    expiration_in_days: {
      value: cdktn.numberToHclTerraform(struct!.expirationInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_size_greater_than: {
      value: cdktn.stringToHclTerraform(struct!.objectSizeGreaterThan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_size_less_than: {
      value: cdktn.stringToHclTerraform(struct!.objectSizeLessThan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
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

export class S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3ExpressDirectoryBucketLifecycleConfigurationRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abortIncompleteMultipartUpload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abortIncompleteMultipartUpload = this._abortIncompleteMultipartUpload?.internalValue;
    }
    if (this._expirationInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationInDays = this._expirationInDays;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._objectSizeGreaterThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectSizeGreaterThan = this._objectSizeGreaterThan;
    }
    if (this._objectSizeLessThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectSizeLessThan = this._objectSizeLessThan;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ExpressDirectoryBucketLifecycleConfigurationRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abortIncompleteMultipartUpload.internalValue = undefined;
      this._expirationInDays = undefined;
      this._id = undefined;
      this._objectSizeGreaterThan = undefined;
      this._objectSizeLessThan = undefined;
      this._prefix = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abortIncompleteMultipartUpload.internalValue = value.abortIncompleteMultipartUpload;
      this._expirationInDays = value.expirationInDays;
      this._id = value.id;
      this._objectSizeGreaterThan = value.objectSizeGreaterThan;
      this._objectSizeLessThan = value.objectSizeLessThan;
      this._prefix = value.prefix;
      this._status = value.status;
    }
  }

  // abort_incomplete_multipart_upload - computed: true, optional: true, required: false
  private _abortIncompleteMultipartUpload = new S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference(this, "abort_incomplete_multipart_upload");
  public get abortIncompleteMultipartUpload() {
    return this._abortIncompleteMultipartUpload;
  }
  public putAbortIncompleteMultipartUpload(value: S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload) {
    this._abortIncompleteMultipartUpload.internalValue = value;
  }
  public resetAbortIncompleteMultipartUpload() {
    this._abortIncompleteMultipartUpload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortIncompleteMultipartUploadInput() {
    return this._abortIncompleteMultipartUpload.internalValue;
  }

  // expiration_in_days - computed: true, optional: true, required: false
  private _expirationInDays?: number;
  public get expirationInDays() {
    return this.getNumberAttribute('expiration_in_days');
  }
  public set expirationInDays(value: number) {
    this._expirationInDays = value;
  }
  public resetExpirationInDays() {
    this._expirationInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInDaysInput() {
    return this._expirationInDays;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // object_size_greater_than - computed: true, optional: true, required: false
  private _objectSizeGreaterThan?: string;
  public get objectSizeGreaterThan() {
    return this.getStringAttribute('object_size_greater_than');
  }
  public set objectSizeGreaterThan(value: string) {
    this._objectSizeGreaterThan = value;
  }
  public resetObjectSizeGreaterThan() {
    this._objectSizeGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectSizeGreaterThanInput() {
    return this._objectSizeGreaterThan;
  }

  // object_size_less_than - computed: true, optional: true, required: false
  private _objectSizeLessThan?: string;
  public get objectSizeLessThan() {
    return this.getStringAttribute('object_size_less_than');
  }
  public set objectSizeLessThan(value: string) {
    this._objectSizeLessThan = value;
  }
  public resetObjectSizeLessThan() {
    this._objectSizeLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectSizeLessThanInput() {
    return this._objectSizeLessThan;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string;
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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

export class S3ExpressDirectoryBucketLifecycleConfigurationRulesList extends cdktn.ComplexList {
  public internalValue? : S3ExpressDirectoryBucketLifecycleConfigurationRules[] | cdktn.IResolvable

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
  public get(index: number): S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference {
    return new S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3ExpressDirectoryBucketLifecycleConfiguration {
  /**
  * A lifecycle rule for individual objects in an Amazon S3 Express bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#rules S3ExpressDirectoryBucket#rules}
  */
  readonly rules?: S3ExpressDirectoryBucketLifecycleConfigurationRules[] | cdktn.IResolvable;
}

export function s3ExpressDirectoryBucketLifecycleConfigurationToTerraform(struct?: S3ExpressDirectoryBucketLifecycleConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rules: cdktn.listMapper(s3ExpressDirectoryBucketLifecycleConfigurationRulesToTerraform, false)(struct!.rules),
  }
}


export function s3ExpressDirectoryBucketLifecycleConfigurationToHclTerraform(struct?: S3ExpressDirectoryBucketLifecycleConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rules: {
      value: cdktn.listMapperHcl(s3ExpressDirectoryBucketLifecycleConfigurationRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "S3ExpressDirectoryBucketLifecycleConfigurationRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3ExpressDirectoryBucketLifecycleConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3ExpressDirectoryBucketLifecycleConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ExpressDirectoryBucketLifecycleConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: true, optional: true, required: false
  private _rules = new S3ExpressDirectoryBucketLifecycleConfigurationRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: S3ExpressDirectoryBucketLifecycleConfigurationRules[] | cdktn.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface S3ExpressDirectoryBucketMetricsConfigurations {
  /**
  * The access point ARN used when evaluating a metrics filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#access_point_arn S3ExpressDirectoryBucket#access_point_arn}
  */
  readonly accessPointArn?: string;
  /**
  * The ID used to identify the metrics configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#id S3ExpressDirectoryBucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The prefix used when evaluating a metrics filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#prefix S3ExpressDirectoryBucket#prefix}
  */
  readonly prefix?: string;
}

export function s3ExpressDirectoryBucketMetricsConfigurationsToTerraform(struct?: S3ExpressDirectoryBucketMetricsConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_point_arn: cdktn.stringToTerraform(struct!.accessPointArn),
    id: cdktn.stringToTerraform(struct!.id),
    prefix: cdktn.stringToTerraform(struct!.prefix),
  }
}


export function s3ExpressDirectoryBucketMetricsConfigurationsToHclTerraform(struct?: S3ExpressDirectoryBucketMetricsConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_point_arn: {
      value: cdktn.stringToHclTerraform(struct!.accessPointArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3ExpressDirectoryBucketMetricsConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3ExpressDirectoryBucketMetricsConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessPointArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPointArn = this._accessPointArn;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ExpressDirectoryBucketMetricsConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessPointArn = undefined;
      this._id = undefined;
      this._prefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessPointArn = value.accessPointArn;
      this._id = value.id;
      this._prefix = value.prefix;
    }
  }

  // access_point_arn - computed: true, optional: true, required: false
  private _accessPointArn?: string;
  public get accessPointArn() {
    return this.getStringAttribute('access_point_arn');
  }
  public set accessPointArn(value: string) {
    this._accessPointArn = value;
  }
  public resetAccessPointArn() {
    this._accessPointArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointArnInput() {
    return this._accessPointArn;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string;
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class S3ExpressDirectoryBucketMetricsConfigurationsList extends cdktn.ComplexList {
  public internalValue? : S3ExpressDirectoryBucketMetricsConfigurations[] | cdktn.IResolvable

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
  public get(index: number): S3ExpressDirectoryBucketMetricsConfigurationsOutputReference {
    return new S3ExpressDirectoryBucketMetricsConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3ExpressDirectoryBucketTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#key S3ExpressDirectoryBucket#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#value S3ExpressDirectoryBucket#value}
  */
  readonly value?: string;
}

export function s3ExpressDirectoryBucketTagsToTerraform(struct?: S3ExpressDirectoryBucketTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function s3ExpressDirectoryBucketTagsToHclTerraform(struct?: S3ExpressDirectoryBucketTags | cdktn.IResolvable): any {
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

export class S3ExpressDirectoryBucketTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3ExpressDirectoryBucketTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3ExpressDirectoryBucketTags | cdktn.IResolvable | undefined) {
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

export class S3ExpressDirectoryBucketTagsList extends cdktn.ComplexList {
  public internalValue? : S3ExpressDirectoryBucketTags[] | cdktn.IResolvable

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
  public get(index: number): S3ExpressDirectoryBucketTagsOutputReference {
    return new S3ExpressDirectoryBucketTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket awscc_s3express_directory_bucket}
*/
export class S3ExpressDirectoryBucket extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_s3express_directory_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a S3ExpressDirectoryBucket resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3ExpressDirectoryBucket to import
  * @param importFromId The id of the existing S3ExpressDirectoryBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3ExpressDirectoryBucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3express_directory_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3express_directory_bucket awscc_s3express_directory_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3ExpressDirectoryBucketConfig
  */
  public constructor(scope: Construct, id: string, config: S3ExpressDirectoryBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_s3express_directory_bucket',
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
    this._bucketEncryption.internalValue = config.bucketEncryption;
    this._bucketName = config.bucketName;
    this._dataRedundancy = config.dataRedundancy;
    this._inventoryConfigurations.internalValue = config.inventoryConfigurations;
    this._lifecycleConfiguration.internalValue = config.lifecycleConfiguration;
    this._locationName = config.locationName;
    this._metricsConfigurations.internalValue = config.metricsConfigurations;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zone_name - computed: true, optional: false, required: false
  public get availabilityZoneName() {
    return this.getStringAttribute('availability_zone_name');
  }

  // bucket_encryption - computed: true, optional: true, required: false
  private _bucketEncryption = new S3ExpressDirectoryBucketBucketEncryptionOutputReference(this, "bucket_encryption");
  public get bucketEncryption() {
    return this._bucketEncryption;
  }
  public putBucketEncryption(value: S3ExpressDirectoryBucketBucketEncryption) {
    this._bucketEncryption.internalValue = value;
  }
  public resetBucketEncryption() {
    this._bucketEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketEncryptionInput() {
    return this._bucketEncryption.internalValue;
  }

  // bucket_name - computed: true, optional: true, required: false
  private _bucketName?: string;
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // data_redundancy - computed: false, optional: false, required: true
  private _dataRedundancy?: string;
  public get dataRedundancy() {
    return this.getStringAttribute('data_redundancy');
  }
  public set dataRedundancy(value: string) {
    this._dataRedundancy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRedundancyInput() {
    return this._dataRedundancy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inventory_configurations - computed: true, optional: true, required: false
  private _inventoryConfigurations = new S3ExpressDirectoryBucketInventoryConfigurationsList(this, "inventory_configurations", false);
  public get inventoryConfigurations() {
    return this._inventoryConfigurations;
  }
  public putInventoryConfigurations(value: S3ExpressDirectoryBucketInventoryConfigurations[] | cdktn.IResolvable) {
    this._inventoryConfigurations.internalValue = value;
  }
  public resetInventoryConfigurations() {
    this._inventoryConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryConfigurationsInput() {
    return this._inventoryConfigurations.internalValue;
  }

  // lifecycle_configuration - computed: true, optional: true, required: false
  private _lifecycleConfiguration = new S3ExpressDirectoryBucketLifecycleConfigurationOutputReference(this, "lifecycle_configuration");
  public get lifecycleConfiguration() {
    return this._lifecycleConfiguration;
  }
  public putLifecycleConfiguration(value: S3ExpressDirectoryBucketLifecycleConfiguration) {
    this._lifecycleConfiguration.internalValue = value;
  }
  public resetLifecycleConfiguration() {
    this._lifecycleConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigurationInput() {
    return this._lifecycleConfiguration.internalValue;
  }

  // location_name - computed: false, optional: false, required: true
  private _locationName?: string;
  public get locationName() {
    return this.getStringAttribute('location_name');
  }
  public set locationName(value: string) {
    this._locationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationNameInput() {
    return this._locationName;
  }

  // metrics_configurations - computed: true, optional: true, required: false
  private _metricsConfigurations = new S3ExpressDirectoryBucketMetricsConfigurationsList(this, "metrics_configurations", false);
  public get metricsConfigurations() {
    return this._metricsConfigurations;
  }
  public putMetricsConfigurations(value: S3ExpressDirectoryBucketMetricsConfigurations[] | cdktn.IResolvable) {
    this._metricsConfigurations.internalValue = value;
  }
  public resetMetricsConfigurations() {
    this._metricsConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsConfigurationsInput() {
    return this._metricsConfigurations.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new S3ExpressDirectoryBucketTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: S3ExpressDirectoryBucketTags[] | cdktn.IResolvable) {
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
      bucket_encryption: s3ExpressDirectoryBucketBucketEncryptionToTerraform(this._bucketEncryption.internalValue),
      bucket_name: cdktn.stringToTerraform(this._bucketName),
      data_redundancy: cdktn.stringToTerraform(this._dataRedundancy),
      inventory_configurations: cdktn.listMapper(s3ExpressDirectoryBucketInventoryConfigurationsToTerraform, false)(this._inventoryConfigurations.internalValue),
      lifecycle_configuration: s3ExpressDirectoryBucketLifecycleConfigurationToTerraform(this._lifecycleConfiguration.internalValue),
      location_name: cdktn.stringToTerraform(this._locationName),
      metrics_configurations: cdktn.listMapper(s3ExpressDirectoryBucketMetricsConfigurationsToTerraform, false)(this._metricsConfigurations.internalValue),
      tags: cdktn.listMapper(s3ExpressDirectoryBucketTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket_encryption: {
        value: s3ExpressDirectoryBucketBucketEncryptionToHclTerraform(this._bucketEncryption.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3ExpressDirectoryBucketBucketEncryption",
      },
      bucket_name: {
        value: cdktn.stringToHclTerraform(this._bucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_redundancy: {
        value: cdktn.stringToHclTerraform(this._dataRedundancy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inventory_configurations: {
        value: cdktn.listMapperHcl(s3ExpressDirectoryBucketInventoryConfigurationsToHclTerraform, false)(this._inventoryConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3ExpressDirectoryBucketInventoryConfigurationsList",
      },
      lifecycle_configuration: {
        value: s3ExpressDirectoryBucketLifecycleConfigurationToHclTerraform(this._lifecycleConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3ExpressDirectoryBucketLifecycleConfiguration",
      },
      location_name: {
        value: cdktn.stringToHclTerraform(this._locationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metrics_configurations: {
        value: cdktn.listMapperHcl(s3ExpressDirectoryBucketMetricsConfigurationsToHclTerraform, false)(this._metricsConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3ExpressDirectoryBucketMetricsConfigurationsList",
      },
      tags: {
        value: cdktn.listMapperHcl(s3ExpressDirectoryBucketTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "S3ExpressDirectoryBucketTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
