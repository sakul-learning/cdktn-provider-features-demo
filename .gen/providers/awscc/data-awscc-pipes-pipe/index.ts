// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/pipes_pipe
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccPipesPipeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/pipes_pipe#id DataAwsccPipesPipe#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccPipesPipeEnrichmentParametersHttpParameters {
}

export function dataAwsccPipesPipeEnrichmentParametersHttpParametersToTerraform(struct?: DataAwsccPipesPipeEnrichmentParametersHttpParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeEnrichmentParametersHttpParametersToHclTerraform(struct?: DataAwsccPipesPipeEnrichmentParametersHttpParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeEnrichmentParametersHttpParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeEnrichmentParametersHttpParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeEnrichmentParametersHttpParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // header_parameters - computed: true, optional: false, required: false
  private _headerParameters = new cdktn.StringMap(this, "header_parameters");
  public get headerParameters() {
    return this._headerParameters;
  }

  // path_parameter_values - computed: true, optional: false, required: false
  public get pathParameterValues() {
    return this.getListAttribute('path_parameter_values');
  }

  // query_string_parameters - computed: true, optional: false, required: false
  private _queryStringParameters = new cdktn.StringMap(this, "query_string_parameters");
  public get queryStringParameters() {
    return this._queryStringParameters;
  }
}
export interface DataAwsccPipesPipeEnrichmentParameters {
}

export function dataAwsccPipesPipeEnrichmentParametersToTerraform(struct?: DataAwsccPipesPipeEnrichmentParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeEnrichmentParametersToHclTerraform(struct?: DataAwsccPipesPipeEnrichmentParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeEnrichmentParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeEnrichmentParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeEnrichmentParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http_parameters - computed: true, optional: false, required: false
  private _httpParameters = new DataAwsccPipesPipeEnrichmentParametersHttpParametersOutputReference(this, "http_parameters");
  public get httpParameters() {
    return this._httpParameters;
  }

  // input_template - computed: true, optional: false, required: false
  public get inputTemplate() {
    return this.getStringAttribute('input_template');
  }
}
export interface DataAwsccPipesPipeLogConfigurationCloudwatchLogsLogDestination {
}

export function dataAwsccPipesPipeLogConfigurationCloudwatchLogsLogDestinationToTerraform(struct?: DataAwsccPipesPipeLogConfigurationCloudwatchLogsLogDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeLogConfigurationCloudwatchLogsLogDestinationToHclTerraform(struct?: DataAwsccPipesPipeLogConfigurationCloudwatchLogsLogDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeLogConfigurationCloudwatchLogsLogDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeLogConfigurationCloudwatchLogsLogDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeLogConfigurationCloudwatchLogsLogDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_group_arn - computed: true, optional: false, required: false
  public get logGroupArn() {
    return this.getStringAttribute('log_group_arn');
  }
}
export interface DataAwsccPipesPipeLogConfigurationFirehoseLogDestination {
}

export function dataAwsccPipesPipeLogConfigurationFirehoseLogDestinationToTerraform(struct?: DataAwsccPipesPipeLogConfigurationFirehoseLogDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeLogConfigurationFirehoseLogDestinationToHclTerraform(struct?: DataAwsccPipesPipeLogConfigurationFirehoseLogDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeLogConfigurationFirehoseLogDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeLogConfigurationFirehoseLogDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeLogConfigurationFirehoseLogDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delivery_stream_arn - computed: true, optional: false, required: false
  public get deliveryStreamArn() {
    return this.getStringAttribute('delivery_stream_arn');
  }
}
export interface DataAwsccPipesPipeLogConfigurationS3LogDestination {
}

export function dataAwsccPipesPipeLogConfigurationS3LogDestinationToTerraform(struct?: DataAwsccPipesPipeLogConfigurationS3LogDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeLogConfigurationS3LogDestinationToHclTerraform(struct?: DataAwsccPipesPipeLogConfigurationS3LogDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeLogConfigurationS3LogDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeLogConfigurationS3LogDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeLogConfigurationS3LogDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // bucket_owner - computed: true, optional: false, required: false
  public get bucketOwner() {
    return this.getStringAttribute('bucket_owner');
  }

  // output_format - computed: true, optional: false, required: false
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}
export interface DataAwsccPipesPipeLogConfiguration {
}

export function dataAwsccPipesPipeLogConfigurationToTerraform(struct?: DataAwsccPipesPipeLogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeLogConfigurationToHclTerraform(struct?: DataAwsccPipesPipeLogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeLogConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeLogConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeLogConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_logs_log_destination - computed: true, optional: false, required: false
  private _cloudwatchLogsLogDestination = new DataAwsccPipesPipeLogConfigurationCloudwatchLogsLogDestinationOutputReference(this, "cloudwatch_logs_log_destination");
  public get cloudwatchLogsLogDestination() {
    return this._cloudwatchLogsLogDestination;
  }

  // firehose_log_destination - computed: true, optional: false, required: false
  private _firehoseLogDestination = new DataAwsccPipesPipeLogConfigurationFirehoseLogDestinationOutputReference(this, "firehose_log_destination");
  public get firehoseLogDestination() {
    return this._firehoseLogDestination;
  }

  // include_execution_data - computed: true, optional: false, required: false
  public get includeExecutionData() {
    return this.getListAttribute('include_execution_data');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // s3_log_destination - computed: true, optional: false, required: false
  private _s3LogDestination = new DataAwsccPipesPipeLogConfigurationS3LogDestinationOutputReference(this, "s3_log_destination");
  public get s3LogDestination() {
    return this._s3LogDestination;
  }
}
export interface DataAwsccPipesPipeSourceParametersActiveMqBrokerParametersCredentials {
}

export function dataAwsccPipesPipeSourceParametersActiveMqBrokerParametersCredentialsToTerraform(struct?: DataAwsccPipesPipeSourceParametersActiveMqBrokerParametersCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeSourceParametersActiveMqBrokerParametersCredentialsToHclTerraform(struct?: DataAwsccPipesPipeSourceParametersActiveMqBrokerParametersCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeSourceParametersActiveMqBrokerParametersCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeSourceParametersActiveMqBrokerParametersCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeSourceParametersActiveMqBrokerParametersCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // basic_auth - computed: true, optional: false, required: false
  public get basicAuth() {
    return this.getStringAttribute('basic_auth');
  }
}
export interface DataAwsccPipesPipeSourceParametersActiveMqBrokerParameters {
}

export function dataAwsccPipesPipeSourceParametersActiveMqBrokerParametersToTerraform(struct?: DataAwsccPipesPipeSourceParametersActiveMqBrokerParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeSourceParametersActiveMqBrokerParametersToHclTerraform(struct?: DataAwsccPipesPipeSourceParametersActiveMqBrokerParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeSourceParametersActiveMqBrokerParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeSourceParametersActiveMqBrokerParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeSourceParametersActiveMqBrokerParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_size - computed: true, optional: false, required: false
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }

  // credentials - computed: true, optional: false, required: false
  private _credentials = new DataAwsccPipesPipeSourceParametersActiveMqBrokerParametersCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }

  // maximum_batching_window_in_seconds - computed: true, optional: false, required: false
  public get maximumBatchingWindowInSeconds() {
    return this.getNumberAttribute('maximum_batching_window_in_seconds');
  }

  // queue_name - computed: true, optional: false, required: false
  public get queueName() {
    return this.getStringAttribute('queue_name');
  }
}
export interface DataAwsccPipesPipeSourceParametersDynamoDbStreamParametersDeadLetterConfig {
}

export function dataAwsccPipesPipeSourceParametersDynamoDbStreamParametersDeadLetterConfigToTerraform(struct?: DataAwsccPipesPipeSourceParametersDynamoDbStreamParametersDeadLetterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeSourceParametersDynamoDbStreamParametersDeadLetterConfigToHclTerraform(struct?: DataAwsccPipesPipeSourceParametersDynamoDbStreamParametersDeadLetterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeSourceParametersDynamoDbStreamParametersDeadLetterConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeSourceParametersDynamoDbStreamParametersDeadLetterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeSourceParametersDynamoDbStreamParametersDeadLetterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }
}
export interface DataAwsccPipesPipeSourceParametersDynamoDbStreamParameters {
}

export function dataAwsccPipesPipeSourceParametersDynamoDbStreamParametersToTerraform(struct?: DataAwsccPipesPipeSourceParametersDynamoDbStreamParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeSourceParametersDynamoDbStreamParametersToHclTerraform(struct?: DataAwsccPipesPipeSourceParametersDynamoDbStreamParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeSourceParametersDynamoDbStreamParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeSourceParametersDynamoDbStreamParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeSourceParametersDynamoDbStreamParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_size - computed: true, optional: false, required: false
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }

  // dead_letter_config - computed: true, optional: false, required: false
  private _deadLetterConfig = new DataAwsccPipesPipeSourceParametersDynamoDbStreamParametersDeadLetterConfigOutputReference(this, "dead_letter_config");
  public get deadLetterConfig() {
    return this._deadLetterConfig;
  }

  // maximum_batching_window_in_seconds - computed: true, optional: false, required: false
  public get maximumBatchingWindowInSeconds() {
    return this.getNumberAttribute('maximum_batching_window_in_seconds');
  }

  // maximum_record_age_in_seconds - computed: true, optional: false, required: false
  public get maximumRecordAgeInSeconds() {
    return this.getNumberAttribute('maximum_record_age_in_seconds');
  }

  // maximum_retry_attempts - computed: true, optional: false, required: false
  public get maximumRetryAttempts() {
    return this.getNumberAttribute('maximum_retry_attempts');
  }

  // on_partial_batch_item_failure - computed: true, optional: false, required: false
  public get onPartialBatchItemFailure() {
    return this.getStringAttribute('on_partial_batch_item_failure');
  }

  // parallelization_factor - computed: true, optional: false, required: false
  public get parallelizationFactor() {
    return this.getNumberAttribute('parallelization_factor');
  }

  // starting_position - computed: true, optional: false, required: false
  public get startingPosition() {
    return this.getStringAttribute('starting_position');
  }
}
export interface DataAwsccPipesPipeSourceParametersFilterCriteriaFilters {
}

export function dataAwsccPipesPipeSourceParametersFilterCriteriaFiltersToTerraform(struct?: DataAwsccPipesPipeSourceParametersFilterCriteriaFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeSourceParametersFilterCriteriaFiltersToHclTerraform(struct?: DataAwsccPipesPipeSourceParametersFilterCriteriaFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeSourceParametersFilterCriteriaFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPipesPipeSourceParametersFilterCriteriaFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeSourceParametersFilterCriteriaFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
}

export class DataAwsccPipesPipeSourceParametersFilterCriteriaFiltersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPipesPipeSourceParametersFilterCriteriaFiltersOutputReference {
    return new DataAwsccPipesPipeSourceParametersFilterCriteriaFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccPipesPipeSourceParametersFilterCriteria {
}

export function dataAwsccPipesPipeSourceParametersFilterCriteriaToTerraform(struct?: DataAwsccPipesPipeSourceParametersFilterCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeSourceParametersFilterCriteriaToHclTerraform(struct?: DataAwsccPipesPipeSourceParametersFilterCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeSourceParametersFilterCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeSourceParametersFilterCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeSourceParametersFilterCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataAwsccPipesPipeSourceParametersFilterCriteriaFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
}
export interface DataAwsccPipesPipeSourceParametersKinesisStreamParametersDeadLetterConfig {
}

export function dataAwsccPipesPipeSourceParametersKinesisStreamParametersDeadLetterConfigToTerraform(struct?: DataAwsccPipesPipeSourceParametersKinesisStreamParametersDeadLetterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeSourceParametersKinesisStreamParametersDeadLetterConfigToHclTerraform(struct?: DataAwsccPipesPipeSourceParametersKinesisStreamParametersDeadLetterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeSourceParametersKinesisStreamParametersDeadLetterConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeSourceParametersKinesisStreamParametersDeadLetterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeSourceParametersKinesisStreamParametersDeadLetterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }
}
export interface DataAwsccPipesPipeSourceParametersKinesisStreamParameters {
}

export function dataAwsccPipesPipeSourceParametersKinesisStreamParametersToTerraform(struct?: DataAwsccPipesPipeSourceParametersKinesisStreamParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeSourceParametersKinesisStreamParametersToHclTerraform(struct?: DataAwsccPipesPipeSourceParametersKinesisStreamParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeSourceParametersKinesisStreamParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeSourceParametersKinesisStreamParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeSourceParametersKinesisStreamParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_size - computed: true, optional: false, required: false
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }

  // dead_letter_config - computed: true, optional: false, required: false
  private _deadLetterConfig = new DataAwsccPipesPipeSourceParametersKinesisStreamParametersDeadLetterConfigOutputReference(this, "dead_letter_config");
  public get deadLetterConfig() {
    return this._deadLetterConfig;
  }

  // maximum_batching_window_in_seconds - computed: true, optional: false, required: false
  public get maximumBatchingWindowInSeconds() {
    return this.getNumberAttribute('maximum_batching_window_in_seconds');
  }

  // maximum_record_age_in_seconds - computed: true, optional: false, required: false
  public get maximumRecordAgeInSeconds() {
    return this.getNumberAttribute('maximum_record_age_in_seconds');
  }

  // maximum_retry_attempts - computed: true, optional: false, required: false
  public get maximumRetryAttempts() {
    return this.getNumberAttribute('maximum_retry_attempts');
  }

  // on_partial_batch_item_failure - computed: true, optional: false, required: false
  public get onPartialBatchItemFailure() {
    return this.getStringAttribute('on_partial_batch_item_failure');
  }

  // parallelization_factor - computed: true, optional: false, required: false
  public get parallelizationFactor() {
    return this.getNumberAttribute('parallelization_factor');
  }

  // starting_position - computed: true, optional: false, required: false
  public get startingPosition() {
    return this.getStringAttribute('starting_position');
  }

  // starting_position_timestamp - computed: true, optional: false, required: false
  public get startingPositionTimestamp() {
    return this.getStringAttribute('starting_position_timestamp');
  }
}
export interface DataAwsccPipesPipeSourceParametersManagedStreamingKafkaParametersCredentials {
}

export function dataAwsccPipesPipeSourceParametersManagedStreamingKafkaParametersCredentialsToTerraform(struct?: DataAwsccPipesPipeSourceParametersManagedStreamingKafkaParametersCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeSourceParametersManagedStreamingKafkaParametersCredentialsToHclTerraform(struct?: DataAwsccPipesPipeSourceParametersManagedStreamingKafkaParametersCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeSourceParametersManagedStreamingKafkaParametersCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeSourceParametersManagedStreamingKafkaParametersCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeSourceParametersManagedStreamingKafkaParametersCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_certificate_tls_auth - computed: true, optional: false, required: false
  public get clientCertificateTlsAuth() {
    return this.getStringAttribute('client_certificate_tls_auth');
  }

  // sasl_scram_512_auth - computed: true, optional: false, required: false
  public get saslScram512Auth() {
    return this.getStringAttribute('sasl_scram_512_auth');
  }
}
export interface DataAwsccPipesPipeSourceParametersManagedStreamingKafkaParameters {
}

export function dataAwsccPipesPipeSourceParametersManagedStreamingKafkaParametersToTerraform(struct?: DataAwsccPipesPipeSourceParametersManagedStreamingKafkaParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeSourceParametersManagedStreamingKafkaParametersToHclTerraform(struct?: DataAwsccPipesPipeSourceParametersManagedStreamingKafkaParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeSourceParametersManagedStreamingKafkaParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeSourceParametersManagedStreamingKafkaParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeSourceParametersManagedStreamingKafkaParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_size - computed: true, optional: false, required: false
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }

  // consumer_group_id - computed: true, optional: false, required: false
  public get consumerGroupId() {
    return this.getStringAttribute('consumer_group_id');
  }

  // credentials - computed: true, optional: false, required: false
  private _credentials = new DataAwsccPipesPipeSourceParametersManagedStreamingKafkaParametersCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }

  // maximum_batching_window_in_seconds - computed: true, optional: false, required: false
  public get maximumBatchingWindowInSeconds() {
    return this.getNumberAttribute('maximum_batching_window_in_seconds');
  }

  // starting_position - computed: true, optional: false, required: false
  public get startingPosition() {
    return this.getStringAttribute('starting_position');
  }

  // topic_name - computed: true, optional: false, required: false
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
}
export interface DataAwsccPipesPipeSourceParametersRabbitMqBrokerParametersCredentials {
}

export function dataAwsccPipesPipeSourceParametersRabbitMqBrokerParametersCredentialsToTerraform(struct?: DataAwsccPipesPipeSourceParametersRabbitMqBrokerParametersCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeSourceParametersRabbitMqBrokerParametersCredentialsToHclTerraform(struct?: DataAwsccPipesPipeSourceParametersRabbitMqBrokerParametersCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeSourceParametersRabbitMqBrokerParametersCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeSourceParametersRabbitMqBrokerParametersCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeSourceParametersRabbitMqBrokerParametersCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // basic_auth - computed: true, optional: false, required: false
  public get basicAuth() {
    return this.getStringAttribute('basic_auth');
  }
}
export interface DataAwsccPipesPipeSourceParametersRabbitMqBrokerParameters {
}

export function dataAwsccPipesPipeSourceParametersRabbitMqBrokerParametersToTerraform(struct?: DataAwsccPipesPipeSourceParametersRabbitMqBrokerParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeSourceParametersRabbitMqBrokerParametersToHclTerraform(struct?: DataAwsccPipesPipeSourceParametersRabbitMqBrokerParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeSourceParametersRabbitMqBrokerParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeSourceParametersRabbitMqBrokerParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeSourceParametersRabbitMqBrokerParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_size - computed: true, optional: false, required: false
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }

  // credentials - computed: true, optional: false, required: false
  private _credentials = new DataAwsccPipesPipeSourceParametersRabbitMqBrokerParametersCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }

  // maximum_batching_window_in_seconds - computed: true, optional: false, required: false
  public get maximumBatchingWindowInSeconds() {
    return this.getNumberAttribute('maximum_batching_window_in_seconds');
  }

  // queue_name - computed: true, optional: false, required: false
  public get queueName() {
    return this.getStringAttribute('queue_name');
  }

  // virtual_host - computed: true, optional: false, required: false
  public get virtualHost() {
    return this.getStringAttribute('virtual_host');
  }
}
export interface DataAwsccPipesPipeSourceParametersSelfManagedKafkaParametersCredentials {
}

export function dataAwsccPipesPipeSourceParametersSelfManagedKafkaParametersCredentialsToTerraform(struct?: DataAwsccPipesPipeSourceParametersSelfManagedKafkaParametersCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeSourceParametersSelfManagedKafkaParametersCredentialsToHclTerraform(struct?: DataAwsccPipesPipeSourceParametersSelfManagedKafkaParametersCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeSourceParametersSelfManagedKafkaParametersCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeSourceParametersSelfManagedKafkaParametersCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeSourceParametersSelfManagedKafkaParametersCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // basic_auth - computed: true, optional: false, required: false
  public get basicAuth() {
    return this.getStringAttribute('basic_auth');
  }

  // client_certificate_tls_auth - computed: true, optional: false, required: false
  public get clientCertificateTlsAuth() {
    return this.getStringAttribute('client_certificate_tls_auth');
  }

  // sasl_scram_256_auth - computed: true, optional: false, required: false
  public get saslScram256Auth() {
    return this.getStringAttribute('sasl_scram_256_auth');
  }

  // sasl_scram_512_auth - computed: true, optional: false, required: false
  public get saslScram512Auth() {
    return this.getStringAttribute('sasl_scram_512_auth');
  }
}
export interface DataAwsccPipesPipeSourceParametersSelfManagedKafkaParametersVpc {
}

export function dataAwsccPipesPipeSourceParametersSelfManagedKafkaParametersVpcToTerraform(struct?: DataAwsccPipesPipeSourceParametersSelfManagedKafkaParametersVpc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeSourceParametersSelfManagedKafkaParametersVpcToHclTerraform(struct?: DataAwsccPipesPipeSourceParametersSelfManagedKafkaParametersVpc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeSourceParametersSelfManagedKafkaParametersVpcOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeSourceParametersSelfManagedKafkaParametersVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeSourceParametersSelfManagedKafkaParametersVpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_group - computed: true, optional: false, required: false
  public get securityGroup() {
    return this.getListAttribute('security_group');
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }
}
export interface DataAwsccPipesPipeSourceParametersSelfManagedKafkaParameters {
}

export function dataAwsccPipesPipeSourceParametersSelfManagedKafkaParametersToTerraform(struct?: DataAwsccPipesPipeSourceParametersSelfManagedKafkaParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeSourceParametersSelfManagedKafkaParametersToHclTerraform(struct?: DataAwsccPipesPipeSourceParametersSelfManagedKafkaParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeSourceParametersSelfManagedKafkaParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeSourceParametersSelfManagedKafkaParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeSourceParametersSelfManagedKafkaParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_bootstrap_servers - computed: true, optional: false, required: false
  public get additionalBootstrapServers() {
    return this.getListAttribute('additional_bootstrap_servers');
  }

  // batch_size - computed: true, optional: false, required: false
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }

  // consumer_group_id - computed: true, optional: false, required: false
  public get consumerGroupId() {
    return this.getStringAttribute('consumer_group_id');
  }

  // credentials - computed: true, optional: false, required: false
  private _credentials = new DataAwsccPipesPipeSourceParametersSelfManagedKafkaParametersCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }

  // maximum_batching_window_in_seconds - computed: true, optional: false, required: false
  public get maximumBatchingWindowInSeconds() {
    return this.getNumberAttribute('maximum_batching_window_in_seconds');
  }

  // server_root_ca_certificate - computed: true, optional: false, required: false
  public get serverRootCaCertificate() {
    return this.getStringAttribute('server_root_ca_certificate');
  }

  // starting_position - computed: true, optional: false, required: false
  public get startingPosition() {
    return this.getStringAttribute('starting_position');
  }

  // topic_name - computed: true, optional: false, required: false
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }

  // vpc - computed: true, optional: false, required: false
  private _vpc = new DataAwsccPipesPipeSourceParametersSelfManagedKafkaParametersVpcOutputReference(this, "vpc");
  public get vpc() {
    return this._vpc;
  }
}
export interface DataAwsccPipesPipeSourceParametersSqsQueueParameters {
}

export function dataAwsccPipesPipeSourceParametersSqsQueueParametersToTerraform(struct?: DataAwsccPipesPipeSourceParametersSqsQueueParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeSourceParametersSqsQueueParametersToHclTerraform(struct?: DataAwsccPipesPipeSourceParametersSqsQueueParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeSourceParametersSqsQueueParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeSourceParametersSqsQueueParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeSourceParametersSqsQueueParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_size - computed: true, optional: false, required: false
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }

  // maximum_batching_window_in_seconds - computed: true, optional: false, required: false
  public get maximumBatchingWindowInSeconds() {
    return this.getNumberAttribute('maximum_batching_window_in_seconds');
  }
}
export interface DataAwsccPipesPipeSourceParameters {
}

export function dataAwsccPipesPipeSourceParametersToTerraform(struct?: DataAwsccPipesPipeSourceParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeSourceParametersToHclTerraform(struct?: DataAwsccPipesPipeSourceParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeSourceParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeSourceParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeSourceParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_mq_broker_parameters - computed: true, optional: false, required: false
  private _activeMqBrokerParameters = new DataAwsccPipesPipeSourceParametersActiveMqBrokerParametersOutputReference(this, "active_mq_broker_parameters");
  public get activeMqBrokerParameters() {
    return this._activeMqBrokerParameters;
  }

  // dynamo_db_stream_parameters - computed: true, optional: false, required: false
  private _dynamoDbStreamParameters = new DataAwsccPipesPipeSourceParametersDynamoDbStreamParametersOutputReference(this, "dynamo_db_stream_parameters");
  public get dynamoDbStreamParameters() {
    return this._dynamoDbStreamParameters;
  }

  // filter_criteria - computed: true, optional: false, required: false
  private _filterCriteria = new DataAwsccPipesPipeSourceParametersFilterCriteriaOutputReference(this, "filter_criteria");
  public get filterCriteria() {
    return this._filterCriteria;
  }

  // kinesis_stream_parameters - computed: true, optional: false, required: false
  private _kinesisStreamParameters = new DataAwsccPipesPipeSourceParametersKinesisStreamParametersOutputReference(this, "kinesis_stream_parameters");
  public get kinesisStreamParameters() {
    return this._kinesisStreamParameters;
  }

  // managed_streaming_kafka_parameters - computed: true, optional: false, required: false
  private _managedStreamingKafkaParameters = new DataAwsccPipesPipeSourceParametersManagedStreamingKafkaParametersOutputReference(this, "managed_streaming_kafka_parameters");
  public get managedStreamingKafkaParameters() {
    return this._managedStreamingKafkaParameters;
  }

  // rabbit_mq_broker_parameters - computed: true, optional: false, required: false
  private _rabbitMqBrokerParameters = new DataAwsccPipesPipeSourceParametersRabbitMqBrokerParametersOutputReference(this, "rabbit_mq_broker_parameters");
  public get rabbitMqBrokerParameters() {
    return this._rabbitMqBrokerParameters;
  }

  // self_managed_kafka_parameters - computed: true, optional: false, required: false
  private _selfManagedKafkaParameters = new DataAwsccPipesPipeSourceParametersSelfManagedKafkaParametersOutputReference(this, "self_managed_kafka_parameters");
  public get selfManagedKafkaParameters() {
    return this._selfManagedKafkaParameters;
  }

  // sqs_queue_parameters - computed: true, optional: false, required: false
  private _sqsQueueParameters = new DataAwsccPipesPipeSourceParametersSqsQueueParametersOutputReference(this, "sqs_queue_parameters");
  public get sqsQueueParameters() {
    return this._sqsQueueParameters;
  }
}
export interface DataAwsccPipesPipeTargetParametersBatchJobParametersArrayProperties {
}

export function dataAwsccPipesPipeTargetParametersBatchJobParametersArrayPropertiesToTerraform(struct?: DataAwsccPipesPipeTargetParametersBatchJobParametersArrayProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersBatchJobParametersArrayPropertiesToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersBatchJobParametersArrayProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersBatchJobParametersArrayPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeTargetParametersBatchJobParametersArrayProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersBatchJobParametersArrayProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }
}
export interface DataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironment {
}

export function dataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironmentToTerraform(struct?: DataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironmentToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironment | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironmentList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironmentOutputReference {
    return new DataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirements {
}

export function dataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirementsToTerraform(struct?: DataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirementsToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirementsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirementsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirementsOutputReference {
    return new DataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverrides {
}

export function dataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverridesToTerraform(struct?: DataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverridesToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // environment - computed: true, optional: false, required: false
  private _environment = new DataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironmentList(this, "environment", false);
  public get environment() {
    return this._environment;
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // resource_requirements - computed: true, optional: false, required: false
  private _resourceRequirements = new DataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirementsList(this, "resource_requirements", false);
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}
export interface DataAwsccPipesPipeTargetParametersBatchJobParametersDependsOn {
}

export function dataAwsccPipesPipeTargetParametersBatchJobParametersDependsOnToTerraform(struct?: DataAwsccPipesPipeTargetParametersBatchJobParametersDependsOn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersBatchJobParametersDependsOnToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersBatchJobParametersDependsOn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersBatchJobParametersDependsOnOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPipesPipeTargetParametersBatchJobParametersDependsOn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersBatchJobParametersDependsOn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getStringAttribute('job_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccPipesPipeTargetParametersBatchJobParametersDependsOnList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPipesPipeTargetParametersBatchJobParametersDependsOnOutputReference {
    return new DataAwsccPipesPipeTargetParametersBatchJobParametersDependsOnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccPipesPipeTargetParametersBatchJobParametersRetryStrategy {
}

export function dataAwsccPipesPipeTargetParametersBatchJobParametersRetryStrategyToTerraform(struct?: DataAwsccPipesPipeTargetParametersBatchJobParametersRetryStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersBatchJobParametersRetryStrategyToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersBatchJobParametersRetryStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersBatchJobParametersRetryStrategyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeTargetParametersBatchJobParametersRetryStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersBatchJobParametersRetryStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attempts - computed: true, optional: false, required: false
  public get attempts() {
    return this.getNumberAttribute('attempts');
  }
}
export interface DataAwsccPipesPipeTargetParametersBatchJobParameters {
}

export function dataAwsccPipesPipeTargetParametersBatchJobParametersToTerraform(struct?: DataAwsccPipesPipeTargetParametersBatchJobParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersBatchJobParametersToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersBatchJobParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersBatchJobParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeTargetParametersBatchJobParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersBatchJobParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // array_properties - computed: true, optional: false, required: false
  private _arrayProperties = new DataAwsccPipesPipeTargetParametersBatchJobParametersArrayPropertiesOutputReference(this, "array_properties");
  public get arrayProperties() {
    return this._arrayProperties;
  }

  // container_overrides - computed: true, optional: false, required: false
  private _containerOverrides = new DataAwsccPipesPipeTargetParametersBatchJobParametersContainerOverridesOutputReference(this, "container_overrides");
  public get containerOverrides() {
    return this._containerOverrides;
  }

  // depends_on - computed: true, optional: false, required: false
  private _dependsOn = new DataAwsccPipesPipeTargetParametersBatchJobParametersDependsOnList(this, "depends_on", false);
  public get dependsOn() {
    return this._dependsOn;
  }

  // job_definition - computed: true, optional: false, required: false
  public get jobDefinition() {
    return this.getStringAttribute('job_definition');
  }

  // job_name - computed: true, optional: false, required: false
  public get jobName() {
    return this.getStringAttribute('job_name');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new cdktn.StringMap(this, "parameters");
  public get parameters() {
    return this._parameters;
  }

  // retry_strategy - computed: true, optional: false, required: false
  private _retryStrategy = new DataAwsccPipesPipeTargetParametersBatchJobParametersRetryStrategyOutputReference(this, "retry_strategy");
  public get retryStrategy() {
    return this._retryStrategy;
  }
}
export interface DataAwsccPipesPipeTargetParametersCloudwatchLogsParameters {
}

export function dataAwsccPipesPipeTargetParametersCloudwatchLogsParametersToTerraform(struct?: DataAwsccPipesPipeTargetParametersCloudwatchLogsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersCloudwatchLogsParametersToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersCloudwatchLogsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersCloudwatchLogsParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeTargetParametersCloudwatchLogsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersCloudwatchLogsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
}
export interface DataAwsccPipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategy {
}

export function dataAwsccPipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategyToTerraform(struct?: DataAwsccPipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategyToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base - computed: true, optional: false, required: false
  public get base() {
    return this.getNumberAttribute('base');
  }

  // capacity_provider - computed: true, optional: false, required: false
  public get capacityProvider() {
    return this.getStringAttribute('capacity_provider');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataAwsccPipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategyList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategyOutputReference {
    return new DataAwsccPipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccPipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsvpcConfiguration {
}

export function dataAwsccPipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsvpcConfigurationToTerraform(struct?: DataAwsccPipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsvpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsvpcConfigurationToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsvpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsvpcConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsvpcConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsvpcConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assign_public_ip - computed: true, optional: false, required: false
  public get assignPublicIp() {
    return this.getStringAttribute('assign_public_ip');
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }
}
export interface DataAwsccPipesPipeTargetParametersEcsTaskParametersNetworkConfiguration {
}

export function dataAwsccPipesPipeTargetParametersEcsTaskParametersNetworkConfigurationToTerraform(struct?: DataAwsccPipesPipeTargetParametersEcsTaskParametersNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersEcsTaskParametersNetworkConfigurationToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersEcsTaskParametersNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersEcsTaskParametersNetworkConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeTargetParametersEcsTaskParametersNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersEcsTaskParametersNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // awsvpc_configuration - computed: true, optional: false, required: false
  private _awsvpcConfiguration = new DataAwsccPipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsvpcConfigurationOutputReference(this, "awsvpc_configuration");
  public get awsvpcConfiguration() {
    return this._awsvpcConfiguration;
  }
}
export interface DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironment {
}

export function dataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentToTerraform(struct?: DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironment | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentOutputReference {
    return new DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentFiles {
}

export function dataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentFilesToTerraform(struct?: DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentFiles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentFilesToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentFiles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentFilesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentFiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentFiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentFilesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentFilesOutputReference {
    return new DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesResourceRequirements {
}

export function dataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesResourceRequirementsToTerraform(struct?: DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesResourceRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesResourceRequirementsToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesResourceRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesResourceRequirementsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesResourceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesResourceRequirementsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesResourceRequirementsOutputReference {
    return new DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesResourceRequirementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrides {
}

export function dataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesToTerraform(struct?: DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // environment - computed: true, optional: false, required: false
  private _environment = new DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentList(this, "environment", false);
  public get environment() {
    return this._environment;
  }

  // environment_files - computed: true, optional: false, required: false
  private _environmentFiles = new DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesEnvironmentFilesList(this, "environment_files", false);
  public get environmentFiles() {
    return this._environmentFiles;
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // memory_reservation - computed: true, optional: false, required: false
  public get memoryReservation() {
    return this.getNumberAttribute('memory_reservation');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resource_requirements - computed: true, optional: false, required: false
  private _resourceRequirements = new DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesResourceRequirementsList(this, "resource_requirements", false);
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesOutputReference {
    return new DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorage {
}

export function dataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorageToTerraform(struct?: DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorageToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // size_in_gi_b - computed: true, optional: false, required: false
  public get sizeInGiB() {
    return this.getNumberAttribute('size_in_gi_b');
  }
}
export interface DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverrides {
}

export function dataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverridesToTerraform(struct?: DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverridesToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
}

export class DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverridesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverridesOutputReference {
    return new DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccPipesPipeTargetParametersEcsTaskParametersOverrides {
}

export function dataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesToTerraform(struct?: DataAwsccPipesPipeTargetParametersEcsTaskParametersOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersEcsTaskParametersOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeTargetParametersEcsTaskParametersOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersEcsTaskParametersOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_overrides - computed: true, optional: false, required: false
  private _containerOverrides = new DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesContainerOverridesList(this, "container_overrides", false);
  public get containerOverrides() {
    return this._containerOverrides;
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getStringAttribute('cpu');
  }

  // ephemeral_storage - computed: true, optional: false, required: false
  private _ephemeralStorage = new DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorageOutputReference(this, "ephemeral_storage");
  public get ephemeralStorage() {
    return this._ephemeralStorage;
  }

  // execution_role_arn - computed: true, optional: false, required: false
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }

  // inference_accelerator_overrides - computed: true, optional: false, required: false
  private _inferenceAcceleratorOverrides = new DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverridesList(this, "inference_accelerator_overrides", false);
  public get inferenceAcceleratorOverrides() {
    return this._inferenceAcceleratorOverrides;
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getStringAttribute('memory');
  }

  // task_role_arn - computed: true, optional: false, required: false
  public get taskRoleArn() {
    return this.getStringAttribute('task_role_arn');
  }
}
export interface DataAwsccPipesPipeTargetParametersEcsTaskParametersPlacementConstraints {
}

export function dataAwsccPipesPipeTargetParametersEcsTaskParametersPlacementConstraintsToTerraform(struct?: DataAwsccPipesPipeTargetParametersEcsTaskParametersPlacementConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersEcsTaskParametersPlacementConstraintsToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersEcsTaskParametersPlacementConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersEcsTaskParametersPlacementConstraintsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPipesPipeTargetParametersEcsTaskParametersPlacementConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersEcsTaskParametersPlacementConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccPipesPipeTargetParametersEcsTaskParametersPlacementConstraintsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPipesPipeTargetParametersEcsTaskParametersPlacementConstraintsOutputReference {
    return new DataAwsccPipesPipeTargetParametersEcsTaskParametersPlacementConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccPipesPipeTargetParametersEcsTaskParametersPlacementStrategy {
}

export function dataAwsccPipesPipeTargetParametersEcsTaskParametersPlacementStrategyToTerraform(struct?: DataAwsccPipesPipeTargetParametersEcsTaskParametersPlacementStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersEcsTaskParametersPlacementStrategyToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersEcsTaskParametersPlacementStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersEcsTaskParametersPlacementStrategyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPipesPipeTargetParametersEcsTaskParametersPlacementStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersEcsTaskParametersPlacementStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccPipesPipeTargetParametersEcsTaskParametersPlacementStrategyList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPipesPipeTargetParametersEcsTaskParametersPlacementStrategyOutputReference {
    return new DataAwsccPipesPipeTargetParametersEcsTaskParametersPlacementStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccPipesPipeTargetParametersEcsTaskParametersTags {
}

export function dataAwsccPipesPipeTargetParametersEcsTaskParametersTagsToTerraform(struct?: DataAwsccPipesPipeTargetParametersEcsTaskParametersTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersEcsTaskParametersTagsToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersEcsTaskParametersTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersEcsTaskParametersTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPipesPipeTargetParametersEcsTaskParametersTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersEcsTaskParametersTags | undefined) {
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

export class DataAwsccPipesPipeTargetParametersEcsTaskParametersTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPipesPipeTargetParametersEcsTaskParametersTagsOutputReference {
    return new DataAwsccPipesPipeTargetParametersEcsTaskParametersTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccPipesPipeTargetParametersEcsTaskParameters {
}

export function dataAwsccPipesPipeTargetParametersEcsTaskParametersToTerraform(struct?: DataAwsccPipesPipeTargetParametersEcsTaskParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersEcsTaskParametersToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersEcsTaskParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersEcsTaskParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeTargetParametersEcsTaskParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersEcsTaskParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_provider_strategy - computed: true, optional: false, required: false
  private _capacityProviderStrategy = new DataAwsccPipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategyList(this, "capacity_provider_strategy", false);
  public get capacityProviderStrategy() {
    return this._capacityProviderStrategy;
  }

  // enable_ecs_managed_tags - computed: true, optional: false, required: false
  public get enableEcsManagedTags() {
    return this.getBooleanAttribute('enable_ecs_managed_tags');
  }

  // enable_execute_command - computed: true, optional: false, required: false
  public get enableExecuteCommand() {
    return this.getBooleanAttribute('enable_execute_command');
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // launch_type - computed: true, optional: false, required: false
  public get launchType() {
    return this.getStringAttribute('launch_type');
  }

  // network_configuration - computed: true, optional: false, required: false
  private _networkConfiguration = new DataAwsccPipesPipeTargetParametersEcsTaskParametersNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }

  // overrides - computed: true, optional: false, required: false
  private _overrides = new DataAwsccPipesPipeTargetParametersEcsTaskParametersOverridesOutputReference(this, "overrides");
  public get overrides() {
    return this._overrides;
  }

  // placement_constraints - computed: true, optional: false, required: false
  private _placementConstraints = new DataAwsccPipesPipeTargetParametersEcsTaskParametersPlacementConstraintsList(this, "placement_constraints", false);
  public get placementConstraints() {
    return this._placementConstraints;
  }

  // placement_strategy - computed: true, optional: false, required: false
  private _placementStrategy = new DataAwsccPipesPipeTargetParametersEcsTaskParametersPlacementStrategyList(this, "placement_strategy", false);
  public get placementStrategy() {
    return this._placementStrategy;
  }

  // platform_version - computed: true, optional: false, required: false
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }

  // propagate_tags - computed: true, optional: false, required: false
  public get propagateTags() {
    return this.getStringAttribute('propagate_tags');
  }

  // reference_id - computed: true, optional: false, required: false
  public get referenceId() {
    return this.getStringAttribute('reference_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccPipesPipeTargetParametersEcsTaskParametersTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // task_count - computed: true, optional: false, required: false
  public get taskCount() {
    return this.getNumberAttribute('task_count');
  }

  // task_definition_arn - computed: true, optional: false, required: false
  public get taskDefinitionArn() {
    return this.getStringAttribute('task_definition_arn');
  }
}
export interface DataAwsccPipesPipeTargetParametersEventBridgeEventBusParameters {
}

export function dataAwsccPipesPipeTargetParametersEventBridgeEventBusParametersToTerraform(struct?: DataAwsccPipesPipeTargetParametersEventBridgeEventBusParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersEventBridgeEventBusParametersToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersEventBridgeEventBusParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersEventBridgeEventBusParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeTargetParametersEventBridgeEventBusParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersEventBridgeEventBusParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // detail_type - computed: true, optional: false, required: false
  public get detailType() {
    return this.getStringAttribute('detail_type');
  }

  // endpoint_id - computed: true, optional: false, required: false
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    return this.getListAttribute('resources');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }
}
export interface DataAwsccPipesPipeTargetParametersHttpParameters {
}

export function dataAwsccPipesPipeTargetParametersHttpParametersToTerraform(struct?: DataAwsccPipesPipeTargetParametersHttpParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersHttpParametersToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersHttpParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersHttpParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeTargetParametersHttpParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersHttpParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // header_parameters - computed: true, optional: false, required: false
  private _headerParameters = new cdktn.StringMap(this, "header_parameters");
  public get headerParameters() {
    return this._headerParameters;
  }

  // path_parameter_values - computed: true, optional: false, required: false
  public get pathParameterValues() {
    return this.getListAttribute('path_parameter_values');
  }

  // query_string_parameters - computed: true, optional: false, required: false
  private _queryStringParameters = new cdktn.StringMap(this, "query_string_parameters");
  public get queryStringParameters() {
    return this._queryStringParameters;
  }
}
export interface DataAwsccPipesPipeTargetParametersKinesisStreamParameters {
}

export function dataAwsccPipesPipeTargetParametersKinesisStreamParametersToTerraform(struct?: DataAwsccPipesPipeTargetParametersKinesisStreamParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersKinesisStreamParametersToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersKinesisStreamParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersKinesisStreamParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeTargetParametersKinesisStreamParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersKinesisStreamParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // partition_key - computed: true, optional: false, required: false
  public get partitionKey() {
    return this.getStringAttribute('partition_key');
  }
}
export interface DataAwsccPipesPipeTargetParametersLambdaFunctionParameters {
}

export function dataAwsccPipesPipeTargetParametersLambdaFunctionParametersToTerraform(struct?: DataAwsccPipesPipeTargetParametersLambdaFunctionParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersLambdaFunctionParametersToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersLambdaFunctionParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersLambdaFunctionParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeTargetParametersLambdaFunctionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersLambdaFunctionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // invocation_type - computed: true, optional: false, required: false
  public get invocationType() {
    return this.getStringAttribute('invocation_type');
  }
}
export interface DataAwsccPipesPipeTargetParametersRedshiftDataParameters {
}

export function dataAwsccPipesPipeTargetParametersRedshiftDataParametersToTerraform(struct?: DataAwsccPipesPipeTargetParametersRedshiftDataParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersRedshiftDataParametersToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersRedshiftDataParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersRedshiftDataParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeTargetParametersRedshiftDataParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersRedshiftDataParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // db_user - computed: true, optional: false, required: false
  public get dbUser() {
    return this.getStringAttribute('db_user');
  }

  // secret_manager_arn - computed: true, optional: false, required: false
  public get secretManagerArn() {
    return this.getStringAttribute('secret_manager_arn');
  }

  // sqls - computed: true, optional: false, required: false
  public get sqls() {
    return this.getListAttribute('sqls');
  }

  // statement_name - computed: true, optional: false, required: false
  public get statementName() {
    return this.getStringAttribute('statement_name');
  }

  // with_event - computed: true, optional: false, required: false
  public get withEvent() {
    return this.getBooleanAttribute('with_event');
  }
}
export interface DataAwsccPipesPipeTargetParametersSageMakerPipelineParametersPipelineParameterListStruct {
}

export function dataAwsccPipesPipeTargetParametersSageMakerPipelineParametersPipelineParameterListStructToTerraform(struct?: DataAwsccPipesPipeTargetParametersSageMakerPipelineParametersPipelineParameterListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersSageMakerPipelineParametersPipelineParameterListStructToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersSageMakerPipelineParametersPipelineParameterListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersSageMakerPipelineParametersPipelineParameterListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPipesPipeTargetParametersSageMakerPipelineParametersPipelineParameterListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersSageMakerPipelineParametersPipelineParameterListStruct | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccPipesPipeTargetParametersSageMakerPipelineParametersPipelineParameterListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPipesPipeTargetParametersSageMakerPipelineParametersPipelineParameterListStructOutputReference {
    return new DataAwsccPipesPipeTargetParametersSageMakerPipelineParametersPipelineParameterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccPipesPipeTargetParametersSageMakerPipelineParameters {
}

export function dataAwsccPipesPipeTargetParametersSageMakerPipelineParametersToTerraform(struct?: DataAwsccPipesPipeTargetParametersSageMakerPipelineParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersSageMakerPipelineParametersToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersSageMakerPipelineParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersSageMakerPipelineParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeTargetParametersSageMakerPipelineParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersSageMakerPipelineParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pipeline_parameter_list - computed: true, optional: false, required: false
  private _pipelineParameterList = new DataAwsccPipesPipeTargetParametersSageMakerPipelineParametersPipelineParameterListStructList(this, "pipeline_parameter_list", false);
  public get pipelineParameterList() {
    return this._pipelineParameterList;
  }
}
export interface DataAwsccPipesPipeTargetParametersSqsQueueParameters {
}

export function dataAwsccPipesPipeTargetParametersSqsQueueParametersToTerraform(struct?: DataAwsccPipesPipeTargetParametersSqsQueueParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersSqsQueueParametersToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersSqsQueueParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersSqsQueueParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeTargetParametersSqsQueueParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersSqsQueueParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message_deduplication_id - computed: true, optional: false, required: false
  public get messageDeduplicationId() {
    return this.getStringAttribute('message_deduplication_id');
  }

  // message_group_id - computed: true, optional: false, required: false
  public get messageGroupId() {
    return this.getStringAttribute('message_group_id');
  }
}
export interface DataAwsccPipesPipeTargetParametersStepFunctionStateMachineParameters {
}

export function dataAwsccPipesPipeTargetParametersStepFunctionStateMachineParametersToTerraform(struct?: DataAwsccPipesPipeTargetParametersStepFunctionStateMachineParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersStepFunctionStateMachineParametersToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersStepFunctionStateMachineParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersStepFunctionStateMachineParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeTargetParametersStepFunctionStateMachineParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersStepFunctionStateMachineParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // invocation_type - computed: true, optional: false, required: false
  public get invocationType() {
    return this.getStringAttribute('invocation_type');
  }
}
export interface DataAwsccPipesPipeTargetParametersTimestreamParametersDimensionMappings {
}

export function dataAwsccPipesPipeTargetParametersTimestreamParametersDimensionMappingsToTerraform(struct?: DataAwsccPipesPipeTargetParametersTimestreamParametersDimensionMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersTimestreamParametersDimensionMappingsToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersTimestreamParametersDimensionMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersTimestreamParametersDimensionMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPipesPipeTargetParametersTimestreamParametersDimensionMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersTimestreamParametersDimensionMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_name - computed: true, optional: false, required: false
  public get dimensionName() {
    return this.getStringAttribute('dimension_name');
  }

  // dimension_value - computed: true, optional: false, required: false
  public get dimensionValue() {
    return this.getStringAttribute('dimension_value');
  }

  // dimension_value_type - computed: true, optional: false, required: false
  public get dimensionValueType() {
    return this.getStringAttribute('dimension_value_type');
  }
}

export class DataAwsccPipesPipeTargetParametersTimestreamParametersDimensionMappingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPipesPipeTargetParametersTimestreamParametersDimensionMappingsOutputReference {
    return new DataAwsccPipesPipeTargetParametersTimestreamParametersDimensionMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccPipesPipeTargetParametersTimestreamParametersMultiMeasureMappingsMultiMeasureAttributeMappings {
}

export function dataAwsccPipesPipeTargetParametersTimestreamParametersMultiMeasureMappingsMultiMeasureAttributeMappingsToTerraform(struct?: DataAwsccPipesPipeTargetParametersTimestreamParametersMultiMeasureMappingsMultiMeasureAttributeMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersTimestreamParametersMultiMeasureMappingsMultiMeasureAttributeMappingsToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersTimestreamParametersMultiMeasureMappingsMultiMeasureAttributeMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersTimestreamParametersMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPipesPipeTargetParametersTimestreamParametersMultiMeasureMappingsMultiMeasureAttributeMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersTimestreamParametersMultiMeasureMappingsMultiMeasureAttributeMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // measure_value - computed: true, optional: false, required: false
  public get measureValue() {
    return this.getStringAttribute('measure_value');
  }

  // measure_value_type - computed: true, optional: false, required: false
  public get measureValueType() {
    return this.getStringAttribute('measure_value_type');
  }

  // multi_measure_attribute_name - computed: true, optional: false, required: false
  public get multiMeasureAttributeName() {
    return this.getStringAttribute('multi_measure_attribute_name');
  }
}

export class DataAwsccPipesPipeTargetParametersTimestreamParametersMultiMeasureMappingsMultiMeasureAttributeMappingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPipesPipeTargetParametersTimestreamParametersMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference {
    return new DataAwsccPipesPipeTargetParametersTimestreamParametersMultiMeasureMappingsMultiMeasureAttributeMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccPipesPipeTargetParametersTimestreamParametersMultiMeasureMappings {
}

export function dataAwsccPipesPipeTargetParametersTimestreamParametersMultiMeasureMappingsToTerraform(struct?: DataAwsccPipesPipeTargetParametersTimestreamParametersMultiMeasureMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersTimestreamParametersMultiMeasureMappingsToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersTimestreamParametersMultiMeasureMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersTimestreamParametersMultiMeasureMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPipesPipeTargetParametersTimestreamParametersMultiMeasureMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersTimestreamParametersMultiMeasureMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // multi_measure_attribute_mappings - computed: true, optional: false, required: false
  private _multiMeasureAttributeMappings = new DataAwsccPipesPipeTargetParametersTimestreamParametersMultiMeasureMappingsMultiMeasureAttributeMappingsList(this, "multi_measure_attribute_mappings", false);
  public get multiMeasureAttributeMappings() {
    return this._multiMeasureAttributeMappings;
  }

  // multi_measure_name - computed: true, optional: false, required: false
  public get multiMeasureName() {
    return this.getStringAttribute('multi_measure_name');
  }
}

export class DataAwsccPipesPipeTargetParametersTimestreamParametersMultiMeasureMappingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPipesPipeTargetParametersTimestreamParametersMultiMeasureMappingsOutputReference {
    return new DataAwsccPipesPipeTargetParametersTimestreamParametersMultiMeasureMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccPipesPipeTargetParametersTimestreamParametersSingleMeasureMappings {
}

export function dataAwsccPipesPipeTargetParametersTimestreamParametersSingleMeasureMappingsToTerraform(struct?: DataAwsccPipesPipeTargetParametersTimestreamParametersSingleMeasureMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersTimestreamParametersSingleMeasureMappingsToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersTimestreamParametersSingleMeasureMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersTimestreamParametersSingleMeasureMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPipesPipeTargetParametersTimestreamParametersSingleMeasureMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersTimestreamParametersSingleMeasureMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // measure_name - computed: true, optional: false, required: false
  public get measureName() {
    return this.getStringAttribute('measure_name');
  }

  // measure_value - computed: true, optional: false, required: false
  public get measureValue() {
    return this.getStringAttribute('measure_value');
  }

  // measure_value_type - computed: true, optional: false, required: false
  public get measureValueType() {
    return this.getStringAttribute('measure_value_type');
  }
}

export class DataAwsccPipesPipeTargetParametersTimestreamParametersSingleMeasureMappingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPipesPipeTargetParametersTimestreamParametersSingleMeasureMappingsOutputReference {
    return new DataAwsccPipesPipeTargetParametersTimestreamParametersSingleMeasureMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccPipesPipeTargetParametersTimestreamParameters {
}

export function dataAwsccPipesPipeTargetParametersTimestreamParametersToTerraform(struct?: DataAwsccPipesPipeTargetParametersTimestreamParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersTimestreamParametersToHclTerraform(struct?: DataAwsccPipesPipeTargetParametersTimestreamParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersTimestreamParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeTargetParametersTimestreamParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParametersTimestreamParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_mappings - computed: true, optional: false, required: false
  private _dimensionMappings = new DataAwsccPipesPipeTargetParametersTimestreamParametersDimensionMappingsList(this, "dimension_mappings", false);
  public get dimensionMappings() {
    return this._dimensionMappings;
  }

  // epoch_time_unit - computed: true, optional: false, required: false
  public get epochTimeUnit() {
    return this.getStringAttribute('epoch_time_unit');
  }

  // multi_measure_mappings - computed: true, optional: false, required: false
  private _multiMeasureMappings = new DataAwsccPipesPipeTargetParametersTimestreamParametersMultiMeasureMappingsList(this, "multi_measure_mappings", false);
  public get multiMeasureMappings() {
    return this._multiMeasureMappings;
  }

  // single_measure_mappings - computed: true, optional: false, required: false
  private _singleMeasureMappings = new DataAwsccPipesPipeTargetParametersTimestreamParametersSingleMeasureMappingsList(this, "single_measure_mappings", false);
  public get singleMeasureMappings() {
    return this._singleMeasureMappings;
  }

  // time_field_type - computed: true, optional: false, required: false
  public get timeFieldType() {
    return this.getStringAttribute('time_field_type');
  }

  // time_value - computed: true, optional: false, required: false
  public get timeValue() {
    return this.getStringAttribute('time_value');
  }

  // timestamp_format - computed: true, optional: false, required: false
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }

  // version_value - computed: true, optional: false, required: false
  public get versionValue() {
    return this.getStringAttribute('version_value');
  }
}
export interface DataAwsccPipesPipeTargetParameters {
}

export function dataAwsccPipesPipeTargetParametersToTerraform(struct?: DataAwsccPipesPipeTargetParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPipesPipeTargetParametersToHclTerraform(struct?: DataAwsccPipesPipeTargetParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPipesPipeTargetParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPipesPipeTargetParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPipesPipeTargetParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_job_parameters - computed: true, optional: false, required: false
  private _batchJobParameters = new DataAwsccPipesPipeTargetParametersBatchJobParametersOutputReference(this, "batch_job_parameters");
  public get batchJobParameters() {
    return this._batchJobParameters;
  }

  // cloudwatch_logs_parameters - computed: true, optional: false, required: false
  private _cloudwatchLogsParameters = new DataAwsccPipesPipeTargetParametersCloudwatchLogsParametersOutputReference(this, "cloudwatch_logs_parameters");
  public get cloudwatchLogsParameters() {
    return this._cloudwatchLogsParameters;
  }

  // ecs_task_parameters - computed: true, optional: false, required: false
  private _ecsTaskParameters = new DataAwsccPipesPipeTargetParametersEcsTaskParametersOutputReference(this, "ecs_task_parameters");
  public get ecsTaskParameters() {
    return this._ecsTaskParameters;
  }

  // event_bridge_event_bus_parameters - computed: true, optional: false, required: false
  private _eventBridgeEventBusParameters = new DataAwsccPipesPipeTargetParametersEventBridgeEventBusParametersOutputReference(this, "event_bridge_event_bus_parameters");
  public get eventBridgeEventBusParameters() {
    return this._eventBridgeEventBusParameters;
  }

  // http_parameters - computed: true, optional: false, required: false
  private _httpParameters = new DataAwsccPipesPipeTargetParametersHttpParametersOutputReference(this, "http_parameters");
  public get httpParameters() {
    return this._httpParameters;
  }

  // input_template - computed: true, optional: false, required: false
  public get inputTemplate() {
    return this.getStringAttribute('input_template');
  }

  // kinesis_stream_parameters - computed: true, optional: false, required: false
  private _kinesisStreamParameters = new DataAwsccPipesPipeTargetParametersKinesisStreamParametersOutputReference(this, "kinesis_stream_parameters");
  public get kinesisStreamParameters() {
    return this._kinesisStreamParameters;
  }

  // lambda_function_parameters - computed: true, optional: false, required: false
  private _lambdaFunctionParameters = new DataAwsccPipesPipeTargetParametersLambdaFunctionParametersOutputReference(this, "lambda_function_parameters");
  public get lambdaFunctionParameters() {
    return this._lambdaFunctionParameters;
  }

  // redshift_data_parameters - computed: true, optional: false, required: false
  private _redshiftDataParameters = new DataAwsccPipesPipeTargetParametersRedshiftDataParametersOutputReference(this, "redshift_data_parameters");
  public get redshiftDataParameters() {
    return this._redshiftDataParameters;
  }

  // sage_maker_pipeline_parameters - computed: true, optional: false, required: false
  private _sageMakerPipelineParameters = new DataAwsccPipesPipeTargetParametersSageMakerPipelineParametersOutputReference(this, "sage_maker_pipeline_parameters");
  public get sageMakerPipelineParameters() {
    return this._sageMakerPipelineParameters;
  }

  // sqs_queue_parameters - computed: true, optional: false, required: false
  private _sqsQueueParameters = new DataAwsccPipesPipeTargetParametersSqsQueueParametersOutputReference(this, "sqs_queue_parameters");
  public get sqsQueueParameters() {
    return this._sqsQueueParameters;
  }

  // step_function_state_machine_parameters - computed: true, optional: false, required: false
  private _stepFunctionStateMachineParameters = new DataAwsccPipesPipeTargetParametersStepFunctionStateMachineParametersOutputReference(this, "step_function_state_machine_parameters");
  public get stepFunctionStateMachineParameters() {
    return this._stepFunctionStateMachineParameters;
  }

  // timestream_parameters - computed: true, optional: false, required: false
  private _timestreamParameters = new DataAwsccPipesPipeTargetParametersTimestreamParametersOutputReference(this, "timestream_parameters");
  public get timestreamParameters() {
    return this._timestreamParameters;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/pipes_pipe awscc_pipes_pipe}
*/
export class DataAwsccPipesPipe extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_pipes_pipe";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccPipesPipe resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccPipesPipe to import
  * @param importFromId The id of the existing DataAwsccPipesPipe that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/pipes_pipe#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccPipesPipe to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_pipes_pipe", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/pipes_pipe awscc_pipes_pipe} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccPipesPipeConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccPipesPipeConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_pipes_pipe',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.91.0'
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // current_state - computed: true, optional: false, required: false
  public get currentState() {
    return this.getStringAttribute('current_state');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // desired_state - computed: true, optional: false, required: false
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }

  // enrichment - computed: true, optional: false, required: false
  public get enrichment() {
    return this.getStringAttribute('enrichment');
  }

  // enrichment_parameters - computed: true, optional: false, required: false
  private _enrichmentParameters = new DataAwsccPipesPipeEnrichmentParametersOutputReference(this, "enrichment_parameters");
  public get enrichmentParameters() {
    return this._enrichmentParameters;
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

  // kms_key_identifier - computed: true, optional: false, required: false
  public get kmsKeyIdentifier() {
    return this.getStringAttribute('kms_key_identifier');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // log_configuration - computed: true, optional: false, required: false
  private _logConfiguration = new DataAwsccPipesPipeLogConfigurationOutputReference(this, "log_configuration");
  public get logConfiguration() {
    return this._logConfiguration;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // source_parameters - computed: true, optional: false, required: false
  private _sourceParameters = new DataAwsccPipesPipeSourceParametersOutputReference(this, "source_parameters");
  public get sourceParameters() {
    return this._sourceParameters;
  }

  // state_reason - computed: true, optional: false, required: false
  public get stateReason() {
    return this.getStringAttribute('state_reason');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }

  // target_parameters - computed: true, optional: false, required: false
  private _targetParameters = new DataAwsccPipesPipeTargetParametersOutputReference(this, "target_parameters");
  public get targetParameters() {
    return this._targetParameters;
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
