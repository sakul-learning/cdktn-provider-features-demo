// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iot_topic_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccIotTopicRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iot_topic_rule#id DataAwsccIotTopicRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccIotTopicRuleTags {
}

export function dataAwsccIotTopicRuleTagsToTerraform(struct?: DataAwsccIotTopicRuleTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTagsToHclTerraform(struct?: DataAwsccIotTopicRuleTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotTopicRuleTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTags | undefined) {
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

export class DataAwsccIotTopicRuleTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotTopicRuleTagsOutputReference {
    return new DataAwsccIotTopicRuleTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchAlarm {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchAlarmToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchAlarm): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchAlarmToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchAlarm): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchAlarmOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchAlarm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchAlarm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_name - computed: true, optional: false, required: false
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // state_reason - computed: true, optional: false, required: false
  public get stateReason() {
    return this.getStringAttribute('state_reason');
  }

  // state_value - computed: true, optional: false, required: false
  public get stateValue() {
    return this.getStringAttribute('state_value');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchLogs {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchLogsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchLogsToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_mode - computed: true, optional: false, required: false
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchMetric {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchMetricToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchMetricToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // metric_namespace - computed: true, optional: false, required: false
  public get metricNamespace() {
    return this.getStringAttribute('metric_namespace');
  }

  // metric_timestamp - computed: true, optional: false, required: false
  public get metricTimestamp() {
    return this.getStringAttribute('metric_timestamp');
  }

  // metric_unit - computed: true, optional: false, required: false
  public get metricUnit() {
    return this.getStringAttribute('metric_unit');
  }

  // metric_value - computed: true, optional: false, required: false
  public get metricValue() {
    return this.getStringAttribute('metric_value');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItem {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItemToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItem): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItemToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItem): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItemOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2 {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2ToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2ToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // put_item - computed: true, optional: false, required: false
  private _putItem = new DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItemOutputReference(this, "put_item");
  public get putItem() {
    return this._putItem;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDb {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDbToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDb): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDbToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDb): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDbOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hash_key_field - computed: true, optional: false, required: false
  public get hashKeyField() {
    return this.getStringAttribute('hash_key_field');
  }

  // hash_key_type - computed: true, optional: false, required: false
  public get hashKeyType() {
    return this.getStringAttribute('hash_key_type');
  }

  // hash_key_value - computed: true, optional: false, required: false
  public get hashKeyValue() {
    return this.getStringAttribute('hash_key_value');
  }

  // payload_field - computed: true, optional: false, required: false
  public get payloadField() {
    return this.getStringAttribute('payload_field');
  }

  // range_key_field - computed: true, optional: false, required: false
  public get rangeKeyField() {
    return this.getStringAttribute('range_key_field');
  }

  // range_key_type - computed: true, optional: false, required: false
  public get rangeKeyType() {
    return this.getStringAttribute('range_key_type');
  }

  // range_key_value - computed: true, optional: false, required: false
  public get rangeKeyValue() {
    return this.getStringAttribute('range_key_value');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsElasticsearch {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsElasticsearchToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsElasticsearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsElasticsearchToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsElasticsearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsElasticsearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsElasticsearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsElasticsearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getStringAttribute('index');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsFirehose {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsFirehoseToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsFirehose): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsFirehoseToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsFirehose): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsFirehoseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsFirehose | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsFirehose | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_mode - computed: true, optional: false, required: false
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }

  // delivery_stream_name - computed: true, optional: false, required: false
  public get deliveryStreamName() {
    return this.getStringAttribute('delivery_stream_name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // separator - computed: true, optional: false, required: false
  public get separator() {
    return this.getStringAttribute('separator');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthSigv4 {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthSigv4ToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthSigv4): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthSigv4ToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthSigv4): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthSigv4OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthSigv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthSigv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // signing_region - computed: true, optional: false, required: false
  public get signingRegion() {
    return this.getStringAttribute('signing_region');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuth {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sigv_4 - computed: true, optional: false, required: false
  private _sigv4 = new DataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthSigv4OutputReference(this, "sigv_4");
  public get sigv4() {
    return this._sigv4;
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsHttpBatchConfig {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsHttpBatchConfigToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsHttpBatchConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsHttpBatchConfigToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsHttpBatchConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsHttpBatchConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsHttpBatchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsHttpBatchConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_across_topics - computed: true, optional: false, required: false
  public get batchAcrossTopics() {
    return this.getBooleanAttribute('batch_across_topics');
  }

  // max_batch_open_ms - computed: true, optional: false, required: false
  public get maxBatchOpenMs() {
    return this.getNumberAttribute('max_batch_open_ms');
  }

  // max_batch_size - computed: true, optional: false, required: false
  public get maxBatchSize() {
    return this.getNumberAttribute('max_batch_size');
  }

  // max_batch_size_bytes - computed: true, optional: false, required: false
  public get maxBatchSizeBytes() {
    return this.getNumberAttribute('max_batch_size_bytes');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsHttpHeaders {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsHttpHeadersToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsHttpHeaders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsHttpHeadersToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsHttpHeaders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsHttpHeadersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsHttpHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsHttpHeaders | undefined) {
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

export class DataAwsccIotTopicRuleTopicRulePayloadActionsHttpHeadersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotTopicRuleTopicRulePayloadActionsHttpHeadersOutputReference {
    return new DataAwsccIotTopicRuleTopicRulePayloadActionsHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsHttp {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsHttpToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsHttp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsHttpToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsHttp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsHttpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth - computed: true, optional: false, required: false
  private _auth = new DataAwsccIotTopicRuleTopicRulePayloadActionsHttpAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }

  // batch_config - computed: true, optional: false, required: false
  private _batchConfig = new DataAwsccIotTopicRuleTopicRulePayloadActionsHttpBatchConfigOutputReference(this, "batch_config");
  public get batchConfig() {
    return this._batchConfig;
  }

  // confirmation_url - computed: true, optional: false, required: false
  public get confirmationUrl() {
    return this.getStringAttribute('confirmation_url');
  }

  // enable_batching - computed: true, optional: false, required: false
  public get enableBatching() {
    return this.getBooleanAttribute('enable_batching');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new DataAwsccIotTopicRuleTopicRulePayloadActionsHttpHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsIotAnalytics {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsIotAnalyticsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsIotAnalytics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsIotAnalyticsToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsIotAnalytics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsIotAnalyticsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsIotAnalytics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsIotAnalytics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_mode - computed: true, optional: false, required: false
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }

  // channel_name - computed: true, optional: false, required: false
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsIotEvents {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsIotEventsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsIotEvents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsIotEventsToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsIotEvents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsIotEventsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsIotEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsIotEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_mode - computed: true, optional: false, required: false
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }

  // input_name - computed: true, optional: false, required: false
  public get inputName() {
    return this.getStringAttribute('input_name');
  }

  // message_id - computed: true, optional: false, required: false
  public get messageId() {
    return this.getStringAttribute('message_id');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // offset_in_nanos - computed: true, optional: false, required: false
  public get offsetInNanos() {
    return this.getStringAttribute('offset_in_nanos');
  }

  // time_in_seconds - computed: true, optional: false, required: false
  public get timeInSeconds() {
    return this.getStringAttribute('time_in_seconds');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boolean_value - computed: true, optional: false, required: false
  public get booleanValue() {
    return this.getStringAttribute('boolean_value');
  }

  // double_value - computed: true, optional: false, required: false
  public get doubleValue() {
    return this.getStringAttribute('double_value');
  }

  // integer_value - computed: true, optional: false, required: false
  public get integerValue() {
    return this.getStringAttribute('integer_value');
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValues {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // quality - computed: true, optional: false, required: false
  public get quality() {
    return this.getStringAttribute('quality');
  }

  // timestamp - computed: true, optional: false, required: false
  private _timestamp = new DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampOutputReference(this, "timestamp");
  public get timestamp() {
    return this._timestamp;
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesOutputReference {
    return new DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntries {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntries): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntries): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asset_id - computed: true, optional: false, required: false
  public get assetId() {
    return this.getStringAttribute('asset_id');
  }

  // entry_id - computed: true, optional: false, required: false
  public get entryId() {
    return this.getStringAttribute('entry_id');
  }

  // property_alias - computed: true, optional: false, required: false
  public get propertyAlias() {
    return this.getStringAttribute('property_alias');
  }

  // property_id - computed: true, optional: false, required: false
  public get propertyId() {
    return this.getStringAttribute('property_id');
  }

  // property_values - computed: true, optional: false, required: false
  private _propertyValues = new DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesList(this, "property_values", false);
  public get propertyValues() {
    return this._propertyValues;
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesOutputReference {
    return new DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWise {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWiseToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWise): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWiseToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWise): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWiseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // put_asset_property_value_entries - computed: true, optional: false, required: false
  private _putAssetPropertyValueEntries = new DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesList(this, "put_asset_property_value_entries", false);
  public get putAssetPropertyValueEntries() {
    return this._putAssetPropertyValueEntries;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsKafkaHeaders {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsKafkaHeadersToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsKafkaHeaders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsKafkaHeadersToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsKafkaHeaders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsKafkaHeadersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsKafkaHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsKafkaHeaders | undefined) {
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

export class DataAwsccIotTopicRuleTopicRulePayloadActionsKafkaHeadersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotTopicRuleTopicRulePayloadActionsKafkaHeadersOutputReference {
    return new DataAwsccIotTopicRuleTopicRulePayloadActionsKafkaHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsKafka {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsKafkaToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsKafka): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsKafkaToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsKafka): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsKafkaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsKafka | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsKafka | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_properties - computed: true, optional: false, required: false
  private _clientProperties = new cdktn.StringMap(this, "client_properties");
  public get clientProperties() {
    return this._clientProperties;
  }

  // destination_arn - computed: true, optional: false, required: false
  public get destinationArn() {
    return this.getStringAttribute('destination_arn');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new DataAwsccIotTopicRuleTopicRulePayloadActionsKafkaHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // partition - computed: true, optional: false, required: false
  public get partition() {
    return this.getStringAttribute('partition');
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsKinesis {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsKinesisToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsKinesis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsKinesisToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsKinesis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsKinesisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsKinesis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsKinesis | undefined) {
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

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // stream_name - computed: true, optional: false, required: false
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsLambda {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsLambdaToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsLambda): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsLambdaToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsLambda): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsLambdaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsLambda | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsLambda | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // function_arn - computed: true, optional: false, required: false
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsLocationTimestamp {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsLocationTimestampToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsLocationTimestamp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsLocationTimestampToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsLocationTimestamp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsLocationTimestampOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsLocationTimestamp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsLocationTimestamp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsLocation {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsLocationToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsLocationToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }

  // latitude - computed: true, optional: false, required: false
  public get latitude() {
    return this.getStringAttribute('latitude');
  }

  // longitude - computed: true, optional: false, required: false
  public get longitude() {
    return this.getStringAttribute('longitude');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // timestamp - computed: true, optional: false, required: false
  private _timestamp = new DataAwsccIotTopicRuleTopicRulePayloadActionsLocationTimestampOutputReference(this, "timestamp");
  public get timestamp() {
    return this._timestamp;
  }

  // tracker_name - computed: true, optional: false, required: false
  public get trackerName() {
    return this.getStringAttribute('tracker_name');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsOpenSearch {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsOpenSearchToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsOpenSearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsOpenSearchToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsOpenSearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsOpenSearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsOpenSearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsOpenSearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getStringAttribute('index');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsRepublishHeadersUserProperties {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsRepublishHeadersUserPropertiesToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsRepublishHeadersUserProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsRepublishHeadersUserPropertiesToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsRepublishHeadersUserProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsRepublishHeadersUserPropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsRepublishHeadersUserProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsRepublishHeadersUserProperties | undefined) {
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

export class DataAwsccIotTopicRuleTopicRulePayloadActionsRepublishHeadersUserPropertiesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotTopicRuleTopicRulePayloadActionsRepublishHeadersUserPropertiesOutputReference {
    return new DataAwsccIotTopicRuleTopicRulePayloadActionsRepublishHeadersUserPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsRepublishHeaders {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsRepublishHeadersToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsRepublishHeaders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsRepublishHeadersToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsRepublishHeaders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsRepublishHeadersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsRepublishHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsRepublishHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // correlation_data - computed: true, optional: false, required: false
  public get correlationData() {
    return this.getStringAttribute('correlation_data');
  }

  // message_expiry - computed: true, optional: false, required: false
  public get messageExpiry() {
    return this.getStringAttribute('message_expiry');
  }

  // payload_format_indicator - computed: true, optional: false, required: false
  public get payloadFormatIndicator() {
    return this.getStringAttribute('payload_format_indicator');
  }

  // response_topic - computed: true, optional: false, required: false
  public get responseTopic() {
    return this.getStringAttribute('response_topic');
  }

  // user_properties - computed: true, optional: false, required: false
  private _userProperties = new DataAwsccIotTopicRuleTopicRulePayloadActionsRepublishHeadersUserPropertiesList(this, "user_properties", false);
  public get userProperties() {
    return this._userProperties;
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsRepublish {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsRepublishToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsRepublish): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsRepublishToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsRepublish): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsRepublishOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsRepublish | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsRepublish | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new DataAwsccIotTopicRuleTopicRulePayloadActionsRepublishHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }

  // qos - computed: true, optional: false, required: false
  public get qos() {
    return this.getNumberAttribute('qos');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsS3 {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsS3ToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsS3ToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsS3 | undefined) {
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

  // canned_acl - computed: true, optional: false, required: false
  public get cannedAcl() {
    return this.getStringAttribute('canned_acl');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsSns {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsSnsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsSns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsSnsToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsSns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsSnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsSns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsSns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message_format - computed: true, optional: false, required: false
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // target_arn - computed: true, optional: false, required: false
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsSqs {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsSqsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsSqs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsSqsToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsSqs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsSqsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsSqs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsSqs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // queue_url - computed: true, optional: false, required: false
  public get queueUrl() {
    return this.getStringAttribute('queue_url');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // use_base_64 - computed: true, optional: false, required: false
  public get useBase64() {
    return this.getBooleanAttribute('use_base_64');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsStepFunctions {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsStepFunctionsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsStepFunctions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsStepFunctionsToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsStepFunctions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsStepFunctionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsStepFunctions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsStepFunctions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execution_name_prefix - computed: true, optional: false, required: false
  public get executionNamePrefix() {
    return this.getStringAttribute('execution_name_prefix');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // state_machine_name - computed: true, optional: false, required: false
  public get stateMachineName() {
    return this.getStringAttribute('state_machine_name');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamDimensions {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamDimensionsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamDimensionsToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamDimensions | undefined) {
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

export class DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamDimensionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamDimensionsOutputReference {
    return new DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamTimestamp {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamTimestampToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamTimestamp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamTimestampToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamTimestamp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamTimestampOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamTimestamp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamTimestamp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActionsTimestream {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsTimestream): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActionsTimestream): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActionsTimestream | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActionsTimestream | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // timestamp - computed: true, optional: false, required: false
  private _timestamp = new DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamTimestampOutputReference(this, "timestamp");
  public get timestamp() {
    return this._timestamp;
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadActions {
}

export function dataAwsccIotTopicRuleTopicRulePayloadActionsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadActionsToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_alarm - computed: true, optional: false, required: false
  private _cloudwatchAlarm = new DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchAlarmOutputReference(this, "cloudwatch_alarm");
  public get cloudwatchAlarm() {
    return this._cloudwatchAlarm;
  }

  // cloudwatch_logs - computed: true, optional: false, required: false
  private _cloudwatchLogs = new DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchLogsOutputReference(this, "cloudwatch_logs");
  public get cloudwatchLogs() {
    return this._cloudwatchLogs;
  }

  // cloudwatch_metric - computed: true, optional: false, required: false
  private _cloudwatchMetric = new DataAwsccIotTopicRuleTopicRulePayloadActionsCloudwatchMetricOutputReference(this, "cloudwatch_metric");
  public get cloudwatchMetric() {
    return this._cloudwatchMetric;
  }

  // dynamo_d_bv_2 - computed: true, optional: false, required: false
  private _dynamoDBv2 = new DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDBv2OutputReference(this, "dynamo_d_bv_2");
  public get dynamoDBv2() {
    return this._dynamoDBv2;
  }

  // dynamo_db - computed: true, optional: false, required: false
  private _dynamoDb = new DataAwsccIotTopicRuleTopicRulePayloadActionsDynamoDbOutputReference(this, "dynamo_db");
  public get dynamoDb() {
    return this._dynamoDb;
  }

  // elasticsearch - computed: true, optional: false, required: false
  private _elasticsearch = new DataAwsccIotTopicRuleTopicRulePayloadActionsElasticsearchOutputReference(this, "elasticsearch");
  public get elasticsearch() {
    return this._elasticsearch;
  }

  // firehose - computed: true, optional: false, required: false
  private _firehose = new DataAwsccIotTopicRuleTopicRulePayloadActionsFirehoseOutputReference(this, "firehose");
  public get firehose() {
    return this._firehose;
  }

  // http - computed: true, optional: false, required: false
  private _http = new DataAwsccIotTopicRuleTopicRulePayloadActionsHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }

  // iot_analytics - computed: true, optional: false, required: false
  private _iotAnalytics = new DataAwsccIotTopicRuleTopicRulePayloadActionsIotAnalyticsOutputReference(this, "iot_analytics");
  public get iotAnalytics() {
    return this._iotAnalytics;
  }

  // iot_events - computed: true, optional: false, required: false
  private _iotEvents = new DataAwsccIotTopicRuleTopicRulePayloadActionsIotEventsOutputReference(this, "iot_events");
  public get iotEvents() {
    return this._iotEvents;
  }

  // iot_site_wise - computed: true, optional: false, required: false
  private _iotSiteWise = new DataAwsccIotTopicRuleTopicRulePayloadActionsIotSiteWiseOutputReference(this, "iot_site_wise");
  public get iotSiteWise() {
    return this._iotSiteWise;
  }

  // kafka - computed: true, optional: false, required: false
  private _kafka = new DataAwsccIotTopicRuleTopicRulePayloadActionsKafkaOutputReference(this, "kafka");
  public get kafka() {
    return this._kafka;
  }

  // kinesis - computed: true, optional: false, required: false
  private _kinesis = new DataAwsccIotTopicRuleTopicRulePayloadActionsKinesisOutputReference(this, "kinesis");
  public get kinesis() {
    return this._kinesis;
  }

  // lambda - computed: true, optional: false, required: false
  private _lambda = new DataAwsccIotTopicRuleTopicRulePayloadActionsLambdaOutputReference(this, "lambda");
  public get lambda() {
    return this._lambda;
  }

  // location - computed: true, optional: false, required: false
  private _location = new DataAwsccIotTopicRuleTopicRulePayloadActionsLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }

  // open_search - computed: true, optional: false, required: false
  private _openSearch = new DataAwsccIotTopicRuleTopicRulePayloadActionsOpenSearchOutputReference(this, "open_search");
  public get openSearch() {
    return this._openSearch;
  }

  // republish - computed: true, optional: false, required: false
  private _republish = new DataAwsccIotTopicRuleTopicRulePayloadActionsRepublishOutputReference(this, "republish");
  public get republish() {
    return this._republish;
  }

  // s3 - computed: true, optional: false, required: false
  private _s3 = new DataAwsccIotTopicRuleTopicRulePayloadActionsS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }

  // sns - computed: true, optional: false, required: false
  private _sns = new DataAwsccIotTopicRuleTopicRulePayloadActionsSnsOutputReference(this, "sns");
  public get sns() {
    return this._sns;
  }

  // sqs - computed: true, optional: false, required: false
  private _sqs = new DataAwsccIotTopicRuleTopicRulePayloadActionsSqsOutputReference(this, "sqs");
  public get sqs() {
    return this._sqs;
  }

  // step_functions - computed: true, optional: false, required: false
  private _stepFunctions = new DataAwsccIotTopicRuleTopicRulePayloadActionsStepFunctionsOutputReference(this, "step_functions");
  public get stepFunctions() {
    return this._stepFunctions;
  }

  // timestream - computed: true, optional: false, required: false
  private _timestream = new DataAwsccIotTopicRuleTopicRulePayloadActionsTimestreamOutputReference(this, "timestream");
  public get timestream() {
    return this._timestream;
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadActionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotTopicRuleTopicRulePayloadActionsOutputReference {
    return new DataAwsccIotTopicRuleTopicRulePayloadActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarm {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarmToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarm): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarmToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarm): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarmOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_name - computed: true, optional: false, required: false
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // state_reason - computed: true, optional: false, required: false
  public get stateReason() {
    return this.getStringAttribute('state_reason');
  }

  // state_value - computed: true, optional: false, required: false
  public get stateValue() {
    return this.getStringAttribute('state_value');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchLogs {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchLogsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchLogsToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_mode - computed: true, optional: false, required: false
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchMetric {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchMetricToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchMetricToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchMetric): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // metric_namespace - computed: true, optional: false, required: false
  public get metricNamespace() {
    return this.getStringAttribute('metric_namespace');
  }

  // metric_timestamp - computed: true, optional: false, required: false
  public get metricTimestamp() {
    return this.getStringAttribute('metric_timestamp');
  }

  // metric_unit - computed: true, optional: false, required: false
  public get metricUnit() {
    return this.getStringAttribute('metric_unit');
  }

  // metric_value - computed: true, optional: false, required: false
  public get metricValue() {
    return this.getStringAttribute('metric_value');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItem {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItemToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItem): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItemToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItem): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItemOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2 {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2ToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2ToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // put_item - computed: true, optional: false, required: false
  private _putItem = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItemOutputReference(this, "put_item");
  public get putItem() {
    return this._putItem;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDb {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDbToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDb): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDbToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDb): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDbOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hash_key_field - computed: true, optional: false, required: false
  public get hashKeyField() {
    return this.getStringAttribute('hash_key_field');
  }

  // hash_key_type - computed: true, optional: false, required: false
  public get hashKeyType() {
    return this.getStringAttribute('hash_key_type');
  }

  // hash_key_value - computed: true, optional: false, required: false
  public get hashKeyValue() {
    return this.getStringAttribute('hash_key_value');
  }

  // payload_field - computed: true, optional: false, required: false
  public get payloadField() {
    return this.getStringAttribute('payload_field');
  }

  // range_key_field - computed: true, optional: false, required: false
  public get rangeKeyField() {
    return this.getStringAttribute('range_key_field');
  }

  // range_key_type - computed: true, optional: false, required: false
  public get rangeKeyType() {
    return this.getStringAttribute('range_key_type');
  }

  // range_key_value - computed: true, optional: false, required: false
  public get rangeKeyValue() {
    return this.getStringAttribute('range_key_value');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionElasticsearch {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionElasticsearchToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionElasticsearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionElasticsearchToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionElasticsearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionElasticsearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionElasticsearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionElasticsearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getStringAttribute('index');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionFirehose {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionFirehoseToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionFirehose): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionFirehoseToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionFirehose): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionFirehoseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionFirehose | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionFirehose | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_mode - computed: true, optional: false, required: false
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }

  // delivery_stream_name - computed: true, optional: false, required: false
  public get deliveryStreamName() {
    return this.getStringAttribute('delivery_stream_name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // separator - computed: true, optional: false, required: false
  public get separator() {
    return this.getStringAttribute('separator');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4 {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4ToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4ToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // signing_region - computed: true, optional: false, required: false
  public get signingRegion() {
    return this.getStringAttribute('signing_region');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuth {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sigv_4 - computed: true, optional: false, required: false
  private _sigv4 = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4OutputReference(this, "sigv_4");
  public get sigv4() {
    return this._sigv4;
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpBatchConfig {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpBatchConfigToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpBatchConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpBatchConfigToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpBatchConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpBatchConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpBatchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpBatchConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_across_topics - computed: true, optional: false, required: false
  public get batchAcrossTopics() {
    return this.getBooleanAttribute('batch_across_topics');
  }

  // max_batch_open_ms - computed: true, optional: false, required: false
  public get maxBatchOpenMs() {
    return this.getNumberAttribute('max_batch_open_ms');
  }

  // max_batch_size - computed: true, optional: false, required: false
  public get maxBatchSize() {
    return this.getNumberAttribute('max_batch_size');
  }

  // max_batch_size_bytes - computed: true, optional: false, required: false
  public get maxBatchSizeBytes() {
    return this.getNumberAttribute('max_batch_size_bytes');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpHeaders {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpHeadersToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpHeaders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpHeadersToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpHeaders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpHeadersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpHeaders | undefined) {
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

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpHeadersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpHeadersOutputReference {
    return new DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttp {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth - computed: true, optional: false, required: false
  private _auth = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }

  // batch_config - computed: true, optional: false, required: false
  private _batchConfig = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpBatchConfigOutputReference(this, "batch_config");
  public get batchConfig() {
    return this._batchConfig;
  }

  // confirmation_url - computed: true, optional: false, required: false
  public get confirmationUrl() {
    return this.getStringAttribute('confirmation_url');
  }

  // enable_batching - computed: true, optional: false, required: false
  public get enableBatching() {
    return this.getBooleanAttribute('enable_batching');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotAnalytics {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotAnalyticsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotAnalytics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotAnalyticsToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotAnalytics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotAnalyticsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotAnalytics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotAnalytics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_mode - computed: true, optional: false, required: false
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }

  // channel_name - computed: true, optional: false, required: false
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotEvents {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotEventsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotEvents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotEventsToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotEvents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotEventsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_mode - computed: true, optional: false, required: false
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }

  // input_name - computed: true, optional: false, required: false
  public get inputName() {
    return this.getStringAttribute('input_name');
  }

  // message_id - computed: true, optional: false, required: false
  public get messageId() {
    return this.getStringAttribute('message_id');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // offset_in_nanos - computed: true, optional: false, required: false
  public get offsetInNanos() {
    return this.getStringAttribute('offset_in_nanos');
  }

  // time_in_seconds - computed: true, optional: false, required: false
  public get timeInSeconds() {
    return this.getStringAttribute('time_in_seconds');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boolean_value - computed: true, optional: false, required: false
  public get booleanValue() {
    return this.getStringAttribute('boolean_value');
  }

  // double_value - computed: true, optional: false, required: false
  public get doubleValue() {
    return this.getStringAttribute('double_value');
  }

  // integer_value - computed: true, optional: false, required: false
  public get integerValue() {
    return this.getStringAttribute('integer_value');
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValues {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // quality - computed: true, optional: false, required: false
  public get quality() {
    return this.getStringAttribute('quality');
  }

  // timestamp - computed: true, optional: false, required: false
  private _timestamp = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampOutputReference(this, "timestamp");
  public get timestamp() {
    return this._timestamp;
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesOutputReference {
    return new DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntries {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntries): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntries): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asset_id - computed: true, optional: false, required: false
  public get assetId() {
    return this.getStringAttribute('asset_id');
  }

  // entry_id - computed: true, optional: false, required: false
  public get entryId() {
    return this.getStringAttribute('entry_id');
  }

  // property_alias - computed: true, optional: false, required: false
  public get propertyAlias() {
    return this.getStringAttribute('property_alias');
  }

  // property_id - computed: true, optional: false, required: false
  public get propertyId() {
    return this.getStringAttribute('property_id');
  }

  // property_values - computed: true, optional: false, required: false
  private _propertyValues = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesList(this, "property_values", false);
  public get propertyValues() {
    return this._propertyValues;
  }
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesOutputReference {
    return new DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWise {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWiseToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWise): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWiseToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWise): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWiseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // put_asset_property_value_entries - computed: true, optional: false, required: false
  private _putAssetPropertyValueEntries = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesList(this, "put_asset_property_value_entries", false);
  public get putAssetPropertyValueEntries() {
    return this._putAssetPropertyValueEntries;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionKafkaHeaders {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionKafkaHeadersToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionKafkaHeaders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionKafkaHeadersToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionKafkaHeaders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionKafkaHeadersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionKafkaHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionKafkaHeaders | undefined) {
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

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionKafkaHeadersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotTopicRuleTopicRulePayloadErrorActionKafkaHeadersOutputReference {
    return new DataAwsccIotTopicRuleTopicRulePayloadErrorActionKafkaHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionKafka {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionKafkaToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionKafka): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionKafkaToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionKafka): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionKafkaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionKafka | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionKafka | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_properties - computed: true, optional: false, required: false
  private _clientProperties = new cdktn.StringMap(this, "client_properties");
  public get clientProperties() {
    return this._clientProperties;
  }

  // destination_arn - computed: true, optional: false, required: false
  public get destinationArn() {
    return this.getStringAttribute('destination_arn');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionKafkaHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // partition - computed: true, optional: false, required: false
  public get partition() {
    return this.getStringAttribute('partition');
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionKinesis {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionKinesisToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionKinesis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionKinesisToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionKinesis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionKinesisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionKinesis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionKinesis | undefined) {
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

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // stream_name - computed: true, optional: false, required: false
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionLambda {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionLambdaToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionLambda): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionLambdaToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionLambda): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionLambdaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionLambda | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionLambda | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // function_arn - computed: true, optional: false, required: false
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionLocationTimestamp {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionLocationTimestampToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionLocationTimestamp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionLocationTimestampToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionLocationTimestamp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionLocationTimestampOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionLocationTimestamp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionLocationTimestamp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionLocation {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionLocationToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionLocationToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }

  // latitude - computed: true, optional: false, required: false
  public get latitude() {
    return this.getStringAttribute('latitude');
  }

  // longitude - computed: true, optional: false, required: false
  public get longitude() {
    return this.getStringAttribute('longitude');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // timestamp - computed: true, optional: false, required: false
  private _timestamp = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionLocationTimestampOutputReference(this, "timestamp");
  public get timestamp() {
    return this._timestamp;
  }

  // tracker_name - computed: true, optional: false, required: false
  public get trackerName() {
    return this.getStringAttribute('tracker_name');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionOpenSearch {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionOpenSearchToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionOpenSearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionOpenSearchToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionOpenSearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionOpenSearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionOpenSearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionOpenSearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getStringAttribute('index');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishHeadersUserProperties {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishHeadersUserPropertiesToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishHeadersUserProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishHeadersUserPropertiesToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishHeadersUserProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishHeadersUserPropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishHeadersUserProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishHeadersUserProperties | undefined) {
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

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishHeadersUserPropertiesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishHeadersUserPropertiesOutputReference {
    return new DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishHeadersUserPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishHeaders {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishHeadersToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishHeaders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishHeadersToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishHeaders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishHeadersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // correlation_data - computed: true, optional: false, required: false
  public get correlationData() {
    return this.getStringAttribute('correlation_data');
  }

  // message_expiry - computed: true, optional: false, required: false
  public get messageExpiry() {
    return this.getStringAttribute('message_expiry');
  }

  // payload_format_indicator - computed: true, optional: false, required: false
  public get payloadFormatIndicator() {
    return this.getStringAttribute('payload_format_indicator');
  }

  // response_topic - computed: true, optional: false, required: false
  public get responseTopic() {
    return this.getStringAttribute('response_topic');
  }

  // user_properties - computed: true, optional: false, required: false
  private _userProperties = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishHeadersUserPropertiesList(this, "user_properties", false);
  public get userProperties() {
    return this._userProperties;
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublish {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublish): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublish): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublish | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublish | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }

  // qos - computed: true, optional: false, required: false
  public get qos() {
    return this.getNumberAttribute('qos');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionS3 {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionS3ToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionS3ToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionS3 | undefined) {
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

  // canned_acl - computed: true, optional: false, required: false
  public get cannedAcl() {
    return this.getStringAttribute('canned_acl');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionSns {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionSnsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionSns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionSnsToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionSns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionSnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionSns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionSns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message_format - computed: true, optional: false, required: false
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // target_arn - computed: true, optional: false, required: false
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionSqs {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionSqsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionSqs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionSqsToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionSqs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionSqsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionSqs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionSqs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // queue_url - computed: true, optional: false, required: false
  public get queueUrl() {
    return this.getStringAttribute('queue_url');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // use_base_64 - computed: true, optional: false, required: false
  public get useBase64() {
    return this.getBooleanAttribute('use_base_64');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionStepFunctions {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionStepFunctionsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionStepFunctions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionStepFunctionsToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionStepFunctions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionStepFunctionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionStepFunctions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionStepFunctions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execution_name_prefix - computed: true, optional: false, required: false
  public get executionNamePrefix() {
    return this.getStringAttribute('execution_name_prefix');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // state_machine_name - computed: true, optional: false, required: false
  public get stateMachineName() {
    return this.getStringAttribute('state_machine_name');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamDimensions {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamDimensionsToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamDimensionsToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamDimensions | undefined) {
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

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamDimensionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamDimensionsOutputReference {
    return new DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamTimestamp {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamTimestampToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamTimestamp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamTimestampToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamTimestamp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamTimestampOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamTimestamp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamTimestamp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestream {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestream): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestream): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestream | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestream | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // timestamp - computed: true, optional: false, required: false
  private _timestamp = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamTimestampOutputReference(this, "timestamp");
  public get timestamp() {
    return this._timestamp;
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayloadErrorAction {
}

export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadErrorActionToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayloadErrorAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadErrorActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayloadErrorAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayloadErrorAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_alarm - computed: true, optional: false, required: false
  private _cloudwatchAlarm = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarmOutputReference(this, "cloudwatch_alarm");
  public get cloudwatchAlarm() {
    return this._cloudwatchAlarm;
  }

  // cloudwatch_logs - computed: true, optional: false, required: false
  private _cloudwatchLogs = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchLogsOutputReference(this, "cloudwatch_logs");
  public get cloudwatchLogs() {
    return this._cloudwatchLogs;
  }

  // cloudwatch_metric - computed: true, optional: false, required: false
  private _cloudwatchMetric = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionCloudwatchMetricOutputReference(this, "cloudwatch_metric");
  public get cloudwatchMetric() {
    return this._cloudwatchMetric;
  }

  // dynamo_d_bv_2 - computed: true, optional: false, required: false
  private _dynamoDBv2 = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDBv2OutputReference(this, "dynamo_d_bv_2");
  public get dynamoDBv2() {
    return this._dynamoDBv2;
  }

  // dynamo_db - computed: true, optional: false, required: false
  private _dynamoDb = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionDynamoDbOutputReference(this, "dynamo_db");
  public get dynamoDb() {
    return this._dynamoDb;
  }

  // elasticsearch - computed: true, optional: false, required: false
  private _elasticsearch = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionElasticsearchOutputReference(this, "elasticsearch");
  public get elasticsearch() {
    return this._elasticsearch;
  }

  // firehose - computed: true, optional: false, required: false
  private _firehose = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionFirehoseOutputReference(this, "firehose");
  public get firehose() {
    return this._firehose;
  }

  // http - computed: true, optional: false, required: false
  private _http = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }

  // iot_analytics - computed: true, optional: false, required: false
  private _iotAnalytics = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotAnalyticsOutputReference(this, "iot_analytics");
  public get iotAnalytics() {
    return this._iotAnalytics;
  }

  // iot_events - computed: true, optional: false, required: false
  private _iotEvents = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotEventsOutputReference(this, "iot_events");
  public get iotEvents() {
    return this._iotEvents;
  }

  // iot_site_wise - computed: true, optional: false, required: false
  private _iotSiteWise = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionIotSiteWiseOutputReference(this, "iot_site_wise");
  public get iotSiteWise() {
    return this._iotSiteWise;
  }

  // kafka - computed: true, optional: false, required: false
  private _kafka = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionKafkaOutputReference(this, "kafka");
  public get kafka() {
    return this._kafka;
  }

  // kinesis - computed: true, optional: false, required: false
  private _kinesis = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionKinesisOutputReference(this, "kinesis");
  public get kinesis() {
    return this._kinesis;
  }

  // lambda - computed: true, optional: false, required: false
  private _lambda = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionLambdaOutputReference(this, "lambda");
  public get lambda() {
    return this._lambda;
  }

  // location - computed: true, optional: false, required: false
  private _location = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }

  // open_search - computed: true, optional: false, required: false
  private _openSearch = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionOpenSearchOutputReference(this, "open_search");
  public get openSearch() {
    return this._openSearch;
  }

  // republish - computed: true, optional: false, required: false
  private _republish = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionRepublishOutputReference(this, "republish");
  public get republish() {
    return this._republish;
  }

  // s3 - computed: true, optional: false, required: false
  private _s3 = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }

  // sns - computed: true, optional: false, required: false
  private _sns = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionSnsOutputReference(this, "sns");
  public get sns() {
    return this._sns;
  }

  // sqs - computed: true, optional: false, required: false
  private _sqs = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionSqsOutputReference(this, "sqs");
  public get sqs() {
    return this._sqs;
  }

  // step_functions - computed: true, optional: false, required: false
  private _stepFunctions = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionStepFunctionsOutputReference(this, "step_functions");
  public get stepFunctions() {
    return this._stepFunctions;
  }

  // timestream - computed: true, optional: false, required: false
  private _timestream = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionTimestreamOutputReference(this, "timestream");
  public get timestream() {
    return this._timestream;
  }
}
export interface DataAwsccIotTopicRuleTopicRulePayload {
}

export function dataAwsccIotTopicRuleTopicRulePayloadToTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotTopicRuleTopicRulePayloadToHclTerraform(struct?: DataAwsccIotTopicRuleTopicRulePayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotTopicRuleTopicRulePayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotTopicRuleTopicRulePayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotTopicRuleTopicRulePayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataAwsccIotTopicRuleTopicRulePayloadActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // aws_iot_sql_version - computed: true, optional: false, required: false
  public get awsIotSqlVersion() {
    return this.getStringAttribute('aws_iot_sql_version');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // error_action - computed: true, optional: false, required: false
  private _errorAction = new DataAwsccIotTopicRuleTopicRulePayloadErrorActionOutputReference(this, "error_action");
  public get errorAction() {
    return this._errorAction;
  }

  // rule_disabled - computed: true, optional: false, required: false
  public get ruleDisabled() {
    return this.getBooleanAttribute('rule_disabled');
  }

  // sql - computed: true, optional: false, required: false
  public get sql() {
    return this.getStringAttribute('sql');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iot_topic_rule awscc_iot_topic_rule}
*/
export class DataAwsccIotTopicRule extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iot_topic_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccIotTopicRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccIotTopicRule to import
  * @param importFromId The id of the existing DataAwsccIotTopicRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iot_topic_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccIotTopicRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_topic_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iot_topic_rule awscc_iot_topic_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotTopicRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotTopicRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iot_topic_rule',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccIotTopicRuleTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // topic_rule_payload - computed: true, optional: false, required: false
  private _topicRulePayload = new DataAwsccIotTopicRuleTopicRulePayloadOutputReference(this, "topic_rule_payload");
  public get topicRulePayload() {
    return this._topicRulePayload;
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
