// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface TimestreamScheduledQueryConfig extends cdktn.TerraformMetaArguments {
  /**
  * Using a ClientToken makes the call to CreateScheduledQuery idempotent, in other words, making the same request repeatedly will produce the same result. Making multiple identical CreateScheduledQuery requests has the same effect as making a single request. If CreateScheduledQuery is called without a ClientToken, the Query SDK generates a ClientToken on your behalf. After 8 hours, any request with the same ClientToken is treated as a new request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#client_token TimestreamScheduledQuery#client_token}
  */
  readonly clientToken?: string;
  /**
  * Configuration for error reporting. Error reports will be generated when a problem is encountered when writing the query results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#error_report_configuration TimestreamScheduledQuery#error_report_configuration}
  */
  readonly errorReportConfiguration: TimestreamScheduledQueryErrorReportConfiguration;
  /**
  * The Amazon KMS key used to encrypt the scheduled query resource, at-rest. If the Amazon KMS key is not specified, the scheduled query resource will be encrypted with a Timestream owned Amazon KMS key. To specify a KMS key, use the key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix the name with alias/. If ErrorReportConfiguration uses SSE_KMS as encryption type, the same KmsKeyId is used to encrypt the error report at rest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#kms_key_id TimestreamScheduledQuery#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Notification configuration for the scheduled query. A notification is sent by Timestream when a query run finishes, when the state is updated or when you delete it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#notification_configuration TimestreamScheduledQuery#notification_configuration}
  */
  readonly notificationConfiguration: TimestreamScheduledQueryNotificationConfiguration;
  /**
  * The query string to run. Parameter names can be specified in the query string @ character followed by an identifier. The named Parameter @scheduled_runtime is reserved and can be used in the query to get the time at which the query is scheduled to run. The timestamp calculated according to the ScheduleConfiguration parameter, will be the value of @scheduled_runtime paramater for each query run. For example, consider an instance of a scheduled query executing on 2021-12-01 00:00:00. For this instance, the @scheduled_runtime parameter is initialized to the timestamp 2021-12-01 00:00:00 when invoking the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#query_string TimestreamScheduledQuery#query_string}
  */
  readonly queryString: string;
  /**
  * Configuration for when the scheduled query is executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#schedule_configuration TimestreamScheduledQuery#schedule_configuration}
  */
  readonly scheduleConfiguration: TimestreamScheduledQueryScheduleConfiguration;
  /**
  * The ARN for the IAM role that Timestream will assume when running the scheduled query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#scheduled_query_execution_role_arn TimestreamScheduledQuery#scheduled_query_execution_role_arn}
  */
  readonly scheduledQueryExecutionRoleArn: string;
  /**
  * The name of the scheduled query. Scheduled query names must be unique within each Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#scheduled_query_name TimestreamScheduledQuery#scheduled_query_name}
  */
  readonly scheduledQueryName?: string;
  /**
  * A list of key-value pairs to label the scheduled query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#tags TimestreamScheduledQuery#tags}
  */
  readonly tags?: TimestreamScheduledQueryTags[] | cdktn.IResolvable;
  /**
  * Configuration of target store where scheduled query results are written to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#target_configuration TimestreamScheduledQuery#target_configuration}
  */
  readonly targetConfiguration?: TimestreamScheduledQueryTargetConfiguration;
}
export interface TimestreamScheduledQueryErrorReportConfigurationS3Configuration {
  /**
  * Name of the S3 bucket under which error reports will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#bucket_name TimestreamScheduledQuery#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Encryption at rest options for the error reports. If no encryption option is specified, Timestream will choose SSE_S3 as default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#encryption_option TimestreamScheduledQuery#encryption_option}
  */
  readonly encryptionOption?: string;
  /**
  * Prefix for error report keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#object_key_prefix TimestreamScheduledQuery#object_key_prefix}
  */
  readonly objectKeyPrefix?: string;
}

export function timestreamScheduledQueryErrorReportConfigurationS3ConfigurationToTerraform(struct?: TimestreamScheduledQueryErrorReportConfigurationS3Configuration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    encryption_option: cdktn.stringToTerraform(struct!.encryptionOption),
    object_key_prefix: cdktn.stringToTerraform(struct!.objectKeyPrefix),
  }
}


export function timestreamScheduledQueryErrorReportConfigurationS3ConfigurationToHclTerraform(struct?: TimestreamScheduledQueryErrorReportConfigurationS3Configuration | cdktn.IResolvable): any {
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
    encryption_option: {
      value: cdktn.stringToHclTerraform(struct!.encryptionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_key_prefix: {
      value: cdktn.stringToHclTerraform(struct!.objectKeyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TimestreamScheduledQueryErrorReportConfigurationS3Configuration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._encryptionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionOption = this._encryptionOption;
    }
    if (this._objectKeyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectKeyPrefix = this._objectKeyPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamScheduledQueryErrorReportConfigurationS3Configuration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._encryptionOption = undefined;
      this._objectKeyPrefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._encryptionOption = value.encryptionOption;
      this._objectKeyPrefix = value.objectKeyPrefix;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string;
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // encryption_option - computed: true, optional: true, required: false
  private _encryptionOption?: string;
  public get encryptionOption() {
    return this.getStringAttribute('encryption_option');
  }
  public set encryptionOption(value: string) {
    this._encryptionOption = value;
  }
  public resetEncryptionOption() {
    this._encryptionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionOptionInput() {
    return this._encryptionOption;
  }

  // object_key_prefix - computed: true, optional: true, required: false
  private _objectKeyPrefix?: string;
  public get objectKeyPrefix() {
    return this.getStringAttribute('object_key_prefix');
  }
  public set objectKeyPrefix(value: string) {
    this._objectKeyPrefix = value;
  }
  public resetObjectKeyPrefix() {
    this._objectKeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectKeyPrefixInput() {
    return this._objectKeyPrefix;
  }
}
export interface TimestreamScheduledQueryErrorReportConfiguration {
  /**
  * Details on S3 location for error reports that result from running a query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#s3_configuration TimestreamScheduledQuery#s3_configuration}
  */
  readonly s3Configuration: TimestreamScheduledQueryErrorReportConfigurationS3Configuration;
}

export function timestreamScheduledQueryErrorReportConfigurationToTerraform(struct?: TimestreamScheduledQueryErrorReportConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_configuration: timestreamScheduledQueryErrorReportConfigurationS3ConfigurationToTerraform(struct!.s3Configuration),
  }
}


export function timestreamScheduledQueryErrorReportConfigurationToHclTerraform(struct?: TimestreamScheduledQueryErrorReportConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_configuration: {
      value: timestreamScheduledQueryErrorReportConfigurationS3ConfigurationToHclTerraform(struct!.s3Configuration),
      isBlock: true,
      type: "struct",
      storageClassType: "TimestreamScheduledQueryErrorReportConfigurationS3Configuration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamScheduledQueryErrorReportConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TimestreamScheduledQueryErrorReportConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamScheduledQueryErrorReportConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Configuration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Configuration.internalValue = value.s3Configuration;
    }
  }

  // s3_configuration - computed: false, optional: false, required: true
  private _s3Configuration = new TimestreamScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: TimestreamScheduledQueryErrorReportConfigurationS3Configuration) {
    this._s3Configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }
}
export interface TimestreamScheduledQueryNotificationConfigurationSnsConfiguration {
  /**
  * SNS topic ARN that the scheduled query status notifications will be sent to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#topic_arn TimestreamScheduledQuery#topic_arn}
  */
  readonly topicArn: string;
}

export function timestreamScheduledQueryNotificationConfigurationSnsConfigurationToTerraform(struct?: TimestreamScheduledQueryNotificationConfigurationSnsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    topic_arn: cdktn.stringToTerraform(struct!.topicArn),
  }
}


export function timestreamScheduledQueryNotificationConfigurationSnsConfigurationToHclTerraform(struct?: TimestreamScheduledQueryNotificationConfigurationSnsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    topic_arn: {
      value: cdktn.stringToHclTerraform(struct!.topicArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TimestreamScheduledQueryNotificationConfigurationSnsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicArn = this._topicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamScheduledQueryNotificationConfigurationSnsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._topicArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._topicArn = value.topicArn;
    }
  }

  // topic_arn - computed: false, optional: false, required: true
  private _topicArn?: string;
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
  public set topicArn(value: string) {
    this._topicArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicArnInput() {
    return this._topicArn;
  }
}
export interface TimestreamScheduledQueryNotificationConfiguration {
  /**
  * SNS configuration for notification upon scheduled query execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#sns_configuration TimestreamScheduledQuery#sns_configuration}
  */
  readonly snsConfiguration: TimestreamScheduledQueryNotificationConfigurationSnsConfiguration;
}

export function timestreamScheduledQueryNotificationConfigurationToTerraform(struct?: TimestreamScheduledQueryNotificationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sns_configuration: timestreamScheduledQueryNotificationConfigurationSnsConfigurationToTerraform(struct!.snsConfiguration),
  }
}


export function timestreamScheduledQueryNotificationConfigurationToHclTerraform(struct?: TimestreamScheduledQueryNotificationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sns_configuration: {
      value: timestreamScheduledQueryNotificationConfigurationSnsConfigurationToHclTerraform(struct!.snsConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "TimestreamScheduledQueryNotificationConfigurationSnsConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamScheduledQueryNotificationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TimestreamScheduledQueryNotificationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._snsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsConfiguration = this._snsConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamScheduledQueryNotificationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._snsConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._snsConfiguration.internalValue = value.snsConfiguration;
    }
  }

  // sns_configuration - computed: false, optional: false, required: true
  private _snsConfiguration = new TimestreamScheduledQueryNotificationConfigurationSnsConfigurationOutputReference(this, "sns_configuration");
  public get snsConfiguration() {
    return this._snsConfiguration;
  }
  public putSnsConfiguration(value: TimestreamScheduledQueryNotificationConfigurationSnsConfiguration) {
    this._snsConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snsConfigurationInput() {
    return this._snsConfiguration.internalValue;
  }
}
export interface TimestreamScheduledQueryScheduleConfiguration {
  /**
  * An expression that denotes when to trigger the scheduled query run. This can be a cron expression or a rate expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#schedule_expression TimestreamScheduledQuery#schedule_expression}
  */
  readonly scheduleExpression: string;
}

export function timestreamScheduledQueryScheduleConfigurationToTerraform(struct?: TimestreamScheduledQueryScheduleConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    schedule_expression: cdktn.stringToTerraform(struct!.scheduleExpression),
  }
}


export function timestreamScheduledQueryScheduleConfigurationToHclTerraform(struct?: TimestreamScheduledQueryScheduleConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    schedule_expression: {
      value: cdktn.stringToHclTerraform(struct!.scheduleExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamScheduledQueryScheduleConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TimestreamScheduledQueryScheduleConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scheduleExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleExpression = this._scheduleExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamScheduledQueryScheduleConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scheduleExpression = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scheduleExpression = value.scheduleExpression;
    }
  }

  // schedule_expression - computed: false, optional: false, required: true
  private _scheduleExpression?: string;
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
  public set scheduleExpression(value: string) {
    this._scheduleExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionInput() {
    return this._scheduleExpression;
  }
}
export interface TimestreamScheduledQueryTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#key TimestreamScheduledQuery#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#value TimestreamScheduledQuery#value}
  */
  readonly value?: string;
}

export function timestreamScheduledQueryTagsToTerraform(struct?: TimestreamScheduledQueryTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function timestreamScheduledQueryTagsToHclTerraform(struct?: TimestreamScheduledQueryTags | cdktn.IResolvable): any {
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

export class TimestreamScheduledQueryTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamScheduledQueryTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: TimestreamScheduledQueryTags | cdktn.IResolvable | undefined) {
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

export class TimestreamScheduledQueryTagsList extends cdktn.ComplexList {
  public internalValue? : TimestreamScheduledQueryTags[] | cdktn.IResolvable

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
  public get(index: number): TimestreamScheduledQueryTagsOutputReference {
    return new TimestreamScheduledQueryTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings {
  /**
  * Type for the dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#dimension_value_type TimestreamScheduledQuery#dimension_value_type}
  */
  readonly dimensionValueType?: string;
  /**
  * Column name from query result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#name TimestreamScheduledQuery#name}
  */
  readonly name?: string;
}

export function timestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsToTerraform(struct?: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimension_value_type: cdktn.stringToTerraform(struct!.dimensionValueType),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function timestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsToHclTerraform(struct?: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimension_value_type: {
      value: cdktn.stringToHclTerraform(struct!.dimensionValueType),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionValueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionValueType = this._dimensionValueType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionValueType = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionValueType = value.dimensionValueType;
      this._name = value.name;
    }
  }

  // dimension_value_type - computed: true, optional: true, required: false
  private _dimensionValueType?: string;
  public get dimensionValueType() {
    return this.getStringAttribute('dimension_value_type');
  }
  public set dimensionValueType(value: string) {
    this._dimensionValueType = value;
  }
  public resetDimensionValueType() {
    this._dimensionValueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionValueTypeInput() {
    return this._dimensionValueType;
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
}

export class TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList extends cdktn.ComplexList {
  public internalValue? : TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings[] | cdktn.IResolvable

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
  public get(index: number): TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference {
    return new TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings {
  /**
  * Value type of the measure value column to be read from the query result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#measure_value_type TimestreamScheduledQuery#measure_value_type}
  */
  readonly measureValueType?: string;
  /**
  * Source measure value column in the query result where the attribute value is to be read.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#source_column TimestreamScheduledQuery#source_column}
  */
  readonly sourceColumn?: string;
  /**
  * Custom name to be used for attribute name in derived table. If not provided, source column name would be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#target_multi_measure_attribute_name TimestreamScheduledQuery#target_multi_measure_attribute_name}
  */
  readonly targetMultiMeasureAttributeName?: string;
}

export function timestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsToTerraform(struct?: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    measure_value_type: cdktn.stringToTerraform(struct!.measureValueType),
    source_column: cdktn.stringToTerraform(struct!.sourceColumn),
    target_multi_measure_attribute_name: cdktn.stringToTerraform(struct!.targetMultiMeasureAttributeName),
  }
}


export function timestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsToHclTerraform(struct?: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    measure_value_type: {
      value: cdktn.stringToHclTerraform(struct!.measureValueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_column: {
      value: cdktn.stringToHclTerraform(struct!.sourceColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_multi_measure_attribute_name: {
      value: cdktn.stringToHclTerraform(struct!.targetMultiMeasureAttributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._measureValueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.measureValueType = this._measureValueType;
    }
    if (this._sourceColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceColumn = this._sourceColumn;
    }
    if (this._targetMultiMeasureAttributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetMultiMeasureAttributeName = this._targetMultiMeasureAttributeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._measureValueType = undefined;
      this._sourceColumn = undefined;
      this._targetMultiMeasureAttributeName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._measureValueType = value.measureValueType;
      this._sourceColumn = value.sourceColumn;
      this._targetMultiMeasureAttributeName = value.targetMultiMeasureAttributeName;
    }
  }

  // measure_value_type - computed: true, optional: true, required: false
  private _measureValueType?: string;
  public get measureValueType() {
    return this.getStringAttribute('measure_value_type');
  }
  public set measureValueType(value: string) {
    this._measureValueType = value;
  }
  public resetMeasureValueType() {
    this._measureValueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measureValueTypeInput() {
    return this._measureValueType;
  }

  // source_column - computed: true, optional: true, required: false
  private _sourceColumn?: string;
  public get sourceColumn() {
    return this.getStringAttribute('source_column');
  }
  public set sourceColumn(value: string) {
    this._sourceColumn = value;
  }
  public resetSourceColumn() {
    this._sourceColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceColumnInput() {
    return this._sourceColumn;
  }

  // target_multi_measure_attribute_name - computed: true, optional: true, required: false
  private _targetMultiMeasureAttributeName?: string;
  public get targetMultiMeasureAttributeName() {
    return this.getStringAttribute('target_multi_measure_attribute_name');
  }
  public set targetMultiMeasureAttributeName(value: string) {
    this._targetMultiMeasureAttributeName = value;
  }
  public resetTargetMultiMeasureAttributeName() {
    this._targetMultiMeasureAttributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetMultiMeasureAttributeNameInput() {
    return this._targetMultiMeasureAttributeName;
  }
}

export class TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList extends cdktn.ComplexList {
  public internalValue? : TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings[] | cdktn.IResolvable

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
  public get(index: number): TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference {
    return new TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings {
  /**
  * Refers to the value of the measure name in a result row. This field is required if MeasureNameColumn is provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#measure_name TimestreamScheduledQuery#measure_name}
  */
  readonly measureName?: string;
  /**
  * Type of the value that is to be read from SourceColumn. If the mapping is for MULTI, use MeasureValueType.MULTI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#measure_value_type TimestreamScheduledQuery#measure_value_type}
  */
  readonly measureValueType?: string;
  /**
  * Required. Attribute mappings to be used for mapping query results to ingest data for multi-measure attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#multi_measure_attribute_mappings TimestreamScheduledQuery#multi_measure_attribute_mappings}
  */
  readonly multiMeasureAttributeMappings?: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings[] | cdktn.IResolvable;
  /**
  * This field refers to the source column from which the measure value is to be read for result materialization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#source_column TimestreamScheduledQuery#source_column}
  */
  readonly sourceColumn?: string;
  /**
  * Target measure name to be used. If not provided, the target measure name by default would be MeasureName if provided, or SourceColumn otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#target_measure_name TimestreamScheduledQuery#target_measure_name}
  */
  readonly targetMeasureName?: string;
}

export function timestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsToTerraform(struct?: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    measure_name: cdktn.stringToTerraform(struct!.measureName),
    measure_value_type: cdktn.stringToTerraform(struct!.measureValueType),
    multi_measure_attribute_mappings: cdktn.listMapper(timestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsToTerraform, false)(struct!.multiMeasureAttributeMappings),
    source_column: cdktn.stringToTerraform(struct!.sourceColumn),
    target_measure_name: cdktn.stringToTerraform(struct!.targetMeasureName),
  }
}


export function timestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsToHclTerraform(struct?: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    measure_name: {
      value: cdktn.stringToHclTerraform(struct!.measureName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    measure_value_type: {
      value: cdktn.stringToHclTerraform(struct!.measureValueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_measure_attribute_mappings: {
      value: cdktn.listMapperHcl(timestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsToHclTerraform, false)(struct!.multiMeasureAttributeMappings),
      isBlock: true,
      type: "list",
      storageClassType: "TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList",
    },
    source_column: {
      value: cdktn.stringToHclTerraform(struct!.sourceColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_measure_name: {
      value: cdktn.stringToHclTerraform(struct!.targetMeasureName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._measureName !== undefined) {
      hasAnyValues = true;
      internalValueResult.measureName = this._measureName;
    }
    if (this._measureValueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.measureValueType = this._measureValueType;
    }
    if (this._multiMeasureAttributeMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiMeasureAttributeMappings = this._multiMeasureAttributeMappings?.internalValue;
    }
    if (this._sourceColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceColumn = this._sourceColumn;
    }
    if (this._targetMeasureName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetMeasureName = this._targetMeasureName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._measureName = undefined;
      this._measureValueType = undefined;
      this._multiMeasureAttributeMappings.internalValue = undefined;
      this._sourceColumn = undefined;
      this._targetMeasureName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._measureName = value.measureName;
      this._measureValueType = value.measureValueType;
      this._multiMeasureAttributeMappings.internalValue = value.multiMeasureAttributeMappings;
      this._sourceColumn = value.sourceColumn;
      this._targetMeasureName = value.targetMeasureName;
    }
  }

  // measure_name - computed: true, optional: true, required: false
  private _measureName?: string;
  public get measureName() {
    return this.getStringAttribute('measure_name');
  }
  public set measureName(value: string) {
    this._measureName = value;
  }
  public resetMeasureName() {
    this._measureName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measureNameInput() {
    return this._measureName;
  }

  // measure_value_type - computed: true, optional: true, required: false
  private _measureValueType?: string;
  public get measureValueType() {
    return this.getStringAttribute('measure_value_type');
  }
  public set measureValueType(value: string) {
    this._measureValueType = value;
  }
  public resetMeasureValueType() {
    this._measureValueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measureValueTypeInput() {
    return this._measureValueType;
  }

  // multi_measure_attribute_mappings - computed: true, optional: true, required: false
  private _multiMeasureAttributeMappings = new TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappingsList(this, "multi_measure_attribute_mappings", false);
  public get multiMeasureAttributeMappings() {
    return this._multiMeasureAttributeMappings;
  }
  public putMultiMeasureAttributeMappings(value: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsMultiMeasureAttributeMappings[] | cdktn.IResolvable) {
    this._multiMeasureAttributeMappings.internalValue = value;
  }
  public resetMultiMeasureAttributeMappings() {
    this._multiMeasureAttributeMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiMeasureAttributeMappingsInput() {
    return this._multiMeasureAttributeMappings.internalValue;
  }

  // source_column - computed: true, optional: true, required: false
  private _sourceColumn?: string;
  public get sourceColumn() {
    return this.getStringAttribute('source_column');
  }
  public set sourceColumn(value: string) {
    this._sourceColumn = value;
  }
  public resetSourceColumn() {
    this._sourceColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceColumnInput() {
    return this._sourceColumn;
  }

  // target_measure_name - computed: true, optional: true, required: false
  private _targetMeasureName?: string;
  public get targetMeasureName() {
    return this.getStringAttribute('target_measure_name');
  }
  public set targetMeasureName(value: string) {
    this._targetMeasureName = value;
  }
  public resetTargetMeasureName() {
    this._targetMeasureName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetMeasureNameInput() {
    return this._targetMeasureName;
  }
}

export class TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList extends cdktn.ComplexList {
  public internalValue? : TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings[] | cdktn.IResolvable

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
  public get(index: number): TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference {
    return new TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings {
  /**
  * Value type of the measure value column to be read from the query result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#measure_value_type TimestreamScheduledQuery#measure_value_type}
  */
  readonly measureValueType?: string;
  /**
  * Source measure value column in the query result where the attribute value is to be read.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#source_column TimestreamScheduledQuery#source_column}
  */
  readonly sourceColumn?: string;
  /**
  * Custom name to be used for attribute name in derived table. If not provided, source column name would be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#target_multi_measure_attribute_name TimestreamScheduledQuery#target_multi_measure_attribute_name}
  */
  readonly targetMultiMeasureAttributeName?: string;
}

export function timestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsToTerraform(struct?: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    measure_value_type: cdktn.stringToTerraform(struct!.measureValueType),
    source_column: cdktn.stringToTerraform(struct!.sourceColumn),
    target_multi_measure_attribute_name: cdktn.stringToTerraform(struct!.targetMultiMeasureAttributeName),
  }
}


export function timestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsToHclTerraform(struct?: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    measure_value_type: {
      value: cdktn.stringToHclTerraform(struct!.measureValueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_column: {
      value: cdktn.stringToHclTerraform(struct!.sourceColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_multi_measure_attribute_name: {
      value: cdktn.stringToHclTerraform(struct!.targetMultiMeasureAttributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._measureValueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.measureValueType = this._measureValueType;
    }
    if (this._sourceColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceColumn = this._sourceColumn;
    }
    if (this._targetMultiMeasureAttributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetMultiMeasureAttributeName = this._targetMultiMeasureAttributeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._measureValueType = undefined;
      this._sourceColumn = undefined;
      this._targetMultiMeasureAttributeName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._measureValueType = value.measureValueType;
      this._sourceColumn = value.sourceColumn;
      this._targetMultiMeasureAttributeName = value.targetMultiMeasureAttributeName;
    }
  }

  // measure_value_type - computed: true, optional: true, required: false
  private _measureValueType?: string;
  public get measureValueType() {
    return this.getStringAttribute('measure_value_type');
  }
  public set measureValueType(value: string) {
    this._measureValueType = value;
  }
  public resetMeasureValueType() {
    this._measureValueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measureValueTypeInput() {
    return this._measureValueType;
  }

  // source_column - computed: true, optional: true, required: false
  private _sourceColumn?: string;
  public get sourceColumn() {
    return this.getStringAttribute('source_column');
  }
  public set sourceColumn(value: string) {
    this._sourceColumn = value;
  }
  public resetSourceColumn() {
    this._sourceColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceColumnInput() {
    return this._sourceColumn;
  }

  // target_multi_measure_attribute_name - computed: true, optional: true, required: false
  private _targetMultiMeasureAttributeName?: string;
  public get targetMultiMeasureAttributeName() {
    return this.getStringAttribute('target_multi_measure_attribute_name');
  }
  public set targetMultiMeasureAttributeName(value: string) {
    this._targetMultiMeasureAttributeName = value;
  }
  public resetTargetMultiMeasureAttributeName() {
    this._targetMultiMeasureAttributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetMultiMeasureAttributeNameInput() {
    return this._targetMultiMeasureAttributeName;
  }
}

export class TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList extends cdktn.ComplexList {
  public internalValue? : TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings[] | cdktn.IResolvable

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
  public get(index: number): TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference {
    return new TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings {
  /**
  * Required. Attribute mappings to be used for mapping query results to ingest data for multi-measure attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#multi_measure_attribute_mappings TimestreamScheduledQuery#multi_measure_attribute_mappings}
  */
  readonly multiMeasureAttributeMappings?: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings[] | cdktn.IResolvable;
  /**
  * Name of the target multi-measure in the derived table. Required if MeasureNameColumn is not provided. If MeasureNameColumn is provided then the value from that column will be used as the multi-measure name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#target_multi_measure_name TimestreamScheduledQuery#target_multi_measure_name}
  */
  readonly targetMultiMeasureName?: string;
}

export function timestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsToTerraform(struct?: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    multi_measure_attribute_mappings: cdktn.listMapper(timestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsToTerraform, false)(struct!.multiMeasureAttributeMappings),
    target_multi_measure_name: cdktn.stringToTerraform(struct!.targetMultiMeasureName),
  }
}


export function timestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsToHclTerraform(struct?: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    multi_measure_attribute_mappings: {
      value: cdktn.listMapperHcl(timestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsToHclTerraform, false)(struct!.multiMeasureAttributeMappings),
      isBlock: true,
      type: "list",
      storageClassType: "TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList",
    },
    target_multi_measure_name: {
      value: cdktn.stringToHclTerraform(struct!.targetMultiMeasureName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._multiMeasureAttributeMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiMeasureAttributeMappings = this._multiMeasureAttributeMappings?.internalValue;
    }
    if (this._targetMultiMeasureName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetMultiMeasureName = this._targetMultiMeasureName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._multiMeasureAttributeMappings.internalValue = undefined;
      this._targetMultiMeasureName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._multiMeasureAttributeMappings.internalValue = value.multiMeasureAttributeMappings;
      this._targetMultiMeasureName = value.targetMultiMeasureName;
    }
  }

  // multi_measure_attribute_mappings - computed: true, optional: true, required: false
  private _multiMeasureAttributeMappings = new TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingsList(this, "multi_measure_attribute_mappings", false);
  public get multiMeasureAttributeMappings() {
    return this._multiMeasureAttributeMappings;
  }
  public putMultiMeasureAttributeMappings(value: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappings[] | cdktn.IResolvable) {
    this._multiMeasureAttributeMappings.internalValue = value;
  }
  public resetMultiMeasureAttributeMappings() {
    this._multiMeasureAttributeMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiMeasureAttributeMappingsInput() {
    return this._multiMeasureAttributeMappings.internalValue;
  }

  // target_multi_measure_name - computed: true, optional: true, required: false
  private _targetMultiMeasureName?: string;
  public get targetMultiMeasureName() {
    return this.getStringAttribute('target_multi_measure_name');
  }
  public set targetMultiMeasureName(value: string) {
    this._targetMultiMeasureName = value;
  }
  public resetTargetMultiMeasureName() {
    this._targetMultiMeasureName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetMultiMeasureNameInput() {
    return this._targetMultiMeasureName;
  }
}
export interface TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration {
  /**
  * Name of Timestream database to which the query result will be written.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#database_name TimestreamScheduledQuery#database_name}
  */
  readonly databaseName?: string;
  /**
  * This is to allow mapping column(s) from the query result to the dimension in the destination table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#dimension_mappings TimestreamScheduledQuery#dimension_mappings}
  */
  readonly dimensionMappings?: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings[] | cdktn.IResolvable;
  /**
  * Name of the measure name column from the query result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#measure_name_column TimestreamScheduledQuery#measure_name_column}
  */
  readonly measureNameColumn?: string;
  /**
  * Specifies how to map measures to multi-measure records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#mixed_measure_mappings TimestreamScheduledQuery#mixed_measure_mappings}
  */
  readonly mixedMeasureMappings?: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings[] | cdktn.IResolvable;
  /**
  * Only one of MixedMeasureMappings or MultiMeasureMappings is to be provided. MultiMeasureMappings can be used to ingest data as multi measures in the derived table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#multi_measure_mappings TimestreamScheduledQuery#multi_measure_mappings}
  */
  readonly multiMeasureMappings?: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings;
  /**
  * Name of Timestream table that the query result will be written to. The table should be within the same database that is provided in Timestream configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#table_name TimestreamScheduledQuery#table_name}
  */
  readonly tableName?: string;
  /**
  * Column from query result that should be used as the time column in destination table. Column type for this should be TIMESTAMP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#time_column TimestreamScheduledQuery#time_column}
  */
  readonly timeColumn?: string;
}

export function timestreamScheduledQueryTargetConfigurationTimestreamConfigurationToTerraform(struct?: TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    dimension_mappings: cdktn.listMapper(timestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsToTerraform, false)(struct!.dimensionMappings),
    measure_name_column: cdktn.stringToTerraform(struct!.measureNameColumn),
    mixed_measure_mappings: cdktn.listMapper(timestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsToTerraform, false)(struct!.mixedMeasureMappings),
    multi_measure_mappings: timestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsToTerraform(struct!.multiMeasureMappings),
    table_name: cdktn.stringToTerraform(struct!.tableName),
    time_column: cdktn.stringToTerraform(struct!.timeColumn),
  }
}


export function timestreamScheduledQueryTargetConfigurationTimestreamConfigurationToHclTerraform(struct?: TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimension_mappings: {
      value: cdktn.listMapperHcl(timestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsToHclTerraform, false)(struct!.dimensionMappings),
      isBlock: true,
      type: "list",
      storageClassType: "TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList",
    },
    measure_name_column: {
      value: cdktn.stringToHclTerraform(struct!.measureNameColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mixed_measure_mappings: {
      value: cdktn.listMapperHcl(timestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsToHclTerraform, false)(struct!.mixedMeasureMappings),
      isBlock: true,
      type: "list",
      storageClassType: "TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList",
    },
    multi_measure_mappings: {
      value: timestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsToHclTerraform(struct!.multiMeasureMappings),
      isBlock: true,
      type: "struct",
      storageClassType: "TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings",
    },
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_column: {
      value: cdktn.stringToHclTerraform(struct!.timeColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._dimensionMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionMappings = this._dimensionMappings?.internalValue;
    }
    if (this._measureNameColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.measureNameColumn = this._measureNameColumn;
    }
    if (this._mixedMeasureMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mixedMeasureMappings = this._mixedMeasureMappings?.internalValue;
    }
    if (this._multiMeasureMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiMeasureMappings = this._multiMeasureMappings?.internalValue;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._timeColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeColumn = this._timeColumn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
      this._dimensionMappings.internalValue = undefined;
      this._measureNameColumn = undefined;
      this._mixedMeasureMappings.internalValue = undefined;
      this._multiMeasureMappings.internalValue = undefined;
      this._tableName = undefined;
      this._timeColumn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
      this._dimensionMappings.internalValue = value.dimensionMappings;
      this._measureNameColumn = value.measureNameColumn;
      this._mixedMeasureMappings.internalValue = value.mixedMeasureMappings;
      this._multiMeasureMappings.internalValue = value.multiMeasureMappings;
      this._tableName = value.tableName;
      this._timeColumn = value.timeColumn;
    }
  }

  // database_name - computed: true, optional: true, required: false
  private _databaseName?: string;
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // dimension_mappings - computed: true, optional: true, required: false
  private _dimensionMappings = new TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingsList(this, "dimension_mappings", false);
  public get dimensionMappings() {
    return this._dimensionMappings;
  }
  public putDimensionMappings(value: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappings[] | cdktn.IResolvable) {
    this._dimensionMappings.internalValue = value;
  }
  public resetDimensionMappings() {
    this._dimensionMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionMappingsInput() {
    return this._dimensionMappings.internalValue;
  }

  // measure_name_column - computed: true, optional: true, required: false
  private _measureNameColumn?: string;
  public get measureNameColumn() {
    return this.getStringAttribute('measure_name_column');
  }
  public set measureNameColumn(value: string) {
    this._measureNameColumn = value;
  }
  public resetMeasureNameColumn() {
    this._measureNameColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measureNameColumnInput() {
    return this._measureNameColumn;
  }

  // mixed_measure_mappings - computed: true, optional: true, required: false
  private _mixedMeasureMappings = new TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingsList(this, "mixed_measure_mappings", false);
  public get mixedMeasureMappings() {
    return this._mixedMeasureMappings;
  }
  public putMixedMeasureMappings(value: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappings[] | cdktn.IResolvable) {
    this._mixedMeasureMappings.internalValue = value;
  }
  public resetMixedMeasureMappings() {
    this._mixedMeasureMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mixedMeasureMappingsInput() {
    return this._mixedMeasureMappings.internalValue;
  }

  // multi_measure_mappings - computed: true, optional: true, required: false
  private _multiMeasureMappings = new TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference(this, "multi_measure_mappings");
  public get multiMeasureMappings() {
    return this._multiMeasureMappings;
  }
  public putMultiMeasureMappings(value: TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings) {
    this._multiMeasureMappings.internalValue = value;
  }
  public resetMultiMeasureMappings() {
    this._multiMeasureMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiMeasureMappingsInput() {
    return this._multiMeasureMappings.internalValue;
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

  // time_column - computed: true, optional: true, required: false
  private _timeColumn?: string;
  public get timeColumn() {
    return this.getStringAttribute('time_column');
  }
  public set timeColumn(value: string) {
    this._timeColumn = value;
  }
  public resetTimeColumn() {
    this._timeColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeColumnInput() {
    return this._timeColumn;
  }
}
export interface TimestreamScheduledQueryTargetConfiguration {
  /**
  * Configuration needed to write data into the Timestream database and table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#timestream_configuration TimestreamScheduledQuery#timestream_configuration}
  */
  readonly timestreamConfiguration?: TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration;
}

export function timestreamScheduledQueryTargetConfigurationToTerraform(struct?: TimestreamScheduledQueryTargetConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    timestream_configuration: timestreamScheduledQueryTargetConfigurationTimestreamConfigurationToTerraform(struct!.timestreamConfiguration),
  }
}


export function timestreamScheduledQueryTargetConfigurationToHclTerraform(struct?: TimestreamScheduledQueryTargetConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    timestream_configuration: {
      value: timestreamScheduledQueryTargetConfigurationTimestreamConfigurationToHclTerraform(struct!.timestreamConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreamScheduledQueryTargetConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TimestreamScheduledQueryTargetConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timestreamConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestreamConfiguration = this._timestreamConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreamScheduledQueryTargetConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timestreamConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timestreamConfiguration.internalValue = value.timestreamConfiguration;
    }
  }

  // timestream_configuration - computed: true, optional: true, required: false
  private _timestreamConfiguration = new TimestreamScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference(this, "timestream_configuration");
  public get timestreamConfiguration() {
    return this._timestreamConfiguration;
  }
  public putTimestreamConfiguration(value: TimestreamScheduledQueryTargetConfigurationTimestreamConfiguration) {
    this._timestreamConfiguration.internalValue = value;
  }
  public resetTimestreamConfiguration() {
    this._timestreamConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestreamConfigurationInput() {
    return this._timestreamConfiguration.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query awscc_timestream_scheduled_query}
*/
export class TimestreamScheduledQuery extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_timestream_scheduled_query";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TimestreamScheduledQuery resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TimestreamScheduledQuery to import
  * @param importFromId The id of the existing TimestreamScheduledQuery that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TimestreamScheduledQuery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_timestream_scheduled_query", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/timestream_scheduled_query awscc_timestream_scheduled_query} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TimestreamScheduledQueryConfig
  */
  public constructor(scope: Construct, id: string, config: TimestreamScheduledQueryConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_timestream_scheduled_query',
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
    this._clientToken = config.clientToken;
    this._errorReportConfiguration.internalValue = config.errorReportConfiguration;
    this._kmsKeyId = config.kmsKeyId;
    this._notificationConfiguration.internalValue = config.notificationConfiguration;
    this._queryString = config.queryString;
    this._scheduleConfiguration.internalValue = config.scheduleConfiguration;
    this._scheduledQueryExecutionRoleArn = config.scheduledQueryExecutionRoleArn;
    this._scheduledQueryName = config.scheduledQueryName;
    this._tags.internalValue = config.tags;
    this._targetConfiguration.internalValue = config.targetConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // error_report_configuration - computed: false, optional: false, required: true
  private _errorReportConfiguration = new TimestreamScheduledQueryErrorReportConfigurationOutputReference(this, "error_report_configuration");
  public get errorReportConfiguration() {
    return this._errorReportConfiguration;
  }
  public putErrorReportConfiguration(value: TimestreamScheduledQueryErrorReportConfiguration) {
    this._errorReportConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorReportConfigurationInput() {
    return this._errorReportConfiguration.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // notification_configuration - computed: false, optional: false, required: true
  private _notificationConfiguration = new TimestreamScheduledQueryNotificationConfigurationOutputReference(this, "notification_configuration");
  public get notificationConfiguration() {
    return this._notificationConfiguration;
  }
  public putNotificationConfiguration(value: TimestreamScheduledQueryNotificationConfiguration) {
    this._notificationConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigurationInput() {
    return this._notificationConfiguration.internalValue;
  }

  // query_string - computed: false, optional: false, required: true
  private _queryString?: string;
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // schedule_configuration - computed: false, optional: false, required: true
  private _scheduleConfiguration = new TimestreamScheduledQueryScheduleConfigurationOutputReference(this, "schedule_configuration");
  public get scheduleConfiguration() {
    return this._scheduleConfiguration;
  }
  public putScheduleConfiguration(value: TimestreamScheduledQueryScheduleConfiguration) {
    this._scheduleConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleConfigurationInput() {
    return this._scheduleConfiguration.internalValue;
  }

  // scheduled_query_execution_role_arn - computed: false, optional: false, required: true
  private _scheduledQueryExecutionRoleArn?: string;
  public get scheduledQueryExecutionRoleArn() {
    return this.getStringAttribute('scheduled_query_execution_role_arn');
  }
  public set scheduledQueryExecutionRoleArn(value: string) {
    this._scheduledQueryExecutionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledQueryExecutionRoleArnInput() {
    return this._scheduledQueryExecutionRoleArn;
  }

  // scheduled_query_name - computed: true, optional: true, required: false
  private _scheduledQueryName?: string;
  public get scheduledQueryName() {
    return this.getStringAttribute('scheduled_query_name');
  }
  public set scheduledQueryName(value: string) {
    this._scheduledQueryName = value;
  }
  public resetScheduledQueryName() {
    this._scheduledQueryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledQueryNameInput() {
    return this._scheduledQueryName;
  }

  // sq_error_report_configuration - computed: true, optional: false, required: false
  public get sqErrorReportConfiguration() {
    return this.getStringAttribute('sq_error_report_configuration');
  }

  // sq_kms_key_id - computed: true, optional: false, required: false
  public get sqKmsKeyId() {
    return this.getStringAttribute('sq_kms_key_id');
  }

  // sq_name - computed: true, optional: false, required: false
  public get sqName() {
    return this.getStringAttribute('sq_name');
  }

  // sq_notification_configuration - computed: true, optional: false, required: false
  public get sqNotificationConfiguration() {
    return this.getStringAttribute('sq_notification_configuration');
  }

  // sq_query_string - computed: true, optional: false, required: false
  public get sqQueryString() {
    return this.getStringAttribute('sq_query_string');
  }

  // sq_schedule_configuration - computed: true, optional: false, required: false
  public get sqScheduleConfiguration() {
    return this.getStringAttribute('sq_schedule_configuration');
  }

  // sq_scheduled_query_execution_role_arn - computed: true, optional: false, required: false
  public get sqScheduledQueryExecutionRoleArn() {
    return this.getStringAttribute('sq_scheduled_query_execution_role_arn');
  }

  // sq_target_configuration - computed: true, optional: false, required: false
  public get sqTargetConfiguration() {
    return this.getStringAttribute('sq_target_configuration');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new TimestreamScheduledQueryTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: TimestreamScheduledQueryTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // target_configuration - computed: true, optional: true, required: false
  private _targetConfiguration = new TimestreamScheduledQueryTargetConfigurationOutputReference(this, "target_configuration");
  public get targetConfiguration() {
    return this._targetConfiguration;
  }
  public putTargetConfiguration(value: TimestreamScheduledQueryTargetConfiguration) {
    this._targetConfiguration.internalValue = value;
  }
  public resetTargetConfiguration() {
    this._targetConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetConfigurationInput() {
    return this._targetConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_token: cdktn.stringToTerraform(this._clientToken),
      error_report_configuration: timestreamScheduledQueryErrorReportConfigurationToTerraform(this._errorReportConfiguration.internalValue),
      kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
      notification_configuration: timestreamScheduledQueryNotificationConfigurationToTerraform(this._notificationConfiguration.internalValue),
      query_string: cdktn.stringToTerraform(this._queryString),
      schedule_configuration: timestreamScheduledQueryScheduleConfigurationToTerraform(this._scheduleConfiguration.internalValue),
      scheduled_query_execution_role_arn: cdktn.stringToTerraform(this._scheduledQueryExecutionRoleArn),
      scheduled_query_name: cdktn.stringToTerraform(this._scheduledQueryName),
      tags: cdktn.listMapper(timestreamScheduledQueryTagsToTerraform, false)(this._tags.internalValue),
      target_configuration: timestreamScheduledQueryTargetConfigurationToTerraform(this._targetConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_token: {
        value: cdktn.stringToHclTerraform(this._clientToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_report_configuration: {
        value: timestreamScheduledQueryErrorReportConfigurationToHclTerraform(this._errorReportConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TimestreamScheduledQueryErrorReportConfiguration",
      },
      kms_key_id: {
        value: cdktn.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_configuration: {
        value: timestreamScheduledQueryNotificationConfigurationToHclTerraform(this._notificationConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TimestreamScheduledQueryNotificationConfiguration",
      },
      query_string: {
        value: cdktn.stringToHclTerraform(this._queryString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_configuration: {
        value: timestreamScheduledQueryScheduleConfigurationToHclTerraform(this._scheduleConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TimestreamScheduledQueryScheduleConfiguration",
      },
      scheduled_query_execution_role_arn: {
        value: cdktn.stringToHclTerraform(this._scheduledQueryExecutionRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduled_query_name: {
        value: cdktn.stringToHclTerraform(this._scheduledQueryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(timestreamScheduledQueryTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TimestreamScheduledQueryTagsList",
      },
      target_configuration: {
        value: timestreamScheduledQueryTargetConfigurationToHclTerraform(this._targetConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TimestreamScheduledQueryTargetConfiguration",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
