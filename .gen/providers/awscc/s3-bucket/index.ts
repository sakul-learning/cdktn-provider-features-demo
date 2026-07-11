// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface S3BucketConfig extends cdktn.TerraformMetaArguments {
  /**
  * Configures the transfer acceleration state for an Amazon S3 bucket. For more information, see [Amazon S3 Transfer Acceleration](https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html) in the *Amazon S3 User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#accelerate_configuration S3Bucket#accelerate_configuration}
  */
  readonly accelerateConfiguration?: S3BucketAccelerateConfiguration;
  /**
  * This is a legacy property, and it is not recommended for most use cases. A majority of modern use cases in Amazon S3 no longer require the use of ACLs, and we recommend that you keep ACLs disabled. For more information, see [Controlling object ownership](https://docs.aws.amazon.com//AmazonS3/latest/userguide/about-object-ownership.html) in the *Amazon S3 User Guide*.
  *   A canned access control list (ACL) that grants predefined permissions to the bucket. For more information about canned ACLs, see [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) in the *Amazon S3 User Guide*.
  *   S3 buckets are created with ACLs disabled by default. Therefore, unless you explicitly set the [AWS::S3::OwnershipControls](https://docs.aws.amazon.com//AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-ownershipcontrols.html) property to enable ACLs, your resource will fail to deploy with any value other than Private. Use cases requiring ACLs are uncommon.
  *   The majority of access control configurations can be successfully and more easily achieved with bucket policies. For more information, see [AWS::S3::BucketPolicy](https://docs.aws.amazon.com//AWSCloudFormation/latest/UserGuide/aws-properties-s3-policy.html). For examples of common policy configurations, including S3 Server Access Logs buckets and more, see [Bucket policy examples](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html) in the *Amazon S3 User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#access_control S3Bucket#access_control}
  */
  readonly accessControl?: string;
  /**
  * Specifies the configuration and any analyses for the analytics filter of an Amazon S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#analytics_configurations S3Bucket#analytics_configurations}
  */
  readonly analyticsConfigurations?: S3BucketAnalyticsConfigurations[] | cdktn.IResolvable;
  /**
  * Specifies default encryption for a bucket using server-side encryption with Amazon S3-managed keys (SSE-S3), AWS KMS-managed keys (SSE-KMS), or dual-layer server-side encryption with KMS-managed keys (DSSE-KMS). For information about the Amazon S3 default encryption feature, see [Amazon S3 Default Encryption for S3 Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html) in the *Amazon S3 User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#bucket_encryption S3Bucket#bucket_encryption}
  */
  readonly bucketEncryption?: S3BucketBucketEncryption;
  /**
  * A name for the bucket. If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the bucket name. The bucket name must contain only lowercase letters, numbers, periods (.), and dashes (-) and must follow [Amazon S3 bucket restrictions and limitations](https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html). For more information, see [Rules for naming Amazon S3 buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html) in the *Amazon S3 User Guide*. 
  *   If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you need to replace the resource, specify a new name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#bucket_name S3Bucket#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more information, see [Enabling Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html) in the *Amazon S3 User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#cors_configuration S3Bucket#cors_configuration}
  */
  readonly corsConfiguration?: S3BucketCorsConfiguration;
  /**
  * Defines how Amazon S3 handles Intelligent-Tiering storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#intelligent_tiering_configurations S3Bucket#intelligent_tiering_configurations}
  */
  readonly intelligentTieringConfigurations?: S3BucketIntelligentTieringConfigurations[] | cdktn.IResolvable;
  /**
  * Specifies the inventory configuration for an Amazon S3 bucket. For more information, see [GET Bucket inventory](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketGETInventoryConfig.html) in the *Amazon S3 API Reference*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#inventory_configurations S3Bucket#inventory_configurations}
  */
  readonly inventoryConfigurations?: S3BucketInventoryConfigurations[] | cdktn.IResolvable;
  /**
  * Specifies the lifecycle configuration for objects in an Amazon S3 bucket. For more information, see [Object Lifecycle Management](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html) in the *Amazon S3 User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#lifecycle_configuration S3Bucket#lifecycle_configuration}
  */
  readonly lifecycleConfiguration?: S3BucketLifecycleConfiguration;
  /**
  * Settings that define where logs are stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#logging_configuration S3Bucket#logging_configuration}
  */
  readonly loggingConfiguration?: S3BucketLoggingConfiguration;
  /**
  * The metadata table configuration of an S3 general purpose bucket. For more information, see [Accelerating data discovery with S3 Metadata](https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-overview.html) and [Setting up permissions for configuring metadata tables](https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-permissions.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#metadata_table_configuration S3Bucket#metadata_table_configuration}
  */
  readonly metadataTableConfiguration?: S3BucketMetadataTableConfiguration;
  /**
  * Specifies a metrics configuration for the CloudWatch request metrics (specified by the metrics configuration ID) from an Amazon S3 bucket. If you're updating an existing metrics configuration, note that this is a full replacement of the existing metrics configuration. If you don't include the elements you want to keep, they are erased. For more information, see [PutBucketMetricsConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTMetricConfiguration.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#metrics_configurations S3Bucket#metrics_configurations}
  */
  readonly metricsConfigurations?: S3BucketMetricsConfigurations[] | cdktn.IResolvable;
  /**
  * Configuration that defines how Amazon S3 handles bucket notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#notification_configuration S3Bucket#notification_configuration}
  */
  readonly notificationConfiguration?: S3BucketNotificationConfiguration;
  /**
  * This operation is not supported for directory buckets.
  *   Places an Object Lock configuration on the specified bucket. The rule specified in the Object Lock configuration will be applied by default to every new object placed in the specified bucket. For more information, see [Locking Objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html). 
  *    +  The ``DefaultRetention`` settings require both a mode and a period.
  *   +  The ``DefaultRetention`` period can be either ``Days`` or ``Years`` but you must select one. You cannot specify ``Days`` and ``Years`` at the same time.
  *   +  You can enable Object Lock for new or existing buckets. For more information, see [Configuring Object Lock](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-configure.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#object_lock_configuration S3Bucket#object_lock_configuration}
  */
  readonly objectLockConfiguration?: S3BucketObjectLockConfiguration;
  /**
  * Indicates whether this bucket has an Object Lock configuration enabled. Enable ``ObjectLockEnabled`` when you apply ``ObjectLockConfiguration`` to a bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#object_lock_enabled S3Bucket#object_lock_enabled}
  */
  readonly objectLockEnabled?: boolean | cdktn.IResolvable;
  /**
  * Configuration that defines how Amazon S3 handles Object Ownership rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#ownership_controls S3Bucket#ownership_controls}
  */
  readonly ownershipControls?: S3BucketOwnershipControls;
  /**
  * Configuration that defines how Amazon S3 handles public access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#public_access_block_configuration S3Bucket#public_access_block_configuration}
  */
  readonly publicAccessBlockConfiguration?: S3BucketPublicAccessBlockConfiguration;
  /**
  * Configuration for replicating objects in an S3 bucket. To enable replication, you must also enable versioning by using the ``VersioningConfiguration`` property.
  *  Amazon S3 can store replicated objects in a single destination bucket or multiple destination buckets. The destination bucket or buckets must already exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#replication_configuration S3Bucket#replication_configuration}
  */
  readonly replicationConfiguration?: S3BucketReplicationConfiguration;
  /**
  * An arbitrary set of tags (key-value pairs) for this S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#tags S3Bucket#tags}
  */
  readonly tags?: S3BucketTags[] | cdktn.IResolvable;
  /**
  * Enables multiple versions of all objects in this bucket. You might enable versioning to prevent objects from being deleted or overwritten by mistake or to archive objects so that you can retrieve previous versions of them.
  *   When you enable versioning on a bucket for the first time, it might take a short amount of time for the change to be fully propagated. We recommend that you wait for 15 minutes after enabling versioning before issuing write operations (``PUT`` or ``DELETE``) on objects in the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#versioning_configuration S3Bucket#versioning_configuration}
  */
  readonly versioningConfiguration?: S3BucketVersioningConfiguration;
  /**
  * Information used to configure the bucket as a static website. For more information, see [Hosting Websites on Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#website_configuration S3Bucket#website_configuration}
  */
  readonly websiteConfiguration?: S3BucketWebsiteConfiguration;
}
export interface S3BucketAccelerateConfiguration {
  /**
  * Specifies the transfer acceleration status of the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#acceleration_status S3Bucket#acceleration_status}
  */
  readonly accelerationStatus?: string;
}

export function s3BucketAccelerateConfigurationToTerraform(struct?: S3BucketAccelerateConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    acceleration_status: cdktn.stringToTerraform(struct!.accelerationStatus),
  }
}


export function s3BucketAccelerateConfigurationToHclTerraform(struct?: S3BucketAccelerateConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    acceleration_status: {
      value: cdktn.stringToHclTerraform(struct!.accelerationStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketAccelerateConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketAccelerateConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accelerationStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.accelerationStatus = this._accelerationStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketAccelerateConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accelerationStatus = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accelerationStatus = value.accelerationStatus;
    }
  }

  // acceleration_status - computed: true, optional: true, required: false
  private _accelerationStatus?: string; 
  public get accelerationStatus() {
    return this.getStringAttribute('acceleration_status');
  }
  public set accelerationStatus(value: string) {
    this._accelerationStatus = value;
  }
  public resetAccelerationStatus() {
    this._accelerationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accelerationStatusInput() {
    return this._accelerationStatus;
  }
}
export interface S3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportDestination {
  /**
  * The account ID that owns the destination S3 bucket. If no account ID is provided, the owner is not validated before exporting data.
  *    Although this value is optional, we strongly recommend that you set it to help prevent problems if the destination bucket ownership changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#bucket_account_id S3Bucket#bucket_account_id}
  */
  readonly bucketAccountId?: string;
  /**
  * The Amazon Resource Name (ARN) of the bucket to which data is exported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#bucket_arn S3Bucket#bucket_arn}
  */
  readonly bucketArn?: string;
  /**
  * Specifies the file format used when exporting data to Amazon S3.
  *   *Allowed values*: ``CSV`` | ``ORC`` | ``Parquet``
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#format S3Bucket#format}
  */
  readonly format?: string;
  /**
  * The prefix to use when exporting data. The prefix is prepended to all results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#prefix S3Bucket#prefix}
  */
  readonly prefix?: string;
}

export function s3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportDestinationToTerraform(struct?: S3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportDestination | cdktn.IResolvable): any {
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


export function s3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportDestinationToHclTerraform(struct?: S3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportDestination | cdktn.IResolvable): any {
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

export class S3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportDestination | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportDestination | cdktn.IResolvable | undefined) {
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
export interface S3BucketAnalyticsConfigurationsStorageClassAnalysisDataExport {
  /**
  * The place to store the data for an analysis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#destination S3Bucket#destination}
  */
  readonly destination?: S3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportDestination;
  /**
  * The version of the output schema to use when exporting data. Must be ``V_1``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#output_schema_version S3Bucket#output_schema_version}
  */
  readonly outputSchemaVersion?: string;
}

export function s3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportToTerraform(struct?: S3BucketAnalyticsConfigurationsStorageClassAnalysisDataExport | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: s3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportDestinationToTerraform(struct!.destination),
    output_schema_version: cdktn.stringToTerraform(struct!.outputSchemaVersion),
  }
}


export function s3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportToHclTerraform(struct?: S3BucketAnalyticsConfigurationsStorageClassAnalysisDataExport | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination: {
      value: s3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportDestination",
    },
    output_schema_version: {
      value: cdktn.stringToHclTerraform(struct!.outputSchemaVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketAnalyticsConfigurationsStorageClassAnalysisDataExport | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._outputSchemaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputSchemaVersion = this._outputSchemaVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketAnalyticsConfigurationsStorageClassAnalysisDataExport | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
      this._outputSchemaVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination.internalValue = value.destination;
      this._outputSchemaVersion = value.outputSchemaVersion;
    }
  }

  // destination - computed: true, optional: true, required: false
  private _destination = new S3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: S3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // output_schema_version - computed: true, optional: true, required: false
  private _outputSchemaVersion?: string; 
  public get outputSchemaVersion() {
    return this.getStringAttribute('output_schema_version');
  }
  public set outputSchemaVersion(value: string) {
    this._outputSchemaVersion = value;
  }
  public resetOutputSchemaVersion() {
    this._outputSchemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputSchemaVersionInput() {
    return this._outputSchemaVersion;
  }
}
export interface S3BucketAnalyticsConfigurationsStorageClassAnalysis {
  /**
  * Specifies how data related to the storage class analysis for an Amazon S3 bucket should be exported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#data_export S3Bucket#data_export}
  */
  readonly dataExport?: S3BucketAnalyticsConfigurationsStorageClassAnalysisDataExport;
}

export function s3BucketAnalyticsConfigurationsStorageClassAnalysisToTerraform(struct?: S3BucketAnalyticsConfigurationsStorageClassAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_export: s3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportToTerraform(struct!.dataExport),
  }
}


export function s3BucketAnalyticsConfigurationsStorageClassAnalysisToHclTerraform(struct?: S3BucketAnalyticsConfigurationsStorageClassAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_export: {
      value: s3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportToHclTerraform(struct!.dataExport),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketAnalyticsConfigurationsStorageClassAnalysisDataExport",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketAnalyticsConfigurationsStorageClassAnalysisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketAnalyticsConfigurationsStorageClassAnalysis | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataExport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataExport = this._dataExport?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketAnalyticsConfigurationsStorageClassAnalysis | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataExport.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataExport.internalValue = value.dataExport;
    }
  }

  // data_export - computed: true, optional: true, required: false
  private _dataExport = new S3BucketAnalyticsConfigurationsStorageClassAnalysisDataExportOutputReference(this, "data_export");
  public get dataExport() {
    return this._dataExport;
  }
  public putDataExport(value: S3BucketAnalyticsConfigurationsStorageClassAnalysisDataExport) {
    this._dataExport.internalValue = value;
  }
  public resetDataExport() {
    this._dataExport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataExportInput() {
    return this._dataExport.internalValue;
  }
}
export interface S3BucketAnalyticsConfigurationsTagFilters {
  /**
  * The tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#key S3Bucket#key}
  */
  readonly key?: string;
  /**
  * The tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#value S3Bucket#value}
  */
  readonly value?: string;
}

export function s3BucketAnalyticsConfigurationsTagFiltersToTerraform(struct?: S3BucketAnalyticsConfigurationsTagFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function s3BucketAnalyticsConfigurationsTagFiltersToHclTerraform(struct?: S3BucketAnalyticsConfigurationsTagFilters | cdktn.IResolvable): any {
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

export class S3BucketAnalyticsConfigurationsTagFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3BucketAnalyticsConfigurationsTagFilters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3BucketAnalyticsConfigurationsTagFilters | cdktn.IResolvable | undefined) {
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

export class S3BucketAnalyticsConfigurationsTagFiltersList extends cdktn.ComplexList {
  public internalValue? : S3BucketAnalyticsConfigurationsTagFilters[] | cdktn.IResolvable

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
  public get(index: number): S3BucketAnalyticsConfigurationsTagFiltersOutputReference {
    return new S3BucketAnalyticsConfigurationsTagFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketAnalyticsConfigurations {
  /**
  * The ID that identifies the analytics configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#id S3Bucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The prefix that an object must have to be included in the analytics results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#prefix S3Bucket#prefix}
  */
  readonly prefix?: string;
  /**
  * Contains data related to access patterns to be collected and made available to analyze the tradeoffs between different storage classes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#storage_class_analysis S3Bucket#storage_class_analysis}
  */
  readonly storageClassAnalysis?: S3BucketAnalyticsConfigurationsStorageClassAnalysis;
  /**
  * The tags to use when evaluating an analytics filter.
  *  The analytics only includes objects that meet the filter's criteria. If no filter is specified, all of the contents of the bucket are included in the analysis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#tag_filters S3Bucket#tag_filters}
  */
  readonly tagFilters?: S3BucketAnalyticsConfigurationsTagFilters[] | cdktn.IResolvable;
}

export function s3BucketAnalyticsConfigurationsToTerraform(struct?: S3BucketAnalyticsConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    storage_class_analysis: s3BucketAnalyticsConfigurationsStorageClassAnalysisToTerraform(struct!.storageClassAnalysis),
    tag_filters: cdktn.listMapper(s3BucketAnalyticsConfigurationsTagFiltersToTerraform, false)(struct!.tagFilters),
  }
}


export function s3BucketAnalyticsConfigurationsToHclTerraform(struct?: S3BucketAnalyticsConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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
    storage_class_analysis: {
      value: s3BucketAnalyticsConfigurationsStorageClassAnalysisToHclTerraform(struct!.storageClassAnalysis),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketAnalyticsConfigurationsStorageClassAnalysis",
    },
    tag_filters: {
      value: cdktn.listMapperHcl(s3BucketAnalyticsConfigurationsTagFiltersToHclTerraform, false)(struct!.tagFilters),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketAnalyticsConfigurationsTagFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketAnalyticsConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3BucketAnalyticsConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._storageClassAnalysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassAnalysis = this._storageClassAnalysis?.internalValue;
    }
    if (this._tagFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagFilters = this._tagFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketAnalyticsConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._prefix = undefined;
      this._storageClassAnalysis.internalValue = undefined;
      this._tagFilters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._prefix = value.prefix;
      this._storageClassAnalysis.internalValue = value.storageClassAnalysis;
      this._tagFilters.internalValue = value.tagFilters;
    }
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

  // storage_class_analysis - computed: true, optional: true, required: false
  private _storageClassAnalysis = new S3BucketAnalyticsConfigurationsStorageClassAnalysisOutputReference(this, "storage_class_analysis");
  public get storageClassAnalysis() {
    return this._storageClassAnalysis;
  }
  public putStorageClassAnalysis(value: S3BucketAnalyticsConfigurationsStorageClassAnalysis) {
    this._storageClassAnalysis.internalValue = value;
  }
  public resetStorageClassAnalysis() {
    this._storageClassAnalysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassAnalysisInput() {
    return this._storageClassAnalysis.internalValue;
  }

  // tag_filters - computed: true, optional: true, required: false
  private _tagFilters = new S3BucketAnalyticsConfigurationsTagFiltersList(this, "tag_filters", false);
  public get tagFilters() {
    return this._tagFilters;
  }
  public putTagFilters(value: S3BucketAnalyticsConfigurationsTagFilters[] | cdktn.IResolvable) {
    this._tagFilters.internalValue = value;
  }
  public resetTagFilters() {
    this._tagFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters.internalValue;
  }
}

export class S3BucketAnalyticsConfigurationsList extends cdktn.ComplexList {
  public internalValue? : S3BucketAnalyticsConfigurations[] | cdktn.IResolvable

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
  public get(index: number): S3BucketAnalyticsConfigurationsOutputReference {
    return new S3BucketAnalyticsConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault {
  /**
  * AWS Key Management Service (KMS) customer managed key ID to use for the default encryption. 
  *    +   *General purpose buckets* - This parameter is allowed if and only if ``SSEAlgorithm`` is set to ``aws:kms`` or ``aws:kms:dsse``.
  *   +   *Directory buckets* - This parameter is allowed if and only if ``SSEAlgorithm`` is set to ``aws:kms``.
  *   
  *   You can specify the key ID, key alias, or the Amazon Resource Name (ARN) of the KMS key.
  *   +  Key ID: ``1234abcd-12ab-34cd-56ef-1234567890ab`` 
  *   +  Key ARN: ``arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`` 
  *   +  Key Alias: ``alias/alias-name`` 
  *   
  *  If you are using encryption with cross-account or AWS service operations, you must use a fully qualified KMS key ARN. For more information, see [Using encryption for cross-account operations](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html#bucket-encryption-update-bucket-policy).
  *    +   *General purpose buckets* - If you're specifying a customer managed KMS key, we recommend using a fully qualified KMS key ARN. If you use a KMS key alias instead, then KMS resolves the key within the requester?s account. This behavior can result in data that's encrypted with a KMS key that belongs to the requester, and not the bucket owner. Also, if you use a key ID, you can run into a LogDestination undeliverable error when creating a VPC flow log. 
  *   +   *Directory buckets* - When you specify an [customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk) for encryption in your directory bucket, only use the key ID or key ARN. The key alias format of the KMS key isn't supported.
  *   
  *    Amazon S3 only supports symmetric encryption KMS keys. For more information, see [Asymmetric keys in KMS](https://docs.aws.amazon.com//kms/latest/developerguide/symmetric-asymmetric.html) in the *Key Management Service Developer Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#kms_master_key_id S3Bucket#kms_master_key_id}
  */
  readonly kmsMasterKeyId?: string;
  /**
  * Server-side encryption algorithm to use for the default encryption.
  *   For directory buckets, there are only two supported values for server-side encryption: ``AES256`` and ``aws:kms``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#sse_algorithm S3Bucket#sse_algorithm}
  */
  readonly sseAlgorithm?: string;
}

export function s3BucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultToTerraform(struct?: S3BucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_master_key_id: cdktn.stringToTerraform(struct!.kmsMasterKeyId),
    sse_algorithm: cdktn.stringToTerraform(struct!.sseAlgorithm),
  }
}


export function s3BucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultToHclTerraform(struct?: S3BucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault | cdktn.IResolvable): any {
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

export class S3BucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3BucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault | cdktn.IResolvable | undefined) {
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
export interface S3BucketBucketEncryptionServerSideEncryptionConfiguration {
  /**
  * Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket. Existing objects are not affected. Setting the ``BucketKeyEnabled`` element to ``true`` causes Amazon S3 to use an S3 Bucket Key. By default, S3 Bucket Key is not enabled.
  *  For more information, see [Amazon S3 Bucket Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html) in the *Amazon S3 User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#bucket_key_enabled S3Bucket#bucket_key_enabled}
  */
  readonly bucketKeyEnabled?: boolean | cdktn.IResolvable;
  /**
  * Specifies the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#server_side_encryption_by_default S3Bucket#server_side_encryption_by_default}
  */
  readonly serverSideEncryptionByDefault?: S3BucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault;
}

export function s3BucketBucketEncryptionServerSideEncryptionConfigurationToTerraform(struct?: S3BucketBucketEncryptionServerSideEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_key_enabled: cdktn.booleanToTerraform(struct!.bucketKeyEnabled),
    server_side_encryption_by_default: s3BucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultToTerraform(struct!.serverSideEncryptionByDefault),
  }
}


export function s3BucketBucketEncryptionServerSideEncryptionConfigurationToHclTerraform(struct?: S3BucketBucketEncryptionServerSideEncryptionConfiguration | cdktn.IResolvable): any {
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
      value: s3BucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultToHclTerraform(struct!.serverSideEncryptionByDefault),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketBucketEncryptionServerSideEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3BucketBucketEncryptionServerSideEncryptionConfiguration | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3BucketBucketEncryptionServerSideEncryptionConfiguration | cdktn.IResolvable | undefined) {
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
  private _serverSideEncryptionByDefault = new S3BucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference(this, "server_side_encryption_by_default");
  public get serverSideEncryptionByDefault() {
    return this._serverSideEncryptionByDefault;
  }
  public putServerSideEncryptionByDefault(value: S3BucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault) {
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

export class S3BucketBucketEncryptionServerSideEncryptionConfigurationList extends cdktn.ComplexList {
  public internalValue? : S3BucketBucketEncryptionServerSideEncryptionConfiguration[] | cdktn.IResolvable

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
  public get(index: number): S3BucketBucketEncryptionServerSideEncryptionConfigurationOutputReference {
    return new S3BucketBucketEncryptionServerSideEncryptionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketBucketEncryption {
  /**
  * Specifies the default server-side-encryption configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#server_side_encryption_configuration S3Bucket#server_side_encryption_configuration}
  */
  readonly serverSideEncryptionConfiguration?: S3BucketBucketEncryptionServerSideEncryptionConfiguration[] | cdktn.IResolvable;
}

export function s3BucketBucketEncryptionToTerraform(struct?: S3BucketBucketEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    server_side_encryption_configuration: cdktn.listMapper(s3BucketBucketEncryptionServerSideEncryptionConfigurationToTerraform, false)(struct!.serverSideEncryptionConfiguration),
  }
}


export function s3BucketBucketEncryptionToHclTerraform(struct?: S3BucketBucketEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    server_side_encryption_configuration: {
      value: cdktn.listMapperHcl(s3BucketBucketEncryptionServerSideEncryptionConfigurationToHclTerraform, false)(struct!.serverSideEncryptionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketBucketEncryptionServerSideEncryptionConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketBucketEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketBucketEncryption | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3BucketBucketEncryption | cdktn.IResolvable | undefined) {
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
  private _serverSideEncryptionConfiguration = new S3BucketBucketEncryptionServerSideEncryptionConfigurationList(this, "server_side_encryption_configuration", false);
  public get serverSideEncryptionConfiguration() {
    return this._serverSideEncryptionConfiguration;
  }
  public putServerSideEncryptionConfiguration(value: S3BucketBucketEncryptionServerSideEncryptionConfiguration[] | cdktn.IResolvable) {
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
export interface S3BucketCorsConfigurationCorsRules {
  /**
  * Headers that are specified in the ``Access-Control-Request-Headers`` header. These headers are allowed in a preflight OPTIONS request. In response to any preflight OPTIONS request, Amazon S3 returns any requested headers that are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#allowed_headers S3Bucket#allowed_headers}
  */
  readonly allowedHeaders?: string[];
  /**
  * An HTTP method that you allow the origin to run.
  *   *Allowed values*: ``GET`` | ``PUT`` | ``HEAD`` | ``POST`` | ``DELETE``
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#allowed_methods S3Bucket#allowed_methods}
  */
  readonly allowedMethods?: string[];
  /**
  * One or more origins you want customers to be able to access the bucket from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#allowed_origins S3Bucket#allowed_origins}
  */
  readonly allowedOrigins?: string[];
  /**
  * One or more headers in the response that you want customers to be able to access from their applications (for example, from a JavaScript ``XMLHttpRequest`` object).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#exposed_headers S3Bucket#exposed_headers}
  */
  readonly exposedHeaders?: string[];
  /**
  * A unique identifier for this rule. The value must be no more than 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#id S3Bucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The time in seconds that your browser is to cache the preflight response for the specified resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#max_age S3Bucket#max_age}
  */
  readonly maxAge?: number;
}

export function s3BucketCorsConfigurationCorsRulesToTerraform(struct?: S3BucketCorsConfigurationCorsRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedHeaders),
    allowed_methods: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedMethods),
    allowed_origins: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedOrigins),
    exposed_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exposedHeaders),
    id: cdktn.stringToTerraform(struct!.id),
    max_age: cdktn.numberToTerraform(struct!.maxAge),
  }
}


export function s3BucketCorsConfigurationCorsRulesToHclTerraform(struct?: S3BucketCorsConfigurationCorsRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_methods: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_origins: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exposed_headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exposedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_age: {
      value: cdktn.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketCorsConfigurationCorsRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3BucketCorsConfigurationCorsRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHeaders = this._allowedHeaders;
    }
    if (this._allowedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods;
    }
    if (this._allowedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrigins = this._allowedOrigins;
    }
    if (this._exposedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposedHeaders = this._exposedHeaders;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketCorsConfigurationCorsRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedHeaders = undefined;
      this._allowedMethods = undefined;
      this._allowedOrigins = undefined;
      this._exposedHeaders = undefined;
      this._id = undefined;
      this._maxAge = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedHeaders = value.allowedHeaders;
      this._allowedMethods = value.allowedMethods;
      this._allowedOrigins = value.allowedOrigins;
      this._exposedHeaders = value.exposedHeaders;
      this._id = value.id;
      this._maxAge = value.maxAge;
    }
  }

  // allowed_headers - computed: true, optional: true, required: false
  private _allowedHeaders?: string[]; 
  public get allowedHeaders() {
    return this.getListAttribute('allowed_headers');
  }
  public set allowedHeaders(value: string[]) {
    this._allowedHeaders = value;
  }
  public resetAllowedHeaders() {
    this._allowedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHeadersInput() {
    return this._allowedHeaders;
  }

  // allowed_methods - computed: true, optional: true, required: false
  private _allowedMethods?: string[]; 
  public get allowedMethods() {
    return this.getListAttribute('allowed_methods');
  }
  public set allowedMethods(value: string[]) {
    this._allowedMethods = value;
  }
  public resetAllowedMethods() {
    this._allowedMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods;
  }

  // allowed_origins - computed: true, optional: true, required: false
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  public resetAllowedOrigins() {
    this._allowedOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
  }

  // exposed_headers - computed: true, optional: true, required: false
  private _exposedHeaders?: string[]; 
  public get exposedHeaders() {
    return this.getListAttribute('exposed_headers');
  }
  public set exposedHeaders(value: string[]) {
    this._exposedHeaders = value;
  }
  public resetExposedHeaders() {
    this._exposedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposedHeadersInput() {
    return this._exposedHeaders;
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

  // max_age - computed: true, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }
}

export class S3BucketCorsConfigurationCorsRulesList extends cdktn.ComplexList {
  public internalValue? : S3BucketCorsConfigurationCorsRules[] | cdktn.IResolvable

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
  public get(index: number): S3BucketCorsConfigurationCorsRulesOutputReference {
    return new S3BucketCorsConfigurationCorsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketCorsConfiguration {
  /**
  * A set of origins and methods (cross-origin access that you want to allow). You can add up to 100 rules to the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#cors_rules S3Bucket#cors_rules}
  */
  readonly corsRules?: S3BucketCorsConfigurationCorsRules[] | cdktn.IResolvable;
}

export function s3BucketCorsConfigurationToTerraform(struct?: S3BucketCorsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cors_rules: cdktn.listMapper(s3BucketCorsConfigurationCorsRulesToTerraform, false)(struct!.corsRules),
  }
}


export function s3BucketCorsConfigurationToHclTerraform(struct?: S3BucketCorsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cors_rules: {
      value: cdktn.listMapperHcl(s3BucketCorsConfigurationCorsRulesToHclTerraform, false)(struct!.corsRules),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketCorsConfigurationCorsRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketCorsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketCorsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._corsRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsRules = this._corsRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketCorsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._corsRules.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._corsRules.internalValue = value.corsRules;
    }
  }

  // cors_rules - computed: true, optional: true, required: false
  private _corsRules = new S3BucketCorsConfigurationCorsRulesList(this, "cors_rules", false);
  public get corsRules() {
    return this._corsRules;
  }
  public putCorsRules(value: S3BucketCorsConfigurationCorsRules[] | cdktn.IResolvable) {
    this._corsRules.internalValue = value;
  }
  public resetCorsRules() {
    this._corsRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsRulesInput() {
    return this._corsRules.internalValue;
  }
}
export interface S3BucketIntelligentTieringConfigurationsTagFilters {
  /**
  * The tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#key S3Bucket#key}
  */
  readonly key?: string;
  /**
  * The tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#value S3Bucket#value}
  */
  readonly value?: string;
}

export function s3BucketIntelligentTieringConfigurationsTagFiltersToTerraform(struct?: S3BucketIntelligentTieringConfigurationsTagFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function s3BucketIntelligentTieringConfigurationsTagFiltersToHclTerraform(struct?: S3BucketIntelligentTieringConfigurationsTagFilters | cdktn.IResolvable): any {
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

export class S3BucketIntelligentTieringConfigurationsTagFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3BucketIntelligentTieringConfigurationsTagFilters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3BucketIntelligentTieringConfigurationsTagFilters | cdktn.IResolvable | undefined) {
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

export class S3BucketIntelligentTieringConfigurationsTagFiltersList extends cdktn.ComplexList {
  public internalValue? : S3BucketIntelligentTieringConfigurationsTagFilters[] | cdktn.IResolvable

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
  public get(index: number): S3BucketIntelligentTieringConfigurationsTagFiltersOutputReference {
    return new S3BucketIntelligentTieringConfigurationsTagFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketIntelligentTieringConfigurationsTierings {
  /**
  * S3 Intelligent-Tiering access tier. See [Storage class for automatically optimizing frequently and infrequently accessed objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access) for a list of access tiers in the S3 Intelligent-Tiering storage class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#access_tier S3Bucket#access_tier}
  */
  readonly accessTier?: string;
  /**
  * The number of consecutive days of no access after which an object will be eligible to be transitioned to the corresponding tier. The minimum number of days specified for Archive Access tier must be at least 90 days and Deep Archive Access tier must be at least 180 days. The maximum can be up to 2 years (730 days).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#days S3Bucket#days}
  */
  readonly days?: number;
}

export function s3BucketIntelligentTieringConfigurationsTieringsToTerraform(struct?: S3BucketIntelligentTieringConfigurationsTierings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_tier: cdktn.stringToTerraform(struct!.accessTier),
    days: cdktn.numberToTerraform(struct!.days),
  }
}


export function s3BucketIntelligentTieringConfigurationsTieringsToHclTerraform(struct?: S3BucketIntelligentTieringConfigurationsTierings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_tier: {
      value: cdktn.stringToHclTerraform(struct!.accessTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    days: {
      value: cdktn.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketIntelligentTieringConfigurationsTieringsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3BucketIntelligentTieringConfigurationsTierings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTier = this._accessTier;
    }
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketIntelligentTieringConfigurationsTierings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessTier = undefined;
      this._days = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessTier = value.accessTier;
      this._days = value.days;
    }
  }

  // access_tier - computed: true, optional: true, required: false
  private _accessTier?: string; 
  public get accessTier() {
    return this.getStringAttribute('access_tier');
  }
  public set accessTier(value: string) {
    this._accessTier = value;
  }
  public resetAccessTier() {
    this._accessTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTierInput() {
    return this._accessTier;
  }

  // days - computed: true, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }
}

export class S3BucketIntelligentTieringConfigurationsTieringsList extends cdktn.ComplexList {
  public internalValue? : S3BucketIntelligentTieringConfigurationsTierings[] | cdktn.IResolvable

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
  public get(index: number): S3BucketIntelligentTieringConfigurationsTieringsOutputReference {
    return new S3BucketIntelligentTieringConfigurationsTieringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketIntelligentTieringConfigurations {
  /**
  * The ID used to identify the S3 Intelligent-Tiering configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#id S3Bucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An object key name prefix that identifies the subset of objects to which the rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#prefix S3Bucket#prefix}
  */
  readonly prefix?: string;
  /**
  * Specifies the status of the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#status S3Bucket#status}
  */
  readonly status?: string;
  /**
  * A container for a key-value pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#tag_filters S3Bucket#tag_filters}
  */
  readonly tagFilters?: S3BucketIntelligentTieringConfigurationsTagFilters[] | cdktn.IResolvable;
  /**
  * Specifies a list of S3 Intelligent-Tiering storage class tiers in the configuration. At least one tier must be defined in the list. At most, you can specify two tiers in the list, one for each available AccessTier: ``ARCHIVE_ACCESS`` and ``DEEP_ARCHIVE_ACCESS``.
  *   You only need Intelligent Tiering Configuration enabled on a bucket if you want to automatically move objects stored in the Intelligent-Tiering storage class to Archive Access or Deep Archive Access tiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#tierings S3Bucket#tierings}
  */
  readonly tierings?: S3BucketIntelligentTieringConfigurationsTierings[] | cdktn.IResolvable;
}

export function s3BucketIntelligentTieringConfigurationsToTerraform(struct?: S3BucketIntelligentTieringConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    status: cdktn.stringToTerraform(struct!.status),
    tag_filters: cdktn.listMapper(s3BucketIntelligentTieringConfigurationsTagFiltersToTerraform, false)(struct!.tagFilters),
    tierings: cdktn.listMapper(s3BucketIntelligentTieringConfigurationsTieringsToTerraform, false)(struct!.tierings),
  }
}


export function s3BucketIntelligentTieringConfigurationsToHclTerraform(struct?: S3BucketIntelligentTieringConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_filters: {
      value: cdktn.listMapperHcl(s3BucketIntelligentTieringConfigurationsTagFiltersToHclTerraform, false)(struct!.tagFilters),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketIntelligentTieringConfigurationsTagFiltersList",
    },
    tierings: {
      value: cdktn.listMapperHcl(s3BucketIntelligentTieringConfigurationsTieringsToHclTerraform, false)(struct!.tierings),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketIntelligentTieringConfigurationsTieringsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketIntelligentTieringConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3BucketIntelligentTieringConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tagFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagFilters = this._tagFilters?.internalValue;
    }
    if (this._tierings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tierings = this._tierings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketIntelligentTieringConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._prefix = undefined;
      this._status = undefined;
      this._tagFilters.internalValue = undefined;
      this._tierings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._prefix = value.prefix;
      this._status = value.status;
      this._tagFilters.internalValue = value.tagFilters;
      this._tierings.internalValue = value.tierings;
    }
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

  // tag_filters - computed: true, optional: true, required: false
  private _tagFilters = new S3BucketIntelligentTieringConfigurationsTagFiltersList(this, "tag_filters", false);
  public get tagFilters() {
    return this._tagFilters;
  }
  public putTagFilters(value: S3BucketIntelligentTieringConfigurationsTagFilters[] | cdktn.IResolvable) {
    this._tagFilters.internalValue = value;
  }
  public resetTagFilters() {
    this._tagFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters.internalValue;
  }

  // tierings - computed: true, optional: true, required: false
  private _tierings = new S3BucketIntelligentTieringConfigurationsTieringsList(this, "tierings", false);
  public get tierings() {
    return this._tierings;
  }
  public putTierings(value: S3BucketIntelligentTieringConfigurationsTierings[] | cdktn.IResolvable) {
    this._tierings.internalValue = value;
  }
  public resetTierings() {
    this._tierings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tieringsInput() {
    return this._tierings.internalValue;
  }
}

export class S3BucketIntelligentTieringConfigurationsList extends cdktn.ComplexList {
  public internalValue? : S3BucketIntelligentTieringConfigurations[] | cdktn.IResolvable

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
  public get(index: number): S3BucketIntelligentTieringConfigurationsOutputReference {
    return new S3BucketIntelligentTieringConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketInventoryConfigurationsDestination {
  /**
  * The account ID that owns the destination S3 bucket. If no account ID is provided, the owner is not validated before exporting data.
  *    Although this value is optional, we strongly recommend that you set it to help prevent problems if the destination bucket ownership changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#bucket_account_id S3Bucket#bucket_account_id}
  */
  readonly bucketAccountId?: string;
  /**
  * The Amazon Resource Name (ARN) of the bucket to which data is exported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#bucket_arn S3Bucket#bucket_arn}
  */
  readonly bucketArn?: string;
  /**
  * Specifies the file format used when exporting data to Amazon S3.
  *   *Allowed values*: ``CSV`` | ``ORC`` | ``Parquet``
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#format S3Bucket#format}
  */
  readonly format?: string;
  /**
  * The prefix to use when exporting data. The prefix is prepended to all results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#prefix S3Bucket#prefix}
  */
  readonly prefix?: string;
}

export function s3BucketInventoryConfigurationsDestinationToTerraform(struct?: S3BucketInventoryConfigurationsDestination | cdktn.IResolvable): any {
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


export function s3BucketInventoryConfigurationsDestinationToHclTerraform(struct?: S3BucketInventoryConfigurationsDestination | cdktn.IResolvable): any {
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

export class S3BucketInventoryConfigurationsDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketInventoryConfigurationsDestination | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3BucketInventoryConfigurationsDestination | cdktn.IResolvable | undefined) {
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
export interface S3BucketInventoryConfigurations {
  /**
  * Contains information about where to publish the inventory results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#destination S3Bucket#destination}
  */
  readonly destination?: S3BucketInventoryConfigurationsDestination;
  /**
  * Specifies whether the inventory is enabled or disabled. If set to ``True``, an inventory list is generated. If set to ``False``, no inventory list is generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#enabled S3Bucket#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * The ID used to identify the inventory configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#id S3Bucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object versions to include in the inventory list. If set to ``All``, the list includes all the object versions, which adds the version-related fields ``VersionId``, ``IsLatest``, and ``DeleteMarker`` to the list. If set to ``Current``, the list does not contain these version-related fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#included_object_versions S3Bucket#included_object_versions}
  */
  readonly includedObjectVersions?: string;
  /**
  * Contains the optional fields that are included in the inventory results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#optional_fields S3Bucket#optional_fields}
  */
  readonly optionalFields?: string[];
  /**
  * Specifies the inventory filter prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#prefix S3Bucket#prefix}
  */
  readonly prefix?: string;
  /**
  * Specifies the schedule for generating inventory results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#schedule_frequency S3Bucket#schedule_frequency}
  */
  readonly scheduleFrequency?: string;
}

export function s3BucketInventoryConfigurationsToTerraform(struct?: S3BucketInventoryConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: s3BucketInventoryConfigurationsDestinationToTerraform(struct!.destination),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    id: cdktn.stringToTerraform(struct!.id),
    included_object_versions: cdktn.stringToTerraform(struct!.includedObjectVersions),
    optional_fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.optionalFields),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    schedule_frequency: cdktn.stringToTerraform(struct!.scheduleFrequency),
  }
}


export function s3BucketInventoryConfigurationsToHclTerraform(struct?: S3BucketInventoryConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination: {
      value: s3BucketInventoryConfigurationsDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketInventoryConfigurationsDestination",
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

export class S3BucketInventoryConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3BucketInventoryConfigurations | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3BucketInventoryConfigurations | cdktn.IResolvable | undefined) {
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
  private _destination = new S3BucketInventoryConfigurationsDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: S3BucketInventoryConfigurationsDestination) {
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

export class S3BucketInventoryConfigurationsList extends cdktn.ComplexList {
  public internalValue? : S3BucketInventoryConfigurations[] | cdktn.IResolvable

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
  public get(index: number): S3BucketInventoryConfigurationsOutputReference {
    return new S3BucketInventoryConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload {
  /**
  * Specifies the number of days after which Amazon S3 stops an incomplete multipart upload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#days_after_initiation S3Bucket#days_after_initiation}
  */
  readonly daysAfterInitiation?: number;
}

export function s3BucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadToTerraform(struct?: S3BucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    days_after_initiation: cdktn.numberToTerraform(struct!.daysAfterInitiation),
  }
}


export function s3BucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadToHclTerraform(struct?: S3BucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload | cdktn.IResolvable): any {
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

export class S3BucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3BucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload | cdktn.IResolvable | undefined) {
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
export interface S3BucketLifecycleConfigurationRulesNoncurrentVersionExpiration {
  /**
  * Specifies how many noncurrent versions S3 will retain. If there are this many more recent noncurrent versions, S3 will take the associated action. For more information about noncurrent versions, see [Lifecycle configuration elements](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html) in the *Amazon S3 User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#newer_noncurrent_versions S3Bucket#newer_noncurrent_versions}
  */
  readonly newerNoncurrentVersions?: number;
  /**
  * Specifies the number of days an object is noncurrent before S3 can perform the associated action. For information about the noncurrent days calculations, see [How Amazon S3 Calculates When an Object Became Noncurrent](https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations) in the *Amazon S3 User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#noncurrent_days S3Bucket#noncurrent_days}
  */
  readonly noncurrentDays?: number;
}

export function s3BucketLifecycleConfigurationRulesNoncurrentVersionExpirationToTerraform(struct?: S3BucketLifecycleConfigurationRulesNoncurrentVersionExpiration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    newer_noncurrent_versions: cdktn.numberToTerraform(struct!.newerNoncurrentVersions),
    noncurrent_days: cdktn.numberToTerraform(struct!.noncurrentDays),
  }
}


export function s3BucketLifecycleConfigurationRulesNoncurrentVersionExpirationToHclTerraform(struct?: S3BucketLifecycleConfigurationRulesNoncurrentVersionExpiration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    newer_noncurrent_versions: {
      value: cdktn.numberToHclTerraform(struct!.newerNoncurrentVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    noncurrent_days: {
      value: cdktn.numberToHclTerraform(struct!.noncurrentDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketLifecycleConfigurationRulesNoncurrentVersionExpirationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketLifecycleConfigurationRulesNoncurrentVersionExpiration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newerNoncurrentVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.newerNoncurrentVersions = this._newerNoncurrentVersions;
    }
    if (this._noncurrentDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.noncurrentDays = this._noncurrentDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketLifecycleConfigurationRulesNoncurrentVersionExpiration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._newerNoncurrentVersions = undefined;
      this._noncurrentDays = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._newerNoncurrentVersions = value.newerNoncurrentVersions;
      this._noncurrentDays = value.noncurrentDays;
    }
  }

  // newer_noncurrent_versions - computed: true, optional: true, required: false
  private _newerNoncurrentVersions?: number; 
  public get newerNoncurrentVersions() {
    return this.getNumberAttribute('newer_noncurrent_versions');
  }
  public set newerNoncurrentVersions(value: number) {
    this._newerNoncurrentVersions = value;
  }
  public resetNewerNoncurrentVersions() {
    this._newerNoncurrentVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newerNoncurrentVersionsInput() {
    return this._newerNoncurrentVersions;
  }

  // noncurrent_days - computed: true, optional: true, required: false
  private _noncurrentDays?: number; 
  public get noncurrentDays() {
    return this.getNumberAttribute('noncurrent_days');
  }
  public set noncurrentDays(value: number) {
    this._noncurrentDays = value;
  }
  public resetNoncurrentDays() {
    this._noncurrentDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noncurrentDaysInput() {
    return this._noncurrentDays;
  }
}
export interface S3BucketLifecycleConfigurationRulesNoncurrentVersionTransition {
  /**
  * Specifies how many noncurrent versions S3 will retain. If there are this many more recent noncurrent versions, S3 will take the associated action. For more information about noncurrent versions, see [Lifecycle configuration elements](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html) in the *Amazon S3 User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#newer_noncurrent_versions S3Bucket#newer_noncurrent_versions}
  */
  readonly newerNoncurrentVersions?: number;
  /**
  * The class of storage used to store the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#storage_class S3Bucket#storage_class}
  */
  readonly storageClass?: string;
  /**
  * Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action. For information about the noncurrent days calculations, see [How Amazon S3 Calculates How Long an Object Has Been Noncurrent](https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations) in the *Amazon S3 User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#transition_in_days S3Bucket#transition_in_days}
  */
  readonly transitionInDays?: number;
}

export function s3BucketLifecycleConfigurationRulesNoncurrentVersionTransitionToTerraform(struct?: S3BucketLifecycleConfigurationRulesNoncurrentVersionTransition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    newer_noncurrent_versions: cdktn.numberToTerraform(struct!.newerNoncurrentVersions),
    storage_class: cdktn.stringToTerraform(struct!.storageClass),
    transition_in_days: cdktn.numberToTerraform(struct!.transitionInDays),
  }
}


export function s3BucketLifecycleConfigurationRulesNoncurrentVersionTransitionToHclTerraform(struct?: S3BucketLifecycleConfigurationRulesNoncurrentVersionTransition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    newer_noncurrent_versions: {
      value: cdktn.numberToHclTerraform(struct!.newerNoncurrentVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_class: {
      value: cdktn.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transition_in_days: {
      value: cdktn.numberToHclTerraform(struct!.transitionInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketLifecycleConfigurationRulesNoncurrentVersionTransitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketLifecycleConfigurationRulesNoncurrentVersionTransition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newerNoncurrentVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.newerNoncurrentVersions = this._newerNoncurrentVersions;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._transitionInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitionInDays = this._transitionInDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketLifecycleConfigurationRulesNoncurrentVersionTransition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._newerNoncurrentVersions = undefined;
      this._storageClass = undefined;
      this._transitionInDays = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._newerNoncurrentVersions = value.newerNoncurrentVersions;
      this._storageClass = value.storageClass;
      this._transitionInDays = value.transitionInDays;
    }
  }

  // newer_noncurrent_versions - computed: true, optional: true, required: false
  private _newerNoncurrentVersions?: number; 
  public get newerNoncurrentVersions() {
    return this.getNumberAttribute('newer_noncurrent_versions');
  }
  public set newerNoncurrentVersions(value: number) {
    this._newerNoncurrentVersions = value;
  }
  public resetNewerNoncurrentVersions() {
    this._newerNoncurrentVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newerNoncurrentVersionsInput() {
    return this._newerNoncurrentVersions;
  }

  // storage_class - computed: true, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // transition_in_days - computed: true, optional: true, required: false
  private _transitionInDays?: number; 
  public get transitionInDays() {
    return this.getNumberAttribute('transition_in_days');
  }
  public set transitionInDays(value: number) {
    this._transitionInDays = value;
  }
  public resetTransitionInDays() {
    this._transitionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionInDaysInput() {
    return this._transitionInDays;
  }
}
export interface S3BucketLifecycleConfigurationRulesNoncurrentVersionTransitions {
  /**
  * Specifies how many noncurrent versions S3 will retain. If there are this many more recent noncurrent versions, S3 will take the associated action. For more information about noncurrent versions, see [Lifecycle configuration elements](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html) in the *Amazon S3 User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#newer_noncurrent_versions S3Bucket#newer_noncurrent_versions}
  */
  readonly newerNoncurrentVersions?: number;
  /**
  * The class of storage used to store the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#storage_class S3Bucket#storage_class}
  */
  readonly storageClass?: string;
  /**
  * Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action. For information about the noncurrent days calculations, see [How Amazon S3 Calculates How Long an Object Has Been Noncurrent](https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations) in the *Amazon S3 User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#transition_in_days S3Bucket#transition_in_days}
  */
  readonly transitionInDays?: number;
}

export function s3BucketLifecycleConfigurationRulesNoncurrentVersionTransitionsToTerraform(struct?: S3BucketLifecycleConfigurationRulesNoncurrentVersionTransitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    newer_noncurrent_versions: cdktn.numberToTerraform(struct!.newerNoncurrentVersions),
    storage_class: cdktn.stringToTerraform(struct!.storageClass),
    transition_in_days: cdktn.numberToTerraform(struct!.transitionInDays),
  }
}


export function s3BucketLifecycleConfigurationRulesNoncurrentVersionTransitionsToHclTerraform(struct?: S3BucketLifecycleConfigurationRulesNoncurrentVersionTransitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    newer_noncurrent_versions: {
      value: cdktn.numberToHclTerraform(struct!.newerNoncurrentVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_class: {
      value: cdktn.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transition_in_days: {
      value: cdktn.numberToHclTerraform(struct!.transitionInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketLifecycleConfigurationRulesNoncurrentVersionTransitionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3BucketLifecycleConfigurationRulesNoncurrentVersionTransitions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newerNoncurrentVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.newerNoncurrentVersions = this._newerNoncurrentVersions;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._transitionInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitionInDays = this._transitionInDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketLifecycleConfigurationRulesNoncurrentVersionTransitions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._newerNoncurrentVersions = undefined;
      this._storageClass = undefined;
      this._transitionInDays = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._newerNoncurrentVersions = value.newerNoncurrentVersions;
      this._storageClass = value.storageClass;
      this._transitionInDays = value.transitionInDays;
    }
  }

  // newer_noncurrent_versions - computed: true, optional: true, required: false
  private _newerNoncurrentVersions?: number; 
  public get newerNoncurrentVersions() {
    return this.getNumberAttribute('newer_noncurrent_versions');
  }
  public set newerNoncurrentVersions(value: number) {
    this._newerNoncurrentVersions = value;
  }
  public resetNewerNoncurrentVersions() {
    this._newerNoncurrentVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newerNoncurrentVersionsInput() {
    return this._newerNoncurrentVersions;
  }

  // storage_class - computed: true, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // transition_in_days - computed: true, optional: true, required: false
  private _transitionInDays?: number; 
  public get transitionInDays() {
    return this.getNumberAttribute('transition_in_days');
  }
  public set transitionInDays(value: number) {
    this._transitionInDays = value;
  }
  public resetTransitionInDays() {
    this._transitionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionInDaysInput() {
    return this._transitionInDays;
  }
}

export class S3BucketLifecycleConfigurationRulesNoncurrentVersionTransitionsList extends cdktn.ComplexList {
  public internalValue? : S3BucketLifecycleConfigurationRulesNoncurrentVersionTransitions[] | cdktn.IResolvable

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
  public get(index: number): S3BucketLifecycleConfigurationRulesNoncurrentVersionTransitionsOutputReference {
    return new S3BucketLifecycleConfigurationRulesNoncurrentVersionTransitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketLifecycleConfigurationRulesTagFilters {
  /**
  * The tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#key S3Bucket#key}
  */
  readonly key?: string;
  /**
  * The tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#value S3Bucket#value}
  */
  readonly value?: string;
}

export function s3BucketLifecycleConfigurationRulesTagFiltersToTerraform(struct?: S3BucketLifecycleConfigurationRulesTagFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function s3BucketLifecycleConfigurationRulesTagFiltersToHclTerraform(struct?: S3BucketLifecycleConfigurationRulesTagFilters | cdktn.IResolvable): any {
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

export class S3BucketLifecycleConfigurationRulesTagFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3BucketLifecycleConfigurationRulesTagFilters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3BucketLifecycleConfigurationRulesTagFilters | cdktn.IResolvable | undefined) {
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

export class S3BucketLifecycleConfigurationRulesTagFiltersList extends cdktn.ComplexList {
  public internalValue? : S3BucketLifecycleConfigurationRulesTagFilters[] | cdktn.IResolvable

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
  public get(index: number): S3BucketLifecycleConfigurationRulesTagFiltersOutputReference {
    return new S3BucketLifecycleConfigurationRulesTagFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketLifecycleConfigurationRulesTransition {
  /**
  * The storage class to which you want the object to transition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#storage_class S3Bucket#storage_class}
  */
  readonly storageClass?: string;
  /**
  * Indicates when objects are transitioned to the specified storage class. The date value must be in ISO 8601 format. The time is always midnight UTC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#transition_date S3Bucket#transition_date}
  */
  readonly transitionDate?: string;
  /**
  * Indicates the number of days after creation when objects are transitioned to the specified storage class. If the specified storage class is ``INTELLIGENT_TIERING``, ``GLACIER_IR``, ``GLACIER``, or ``DEEP_ARCHIVE``, valid values are ``0`` or positive integers. If the specified storage class is ``STANDARD_IA`` or ``ONEZONE_IA``, valid values are positive integers greater than ``30``. Be aware that some storage classes have a minimum storage duration and that you're charged for transitioning objects before their minimum storage duration. For more information, see [Constraints and considerations for transitions](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-transition-general-considerations.html#lifecycle-configuration-constraints) in the *Amazon S3 User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#transition_in_days S3Bucket#transition_in_days}
  */
  readonly transitionInDays?: number;
}

export function s3BucketLifecycleConfigurationRulesTransitionToTerraform(struct?: S3BucketLifecycleConfigurationRulesTransition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    storage_class: cdktn.stringToTerraform(struct!.storageClass),
    transition_date: cdktn.stringToTerraform(struct!.transitionDate),
    transition_in_days: cdktn.numberToTerraform(struct!.transitionInDays),
  }
}


export function s3BucketLifecycleConfigurationRulesTransitionToHclTerraform(struct?: S3BucketLifecycleConfigurationRulesTransition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    storage_class: {
      value: cdktn.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transition_date: {
      value: cdktn.stringToHclTerraform(struct!.transitionDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transition_in_days: {
      value: cdktn.numberToHclTerraform(struct!.transitionInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketLifecycleConfigurationRulesTransitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketLifecycleConfigurationRulesTransition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._transitionDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitionDate = this._transitionDate;
    }
    if (this._transitionInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitionInDays = this._transitionInDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketLifecycleConfigurationRulesTransition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._storageClass = undefined;
      this._transitionDate = undefined;
      this._transitionInDays = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._storageClass = value.storageClass;
      this._transitionDate = value.transitionDate;
      this._transitionInDays = value.transitionInDays;
    }
  }

  // storage_class - computed: true, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // transition_date - computed: true, optional: true, required: false
  private _transitionDate?: string; 
  public get transitionDate() {
    return this.getStringAttribute('transition_date');
  }
  public set transitionDate(value: string) {
    this._transitionDate = value;
  }
  public resetTransitionDate() {
    this._transitionDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionDateInput() {
    return this._transitionDate;
  }

  // transition_in_days - computed: true, optional: true, required: false
  private _transitionInDays?: number; 
  public get transitionInDays() {
    return this.getNumberAttribute('transition_in_days');
  }
  public set transitionInDays(value: number) {
    this._transitionInDays = value;
  }
  public resetTransitionInDays() {
    this._transitionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionInDaysInput() {
    return this._transitionInDays;
  }
}
export interface S3BucketLifecycleConfigurationRulesTransitions {
  /**
  * The storage class to which you want the object to transition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#storage_class S3Bucket#storage_class}
  */
  readonly storageClass?: string;
  /**
  * Indicates when objects are transitioned to the specified storage class. The date value must be in ISO 8601 format. The time is always midnight UTC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#transition_date S3Bucket#transition_date}
  */
  readonly transitionDate?: string;
  /**
  * Indicates the number of days after creation when objects are transitioned to the specified storage class. If the specified storage class is ``INTELLIGENT_TIERING``, ``GLACIER_IR``, ``GLACIER``, or ``DEEP_ARCHIVE``, valid values are ``0`` or positive integers. If the specified storage class is ``STANDARD_IA`` or ``ONEZONE_IA``, valid values are positive integers greater than ``30``. Be aware that some storage classes have a minimum storage duration and that you're charged for transitioning objects before their minimum storage duration. For more information, see [Constraints and considerations for transitions](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-transition-general-considerations.html#lifecycle-configuration-constraints) in the *Amazon S3 User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#transition_in_days S3Bucket#transition_in_days}
  */
  readonly transitionInDays?: number;
}

export function s3BucketLifecycleConfigurationRulesTransitionsToTerraform(struct?: S3BucketLifecycleConfigurationRulesTransitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    storage_class: cdktn.stringToTerraform(struct!.storageClass),
    transition_date: cdktn.stringToTerraform(struct!.transitionDate),
    transition_in_days: cdktn.numberToTerraform(struct!.transitionInDays),
  }
}


export function s3BucketLifecycleConfigurationRulesTransitionsToHclTerraform(struct?: S3BucketLifecycleConfigurationRulesTransitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    storage_class: {
      value: cdktn.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transition_date: {
      value: cdktn.stringToHclTerraform(struct!.transitionDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transition_in_days: {
      value: cdktn.numberToHclTerraform(struct!.transitionInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketLifecycleConfigurationRulesTransitionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3BucketLifecycleConfigurationRulesTransitions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._transitionDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitionDate = this._transitionDate;
    }
    if (this._transitionInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitionInDays = this._transitionInDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketLifecycleConfigurationRulesTransitions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._storageClass = undefined;
      this._transitionDate = undefined;
      this._transitionInDays = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._storageClass = value.storageClass;
      this._transitionDate = value.transitionDate;
      this._transitionInDays = value.transitionInDays;
    }
  }

  // storage_class - computed: true, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // transition_date - computed: true, optional: true, required: false
  private _transitionDate?: string; 
  public get transitionDate() {
    return this.getStringAttribute('transition_date');
  }
  public set transitionDate(value: string) {
    this._transitionDate = value;
  }
  public resetTransitionDate() {
    this._transitionDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionDateInput() {
    return this._transitionDate;
  }

  // transition_in_days - computed: true, optional: true, required: false
  private _transitionInDays?: number; 
  public get transitionInDays() {
    return this.getNumberAttribute('transition_in_days');
  }
  public set transitionInDays(value: number) {
    this._transitionInDays = value;
  }
  public resetTransitionInDays() {
    this._transitionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionInDaysInput() {
    return this._transitionInDays;
  }
}

export class S3BucketLifecycleConfigurationRulesTransitionsList extends cdktn.ComplexList {
  public internalValue? : S3BucketLifecycleConfigurationRulesTransitions[] | cdktn.IResolvable

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
  public get(index: number): S3BucketLifecycleConfigurationRulesTransitionsOutputReference {
    return new S3BucketLifecycleConfigurationRulesTransitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketLifecycleConfigurationRules {
  /**
  * Specifies a lifecycle rule that stops incomplete multipart uploads to an Amazon S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#abort_incomplete_multipart_upload S3Bucket#abort_incomplete_multipart_upload}
  */
  readonly abortIncompleteMultipartUpload?: S3BucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload;
  /**
  * Indicates when objects are deleted from Amazon S3 and Amazon S3 Glacier. The date value must be in ISO 8601 format. The time is always midnight UTC. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#expiration_date S3Bucket#expiration_date}
  */
  readonly expirationDate?: string;
  /**
  * Indicates the number of days after creation when objects are deleted from Amazon S3 and Amazon S3 Glacier. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#expiration_in_days S3Bucket#expiration_in_days}
  */
  readonly expirationInDays?: number;
  /**
  * Indicates whether Amazon S3 will remove a delete marker without any noncurrent versions. If set to true, the delete marker will be removed if there are no noncurrent versions. This cannot be specified with ``ExpirationInDays``, ``ExpirationDate``, or ``TagFilters``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#expired_object_delete_marker S3Bucket#expired_object_delete_marker}
  */
  readonly expiredObjectDeleteMarker?: boolean | cdktn.IResolvable;
  /**
  * Unique identifier for the rule. The value can't be longer than 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#id S3Bucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies when noncurrent object versions expire. Upon expiration, S3 permanently deletes the noncurrent object versions. You set this lifecycle configuration action on a bucket that has versioning enabled (or suspended) to request that S3 delete noncurrent object versions at a specific period in the object's lifetime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#noncurrent_version_expiration S3Bucket#noncurrent_version_expiration}
  */
  readonly noncurrentVersionExpiration?: S3BucketLifecycleConfigurationRulesNoncurrentVersionExpiration;
  /**
  * (Deprecated.) For buckets with versioning enabled (or suspended), specifies the time, in days, between when a new version of the object is uploaded to the bucket and when old versions of the object expire. When object versions expire, Amazon S3 permanently deletes them. If you specify a transition and expiration time, the expiration time must be later than the transition time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#noncurrent_version_expiration_in_days S3Bucket#noncurrent_version_expiration_in_days}
  */
  readonly noncurrentVersionExpirationInDays?: number;
  /**
  * (Deprecated.) For buckets with versioning enabled (or suspended), specifies when non-current objects transition to a specified storage class. If you specify a transition and expiration time, the expiration time must be later than the transition time. If you specify this property, don't specify the ``NoncurrentVersionTransitions`` property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#noncurrent_version_transition S3Bucket#noncurrent_version_transition}
  */
  readonly noncurrentVersionTransition?: S3BucketLifecycleConfigurationRulesNoncurrentVersionTransition;
  /**
  * For buckets with versioning enabled (or suspended), one or more transition rules that specify when non-current objects transition to a specified storage class. If you specify a transition and expiration time, the expiration time must be later than the transition time. If you specify this property, don't specify the ``NoncurrentVersionTransition`` property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#noncurrent_version_transitions S3Bucket#noncurrent_version_transitions}
  */
  readonly noncurrentVersionTransitions?: S3BucketLifecycleConfigurationRulesNoncurrentVersionTransitions[] | cdktn.IResolvable;
  /**
  * Specifies the minimum object size in bytes for this rule to apply to. Objects must be larger than this value in bytes. For more information about size based rules, see [Lifecycle configuration using size-based rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configuration-examples.html#lc-size-rules) in the *Amazon S3 User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#object_size_greater_than S3Bucket#object_size_greater_than}
  */
  readonly objectSizeGreaterThan?: string;
  /**
  * Specifies the maximum object size in bytes for this rule to apply to. Objects must be smaller than this value in bytes. For more information about sized based rules, see [Lifecycle configuration using size-based rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configuration-examples.html#lc-size-rules) in the *Amazon S3 User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#object_size_less_than S3Bucket#object_size_less_than}
  */
  readonly objectSizeLessThan?: string;
  /**
  * Object key prefix that identifies one or more objects to which this rule applies.
  *   Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#prefix S3Bucket#prefix}
  */
  readonly prefix?: string;
  /**
  * If ``Enabled``, the rule is currently being applied. If ``Disabled``, the rule is not currently being applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#status S3Bucket#status}
  */
  readonly status?: string;
  /**
  * Tags to use to identify a subset of objects to which the lifecycle rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#tag_filters S3Bucket#tag_filters}
  */
  readonly tagFilters?: S3BucketLifecycleConfigurationRulesTagFilters[] | cdktn.IResolvable;
  /**
  * (Deprecated.) Specifies when an object transitions to a specified storage class. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time. If you specify this property, don't specify the ``Transitions`` property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#transition S3Bucket#transition}
  */
  readonly transition?: S3BucketLifecycleConfigurationRulesTransition;
  /**
  * One or more transition rules that specify when an object transitions to a specified storage class. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time. If you specify this property, don't specify the ``Transition`` property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#transitions S3Bucket#transitions}
  */
  readonly transitions?: S3BucketLifecycleConfigurationRulesTransitions[] | cdktn.IResolvable;
}

export function s3BucketLifecycleConfigurationRulesToTerraform(struct?: S3BucketLifecycleConfigurationRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    abort_incomplete_multipart_upload: s3BucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadToTerraform(struct!.abortIncompleteMultipartUpload),
    expiration_date: cdktn.stringToTerraform(struct!.expirationDate),
    expiration_in_days: cdktn.numberToTerraform(struct!.expirationInDays),
    expired_object_delete_marker: cdktn.booleanToTerraform(struct!.expiredObjectDeleteMarker),
    id: cdktn.stringToTerraform(struct!.id),
    noncurrent_version_expiration: s3BucketLifecycleConfigurationRulesNoncurrentVersionExpirationToTerraform(struct!.noncurrentVersionExpiration),
    noncurrent_version_expiration_in_days: cdktn.numberToTerraform(struct!.noncurrentVersionExpirationInDays),
    noncurrent_version_transition: s3BucketLifecycleConfigurationRulesNoncurrentVersionTransitionToTerraform(struct!.noncurrentVersionTransition),
    noncurrent_version_transitions: cdktn.listMapper(s3BucketLifecycleConfigurationRulesNoncurrentVersionTransitionsToTerraform, false)(struct!.noncurrentVersionTransitions),
    object_size_greater_than: cdktn.stringToTerraform(struct!.objectSizeGreaterThan),
    object_size_less_than: cdktn.stringToTerraform(struct!.objectSizeLessThan),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    status: cdktn.stringToTerraform(struct!.status),
    tag_filters: cdktn.listMapper(s3BucketLifecycleConfigurationRulesTagFiltersToTerraform, false)(struct!.tagFilters),
    transition: s3BucketLifecycleConfigurationRulesTransitionToTerraform(struct!.transition),
    transitions: cdktn.listMapper(s3BucketLifecycleConfigurationRulesTransitionsToTerraform, false)(struct!.transitions),
  }
}


export function s3BucketLifecycleConfigurationRulesToHclTerraform(struct?: S3BucketLifecycleConfigurationRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    abort_incomplete_multipart_upload: {
      value: s3BucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadToHclTerraform(struct!.abortIncompleteMultipartUpload),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload",
    },
    expiration_date: {
      value: cdktn.stringToHclTerraform(struct!.expirationDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration_in_days: {
      value: cdktn.numberToHclTerraform(struct!.expirationInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expired_object_delete_marker: {
      value: cdktn.booleanToHclTerraform(struct!.expiredObjectDeleteMarker),
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
    noncurrent_version_expiration: {
      value: s3BucketLifecycleConfigurationRulesNoncurrentVersionExpirationToHclTerraform(struct!.noncurrentVersionExpiration),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketLifecycleConfigurationRulesNoncurrentVersionExpiration",
    },
    noncurrent_version_expiration_in_days: {
      value: cdktn.numberToHclTerraform(struct!.noncurrentVersionExpirationInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    noncurrent_version_transition: {
      value: s3BucketLifecycleConfigurationRulesNoncurrentVersionTransitionToHclTerraform(struct!.noncurrentVersionTransition),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketLifecycleConfigurationRulesNoncurrentVersionTransition",
    },
    noncurrent_version_transitions: {
      value: cdktn.listMapperHcl(s3BucketLifecycleConfigurationRulesNoncurrentVersionTransitionsToHclTerraform, false)(struct!.noncurrentVersionTransitions),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketLifecycleConfigurationRulesNoncurrentVersionTransitionsList",
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
    tag_filters: {
      value: cdktn.listMapperHcl(s3BucketLifecycleConfigurationRulesTagFiltersToHclTerraform, false)(struct!.tagFilters),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketLifecycleConfigurationRulesTagFiltersList",
    },
    transition: {
      value: s3BucketLifecycleConfigurationRulesTransitionToHclTerraform(struct!.transition),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketLifecycleConfigurationRulesTransition",
    },
    transitions: {
      value: cdktn.listMapperHcl(s3BucketLifecycleConfigurationRulesTransitionsToHclTerraform, false)(struct!.transitions),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketLifecycleConfigurationRulesTransitionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketLifecycleConfigurationRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3BucketLifecycleConfigurationRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abortIncompleteMultipartUpload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abortIncompleteMultipartUpload = this._abortIncompleteMultipartUpload?.internalValue;
    }
    if (this._expirationDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationDate = this._expirationDate;
    }
    if (this._expirationInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationInDays = this._expirationInDays;
    }
    if (this._expiredObjectDeleteMarker !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiredObjectDeleteMarker = this._expiredObjectDeleteMarker;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._noncurrentVersionExpiration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noncurrentVersionExpiration = this._noncurrentVersionExpiration?.internalValue;
    }
    if (this._noncurrentVersionExpirationInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.noncurrentVersionExpirationInDays = this._noncurrentVersionExpirationInDays;
    }
    if (this._noncurrentVersionTransition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noncurrentVersionTransition = this._noncurrentVersionTransition?.internalValue;
    }
    if (this._noncurrentVersionTransitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noncurrentVersionTransitions = this._noncurrentVersionTransitions?.internalValue;
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
    if (this._tagFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagFilters = this._tagFilters?.internalValue;
    }
    if (this._transition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transition = this._transition?.internalValue;
    }
    if (this._transitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitions = this._transitions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketLifecycleConfigurationRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abortIncompleteMultipartUpload.internalValue = undefined;
      this._expirationDate = undefined;
      this._expirationInDays = undefined;
      this._expiredObjectDeleteMarker = undefined;
      this._id = undefined;
      this._noncurrentVersionExpiration.internalValue = undefined;
      this._noncurrentVersionExpirationInDays = undefined;
      this._noncurrentVersionTransition.internalValue = undefined;
      this._noncurrentVersionTransitions.internalValue = undefined;
      this._objectSizeGreaterThan = undefined;
      this._objectSizeLessThan = undefined;
      this._prefix = undefined;
      this._status = undefined;
      this._tagFilters.internalValue = undefined;
      this._transition.internalValue = undefined;
      this._transitions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abortIncompleteMultipartUpload.internalValue = value.abortIncompleteMultipartUpload;
      this._expirationDate = value.expirationDate;
      this._expirationInDays = value.expirationInDays;
      this._expiredObjectDeleteMarker = value.expiredObjectDeleteMarker;
      this._id = value.id;
      this._noncurrentVersionExpiration.internalValue = value.noncurrentVersionExpiration;
      this._noncurrentVersionExpirationInDays = value.noncurrentVersionExpirationInDays;
      this._noncurrentVersionTransition.internalValue = value.noncurrentVersionTransition;
      this._noncurrentVersionTransitions.internalValue = value.noncurrentVersionTransitions;
      this._objectSizeGreaterThan = value.objectSizeGreaterThan;
      this._objectSizeLessThan = value.objectSizeLessThan;
      this._prefix = value.prefix;
      this._status = value.status;
      this._tagFilters.internalValue = value.tagFilters;
      this._transition.internalValue = value.transition;
      this._transitions.internalValue = value.transitions;
    }
  }

  // abort_incomplete_multipart_upload - computed: true, optional: true, required: false
  private _abortIncompleteMultipartUpload = new S3BucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference(this, "abort_incomplete_multipart_upload");
  public get abortIncompleteMultipartUpload() {
    return this._abortIncompleteMultipartUpload;
  }
  public putAbortIncompleteMultipartUpload(value: S3BucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload) {
    this._abortIncompleteMultipartUpload.internalValue = value;
  }
  public resetAbortIncompleteMultipartUpload() {
    this._abortIncompleteMultipartUpload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortIncompleteMultipartUploadInput() {
    return this._abortIncompleteMultipartUpload.internalValue;
  }

  // expiration_date - computed: true, optional: true, required: false
  private _expirationDate?: string; 
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }
  public set expirationDate(value: string) {
    this._expirationDate = value;
  }
  public resetExpirationDate() {
    this._expirationDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDateInput() {
    return this._expirationDate;
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

  // expired_object_delete_marker - computed: true, optional: true, required: false
  private _expiredObjectDeleteMarker?: boolean | cdktn.IResolvable; 
  public get expiredObjectDeleteMarker() {
    return this.getBooleanAttribute('expired_object_delete_marker');
  }
  public set expiredObjectDeleteMarker(value: boolean | cdktn.IResolvable) {
    this._expiredObjectDeleteMarker = value;
  }
  public resetExpiredObjectDeleteMarker() {
    this._expiredObjectDeleteMarker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredObjectDeleteMarkerInput() {
    return this._expiredObjectDeleteMarker;
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

  // noncurrent_version_expiration - computed: true, optional: true, required: false
  private _noncurrentVersionExpiration = new S3BucketLifecycleConfigurationRulesNoncurrentVersionExpirationOutputReference(this, "noncurrent_version_expiration");
  public get noncurrentVersionExpiration() {
    return this._noncurrentVersionExpiration;
  }
  public putNoncurrentVersionExpiration(value: S3BucketLifecycleConfigurationRulesNoncurrentVersionExpiration) {
    this._noncurrentVersionExpiration.internalValue = value;
  }
  public resetNoncurrentVersionExpiration() {
    this._noncurrentVersionExpiration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noncurrentVersionExpirationInput() {
    return this._noncurrentVersionExpiration.internalValue;
  }

  // noncurrent_version_expiration_in_days - computed: true, optional: true, required: false
  private _noncurrentVersionExpirationInDays?: number; 
  public get noncurrentVersionExpirationInDays() {
    return this.getNumberAttribute('noncurrent_version_expiration_in_days');
  }
  public set noncurrentVersionExpirationInDays(value: number) {
    this._noncurrentVersionExpirationInDays = value;
  }
  public resetNoncurrentVersionExpirationInDays() {
    this._noncurrentVersionExpirationInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noncurrentVersionExpirationInDaysInput() {
    return this._noncurrentVersionExpirationInDays;
  }

  // noncurrent_version_transition - computed: true, optional: true, required: false
  private _noncurrentVersionTransition = new S3BucketLifecycleConfigurationRulesNoncurrentVersionTransitionOutputReference(this, "noncurrent_version_transition");
  public get noncurrentVersionTransition() {
    return this._noncurrentVersionTransition;
  }
  public putNoncurrentVersionTransition(value: S3BucketLifecycleConfigurationRulesNoncurrentVersionTransition) {
    this._noncurrentVersionTransition.internalValue = value;
  }
  public resetNoncurrentVersionTransition() {
    this._noncurrentVersionTransition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noncurrentVersionTransitionInput() {
    return this._noncurrentVersionTransition.internalValue;
  }

  // noncurrent_version_transitions - computed: true, optional: true, required: false
  private _noncurrentVersionTransitions = new S3BucketLifecycleConfigurationRulesNoncurrentVersionTransitionsList(this, "noncurrent_version_transitions", false);
  public get noncurrentVersionTransitions() {
    return this._noncurrentVersionTransitions;
  }
  public putNoncurrentVersionTransitions(value: S3BucketLifecycleConfigurationRulesNoncurrentVersionTransitions[] | cdktn.IResolvable) {
    this._noncurrentVersionTransitions.internalValue = value;
  }
  public resetNoncurrentVersionTransitions() {
    this._noncurrentVersionTransitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noncurrentVersionTransitionsInput() {
    return this._noncurrentVersionTransitions.internalValue;
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

  // tag_filters - computed: true, optional: true, required: false
  private _tagFilters = new S3BucketLifecycleConfigurationRulesTagFiltersList(this, "tag_filters", false);
  public get tagFilters() {
    return this._tagFilters;
  }
  public putTagFilters(value: S3BucketLifecycleConfigurationRulesTagFilters[] | cdktn.IResolvable) {
    this._tagFilters.internalValue = value;
  }
  public resetTagFilters() {
    this._tagFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters.internalValue;
  }

  // transition - computed: true, optional: true, required: false
  private _transition = new S3BucketLifecycleConfigurationRulesTransitionOutputReference(this, "transition");
  public get transition() {
    return this._transition;
  }
  public putTransition(value: S3BucketLifecycleConfigurationRulesTransition) {
    this._transition.internalValue = value;
  }
  public resetTransition() {
    this._transition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionInput() {
    return this._transition.internalValue;
  }

  // transitions - computed: true, optional: true, required: false
  private _transitions = new S3BucketLifecycleConfigurationRulesTransitionsList(this, "transitions", false);
  public get transitions() {
    return this._transitions;
  }
  public putTransitions(value: S3BucketLifecycleConfigurationRulesTransitions[] | cdktn.IResolvable) {
    this._transitions.internalValue = value;
  }
  public resetTransitions() {
    this._transitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionsInput() {
    return this._transitions.internalValue;
  }
}

export class S3BucketLifecycleConfigurationRulesList extends cdktn.ComplexList {
  public internalValue? : S3BucketLifecycleConfigurationRules[] | cdktn.IResolvable

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
  public get(index: number): S3BucketLifecycleConfigurationRulesOutputReference {
    return new S3BucketLifecycleConfigurationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketLifecycleConfiguration {
  /**
  * A lifecycle rule for individual objects in an Amazon S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#rules S3Bucket#rules}
  */
  readonly rules?: S3BucketLifecycleConfigurationRules[] | cdktn.IResolvable;
  /**
  * Indicates which default minimum object size behavior is applied to the lifecycle configuration.
  *   This parameter applies to general purpose buckets only. It isn't supported for directory bucket lifecycle configurations.
  *    +   ``all_storage_classes_128K`` - Objects smaller than 128 KB will not transition to any storage class by default.
  *   +   ``varies_by_storage_class`` - Objects smaller than 128 KB will transition to Glacier Flexible Retrieval or Glacier Deep Archive storage classes. By default, all other storage classes will prevent transitions smaller than 128 KB. 
  *   
  *  To customize the minimum object size for any transition you can add a filter that specifies a custom ``ObjectSizeGreaterThan`` or ``ObjectSizeLessThan`` in the body of your transition rule. Custom filters always take precedence over the default transition behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#transition_default_minimum_object_size S3Bucket#transition_default_minimum_object_size}
  */
  readonly transitionDefaultMinimumObjectSize?: string;
}

export function s3BucketLifecycleConfigurationToTerraform(struct?: S3BucketLifecycleConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rules: cdktn.listMapper(s3BucketLifecycleConfigurationRulesToTerraform, false)(struct!.rules),
    transition_default_minimum_object_size: cdktn.stringToTerraform(struct!.transitionDefaultMinimumObjectSize),
  }
}


export function s3BucketLifecycleConfigurationToHclTerraform(struct?: S3BucketLifecycleConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rules: {
      value: cdktn.listMapperHcl(s3BucketLifecycleConfigurationRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketLifecycleConfigurationRulesList",
    },
    transition_default_minimum_object_size: {
      value: cdktn.stringToHclTerraform(struct!.transitionDefaultMinimumObjectSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketLifecycleConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketLifecycleConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._transitionDefaultMinimumObjectSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitionDefaultMinimumObjectSize = this._transitionDefaultMinimumObjectSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketLifecycleConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rules.internalValue = undefined;
      this._transitionDefaultMinimumObjectSize = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rules.internalValue = value.rules;
      this._transitionDefaultMinimumObjectSize = value.transitionDefaultMinimumObjectSize;
    }
  }

  // rules - computed: true, optional: true, required: false
  private _rules = new S3BucketLifecycleConfigurationRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: S3BucketLifecycleConfigurationRules[] | cdktn.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // transition_default_minimum_object_size - computed: true, optional: true, required: false
  private _transitionDefaultMinimumObjectSize?: string; 
  public get transitionDefaultMinimumObjectSize() {
    return this.getStringAttribute('transition_default_minimum_object_size');
  }
  public set transitionDefaultMinimumObjectSize(value: string) {
    this._transitionDefaultMinimumObjectSize = value;
  }
  public resetTransitionDefaultMinimumObjectSize() {
    this._transitionDefaultMinimumObjectSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionDefaultMinimumObjectSizeInput() {
    return this._transitionDefaultMinimumObjectSize;
  }
}
export interface S3BucketLoggingConfigurationTargetObjectKeyFormatPartitionedPrefix {
  /**
  * Specifies the partition date source for the partitioned prefix. ``PartitionDateSource`` can be ``EventTime`` or ``DeliveryTime``.
  *  For ``DeliveryTime``, the time in the log file names corresponds to the delivery time for the log files. 
  *   For ``EventTime``, The logs delivered are for a specific day only. The year, month, and day correspond to the day on which the event occurred, and the hour, minutes and seconds are set to 00 in the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#partition_date_source S3Bucket#partition_date_source}
  */
  readonly partitionDateSource?: string;
}

export function s3BucketLoggingConfigurationTargetObjectKeyFormatPartitionedPrefixToTerraform(struct?: S3BucketLoggingConfigurationTargetObjectKeyFormatPartitionedPrefix | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    partition_date_source: cdktn.stringToTerraform(struct!.partitionDateSource),
  }
}


export function s3BucketLoggingConfigurationTargetObjectKeyFormatPartitionedPrefixToHclTerraform(struct?: S3BucketLoggingConfigurationTargetObjectKeyFormatPartitionedPrefix | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    partition_date_source: {
      value: cdktn.stringToHclTerraform(struct!.partitionDateSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketLoggingConfigurationTargetObjectKeyFormatPartitionedPrefixOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketLoggingConfigurationTargetObjectKeyFormatPartitionedPrefix | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partitionDateSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionDateSource = this._partitionDateSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketLoggingConfigurationTargetObjectKeyFormatPartitionedPrefix | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._partitionDateSource = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._partitionDateSource = value.partitionDateSource;
    }
  }

  // partition_date_source - computed: true, optional: true, required: false
  private _partitionDateSource?: string; 
  public get partitionDateSource() {
    return this.getStringAttribute('partition_date_source');
  }
  public set partitionDateSource(value: string) {
    this._partitionDateSource = value;
  }
  public resetPartitionDateSource() {
    this._partitionDateSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionDateSourceInput() {
    return this._partitionDateSource;
  }
}
export interface S3BucketLoggingConfigurationTargetObjectKeyFormat {
  /**
  * Amazon S3 keys for log objects are partitioned in the following format:
  *   ``[DestinationPrefix][SourceAccountId]/[SourceRegion]/[SourceBucket]/[YYYY]/[MM]/[DD]/[YYYY]-[MM]-[DD]-[hh]-[mm]-[ss]-[UniqueString]`` 
  *  PartitionedPrefix defaults to EventTime delivery when server access logs are delivered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#partitioned_prefix S3Bucket#partitioned_prefix}
  */
  readonly partitionedPrefix?: S3BucketLoggingConfigurationTargetObjectKeyFormatPartitionedPrefix;
  /**
  * This format defaults the prefix to the given log file prefix for delivering server access log file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#simple_prefix S3Bucket#simple_prefix}
  */
  readonly simplePrefix?: string;
}

export function s3BucketLoggingConfigurationTargetObjectKeyFormatToTerraform(struct?: S3BucketLoggingConfigurationTargetObjectKeyFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    partitioned_prefix: s3BucketLoggingConfigurationTargetObjectKeyFormatPartitionedPrefixToTerraform(struct!.partitionedPrefix),
    simple_prefix: cdktn.stringToTerraform(struct!.simplePrefix),
  }
}


export function s3BucketLoggingConfigurationTargetObjectKeyFormatToHclTerraform(struct?: S3BucketLoggingConfigurationTargetObjectKeyFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    partitioned_prefix: {
      value: s3BucketLoggingConfigurationTargetObjectKeyFormatPartitionedPrefixToHclTerraform(struct!.partitionedPrefix),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketLoggingConfigurationTargetObjectKeyFormatPartitionedPrefix",
    },
    simple_prefix: {
      value: cdktn.stringToHclTerraform(struct!.simplePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketLoggingConfigurationTargetObjectKeyFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketLoggingConfigurationTargetObjectKeyFormat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partitionedPrefix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionedPrefix = this._partitionedPrefix?.internalValue;
    }
    if (this._simplePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.simplePrefix = this._simplePrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketLoggingConfigurationTargetObjectKeyFormat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._partitionedPrefix.internalValue = undefined;
      this._simplePrefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._partitionedPrefix.internalValue = value.partitionedPrefix;
      this._simplePrefix = value.simplePrefix;
    }
  }

  // partitioned_prefix - computed: true, optional: true, required: false
  private _partitionedPrefix = new S3BucketLoggingConfigurationTargetObjectKeyFormatPartitionedPrefixOutputReference(this, "partitioned_prefix");
  public get partitionedPrefix() {
    return this._partitionedPrefix;
  }
  public putPartitionedPrefix(value: S3BucketLoggingConfigurationTargetObjectKeyFormatPartitionedPrefix) {
    this._partitionedPrefix.internalValue = value;
  }
  public resetPartitionedPrefix() {
    this._partitionedPrefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionedPrefixInput() {
    return this._partitionedPrefix.internalValue;
  }

  // simple_prefix - computed: true, optional: true, required: false
  private _simplePrefix?: string; 
  public get simplePrefix() {
    return this.getStringAttribute('simple_prefix');
  }
  public set simplePrefix(value: string) {
    this._simplePrefix = value;
  }
  public resetSimplePrefix() {
    this._simplePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simplePrefixInput() {
    return this._simplePrefix;
  }
}
export interface S3BucketLoggingConfiguration {
  /**
  * The name of the bucket where Amazon S3 should store server access log files. You can store log files in any bucket that you own. By default, logs are stored in the bucket where the ``LoggingConfiguration`` property is defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#destination_bucket_name S3Bucket#destination_bucket_name}
  */
  readonly destinationBucketName?: string;
  /**
  * A prefix for all log object keys. If you store log files from multiple Amazon S3 buckets in a single bucket, you can use a prefix to distinguish which log files came from which bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#log_file_prefix S3Bucket#log_file_prefix}
  */
  readonly logFilePrefix?: string;
  /**
  * Amazon S3 key format for log objects. Only one format, either PartitionedPrefix or SimplePrefix, is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#target_object_key_format S3Bucket#target_object_key_format}
  */
  readonly targetObjectKeyFormat?: S3BucketLoggingConfigurationTargetObjectKeyFormat;
}

export function s3BucketLoggingConfigurationToTerraform(struct?: S3BucketLoggingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_bucket_name: cdktn.stringToTerraform(struct!.destinationBucketName),
    log_file_prefix: cdktn.stringToTerraform(struct!.logFilePrefix),
    target_object_key_format: s3BucketLoggingConfigurationTargetObjectKeyFormatToTerraform(struct!.targetObjectKeyFormat),
  }
}


export function s3BucketLoggingConfigurationToHclTerraform(struct?: S3BucketLoggingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.destinationBucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_file_prefix: {
      value: cdktn.stringToHclTerraform(struct!.logFilePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_object_key_format: {
      value: s3BucketLoggingConfigurationTargetObjectKeyFormatToHclTerraform(struct!.targetObjectKeyFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketLoggingConfigurationTargetObjectKeyFormat",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketLoggingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketLoggingConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationBucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationBucketName = this._destinationBucketName;
    }
    if (this._logFilePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFilePrefix = this._logFilePrefix;
    }
    if (this._targetObjectKeyFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetObjectKeyFormat = this._targetObjectKeyFormat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketLoggingConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationBucketName = undefined;
      this._logFilePrefix = undefined;
      this._targetObjectKeyFormat.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationBucketName = value.destinationBucketName;
      this._logFilePrefix = value.logFilePrefix;
      this._targetObjectKeyFormat.internalValue = value.targetObjectKeyFormat;
    }
  }

  // destination_bucket_name - computed: true, optional: true, required: false
  private _destinationBucketName?: string; 
  public get destinationBucketName() {
    return this.getStringAttribute('destination_bucket_name');
  }
  public set destinationBucketName(value: string) {
    this._destinationBucketName = value;
  }
  public resetDestinationBucketName() {
    this._destinationBucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationBucketNameInput() {
    return this._destinationBucketName;
  }

  // log_file_prefix - computed: true, optional: true, required: false
  private _logFilePrefix?: string; 
  public get logFilePrefix() {
    return this.getStringAttribute('log_file_prefix');
  }
  public set logFilePrefix(value: string) {
    this._logFilePrefix = value;
  }
  public resetLogFilePrefix() {
    this._logFilePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFilePrefixInput() {
    return this._logFilePrefix;
  }

  // target_object_key_format - computed: true, optional: true, required: false
  private _targetObjectKeyFormat = new S3BucketLoggingConfigurationTargetObjectKeyFormatOutputReference(this, "target_object_key_format");
  public get targetObjectKeyFormat() {
    return this._targetObjectKeyFormat;
  }
  public putTargetObjectKeyFormat(value: S3BucketLoggingConfigurationTargetObjectKeyFormat) {
    this._targetObjectKeyFormat.internalValue = value;
  }
  public resetTargetObjectKeyFormat() {
    this._targetObjectKeyFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetObjectKeyFormatInput() {
    return this._targetObjectKeyFormat.internalValue;
  }
}
export interface S3BucketMetadataTableConfigurationS3TablesDestination {
  /**
  * The Amazon Resource Name (ARN) for the table bucket that's specified as the destination in the metadata table configuration. The destination table bucket must be in the same Region and AWS-account as the general purpose bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#table_bucket_arn S3Bucket#table_bucket_arn}
  */
  readonly tableBucketArn?: string;
  /**
  * The name for the metadata table in your metadata table configuration. The specified metadata table name must be unique within the ``aws_s3_metadata`` namespace in the destination table bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#table_name S3Bucket#table_name}
  */
  readonly tableName?: string;
}

export function s3BucketMetadataTableConfigurationS3TablesDestinationToTerraform(struct?: S3BucketMetadataTableConfigurationS3TablesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    table_bucket_arn: cdktn.stringToTerraform(struct!.tableBucketArn),
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function s3BucketMetadataTableConfigurationS3TablesDestinationToHclTerraform(struct?: S3BucketMetadataTableConfigurationS3TablesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    table_bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.tableBucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketMetadataTableConfigurationS3TablesDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketMetadataTableConfigurationS3TablesDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableBucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableBucketArn = this._tableBucketArn;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketMetadataTableConfigurationS3TablesDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tableBucketArn = undefined;
      this._tableName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tableBucketArn = value.tableBucketArn;
      this._tableName = value.tableName;
    }
  }

  // table_arn - computed: true, optional: false, required: false
  public get tableArn() {
    return this.getStringAttribute('table_arn');
  }

  // table_bucket_arn - computed: true, optional: true, required: false
  private _tableBucketArn?: string; 
  public get tableBucketArn() {
    return this.getStringAttribute('table_bucket_arn');
  }
  public set tableBucketArn(value: string) {
    this._tableBucketArn = value;
  }
  public resetTableBucketArn() {
    this._tableBucketArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableBucketArnInput() {
    return this._tableBucketArn;
  }

  // table_name - computed: true, optional: true, required: false
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // table_namespace - computed: true, optional: false, required: false
  public get tableNamespace() {
    return this.getStringAttribute('table_namespace');
  }
}
export interface S3BucketMetadataTableConfiguration {
  /**
  * The destination information for the metadata table configuration. The destination table bucket must be in the same Region and AWS-account as the general purpose bucket. The specified metadata table name must be unique within the ``aws_s3_metadata`` namespace in the destination table bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#s3_tables_destination S3Bucket#s3_tables_destination}
  */
  readonly s3TablesDestination?: S3BucketMetadataTableConfigurationS3TablesDestination;
}

export function s3BucketMetadataTableConfigurationToTerraform(struct?: S3BucketMetadataTableConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_tables_destination: s3BucketMetadataTableConfigurationS3TablesDestinationToTerraform(struct!.s3TablesDestination),
  }
}


export function s3BucketMetadataTableConfigurationToHclTerraform(struct?: S3BucketMetadataTableConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_tables_destination: {
      value: s3BucketMetadataTableConfigurationS3TablesDestinationToHclTerraform(struct!.s3TablesDestination),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketMetadataTableConfigurationS3TablesDestination",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketMetadataTableConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketMetadataTableConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3TablesDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3TablesDestination = this._s3TablesDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketMetadataTableConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3TablesDestination.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3TablesDestination.internalValue = value.s3TablesDestination;
    }
  }

  // s3_tables_destination - computed: true, optional: true, required: false
  private _s3TablesDestination = new S3BucketMetadataTableConfigurationS3TablesDestinationOutputReference(this, "s3_tables_destination");
  public get s3TablesDestination() {
    return this._s3TablesDestination;
  }
  public putS3TablesDestination(value: S3BucketMetadataTableConfigurationS3TablesDestination) {
    this._s3TablesDestination.internalValue = value;
  }
  public resetS3TablesDestination() {
    this._s3TablesDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3TablesDestinationInput() {
    return this._s3TablesDestination.internalValue;
  }
}
export interface S3BucketMetricsConfigurationsTagFilters {
  /**
  * The tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#key S3Bucket#key}
  */
  readonly key?: string;
  /**
  * The tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#value S3Bucket#value}
  */
  readonly value?: string;
}

export function s3BucketMetricsConfigurationsTagFiltersToTerraform(struct?: S3BucketMetricsConfigurationsTagFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function s3BucketMetricsConfigurationsTagFiltersToHclTerraform(struct?: S3BucketMetricsConfigurationsTagFilters | cdktn.IResolvable): any {
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

export class S3BucketMetricsConfigurationsTagFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3BucketMetricsConfigurationsTagFilters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3BucketMetricsConfigurationsTagFilters | cdktn.IResolvable | undefined) {
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

export class S3BucketMetricsConfigurationsTagFiltersList extends cdktn.ComplexList {
  public internalValue? : S3BucketMetricsConfigurationsTagFilters[] | cdktn.IResolvable

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
  public get(index: number): S3BucketMetricsConfigurationsTagFiltersOutputReference {
    return new S3BucketMetricsConfigurationsTagFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketMetricsConfigurations {
  /**
  * The access point that was used while performing operations on the object. The metrics configuration only includes objects that meet the filter's criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#access_point_arn S3Bucket#access_point_arn}
  */
  readonly accessPointArn?: string;
  /**
  * The ID used to identify the metrics configuration. This can be any value you choose that helps you identify your metrics configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#id S3Bucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The prefix that an object must have to be included in the metrics results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#prefix S3Bucket#prefix}
  */
  readonly prefix?: string;
  /**
  * Specifies a list of tag filters to use as a metrics configuration filter. The metrics configuration includes only objects that meet the filter's criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#tag_filters S3Bucket#tag_filters}
  */
  readonly tagFilters?: S3BucketMetricsConfigurationsTagFilters[] | cdktn.IResolvable;
}

export function s3BucketMetricsConfigurationsToTerraform(struct?: S3BucketMetricsConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_point_arn: cdktn.stringToTerraform(struct!.accessPointArn),
    id: cdktn.stringToTerraform(struct!.id),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    tag_filters: cdktn.listMapper(s3BucketMetricsConfigurationsTagFiltersToTerraform, false)(struct!.tagFilters),
  }
}


export function s3BucketMetricsConfigurationsToHclTerraform(struct?: S3BucketMetricsConfigurations | cdktn.IResolvable): any {
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
    tag_filters: {
      value: cdktn.listMapperHcl(s3BucketMetricsConfigurationsTagFiltersToHclTerraform, false)(struct!.tagFilters),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketMetricsConfigurationsTagFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketMetricsConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3BucketMetricsConfigurations | cdktn.IResolvable | undefined {
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
    if (this._tagFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagFilters = this._tagFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketMetricsConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessPointArn = undefined;
      this._id = undefined;
      this._prefix = undefined;
      this._tagFilters.internalValue = undefined;
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
      this._tagFilters.internalValue = value.tagFilters;
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

  // tag_filters - computed: true, optional: true, required: false
  private _tagFilters = new S3BucketMetricsConfigurationsTagFiltersList(this, "tag_filters", false);
  public get tagFilters() {
    return this._tagFilters;
  }
  public putTagFilters(value: S3BucketMetricsConfigurationsTagFilters[] | cdktn.IResolvable) {
    this._tagFilters.internalValue = value;
  }
  public resetTagFilters() {
    this._tagFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters.internalValue;
  }
}

export class S3BucketMetricsConfigurationsList extends cdktn.ComplexList {
  public internalValue? : S3BucketMetricsConfigurations[] | cdktn.IResolvable

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
  public get(index: number): S3BucketMetricsConfigurationsOutputReference {
    return new S3BucketMetricsConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketNotificationConfigurationEventBridgeConfiguration {
  /**
  * Enables delivery of events to Amazon EventBridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#event_bridge_enabled S3Bucket#event_bridge_enabled}
  */
  readonly eventBridgeEnabled?: boolean | cdktn.IResolvable;
}

export function s3BucketNotificationConfigurationEventBridgeConfigurationToTerraform(struct?: S3BucketNotificationConfigurationEventBridgeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_bridge_enabled: cdktn.booleanToTerraform(struct!.eventBridgeEnabled),
  }
}


export function s3BucketNotificationConfigurationEventBridgeConfigurationToHclTerraform(struct?: S3BucketNotificationConfigurationEventBridgeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_bridge_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.eventBridgeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketNotificationConfigurationEventBridgeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketNotificationConfigurationEventBridgeConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventBridgeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventBridgeEnabled = this._eventBridgeEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketNotificationConfigurationEventBridgeConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventBridgeEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventBridgeEnabled = value.eventBridgeEnabled;
    }
  }

  // event_bridge_enabled - computed: true, optional: true, required: false
  private _eventBridgeEnabled?: boolean | cdktn.IResolvable; 
  public get eventBridgeEnabled() {
    return this.getBooleanAttribute('event_bridge_enabled');
  }
  public set eventBridgeEnabled(value: boolean | cdktn.IResolvable) {
    this._eventBridgeEnabled = value;
  }
  public resetEventBridgeEnabled() {
    this._eventBridgeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBridgeEnabledInput() {
    return this._eventBridgeEnabled;
  }
}
export interface S3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyRules {
  /**
  * The object key name prefix or suffix identifying one or more objects to which the filtering rule applies. The maximum length is 1,024 characters. Overlapping prefixes and suffixes are not supported. For more information, see [Configuring Event Notifications](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html) in the *Amazon S3 User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#name S3Bucket#name}
  */
  readonly name?: string;
  /**
  * The value that the filter searches for in object key names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#value S3Bucket#value}
  */
  readonly value?: string;
}

export function s3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyRulesToTerraform(struct?: S3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function s3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyRulesToHclTerraform(struct?: S3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyRules | cdktn.IResolvable): any {
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

export class S3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class S3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyRulesList extends cdktn.ComplexList {
  public internalValue? : S3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyRules[] | cdktn.IResolvable

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
  public get(index: number): S3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyRulesOutputReference {
    return new S3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketNotificationConfigurationLambdaConfigurationsFilterS3Key {
  /**
  * A list of containers for the key-value pair that defines the criteria for the filter rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#rules S3Bucket#rules}
  */
  readonly rules?: S3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyRules[] | cdktn.IResolvable;
}

export function s3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyToTerraform(struct?: S3BucketNotificationConfigurationLambdaConfigurationsFilterS3Key | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rules: cdktn.listMapper(s3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyRulesToTerraform, false)(struct!.rules),
  }
}


export function s3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyToHclTerraform(struct?: S3BucketNotificationConfigurationLambdaConfigurationsFilterS3Key | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rules: {
      value: cdktn.listMapperHcl(s3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "set",
      storageClassType: "S3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketNotificationConfigurationLambdaConfigurationsFilterS3Key | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3BucketNotificationConfigurationLambdaConfigurationsFilterS3Key | cdktn.IResolvable | undefined) {
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
  private _rules = new S3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: S3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyRules[] | cdktn.IResolvable) {
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
export interface S3BucketNotificationConfigurationLambdaConfigurationsFilter {
  /**
  * A container for object key name prefix and suffix filtering rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#s3_key S3Bucket#s3_key}
  */
  readonly s3Key?: S3BucketNotificationConfigurationLambdaConfigurationsFilterS3Key;
}

export function s3BucketNotificationConfigurationLambdaConfigurationsFilterToTerraform(struct?: S3BucketNotificationConfigurationLambdaConfigurationsFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_key: s3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyToTerraform(struct!.s3Key),
  }
}


export function s3BucketNotificationConfigurationLambdaConfigurationsFilterToHclTerraform(struct?: S3BucketNotificationConfigurationLambdaConfigurationsFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_key: {
      value: s3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyToHclTerraform(struct!.s3Key),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketNotificationConfigurationLambdaConfigurationsFilterS3Key",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketNotificationConfigurationLambdaConfigurationsFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketNotificationConfigurationLambdaConfigurationsFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Key = this._s3Key?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketNotificationConfigurationLambdaConfigurationsFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Key.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Key.internalValue = value.s3Key;
    }
  }

  // s3_key - computed: true, optional: true, required: false
  private _s3Key = new S3BucketNotificationConfigurationLambdaConfigurationsFilterS3KeyOutputReference(this, "s3_key");
  public get s3Key() {
    return this._s3Key;
  }
  public putS3Key(value: S3BucketNotificationConfigurationLambdaConfigurationsFilterS3Key) {
    this._s3Key.internalValue = value;
  }
  public resetS3Key() {
    this._s3Key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyInput() {
    return this._s3Key.internalValue;
  }
}
export interface S3BucketNotificationConfigurationLambdaConfigurations {
  /**
  * The Amazon S3 bucket event for which to invoke the LAMlong function. For more information, see [Supported Event Types](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html) in the *Amazon S3 User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#event S3Bucket#event}
  */
  readonly event?: string;
  /**
  * The filtering rules that determine which objects invoke the AWS Lambda function. For example, you can create a filter so that only image files with a ``.jpg`` extension invoke the function when they are added to the Amazon S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#filter S3Bucket#filter}
  */
  readonly filter?: S3BucketNotificationConfigurationLambdaConfigurationsFilter;
  /**
  * The Amazon Resource Name (ARN) of the LAMlong function that Amazon S3 invokes when the specified event type occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#function S3Bucket#function}
  */
  readonly function?: string;
}

export function s3BucketNotificationConfigurationLambdaConfigurationsToTerraform(struct?: S3BucketNotificationConfigurationLambdaConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event: cdktn.stringToTerraform(struct!.event),
    filter: s3BucketNotificationConfigurationLambdaConfigurationsFilterToTerraform(struct!.filter),
    function: cdktn.stringToTerraform(struct!.function),
  }
}


export function s3BucketNotificationConfigurationLambdaConfigurationsToHclTerraform(struct?: S3BucketNotificationConfigurationLambdaConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event: {
      value: cdktn.stringToHclTerraform(struct!.event),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: s3BucketNotificationConfigurationLambdaConfigurationsFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketNotificationConfigurationLambdaConfigurationsFilter",
    },
    function: {
      value: cdktn.stringToHclTerraform(struct!.function),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketNotificationConfigurationLambdaConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3BucketNotificationConfigurationLambdaConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._event !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._function !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketNotificationConfigurationLambdaConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._event = undefined;
      this._filter.internalValue = undefined;
      this._function = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._event = value.event;
      this._filter.internalValue = value.filter;
      this._function = value.function;
    }
  }

  // event - computed: true, optional: true, required: false
  private _event?: string; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string) {
    this._event = value;
  }
  public resetEvent() {
    this._event = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }

  // filter - computed: true, optional: true, required: false
  private _filter = new S3BucketNotificationConfigurationLambdaConfigurationsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: S3BucketNotificationConfigurationLambdaConfigurationsFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // function - computed: true, optional: true, required: false
  private _function?: string; 
  public get function() {
    return this.getStringAttribute('function');
  }
  public set function(value: string) {
    this._function = value;
  }
  public resetFunction() {
    this._function = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
  }
}

export class S3BucketNotificationConfigurationLambdaConfigurationsList extends cdktn.ComplexList {
  public internalValue? : S3BucketNotificationConfigurationLambdaConfigurations[] | cdktn.IResolvable

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
  public get(index: number): S3BucketNotificationConfigurationLambdaConfigurationsOutputReference {
    return new S3BucketNotificationConfigurationLambdaConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyRules {
  /**
  * The object key name prefix or suffix identifying one or more objects to which the filtering rule applies. The maximum length is 1,024 characters. Overlapping prefixes and suffixes are not supported. For more information, see [Configuring Event Notifications](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html) in the *Amazon S3 User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#name S3Bucket#name}
  */
  readonly name?: string;
  /**
  * The value that the filter searches for in object key names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#value S3Bucket#value}
  */
  readonly value?: string;
}

export function s3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyRulesToTerraform(struct?: S3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function s3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyRulesToHclTerraform(struct?: S3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyRules | cdktn.IResolvable): any {
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

export class S3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class S3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyRulesList extends cdktn.ComplexList {
  public internalValue? : S3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyRules[] | cdktn.IResolvable

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
  public get(index: number): S3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyRulesOutputReference {
    return new S3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketNotificationConfigurationQueueConfigurationsFilterS3Key {
  /**
  * A list of containers for the key-value pair that defines the criteria for the filter rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#rules S3Bucket#rules}
  */
  readonly rules?: S3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyRules[] | cdktn.IResolvable;
}

export function s3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyToTerraform(struct?: S3BucketNotificationConfigurationQueueConfigurationsFilterS3Key | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rules: cdktn.listMapper(s3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyRulesToTerraform, false)(struct!.rules),
  }
}


export function s3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyToHclTerraform(struct?: S3BucketNotificationConfigurationQueueConfigurationsFilterS3Key | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rules: {
      value: cdktn.listMapperHcl(s3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "set",
      storageClassType: "S3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketNotificationConfigurationQueueConfigurationsFilterS3Key | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3BucketNotificationConfigurationQueueConfigurationsFilterS3Key | cdktn.IResolvable | undefined) {
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
  private _rules = new S3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: S3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyRules[] | cdktn.IResolvable) {
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
export interface S3BucketNotificationConfigurationQueueConfigurationsFilter {
  /**
  * A container for object key name prefix and suffix filtering rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#s3_key S3Bucket#s3_key}
  */
  readonly s3Key?: S3BucketNotificationConfigurationQueueConfigurationsFilterS3Key;
}

export function s3BucketNotificationConfigurationQueueConfigurationsFilterToTerraform(struct?: S3BucketNotificationConfigurationQueueConfigurationsFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_key: s3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyToTerraform(struct!.s3Key),
  }
}


export function s3BucketNotificationConfigurationQueueConfigurationsFilterToHclTerraform(struct?: S3BucketNotificationConfigurationQueueConfigurationsFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_key: {
      value: s3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyToHclTerraform(struct!.s3Key),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketNotificationConfigurationQueueConfigurationsFilterS3Key",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketNotificationConfigurationQueueConfigurationsFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketNotificationConfigurationQueueConfigurationsFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Key = this._s3Key?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketNotificationConfigurationQueueConfigurationsFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Key.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Key.internalValue = value.s3Key;
    }
  }

  // s3_key - computed: true, optional: true, required: false
  private _s3Key = new S3BucketNotificationConfigurationQueueConfigurationsFilterS3KeyOutputReference(this, "s3_key");
  public get s3Key() {
    return this._s3Key;
  }
  public putS3Key(value: S3BucketNotificationConfigurationQueueConfigurationsFilterS3Key) {
    this._s3Key.internalValue = value;
  }
  public resetS3Key() {
    this._s3Key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyInput() {
    return this._s3Key.internalValue;
  }
}
export interface S3BucketNotificationConfigurationQueueConfigurations {
  /**
  * The Amazon S3 bucket event about which you want to publish messages to Amazon SQS. For more information, see [Supported Event Types](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html) in the *Amazon S3 User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#event S3Bucket#event}
  */
  readonly event?: string;
  /**
  * The filtering rules that determine which objects trigger notifications. For example, you can create a filter so that Amazon S3 sends notifications only when image files with a ``.jpg`` extension are added to the bucket. For more information, see [Configuring event notifications using object key name filtering](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/notification-how-to-filtering.html) in the *Amazon S3 User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#filter S3Bucket#filter}
  */
  readonly filter?: S3BucketNotificationConfigurationQueueConfigurationsFilter;
  /**
  * The Amazon Resource Name (ARN) of the Amazon SQS queue to which Amazon S3 publishes a message when it detects events of the specified type. FIFO queues are not allowed when enabling an SQS queue as the event notification destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#queue S3Bucket#queue}
  */
  readonly queue?: string;
}

export function s3BucketNotificationConfigurationQueueConfigurationsToTerraform(struct?: S3BucketNotificationConfigurationQueueConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event: cdktn.stringToTerraform(struct!.event),
    filter: s3BucketNotificationConfigurationQueueConfigurationsFilterToTerraform(struct!.filter),
    queue: cdktn.stringToTerraform(struct!.queue),
  }
}


export function s3BucketNotificationConfigurationQueueConfigurationsToHclTerraform(struct?: S3BucketNotificationConfigurationQueueConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event: {
      value: cdktn.stringToHclTerraform(struct!.event),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: s3BucketNotificationConfigurationQueueConfigurationsFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketNotificationConfigurationQueueConfigurationsFilter",
    },
    queue: {
      value: cdktn.stringToHclTerraform(struct!.queue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketNotificationConfigurationQueueConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3BucketNotificationConfigurationQueueConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._event !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._queue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queue = this._queue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketNotificationConfigurationQueueConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._event = undefined;
      this._filter.internalValue = undefined;
      this._queue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._event = value.event;
      this._filter.internalValue = value.filter;
      this._queue = value.queue;
    }
  }

  // event - computed: true, optional: true, required: false
  private _event?: string; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string) {
    this._event = value;
  }
  public resetEvent() {
    this._event = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }

  // filter - computed: true, optional: true, required: false
  private _filter = new S3BucketNotificationConfigurationQueueConfigurationsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: S3BucketNotificationConfigurationQueueConfigurationsFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // queue - computed: true, optional: true, required: false
  private _queue?: string; 
  public get queue() {
    return this.getStringAttribute('queue');
  }
  public set queue(value: string) {
    this._queue = value;
  }
  public resetQueue() {
    this._queue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue;
  }
}

export class S3BucketNotificationConfigurationQueueConfigurationsList extends cdktn.ComplexList {
  public internalValue? : S3BucketNotificationConfigurationQueueConfigurations[] | cdktn.IResolvable

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
  public get(index: number): S3BucketNotificationConfigurationQueueConfigurationsOutputReference {
    return new S3BucketNotificationConfigurationQueueConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyRules {
  /**
  * The object key name prefix or suffix identifying one or more objects to which the filtering rule applies. The maximum length is 1,024 characters. Overlapping prefixes and suffixes are not supported. For more information, see [Configuring Event Notifications](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html) in the *Amazon S3 User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#name S3Bucket#name}
  */
  readonly name?: string;
  /**
  * The value that the filter searches for in object key names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#value S3Bucket#value}
  */
  readonly value?: string;
}

export function s3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyRulesToTerraform(struct?: S3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function s3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyRulesToHclTerraform(struct?: S3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyRules | cdktn.IResolvable): any {
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

export class S3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class S3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyRulesList extends cdktn.ComplexList {
  public internalValue? : S3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyRules[] | cdktn.IResolvable

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
  public get(index: number): S3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyRulesOutputReference {
    return new S3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketNotificationConfigurationTopicConfigurationsFilterS3Key {
  /**
  * A list of containers for the key-value pair that defines the criteria for the filter rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#rules S3Bucket#rules}
  */
  readonly rules?: S3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyRules[] | cdktn.IResolvable;
}

export function s3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyToTerraform(struct?: S3BucketNotificationConfigurationTopicConfigurationsFilterS3Key | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rules: cdktn.listMapper(s3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyRulesToTerraform, false)(struct!.rules),
  }
}


export function s3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyToHclTerraform(struct?: S3BucketNotificationConfigurationTopicConfigurationsFilterS3Key | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rules: {
      value: cdktn.listMapperHcl(s3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "set",
      storageClassType: "S3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketNotificationConfigurationTopicConfigurationsFilterS3Key | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3BucketNotificationConfigurationTopicConfigurationsFilterS3Key | cdktn.IResolvable | undefined) {
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
  private _rules = new S3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: S3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyRules[] | cdktn.IResolvable) {
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
export interface S3BucketNotificationConfigurationTopicConfigurationsFilter {
  /**
  * A container for object key name prefix and suffix filtering rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#s3_key S3Bucket#s3_key}
  */
  readonly s3Key?: S3BucketNotificationConfigurationTopicConfigurationsFilterS3Key;
}

export function s3BucketNotificationConfigurationTopicConfigurationsFilterToTerraform(struct?: S3BucketNotificationConfigurationTopicConfigurationsFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_key: s3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyToTerraform(struct!.s3Key),
  }
}


export function s3BucketNotificationConfigurationTopicConfigurationsFilterToHclTerraform(struct?: S3BucketNotificationConfigurationTopicConfigurationsFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_key: {
      value: s3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyToHclTerraform(struct!.s3Key),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketNotificationConfigurationTopicConfigurationsFilterS3Key",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketNotificationConfigurationTopicConfigurationsFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketNotificationConfigurationTopicConfigurationsFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Key = this._s3Key?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketNotificationConfigurationTopicConfigurationsFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Key.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Key.internalValue = value.s3Key;
    }
  }

  // s3_key - computed: true, optional: true, required: false
  private _s3Key = new S3BucketNotificationConfigurationTopicConfigurationsFilterS3KeyOutputReference(this, "s3_key");
  public get s3Key() {
    return this._s3Key;
  }
  public putS3Key(value: S3BucketNotificationConfigurationTopicConfigurationsFilterS3Key) {
    this._s3Key.internalValue = value;
  }
  public resetS3Key() {
    this._s3Key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyInput() {
    return this._s3Key.internalValue;
  }
}
export interface S3BucketNotificationConfigurationTopicConfigurations {
  /**
  * The Amazon S3 bucket event about which to send notifications. For more information, see [Supported Event Types](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html) in the *Amazon S3 User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#event S3Bucket#event}
  */
  readonly event?: string;
  /**
  * The filtering rules that determine for which objects to send notifications. For example, you can create a filter so that Amazon S3 sends notifications only when image files with a ``.jpg`` extension are added to the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#filter S3Bucket#filter}
  */
  readonly filter?: S3BucketNotificationConfigurationTopicConfigurationsFilter;
  /**
  * The Amazon Resource Name (ARN) of the Amazon SNS topic to which Amazon S3 publishes a message when it detects events of the specified type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#topic S3Bucket#topic}
  */
  readonly topic?: string;
}

export function s3BucketNotificationConfigurationTopicConfigurationsToTerraform(struct?: S3BucketNotificationConfigurationTopicConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event: cdktn.stringToTerraform(struct!.event),
    filter: s3BucketNotificationConfigurationTopicConfigurationsFilterToTerraform(struct!.filter),
    topic: cdktn.stringToTerraform(struct!.topic),
  }
}


export function s3BucketNotificationConfigurationTopicConfigurationsToHclTerraform(struct?: S3BucketNotificationConfigurationTopicConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event: {
      value: cdktn.stringToHclTerraform(struct!.event),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: s3BucketNotificationConfigurationTopicConfigurationsFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketNotificationConfigurationTopicConfigurationsFilter",
    },
    topic: {
      value: cdktn.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketNotificationConfigurationTopicConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3BucketNotificationConfigurationTopicConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._event !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketNotificationConfigurationTopicConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._event = undefined;
      this._filter.internalValue = undefined;
      this._topic = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._event = value.event;
      this._filter.internalValue = value.filter;
      this._topic = value.topic;
    }
  }

  // event - computed: true, optional: true, required: false
  private _event?: string; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string) {
    this._event = value;
  }
  public resetEvent() {
    this._event = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }

  // filter - computed: true, optional: true, required: false
  private _filter = new S3BucketNotificationConfigurationTopicConfigurationsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: S3BucketNotificationConfigurationTopicConfigurationsFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // topic - computed: true, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}

export class S3BucketNotificationConfigurationTopicConfigurationsList extends cdktn.ComplexList {
  public internalValue? : S3BucketNotificationConfigurationTopicConfigurations[] | cdktn.IResolvable

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
  public get(index: number): S3BucketNotificationConfigurationTopicConfigurationsOutputReference {
    return new S3BucketNotificationConfigurationTopicConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketNotificationConfiguration {
  /**
  * Enables delivery of events to Amazon EventBridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#event_bridge_configuration S3Bucket#event_bridge_configuration}
  */
  readonly eventBridgeConfiguration?: S3BucketNotificationConfigurationEventBridgeConfiguration;
  /**
  * Describes the LAMlong functions to invoke and the events for which to invoke them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#lambda_configurations S3Bucket#lambda_configurations}
  */
  readonly lambdaConfigurations?: S3BucketNotificationConfigurationLambdaConfigurations[] | cdktn.IResolvable;
  /**
  * The Amazon Simple Queue Service queues to publish messages to and the events for which to publish messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#queue_configurations S3Bucket#queue_configurations}
  */
  readonly queueConfigurations?: S3BucketNotificationConfigurationQueueConfigurations[] | cdktn.IResolvable;
  /**
  * The topic to which notifications are sent and the events for which notifications are generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#topic_configurations S3Bucket#topic_configurations}
  */
  readonly topicConfigurations?: S3BucketNotificationConfigurationTopicConfigurations[] | cdktn.IResolvable;
}

export function s3BucketNotificationConfigurationToTerraform(struct?: S3BucketNotificationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_bridge_configuration: s3BucketNotificationConfigurationEventBridgeConfigurationToTerraform(struct!.eventBridgeConfiguration),
    lambda_configurations: cdktn.listMapper(s3BucketNotificationConfigurationLambdaConfigurationsToTerraform, false)(struct!.lambdaConfigurations),
    queue_configurations: cdktn.listMapper(s3BucketNotificationConfigurationQueueConfigurationsToTerraform, false)(struct!.queueConfigurations),
    topic_configurations: cdktn.listMapper(s3BucketNotificationConfigurationTopicConfigurationsToTerraform, false)(struct!.topicConfigurations),
  }
}


export function s3BucketNotificationConfigurationToHclTerraform(struct?: S3BucketNotificationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_bridge_configuration: {
      value: s3BucketNotificationConfigurationEventBridgeConfigurationToHclTerraform(struct!.eventBridgeConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketNotificationConfigurationEventBridgeConfiguration",
    },
    lambda_configurations: {
      value: cdktn.listMapperHcl(s3BucketNotificationConfigurationLambdaConfigurationsToHclTerraform, false)(struct!.lambdaConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketNotificationConfigurationLambdaConfigurationsList",
    },
    queue_configurations: {
      value: cdktn.listMapperHcl(s3BucketNotificationConfigurationQueueConfigurationsToHclTerraform, false)(struct!.queueConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketNotificationConfigurationQueueConfigurationsList",
    },
    topic_configurations: {
      value: cdktn.listMapperHcl(s3BucketNotificationConfigurationTopicConfigurationsToHclTerraform, false)(struct!.topicConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketNotificationConfigurationTopicConfigurationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketNotificationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketNotificationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventBridgeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventBridgeConfiguration = this._eventBridgeConfiguration?.internalValue;
    }
    if (this._lambdaConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaConfigurations = this._lambdaConfigurations?.internalValue;
    }
    if (this._queueConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueConfigurations = this._queueConfigurations?.internalValue;
    }
    if (this._topicConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicConfigurations = this._topicConfigurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketNotificationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventBridgeConfiguration.internalValue = undefined;
      this._lambdaConfigurations.internalValue = undefined;
      this._queueConfigurations.internalValue = undefined;
      this._topicConfigurations.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventBridgeConfiguration.internalValue = value.eventBridgeConfiguration;
      this._lambdaConfigurations.internalValue = value.lambdaConfigurations;
      this._queueConfigurations.internalValue = value.queueConfigurations;
      this._topicConfigurations.internalValue = value.topicConfigurations;
    }
  }

  // event_bridge_configuration - computed: true, optional: true, required: false
  private _eventBridgeConfiguration = new S3BucketNotificationConfigurationEventBridgeConfigurationOutputReference(this, "event_bridge_configuration");
  public get eventBridgeConfiguration() {
    return this._eventBridgeConfiguration;
  }
  public putEventBridgeConfiguration(value: S3BucketNotificationConfigurationEventBridgeConfiguration) {
    this._eventBridgeConfiguration.internalValue = value;
  }
  public resetEventBridgeConfiguration() {
    this._eventBridgeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBridgeConfigurationInput() {
    return this._eventBridgeConfiguration.internalValue;
  }

  // lambda_configurations - computed: true, optional: true, required: false
  private _lambdaConfigurations = new S3BucketNotificationConfigurationLambdaConfigurationsList(this, "lambda_configurations", false);
  public get lambdaConfigurations() {
    return this._lambdaConfigurations;
  }
  public putLambdaConfigurations(value: S3BucketNotificationConfigurationLambdaConfigurations[] | cdktn.IResolvable) {
    this._lambdaConfigurations.internalValue = value;
  }
  public resetLambdaConfigurations() {
    this._lambdaConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaConfigurationsInput() {
    return this._lambdaConfigurations.internalValue;
  }

  // queue_configurations - computed: true, optional: true, required: false
  private _queueConfigurations = new S3BucketNotificationConfigurationQueueConfigurationsList(this, "queue_configurations", false);
  public get queueConfigurations() {
    return this._queueConfigurations;
  }
  public putQueueConfigurations(value: S3BucketNotificationConfigurationQueueConfigurations[] | cdktn.IResolvable) {
    this._queueConfigurations.internalValue = value;
  }
  public resetQueueConfigurations() {
    this._queueConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueConfigurationsInput() {
    return this._queueConfigurations.internalValue;
  }

  // topic_configurations - computed: true, optional: true, required: false
  private _topicConfigurations = new S3BucketNotificationConfigurationTopicConfigurationsList(this, "topic_configurations", false);
  public get topicConfigurations() {
    return this._topicConfigurations;
  }
  public putTopicConfigurations(value: S3BucketNotificationConfigurationTopicConfigurations[] | cdktn.IResolvable) {
    this._topicConfigurations.internalValue = value;
  }
  public resetTopicConfigurations() {
    this._topicConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicConfigurationsInput() {
    return this._topicConfigurations.internalValue;
  }
}
export interface S3BucketObjectLockConfigurationRuleDefaultRetention {
  /**
  * The number of days that you want to specify for the default retention period. If Object Lock is turned on, you must specify ``Mode`` and specify either ``Days`` or ``Years``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#days S3Bucket#days}
  */
  readonly days?: number;
  /**
  * The default Object Lock retention mode you want to apply to new objects placed in the specified bucket. If Object Lock is turned on, you must specify ``Mode`` and specify either ``Days`` or ``Years``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#mode S3Bucket#mode}
  */
  readonly mode?: string;
  /**
  * The number of years that you want to specify for the default retention period. If Object Lock is turned on, you must specify ``Mode`` and specify either ``Days`` or ``Years``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#years S3Bucket#years}
  */
  readonly years?: number;
}

export function s3BucketObjectLockConfigurationRuleDefaultRetentionToTerraform(struct?: S3BucketObjectLockConfigurationRuleDefaultRetention | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    days: cdktn.numberToTerraform(struct!.days),
    mode: cdktn.stringToTerraform(struct!.mode),
    years: cdktn.numberToTerraform(struct!.years),
  }
}


export function s3BucketObjectLockConfigurationRuleDefaultRetentionToHclTerraform(struct?: S3BucketObjectLockConfigurationRuleDefaultRetention | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    days: {
      value: cdktn.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    years: {
      value: cdktn.numberToHclTerraform(struct!.years),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketObjectLockConfigurationRuleDefaultRetention | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._years !== undefined) {
      hasAnyValues = true;
      internalValueResult.years = this._years;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketObjectLockConfigurationRuleDefaultRetention | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
      this._mode = undefined;
      this._years = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
      this._mode = value.mode;
      this._years = value.years;
    }
  }

  // days - computed: true, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // years - computed: true, optional: true, required: false
  private _years?: number; 
  public get years() {
    return this.getNumberAttribute('years');
  }
  public set years(value: number) {
    this._years = value;
  }
  public resetYears() {
    this._years = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearsInput() {
    return this._years;
  }
}
export interface S3BucketObjectLockConfigurationRule {
  /**
  * The default Object Lock retention mode and period that you want to apply to new objects placed in the specified bucket. If Object Lock is turned on, bucket settings require both ``Mode`` and a period of either ``Days`` or ``Years``. You cannot specify ``Days`` and ``Years`` at the same time. For more information about allowable values for mode and period, see [DefaultRetention](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-defaultretention.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#default_retention S3Bucket#default_retention}
  */
  readonly defaultRetention?: S3BucketObjectLockConfigurationRuleDefaultRetention;
}

export function s3BucketObjectLockConfigurationRuleToTerraform(struct?: S3BucketObjectLockConfigurationRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_retention: s3BucketObjectLockConfigurationRuleDefaultRetentionToTerraform(struct!.defaultRetention),
  }
}


export function s3BucketObjectLockConfigurationRuleToHclTerraform(struct?: S3BucketObjectLockConfigurationRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_retention: {
      value: s3BucketObjectLockConfigurationRuleDefaultRetentionToHclTerraform(struct!.defaultRetention),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketObjectLockConfigurationRuleDefaultRetention",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketObjectLockConfigurationRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketObjectLockConfigurationRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRetention = this._defaultRetention?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketObjectLockConfigurationRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultRetention.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultRetention.internalValue = value.defaultRetention;
    }
  }

  // default_retention - computed: true, optional: true, required: false
  private _defaultRetention = new S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference(this, "default_retention");
  public get defaultRetention() {
    return this._defaultRetention;
  }
  public putDefaultRetention(value: S3BucketObjectLockConfigurationRuleDefaultRetention) {
    this._defaultRetention.internalValue = value;
  }
  public resetDefaultRetention() {
    this._defaultRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRetentionInput() {
    return this._defaultRetention.internalValue;
  }
}
export interface S3BucketObjectLockConfiguration {
  /**
  * Indicates whether this bucket has an Object Lock configuration enabled. Enable ``ObjectLockEnabled`` when you apply ``ObjectLockConfiguration`` to a bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#object_lock_enabled S3Bucket#object_lock_enabled}
  */
  readonly objectLockEnabled?: string;
  /**
  * Specifies the Object Lock rule for the specified object. Enable this rule when you apply ``ObjectLockConfiguration`` to a bucket. If Object Lock is turned on, bucket settings require both ``Mode`` and a period of either ``Days`` or ``Years``. You cannot specify ``Days`` and ``Years`` at the same time. For more information, see [ObjectLockRule](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-objectlockrule.html) and [DefaultRetention](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-defaultretention.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#rule S3Bucket#rule}
  */
  readonly rule?: S3BucketObjectLockConfigurationRule;
}

export function s3BucketObjectLockConfigurationToTerraform(struct?: S3BucketObjectLockConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object_lock_enabled: cdktn.stringToTerraform(struct!.objectLockEnabled),
    rule: s3BucketObjectLockConfigurationRuleToTerraform(struct!.rule),
  }
}


export function s3BucketObjectLockConfigurationToHclTerraform(struct?: S3BucketObjectLockConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object_lock_enabled: {
      value: cdktn.stringToHclTerraform(struct!.objectLockEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule: {
      value: s3BucketObjectLockConfigurationRuleToHclTerraform(struct!.rule),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketObjectLockConfigurationRule",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketObjectLockConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketObjectLockConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectLockEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectLockEnabled = this._objectLockEnabled;
    }
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketObjectLockConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectLockEnabled = undefined;
      this._rule.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectLockEnabled = value.objectLockEnabled;
      this._rule.internalValue = value.rule;
    }
  }

  // object_lock_enabled - computed: true, optional: true, required: false
  private _objectLockEnabled?: string; 
  public get objectLockEnabled() {
    return this.getStringAttribute('object_lock_enabled');
  }
  public set objectLockEnabled(value: string) {
    this._objectLockEnabled = value;
  }
  public resetObjectLockEnabled() {
    this._objectLockEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLockEnabledInput() {
    return this._objectLockEnabled;
  }

  // rule - computed: true, optional: true, required: false
  private _rule = new S3BucketObjectLockConfigurationRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: S3BucketObjectLockConfigurationRule) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}
export interface S3BucketOwnershipControlsRules {
  /**
  * Specifies an object ownership rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#object_ownership S3Bucket#object_ownership}
  */
  readonly objectOwnership?: string;
}

export function s3BucketOwnershipControlsRulesToTerraform(struct?: S3BucketOwnershipControlsRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object_ownership: cdktn.stringToTerraform(struct!.objectOwnership),
  }
}


export function s3BucketOwnershipControlsRulesToHclTerraform(struct?: S3BucketOwnershipControlsRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object_ownership: {
      value: cdktn.stringToHclTerraform(struct!.objectOwnership),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketOwnershipControlsRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3BucketOwnershipControlsRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectOwnership !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectOwnership = this._objectOwnership;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketOwnershipControlsRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectOwnership = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectOwnership = value.objectOwnership;
    }
  }

  // object_ownership - computed: true, optional: true, required: false
  private _objectOwnership?: string; 
  public get objectOwnership() {
    return this.getStringAttribute('object_ownership');
  }
  public set objectOwnership(value: string) {
    this._objectOwnership = value;
  }
  public resetObjectOwnership() {
    this._objectOwnership = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectOwnershipInput() {
    return this._objectOwnership;
  }
}

export class S3BucketOwnershipControlsRulesList extends cdktn.ComplexList {
  public internalValue? : S3BucketOwnershipControlsRules[] | cdktn.IResolvable

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
  public get(index: number): S3BucketOwnershipControlsRulesOutputReference {
    return new S3BucketOwnershipControlsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketOwnershipControls {
  /**
  * Specifies the container element for Object Ownership rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#rules S3Bucket#rules}
  */
  readonly rules?: S3BucketOwnershipControlsRules[] | cdktn.IResolvable;
}

export function s3BucketOwnershipControlsToTerraform(struct?: S3BucketOwnershipControls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rules: cdktn.listMapper(s3BucketOwnershipControlsRulesToTerraform, false)(struct!.rules),
  }
}


export function s3BucketOwnershipControlsToHclTerraform(struct?: S3BucketOwnershipControls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rules: {
      value: cdktn.listMapperHcl(s3BucketOwnershipControlsRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketOwnershipControlsRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketOwnershipControlsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketOwnershipControls | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3BucketOwnershipControls | cdktn.IResolvable | undefined) {
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
  private _rules = new S3BucketOwnershipControlsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: S3BucketOwnershipControlsRules[] | cdktn.IResolvable) {
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
export interface S3BucketPublicAccessBlockConfiguration {
  /**
  * Specifies whether Amazon S3 should block public access control lists (ACLs) for this bucket and objects in this bucket. Setting this element to ``TRUE`` causes the following behavior:
  *   +  PUT Bucket ACL and PUT Object ACL calls fail if the specified ACL is public.
  *   +  PUT Object calls fail if the request includes a public ACL.
  *   +  PUT Bucket calls fail if the request includes a public ACL.
  *   
  *  Enabling this setting doesn't affect existing policies or ACLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#block_public_acls S3Bucket#block_public_acls}
  */
  readonly blockPublicAcls?: boolean | cdktn.IResolvable;
  /**
  * Specifies whether Amazon S3 should block public bucket policies for this bucket. Setting this element to ``TRUE`` causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access. 
  *  Enabling this setting doesn't affect existing bucket policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#block_public_policy S3Bucket#block_public_policy}
  */
  readonly blockPublicPolicy?: boolean | cdktn.IResolvable;
  /**
  * Specifies whether Amazon S3 should ignore public ACLs for this bucket and objects in this bucket. Setting this element to ``TRUE`` causes Amazon S3 to ignore all public ACLs on this bucket and objects in this bucket.
  *  Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#ignore_public_acls S3Bucket#ignore_public_acls}
  */
  readonly ignorePublicAcls?: boolean | cdktn.IResolvable;
  /**
  * Specifies whether Amazon S3 should restrict public bucket policies for this bucket. Setting this element to ``TRUE`` restricts access to this bucket to only AWS-service principals and authorized users within this account if the bucket has a public policy.
  *  Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#restrict_public_buckets S3Bucket#restrict_public_buckets}
  */
  readonly restrictPublicBuckets?: boolean | cdktn.IResolvable;
}

export function s3BucketPublicAccessBlockConfigurationToTerraform(struct?: S3BucketPublicAccessBlockConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    block_public_acls: cdktn.booleanToTerraform(struct!.blockPublicAcls),
    block_public_policy: cdktn.booleanToTerraform(struct!.blockPublicPolicy),
    ignore_public_acls: cdktn.booleanToTerraform(struct!.ignorePublicAcls),
    restrict_public_buckets: cdktn.booleanToTerraform(struct!.restrictPublicBuckets),
  }
}


export function s3BucketPublicAccessBlockConfigurationToHclTerraform(struct?: S3BucketPublicAccessBlockConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    block_public_acls: {
      value: cdktn.booleanToHclTerraform(struct!.blockPublicAcls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_public_policy: {
      value: cdktn.booleanToHclTerraform(struct!.blockPublicPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_public_acls: {
      value: cdktn.booleanToHclTerraform(struct!.ignorePublicAcls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_public_buckets: {
      value: cdktn.booleanToHclTerraform(struct!.restrictPublicBuckets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketPublicAccessBlockConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketPublicAccessBlockConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockPublicAcls !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockPublicAcls = this._blockPublicAcls;
    }
    if (this._blockPublicPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockPublicPolicy = this._blockPublicPolicy;
    }
    if (this._ignorePublicAcls !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignorePublicAcls = this._ignorePublicAcls;
    }
    if (this._restrictPublicBuckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictPublicBuckets = this._restrictPublicBuckets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketPublicAccessBlockConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockPublicAcls = undefined;
      this._blockPublicPolicy = undefined;
      this._ignorePublicAcls = undefined;
      this._restrictPublicBuckets = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockPublicAcls = value.blockPublicAcls;
      this._blockPublicPolicy = value.blockPublicPolicy;
      this._ignorePublicAcls = value.ignorePublicAcls;
      this._restrictPublicBuckets = value.restrictPublicBuckets;
    }
  }

  // block_public_acls - computed: true, optional: true, required: false
  private _blockPublicAcls?: boolean | cdktn.IResolvable; 
  public get blockPublicAcls() {
    return this.getBooleanAttribute('block_public_acls');
  }
  public set blockPublicAcls(value: boolean | cdktn.IResolvable) {
    this._blockPublicAcls = value;
  }
  public resetBlockPublicAcls() {
    this._blockPublicAcls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPublicAclsInput() {
    return this._blockPublicAcls;
  }

  // block_public_policy - computed: true, optional: true, required: false
  private _blockPublicPolicy?: boolean | cdktn.IResolvable; 
  public get blockPublicPolicy() {
    return this.getBooleanAttribute('block_public_policy');
  }
  public set blockPublicPolicy(value: boolean | cdktn.IResolvable) {
    this._blockPublicPolicy = value;
  }
  public resetBlockPublicPolicy() {
    this._blockPublicPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPublicPolicyInput() {
    return this._blockPublicPolicy;
  }

  // ignore_public_acls - computed: true, optional: true, required: false
  private _ignorePublicAcls?: boolean | cdktn.IResolvable; 
  public get ignorePublicAcls() {
    return this.getBooleanAttribute('ignore_public_acls');
  }
  public set ignorePublicAcls(value: boolean | cdktn.IResolvable) {
    this._ignorePublicAcls = value;
  }
  public resetIgnorePublicAcls() {
    this._ignorePublicAcls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorePublicAclsInput() {
    return this._ignorePublicAcls;
  }

  // restrict_public_buckets - computed: true, optional: true, required: false
  private _restrictPublicBuckets?: boolean | cdktn.IResolvable; 
  public get restrictPublicBuckets() {
    return this.getBooleanAttribute('restrict_public_buckets');
  }
  public set restrictPublicBuckets(value: boolean | cdktn.IResolvable) {
    this._restrictPublicBuckets = value;
  }
  public resetRestrictPublicBuckets() {
    this._restrictPublicBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictPublicBucketsInput() {
    return this._restrictPublicBuckets;
  }
}
export interface S3BucketReplicationConfigurationRulesDeleteMarkerReplication {
  /**
  * Indicates whether to replicate delete markers. Disabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#status S3Bucket#status}
  */
  readonly status?: string;
}

export function s3BucketReplicationConfigurationRulesDeleteMarkerReplicationToTerraform(struct?: S3BucketReplicationConfigurationRulesDeleteMarkerReplication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function s3BucketReplicationConfigurationRulesDeleteMarkerReplicationToHclTerraform(struct?: S3BucketReplicationConfigurationRulesDeleteMarkerReplication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class S3BucketReplicationConfigurationRulesDeleteMarkerReplicationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketReplicationConfigurationRulesDeleteMarkerReplication | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketReplicationConfigurationRulesDeleteMarkerReplication | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
    }
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
export interface S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation {
  /**
  * Specifies the replica ownership. For default and valid values, see [PUT bucket replication](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTreplication.html) in the *Amazon S3 API Reference*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#owner S3Bucket#owner}
  */
  readonly owner?: string;
}

export function s3BucketReplicationConfigurationRulesDestinationAccessControlTranslationToTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    owner: cdktn.stringToTerraform(struct!.owner),
  }
}


export function s3BucketReplicationConfigurationRulesDestinationAccessControlTranslationToHclTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    owner: {
      value: cdktn.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._owner = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._owner = value.owner;
    }
  }

  // owner - computed: true, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }
}
export interface S3BucketReplicationConfigurationRulesDestinationEncryptionConfiguration {
  /**
  * Specifies the ID (Key ARN or Alias ARN) of the customer managed AWS KMS key stored in AWS Key Management Service (KMS) for the destination bucket. Amazon S3 uses this key to encrypt replica objects. Amazon S3 only supports symmetric encryption KMS keys. For more information, see [Asymmetric keys in KMS](https://docs.aws.amazon.com//kms/latest/developerguide/symmetric-asymmetric.html) in the *Key Management Service Developer Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#replica_kms_key_id S3Bucket#replica_kms_key_id}
  */
  readonly replicaKmsKeyId?: string;
}

export function s3BucketReplicationConfigurationRulesDestinationEncryptionConfigurationToTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    replica_kms_key_id: cdktn.stringToTerraform(struct!.replicaKmsKeyId),
  }
}


export function s3BucketReplicationConfigurationRulesDestinationEncryptionConfigurationToHclTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    replica_kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.replicaKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketReplicationConfigurationRulesDestinationEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketReplicationConfigurationRulesDestinationEncryptionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replicaKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaKmsKeyId = this._replicaKmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketReplicationConfigurationRulesDestinationEncryptionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replicaKmsKeyId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replicaKmsKeyId = value.replicaKmsKeyId;
    }
  }

  // replica_kms_key_id - computed: true, optional: true, required: false
  private _replicaKmsKeyId?: string; 
  public get replicaKmsKeyId() {
    return this.getStringAttribute('replica_kms_key_id');
  }
  public set replicaKmsKeyId(value: string) {
    this._replicaKmsKeyId = value;
  }
  public resetReplicaKmsKeyId() {
    this._replicaKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaKmsKeyIdInput() {
    return this._replicaKmsKeyId;
  }
}
export interface S3BucketReplicationConfigurationRulesDestinationMetricsEventThreshold {
  /**
  * Contains an integer specifying time in minutes. 
  *   Valid value: 15
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#minutes S3Bucket#minutes}
  */
  readonly minutes?: number;
}

export function s3BucketReplicationConfigurationRulesDestinationMetricsEventThresholdToTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationMetricsEventThreshold | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    minutes: cdktn.numberToTerraform(struct!.minutes),
  }
}


export function s3BucketReplicationConfigurationRulesDestinationMetricsEventThresholdToHclTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationMetricsEventThreshold | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    minutes: {
      value: cdktn.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketReplicationConfigurationRulesDestinationMetricsEventThresholdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketReplicationConfigurationRulesDestinationMetricsEventThreshold | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketReplicationConfigurationRulesDestinationMetricsEventThreshold | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minutes = value.minutes;
    }
  }

  // minutes - computed: true, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }
}
export interface S3BucketReplicationConfigurationRulesDestinationMetrics {
  /**
  * A container specifying the time threshold for emitting the ``s3:Replication:OperationMissedThreshold`` event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#event_threshold S3Bucket#event_threshold}
  */
  readonly eventThreshold?: S3BucketReplicationConfigurationRulesDestinationMetricsEventThreshold;
  /**
  * Specifies whether the replication metrics are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#status S3Bucket#status}
  */
  readonly status?: string;
}

export function s3BucketReplicationConfigurationRulesDestinationMetricsToTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_threshold: s3BucketReplicationConfigurationRulesDestinationMetricsEventThresholdToTerraform(struct!.eventThreshold),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function s3BucketReplicationConfigurationRulesDestinationMetricsToHclTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_threshold: {
      value: s3BucketReplicationConfigurationRulesDestinationMetricsEventThresholdToHclTerraform(struct!.eventThreshold),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketReplicationConfigurationRulesDestinationMetricsEventThreshold",
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

export class S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketReplicationConfigurationRulesDestinationMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventThreshold = this._eventThreshold?.internalValue;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketReplicationConfigurationRulesDestinationMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventThreshold.internalValue = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventThreshold.internalValue = value.eventThreshold;
      this._status = value.status;
    }
  }

  // event_threshold - computed: true, optional: true, required: false
  private _eventThreshold = new S3BucketReplicationConfigurationRulesDestinationMetricsEventThresholdOutputReference(this, "event_threshold");
  public get eventThreshold() {
    return this._eventThreshold;
  }
  public putEventThreshold(value: S3BucketReplicationConfigurationRulesDestinationMetricsEventThreshold) {
    this._eventThreshold.internalValue = value;
  }
  public resetEventThreshold() {
    this._eventThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventThresholdInput() {
    return this._eventThreshold.internalValue;
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
export interface S3BucketReplicationConfigurationRulesDestinationReplicationTimeTime {
  /**
  * Contains an integer specifying time in minutes. 
  *   Valid value: 15
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#minutes S3Bucket#minutes}
  */
  readonly minutes?: number;
}

export function s3BucketReplicationConfigurationRulesDestinationReplicationTimeTimeToTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationReplicationTimeTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    minutes: cdktn.numberToTerraform(struct!.minutes),
  }
}


export function s3BucketReplicationConfigurationRulesDestinationReplicationTimeTimeToHclTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationReplicationTimeTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    minutes: {
      value: cdktn.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketReplicationConfigurationRulesDestinationReplicationTimeTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketReplicationConfigurationRulesDestinationReplicationTimeTime | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketReplicationConfigurationRulesDestinationReplicationTimeTime | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minutes = value.minutes;
    }
  }

  // minutes - computed: true, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }
}
export interface S3BucketReplicationConfigurationRulesDestinationReplicationTime {
  /**
  * Specifies whether the replication time is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#status S3Bucket#status}
  */
  readonly status?: string;
  /**
  * A container specifying the time by which replication should be complete for all objects and operations on objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#time S3Bucket#time}
  */
  readonly time?: S3BucketReplicationConfigurationRulesDestinationReplicationTimeTime;
}

export function s3BucketReplicationConfigurationRulesDestinationReplicationTimeToTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationReplicationTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    status: cdktn.stringToTerraform(struct!.status),
    time: s3BucketReplicationConfigurationRulesDestinationReplicationTimeTimeToTerraform(struct!.time),
  }
}


export function s3BucketReplicationConfigurationRulesDestinationReplicationTimeToHclTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationReplicationTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time: {
      value: s3BucketReplicationConfigurationRulesDestinationReplicationTimeTimeToHclTerraform(struct!.time),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketReplicationConfigurationRulesDestinationReplicationTimeTime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketReplicationConfigurationRulesDestinationReplicationTime | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._time?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketReplicationConfigurationRulesDestinationReplicationTime | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
      this._time.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
      this._time.internalValue = value.time;
    }
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

  // time - computed: true, optional: true, required: false
  private _time = new S3BucketReplicationConfigurationRulesDestinationReplicationTimeTimeOutputReference(this, "time");
  public get time() {
    return this._time;
  }
  public putTime(value: S3BucketReplicationConfigurationRulesDestinationReplicationTimeTime) {
    this._time.internalValue = value;
  }
  public resetTime() {
    this._time.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time.internalValue;
  }
}
export interface S3BucketReplicationConfigurationRulesDestination {
  /**
  * Specify this only in a cross-account scenario (where source and destination bucket owners are not the same), and you want to change replica ownership to the AWS-account that owns the destination bucket. If this is not specified in the replication configuration, the replicas are owned by same AWS-account that owns the source object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#access_control_translation S3Bucket#access_control_translation}
  */
  readonly accessControlTranslation?: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation;
  /**
  * Destination bucket owner account ID. In a cross-account scenario, if you direct Amazon S3 to change replica ownership to the AWS-account that owns the destination bucket by specifying the ``AccessControlTranslation`` property, this is the account ID of the destination bucket owner. For more information, see [Cross-Region Replication Additional Configuration: Change Replica Owner](https://docs.aws.amazon.com/AmazonS3/latest/dev/crr-change-owner.html) in the *Amazon S3 User Guide*.
  *  If you specify the ``AccessControlTranslation`` property, the ``Account`` property is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#account S3Bucket#account}
  */
  readonly account?: string;
  /**
  * The Amazon Resource Name (ARN) of the bucket where you want Amazon S3 to store the results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#bucket S3Bucket#bucket}
  */
  readonly bucket?: string;
  /**
  * Specifies encryption-related information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#encryption_configuration S3Bucket#encryption_configuration}
  */
  readonly encryptionConfiguration?: S3BucketReplicationConfigurationRulesDestinationEncryptionConfiguration;
  /**
  * A container specifying replication metrics-related settings enabling replication metrics and events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#metrics S3Bucket#metrics}
  */
  readonly metrics?: S3BucketReplicationConfigurationRulesDestinationMetrics;
  /**
  * A container specifying S3 Replication Time Control (S3 RTC), including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated. Must be specified together with a ``Metrics`` block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#replication_time S3Bucket#replication_time}
  */
  readonly replicationTime?: S3BucketReplicationConfigurationRulesDestinationReplicationTime;
  /**
  * The storage class to use when replicating objects, such as S3 Standard or reduced redundancy. By default, Amazon S3 uses the storage class of the source object to create the object replica. 
  *  For valid values, see the ``StorageClass`` element of the [PUT Bucket replication](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTreplication.html) action in the *Amazon S3 API Reference*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#storage_class S3Bucket#storage_class}
  */
  readonly storageClass?: string;
}

export function s3BucketReplicationConfigurationRulesDestinationToTerraform(struct?: S3BucketReplicationConfigurationRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_control_translation: s3BucketReplicationConfigurationRulesDestinationAccessControlTranslationToTerraform(struct!.accessControlTranslation),
    account: cdktn.stringToTerraform(struct!.account),
    bucket: cdktn.stringToTerraform(struct!.bucket),
    encryption_configuration: s3BucketReplicationConfigurationRulesDestinationEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    metrics: s3BucketReplicationConfigurationRulesDestinationMetricsToTerraform(struct!.metrics),
    replication_time: s3BucketReplicationConfigurationRulesDestinationReplicationTimeToTerraform(struct!.replicationTime),
    storage_class: cdktn.stringToTerraform(struct!.storageClass),
  }
}


export function s3BucketReplicationConfigurationRulesDestinationToHclTerraform(struct?: S3BucketReplicationConfigurationRulesDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_control_translation: {
      value: s3BucketReplicationConfigurationRulesDestinationAccessControlTranslationToHclTerraform(struct!.accessControlTranslation),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation",
    },
    account: {
      value: cdktn.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_configuration: {
      value: s3BucketReplicationConfigurationRulesDestinationEncryptionConfigurationToHclTerraform(struct!.encryptionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketReplicationConfigurationRulesDestinationEncryptionConfiguration",
    },
    metrics: {
      value: s3BucketReplicationConfigurationRulesDestinationMetricsToHclTerraform(struct!.metrics),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketReplicationConfigurationRulesDestinationMetrics",
    },
    replication_time: {
      value: s3BucketReplicationConfigurationRulesDestinationReplicationTimeToHclTerraform(struct!.replicationTime),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketReplicationConfigurationRulesDestinationReplicationTime",
    },
    storage_class: {
      value: cdktn.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketReplicationConfigurationRulesDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketReplicationConfigurationRulesDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessControlTranslation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlTranslation = this._accessControlTranslation?.internalValue;
    }
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._encryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfiguration = this._encryptionConfiguration?.internalValue;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._replicationTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationTime = this._replicationTime?.internalValue;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketReplicationConfigurationRulesDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessControlTranslation.internalValue = undefined;
      this._account = undefined;
      this._bucket = undefined;
      this._encryptionConfiguration.internalValue = undefined;
      this._metrics.internalValue = undefined;
      this._replicationTime.internalValue = undefined;
      this._storageClass = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessControlTranslation.internalValue = value.accessControlTranslation;
      this._account = value.account;
      this._bucket = value.bucket;
      this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
      this._metrics.internalValue = value.metrics;
      this._replicationTime.internalValue = value.replicationTime;
      this._storageClass = value.storageClass;
    }
  }

  // access_control_translation - computed: true, optional: true, required: false
  private _accessControlTranslation = new S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference(this, "access_control_translation");
  public get accessControlTranslation() {
    return this._accessControlTranslation;
  }
  public putAccessControlTranslation(value: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation) {
    this._accessControlTranslation.internalValue = value;
  }
  public resetAccessControlTranslation() {
    this._accessControlTranslation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlTranslationInput() {
    return this._accessControlTranslation.internalValue;
  }

  // account - computed: true, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // encryption_configuration - computed: true, optional: true, required: false
  private _encryptionConfiguration = new S3BucketReplicationConfigurationRulesDestinationEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: S3BucketReplicationConfigurationRulesDestinationEncryptionConfiguration) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // metrics - computed: true, optional: true, required: false
  private _metrics = new S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: S3BucketReplicationConfigurationRulesDestinationMetrics) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // replication_time - computed: true, optional: true, required: false
  private _replicationTime = new S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference(this, "replication_time");
  public get replicationTime() {
    return this._replicationTime;
  }
  public putReplicationTime(value: S3BucketReplicationConfigurationRulesDestinationReplicationTime) {
    this._replicationTime.internalValue = value;
  }
  public resetReplicationTime() {
    this._replicationTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationTimeInput() {
    return this._replicationTime.internalValue;
  }

  // storage_class - computed: true, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface S3BucketReplicationConfigurationRulesFilterAndTagFilters {
  /**
  * The tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#key S3Bucket#key}
  */
  readonly key?: string;
  /**
  * The tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#value S3Bucket#value}
  */
  readonly value?: string;
}

export function s3BucketReplicationConfigurationRulesFilterAndTagFiltersToTerraform(struct?: S3BucketReplicationConfigurationRulesFilterAndTagFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function s3BucketReplicationConfigurationRulesFilterAndTagFiltersToHclTerraform(struct?: S3BucketReplicationConfigurationRulesFilterAndTagFilters | cdktn.IResolvable): any {
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

export class S3BucketReplicationConfigurationRulesFilterAndTagFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3BucketReplicationConfigurationRulesFilterAndTagFilters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3BucketReplicationConfigurationRulesFilterAndTagFilters | cdktn.IResolvable | undefined) {
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

export class S3BucketReplicationConfigurationRulesFilterAndTagFiltersList extends cdktn.ComplexList {
  public internalValue? : S3BucketReplicationConfigurationRulesFilterAndTagFilters[] | cdktn.IResolvable

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
  public get(index: number): S3BucketReplicationConfigurationRulesFilterAndTagFiltersOutputReference {
    return new S3BucketReplicationConfigurationRulesFilterAndTagFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketReplicationConfigurationRulesFilterAnd {
  /**
  * An object key name prefix that identifies the subset of objects to which the rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#prefix S3Bucket#prefix}
  */
  readonly prefix?: string;
  /**
  * An array of tags containing key and value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#tag_filters S3Bucket#tag_filters}
  */
  readonly tagFilters?: S3BucketReplicationConfigurationRulesFilterAndTagFilters[] | cdktn.IResolvable;
}

export function s3BucketReplicationConfigurationRulesFilterAndToTerraform(struct?: S3BucketReplicationConfigurationRulesFilterAnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    prefix: cdktn.stringToTerraform(struct!.prefix),
    tag_filters: cdktn.listMapper(s3BucketReplicationConfigurationRulesFilterAndTagFiltersToTerraform, false)(struct!.tagFilters),
  }
}


export function s3BucketReplicationConfigurationRulesFilterAndToHclTerraform(struct?: S3BucketReplicationConfigurationRulesFilterAnd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_filters: {
      value: cdktn.listMapperHcl(s3BucketReplicationConfigurationRulesFilterAndTagFiltersToHclTerraform, false)(struct!.tagFilters),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketReplicationConfigurationRulesFilterAndTagFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketReplicationConfigurationRulesFilterAndOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketReplicationConfigurationRulesFilterAnd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._tagFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagFilters = this._tagFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketReplicationConfigurationRulesFilterAnd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefix = undefined;
      this._tagFilters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefix = value.prefix;
      this._tagFilters.internalValue = value.tagFilters;
    }
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

  // tag_filters - computed: true, optional: true, required: false
  private _tagFilters = new S3BucketReplicationConfigurationRulesFilterAndTagFiltersList(this, "tag_filters", false);
  public get tagFilters() {
    return this._tagFilters;
  }
  public putTagFilters(value: S3BucketReplicationConfigurationRulesFilterAndTagFilters[] | cdktn.IResolvable) {
    this._tagFilters.internalValue = value;
  }
  public resetTagFilters() {
    this._tagFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters.internalValue;
  }
}
export interface S3BucketReplicationConfigurationRulesFilterTagFilter {
  /**
  * The tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#key S3Bucket#key}
  */
  readonly key?: string;
  /**
  * The tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#value S3Bucket#value}
  */
  readonly value?: string;
}

export function s3BucketReplicationConfigurationRulesFilterTagFilterToTerraform(struct?: S3BucketReplicationConfigurationRulesFilterTagFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function s3BucketReplicationConfigurationRulesFilterTagFilterToHclTerraform(struct?: S3BucketReplicationConfigurationRulesFilterTagFilter | cdktn.IResolvable): any {
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

export class S3BucketReplicationConfigurationRulesFilterTagFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketReplicationConfigurationRulesFilterTagFilter | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3BucketReplicationConfigurationRulesFilterTagFilter | cdktn.IResolvable | undefined) {
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
export interface S3BucketReplicationConfigurationRulesFilter {
  /**
  * A container for specifying rule filters. The filters determine the subset of objects to which the rule applies. This element is required only if you specify more than one filter. For example: 
  *   +  If you specify both a ``Prefix`` and a ``TagFilter``, wrap these filters in an ``And`` tag.
  *   +  If you specify a filter based on multiple tags, wrap the ``TagFilter`` elements in an ``And`` tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#and S3Bucket#and}
  */
  readonly and?: S3BucketReplicationConfigurationRulesFilterAnd;
  /**
  * An object key name prefix that identifies the subset of objects to which the rule applies.
  *   Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#prefix S3Bucket#prefix}
  */
  readonly prefix?: string;
  /**
  * A container for specifying a tag key and value. 
  *  The rule applies only to objects that have the tag in their tag set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#tag_filter S3Bucket#tag_filter}
  */
  readonly tagFilter?: S3BucketReplicationConfigurationRulesFilterTagFilter;
}

export function s3BucketReplicationConfigurationRulesFilterToTerraform(struct?: S3BucketReplicationConfigurationRulesFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    and: s3BucketReplicationConfigurationRulesFilterAndToTerraform(struct!.and),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    tag_filter: s3BucketReplicationConfigurationRulesFilterTagFilterToTerraform(struct!.tagFilter),
  }
}


export function s3BucketReplicationConfigurationRulesFilterToHclTerraform(struct?: S3BucketReplicationConfigurationRulesFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    and: {
      value: s3BucketReplicationConfigurationRulesFilterAndToHclTerraform(struct!.and),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketReplicationConfigurationRulesFilterAnd",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_filter: {
      value: s3BucketReplicationConfigurationRulesFilterTagFilterToHclTerraform(struct!.tagFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketReplicationConfigurationRulesFilterTagFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketReplicationConfigurationRulesFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketReplicationConfigurationRulesFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._tagFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagFilter = this._tagFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketReplicationConfigurationRulesFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._and.internalValue = undefined;
      this._prefix = undefined;
      this._tagFilter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._and.internalValue = value.and;
      this._prefix = value.prefix;
      this._tagFilter.internalValue = value.tagFilter;
    }
  }

  // and - computed: true, optional: true, required: false
  private _and = new S3BucketReplicationConfigurationRulesFilterAndOutputReference(this, "and");
  public get and() {
    return this._and;
  }
  public putAnd(value: S3BucketReplicationConfigurationRulesFilterAnd) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
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

  // tag_filter - computed: true, optional: true, required: false
  private _tagFilter = new S3BucketReplicationConfigurationRulesFilterTagFilterOutputReference(this, "tag_filter");
  public get tagFilter() {
    return this._tagFilter;
  }
  public putTagFilter(value: S3BucketReplicationConfigurationRulesFilterTagFilter) {
    this._tagFilter.internalValue = value;
  }
  public resetTagFilter() {
    this._tagFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFilterInput() {
    return this._tagFilter.internalValue;
  }
}
export interface S3BucketReplicationConfigurationRulesSourceSelectionCriteriaReplicaModifications {
  /**
  * Specifies whether Amazon S3 replicates modifications on replicas.
  *   *Allowed values*: ``Enabled`` | ``Disabled``
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#status S3Bucket#status}
  */
  readonly status?: string;
}

export function s3BucketReplicationConfigurationRulesSourceSelectionCriteriaReplicaModificationsToTerraform(struct?: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaReplicaModifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function s3BucketReplicationConfigurationRulesSourceSelectionCriteriaReplicaModificationsToHclTerraform(struct?: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaReplicaModifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class S3BucketReplicationConfigurationRulesSourceSelectionCriteriaReplicaModificationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketReplicationConfigurationRulesSourceSelectionCriteriaReplicaModifications | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaReplicaModifications | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
    }
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
export interface S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects {
  /**
  * Specifies whether Amazon S3 replicates objects created with server-side encryption using an AWS KMS key stored in AWS Key Management Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#status S3Bucket#status}
  */
  readonly status?: string;
}

export function s3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsToTerraform(struct?: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function s3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsToHclTerraform(struct?: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
    }
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
export interface S3BucketReplicationConfigurationRulesSourceSelectionCriteria {
  /**
  * A filter that you can specify for selection for modifications on replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#replica_modifications S3Bucket#replica_modifications}
  */
  readonly replicaModifications?: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaReplicaModifications;
  /**
  * A container for filter information for the selection of Amazon S3 objects encrypted with AWS KMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#sse_kms_encrypted_objects S3Bucket#sse_kms_encrypted_objects}
  */
  readonly sseKmsEncryptedObjects?: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects;
}

export function s3BucketReplicationConfigurationRulesSourceSelectionCriteriaToTerraform(struct?: S3BucketReplicationConfigurationRulesSourceSelectionCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    replica_modifications: s3BucketReplicationConfigurationRulesSourceSelectionCriteriaReplicaModificationsToTerraform(struct!.replicaModifications),
    sse_kms_encrypted_objects: s3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsToTerraform(struct!.sseKmsEncryptedObjects),
  }
}


export function s3BucketReplicationConfigurationRulesSourceSelectionCriteriaToHclTerraform(struct?: S3BucketReplicationConfigurationRulesSourceSelectionCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    replica_modifications: {
      value: s3BucketReplicationConfigurationRulesSourceSelectionCriteriaReplicaModificationsToHclTerraform(struct!.replicaModifications),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketReplicationConfigurationRulesSourceSelectionCriteriaReplicaModifications",
    },
    sse_kms_encrypted_objects: {
      value: s3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsToHclTerraform(struct!.sseKmsEncryptedObjects),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketReplicationConfigurationRulesSourceSelectionCriteria | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replicaModifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaModifications = this._replicaModifications?.internalValue;
    }
    if (this._sseKmsEncryptedObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseKmsEncryptedObjects = this._sseKmsEncryptedObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketReplicationConfigurationRulesSourceSelectionCriteria | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replicaModifications.internalValue = undefined;
      this._sseKmsEncryptedObjects.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replicaModifications.internalValue = value.replicaModifications;
      this._sseKmsEncryptedObjects.internalValue = value.sseKmsEncryptedObjects;
    }
  }

  // replica_modifications - computed: true, optional: true, required: false
  private _replicaModifications = new S3BucketReplicationConfigurationRulesSourceSelectionCriteriaReplicaModificationsOutputReference(this, "replica_modifications");
  public get replicaModifications() {
    return this._replicaModifications;
  }
  public putReplicaModifications(value: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaReplicaModifications) {
    this._replicaModifications.internalValue = value;
  }
  public resetReplicaModifications() {
    this._replicaModifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaModificationsInput() {
    return this._replicaModifications.internalValue;
  }

  // sse_kms_encrypted_objects - computed: true, optional: true, required: false
  private _sseKmsEncryptedObjects = new S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference(this, "sse_kms_encrypted_objects");
  public get sseKmsEncryptedObjects() {
    return this._sseKmsEncryptedObjects;
  }
  public putSseKmsEncryptedObjects(value: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects) {
    this._sseKmsEncryptedObjects.internalValue = value;
  }
  public resetSseKmsEncryptedObjects() {
    this._sseKmsEncryptedObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseKmsEncryptedObjectsInput() {
    return this._sseKmsEncryptedObjects.internalValue;
  }
}
export interface S3BucketReplicationConfigurationRules {
  /**
  * Specifies whether Amazon S3 replicates delete markers. If you specify a ``Filter`` in your replication configuration, you must also include a ``DeleteMarkerReplication`` element. If your ``Filter`` includes a ``Tag`` element, the ``DeleteMarkerReplication`` ``Status`` must be set to Disabled, because Amazon S3 does not support replicating delete markers for tag-based rules. For an example configuration, see [Basic Rule Configuration](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-config-min-rule-config). 
  *  For more information about delete marker replication, see [Basic Rule Configuration](https://docs.aws.amazon.com/AmazonS3/latest/dev/delete-marker-replication.html). 
  *   If you are using an earlier version of the replication configuration, Amazon S3 handles replication of delete markers differently. For more information, see [Backward Compatibility](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-backward-compat-considerations).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#delete_marker_replication S3Bucket#delete_marker_replication}
  */
  readonly deleteMarkerReplication?: S3BucketReplicationConfigurationRulesDeleteMarkerReplication;
  /**
  * A container for information about the replication destination and its configurations including enabling the S3 Replication Time Control (S3 RTC).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#destination S3Bucket#destination}
  */
  readonly destination?: S3BucketReplicationConfigurationRulesDestination;
  /**
  * A filter that identifies the subset of objects to which the replication rule applies. A ``Filter`` must specify exactly one ``Prefix``, ``TagFilter``, or an ``And`` child element. The use of the filter field indicates that this is a V2 replication configuration. This field isn't supported in a V1 replication configuration.
  *   V1 replication configuration only supports filtering by key prefix. To filter using a V1 replication configuration, add the ``Prefix`` directly as a child element of the ``Rule`` element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#filter S3Bucket#filter}
  */
  readonly filter?: S3BucketReplicationConfigurationRulesFilter;
  /**
  * A unique identifier for the rule. The maximum value is 255 characters. If you don't specify a value, AWS CloudFormation generates a random ID. When using a V2 replication configuration this property is capitalized as "ID".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#id S3Bucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An object key name prefix that identifies the object or objects to which the rule applies. The maximum prefix length is 1,024 characters. To include all objects in a bucket, specify an empty string. To filter using a V1 replication configuration, add the ``Prefix`` directly as a child element of the ``Rule`` element.
  *   Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#prefix S3Bucket#prefix}
  */
  readonly prefix?: string;
  /**
  * The priority indicates which rule has precedence whenever two or more replication rules conflict. Amazon S3 will attempt to replicate objects according to all replication rules. However, if there are two or more rules with the same destination bucket, then objects will be replicated according to the rule with the highest priority. The higher the number, the higher the priority. 
  *  For more information, see [Replication](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html) in the *Amazon S3 User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#priority S3Bucket#priority}
  */
  readonly priority?: number;
  /**
  * A container that describes additional filters for identifying the source objects that you want to replicate. You can choose to enable or disable the replication of these objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#source_selection_criteria S3Bucket#source_selection_criteria}
  */
  readonly sourceSelectionCriteria?: S3BucketReplicationConfigurationRulesSourceSelectionCriteria;
  /**
  * Specifies whether the rule is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#status S3Bucket#status}
  */
  readonly status?: string;
}

export function s3BucketReplicationConfigurationRulesToTerraform(struct?: S3BucketReplicationConfigurationRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delete_marker_replication: s3BucketReplicationConfigurationRulesDeleteMarkerReplicationToTerraform(struct!.deleteMarkerReplication),
    destination: s3BucketReplicationConfigurationRulesDestinationToTerraform(struct!.destination),
    filter: s3BucketReplicationConfigurationRulesFilterToTerraform(struct!.filter),
    id: cdktn.stringToTerraform(struct!.id),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    priority: cdktn.numberToTerraform(struct!.priority),
    source_selection_criteria: s3BucketReplicationConfigurationRulesSourceSelectionCriteriaToTerraform(struct!.sourceSelectionCriteria),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function s3BucketReplicationConfigurationRulesToHclTerraform(struct?: S3BucketReplicationConfigurationRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delete_marker_replication: {
      value: s3BucketReplicationConfigurationRulesDeleteMarkerReplicationToHclTerraform(struct!.deleteMarkerReplication),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketReplicationConfigurationRulesDeleteMarkerReplication",
    },
    destination: {
      value: s3BucketReplicationConfigurationRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketReplicationConfigurationRulesDestination",
    },
    filter: {
      value: s3BucketReplicationConfigurationRulesFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketReplicationConfigurationRulesFilter",
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
    priority: {
      value: cdktn.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_selection_criteria: {
      value: s3BucketReplicationConfigurationRulesSourceSelectionCriteriaToHclTerraform(struct!.sourceSelectionCriteria),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketReplicationConfigurationRulesSourceSelectionCriteria",
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

export class S3BucketReplicationConfigurationRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3BucketReplicationConfigurationRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteMarkerReplication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteMarkerReplication = this._deleteMarkerReplication?.internalValue;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._sourceSelectionCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSelectionCriteria = this._sourceSelectionCriteria?.internalValue;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketReplicationConfigurationRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteMarkerReplication.internalValue = undefined;
      this._destination.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._id = undefined;
      this._prefix = undefined;
      this._priority = undefined;
      this._sourceSelectionCriteria.internalValue = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteMarkerReplication.internalValue = value.deleteMarkerReplication;
      this._destination.internalValue = value.destination;
      this._filter.internalValue = value.filter;
      this._id = value.id;
      this._prefix = value.prefix;
      this._priority = value.priority;
      this._sourceSelectionCriteria.internalValue = value.sourceSelectionCriteria;
      this._status = value.status;
    }
  }

  // delete_marker_replication - computed: true, optional: true, required: false
  private _deleteMarkerReplication = new S3BucketReplicationConfigurationRulesDeleteMarkerReplicationOutputReference(this, "delete_marker_replication");
  public get deleteMarkerReplication() {
    return this._deleteMarkerReplication;
  }
  public putDeleteMarkerReplication(value: S3BucketReplicationConfigurationRulesDeleteMarkerReplication) {
    this._deleteMarkerReplication.internalValue = value;
  }
  public resetDeleteMarkerReplication() {
    this._deleteMarkerReplication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteMarkerReplicationInput() {
    return this._deleteMarkerReplication.internalValue;
  }

  // destination - computed: true, optional: true, required: false
  private _destination = new S3BucketReplicationConfigurationRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: S3BucketReplicationConfigurationRulesDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // filter - computed: true, optional: true, required: false
  private _filter = new S3BucketReplicationConfigurationRulesFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: S3BucketReplicationConfigurationRulesFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
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

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // source_selection_criteria - computed: true, optional: true, required: false
  private _sourceSelectionCriteria = new S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference(this, "source_selection_criteria");
  public get sourceSelectionCriteria() {
    return this._sourceSelectionCriteria;
  }
  public putSourceSelectionCriteria(value: S3BucketReplicationConfigurationRulesSourceSelectionCriteria) {
    this._sourceSelectionCriteria.internalValue = value;
  }
  public resetSourceSelectionCriteria() {
    this._sourceSelectionCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSelectionCriteriaInput() {
    return this._sourceSelectionCriteria.internalValue;
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

export class S3BucketReplicationConfigurationRulesList extends cdktn.ComplexList {
  public internalValue? : S3BucketReplicationConfigurationRules[] | cdktn.IResolvable

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
  public get(index: number): S3BucketReplicationConfigurationRulesOutputReference {
    return new S3BucketReplicationConfigurationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketReplicationConfiguration {
  /**
  * The Amazon Resource Name (ARN) of the IAMlong (IAM) role that Amazon S3 assumes when replicating objects. For more information, see [How to Set Up Replication](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-how-setup.html) in the *Amazon S3 User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#role S3Bucket#role}
  */
  readonly role?: string;
  /**
  * A container for one or more replication rules. A replication configuration must have at least one rule and can contain a maximum of 1,000 rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#rules S3Bucket#rules}
  */
  readonly rules?: S3BucketReplicationConfigurationRules[] | cdktn.IResolvable;
}

export function s3BucketReplicationConfigurationToTerraform(struct?: S3BucketReplicationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role: cdktn.stringToTerraform(struct!.role),
    rules: cdktn.listMapper(s3BucketReplicationConfigurationRulesToTerraform, false)(struct!.rules),
  }
}


export function s3BucketReplicationConfigurationToHclTerraform(struct?: S3BucketReplicationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    role: {
      value: cdktn.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktn.listMapperHcl(s3BucketReplicationConfigurationRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketReplicationConfigurationRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketReplicationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketReplicationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketReplicationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._role = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._role = value.role;
      this._rules.internalValue = value.rules;
    }
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // rules - computed: true, optional: true, required: false
  private _rules = new S3BucketReplicationConfigurationRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: S3BucketReplicationConfigurationRules[] | cdktn.IResolvable) {
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
export interface S3BucketTags {
  /**
  * Name of the object key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#key S3Bucket#key}
  */
  readonly key?: string;
  /**
  * Value of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#value S3Bucket#value}
  */
  readonly value?: string;
}

export function s3BucketTagsToTerraform(struct?: S3BucketTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function s3BucketTagsToHclTerraform(struct?: S3BucketTags | cdktn.IResolvable): any {
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

export class S3BucketTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3BucketTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3BucketTags | cdktn.IResolvable | undefined) {
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

export class S3BucketTagsList extends cdktn.ComplexList {
  public internalValue? : S3BucketTags[] | cdktn.IResolvable

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
  public get(index: number): S3BucketTagsOutputReference {
    return new S3BucketTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketVersioningConfiguration {
  /**
  * The versioning state of the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#status S3Bucket#status}
  */
  readonly status?: string;
}

export function s3BucketVersioningConfigurationToTerraform(struct?: S3BucketVersioningConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function s3BucketVersioningConfigurationToHclTerraform(struct?: S3BucketVersioningConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class S3BucketVersioningConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketVersioningConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketVersioningConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
    }
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
export interface S3BucketWebsiteConfigurationRedirectAllRequestsTo {
  /**
  * Name of the host where requests are redirected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#host_name S3Bucket#host_name}
  */
  readonly hostName?: string;
  /**
  * Protocol to use when redirecting requests. The default is the protocol that is used in the original request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#protocol S3Bucket#protocol}
  */
  readonly protocol?: string;
}

export function s3BucketWebsiteConfigurationRedirectAllRequestsToToTerraform(struct?: S3BucketWebsiteConfigurationRedirectAllRequestsTo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    host_name: cdktn.stringToTerraform(struct!.hostName),
    protocol: cdktn.stringToTerraform(struct!.protocol),
  }
}


export function s3BucketWebsiteConfigurationRedirectAllRequestsToToHclTerraform(struct?: S3BucketWebsiteConfigurationRedirectAllRequestsTo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    host_name: {
      value: cdktn.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketWebsiteConfigurationRedirectAllRequestsTo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketWebsiteConfigurationRedirectAllRequestsTo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostName = undefined;
      this._protocol = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostName = value.hostName;
      this._protocol = value.protocol;
    }
  }

  // host_name - computed: true, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}
export interface S3BucketWebsiteConfigurationRoutingRulesRedirectRule {
  /**
  * The host name to use in the redirect request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#host_name S3Bucket#host_name}
  */
  readonly hostName?: string;
  /**
  * The HTTP redirect code to use on the response. Not required if one of the siblings is present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#http_redirect_code S3Bucket#http_redirect_code}
  */
  readonly httpRedirectCode?: string;
  /**
  * Protocol to use when redirecting requests. The default is the protocol that is used in the original request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#protocol S3Bucket#protocol}
  */
  readonly protocol?: string;
  /**
  * The object key prefix to use in the redirect request. For example, to redirect requests for all pages with prefix ``docs/`` (objects in the ``docs/`` folder) to ``documents/``, you can set a condition block with ``KeyPrefixEquals`` set to ``docs/`` and in the Redirect set ``ReplaceKeyPrefixWith`` to ``/documents``. Not required if one of the siblings is present. Can be present only if ``ReplaceKeyWith`` is not provided.
  *   Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#replace_key_prefix_with S3Bucket#replace_key_prefix_with}
  */
  readonly replaceKeyPrefixWith?: string;
  /**
  * The specific object key to use in the redirect request. For example, redirect request to ``error.html``. Not required if one of the siblings is present. Can be present only if ``ReplaceKeyPrefixWith`` is not provided.
  *   Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#replace_key_with S3Bucket#replace_key_with}
  */
  readonly replaceKeyWith?: string;
}

export function s3BucketWebsiteConfigurationRoutingRulesRedirectRuleToTerraform(struct?: S3BucketWebsiteConfigurationRoutingRulesRedirectRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    host_name: cdktn.stringToTerraform(struct!.hostName),
    http_redirect_code: cdktn.stringToTerraform(struct!.httpRedirectCode),
    protocol: cdktn.stringToTerraform(struct!.protocol),
    replace_key_prefix_with: cdktn.stringToTerraform(struct!.replaceKeyPrefixWith),
    replace_key_with: cdktn.stringToTerraform(struct!.replaceKeyWith),
  }
}


export function s3BucketWebsiteConfigurationRoutingRulesRedirectRuleToHclTerraform(struct?: S3BucketWebsiteConfigurationRoutingRulesRedirectRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    host_name: {
      value: cdktn.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_redirect_code: {
      value: cdktn.stringToHclTerraform(struct!.httpRedirectCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace_key_prefix_with: {
      value: cdktn.stringToHclTerraform(struct!.replaceKeyPrefixWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace_key_with: {
      value: cdktn.stringToHclTerraform(struct!.replaceKeyWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketWebsiteConfigurationRoutingRulesRedirectRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketWebsiteConfigurationRoutingRulesRedirectRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._httpRedirectCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRedirectCode = this._httpRedirectCode;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._replaceKeyPrefixWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceKeyPrefixWith = this._replaceKeyPrefixWith;
    }
    if (this._replaceKeyWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceKeyWith = this._replaceKeyWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketWebsiteConfigurationRoutingRulesRedirectRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostName = undefined;
      this._httpRedirectCode = undefined;
      this._protocol = undefined;
      this._replaceKeyPrefixWith = undefined;
      this._replaceKeyWith = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostName = value.hostName;
      this._httpRedirectCode = value.httpRedirectCode;
      this._protocol = value.protocol;
      this._replaceKeyPrefixWith = value.replaceKeyPrefixWith;
      this._replaceKeyWith = value.replaceKeyWith;
    }
  }

  // host_name - computed: true, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // http_redirect_code - computed: true, optional: true, required: false
  private _httpRedirectCode?: string; 
  public get httpRedirectCode() {
    return this.getStringAttribute('http_redirect_code');
  }
  public set httpRedirectCode(value: string) {
    this._httpRedirectCode = value;
  }
  public resetHttpRedirectCode() {
    this._httpRedirectCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRedirectCodeInput() {
    return this._httpRedirectCode;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // replace_key_prefix_with - computed: true, optional: true, required: false
  private _replaceKeyPrefixWith?: string; 
  public get replaceKeyPrefixWith() {
    return this.getStringAttribute('replace_key_prefix_with');
  }
  public set replaceKeyPrefixWith(value: string) {
    this._replaceKeyPrefixWith = value;
  }
  public resetReplaceKeyPrefixWith() {
    this._replaceKeyPrefixWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceKeyPrefixWithInput() {
    return this._replaceKeyPrefixWith;
  }

  // replace_key_with - computed: true, optional: true, required: false
  private _replaceKeyWith?: string; 
  public get replaceKeyWith() {
    return this.getStringAttribute('replace_key_with');
  }
  public set replaceKeyWith(value: string) {
    this._replaceKeyWith = value;
  }
  public resetReplaceKeyWith() {
    this._replaceKeyWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceKeyWithInput() {
    return this._replaceKeyWith;
  }
}
export interface S3BucketWebsiteConfigurationRoutingRulesRoutingRuleCondition {
  /**
  * The HTTP error code when the redirect is applied. In the event of an error, if the error code equals this value, then the specified redirect is applied.
  *  Required when parent element ``Condition`` is specified and sibling ``KeyPrefixEquals`` is not specified. If both are specified, then both must be true for the redirect to be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#http_error_code_returned_equals S3Bucket#http_error_code_returned_equals}
  */
  readonly httpErrorCodeReturnedEquals?: string;
  /**
  * The object key name prefix when the redirect is applied. For example, to redirect requests for ``ExamplePage.html``, the key prefix will be ``ExamplePage.html``. To redirect request for all pages with the prefix ``docs/``, the key prefix will be ``/docs``, which identifies all objects in the docs/ folder.
  *  Required when the parent element ``Condition`` is specified and sibling ``HttpErrorCodeReturnedEquals`` is not specified. If both conditions are specified, both must be true for the redirect to be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#key_prefix_equals S3Bucket#key_prefix_equals}
  */
  readonly keyPrefixEquals?: string;
}

export function s3BucketWebsiteConfigurationRoutingRulesRoutingRuleConditionToTerraform(struct?: S3BucketWebsiteConfigurationRoutingRulesRoutingRuleCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    http_error_code_returned_equals: cdktn.stringToTerraform(struct!.httpErrorCodeReturnedEquals),
    key_prefix_equals: cdktn.stringToTerraform(struct!.keyPrefixEquals),
  }
}


export function s3BucketWebsiteConfigurationRoutingRulesRoutingRuleConditionToHclTerraform(struct?: S3BucketWebsiteConfigurationRoutingRulesRoutingRuleCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    http_error_code_returned_equals: {
      value: cdktn.stringToHclTerraform(struct!.httpErrorCodeReturnedEquals),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_prefix_equals: {
      value: cdktn.stringToHclTerraform(struct!.keyPrefixEquals),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketWebsiteConfigurationRoutingRulesRoutingRuleConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketWebsiteConfigurationRoutingRulesRoutingRuleCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpErrorCodeReturnedEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpErrorCodeReturnedEquals = this._httpErrorCodeReturnedEquals;
    }
    if (this._keyPrefixEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefixEquals = this._keyPrefixEquals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketWebsiteConfigurationRoutingRulesRoutingRuleCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpErrorCodeReturnedEquals = undefined;
      this._keyPrefixEquals = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpErrorCodeReturnedEquals = value.httpErrorCodeReturnedEquals;
      this._keyPrefixEquals = value.keyPrefixEquals;
    }
  }

  // http_error_code_returned_equals - computed: true, optional: true, required: false
  private _httpErrorCodeReturnedEquals?: string; 
  public get httpErrorCodeReturnedEquals() {
    return this.getStringAttribute('http_error_code_returned_equals');
  }
  public set httpErrorCodeReturnedEquals(value: string) {
    this._httpErrorCodeReturnedEquals = value;
  }
  public resetHttpErrorCodeReturnedEquals() {
    this._httpErrorCodeReturnedEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpErrorCodeReturnedEqualsInput() {
    return this._httpErrorCodeReturnedEquals;
  }

  // key_prefix_equals - computed: true, optional: true, required: false
  private _keyPrefixEquals?: string; 
  public get keyPrefixEquals() {
    return this.getStringAttribute('key_prefix_equals');
  }
  public set keyPrefixEquals(value: string) {
    this._keyPrefixEquals = value;
  }
  public resetKeyPrefixEquals() {
    this._keyPrefixEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixEqualsInput() {
    return this._keyPrefixEquals;
  }
}
export interface S3BucketWebsiteConfigurationRoutingRules {
  /**
  * Container for redirect information. You can redirect requests to another host, to another page, or with another protocol. In the event of an error, you can specify a different error code to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#redirect_rule S3Bucket#redirect_rule}
  */
  readonly redirectRule?: S3BucketWebsiteConfigurationRoutingRulesRedirectRule;
  /**
  * A container for describing a condition that must be met for the specified redirect to apply. For example, 1. If request is for pages in the ``/docs`` folder, redirect to the ``/documents`` folder. 2. If request results in HTTP error 4xx, redirect request to another host where you might process the error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#routing_rule_condition S3Bucket#routing_rule_condition}
  */
  readonly routingRuleCondition?: S3BucketWebsiteConfigurationRoutingRulesRoutingRuleCondition;
}

export function s3BucketWebsiteConfigurationRoutingRulesToTerraform(struct?: S3BucketWebsiteConfigurationRoutingRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    redirect_rule: s3BucketWebsiteConfigurationRoutingRulesRedirectRuleToTerraform(struct!.redirectRule),
    routing_rule_condition: s3BucketWebsiteConfigurationRoutingRulesRoutingRuleConditionToTerraform(struct!.routingRuleCondition),
  }
}


export function s3BucketWebsiteConfigurationRoutingRulesToHclTerraform(struct?: S3BucketWebsiteConfigurationRoutingRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    redirect_rule: {
      value: s3BucketWebsiteConfigurationRoutingRulesRedirectRuleToHclTerraform(struct!.redirectRule),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketWebsiteConfigurationRoutingRulesRedirectRule",
    },
    routing_rule_condition: {
      value: s3BucketWebsiteConfigurationRoutingRulesRoutingRuleConditionToHclTerraform(struct!.routingRuleCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketWebsiteConfigurationRoutingRulesRoutingRuleCondition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketWebsiteConfigurationRoutingRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3BucketWebsiteConfigurationRoutingRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._redirectRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectRule = this._redirectRule?.internalValue;
    }
    if (this._routingRuleCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingRuleCondition = this._routingRuleCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketWebsiteConfigurationRoutingRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._redirectRule.internalValue = undefined;
      this._routingRuleCondition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._redirectRule.internalValue = value.redirectRule;
      this._routingRuleCondition.internalValue = value.routingRuleCondition;
    }
  }

  // redirect_rule - computed: true, optional: true, required: false
  private _redirectRule = new S3BucketWebsiteConfigurationRoutingRulesRedirectRuleOutputReference(this, "redirect_rule");
  public get redirectRule() {
    return this._redirectRule;
  }
  public putRedirectRule(value: S3BucketWebsiteConfigurationRoutingRulesRedirectRule) {
    this._redirectRule.internalValue = value;
  }
  public resetRedirectRule() {
    this._redirectRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectRuleInput() {
    return this._redirectRule.internalValue;
  }

  // routing_rule_condition - computed: true, optional: true, required: false
  private _routingRuleCondition = new S3BucketWebsiteConfigurationRoutingRulesRoutingRuleConditionOutputReference(this, "routing_rule_condition");
  public get routingRuleCondition() {
    return this._routingRuleCondition;
  }
  public putRoutingRuleCondition(value: S3BucketWebsiteConfigurationRoutingRulesRoutingRuleCondition) {
    this._routingRuleCondition.internalValue = value;
  }
  public resetRoutingRuleCondition() {
    this._routingRuleCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingRuleConditionInput() {
    return this._routingRuleCondition.internalValue;
  }
}

export class S3BucketWebsiteConfigurationRoutingRulesList extends cdktn.ComplexList {
  public internalValue? : S3BucketWebsiteConfigurationRoutingRules[] | cdktn.IResolvable

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
  public get(index: number): S3BucketWebsiteConfigurationRoutingRulesOutputReference {
    return new S3BucketWebsiteConfigurationRoutingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketWebsiteConfiguration {
  /**
  * The name of the error document for the website.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#error_document S3Bucket#error_document}
  */
  readonly errorDocument?: string;
  /**
  * The name of the index document for the website.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#index_document S3Bucket#index_document}
  */
  readonly indexDocument?: string;
  /**
  * The redirect behavior for every request to this bucket's website endpoint.
  *   If you specify this property, you can't specify any other property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#redirect_all_requests_to S3Bucket#redirect_all_requests_to}
  */
  readonly redirectAllRequestsTo?: S3BucketWebsiteConfigurationRedirectAllRequestsTo;
  /**
  * Rules that define when a redirect is applied and the redirect behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#routing_rules S3Bucket#routing_rules}
  */
  readonly routingRules?: S3BucketWebsiteConfigurationRoutingRules[] | cdktn.IResolvable;
}

export function s3BucketWebsiteConfigurationToTerraform(struct?: S3BucketWebsiteConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    error_document: cdktn.stringToTerraform(struct!.errorDocument),
    index_document: cdktn.stringToTerraform(struct!.indexDocument),
    redirect_all_requests_to: s3BucketWebsiteConfigurationRedirectAllRequestsToToTerraform(struct!.redirectAllRequestsTo),
    routing_rules: cdktn.listMapper(s3BucketWebsiteConfigurationRoutingRulesToTerraform, false)(struct!.routingRules),
  }
}


export function s3BucketWebsiteConfigurationToHclTerraform(struct?: S3BucketWebsiteConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    error_document: {
      value: cdktn.stringToHclTerraform(struct!.errorDocument),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_document: {
      value: cdktn.stringToHclTerraform(struct!.indexDocument),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_all_requests_to: {
      value: s3BucketWebsiteConfigurationRedirectAllRequestsToToHclTerraform(struct!.redirectAllRequestsTo),
      isBlock: true,
      type: "struct",
      storageClassType: "S3BucketWebsiteConfigurationRedirectAllRequestsTo",
    },
    routing_rules: {
      value: cdktn.listMapperHcl(s3BucketWebsiteConfigurationRoutingRulesToHclTerraform, false)(struct!.routingRules),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketWebsiteConfigurationRoutingRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketWebsiteConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketWebsiteConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorDocument !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorDocument = this._errorDocument;
    }
    if (this._indexDocument !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexDocument = this._indexDocument;
    }
    if (this._redirectAllRequestsTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectAllRequestsTo = this._redirectAllRequestsTo?.internalValue;
    }
    if (this._routingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingRules = this._routingRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketWebsiteConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorDocument = undefined;
      this._indexDocument = undefined;
      this._redirectAllRequestsTo.internalValue = undefined;
      this._routingRules.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorDocument = value.errorDocument;
      this._indexDocument = value.indexDocument;
      this._redirectAllRequestsTo.internalValue = value.redirectAllRequestsTo;
      this._routingRules.internalValue = value.routingRules;
    }
  }

  // error_document - computed: true, optional: true, required: false
  private _errorDocument?: string; 
  public get errorDocument() {
    return this.getStringAttribute('error_document');
  }
  public set errorDocument(value: string) {
    this._errorDocument = value;
  }
  public resetErrorDocument() {
    this._errorDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorDocumentInput() {
    return this._errorDocument;
  }

  // index_document - computed: true, optional: true, required: false
  private _indexDocument?: string; 
  public get indexDocument() {
    return this.getStringAttribute('index_document');
  }
  public set indexDocument(value: string) {
    this._indexDocument = value;
  }
  public resetIndexDocument() {
    this._indexDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexDocumentInput() {
    return this._indexDocument;
  }

  // redirect_all_requests_to - computed: true, optional: true, required: false
  private _redirectAllRequestsTo = new S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference(this, "redirect_all_requests_to");
  public get redirectAllRequestsTo() {
    return this._redirectAllRequestsTo;
  }
  public putRedirectAllRequestsTo(value: S3BucketWebsiteConfigurationRedirectAllRequestsTo) {
    this._redirectAllRequestsTo.internalValue = value;
  }
  public resetRedirectAllRequestsTo() {
    this._redirectAllRequestsTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectAllRequestsToInput() {
    return this._redirectAllRequestsTo.internalValue;
  }

  // routing_rules - computed: true, optional: true, required: false
  private _routingRules = new S3BucketWebsiteConfigurationRoutingRulesList(this, "routing_rules", false);
  public get routingRules() {
    return this._routingRules;
  }
  public putRoutingRules(value: S3BucketWebsiteConfigurationRoutingRules[] | cdktn.IResolvable) {
    this._routingRules.internalValue = value;
  }
  public resetRoutingRules() {
    this._routingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingRulesInput() {
    return this._routingRules.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket awscc_s3_bucket}
*/
export class S3Bucket extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_s3_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a S3Bucket resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3Bucket to import
  * @param importFromId The id of the existing S3Bucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3Bucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3_bucket awscc_s3_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketConfig = {}
  */
  public constructor(scope: Construct, id: string, config: S3BucketConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_s3_bucket',
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
    this._accelerateConfiguration.internalValue = config.accelerateConfiguration;
    this._accessControl = config.accessControl;
    this._analyticsConfigurations.internalValue = config.analyticsConfigurations;
    this._bucketEncryption.internalValue = config.bucketEncryption;
    this._bucketName = config.bucketName;
    this._corsConfiguration.internalValue = config.corsConfiguration;
    this._intelligentTieringConfigurations.internalValue = config.intelligentTieringConfigurations;
    this._inventoryConfigurations.internalValue = config.inventoryConfigurations;
    this._lifecycleConfiguration.internalValue = config.lifecycleConfiguration;
    this._loggingConfiguration.internalValue = config.loggingConfiguration;
    this._metadataTableConfiguration.internalValue = config.metadataTableConfiguration;
    this._metricsConfigurations.internalValue = config.metricsConfigurations;
    this._notificationConfiguration.internalValue = config.notificationConfiguration;
    this._objectLockConfiguration.internalValue = config.objectLockConfiguration;
    this._objectLockEnabled = config.objectLockEnabled;
    this._ownershipControls.internalValue = config.ownershipControls;
    this._publicAccessBlockConfiguration.internalValue = config.publicAccessBlockConfiguration;
    this._replicationConfiguration.internalValue = config.replicationConfiguration;
    this._tags.internalValue = config.tags;
    this._versioningConfiguration.internalValue = config.versioningConfiguration;
    this._websiteConfiguration.internalValue = config.websiteConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accelerate_configuration - computed: true, optional: true, required: false
  private _accelerateConfiguration = new S3BucketAccelerateConfigurationOutputReference(this, "accelerate_configuration");
  public get accelerateConfiguration() {
    return this._accelerateConfiguration;
  }
  public putAccelerateConfiguration(value: S3BucketAccelerateConfiguration) {
    this._accelerateConfiguration.internalValue = value;
  }
  public resetAccelerateConfiguration() {
    this._accelerateConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accelerateConfigurationInput() {
    return this._accelerateConfiguration.internalValue;
  }

  // access_control - computed: true, optional: true, required: false
  private _accessControl?: string; 
  public get accessControl() {
    return this.getStringAttribute('access_control');
  }
  public set accessControl(value: string) {
    this._accessControl = value;
  }
  public resetAccessControl() {
    this._accessControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlInput() {
    return this._accessControl;
  }

  // analytics_configurations - computed: true, optional: true, required: false
  private _analyticsConfigurations = new S3BucketAnalyticsConfigurationsList(this, "analytics_configurations", false);
  public get analyticsConfigurations() {
    return this._analyticsConfigurations;
  }
  public putAnalyticsConfigurations(value: S3BucketAnalyticsConfigurations[] | cdktn.IResolvable) {
    this._analyticsConfigurations.internalValue = value;
  }
  public resetAnalyticsConfigurations() {
    this._analyticsConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsConfigurationsInput() {
    return this._analyticsConfigurations.internalValue;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bucket_encryption - computed: true, optional: true, required: false
  private _bucketEncryption = new S3BucketBucketEncryptionOutputReference(this, "bucket_encryption");
  public get bucketEncryption() {
    return this._bucketEncryption;
  }
  public putBucketEncryption(value: S3BucketBucketEncryption) {
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

  // cors_configuration - computed: true, optional: true, required: false
  private _corsConfiguration = new S3BucketCorsConfigurationOutputReference(this, "cors_configuration");
  public get corsConfiguration() {
    return this._corsConfiguration;
  }
  public putCorsConfiguration(value: S3BucketCorsConfiguration) {
    this._corsConfiguration.internalValue = value;
  }
  public resetCorsConfiguration() {
    this._corsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsConfigurationInput() {
    return this._corsConfiguration.internalValue;
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // dual_stack_domain_name - computed: true, optional: false, required: false
  public get dualStackDomainName() {
    return this.getStringAttribute('dual_stack_domain_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // intelligent_tiering_configurations - computed: true, optional: true, required: false
  private _intelligentTieringConfigurations = new S3BucketIntelligentTieringConfigurationsList(this, "intelligent_tiering_configurations", false);
  public get intelligentTieringConfigurations() {
    return this._intelligentTieringConfigurations;
  }
  public putIntelligentTieringConfigurations(value: S3BucketIntelligentTieringConfigurations[] | cdktn.IResolvable) {
    this._intelligentTieringConfigurations.internalValue = value;
  }
  public resetIntelligentTieringConfigurations() {
    this._intelligentTieringConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intelligentTieringConfigurationsInput() {
    return this._intelligentTieringConfigurations.internalValue;
  }

  // inventory_configurations - computed: true, optional: true, required: false
  private _inventoryConfigurations = new S3BucketInventoryConfigurationsList(this, "inventory_configurations", false);
  public get inventoryConfigurations() {
    return this._inventoryConfigurations;
  }
  public putInventoryConfigurations(value: S3BucketInventoryConfigurations[] | cdktn.IResolvable) {
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
  private _lifecycleConfiguration = new S3BucketLifecycleConfigurationOutputReference(this, "lifecycle_configuration");
  public get lifecycleConfiguration() {
    return this._lifecycleConfiguration;
  }
  public putLifecycleConfiguration(value: S3BucketLifecycleConfiguration) {
    this._lifecycleConfiguration.internalValue = value;
  }
  public resetLifecycleConfiguration() {
    this._lifecycleConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigurationInput() {
    return this._lifecycleConfiguration.internalValue;
  }

  // logging_configuration - computed: true, optional: true, required: false
  private _loggingConfiguration = new S3BucketLoggingConfigurationOutputReference(this, "logging_configuration");
  public get loggingConfiguration() {
    return this._loggingConfiguration;
  }
  public putLoggingConfiguration(value: S3BucketLoggingConfiguration) {
    this._loggingConfiguration.internalValue = value;
  }
  public resetLoggingConfiguration() {
    this._loggingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigurationInput() {
    return this._loggingConfiguration.internalValue;
  }

  // metadata_table_configuration - computed: true, optional: true, required: false
  private _metadataTableConfiguration = new S3BucketMetadataTableConfigurationOutputReference(this, "metadata_table_configuration");
  public get metadataTableConfiguration() {
    return this._metadataTableConfiguration;
  }
  public putMetadataTableConfiguration(value: S3BucketMetadataTableConfiguration) {
    this._metadataTableConfiguration.internalValue = value;
  }
  public resetMetadataTableConfiguration() {
    this._metadataTableConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataTableConfigurationInput() {
    return this._metadataTableConfiguration.internalValue;
  }

  // metrics_configurations - computed: true, optional: true, required: false
  private _metricsConfigurations = new S3BucketMetricsConfigurationsList(this, "metrics_configurations", false);
  public get metricsConfigurations() {
    return this._metricsConfigurations;
  }
  public putMetricsConfigurations(value: S3BucketMetricsConfigurations[] | cdktn.IResolvable) {
    this._metricsConfigurations.internalValue = value;
  }
  public resetMetricsConfigurations() {
    this._metricsConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsConfigurationsInput() {
    return this._metricsConfigurations.internalValue;
  }

  // notification_configuration - computed: true, optional: true, required: false
  private _notificationConfiguration = new S3BucketNotificationConfigurationOutputReference(this, "notification_configuration");
  public get notificationConfiguration() {
    return this._notificationConfiguration;
  }
  public putNotificationConfiguration(value: S3BucketNotificationConfiguration) {
    this._notificationConfiguration.internalValue = value;
  }
  public resetNotificationConfiguration() {
    this._notificationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigurationInput() {
    return this._notificationConfiguration.internalValue;
  }

  // object_lock_configuration - computed: true, optional: true, required: false
  private _objectLockConfiguration = new S3BucketObjectLockConfigurationOutputReference(this, "object_lock_configuration");
  public get objectLockConfiguration() {
    return this._objectLockConfiguration;
  }
  public putObjectLockConfiguration(value: S3BucketObjectLockConfiguration) {
    this._objectLockConfiguration.internalValue = value;
  }
  public resetObjectLockConfiguration() {
    this._objectLockConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLockConfigurationInput() {
    return this._objectLockConfiguration.internalValue;
  }

  // object_lock_enabled - computed: true, optional: true, required: false
  private _objectLockEnabled?: boolean | cdktn.IResolvable; 
  public get objectLockEnabled() {
    return this.getBooleanAttribute('object_lock_enabled');
  }
  public set objectLockEnabled(value: boolean | cdktn.IResolvable) {
    this._objectLockEnabled = value;
  }
  public resetObjectLockEnabled() {
    this._objectLockEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLockEnabledInput() {
    return this._objectLockEnabled;
  }

  // ownership_controls - computed: true, optional: true, required: false
  private _ownershipControls = new S3BucketOwnershipControlsOutputReference(this, "ownership_controls");
  public get ownershipControls() {
    return this._ownershipControls;
  }
  public putOwnershipControls(value: S3BucketOwnershipControls) {
    this._ownershipControls.internalValue = value;
  }
  public resetOwnershipControls() {
    this._ownershipControls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownershipControlsInput() {
    return this._ownershipControls.internalValue;
  }

  // public_access_block_configuration - computed: true, optional: true, required: false
  private _publicAccessBlockConfiguration = new S3BucketPublicAccessBlockConfigurationOutputReference(this, "public_access_block_configuration");
  public get publicAccessBlockConfiguration() {
    return this._publicAccessBlockConfiguration;
  }
  public putPublicAccessBlockConfiguration(value: S3BucketPublicAccessBlockConfiguration) {
    this._publicAccessBlockConfiguration.internalValue = value;
  }
  public resetPublicAccessBlockConfiguration() {
    this._publicAccessBlockConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessBlockConfigurationInput() {
    return this._publicAccessBlockConfiguration.internalValue;
  }

  // regional_domain_name - computed: true, optional: false, required: false
  public get regionalDomainName() {
    return this.getStringAttribute('regional_domain_name');
  }

  // replication_configuration - computed: true, optional: true, required: false
  private _replicationConfiguration = new S3BucketReplicationConfigurationOutputReference(this, "replication_configuration");
  public get replicationConfiguration() {
    return this._replicationConfiguration;
  }
  public putReplicationConfiguration(value: S3BucketReplicationConfiguration) {
    this._replicationConfiguration.internalValue = value;
  }
  public resetReplicationConfiguration() {
    this._replicationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationConfigurationInput() {
    return this._replicationConfiguration.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new S3BucketTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: S3BucketTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // versioning_configuration - computed: true, optional: true, required: false
  private _versioningConfiguration = new S3BucketVersioningConfigurationOutputReference(this, "versioning_configuration");
  public get versioningConfiguration() {
    return this._versioningConfiguration;
  }
  public putVersioningConfiguration(value: S3BucketVersioningConfiguration) {
    this._versioningConfiguration.internalValue = value;
  }
  public resetVersioningConfiguration() {
    this._versioningConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versioningConfigurationInput() {
    return this._versioningConfiguration.internalValue;
  }

  // website_configuration - computed: true, optional: true, required: false
  private _websiteConfiguration = new S3BucketWebsiteConfigurationOutputReference(this, "website_configuration");
  public get websiteConfiguration() {
    return this._websiteConfiguration;
  }
  public putWebsiteConfiguration(value: S3BucketWebsiteConfiguration) {
    this._websiteConfiguration.internalValue = value;
  }
  public resetWebsiteConfiguration() {
    this._websiteConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteConfigurationInput() {
    return this._websiteConfiguration.internalValue;
  }

  // website_url - computed: true, optional: false, required: false
  public get websiteUrl() {
    return this.getStringAttribute('website_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accelerate_configuration: s3BucketAccelerateConfigurationToTerraform(this._accelerateConfiguration.internalValue),
      access_control: cdktn.stringToTerraform(this._accessControl),
      analytics_configurations: cdktn.listMapper(s3BucketAnalyticsConfigurationsToTerraform, false)(this._analyticsConfigurations.internalValue),
      bucket_encryption: s3BucketBucketEncryptionToTerraform(this._bucketEncryption.internalValue),
      bucket_name: cdktn.stringToTerraform(this._bucketName),
      cors_configuration: s3BucketCorsConfigurationToTerraform(this._corsConfiguration.internalValue),
      intelligent_tiering_configurations: cdktn.listMapper(s3BucketIntelligentTieringConfigurationsToTerraform, false)(this._intelligentTieringConfigurations.internalValue),
      inventory_configurations: cdktn.listMapper(s3BucketInventoryConfigurationsToTerraform, false)(this._inventoryConfigurations.internalValue),
      lifecycle_configuration: s3BucketLifecycleConfigurationToTerraform(this._lifecycleConfiguration.internalValue),
      logging_configuration: s3BucketLoggingConfigurationToTerraform(this._loggingConfiguration.internalValue),
      metadata_table_configuration: s3BucketMetadataTableConfigurationToTerraform(this._metadataTableConfiguration.internalValue),
      metrics_configurations: cdktn.listMapper(s3BucketMetricsConfigurationsToTerraform, false)(this._metricsConfigurations.internalValue),
      notification_configuration: s3BucketNotificationConfigurationToTerraform(this._notificationConfiguration.internalValue),
      object_lock_configuration: s3BucketObjectLockConfigurationToTerraform(this._objectLockConfiguration.internalValue),
      object_lock_enabled: cdktn.booleanToTerraform(this._objectLockEnabled),
      ownership_controls: s3BucketOwnershipControlsToTerraform(this._ownershipControls.internalValue),
      public_access_block_configuration: s3BucketPublicAccessBlockConfigurationToTerraform(this._publicAccessBlockConfiguration.internalValue),
      replication_configuration: s3BucketReplicationConfigurationToTerraform(this._replicationConfiguration.internalValue),
      tags: cdktn.listMapper(s3BucketTagsToTerraform, false)(this._tags.internalValue),
      versioning_configuration: s3BucketVersioningConfigurationToTerraform(this._versioningConfiguration.internalValue),
      website_configuration: s3BucketWebsiteConfigurationToTerraform(this._websiteConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accelerate_configuration: {
        value: s3BucketAccelerateConfigurationToHclTerraform(this._accelerateConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3BucketAccelerateConfiguration",
      },
      access_control: {
        value: cdktn.stringToHclTerraform(this._accessControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analytics_configurations: {
        value: cdktn.listMapperHcl(s3BucketAnalyticsConfigurationsToHclTerraform, false)(this._analyticsConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3BucketAnalyticsConfigurationsList",
      },
      bucket_encryption: {
        value: s3BucketBucketEncryptionToHclTerraform(this._bucketEncryption.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3BucketBucketEncryption",
      },
      bucket_name: {
        value: cdktn.stringToHclTerraform(this._bucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cors_configuration: {
        value: s3BucketCorsConfigurationToHclTerraform(this._corsConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3BucketCorsConfiguration",
      },
      intelligent_tiering_configurations: {
        value: cdktn.listMapperHcl(s3BucketIntelligentTieringConfigurationsToHclTerraform, false)(this._intelligentTieringConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3BucketIntelligentTieringConfigurationsList",
      },
      inventory_configurations: {
        value: cdktn.listMapperHcl(s3BucketInventoryConfigurationsToHclTerraform, false)(this._inventoryConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3BucketInventoryConfigurationsList",
      },
      lifecycle_configuration: {
        value: s3BucketLifecycleConfigurationToHclTerraform(this._lifecycleConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3BucketLifecycleConfiguration",
      },
      logging_configuration: {
        value: s3BucketLoggingConfigurationToHclTerraform(this._loggingConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3BucketLoggingConfiguration",
      },
      metadata_table_configuration: {
        value: s3BucketMetadataTableConfigurationToHclTerraform(this._metadataTableConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3BucketMetadataTableConfiguration",
      },
      metrics_configurations: {
        value: cdktn.listMapperHcl(s3BucketMetricsConfigurationsToHclTerraform, false)(this._metricsConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3BucketMetricsConfigurationsList",
      },
      notification_configuration: {
        value: s3BucketNotificationConfigurationToHclTerraform(this._notificationConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3BucketNotificationConfiguration",
      },
      object_lock_configuration: {
        value: s3BucketObjectLockConfigurationToHclTerraform(this._objectLockConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3BucketObjectLockConfiguration",
      },
      object_lock_enabled: {
        value: cdktn.booleanToHclTerraform(this._objectLockEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ownership_controls: {
        value: s3BucketOwnershipControlsToHclTerraform(this._ownershipControls.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3BucketOwnershipControls",
      },
      public_access_block_configuration: {
        value: s3BucketPublicAccessBlockConfigurationToHclTerraform(this._publicAccessBlockConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3BucketPublicAccessBlockConfiguration",
      },
      replication_configuration: {
        value: s3BucketReplicationConfigurationToHclTerraform(this._replicationConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3BucketReplicationConfiguration",
      },
      tags: {
        value: cdktn.listMapperHcl(s3BucketTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3BucketTagsList",
      },
      versioning_configuration: {
        value: s3BucketVersioningConfigurationToHclTerraform(this._versioningConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3BucketVersioningConfiguration",
      },
      website_configuration: {
        value: s3BucketWebsiteConfigurationToHclTerraform(this._websiteConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3BucketWebsiteConfiguration",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
