// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_instance_storage_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ConnectInstanceStorageConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Connect Instance ID with which the storage config will be associated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_instance_storage_config#instance_arn ConnectInstanceStorageConfig#instance_arn}
  */
  readonly instanceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_instance_storage_config#kinesis_firehose_config ConnectInstanceStorageConfig#kinesis_firehose_config}
  */
  readonly kinesisFirehoseConfig?: ConnectInstanceStorageConfigKinesisFirehoseConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_instance_storage_config#kinesis_stream_config ConnectInstanceStorageConfig#kinesis_stream_config}
  */
  readonly kinesisStreamConfig?: ConnectInstanceStorageConfigKinesisStreamConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_instance_storage_config#kinesis_video_stream_config ConnectInstanceStorageConfig#kinesis_video_stream_config}
  */
  readonly kinesisVideoStreamConfig?: ConnectInstanceStorageConfigKinesisVideoStreamConfig;
  /**
  * Specifies the type of storage resource available for the instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_instance_storage_config#resource_type ConnectInstanceStorageConfig#resource_type}
  */
  readonly resourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_instance_storage_config#s3_config ConnectInstanceStorageConfig#s3_config}
  */
  readonly s3Config?: ConnectInstanceStorageConfigS3Config;
  /**
  * Specifies the storage type to be associated with the instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_instance_storage_config#storage_type ConnectInstanceStorageConfig#storage_type}
  */
  readonly storageType: string;
}
export interface ConnectInstanceStorageConfigKinesisFirehoseConfig {
  /**
  * An ARN is a unique AWS resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_instance_storage_config#firehose_arn ConnectInstanceStorageConfig#firehose_arn}
  */
  readonly firehoseArn?: string;
}

export function connectInstanceStorageConfigKinesisFirehoseConfigToTerraform(struct?: ConnectInstanceStorageConfigKinesisFirehoseConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    firehose_arn: cdktn.stringToTerraform(struct!.firehoseArn),
  }
}


export function connectInstanceStorageConfigKinesisFirehoseConfigToHclTerraform(struct?: ConnectInstanceStorageConfigKinesisFirehoseConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    firehose_arn: {
      value: cdktn.stringToHclTerraform(struct!.firehoseArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectInstanceStorageConfigKinesisFirehoseConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firehoseArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.firehoseArn = this._firehoseArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectInstanceStorageConfigKinesisFirehoseConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._firehoseArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._firehoseArn = value.firehoseArn;
    }
  }

  // firehose_arn - computed: true, optional: true, required: false
  private _firehoseArn?: string; 
  public get firehoseArn() {
    return this.getStringAttribute('firehose_arn');
  }
  public set firehoseArn(value: string) {
    this._firehoseArn = value;
  }
  public resetFirehoseArn() {
    this._firehoseArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseArnInput() {
    return this._firehoseArn;
  }
}
export interface ConnectInstanceStorageConfigKinesisStreamConfig {
  /**
  * An ARN is a unique AWS resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_instance_storage_config#stream_arn ConnectInstanceStorageConfig#stream_arn}
  */
  readonly streamArn?: string;
}

export function connectInstanceStorageConfigKinesisStreamConfigToTerraform(struct?: ConnectInstanceStorageConfigKinesisStreamConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    stream_arn: cdktn.stringToTerraform(struct!.streamArn),
  }
}


export function connectInstanceStorageConfigKinesisStreamConfigToHclTerraform(struct?: ConnectInstanceStorageConfigKinesisStreamConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    stream_arn: {
      value: cdktn.stringToHclTerraform(struct!.streamArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectInstanceStorageConfigKinesisStreamConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectInstanceStorageConfigKinesisStreamConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._streamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamArn = this._streamArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectInstanceStorageConfigKinesisStreamConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._streamArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._streamArn = value.streamArn;
    }
  }

  // stream_arn - computed: true, optional: true, required: false
  private _streamArn?: string; 
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }
  public set streamArn(value: string) {
    this._streamArn = value;
  }
  public resetStreamArn() {
    this._streamArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamArnInput() {
    return this._streamArn;
  }
}
export interface ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig {
  /**
  * Specifies default encryption using AWS KMS-Managed Keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_instance_storage_config#encryption_type ConnectInstanceStorageConfig#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Specifies the encryption key id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_instance_storage_config#key_id ConnectInstanceStorageConfig#key_id}
  */
  readonly keyId?: string;
}

export function connectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigToTerraform(struct?: ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_type: cdktn.stringToTerraform(struct!.encryptionType),
    key_id: cdktn.stringToTerraform(struct!.keyId),
  }
}


export function connectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigToHclTerraform(struct?: ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig | cdktn.IResolvable): any {
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
    key_id: {
      value: cdktn.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionType = undefined;
      this._keyId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionType = value.encryptionType;
      this._keyId = value.keyId;
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

  // key_id - computed: true, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}
export interface ConnectInstanceStorageConfigKinesisVideoStreamConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_instance_storage_config#encryption_config ConnectInstanceStorageConfig#encryption_config}
  */
  readonly encryptionConfig?: ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig;
  /**
  * Prefixes are used to infer logical hierarchy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_instance_storage_config#prefix ConnectInstanceStorageConfig#prefix}
  */
  readonly prefix?: string;
  /**
  * Number of hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_instance_storage_config#retention_period_hours ConnectInstanceStorageConfig#retention_period_hours}
  */
  readonly retentionPeriodHours?: number;
}

export function connectInstanceStorageConfigKinesisVideoStreamConfigToTerraform(struct?: ConnectInstanceStorageConfigKinesisVideoStreamConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_config: connectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigToTerraform(struct!.encryptionConfig),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    retention_period_hours: cdktn.numberToTerraform(struct!.retentionPeriodHours),
  }
}


export function connectInstanceStorageConfigKinesisVideoStreamConfigToHclTerraform(struct?: ConnectInstanceStorageConfigKinesisVideoStreamConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_config: {
      value: connectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigToHclTerraform(struct!.encryptionConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_period_hours: {
      value: cdktn.numberToHclTerraform(struct!.retentionPeriodHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectInstanceStorageConfigKinesisVideoStreamConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfig = this._encryptionConfig?.internalValue;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._retentionPeriodHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriodHours = this._retentionPeriodHours;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectInstanceStorageConfigKinesisVideoStreamConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionConfig.internalValue = undefined;
      this._prefix = undefined;
      this._retentionPeriodHours = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionConfig.internalValue = value.encryptionConfig;
      this._prefix = value.prefix;
      this._retentionPeriodHours = value.retentionPeriodHours;
    }
  }

  // encryption_config - computed: true, optional: true, required: false
  private _encryptionConfig = new ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
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

  // retention_period_hours - computed: true, optional: true, required: false
  private _retentionPeriodHours?: number; 
  public get retentionPeriodHours() {
    return this.getNumberAttribute('retention_period_hours');
  }
  public set retentionPeriodHours(value: number) {
    this._retentionPeriodHours = value;
  }
  public resetRetentionPeriodHours() {
    this._retentionPeriodHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodHoursInput() {
    return this._retentionPeriodHours;
  }
}
export interface ConnectInstanceStorageConfigS3ConfigEncryptionConfig {
  /**
  * Specifies default encryption using AWS KMS-Managed Keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_instance_storage_config#encryption_type ConnectInstanceStorageConfig#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Specifies the encryption key id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_instance_storage_config#key_id ConnectInstanceStorageConfig#key_id}
  */
  readonly keyId?: string;
}

export function connectInstanceStorageConfigS3ConfigEncryptionConfigToTerraform(struct?: ConnectInstanceStorageConfigS3ConfigEncryptionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_type: cdktn.stringToTerraform(struct!.encryptionType),
    key_id: cdktn.stringToTerraform(struct!.keyId),
  }
}


export function connectInstanceStorageConfigS3ConfigEncryptionConfigToHclTerraform(struct?: ConnectInstanceStorageConfigS3ConfigEncryptionConfig | cdktn.IResolvable): any {
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
    key_id: {
      value: cdktn.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectInstanceStorageConfigS3ConfigEncryptionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectInstanceStorageConfigS3ConfigEncryptionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionType = undefined;
      this._keyId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionType = value.encryptionType;
      this._keyId = value.keyId;
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

  // key_id - computed: true, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}
export interface ConnectInstanceStorageConfigS3Config {
  /**
  * A name for the S3 Bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_instance_storage_config#bucket_name ConnectInstanceStorageConfig#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Prefixes are used to infer logical hierarchy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_instance_storage_config#bucket_prefix ConnectInstanceStorageConfig#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_instance_storage_config#encryption_config ConnectInstanceStorageConfig#encryption_config}
  */
  readonly encryptionConfig?: ConnectInstanceStorageConfigS3ConfigEncryptionConfig;
}

export function connectInstanceStorageConfigS3ConfigToTerraform(struct?: ConnectInstanceStorageConfigS3Config | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
    encryption_config: connectInstanceStorageConfigS3ConfigEncryptionConfigToTerraform(struct!.encryptionConfig),
  }
}


export function connectInstanceStorageConfigS3ConfigToHclTerraform(struct?: ConnectInstanceStorageConfigS3Config | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_prefix: {
      value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_config: {
      value: connectInstanceStorageConfigS3ConfigEncryptionConfigToHclTerraform(struct!.encryptionConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectInstanceStorageConfigS3ConfigEncryptionConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectInstanceStorageConfigS3ConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectInstanceStorageConfigS3Config | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._encryptionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfig = this._encryptionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectInstanceStorageConfigS3Config | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._encryptionConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._encryptionConfig.internalValue = value.encryptionConfig;
    }
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

  // bucket_prefix - computed: true, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // encryption_config - computed: true, optional: true, required: false
  private _encryptionConfig = new ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: ConnectInstanceStorageConfigS3ConfigEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_instance_storage_config awscc_connect_instance_storage_config}
*/
export class ConnectInstanceStorageConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_connect_instance_storage_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ConnectInstanceStorageConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectInstanceStorageConfig to import
  * @param importFromId The id of the existing ConnectInstanceStorageConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_instance_storage_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectInstanceStorageConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_instance_storage_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_instance_storage_config awscc_connect_instance_storage_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectInstanceStorageConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectInstanceStorageConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_connect_instance_storage_config',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.94.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._instanceArn = config.instanceArn;
    this._kinesisFirehoseConfig.internalValue = config.kinesisFirehoseConfig;
    this._kinesisStreamConfig.internalValue = config.kinesisStreamConfig;
    this._kinesisVideoStreamConfig.internalValue = config.kinesisVideoStreamConfig;
    this._resourceType = config.resourceType;
    this._s3Config.internalValue = config.s3Config;
    this._storageType = config.storageType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // association_id - computed: true, optional: false, required: false
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_arn - computed: false, optional: false, required: true
  private _instanceArn?: string; 
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }
  public set instanceArn(value: string) {
    this._instanceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceArnInput() {
    return this._instanceArn;
  }

  // kinesis_firehose_config - computed: true, optional: true, required: false
  private _kinesisFirehoseConfig = new ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference(this, "kinesis_firehose_config");
  public get kinesisFirehoseConfig() {
    return this._kinesisFirehoseConfig;
  }
  public putKinesisFirehoseConfig(value: ConnectInstanceStorageConfigKinesisFirehoseConfig) {
    this._kinesisFirehoseConfig.internalValue = value;
  }
  public resetKinesisFirehoseConfig() {
    this._kinesisFirehoseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisFirehoseConfigInput() {
    return this._kinesisFirehoseConfig.internalValue;
  }

  // kinesis_stream_config - computed: true, optional: true, required: false
  private _kinesisStreamConfig = new ConnectInstanceStorageConfigKinesisStreamConfigOutputReference(this, "kinesis_stream_config");
  public get kinesisStreamConfig() {
    return this._kinesisStreamConfig;
  }
  public putKinesisStreamConfig(value: ConnectInstanceStorageConfigKinesisStreamConfig) {
    this._kinesisStreamConfig.internalValue = value;
  }
  public resetKinesisStreamConfig() {
    this._kinesisStreamConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisStreamConfigInput() {
    return this._kinesisStreamConfig.internalValue;
  }

  // kinesis_video_stream_config - computed: true, optional: true, required: false
  private _kinesisVideoStreamConfig = new ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference(this, "kinesis_video_stream_config");
  public get kinesisVideoStreamConfig() {
    return this._kinesisVideoStreamConfig;
  }
  public putKinesisVideoStreamConfig(value: ConnectInstanceStorageConfigKinesisVideoStreamConfig) {
    this._kinesisVideoStreamConfig.internalValue = value;
  }
  public resetKinesisVideoStreamConfig() {
    this._kinesisVideoStreamConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisVideoStreamConfigInput() {
    return this._kinesisVideoStreamConfig.internalValue;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // s3_config - computed: true, optional: true, required: false
  private _s3Config = new ConnectInstanceStorageConfigS3ConfigOutputReference(this, "s3_config");
  public get s3Config() {
    return this._s3Config;
  }
  public putS3Config(value: ConnectInstanceStorageConfigS3Config) {
    this._s3Config.internalValue = value;
  }
  public resetS3Config() {
    this._s3Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigInput() {
    return this._s3Config.internalValue;
  }

  // storage_type - computed: false, optional: false, required: true
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_arn: cdktn.stringToTerraform(this._instanceArn),
      kinesis_firehose_config: connectInstanceStorageConfigKinesisFirehoseConfigToTerraform(this._kinesisFirehoseConfig.internalValue),
      kinesis_stream_config: connectInstanceStorageConfigKinesisStreamConfigToTerraform(this._kinesisStreamConfig.internalValue),
      kinesis_video_stream_config: connectInstanceStorageConfigKinesisVideoStreamConfigToTerraform(this._kinesisVideoStreamConfig.internalValue),
      resource_type: cdktn.stringToTerraform(this._resourceType),
      s3_config: connectInstanceStorageConfigS3ConfigToTerraform(this._s3Config.internalValue),
      storage_type: cdktn.stringToTerraform(this._storageType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      instance_arn: {
        value: cdktn.stringToHclTerraform(this._instanceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kinesis_firehose_config: {
        value: connectInstanceStorageConfigKinesisFirehoseConfigToHclTerraform(this._kinesisFirehoseConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectInstanceStorageConfigKinesisFirehoseConfig",
      },
      kinesis_stream_config: {
        value: connectInstanceStorageConfigKinesisStreamConfigToHclTerraform(this._kinesisStreamConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectInstanceStorageConfigKinesisStreamConfig",
      },
      kinesis_video_stream_config: {
        value: connectInstanceStorageConfigKinesisVideoStreamConfigToHclTerraform(this._kinesisVideoStreamConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectInstanceStorageConfigKinesisVideoStreamConfig",
      },
      resource_type: {
        value: cdktn.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_config: {
        value: connectInstanceStorageConfigS3ConfigToHclTerraform(this._s3Config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectInstanceStorageConfigS3Config",
      },
      storage_type: {
        value: cdktn.stringToHclTerraform(this._storageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
